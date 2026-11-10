// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IStreamWalletFactory} from "../interfaces/IStreamWalletFactory.sol";

/**
 * @title StreamWallet
 * @notice USDC escrow of one streamer: records donations and subscriptions
 *         paid through the NetworkRouter and lets the streamer withdraw.
 * @dev Deployed via ERC1967 UUPS proxy by StreamWalletFactory.
 *      The protocol config (treasury, platform fee, USDC, swap router) is
 *      read live from `factory` on every call, so a rotation on the factory
 *      reaches every existing wallet at once.
 *
 *      Payments only arrive through the router: it swaps to USDC, sends the
 *      fee to the treasury and the rest here, then calls
 *      `recordDonationByRouter` / `recordSubscriptionByRouter`. The legacy
 *      fan-token paths (`recordSubscription`, `donate`, `donateFor`) were
 *      removed: their hard-coded [token, USDC]
 *      path reverted for every token and their fee swap had no slippage
 *      bound.
 *
 *      Subscriptions are priced on-chain by the streamer:
 *      `subscriptionPrice` USDC buys `subscriptionPeriod` seconds, pro rata.
 */
contract StreamWallet is Initializable, OwnableUpgradeable, UUPSUpgradeable, ReentrancyGuardUpgradeable {

    /*//////////////////////////////////////////////////////////////
                                 STATE
    //////////////////////////////////////////////////////////////*/

    // STORAGE LAYOUT IS APPEND-ONLY: wallets are UUPS proxies upgraded in
    // place. Never reorder, retype or remove a variable below.

    /// @notice Streamer this wallet belongs to.
    address public streamer;                       // slot 0
    /// @dev Slots 1, 3, 4 and 5 (plus the uint16 packed in slot 1) held
    ///      per-wallet copies of the factory config, frozen at initialization.
    ///      Nothing reads or writes them: the getters `treasury()`,
    ///      `platformFeeBps()`, `usdc()` and `swapRouter()` query the factory.
    ///      They stay reserved so upgraded proxies keep the same layout;
    ///      wallets upgraded in place keep their stale values.
    address private __deprecated_treasury;         // slot 1, offset 0
    uint16  private __deprecated_platformFeeBps;   // slot 1, offset 20
    /// @notice Factory that deployed this wallet and provides its configuration.
    address public factory;                        // slot 2
    address private __deprecated_kayenRouter;      // slot 3
    address private __deprecated_usdc;             // slot 4
    address private __deprecated_swapRouter;       // slot 5

    /// @notice Subscription of each subscriber.
    mapping(address => Subscription) public subscriptions;   // slot 6
    /// @notice USDC donated by each donor, fee included.
    mapping(address => uint256) public lifetimeDonations;    // slot 7

    /// @notice USDC received in total, fee included.
    uint256 public totalRevenue;                   // slot 8 — USDC
    /// @notice USDC withdrawn by the streamer.
    uint256 public totalWithdrawn;                 // slot 9 — USDC
    /// @notice Number of distinct subscribers.
    uint256 public totalSubscribers;               // slot 10

    // ─── Streamer pricing and payout (appended) ─────────────────────────────

    /// @notice USDC price of one `subscriptionPeriod` (6 decimals). 0 = the
    ///         streamer has not priced subscriptions: they are refused.
    uint256 public subscriptionPrice;              // slot 11
    /// @notice Length in seconds bought by `subscriptionPrice`.
    uint64  public subscriptionPeriod;             // slot 12, offset 0
    /// @notice Where `withdrawRevenue` sends USDC. 0 = `streamer`.
    address public payoutAddress;                  // slot 12, offset 8

    struct Subscription {
        uint256 amount;      // USDC paid in total
        uint256 startTime;
        uint256 expiryTime;
        bool active;
    }

    /// @notice Shortest allowed `subscriptionPeriod`.
    uint64 public constant MIN_SUBSCRIPTION_PERIOD = 1 days;
    /// @notice Longest allowed `subscriptionPeriod`.
    uint64 public constant MAX_SUBSCRIPTION_PERIOD = 365 days;

    /*//////////////////////////////////////////////////////////////
                                 EVENTS
    //////////////////////////////////////////////////////////////*/

    /// @notice A subscription was paid and its expiry updated.
    event SubscriptionRecorded(
        address indexed subscriber,
        uint256 amount,
        uint256 duration,
        uint256 expiryTime
    );

    /// @notice A donation was recorded.
    event DonationReceived(
        address indexed donor,
        uint256 amount,
        string message,
        uint256 platformFee,
        uint256 streamerAmount
    );

    /// @notice USDC left the wallet towards the payout address.
    event RevenueWithdrawn(address indexed streamer, uint256 amount);

    /// @notice The streamer changed the subscription price.
    event SubscriptionPricingSet(uint256 price, uint64 period);

    /// @notice The streamer changed the withdrawal address.
    event PayoutAddressSet(address indexed oldPayout, address indexed newPayout);

    /*//////////////////////////////////////////////////////////////
                                 ERRORS
    //////////////////////////////////////////////////////////////*/

    error OnlyFactory();
    error OnlyStreamer();
    error OnlyAuthorized();
    error InvalidAmount();
    error InvalidAddress();
    error InvalidDuration();
    error InsufficientBalance();
    error SubscriptionPriceNotSet();
    error InvalidSubscriptionPricing(uint256 price, uint64 period);
    error InsufficientSubscriptionPayment(uint256 required, uint256 paid);

    /*//////////////////////////////////////////////////////////////
                              MODIFIERS
    //////////////////////////////////////////////////////////////*/

    modifier onlyStreamer() {
        _onlyStreamer();
        _;
    }

    modifier onlyAuthorized() {
        _onlyAuthorized();
        _;
    }

    function _onlyStreamer() internal view {
        if (msg.sender != streamer) revert OnlyStreamer();
    }

    function _onlyAuthorized() internal view {
        // swapRouter() is read from the factory, so rotating the router with
        // StreamWalletFactory.setSwapRouter takes effect here immediately.
        if (msg.sender != factory && msg.sender != swapRouter()) revert OnlyAuthorized();
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /*//////////////////////////////////////////////////////////////
                             INITIALIZATION
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Initialize the StreamWallet
     * @dev    Called by the factory through the proxy constructor, so
     *         `msg.sender` becomes `factory`. The config arguments are kept so
     *         the selector (IStreamWalletInit) still matches the factories
     *         already deployed, but they are ignored: treasury, fee, Kayen
     *         router and USDC are read live from the factory.
     * @param streamer_ The streamer address (owner/beneficiary)
     */
    function initialize(
        address streamer_,
        address /* treasury_ */,
        uint16  /* platformFeeBps_ */,
        address /* kayenRouter_ */,
        address /* usdc_ */
    ) external initializer {
        __Ownable_init(streamer_);
        __UUPSUpgradeable_init();
        __ReentrancyGuard_init();

        streamer = streamer_;
        factory = msg.sender;
    }

    /*//////////////////////////////////////////////////////////////
                    PROTOCOL CONFIG (READ FROM FACTORY)
    //////////////////////////////////////////////////////////////*/

    /// @notice Platform treasury receiving the fee portion (factory config).
    function treasury() public view returns (address) {
        return IStreamWalletFactory(factory).treasury();
    }

    /// @notice Platform fee in basis points (factory `defaultPlatformFeeBps`).
    function platformFeeBps() public view returns (uint16) {
        return IStreamWalletFactory(factory).defaultPlatformFeeBps();
    }

    /// @notice USDC token escrowed by this wallet (factory config).
    function usdc() public view returns (address) {
        return IStreamWalletFactory(factory).usdc();
    }

    /// @notice NetworkRouter allowed to record donations and subscriptions (factory config).
    function swapRouter() public view returns (address) {
        return IStreamWalletFactory(factory).swapRouter();
    }

    /**
     * @notice Deprecated: no effect, kept for factory compatibility.
     * @dev    This used to store a per-wallet copy of the router, which a
     *         later router rotation could not reach. The router is now read
     *         from the factory: rotate it once with
     *         `StreamWalletFactory.setSwapRouter`. Factories deployed before
     *         the fix call this right after creating a wallet, so it must keep
     *         succeeding for them. Same checks as before: factory-only (a
     *         streamer must never pick the router) and non-zero argument.
     * @param _swapRouter Ignored once validated.
     */
    function setSwapRouter(address _swapRouter) external view {
        if (msg.sender != factory) revert OnlyAuthorized();
        if (_swapRouter == address(0)) revert InvalidAddress();
    }

    /*//////////////////////////////////////////////////////////////
                         STREAMER CONFIGURATION
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Price subscriptions: `price` USDC (6 decimals) buys `period`
     *         seconds, pro rata. Applies to future payments only.
     */
    function setSubscriptionPricing(uint256 price, uint64 period) external onlyStreamer {
        if (price == 0 || period < MIN_SUBSCRIPTION_PERIOD || period > MAX_SUBSCRIPTION_PERIOD)
            revert InvalidSubscriptionPricing(price, period);
        subscriptionPrice  = price;
        subscriptionPeriod = period;
        emit SubscriptionPricingSet(price, period);
    }

    /// @notice USDC needed to subscribe for `duration` seconds (rounded up).
    function subscriptionCost(uint256 duration) public view returns (uint256) {
        uint256 price = subscriptionPrice;
        if (price == 0) revert SubscriptionPriceNotSet();
        uint256 period = subscriptionPeriod;
        return (price * duration + period - 1) / period;
    }

    /// @notice Send future withdrawals to `payout` instead of the streamer
    ///         address. `address(0)` reverts to the streamer.
    function setPayoutAddress(address payout) external onlyStreamer {
        address old = payoutAddress;
        payoutAddress = payout;
        emit PayoutAddressSet(old, payout);
    }

    /*//////////////////////////////////////////////////////////////
                    SUBSCRIPTION LOGIC (ROUTER PATH)
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Record a subscription from the swap router (swap already completed)
     * @dev Only callable by factory or authorized swap router. No token transfers
     *      or swaps occur here — purely state tracking. Reverts unless
     *      `totalUsdcAmount` covers `duration` at the streamer's price.
     * @param subscriber The subscriber address
     * @param totalUsdcAmount The total USDC amount paid (before fee split)
     * @param duration The subscription duration in seconds
     */
    function recordSubscriptionByRouter(
        address subscriber,
        uint256 totalUsdcAmount,
        uint256 duration
    ) external onlyAuthorized nonReentrant {
        if (totalUsdcAmount == 0) revert InvalidAmount();
        if (duration == 0) revert InvalidDuration();
        uint256 required = subscriptionCost(duration);
        if (totalUsdcAmount < required) revert InsufficientSubscriptionPayment(required, totalUsdcAmount);

        Subscription storage sub = subscriptions[subscriber];
        uint256 expiryTime;
        if (sub.active && sub.expiryTime > block.timestamp) {
            expiryTime = sub.expiryTime + duration;
        } else {
            expiryTime = block.timestamp + duration;
        }

        if (!sub.active) {
            totalSubscribers++;
        }

        sub.amount += totalUsdcAmount;
        sub.startTime = sub.active ? sub.startTime : block.timestamp;
        sub.expiryTime = expiryTime;
        sub.active = true;

        totalRevenue += totalUsdcAmount;

        emit SubscriptionRecorded(subscriber, totalUsdcAmount, duration, expiryTime);
    }

    /*//////////////////////////////////////////////////////////////
                      DONATION LOGIC (ROUTER PATH)
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Record a donation from the swap router (swap already completed)
     * @dev Only callable by factory or authorized swap router. No token transfers
     *      or swaps occur here — purely state tracking.
     * @param donor The donor address
     * @param totalUsdcAmount The total USDC donated (before fee split, for metrics)
     * @param platformFee The actual platform fee taken by the router
     * @param streamerAmount The actual amount sent to the streamer
     * @param message Optional donation message
     */
    function recordDonationByRouter(
        address donor,
        uint256 totalUsdcAmount,
        uint256 platformFee,
        uint256 streamerAmount,
        string calldata message
    ) external onlyAuthorized nonReentrant {
        if (totalUsdcAmount == 0) revert InvalidAmount();

        lifetimeDonations[donor] += totalUsdcAmount;
        totalRevenue += totalUsdcAmount;

        emit DonationReceived(donor, totalUsdcAmount, message, platformFee, streamerAmount);
    }

    /*//////////////////////////////////////////////////////////////
                           WITHDRAWAL LOGIC
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Streamer withdraws accumulated revenue to the payout address
     *         (the streamer itself unless `setPayoutAddress` was used).
     * @param amount The amount to withdraw
     */
    function withdrawRevenue(uint256 amount) external onlyStreamer nonReentrant {
        if (amount == 0) revert InvalidAmount();

        uint256 available = availableBalance();
        if (amount > available) revert InsufficientBalance();

        address to = payoutAddress == address(0) ? streamer : payoutAddress;
        totalWithdrawn += amount;
        SafeERC20.safeTransfer(IERC20(usdc()), to, amount);

        emit RevenueWithdrawn(to, amount);
    }

    /*//////////////////////////////////////////////////////////////
                             VIEW FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Check if a user has an active subscription
     * @param user The user address to check
     * @return bool True if subscription is active and not expired
     */
    function isSubscribed(address user) external view returns (bool) {
        Subscription memory sub = subscriptions[user];
        return sub.active && block.timestamp < sub.expiryTime;
    }

    /**
     * @notice Get available balance for withdrawal
     * @return uint256 The available balance
     */
    function availableBalance() public view returns (uint256) {
        return IERC20(usdc()).balanceOf(address(this));
    }

    /**
     * @notice Get subscription details for a user
     * @param user The user address
     * @return Subscription struct with subscription details
     */
    function getSubscription(
        address user
    ) external view returns (Subscription memory) {
        return subscriptions[user];
    }

    /**
     * @notice Get lifetime donation amount from a donor
     * @param donor The donor address
     * @return uint256 Total donated amount
     */
    function getDonationAmount(address donor) external view returns (uint256) {
        return lifetimeDonations[donor];
    }

    /*//////////////////////////////////////////////////////////////
                              UUPS UPGRADE
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Authorize upgrade — only the factory (platform admin) can upgrade wallets.
     * @dev Prevents streamers from upgrading their own wallet to a malicious implementation
     *      that could steal subscriber funds or bypass fee enforcement.
     *      Upgrades must go through StreamWalletFactory.upgradeWallet().
     */
    function _authorizeUpgrade(address) internal view override {
        if (msg.sender != factory) revert OnlyFactory();
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ReentrancyGuard}       from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable}               from "@openzeppelin/contracts/access/Ownable.sol";
import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {IERC20}                from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Metadata}        from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {SafeERC20}             from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IKayenMasterRouterV2}  from "../interfaces/IKayenMasterRouterV2.sol";
import {IKayenRouter}          from "../interfaces/IKayenRouter.sol";
import {IChilizWrapperFactory} from "../interfaces/IChilizWrapperFactory.sol";
import {PariMatchBase}        from "../pari/PariMatchBase.sol";
import {PariMatchFactory}     from "../pari/PariMatchFactory.sol";
import {StreamWallet}         from "../streamer/StreamWallet.sol";
import {StreamWalletFactory}  from "../streamer/StreamWalletFactory.sol";

/**
 * @title NetworkRouter
 * @author ChilizTV
 * @notice Single entry point to pay bets, donations and subscriptions with the
 *         network's native token, any routable ERC20, or USDC. Everything
 *         settles in USDC.
 *
 * @dev The same contract runs on every network and speaks the Uniswap V2
 *      router ABI. Only its wiring changes:
 *        - Chiliz: `masterRouter` and `tokenRouter` are the Kayen V2 router,
 *          and `wrapperFactory` wraps fan tokens before the swap.
 *        - Base: `masterRouter` and `tokenRouter` are a
 *          `ConcentratedPoolAdapter`, and `wrapperFactory` stays unset.
 *
 *      "Native token" is the network's gas token (CHZ on Chiliz, ETH on Base);
 *      `wrappedNativeToken` is its ERC20 form (WCHZ, WETH).
 *
 *      USDC goes straight into the match contract (the escrow) on the betting
 *      path and into the streamer's `StreamWallet` on the streaming path. This
 *      contract never holds USDC at rest, and it refuses native tokens sent
 *      outside a payment.
 *
 * Payment paths (all settle in USDC):
 *   Betting:   placeBetWithNativeToken, placeBetWithToken, placeBetWithUSDC
 *              -> PariMatchBase.placeBetUSDCFor
 *   Streaming: donateWith{NativeToken,Token,USDC}, subscribeWith{NativeToken,Token,USDC}
 *              -> fee to the treasury, the rest to the StreamWallet
 *
 * ERC20 routing:
 *   Every ERC20 swaps along [token, wrappedNativeToken, USDC], or
 *   [wrappedNativeToken, USDC] for the wrapped native token itself. On Chiliz,
 *   CAP-20 fan tokens (sub-18 decimals) only have liquidity in Kayen's wrapped
 *   version: when `wrapperFactory` is set and the wrapped route pays more, the
 *   router wraps first. On Base the adapter reads only the two ends of the
 *   path and follows the route its owner registered. Quote with
 *   `quoteTokenToUSDC`, so the quoted route is the executed one.
 *
 * Security:
 *   - Requires SWAP_ROUTER_ROLE on each PariMatch proxy.
 *   - `bettingMatchFactory` validates every match before USDC is forwarded.
 *   - Every swap needs a deadline and a non-zero `amountOutMin`, checked
 *     against the USDC that actually arrived.
 *   - Subscriptions are priced by the wallet and checked here too.
 *   - Reentrancy guarded; SafeERC20 on every transfer.
 */
contract NetworkRouter is ReentrancyGuard, Ownable2Step {
    using SafeERC20 for IERC20;

    // ══════════════════════════════════════════════════════════════════════════
    // IMMUTABLES
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Router for native-token swaps (Kayen V2 on Chiliz, the adapter on Base).
    IKayenMasterRouterV2 public immutable masterRouter;
    /// @notice Router for ERC20 swaps and quotes (Kayen V2 on Chiliz, the adapter on Base).
    IKayenRouter         public immutable tokenRouter;
    /// @notice Settlement token of every bet, donation and subscription.
    IERC20               public immutable usdc;
    /// @notice ERC20 form of the native token: WCHZ on Chiliz, WETH on Base.
    address              public immutable wrappedNativeToken;

    // ══════════════════════════════════════════════════════════════════════════
    // MUTABLE STATE
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Platform treasury for streaming fee collection.
    address public treasury;

    /// @notice Platform fee in basis points for streaming (e.g. 500 = 5%).
    uint16 public platformFeeBps;

    /// @notice StreamWalletFactory for wallet lookup/creation.
    StreamWalletFactory public streamWalletFactory;

    /// @notice PariMatchFactory — validates that bettingMatch addresses are legitimate
    ///         before any USDC is forwarded. Must be set before any placeBetWith* call.
    PariMatchFactory public bettingMatchFactory;

    /// @notice Kayen fan-token wrapper factory, Chiliz only (mainnet 0xAEdc…B264). When set,
    ///         sub-18-decimals tokens with an existing wrapped version are
    ///         wrapped before swapping. address(0) disables wrapping (raw
    ///         [token, wrappedNativeToken, USDC] routing only).
    IChilizWrapperFactory public wrapperFactory;

    // ══════════════════════════════════════════════════════════════════════════
    // EVENTS — BETTING
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice A bet was paid in the native token and swapped to USDC.
    event BetPlacedViaNativeToken(
        address indexed bettingMatch,
        address indexed user,
        uint256 nativeTokenSpent,
        uint256 usdcReceived,
        uint256 marketId,
        uint64  outcome
    );

    /// @notice A bet was paid in an ERC20 and swapped to USDC.
    event BetPlacedViaToken(
        address indexed bettingMatch,
        address indexed user,
        address indexed token,
        uint256 tokenSpent,
        uint256 usdcReceived,
        uint256 marketId,
        uint64  outcome
    );

    /// @notice A bet was paid directly in USDC.
    event BetPlacedWithUSDC(
        address indexed bettingMatch,
        address indexed user,
        uint256 amount,
        uint256 marketId,
        uint64  outcome
    );

    // ══════════════════════════════════════════════════════════════════════════
    // EVENTS — STREAMING DONATIONS
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice A donation was paid in the native token and swapped to USDC.
    event DonationWithNativeToken(
        address indexed donor,
        address indexed streamer,
        uint256 nativeTokenSpent,
        uint256 usdcDonated,
        uint256 platformFee,
        string  message
    );

    /// @notice A donation was paid in an ERC20 and swapped to USDC.
    event DonationWithToken(
        address indexed donor,
        address indexed streamer,
        address indexed token,
        uint256 tokenSpent,
        uint256 usdcDonated,
        uint256 platformFee,
        string  message
    );

    /// @notice A donation was paid directly in USDC.
    event DonationWithUSDCEvent(
        address indexed donor,
        address indexed streamer,
        uint256 amount,
        uint256 platformFee,
        string  message
    );

    // ══════════════════════════════════════════════════════════════════════════
    // EVENTS — STREAMING SUBSCRIPTIONS
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice A subscription was paid in the native token and swapped to USDC.
    event SubscriptionWithNativeToken(
        address indexed subscriber,
        address indexed streamer,
        uint256 nativeTokenSpent,
        uint256 usdcPaid,
        uint256 platformFee,
        uint256 duration
    );

    /// @notice A subscription was paid in an ERC20 and swapped to USDC.
    event SubscriptionWithToken(
        address indexed subscriber,
        address indexed streamer,
        address indexed token,
        uint256 tokenSpent,
        uint256 usdcPaid,
        uint256 platformFee,
        uint256 duration
    );

    /// @notice A subscription was paid directly in USDC.
    event SubscriptionWithUSDCEvent(
        address indexed subscriber,
        address indexed streamer,
        uint256 amount,
        uint256 platformFee,
        uint256 duration
    );

    // ══════════════════════════════════════════════════════════════════════════
    // EVENTS — ADMIN
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice The streaming fee recipient changed.
    event TreasurySet(address indexed oldTreasury, address indexed newTreasury);
    /// @notice The streaming fee changed.
    event PlatformFeeBpsSet(uint16 oldFeeBps, uint16 newFeeBps);
    /// @notice The factory validating match addresses changed.
    event MatchFactorySet(address indexed oldFactory, address indexed newFactory);
    /// @notice The factory providing streamer wallets changed.
    event StreamWalletFactorySet(address indexed oldFactory, address indexed newFactory);
    /// @notice The fan-token wrapper factory changed.
    event WrapperFactorySet(address indexed oldFactory, address indexed newFactory);
    /// @notice A fan token was wrapped before its swap.
    event FanTokenWrapped(address indexed token, address indexed wrapped, uint256 amountIn, uint256 wrappedAmount);

    /// @notice Tokens sent to this contract by mistake were sent on to `to`.
    event TokensRescued(address indexed token, address indexed to, uint256 amount);

    // ══════════════════════════════════════════════════════════════════════════
    // ERRORS
    // ══════════════════════════════════════════════════════════════════════════

    error ZeroAddress();
    error ZeroValue();
    error DeadlinePassed();
    error InvalidFeeBps();
    error TokenIsUSDC();
    error UnauthorizedBettingMatch(address bettingMatch);
    error BettingMatchFactoryNotSet();
    error StreamWalletFactoryNotSet();
    error RouterNotConfiguredOnFactory();
    /// @notice Every swap needs a non-zero minimum output:
    ///         amountOutMin = 0 lets a sandwich take the whole trade.
    error SlippageNotSet();
    /// @notice The swap delivered less USDC than `amountOutMin`.
    error InsufficientOutput(uint256 received, uint256 amountOutMin);
    /// @notice The USDC paid does not cover the streamer's price for `duration`.
    error SubscriptionUnderpaid(uint256 paid, uint256 cost);

    // ══════════════════════════════════════════════════════════════════════════
    // CONSTRUCTOR
    // ══════════════════════════════════════════════════════════════════════════

    constructor(
        address _masterRouter,
        address _tokenRouter,
        address _usdc,
        address _wrappedNativeToken,
        address _treasury,
        uint16  _platformFeeBps
    ) Ownable(msg.sender) {
        if (
            _masterRouter == address(0) || _tokenRouter == address(0)
                || _usdc == address(0) || _wrappedNativeToken == address(0) || _treasury == address(0)
        ) revert ZeroAddress();
        if (_platformFeeBps > 10_000) revert InvalidFeeBps();

        masterRouter   = IKayenMasterRouterV2(_masterRouter);
        tokenRouter    = IKayenRouter(_tokenRouter);
        usdc           = IERC20(_usdc);
        wrappedNativeToken           = _wrappedNativeToken;
        treasury       = _treasury;
        platformFeeBps = _platformFeeBps;
    }

    // ══════════════════════════════════════════════════════════════════════════
    // BETTING — NATIVE TOKEN -> USDC -> PARI-MATCH POSITION
    // ══════════════════════════════════════════════════════════════════════════

    /**
     * @notice Swap the native token sent for USDC and take a position in a pari-mutuel market.
     * @param bettingMatch  Address of the PariMatch proxy.
     * @param marketId      Market identifier.
     * @param outcome       Chosen outcome index.
     * @param amountOutMin  Minimum USDC from the swap (slippage protection).
     * @param deadline      Unix timestamp deadline for the swap.
     */
    function placeBetWithNativeToken(
        address bettingMatch,
        uint256 marketId,
        uint64  outcome,
        uint256 amountOutMin,
        uint256 deadline
    ) external payable nonReentrant {
        if (msg.value == 0) revert ZeroValue();
        if (block.timestamp > deadline) revert DeadlinePassed();

        uint256 usdcReceived = _swapNativeTokenToUSDC(msg.value, amountOutMin, deadline);
        _placeBetOnBehalf(bettingMatch, marketId, outcome, usdcReceived);

        emit BetPlacedViaNativeToken(bettingMatch, msg.sender, msg.value, usdcReceived, marketId, outcome);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // BETTING — USDC DIRECT -> PARI-MATCH POSITION
    // ══════════════════════════════════════════════════════════════════════════

    /**
     * @notice Take a position directly with USDC (no swap).
     * @param bettingMatch  Address of the PariMatch proxy.
     * @param marketId      Market identifier.
     * @param outcome       Chosen outcome index.
     * @param amount        USDC amount (caller must approve this contract first).
     */
    function placeBetWithUSDC(
        address bettingMatch,
        uint256 marketId,
        uint64  outcome,
        uint256 amount
    ) external nonReentrant {
        if (amount == 0) revert ZeroValue();
        if (bettingMatch == address(0)) revert ZeroAddress();

        usdc.safeTransferFrom(msg.sender, address(this), amount);
        _placeBetOnBehalf(bettingMatch, marketId, outcome, amount);

        emit BetPlacedWithUSDC(bettingMatch, msg.sender, amount, marketId, outcome);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // BETTING — ERC20 TOKEN -> USDC -> PARI-MATCH POSITION
    // ══════════════════════════════════════════════════════════════════════════

    /**
     * @notice Swap any ERC20 for USDC and take a pari-mutuel position.
     * @param token         ERC20 to swap (fan token, wrapped native token, etc.).
     * @param amount        Token amount the caller intends to spend.
     * @param bettingMatch  Address of the PariMatch proxy.
     * @param marketId      Market identifier.
     * @param outcome       Chosen outcome index.
     * @param amountOutMin  Minimum USDC from the swap.
     * @param deadline      Unix timestamp for swap expiry.
     */
    function placeBetWithToken(
        address token,
        uint256 amount,
        address bettingMatch,
        uint256 marketId,
        uint64  outcome,
        uint256 amountOutMin,
        uint256 deadline
    ) external nonReentrant {
        if (amount == 0) revert ZeroValue();
        if (token == address(0) || bettingMatch == address(0)) revert ZeroAddress();
        if (token == address(usdc)) revert TokenIsUSDC();
        if (block.timestamp > deadline) revert DeadlinePassed();

        uint256 received     = _pullToken(IERC20(token), msg.sender, amount);
        uint256 usdcReceived = _swapTokensToUSDC(token, received, amountOutMin, deadline);
        _placeBetOnBehalf(bettingMatch, marketId, outcome, usdcReceived);

        emit BetPlacedViaToken(bettingMatch, msg.sender, token, received, usdcReceived, marketId, outcome);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // STREAMING — NATIVE TOKEN -> USDC -> DONATE / SUBSCRIBE
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Swap the native token sent for USDC and donate it to a streamer.
    /// @dev Creates the streamer's wallet on first use.
    /// @param streamer Streamer receiving the donation.
    /// @param message Message emitted with the donation.
    /// @param amountOutMin Minimum USDC from the swap. Must be non-zero.
    /// @param deadline Unix timestamp for swap expiry.
    function donateWithNativeToken(
        address streamer,
        string calldata message,
        uint256 amountOutMin,
        uint256 deadline
    ) external payable nonReentrant {
        if (msg.value == 0) revert ZeroValue();
        if (streamer == address(0)) revert ZeroAddress();
        if (block.timestamp > deadline) revert DeadlinePassed();

        address wallet = _walletFor(streamer);
        uint256 usdcReceived = _swapNativeTokenToUSDC(msg.value, amountOutMin, deadline);
        (uint256 fee, uint256 streamerAmt) = _splitAndTransfer(wallet, usdcReceived);
        _recordDonation(wallet, msg.sender, usdcReceived, fee, streamerAmt, message);

        emit DonationWithNativeToken(msg.sender, streamer, msg.value, usdcReceived, fee, message);
    }

    /// @notice Swap the native token sent for USDC and subscribe to a streamer.
    /// @dev The USDC received must cover `StreamWallet.subscriptionCost(duration)`.
    /// @param streamer Streamer subscribed to.
    /// @param duration Subscription length in seconds.
    /// @param amountOutMin Minimum USDC from the swap. Must be non-zero.
    /// @param deadline Unix timestamp for swap expiry.
    function subscribeWithNativeToken(
        address streamer,
        uint256 duration,
        uint256 amountOutMin,
        uint256 deadline
    ) external payable nonReentrant {
        if (msg.value == 0) revert ZeroValue();
        if (streamer == address(0)) revert ZeroAddress();
        if (duration == 0) revert ZeroValue();
        if (block.timestamp > deadline) revert DeadlinePassed();

        address wallet = _walletFor(streamer);
        uint256 usdcReceived = _swapNativeTokenToUSDC(msg.value, amountOutMin, deadline);
        (uint256 fee,) = _splitAndTransfer(wallet, usdcReceived);
        _recordSubscription(wallet, msg.sender, usdcReceived, duration);

        emit SubscriptionWithNativeToken(msg.sender, streamer, msg.value, usdcReceived, fee, duration);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // STREAMING — USDC DIRECT -> DONATE / SUBSCRIBE
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Donate USDC to a streamer. The caller approves this contract first.
    /// @param streamer Streamer receiving the donation.
    /// @param message Message emitted with the donation.
    /// @param amount USDC amount, platform fee included.
    function donateWithUSDC(
        address streamer,
        string calldata message,
        uint256 amount
    ) external nonReentrant {
        if (amount == 0) revert ZeroValue();
        if (streamer == address(0)) revert ZeroAddress();

        address wallet = _walletFor(streamer);
        usdc.safeTransferFrom(msg.sender, address(this), amount);
        (uint256 fee, uint256 streamerAmt) = _splitAndTransfer(wallet, amount);
        _recordDonation(wallet, msg.sender, amount, fee, streamerAmt, message);

        emit DonationWithUSDCEvent(msg.sender, streamer, amount, fee, message);
    }

    /// @notice Subscribe to a streamer with USDC. The caller approves this contract first.
    /// @dev `amount` must cover `StreamWallet.subscriptionCost(duration)`.
    /// @param streamer Streamer subscribed to.
    /// @param duration Subscription length in seconds.
    /// @param amount USDC amount, platform fee included.
    function subscribeWithUSDC(
        address streamer,
        uint256 duration,
        uint256 amount
    ) external nonReentrant {
        if (amount == 0) revert ZeroValue();
        if (streamer == address(0)) revert ZeroAddress();
        if (duration == 0) revert ZeroValue();

        address wallet = _walletFor(streamer);
        usdc.safeTransferFrom(msg.sender, address(this), amount);
        (uint256 fee,) = _splitAndTransfer(wallet, amount);
        _recordSubscription(wallet, msg.sender, amount, duration);

        emit SubscriptionWithUSDCEvent(msg.sender, streamer, amount, fee, duration);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // STREAMING — ERC20 TOKEN -> USDC -> DONATE / SUBSCRIBE
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Swap an ERC20 for USDC and donate it to a streamer. The caller approves this contract first.
    /// @param token ERC20 to swap.
    /// @param amount Token amount the caller intends to spend.
    /// @param streamer Streamer receiving the donation.
    /// @param message Message emitted with the donation.
    /// @param amountOutMin Minimum USDC from the swap. Must be non-zero.
    /// @param deadline Unix timestamp for swap expiry.
    function donateWithToken(
        address token,
        uint256 amount,
        address streamer,
        string calldata message,
        uint256 amountOutMin,
        uint256 deadline
    ) external nonReentrant {
        if (amount == 0) revert ZeroValue();
        if (token == address(0) || streamer == address(0)) revert ZeroAddress();
        if (token == address(usdc)) revert TokenIsUSDC();
        if (block.timestamp > deadline) revert DeadlinePassed();

        address wallet = _walletFor(streamer);
        uint256 received     = _pullToken(IERC20(token), msg.sender, amount);
        uint256 usdcReceived = _swapTokensToUSDC(token, received, amountOutMin, deadline);
        (uint256 fee, uint256 streamerAmt) = _splitAndTransfer(wallet, usdcReceived);
        _recordDonation(wallet, msg.sender, usdcReceived, fee, streamerAmt, message);

        emit DonationWithToken(msg.sender, streamer, token, received, usdcReceived, fee, message);
    }

    /// @notice Swap an ERC20 for USDC and subscribe to a streamer. The caller approves this contract first.
    /// @dev The USDC received must cover `StreamWallet.subscriptionCost(duration)`.
    /// @param token ERC20 to swap.
    /// @param amount Token amount the caller intends to spend.
    /// @param streamer Streamer subscribed to.
    /// @param duration Subscription length in seconds.
    /// @param amountOutMin Minimum USDC from the swap. Must be non-zero.
    /// @param deadline Unix timestamp for swap expiry.
    function subscribeWithToken(
        address token,
        uint256 amount,
        address streamer,
        uint256 duration,
        uint256 amountOutMin,
        uint256 deadline
    ) external nonReentrant {
        if (amount == 0) revert ZeroValue();
        if (token == address(0) || streamer == address(0)) revert ZeroAddress();
        if (token == address(usdc)) revert TokenIsUSDC();
        if (duration == 0) revert ZeroValue();
        if (block.timestamp > deadline) revert DeadlinePassed();

        address wallet = _walletFor(streamer);
        uint256 received     = _pullToken(IERC20(token), msg.sender, amount);
        uint256 usdcReceived = _swapTokensToUSDC(token, received, amountOutMin, deadline);
        (uint256 fee,) = _splitAndTransfer(wallet, usdcReceived);
        _recordSubscription(wallet, msg.sender, usdcReceived, duration);

        emit SubscriptionWithToken(msg.sender, streamer, token, received, usdcReceived, fee, duration);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ADMIN
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Set the recipient of the streaming fee. Owner only.
    function setTreasury(address _treasury) external onlyOwner {
        if (_treasury == address(0)) revert ZeroAddress();
        address old = treasury;
        treasury = _treasury;
        emit TreasurySet(old, _treasury);
    }

    /// @notice Set the streaming fee in basis points. Owner only.
    function setPlatformFeeBps(uint16 _feeBps) external onlyOwner {
        if (_feeBps > 10_000) revert InvalidFeeBps();
        uint16 old = platformFeeBps;
        platformFeeBps = _feeBps;
        emit PlatformFeeBpsSet(old, _feeBps);
    }

    /// @notice Register the PariMatchFactory so that bettingMatch addresses are validated
    ///         before USDC is forwarded. Must be set before any placeBetWith* call.
    function setMatchFactory(address _factory) external onlyOwner {
        if (_factory == address(0)) revert ZeroAddress();
        address old = address(bettingMatchFactory);
        bettingMatchFactory = PariMatchFactory(_factory);
        emit MatchFactorySet(old, _factory);
    }

    /// @notice Set the streaming factory. Owner only.
    /// @dev The factory must already list this contract as its `swapRouter`.
    function setStreamWalletFactory(address _factory) external onlyOwner {
        if (_factory == address(0)) revert ZeroAddress();
        if (StreamWalletFactory(_factory).swapRouter() != address(this))
            revert RouterNotConfiguredOnFactory();
        address old = address(streamWalletFactory);
        streamWalletFactory = StreamWalletFactory(_factory);
        emit StreamWalletFactorySet(old, _factory);
    }

    /// @notice Register the Kayen fan-token wrapper factory. address(0) is
    ///         allowed and disables automatic wrapping (the setup on Base,
    ///         where Kayen has no wrapper deployment).
    function setWrapperFactory(address _factory) external onlyOwner {
        address old = address(wrapperFactory);
        wrapperFactory = IChilizWrapperFactory(_factory);
        emit WrapperFactorySet(old, _factory);
    }

    /// @notice Send ERC20 tokens sent to this contract by mistake to `to`. Owner only.
    /// @dev Payments never leave funds here between calls, so this cannot reach
    ///      anything a user is owed.
    function rescueTokens(IERC20 token, address to, uint256 amount) external onlyOwner {
        if (to == address(0)) revert ZeroAddress();
        token.safeTransfer(to, amount);
        emit TokensRescued(address(token), to, amount);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // VIEWS — QUOTING (keep frontends in sync with the executed route)
    // ══════════════════════════════════════════════════════════════════════════

    /**
     * @notice Route `_swapTokensToUSDC` takes for one whole unit of `token`
     *         (10**decimals). The swap itself decides on the actual amount
     *         with the same rule; use `routeFor(token, amount)` for that.
     * @return swapToken  The token actually swapped (wrapped version for fan tokens).
     * @return swapAmountPerUnit  Wrapped units minted per 1 unit of `token`
     *                            (1 when no wrapping applies).
     * @return path        The swap path ending in USDC.
     */
    function swapRouteFor(address token)
        public
        view
        returns (address swapToken, uint256 swapAmountPerUnit, address[] memory path)
    {
        (swapToken, swapAmountPerUnit, path,) = routeFor(token, _oneUnit(token));
    }

    /**
     * @notice Route and expected USDC output for swapping `amount` of `token`.
     * @dev    When a wrapped version of `token` exists, both the raw
     *         [token, wrappedNativeToken, USDC] path and the wrapped path are quoted for
     *         this amount and the better one wins. Since anyone can create a
     *         wrapper, neither a poolless nor a dust-seeded wrapper can divert
     *         a token that trades raw; genuine fan tokens (no raw pool) still
     *         route through their wrapper.
     */
    function routeFor(address token, uint256 amount)
        public
        view
        returns (address swapToken, uint256 swapAmountPerUnit, address[] memory path, uint256 expectedOut)
    {
        swapToken = token;
        swapAmountPerUnit = 1;
        path = _pathFrom(token);
        expectedOut = _quote(amount, path);

        (address wrapped, uint256 perUnit) = _wrapCandidate(token);
        if (wrapped != address(0)) {
            address[] memory wrappedPath = _pathFrom(wrapped);
            uint256 wrappedOut = _quote(amount * perUnit, wrappedPath);
            if (wrappedOut > expectedOut) {
                return (wrapped, perUnit, wrappedPath, wrappedOut);
            }
        }
    }

    /// @notice Expected USDC out for swapping `amount` of `token`, following the
    ///         same route the swap will execute (0 if no route is priced).
    ///         Use this (not a hand-built path) to compute `amountOutMin`.
    function quoteTokenToUSDC(address token, uint256 amount)
        external
        view
        returns (uint256 usdcOut)
    {
        (,,, usdcOut) = routeFor(token, amount);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // INTERNAL — SWAP HELPERS
    // ══════════════════════════════════════════════════════════════════════════

    function _pullToken(IERC20 token, address from, uint256 declared)
        internal
        returns (uint256 received)
    {
        uint256 balBefore = token.balanceOf(address(this));
        token.safeTransferFrom(from, address(this), declared);
        received = token.balanceOf(address(this)) - balBefore;
        if (received == 0) revert ZeroValue();
    }

    function _swapNativeTokenToUSDC(
        uint256 nativeTokenAmount,
        uint256 amountOutMin,
        uint256 deadline
    ) internal returns (uint256 usdcReceived) {
        if (amountOutMin == 0) revert SlippageNotSet();
        address[] memory path = new address[](2);
        path[0] = wrappedNativeToken;
        path[1] = address(usdc);

        uint256 before = usdc.balanceOf(address(this));
        masterRouter.swapExactETHForTokens{value: nativeTokenAmount}(amountOutMin, path, address(this), deadline);
        usdcReceived = _receivedSince(before, amountOutMin);
    }

    /// @dev Swap `amount` of `token` for USDC, wrapping fan tokens first.
    ///      Routing is `routeFor(token, amount)`; `amountOutMin` always
    ///      applies to the final USDC amount. Without a wrap candidate (always
    ///      the case on Base) there is nothing to compare, so the quote is skipped.
    function _swapTokensToUSDC(
        address token,
        uint256 amount,
        uint256 amountOutMin,
        uint256 deadline
    ) internal returns (uint256 usdcReceived) {
        if (amountOutMin == 0) revert SlippageNotSet();
        address swapToken = token;
        address[] memory path;
        (address wrapped,) = _wrapCandidate(token);
        if (wrapped == address(0)) {
            path = _pathFrom(token);
        } else {
            (swapToken,, path,) = routeFor(token, amount);
        }
        uint256 swapAmount = amount;

        if (swapToken != token) {
            IERC20(token).forceApprove(address(wrapperFactory), amount);
            uint256 balBefore = IERC20(swapToken).balanceOf(address(this));
            wrapperFactory.wrap(address(this), token, amount);
            swapAmount = IERC20(swapToken).balanceOf(address(this)) - balBefore;
            emit FanTokenWrapped(token, swapToken, amount, swapAmount);
        }

        IERC20(swapToken).forceApprove(address(tokenRouter), swapAmount);

        uint256 before = usdc.balanceOf(address(this));
        tokenRouter.swapExactTokensForTokens(swapAmount, amountOutMin, path, address(this), deadline);
        usdcReceived = _receivedSince(before, amountOutMin);
    }

    /// @dev USDC that actually arrived since `before`, at least `amountOutMin`.
    ///      The amounts a DEX reports are not trusted.
    function _receivedSince(uint256 before, uint256 amountOutMin) internal view returns (uint256 received) {
        received = usdc.balanceOf(address(this)) - before;
        if (received < amountOutMin) revert InsufficientOutput(received, amountOutMin);
    }

    /// @dev Kayen has no direct USDC pair for any token, so paths go through the
    ///      wrapped native token. On Base the adapter only reads the two ends.
    function _pathFrom(address t) internal view returns (address[] memory path) {
        if (t == wrappedNativeToken) {
            path = new address[](2);
            path[0] = wrappedNativeToken;
            path[1] = address(usdc);
        } else {
            path = new address[](3);
            path[0] = t;
            path[1] = wrappedNativeToken;
            path[2] = address(usdc);
        }
    }

    /// @dev USDC out for `amountIn` along `path`, 0 when the route is not priced.
    function _quote(uint256 amountIn, address[] memory path) internal view returns (uint256) {
        if (amountIn == 0) return 0;
        try tokenRouter.getAmountsOut(amountIn, path) returns (uint256[] memory out) {
            return out.length == 0 ? 0 : out[out.length - 1];
        } catch {
            return 0;
        }
    }

    function _oneUnit(address token) internal view returns (uint256) {
        // A `try` on an address without code reverts here instead of in `catch`.
        if (token.code.length == 0) return 1e18;
        try IERC20Metadata(token).decimals() returns (uint8 d) {
            return 10 ** uint256(d);
        } catch {
            return 1e18;
        }
    }

    /// @dev Wrapped version of `token` worth considering, with the wrapped
    ///      units minted per unit of `token`. Only when the wrapper factory is
    ///      set, the wrapped token exists and `token` has fewer than 18
    ///      decimals; `routeFor` then compares prices.
    function _wrapCandidate(address token) internal view returns (address wrapped, uint256 perUnit) {
        IChilizWrapperFactory factory = wrapperFactory;
        if (address(factory) == address(0)) return (address(0), 0);

        wrapped = factory.underlyingToWrapped(token);
        if (wrapped == address(0) || token.code.length == 0) return (address(0), 0);

        try IERC20Metadata(token).decimals() returns (uint8 d) {
            if (d >= 18) return (address(0), 0);
            perUnit = 10 ** (18 - uint256(d));
        } catch {
            return (address(0), 0);
        }
    }

    // ══════════════════════════════════════════════════════════════════════════
    // INTERNAL — BETTING DELIVERY
    // ══════════════════════════════════════════════════════════════════════════

    /// @dev Transfer USDC directly to the match contract (it is its own escrow),
    ///      then call placeBetUSDCFor to record the position.
    ///      Factory registry check is always enforced — no USDC is forwarded to
    ///      an address not deployed by the registered factory.
    function _placeBetOnBehalf(
        address bettingMatch,
        uint256 marketId,
        uint64  outcome,
        uint256 amount
    ) internal {
        if (bettingMatch == address(0)) revert ZeroAddress();
        PariMatchFactory factory = bettingMatchFactory;
        if (address(factory) == address(0)) revert BettingMatchFactoryNotSet();
        if (!factory.isMatch(bettingMatch)) revert UnauthorizedBettingMatch(bettingMatch);

        // The match contract is the escrow — send USDC directly to it.
        usdc.safeTransfer(bettingMatch, amount);
        PariMatchBase(payable(bettingMatch)).placeBetUSDCFor(msg.sender, marketId, outcome, amount);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // INTERNAL — STREAMING HELPERS
    // ══════════════════════════════════════════════════════════════════════════

    /// @dev Resolve (and lazily deploy) the StreamWallet escrow for `streamer`.
    ///      Reverts if the StreamWalletFactory has not been wired — without it
    ///      we have no place to escrow USDC, so the call must fail loudly
    ///      instead of routing funds to the streamer EOA.
    function _walletFor(address streamer) internal returns (address) {
        StreamWalletFactory factory = streamWalletFactory;
        if (address(factory) == address(0)) revert StreamWalletFactoryNotSet();
        return factory.getOrCreateWallet(streamer);
    }

    /// @dev USDC is escrowed in the StreamWallet (`wallet`); streamer
    ///      withdraws via StreamWallet.withdrawRevenue.
    function _splitAndTransfer(
        address wallet,
        uint256 totalAmount
    ) internal returns (uint256 fee, uint256 streamerAmount) {
        fee           = (totalAmount * platformFeeBps) / 10_000;
        streamerAmount = totalAmount - fee;
        if (fee > 0) usdc.safeTransfer(treasury, fee);
        usdc.safeTransfer(wallet, streamerAmount);
    }

    /// @dev The price is checked here as well as in the wallet, so a wallet
    ///      still on an implementation without pricing cannot be subscribed to
    ///      below cost: the call reverts.
    function _recordSubscription(
        address wallet,
        address subscriber,
        uint256 usdcAmount,
        uint256 duration
    ) internal {
        uint256 cost = StreamWallet(payable(wallet)).subscriptionCost(duration);
        if (usdcAmount < cost) revert SubscriptionUnderpaid(usdcAmount, cost);
        StreamWallet(payable(wallet)).recordSubscriptionByRouter(subscriber, usdcAmount, duration);
    }

    function _recordDonation(
        address wallet,
        address donor,
        uint256 usdcAmount,
        uint256 platformFee,
        uint256 streamerAmount,
        string calldata message
    ) internal {
        StreamWallet(payable(wallet)).recordDonationByRouter(donor, usdcAmount, platformFee, streamerAmount, message);
    }
}

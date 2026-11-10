// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Initializable}              from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {AccessControlUpgradeable}   from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable}        from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {IERC20}                     from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20}                  from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ILeaderboardRewards}        from "../interfaces/ILeaderboardRewards.sol";

/**
 * @title PariMatchBase
 * @author ChilizTV Team
 * @notice Abstract base for pari-mutuel (pooled-positions) sports markets.
 *
 * @dev Architecture overview
 * ──────────────────────────
 * This contract IS the escrow. User USDC flows directly here on placement
 * and flows back out at claim / refund time. No external LP vault is involved.
 *
 * Fund flow:
 *   User stakes USDC on outcome O of market M.
 *   USDC is held in this contract until resolution.
 *   On resolution the protocol fee is sent immediately to `feeRecipient`.
 *   Winners claim their proportional share of the net pool.
 *   Cancelled markets allow all stakers to withdraw their original stake.
 *
 * Payout formula (per winner):
 *   netPool        = totalPool[M] * (BPS_DENOM - feeBps) / BPS_DENOM
 *   userPayout     = userStake[M][user][winningOutcome]
 *                      * netPool
 *                      / outcomePool[M][winningOutcome]
 *
 * Special case — void market (winning outcome pool == 0):
 *   Market transitions to Cancelled automatically at resolution time.
 *   No fee is taken. Every staker reclaims their full _userTotalStake.
 *
 * Market spec (generic):
 *   A single mapping `_marketSpec` holds the per-market metadata that used
 *   to live in each sport contract. Children only contribute:
 *     - the whitelist of accepted market types       (_isValidMarketType)
 *     - the maxOutcome for each (type, line) pair    (_getMaxOutcome)
 *     - the outcome computed from a typed score      (sport-specific
 *       `resolveByScore`-style entrypoint, not in the base)
 *
 * Resolution paths:
 *   - resolveMarket(id, outcome) / resolveMarketsBatch — explicit outcomes
 *     supplied by the oracle. No assumption about the input format.
 *   - Children may add a typed `resolveByScore(...)` that derives outcomes
 *     for every Closed market from a single match-score input — see
 *     FootballPariMatch / BasketballPariMatch.
 *
 * Roles:
 *   DEFAULT_ADMIN_ROLE — role management. NOT upgrades: a
 *                        match has no upgrade entrypoint; matches are
 *                        BeaconProxies and only the sport beacon's owner
 *                        (governance Safe / timelock) can change their code.
 *   ADMIN_ROLE         — market lifecycle (create/open/close/cancel).
 *   RESOLVER_ROLE      — set the winning outcome (oracle / off-chain backend).
 *   PAUSER_ROLE        — emergency pause.
 *   SWAP_ROUTER_ROLE   — place bets on behalf of users after swapping tokens.
 *
 * Storage invariant:
 *   IERC20(usdcToken).balanceOf(address(this))
 *     == Σ_unresolvedMarkets _totalPool[m]
 *      + Σ_resolvedMarkets (_totalPool[m] - feeAlreadyPaid[m] - payoutsAlreadyPaid[m])
 *   This is maintained by the CEI pattern + reentrancy guard.
 */
abstract contract PariMatchBase is
    Initializable,
    AccessControlUpgradeable,
    ReentrancyGuardUpgradeable,
    PausableUpgradeable
{
    using SafeERC20 for IERC20;

    // ═══════════════════════════════════════════════════════════════════════
    // CONSTANTS & ROLES
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Market lifecycle (create, open, suspend, close, cancel) and `unpause`.
    bytes32 public constant ADMIN_ROLE       = keccak256("ADMIN_ROLE");
    /// @notice Sets winning outcomes. Held by the oracle key.
    bytes32 public constant RESOLVER_ROLE    = keccak256("RESOLVER_ROLE");
    /// @notice Can call `emergencyPause`.
    bytes32 public constant PAUSER_ROLE      = keccak256("PAUSER_ROLE");
    /// @notice Can place stakes for users through `placeBetUSDCFor`. Held by `NetworkRouter`.
    bytes32 public constant SWAP_ROUTER_ROLE = keccak256("SWAP_ROUTER_ROLE");

    /// @notice Minimum stake per placement (anti-dust / anti-griefing).
    ///         0.01 USDC in 6-decimal precision.
    uint256 public constant MIN_STAKE = 10_000;

    /// @notice Denominator for basis-point calculations.
    uint256 public constant BPS_DENOM = 10_000;

    /// @notice Hard ceiling on the protocol fee (5%). Prevents fee parameter
    ///         from being raised to a level that would constitute a hidden
    ///         expropriation of user funds.
    uint16 public constant MAX_FEE_BPS = 500;

    /// @notice Total fee set by the initializer (2%).
    uint16 public constant DEFAULT_FEE_BPS = 200;

    /// @notice Once a market's betting window is over (`closesAt`), the
    ///         oracle has this long to resolve it. Past that, anyone can
    ///         cancel it so every staker gets refunded.
    uint256 public constant RESOLUTION_TIMEOUT = 7 days;

    /// @notice Betting window assumed for markets without `closesAt`
    ///         (created before the cutoff existed), counted from creation,
    ///         when computing the stale-cancel deadline.
    uint256 public constant LEGACY_MARKET_TTL = 90 days;

    /// @notice A pause freezes claims for at most this long; after that,
    ///         winners can claim even if the match is still paused.
    uint256 public constant MAX_CLAIM_PAUSE = 7 days;

    // ═══════════════════════════════════════════════════════════════════════
    // ENUMS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Market lifecycle. Transitions are one-directional except that
    ///         Cancelled is reachable from Open, Suspended, and Closed.
    enum MarketState {
        Inactive,   // Created, not yet open for stakes.
        Open,       // Accepting stakes.
        Suspended,  // Temporarily paused (e.g. live score changes).
        Closed,     // No more stakes; awaiting resolution.
        Resolved,   // Winner set; claims open.
        Cancelled   // All stakers may refund (used for void / abandoned events).
    }

    // ═══════════════════════════════════════════════════════════════════════
    // STRUCTS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Core market data as returned by `getMarketCore` (ABI kept
    ///         stable for the backend and frontend). Storage uses the
    ///         superset `MarketCoreData` below.
    struct MarketCore {
        MarketState state;       // 1 byte
        uint64      result;      // 8 bytes — winning outcome index; valid only in Resolved
        uint40      createdAt;   // 5 bytes
        uint40      resolvedAt;  // 5 bytes
        uint256     resolvedNetPool;
    }

    /// @notice Core market data in storage. Four slots.
    ///         Slot A: state(1) + result(8) + createdAt(5) + resolvedAt(5)
    ///                 + feeBps(2) + leaderboardFeeBps(2) + feesFrozen(1) = 24 bytes
    ///         Slot B: resolvedNetPool
    ///         Slot C: paidOut          — USDC paid to winners so far
    ///         Slot D: claimedWinStake  — winning stake already claimed
    /// @dev    Upgrade-safe extension of the original two-slot struct: the
    ///         new slot-A fields sit in bytes that were always zero, slots C
    ///         and D are appended. Markets opened before this version have
    ///         `feesFrozen == false` and settle at the match-level fees.
    struct MarketCoreData {
        MarketState state;
        uint64      result;
        uint40      createdAt;
        uint40      resolvedAt;
        uint16      feeBps;             // total fee frozen when the market opened
        uint16      leaderboardFeeBps;  // leaderboard share frozen when the market opened
        bool        feesFrozen;
        uint256     resolvedNetPool;
        uint256     paidOut;            // dust accounting
        uint256     claimedWinStake;    // dust accounting
    }

    /// @notice Generic per-market metadata. Two slots.
    ///         Slot A: marketType (32 bytes)
    ///         Slot B: line(2) + maxOutcome(1) + extra(1) + groupId(2) + closesAt(5) = 11 bytes → 1 slot
    /// @dev    `extra` and `groupId` are sport-defined free fields:
    ///           * extra   — e.g. basketball quarter (1..4) or 0 for full-game
    ///           * groupId — UI grouping for related markets (0 = ungrouped)
    ///         `closesAt` is the on-chain betting cutoff: no
    ///         stake is accepted from that timestamp on. 0 = no cutoff (the
    ///         admin closes the market by hand, as before). It was appended
    ///         into free bytes of slot B, so existing markets read 0.
    struct MarketSpec {
        bytes32 marketType;
        int16   line;
        uint8   maxOutcome;
        uint8   extra;
        uint16  groupId;
        uint40  closesAt;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // STORAGE  (Upgrade-safe — do NOT reorder or delete slots)
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Human-readable match identifier (e.g. "Barcelona vs Real Madrid").
    string public matchName;                                          // slot 0

    /// @notice Sport identifier set by the child initializer.
    string public sportType;                                          // slot 1

    /// @notice Total number of markets created on this match.
    uint256 public marketCount;                                       // slot 2

    /// @notice Core data per market.
    mapping(uint256 marketId => MarketCoreData) internal _marketCores; // slot 3

    /// @notice Gross USDC pool for each market.
    mapping(uint256 marketId => uint256) internal _totalPool;         // slot 4

    /// @notice USDC pool per outcome.
    mapping(uint256 marketId => mapping(uint64 outcome => uint256)) internal _outcomePool;  // slot 5

    /// @notice Individual user stake per outcome.
    mapping(uint256 marketId => mapping(address user => mapping(uint64 outcome => uint256))) internal _userStake;  // slot 6

    /// @notice Sum of all user stakes in a market across every outcome.
    mapping(uint256 marketId => mapping(address user => uint256)) internal _userTotalStake;  // slot 7

    /// @notice Claim / refund gate.
    mapping(uint256 marketId => mapping(address user => bool)) internal _claimed;  // slot 8

    /// @notice USDC token used for all settlements.
    IERC20 public usdcToken;                                          // slot 9

    /// @notice Address that receives the company portion of the protocol
    ///         fee at market resolution. Should be a multi-sig or treasury.
    address public feeRecipient;                                      // slot 10 (with feeBps)

    /// @notice TOTAL protocol fee in basis points (default 200 = 2%).
    ///         Split between company and leaderboard at resolve time:
    ///           leaderboardFee = totalPool * leaderboardFeeBps / BPS_DENOM
    ///           companyFee     = totalPool * (feeBps - leaderboardFeeBps) / BPS_DENOM
    ///         Capped at MAX_FEE_BPS. The setter enforces
    ///         `leaderboardFeeBps <= feeBps` so the split is always valid.
    uint16 public feeBps;                                             // slot 10 (packed with feeRecipient)

    /// @notice Per-market specification (type / line / maxOutcome / extra / groupId).
    mapping(uint256 marketId => MarketSpec) internal _marketSpec;     // slot 11

    /// @notice Address that receives the leaderboard portion of the protocol
    ///         fee at market resolution. Expected to be a
    ///         `LeaderboardRewards` proxy. May be zero — then the full fee
    ///         goes to `feeRecipient` and no `recordWin` notify happens.
    address public leaderboardRecipient;                              // slot 12 (with leaderboardFeeBps)

    /// @notice Leaderboard's share of the total fee, in basis points OF THE
    ///         POOL. E.g. feeBps=200, leaderboardFeeBps=100 → 1% of pool to
    ///         leaderboard, 1% of pool to company. Must satisfy
    ///         `leaderboardFeeBps <= feeBps`.
    uint16 public leaderboardFeeBps;                                  // slot 12 (packed with leaderboardRecipient)

    /// @notice Timestamp of the last `emergencyPause` (0 = never). Claims
    ///         reopen MAX_CLAIM_PAUSE after it even if still paused.
    uint40 public pausedAt;                                           // slot 12 (packed, bytes 22-26)

    /// @dev USDC this contract owes (stakes in, minus fees, payouts,
    ///      refunds and swept dust out). `placeBetUSDCFor` requires the
    ///      balance to cover it plus the new stake. Starts at 0
    ///      on proxies upgraded from an older implementation, so there it only
    ///      tracks stakes taken after the upgrade; decrements saturate at 0
    ///      so withdrawals can never revert on it.
    uint256 internal _accountedUsdc;                                  // slot 13

    // Slots 0-13 = 14 named slots. Gap to 50 total.
    uint256[36] private __gap;

    // ═══════════════════════════════════════════════════════════════════════
    // EVENTS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice The match proxy was initialized.
    event MatchInitialized(string indexed name, string sportType, address indexed owner);
    /// @notice A market was added to the match.
    event MarketCreated(uint256 indexed marketId, bytes32 indexed marketType, int16 line, uint8 maxOutcome, uint16 groupId);
    /// @notice A market moved to a new lifecycle state.
    event MarketStateChanged(uint256 indexed marketId, MarketState oldState, MarketState newState);
    /// @notice A market was cancelled; stakers can refund.
    event MarketCancelled(uint256 indexed marketId, string reason);

    /// @notice A stake was recorded for `user`.
    event PositionTaken(
        uint256 indexed marketId,
        address indexed user,
        uint64  outcome,
        uint256 stake,
        uint256 newOutcomePool,
        uint256 newTotalPool
    );

    /// @notice A market was settled with its winning outcome.
    event MarketResolved(
        uint256 indexed marketId,
        uint64  result,
        uint256 totalPool,
        uint256 fee,
        uint256 resolvedNetPool
    );

    /// @notice `user` claimed the winnings of a market.
    event PositionClaimed(
        uint256 indexed marketId,
        address indexed user,
        uint256 stake,
        uint256 payout
    );

    /// @notice `user` took back their stake on a cancelled market.
    event StakeRefunded(
        uint256 indexed marketId,
        address indexed user,
        uint256 amount
    );

    /// @notice The recipient of the company fee changed.
    event FeeRecipientSet(address indexed oldRecipient, address indexed newRecipient);
    /// @notice The total fee for future markets changed.
    event FeeBpsSet(uint16 oldBps, uint16 newBps);
    /// @notice The recipient of the leaderboard fee changed.
    event LeaderboardRecipientSet(address indexed oldRecipient, address indexed newRecipient);
    /// @notice The leaderboard share for future markets changed.
    event LeaderboardFeeBpsSet(uint16 oldBps, uint16 newBps);
    /// @notice The leaderboard refused a score credit; the claim still went through.
    event LeaderboardRecordFailed(address indexed leaderboard, address indexed user, uint256 payout);
    /// @notice The leaderboard refused a fee notification; the USDC was still sent.
    event LeaderboardNotifyFailed(address indexed leaderboard, uint256 amount);
    /// @notice The settlement token was set.
    event USDCTokenSet(address indexed token);
    /// @notice The betting cutoff of a market was set.
    event MarketCloseTimeSet(uint256 indexed marketId, uint40 closesAt);
    /// @notice The fees of a market were frozen when it first opened.
    event MarketFeesFrozen(uint256 indexed marketId, uint16 feeBps, uint16 leaderboardFeeBps);
    /// @notice An unresolved market past its deadline was cancelled.
    event StaleMarketCancelled(uint256 indexed marketId, address indexed caller);
    /// @notice The rounding dust of a fully claimed market was sent to the fee recipient.
    event DustSwept(uint256 indexed marketId, address indexed to, uint256 amount);

    // ═══════════════════════════════════════════════════════════════════════
    // ERRORS
    // ═══════════════════════════════════════════════════════════════════════

    error InvalidMarketId(uint256 marketId);
    error InvalidMarketState(uint256 marketId, MarketState current, MarketState required);
    error InvalidOutcome(uint256 marketId, uint64 outcome);
    error InvalidOutcomeValue(uint256 marketId, uint64 outcome, uint8 maxAllowed);
    error InvalidMarketType(bytes32 marketType);
    error InvalidLine(bytes32 marketType, int16 line);
    error StakeBelowMinimum(uint256 stake, uint256 minimum);
    error ZeroStake();
    error AlreadyClaimed(uint256 marketId, address user);
    error NothingToClaim(uint256 marketId, address user);
    error NothingToRefund(uint256 marketId, address user);
    error USDCNotConfigured();
    error FeeRecipientNotConfigured();
    error FeeBpsExceedsMax(uint16 provided, uint16 max);
    error LeaderboardFeeExceedsTotal(uint16 leaderboardBps, uint16 totalBps);
    error LeaderboardRecipientNotConfigured();
    error ArrayLengthMismatch();
    error BettingClosed(uint256 marketId, uint40 closesAt);
    error InvalidCloseTime(uint256 marketId, uint40 closesAt);
    error MarketNotStale(uint256 marketId, uint256 staleAt);
    error MarketNotExpired(uint256 marketId);
    error USDCAlreadyConfigured();
    error UnbackedStake(uint256 required, uint256 balance);
    error DustNotSweepable(uint256 marketId);
    error ClaimsPaused(uint256 reopensAt);

    // ═══════════════════════════════════════════════════════════════════════
    // MODIFIERS
    // ═══════════════════════════════════════════════════════════════════════

    modifier validMarket(uint256 marketId) {
        if (marketId >= marketCount) revert InvalidMarketId(marketId);
        _;
    }

    modifier inState(uint256 marketId, MarketState required) {
        MarketState current = _marketCores[marketId].state;
        if (current != required) revert InvalidMarketState(marketId, current, required);
        _;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // INITIALIZER (called by sport-specific child initializer)
    // ═══════════════════════════════════════════════════════════════════════

    // forge-lint: disable-next-line(mixed-case-function)
    function __PariMatchBase_init(
        string memory _matchName,
        string memory _sportType,
        address _owner
    ) internal onlyInitializing {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
        _grantRole(ADMIN_ROLE,         _owner);
        _grantRole(PAUSER_ROLE,        _owner);

        // RESOLVER_ROLE is intentionally NOT granted here. Resolution must be
        // assigned to a dedicated oracle address after deployment via
        // grantRole(RESOLVER_ROLE, oracle), separating oracle key from admin key.

        matchName = _matchName;
        sportType = _sportType;
        feeBps    = DEFAULT_FEE_BPS; // 2%

        emit MatchInitialized(_matchName, _sportType, _owner);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ADMIN SETTERS
    // ═══════════════════════════════════════════════════════════════════════
    //
    // Economic parameters (token, fee recipients, fee rates) are
    // DEFAULT_ADMIN_ROLE, i.e. governance on factory-created matches, not the
    // ops hot key: the ops key could otherwise open zero-fee markets to farm
    // the leaderboard, or redirect the fees.

    /// @notice Set the settlement token. Only before any market exists:
    ///         switching tokens with stakes in escrow would pay
    ///         claims and refunds in a token nobody deposited.
    function setUSDCToken(address _usdc) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_usdc == address(0)) revert USDCNotConfigured();
        if (address(usdcToken) != address(0) && marketCount != 0) revert USDCAlreadyConfigured();
        usdcToken = IERC20(_usdc);
        emit USDCTokenSet(_usdc);
    }

    /// @notice Set the recipient of the company share of the fee.
    function setFeeRecipient(address _recipient) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_recipient == address(0)) revert FeeRecipientNotConfigured();
        address old = feeRecipient;
        feeRecipient = _recipient;
        emit FeeRecipientSet(old, _recipient);
    }

    /// @notice Total fee for markets opened from now on. Markets already open
    ///         keep the fee frozen when they opened.
    function setFeeBps(uint16 _feeBps) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_feeBps > MAX_FEE_BPS) revert FeeBpsExceedsMax(_feeBps, MAX_FEE_BPS);
        // Lower the total below an already-set leaderboard share would yield
        // a negative company portion. Enforce the invariant up-front.
        if (leaderboardFeeBps > _feeBps) {
            revert LeaderboardFeeExceedsTotal(leaderboardFeeBps, _feeBps);
        }
        uint16 old = feeBps;
        feeBps = _feeBps;
        emit FeeBpsSet(old, _feeBps);
    }

    /// @notice Configure the leaderboard portion of the total fee. Must be
    ///         <= `feeBps`. Zero means "no leaderboard split — full fee to
    ///         company" (backward-compatible default). A non-zero share needs
    ///         a leaderboard recipient first.
    ///         Applies to markets opened afterwards; open markets keep the
    ///         share frozen when they opened.
    function setLeaderboardFeeBps(uint16 _bps) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_bps > feeBps) revert LeaderboardFeeExceedsTotal(_bps, feeBps);
        if (_bps != 0 && leaderboardRecipient == address(0)) revert LeaderboardRecipientNotConfigured();
        uint16 old = leaderboardFeeBps;
        leaderboardFeeBps = _bps;
        emit LeaderboardFeeBpsSet(old, _bps);
    }

    /// @notice Set the address that receives the leaderboard share of the
    ///         fee. Zero clears the recipient (no leaderboard payouts; the
    ///         `recordWin` notify in `_processClaim` becomes a no-op) and is
    ///         only allowed once `leaderboardFeeBps` is 0.
    ///         When non-zero, must be the address of a `LeaderboardRewards`
    ///         proxy (or compatible `ILeaderboardRewards` sink).
    function setLeaderboardRecipient(address _recipient) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_recipient == address(0) && leaderboardFeeBps != 0) revert LeaderboardFeeExceedsTotal(leaderboardFeeBps, 0);
        address old = leaderboardRecipient;
        leaderboardRecipient = _recipient;
        emit LeaderboardRecipientSet(old, _recipient);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // MARKET CREATION  (generic, type-checked through child hooks)
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Add a market of `marketType` with optional `line` parameter.
    /// @dev    `line` semantics depend on the market type. Examples:
    ///           - O/U markets: line in 1/10 goal/point units (25 = 2.5)
    ///           - Scalar/bucket markets: line = cap of the highest bucket
    ///           - Markets that ignore the line: pass 0
    function addMarketWithLine(bytes32 marketType, int16 line)
        external
        onlyRole(ADMIN_ROLE)
        returns (uint256 marketId)
    {
        return _addMarket(marketType, line, 0, 0);
    }

    /// @notice Add a market with sport-specific `extra` byte (e.g. basketball
    ///         quarter) and optional UI `groupId`.
    function addMarketAdvanced(
        bytes32 marketType,
        int16   line,
        uint8   extra,
        uint16  groupId
    )
        external
        onlyRole(ADMIN_ROLE)
        returns (uint256 marketId)
    {
        return _addMarket(marketType, line, extra, groupId);
    }

    /// @notice Batch add markets sharing default extra/groupId = 0.
    function addMarketsBatch(
        bytes32[] calldata marketTypes,
        int16[]   calldata lines
    ) external onlyRole(ADMIN_ROLE) {
        uint256 n = marketTypes.length;
        if (n != lines.length) revert ArrayLengthMismatch();
        for (uint256 i; i < n; ++i) {
            _addMarket(marketTypes[i], lines[i], 0, 0);
        }
    }

    /// @notice Batch add markets with sport-specific `extra` and `groupId`.
    function addMarketsBatchAdvanced(
        bytes32[] calldata marketTypes,
        int16[]   calldata lines,
        uint8[]   calldata extras,
        uint16[]  calldata groupIds
    ) external onlyRole(ADMIN_ROLE) {
        uint256 n = marketTypes.length;
        if (n != lines.length || n != extras.length || n != groupIds.length)
            revert ArrayLengthMismatch();
        for (uint256 i; i < n; ++i) {
            _addMarket(marketTypes[i], lines[i], extras[i], groupIds[i]);
        }
    }

    function _addMarket(
        bytes32 marketType,
        int16   line,
        uint8   extra,
        uint16  groupId
    ) internal returns (uint256 marketId) {
        if (!_isValidMarketType(marketType)) revert InvalidMarketType(marketType);
        uint8 maxOutcome = _getMaxOutcome(marketType, line);

        marketId = marketCount++;

        _marketCores[marketId].state     = MarketState.Inactive;
        _marketCores[marketId].createdAt = uint40(block.timestamp);

        _marketSpec[marketId] = MarketSpec({
            marketType: marketType,
            line:       line,
            maxOutcome: maxOutcome,
            extra:      extra,
            groupId:    groupId,
            closesAt:   0
        });

        emit MarketCreated(marketId, marketType, line, maxOutcome, groupId);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // BETTING CUTOFF
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Set the on-chain betting cutoff of a market (typically the
    ///         kickoff for pre-match markets). From `closesAt` on, every
    ///         stake reverts and anyone may close the market.
    /// @dev    Allowed until the market settles, as long as the current
    ///         cutoff has not passed (a passed cutoff cannot be reopened).
    ///         `closesAt` must be in the future: to stop betting now, call
    ///         `closeMarket` / `suspendMarket`.
    function setMarketCloseTime(uint256 marketId, uint40 closesAt)
        external validMarket(marketId) onlyRole(ADMIN_ROLE)
    {
        _setCloseTime(marketId, closesAt);
    }

    /// @notice Batch form of `setMarketCloseTime` with one cutoff for all.
    function setMarketsCloseTime(uint256[] calldata marketIds, uint40 closesAt)
        external onlyRole(ADMIN_ROLE)
    {
        uint256 n = marketIds.length;
        for (uint256 i; i < n; ++i) {
            if (marketIds[i] >= marketCount) revert InvalidMarketId(marketIds[i]);
            _setCloseTime(marketIds[i], closesAt);
        }
    }

    function _setCloseTime(uint256 marketId, uint40 closesAt) internal {
        MarketState s = _marketCores[marketId].state;
        if (s == MarketState.Closed || s == MarketState.Resolved || s == MarketState.Cancelled)
            revert InvalidMarketState(marketId, s, MarketState.Open);
        uint40 current = _marketSpec[marketId].closesAt;
        if (current != 0 && block.timestamp >= current) revert BettingClosed(marketId, current);
        if (closesAt <= block.timestamp) revert InvalidCloseTime(marketId, closesAt);
        _marketSpec[marketId].closesAt = closesAt;
        emit MarketCloseTimeSet(marketId, closesAt);
    }

    /// @notice Close a market whose cutoff has passed. Permissionless, so
    ///         resolution never waits on the admin.
    function closeExpiredMarket(uint256 marketId) external validMarket(marketId) {
        uint40 closesAt = _marketSpec[marketId].closesAt;
        if (closesAt == 0 || block.timestamp < closesAt) revert MarketNotExpired(marketId);
        _transitionMarketState(marketId, MarketState.Closed);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // STALE MARKETS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Timestamp from which an unresolved market can be cancelled by
    ///         anyone: cutoff + RESOLUTION_TIMEOUT, or for markets without a
    ///         cutoff, creation + LEGACY_MARKET_TTL + RESOLUTION_TIMEOUT.
    function staleAt(uint256 marketId) public view validMarket(marketId) returns (uint256) {
        uint40 closesAt = _marketSpec[marketId].closesAt;
        uint256 base = closesAt != 0
            ? uint256(closesAt)
            : uint256(_marketCores[marketId].createdAt) + LEGACY_MARKET_TTL;
        return base + RESOLUTION_TIMEOUT;
    }

    /// @notice Cancel a market the oracle never resolved, so every staker
    ///         can claim a full refund. Permissionless once `staleAt` passed.
    function cancelStaleMarket(uint256 marketId) external validMarket(marketId) {
        MarketCoreData storage core = _marketCores[marketId];
        MarketState s = core.state;
        if (s != MarketState.Open && s != MarketState.Suspended && s != MarketState.Closed)
            revert InvalidMarketState(marketId, s, MarketState.Closed);
        uint256 deadline = staleAt(marketId);
        if (block.timestamp < deadline) revert MarketNotStale(marketId, deadline);

        core.state = MarketState.Cancelled;
        emit MarketStateChanged(marketId, s, MarketState.Cancelled);
        emit MarketCancelled(marketId, "stale: not resolved in time");
        emit StaleMarketCancelled(marketId, msg.sender);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // MARKET STATE MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Open a market for stakes, from Inactive or Suspended. Freezes its fees the first time.
    function openMarket(uint256 marketId)
        external validMarket(marketId) onlyRole(ADMIN_ROLE)
    { _transitionMarketState(marketId, MarketState.Open); }

    /// @notice Stop stakes temporarily on an Open market.
    function suspendMarket(uint256 marketId)
        external validMarket(marketId) onlyRole(ADMIN_ROLE)
    { _transitionMarketState(marketId, MarketState.Suspended); }

    /// @notice Stop stakes on an Open or Suspended market, ahead of resolution.
    function closeMarket(uint256 marketId)
        external validMarket(marketId) onlyRole(ADMIN_ROLE)
    { _transitionMarketState(marketId, MarketState.Closed); }

    /// @notice Open several markets, skipping those already Open.
    function openMarketsBatch(uint256[] calldata marketIds) external onlyRole(ADMIN_ROLE) {
        uint256 n = marketIds.length;
        for (uint256 i; i < n; ++i) {
            if (marketIds[i] >= marketCount) revert InvalidMarketId(marketIds[i]);
            if (_marketCores[marketIds[i]].state == MarketState.Open) continue;
            _transitionMarketState(marketIds[i], MarketState.Open);
        }
    }

    /// @notice Close several markets, skipping those already Closed, Resolved or Cancelled.
    function closeMarketsBatch(uint256[] calldata marketIds) external onlyRole(ADMIN_ROLE) {
        uint256 n = marketIds.length;
        for (uint256 i; i < n; ++i) {
            if (marketIds[i] >= marketCount) revert InvalidMarketId(marketIds[i]);
            MarketState s = _marketCores[marketIds[i]].state;
            if (s == MarketState.Closed || s == MarketState.Resolved || s == MarketState.Cancelled) continue;
            _transitionMarketState(marketIds[i], MarketState.Closed);
        }
    }

    /// @notice Cancel an Open, Suspended or Closed market so every staker can refund.
    function cancelMarket(uint256 marketId, string calldata reason)
        external validMarket(marketId) onlyRole(ADMIN_ROLE)
    {
        _transitionMarketState(marketId, MarketState.Cancelled);
        emit MarketCancelled(marketId, reason);
    }

    function _transitionMarketState(uint256 marketId, MarketState newState) internal {
        MarketCoreData storage core = _marketCores[marketId];
        MarketState oldState = core.state;

        if (newState == MarketState.Open) {
            if (oldState != MarketState.Inactive && oldState != MarketState.Suspended)
                revert InvalidMarketState(marketId, oldState, newState);
            // The fee a bettor sees when the market opens is the fee
            // they settle at. Later setFeeBps / setLeaderboardFeeBps calls
            // only reach markets opened afterwards.
            if (!core.feesFrozen) {
                core.feeBps            = feeBps;
                core.leaderboardFeeBps = leaderboardFeeBps;
                core.feesFrozen        = true;
                emit MarketFeesFrozen(marketId, feeBps, leaderboardFeeBps);
            }
        } else if (newState == MarketState.Suspended) {
            if (oldState != MarketState.Open)
                revert InvalidMarketState(marketId, oldState, newState);
        } else if (newState == MarketState.Closed) {
            if (oldState != MarketState.Open && oldState != MarketState.Suspended)
                revert InvalidMarketState(marketId, oldState, newState);
        } else if (newState == MarketState.Cancelled) {
            if (
                oldState != MarketState.Open &&
                oldState != MarketState.Suspended &&
                oldState != MarketState.Closed
            ) revert InvalidMarketState(marketId, oldState, newState);
        } else {
            revert InvalidMarketState(marketId, oldState, newState);
        }

        core.state = newState;
        emit MarketStateChanged(marketId, oldState, newState);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // POSITION TAKING
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Place a stake directly with USDC.
    /// @dev    Caller must approve `amount` USDC to THIS contract.
    function placeBetUSDC(uint256 marketId, uint64 outcome, uint256 amount)
        external
        nonReentrant
        validMarket(marketId)
        inState(marketId, MarketState.Open)
        whenNotPaused
    {
        if (address(usdcToken) == address(0)) revert USDCNotConfigured();
        if (amount == 0) revert ZeroStake();
        if (amount < MIN_STAKE) revert StakeBelowMinimum(amount, MIN_STAKE);

        _validateOutcome(marketId, outcome);
        _requireBettingWindow(marketId);

        usdcToken.safeTransferFrom(msg.sender, address(this), amount);
        _recordStake(msg.sender, marketId, outcome, amount);
    }

    /// @notice Place a stake on behalf of a user after the router has already
    ///         transferred `amount` USDC to this contract.
    /// @dev    Reverts unless the USDC balance covers every stake
    ///         already accounted for plus `amount`, so a SWAP_ROUTER_ROLE
    ///         holder cannot record a stake it did not fund.
    function placeBetUSDCFor(
        address user,
        uint256 marketId,
        uint64  outcome,
        uint256 amount
    )
        external
        nonReentrant
        validMarket(marketId)
        inState(marketId, MarketState.Open)
        whenNotPaused
        onlyRole(SWAP_ROUTER_ROLE)
    {
        if (amount == 0) revert ZeroStake();
        if (amount < MIN_STAKE) revert StakeBelowMinimum(amount, MIN_STAKE);
        _validateOutcome(marketId, outcome);
        _requireBettingWindow(marketId);
        if (address(usdcToken) == address(0)) revert USDCNotConfigured();

        uint256 required = _accountedUsdc + amount;
        uint256 balance  = usdcToken.balanceOf(address(this));
        if (balance < required) revert UnbackedStake(required, balance);

        _recordStake(user, marketId, outcome, amount);
    }

    /// @dev No stake from the market's cutoff on.
    function _requireBettingWindow(uint256 marketId) internal view {
        uint40 closesAt = _marketSpec[marketId].closesAt;
        if (closesAt != 0 && block.timestamp >= closesAt) revert BettingClosed(marketId, closesAt);
    }

    function _recordStake(
        address user,
        uint256 marketId,
        uint64  outcome,
        uint256 amount
    ) internal {
        _accountedUsdc                         += amount;
        _userStake[marketId][user][outcome]    += amount;
        _userTotalStake[marketId][user]        += amount;
        _outcomePool[marketId][outcome]        += amount;
        _totalPool[marketId]                   += amount;

        emit PositionTaken(
            marketId, user, outcome, amount,
            _outcomePool[marketId][outcome],
            _totalPool[marketId]
        );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // RESOLUTION
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Settle a Closed market with an explicit winning outcome.
    /// @dev With no stake on the winning outcome, the market is cancelled instead.
    function resolveMarket(uint256 marketId, uint64 result)
        external
        validMarket(marketId)
        onlyRole(RESOLVER_ROLE)
    {
        _resolveMarketInternal(marketId, result);
    }

    /// @notice Settle several Closed markets with explicit outcomes.
    function resolveMarketsBatch(uint256[] calldata marketIds, uint64[] calldata results)
        external
        onlyRole(RESOLVER_ROLE)
    {
        uint256 n = marketIds.length;
        if (n != results.length) revert ArrayLengthMismatch();
        for (uint256 i; i < n; ++i) {
            if (marketIds[i] >= marketCount) revert InvalidMarketId(marketIds[i]);
            _resolveMarketInternal(marketIds[i], results[i]);
        }
    }

    function _resolveMarketInternal(uint256 marketId, uint64 result) internal {
        MarketCoreData storage core = _marketCores[marketId];
        if (core.state != MarketState.Closed)
            revert InvalidMarketState(marketId, core.state, MarketState.Closed);

        _validateOutcome(marketId, result);

        uint256 total       = _totalPool[marketId];
        uint256 winningPool = _outcomePool[marketId][result];

        // Void market: no one bet on the winning side → cancel so all stakers refund.
        if (winningPool == 0) {
            core.state = MarketState.Cancelled;
            emit MarketStateChanged(marketId, MarketState.Closed, MarketState.Cancelled);
            emit MarketCancelled(marketId, "void: no winning bets");
            return;
        }

        // Split-fee math. The total fee is company + leaderboard; each share
        // is computed independently to avoid floor-division drift between
        // the two recipients. Fees are the ones frozen when the market opened;
        // markets opened before that existed fall back to the
        // match-level values. No losers means no fee: winners get
        // their stake back in full.
        uint256 leaderboardFee;
        uint256 companyFee;
        if (winningPool != total) {
            (uint16 totalBps, uint16 lbBps) = core.feesFrozen
                ? (core.feeBps, core.leaderboardFeeBps)
                : (feeBps, leaderboardFeeBps);
            leaderboardFee = (total * lbBps) / BPS_DENOM;
            companyFee     = (total * (totalBps - lbBps)) / BPS_DENOM;
        }
        uint256 fee     = leaderboardFee + companyFee;
        uint256 netPool = total - fee;

        core.result          = result;
        core.resolvedAt      = uint40(block.timestamp);
        core.state           = MarketState.Resolved;
        core.resolvedNetPool = netPool;
        _decreaseAccounted(fee);

        emit MarketStateChanged(marketId, MarketState.Closed, MarketState.Resolved);
        emit MarketResolved(marketId, result, total, fee, netPool);

        // CEI: state is written before the external calls below.
        // A frozen leaderboard share whose recipient was cleared since
        // goes to the company recipient instead of bricking the resolution.
        address lb = leaderboardRecipient;
        if (lb == address(0)) {
            companyFee    += leaderboardFee;
            leaderboardFee = 0;
        }
        if (companyFee > 0) {
            if (feeRecipient == address(0)) revert FeeRecipientNotConfigured();
            usdcToken.safeTransfer(feeRecipient, companyFee);
        }
        if (leaderboardFee > 0) {
            usdcToken.safeTransfer(lb, leaderboardFee);
            // Attribute the fee to the epoch of this resolution. Best
            // effort: if it fails the USDC still sits in the leaderboard and
            // joins the next epoch that closes. The code check matters: a
            // `try` on an address without code reverts in THIS contract
            // instead of reaching `catch`, which would brick the resolution.
            if (lb.code.length == 0) {
                emit LeaderboardNotifyFailed(lb, leaderboardFee);
            } else {
                try ILeaderboardRewards(lb).notifyFee(leaderboardFee) {
                    // ok
                } catch {
                    emit LeaderboardNotifyFailed(lb, leaderboardFee);
                }
            }
        }
    }

    /// @dev Saturating decrement of `_accountedUsdc` (see its natspec).
    function _decreaseAccounted(uint256 amount) internal {
        uint256 a = _accountedUsdc;
        _accountedUsdc = amount >= a ? 0 : a - amount;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // CLAIM (WINNER)
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Collect the caller's winnings on a Resolved market.
    function claim(uint256 marketId)
        external
        nonReentrant
        validMarket(marketId)
        inState(marketId, MarketState.Resolved)
    {
        _requireClaimsOpen();
        _processClaim(msg.sender, marketId);
    }

    /// @notice Claim several resolved markets at once. Markets that are not
    ///         resolved, already claimed, or where the caller holds no
    ///         winning stake are skipped instead of reverting.
    function claimBatch(uint256[] calldata marketIds)
        external
        nonReentrant
    {
        _requireClaimsOpen();
        uint256 n = marketIds.length;
        for (uint256 i; i < n; ++i) {
            uint256 mid = marketIds[i];
            if (mid >= marketCount) revert InvalidMarketId(mid);
            if (_marketCores[mid].state != MarketState.Resolved) continue;
            if (_claimed[mid][msg.sender]) continue;
            if (_userStake[mid][msg.sender][_marketCores[mid].result] == 0) continue;
            _processClaim(msg.sender, mid);
        }
    }

    /// @dev A pause stops claims for at most MAX_CLAIM_PAUSE, so the
    ///      pauser cannot hold winnings hostage indefinitely.
    function _requireClaimsOpen() internal view {
        if (!paused()) return;
        uint256 reopensAt = uint256(pausedAt) + MAX_CLAIM_PAUSE;
        if (block.timestamp < reopensAt) revert ClaimsPaused(reopensAt);
    }

    function _processClaim(address user, uint256 marketId) internal {
        if (_claimed[marketId][user]) revert AlreadyClaimed(marketId, user);

        MarketCoreData storage core = _marketCores[marketId];
        uint64 winningOutcome   = core.result;
        uint256 userWinStake    = _userStake[marketId][user][winningOutcome];

        if (userWinStake == 0) revert NothingToClaim(marketId, user);

        uint256 winningPool = _outcomePool[marketId][winningOutcome];
        uint256 netPool     = core.resolvedNetPool;

        uint256 payout = (userWinStake * netPool) / winningPool;

        _claimed[marketId][user] = true;
        core.paidOut         += payout;
        core.claimedWinStake += userWinStake;
        _decreaseAccounted(payout);

        usdcToken.safeTransfer(user, payout);
        emit PositionClaimed(marketId, user, userWinStake, payout);

        // Best-effort leaderboard credit, wrapped in try/catch — a paused,
        // upgraded, or misconfigured leaderboard MUST NOT be able to brick
        // claims. The score is the NET profit on this market (payout
        // minus everything the user staked on it, all outcomes), credited to
        // the epoch of the market's resolution, not of the claim.
        // A market whose leaderboard share is 0 feeds nothing to the prize
        // pool, so it scores nothing either (no zero-fee score farming).
        address lb = leaderboardRecipient;
        uint256 totalStake = _userTotalStake[marketId][user];
        uint16 lbBps = core.feesFrozen ? core.leaderboardFeeBps : leaderboardFeeBps;
        if (lbBps != 0 && lb.code.length != 0 && payout > totalStake) { // no-code guard: see resolution
            uint256 profit = payout - totalStake;
            try ILeaderboardRewards(lb).recordProfit(user, profit, core.resolvedAt) {
                // ok
            } catch {
                emit LeaderboardRecordFailed(lb, user, profit);
            }
        }
    }

    // ═══════════════════════════════════════════════════════════════════════
    // REFUND (CANCELLED MARKET)
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Take back the caller's whole stake on a Cancelled market. Works while paused.
    function claimRefund(uint256 marketId)
        external
        nonReentrant
        validMarket(marketId)
        inState(marketId, MarketState.Cancelled)
    {
        _processRefund(msg.sender, marketId);
    }

    /// @notice Refund several Cancelled markets, skipping the others and those already refunded.
    function claimRefundBatch(uint256[] calldata marketIds)
        external
        nonReentrant
    {
        uint256 n = marketIds.length;
        for (uint256 i; i < n; ++i) {
            uint256 mid = marketIds[i];
            if (mid >= marketCount) revert InvalidMarketId(mid);
            if (_marketCores[mid].state != MarketState.Cancelled) continue;
            if (_claimed[mid][msg.sender]) continue;
            _processRefund(msg.sender, mid);
        }
    }

    function _processRefund(address user, uint256 marketId) internal {
        if (_claimed[marketId][user]) revert AlreadyClaimed(marketId, user);

        uint256 refund = _userTotalStake[marketId][user];
        if (refund == 0) revert NothingToRefund(marketId, user);

        _claimed[marketId][user] = true;
        _decreaseAccounted(refund);

        usdcToken.safeTransfer(user, refund);
        emit StakeRefunded(marketId, user, refund);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ROUNDING DUST
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice USDC left in a resolved market once every winner has claimed:
    ///         the floor-division remainder of the payouts. Zero until the
    ///         last winning stake is claimed, so unclaimed winnings are never
    ///         counted as dust.
    function sweepableDust(uint256 marketId) public view validMarket(marketId) returns (uint256) {
        MarketCoreData storage core = _marketCores[marketId];
        if (core.state != MarketState.Resolved) return 0;
        if (core.claimedWinStake != _outcomePool[marketId][core.result]) return 0;
        return core.resolvedNetPool - core.paidOut;
    }

    /// @notice Send a fully claimed market's rounding dust to `feeRecipient`.
    ///         Permissionless; reverts when there is nothing to sweep.
    function sweepDust(uint256 marketId) external nonReentrant validMarket(marketId) {
        uint256 dust = sweepableDust(marketId);
        if (dust == 0) revert DustNotSweepable(marketId);
        address to = feeRecipient;
        if (to == address(0)) revert FeeRecipientNotConfigured();

        _marketCores[marketId].paidOut += dust; // nothing left to sweep twice
        _decreaseAccounted(dust);
        usdcToken.safeTransfer(to, dust);
        emit DustSwept(marketId, to, dust);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // OUTCOME VALIDATION
    // ═══════════════════════════════════════════════════════════════════════

    function _validateOutcome(uint256 marketId, uint64 outcome) internal view {
        uint8 maxO = _marketSpec[marketId].maxOutcome;
        if (outcome > maxO) revert InvalidOutcomeValue(marketId, outcome, maxO);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // VIEW FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice State, result, timestamps and net pool of a market.
    function getMarketCore(uint256 marketId)
        external view validMarket(marketId) returns (MarketCore memory)
    {
        MarketCoreData storage c = _marketCores[marketId];
        return MarketCore({
            state:           c.state,
            result:          c.result,
            createdAt:       c.createdAt,
            resolvedAt:      c.resolvedAt,
            resolvedNetPool: c.resolvedNetPool
        });
    }

    /// @notice Fees a market settles at: frozen at opening, or the
    ///         current match-level values while it has never been opened.
    function getMarketFees(uint256 marketId)
        external view validMarket(marketId)
        returns (uint16 totalFeeBps, uint16 leaderboardShareBps, bool frozen)
    {
        MarketCoreData storage c = _marketCores[marketId];
        if (c.feesFrozen) return (c.feeBps, c.leaderboardFeeBps, true);
        return (feeBps, leaderboardFeeBps, false);
    }

    /// @notice Type, line, outcome range, cutoff and UI fields of a market.
    function getMarketSpec(uint256 marketId)
        external view validMarket(marketId) returns (MarketSpec memory)
    { return _marketSpec[marketId]; }

    /// @notice Summary of a market: type, state, result, pool and outcome count.
    function getMarketInfo(uint256 marketId)
        external
        view
        validMarket(marketId)
        returns (
            bytes32     marketType,
            MarketState state,
            uint64      result,
            uint256     totalPool,
            uint256     outcomeCount
        )
    {
        MarketSpec storage spec = _marketSpec[marketId];
        MarketCoreData storage core = _marketCores[marketId];
        marketType   = spec.marketType;
        state        = core.state;
        result       = core.result;
        totalPool    = _totalPool[marketId];
        outcomeCount = uint256(spec.maxOutcome) + 1;
    }

    /// @notice Total USDC staked on a market.
    function getTotalPool(uint256 marketId)
        external view validMarket(marketId) returns (uint256)
    { return _totalPool[marketId]; }

    /// @notice USDC staked on one outcome of a market.
    function getOutcomePool(uint256 marketId, uint64 outcome)
        external view validMarket(marketId) returns (uint256)
    { return _outcomePool[marketId][outcome]; }

    /// @notice USDC staked by `user` on one outcome of a market.
    function getUserStake(uint256 marketId, address user, uint64 outcome)
        external view validMarket(marketId) returns (uint256)
    { return _userStake[marketId][user][outcome]; }

    /// @notice USDC staked by `user` across every outcome of a market.
    function getUserTotalStake(uint256 marketId, address user)
        external view validMarket(marketId) returns (uint256)
    { return _userTotalStake[marketId][user]; }

    /// @notice Whether `user` already claimed or refunded a market.
    function hasClaimed(uint256 marketId, address user)
        external view validMarket(marketId) returns (bool)
    { return _claimed[marketId][user]; }

    /// @notice Off-chain indicative implied probability for an outcome.
    function getImpliedProbabilityBps(uint256 marketId, uint64 outcome)
        external view validMarket(marketId) returns (uint256 bps)
    {
        uint256 total = _totalPool[marketId];
        if (total == 0) return 0;
        return (_outcomePool[marketId][outcome] * BPS_DENOM) / total;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // EMERGENCY
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Stop new stakes and, for at most MAX_CLAIM_PAUSE, claims.
    /// @dev The claim-freeze clock (`pausedAt`) only restarts if the previous
    ///      pause began at least 2 x MAX_CLAIM_PAUSE ago, so cycling
    ///      unpause / emergencyPause cannot keep claims frozen: they stay open
    ///      at least half of the time.
    function emergencyPause() external onlyRole(PAUSER_ROLE) {
        if (pausedAt == 0 || block.timestamp >= uint256(pausedAt) + 2 * MAX_CLAIM_PAUSE) {
            pausedAt = uint40(block.timestamp);
        }
        _pause();
    }
    /// @notice Lift the pause.
    function unpause()        external onlyRole(ADMIN_ROLE)  { _unpause(); }

    // No `_authorizeUpgrade` / UUPS: code changes go through the beacon only.
    // The storage layout is unchanged: OZ 5 keeps Ownable / UUPS state in
    // ERC-7201 namespaced slots, never in the linear slots 0-49 used here.

    // ═══════════════════════════════════════════════════════════════════════
    // ABSTRACT (sport-specific)
    // ═══════════════════════════════════════════════════════════════════════

    /// @dev Children whitelist the market types they support.
    function _isValidMarketType(bytes32 marketType) internal view virtual returns (bool);

    /// @dev Children return the inclusive max outcome index for (type, line).
    ///      Children should revert with InvalidLine if the line is unsupported.
    function _getMaxOutcome(bytes32 marketType, int16 line) internal view virtual returns (uint8);
}

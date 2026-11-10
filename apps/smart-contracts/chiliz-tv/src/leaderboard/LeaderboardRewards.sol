// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Initializable}              from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {AccessControlUpgradeable}   from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {UUPSUpgradeable}            from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable}        from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {IERC20}                     from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20}                  from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {ILeaderboardRewards} from "../interfaces/ILeaderboardRewards.sol";

/// @dev Minimal slice of `PariMatchFactory.isMatch(address)` used by the
///      leaderboard to authorize `recordWin` calls. Living here as an inline
///      interface keeps the leaderboard contract independent of the rest of
///      the pari tree (no cyclic compile dependency).
interface IPariMatchFactoryView {
    /// @notice Whether an address is a match created by the factory.
    function isMatch(address) external view returns (bool);
}

/**
 * @title LeaderboardRewards
 * @author ChilizTV Team
 * @notice Fully on-chain epoch-based leaderboard for pari-mutuel winners.
 *
 * @dev Architecture overview
 * ──────────────────────────
 * Match contracts (`FootballPariMatch`, `BasketballPariMatch`) credit each
 * winner's net profit through `recordProfit(user, profit, resolvedAt)`. The
 * contract holds USDC funded by the leaderboard share of the fee, 1% of the
 * pool by default, taken at every market resolution.
 *
 * Distribution model: **pro-rata, per epoch**.
 *
 *   1. `recordProfit` adds the profit to the score of the epoch containing the
 *      market's resolution time, and to that epoch's running total.
 *   2. An epoch closes SCORING_GRACE after its boundary, at the first
 *      interaction past it or through the permissionless `advanceEpoch()`.
 *      Closing snapshots the open prize pool into `_epochs[closedId].prizePool`,
 *      opens a claim window of `epochDuration` from the actual close, and rolls
 *      `epochIndex` and `epochStartTime` forward by exactly one boundary.
 *   3. `claim(epochId)` pays the caller their pro-rata share of the closed
 *      epoch's pool: `(epochScore[user] * prizePool) / totalScore`. No
 *      merkle proof — every scorer is implicitly entitled.
 *   4. After the claim window expires, any unclaimed remainder rolls back
 *      into the open prize pool via permissionless `rolloverEpoch(epochId)`.
 *      Time spent paused does not count: `claimDeadline` adds it to the window.
 *
 * V2 upgrade notes
 * ────────────────
 * V1 used an off-chain ranker + merkle distribution. V2 deletes that path and
 * keeps everything on-chain. Storage layout is preserved: the legacy
 * cumulative `_score` mapping at slot 2 is left untouched (orphaned, harmless)
 * and the new state lives at slots 6–9 (`epochStartTime` is packed into
 * slot 6 after `matchFactory`, `epochDuration` takes slot 7; slots 8 and 9
 * hold the two new mappings). The
 * `Epoch.merkleRoot` field is also preserved (slot reservation) but never
 * written or read post-V2.
 *
 * V3 changes
 * ──────────
 *   - Scores are NET PROFIT (payout minus the user's total stake on the
 *     market) credited by `recordProfit` to the epoch containing the
 *     market's resolution time, not to whatever epoch is open at claim time
 *     . Self-hedging on every outcome scores nothing. The V2
 *     `recordWin(user, grossPayout)` entrypoint credits nothing anymore.
 *   - Fees are attributed to the epoch of the resolution that produced them
 *     (`notifyFee`), so fees arriving after an epoch boundary belong to the
 *     next epoch instead of inflating the one being closed.
 *   - An epoch is closed SCORING_GRACE after its boundary, giving late
 *     claimers of its markets time to be credited, and its claim window
 *     runs from the actual close, never from the theoretical boundary, so
 *     a late close no longer creates an already-expired epoch.
 *     An epoch closed without any score keeps its pool open for the next.
 *   - `recordProfit` / `notifyFee` are not pausable: pausing used to make
 *     the credits of the whole pause period disappear.
 *     `initializeV2` is restricted to DEFAULT_ADMIN_ROLE.
 *   Storage: two variables appended after slot 9 (`_epochFees`,
 *   `_notifiedAhead`); the gap shrinks from 40 to 38.
 *
 * V4 changes
 * ──────────
 *   - A pause no longer lets prizes expire: claim windows and rollovers are
 *     extended by the time spent paused after the epoch closed
 *     (`claimDeadline`).
 *   Storage: slot 12 packs the pause clock, slot 13 maps each epoch to the
 *   clock at its close; the gap shrinks from 38 to 36.
 *
 * Trust model
 * ────────────
 *   - Match proxies are authorized via `matchFactory.isMatch(msg.sender)` —
 *     identical to V1.
 *   - `ADMIN_ROLE` can rotate the epoch duration within sane bounds and
 *     manages the upgrade path. The duration change applies forward only;
 *     the current epoch's `epochStartTime` is not retroactively moved.
 *   - `ORACLE_ROLE` is preserved in the access-control table for backward
 *     compatibility (don't break `hasRole` callers) but no entry point uses
 *     it in V2.
 */
contract LeaderboardRewards is
    Initializable,
    AccessControlUpgradeable,
    UUPSUpgradeable,
    ReentrancyGuardUpgradeable,
    PausableUpgradeable,
    ILeaderboardRewards
{
    using SafeERC20 for IERC20;

    // ═══════════════════════════════════════════════════════════════════════
    // CONSTANTS & ROLES
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Admin (role management, upgrades, pause, factory pointer,
    ///         epoch duration).
    bytes32 public constant ADMIN_ROLE  = keccak256("ADMIN_ROLE");
    /// @notice V1 role kept for backward compatibility. Unused in V2.
    bytes32 public constant ORACLE_ROLE = keccak256("ORACLE_ROLE");
    /// @notice Emergency pause.
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    /// @notice Default epoch duration applied at V2 init. Admin can rotate it.
    uint64 public constant DEFAULT_EPOCH_DURATION = 30 days;
    /// @notice Lower bound of the admin-settable epoch duration.
    uint64 public constant MIN_EPOCH_DURATION = 1 days;
    /// @notice Upper bound of the admin-settable epoch duration.
    uint64 public constant MAX_EPOCH_DURATION = 365 days;

    /// @notice An epoch closes this long after its boundary, so markets it
    ///         resolved can still be claimed (and scored) in the meantime.
    uint64 public constant SCORING_GRACE = 3 days;

    // ═══════════════════════════════════════════════════════════════════════
    // STRUCTS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice One epoch's distribution snapshot.
    /// @dev    V1 layout preserved; `merkleRoot` is dead storage in V2 but
    ///         kept so existing entries (currently none on mainnet/testnet)
    ///         stay readable.
    struct Epoch {
        uint64  startTime;
        uint64  closedAt;
        uint64  claimExpiry;
        bool    closed;
        uint256 prizePool;
        uint256 totalClaimed;
        bytes32 merkleRoot;   // V2: unused
    }

    // ═══════════════════════════════════════════════════════════════════════
    // STORAGE (upgrade-safe — do NOT reorder)
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice USDC token used to fund the leaderboard and pay prizes.
    IERC20 public usdcToken;                                              // slot 0

    /// @notice Monotonically increasing epoch index. Starts at 0;
    ///         incremented when the active epoch's boundary passes.
    uint256 public epochIndex;                                            // slot 1

    /// @notice V1 cumulative score mapping. Orphaned in V2; left in place
    ///         so slot 2 keeps its meaning for any future reader.
    mapping(address user => uint256 cumulativePayout) internal _score;    // slot 2

    /// @notice Epoch metadata keyed by epoch index.
    mapping(uint256 epochId => Epoch) internal _epochs;                   // slot 3

    /// @notice (epochId, user) → claimed flag. Prevents double-claim.
    mapping(uint256 epochId => mapping(address user => bool)) internal _claimed; // slot 4

    /// @notice Sum of (Epoch.prizePool - Epoch.totalClaimed) over every
    ///         still-claimable closed epoch. Lets us compute the open
    ///         prize pool as `balanceOf(this) - _lockedInClosedEpochs`
    ///         without iterating all past epochs.
    uint256 internal _lockedInClosedEpochs;                               // slot 5

    /// @notice PariMatchFactory used to authorize match callers.
    IPariMatchFactoryView public matchFactory;                            // slot 6

    // ─── V2 additions (appended; layout-safe) ──────────────────────────────

    /// @notice Start time of the currently-open epoch (`_epochs[epochIndex]`).
    ///         Set at V2 init and rolled forward by `_maybeAdvanceEpoch`.
    uint64 public epochStartTime;                                         // slot 6 (packed after matchFactory)

    /// @notice Current epoch duration. Admin-settable in `[MIN, MAX]`.
    uint64 public epochDuration;                                          // slot 7

    /// @notice Per-epoch user score: `_epochScores[epochId][user]`.
    mapping(uint256 epochId => mapping(address user => uint256 score)) internal _epochScores; // slot 8

    /// @notice Sum of `_epochScores[epochId][*]` for each epoch. Updated on
    ///         every `recordProfit` and read by `claim` for the pro-rata math.
    mapping(uint256 epochId => uint256 totalScore) internal _epochTotalScore; // slot 9

    // ─── V3 additions (appended; layout-safe) ──────────────────────────────

    /// @notice Fees notified for each epoch (by resolution time). Informative
    ///         for the closed and open epochs; used for epochs ahead of
    ///         `epochIndex` through `_notifiedAhead`.
    mapping(uint256 epochId => uint256 fees) internal _epochFees;        // slot 10

    /// @notice Sum of `_epochFees[k]` for every k > epochIndex: fees that
    ///         arrived after the open epoch's boundary and must not be swept
    ///         into it when it closes.
    uint256 internal _notifiedAhead;                                      // slot 11

    // ─── V4 additions (appended; layout-safe) ──────────────────────────────

    /// @notice When the current pause started, 0 when not paused.
    uint64 internal _pauseStartedAt;                                      // slot 12
    /// @notice Seconds spent in pauses that have ended (since V4).
    uint64 internal _pausedTotal;                                         // slot 12 (packed)

    /// @notice `_pausedClock()` when each epoch closed. The epoch's claim
    ///         window is extended by the time spent paused since then.
    mapping(uint256 epochId => uint256 pausedClock) internal _pausedClockAtClose; // slot 13

    /// Reserved storage gap. V1 reserved [43]; V2 consumed 3 slots (7-9),
    /// V3 consumed 2 (10-11), V4 consumes 2 (12-13), leaving 36.
    uint256[36] private __gap;

    // ═══════════════════════════════════════════════════════════════════════
    // EVENTS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice The proxy was initialized.
    event Initialized(address indexed usdc, address indexed admin);

    /// @notice Per-epoch score for `user` in `epochId` increased by `delta`.
    ///         `newEpochScore` is the post-increment total *for that epoch
    ///         only* — V2 scores do not carry over across epoch boundaries.
    event WinRecorded(
        address indexed match_,
        address indexed user,
        uint256 indexed epochId,
        uint256 delta,
        uint256 newEpochScore
    );

    /// @notice The contract advanced past an epoch boundary. `closedId` is
    ///         now claimable; `prizePool` is its snapshot; `totalScore` is
    ///         the sum of scorers' weights for pro-rata claims.
    event EpochAdvanced(
        uint256 indexed closedId,
        uint256 prizePool,
        uint256 totalScore,
        uint64  closedAt,
        uint64  claimExpiry
    );

    /// @notice `user` claimed `amount` USDC from `epochId`.
    event PrizeClaimed(uint256 indexed epochId, address indexed user, uint256 amount);

    /// @notice Unclaimed funds from `epochId` (= `rolledOver`) released back
    ///         into the open prize pool because the claim window expired.
    event EpochRolledOver(uint256 indexed epochId, uint256 rolledOver);

    /// @notice The prize token changed.
    event USDCTokenSet(address indexed token);
    /// @notice The factory authorizing matches changed.
    event MatchFactorySet(address indexed oldFactory, address indexed newFactory);
    /// @notice The epoch duration changed.
    event EpochDurationSet(uint64 oldDuration, uint64 newDuration);

    /// @notice `amount` of fees attributed to `epochId` by `match_`.
    event FeeNotified(address indexed match_, uint256 indexed epochId, uint256 amount);

    /// @notice A profit could not be credited: its epoch was already closed.
    event ProfitIgnored(address indexed match_, address indexed user, uint256 profit, uint256 resolvedAt);

    /// @notice A V2-style `recordWin` arrived; it no longer credits.
    event LegacyWinIgnored(address indexed match_, address indexed user, uint256 payout);

    // ═══════════════════════════════════════════════════════════════════════
    // ERRORS
    // ═══════════════════════════════════════════════════════════════════════

    error ZeroAddress();
    error UnauthorizedMatch(address caller);
    error MatchFactoryNotSet();
    error InvalidEpochDuration(uint64 provided, uint64 min, uint64 max);
    error EpochNotClosed(uint256 epochId);
    error EpochClaimWindowExpired(uint256 epochId, uint64 claimExpiry, uint256 nowTs);
    error EpochClaimWindowNotExpired(uint256 epochId, uint64 claimExpiry, uint256 nowTs);
    error AlreadyClaimed(uint256 epochId, address user);
    error NothingToClaim(uint256 epochId, address user);
    error AdvanceNotReady(uint256 nowTs, uint256 boundary);
    error InsufficientContractBalance(uint256 needed, uint256 available);
    error AlreadyInitializedV2();
    error EpochClockNotStarted();
    error BalanceNotEmpty(uint256 balance);

    // ═══════════════════════════════════════════════════════════════════════
    // INITIALIZER
    // ═══════════════════════════════════════════════════════════════════════

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /// @notice One-shot V1 initialization for the UUPS proxy. Always runs at
    ///         proxy construction time — V2 builds on top of it by calling
    ///         `initializeV2()` afterwards. The V1 marker (set by the
    ///         `initializer` modifier) is a prerequisite for the V2
    ///         `reinitializer(2)` to advance.
    function initialize(address _usdc, address _admin, address _oracle) external initializer {
        if (_usdc == address(0))  revert ZeroAddress();
        if (_admin == address(0)) revert ZeroAddress();

        __AccessControl_init();
        __UUPSUpgradeable_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(ADMIN_ROLE,         _admin);
        _grantRole(PAUSER_ROLE,        _admin);
        if (_oracle != address(0)) {
            _grantRole(ORACLE_ROLE, _oracle);
        }

        usdcToken = IERC20(_usdc);

        emit Initialized(_usdc, _admin);
    }

    /// @notice V2 initializer. Run once per proxy via one of two paths:
    ///         (a) on an existing V1 proxy, atomically through the upgrade
    ///         script's `upgradeToAndCall(newImpl, initializeV2())`; (b) on a
    ///         fresh proxy, immediately after construction in
    ///         `DeployAll._deployLeaderboard()`. The `reinitializer(2)` guard
    ///         is idempotent across re-upgrades.
    /// @dev    Anchors the epoch clock at the call timestamp and sets the
    ///         default 30-day duration. Doesn't touch any V1 state, so
    ///         existing `_score` entries (if any) remain readable but
    ///         unreferenced by V2 logic.
    ///         Admin-only, so nobody can front-run it to pick
    ///         the epoch clock, and refuses to run twice.
    function initializeV2() external reinitializer(2) onlyRole(DEFAULT_ADMIN_ROLE) {
        if (epochDuration != 0) revert AlreadyInitializedV2();
        epochStartTime = uint64(block.timestamp);
        epochDuration  = DEFAULT_EPOCH_DURATION;
        _epochs[epochIndex].startTime = uint64(block.timestamp);
        emit EpochDurationSet(0, DEFAULT_EPOCH_DURATION);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // ADMIN
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Update the USDC token. Only while the contract holds none of
    ///         the current token: switching with prizes in escrow would pay
    ///         claims in a token nobody deposited.
    function setUSDCToken(address _usdc) external onlyRole(ADMIN_ROLE) {
        if (_usdc == address(0)) revert ZeroAddress();
        uint256 bal = usdcToken.balanceOf(address(this));
        if (bal != 0) revert BalanceNotEmpty(bal);
        usdcToken = IERC20(_usdc);
        emit USDCTokenSet(_usdc);
    }

    /// @notice Register the PariMatchFactory used to authorize match
    ///         callers. Required before any match can credit scores.
    /// @dev Point this at a beacon-based
    ///      PariMatchFactory only: matches of the older UUPS factory can be
    ///      upgraded by their own admin and must not be trusted to score.
    function setMatchFactory(address _factory) external onlyRole(ADMIN_ROLE) {
        if (_factory.code.length == 0) revert ZeroAddress();
        address old = address(matchFactory);
        matchFactory = IPariMatchFactoryView(_factory);
        emit MatchFactorySet(old, _factory);
    }

    /// @notice Rotate the epoch duration. Applies to the current and future
    ///         epochs — does NOT retroactively shift `epochStartTime`, so a
    ///         shorter setting can immediately put the boundary in the past
    ///         and trigger an advance on the next interaction.
    function setEpochDuration(uint64 newDuration) external onlyRole(ADMIN_ROLE) {
        if (newDuration < MIN_EPOCH_DURATION || newDuration > MAX_EPOCH_DURATION) {
            revert InvalidEpochDuration(newDuration, MIN_EPOCH_DURATION, MAX_EPOCH_DURATION);
        }
        uint64 old = epochDuration;
        epochDuration = newDuration;
        emit EpochDurationSet(old, newDuration);
    }

    /// @notice Pause `advanceEpoch`, rollovers and prize claims. Score and fee
    ///         credits keep working, and a credit still closes an epoch that is
    ///         due. Every claim window is extended by the length of the pause,
    ///         so a pause never makes a prize expire.
    function emergencyPause() external onlyRole(PAUSER_ROLE) {
        _pause();
        _pauseStartedAt = uint64(block.timestamp);
    }

    /// @notice Lift the pause.
    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
        // 0 when the pause began before V4: its length is not known, so it is not counted.
        if (_pauseStartedAt != 0) {
            _pausedTotal += uint64(block.timestamp - _pauseStartedAt);
            _pauseStartedAt = 0;
        }
    }

    function _authorizeUpgrade(address) internal override onlyRole(DEFAULT_ADMIN_ROLE) {}

    // ═══════════════════════════════════════════════════════════════════════
    // RECORDING WINS  (called by authorized match contracts)
    // ═══════════════════════════════════════════════════════════════════════

    /// @inheritdoc ILeaderboardRewards
    /// @dev Not pausable. Unauthorized callers revert; the match side
    ///      wraps the call in try/catch.
    function notifyFee(uint256 amount) external override {
        _requireMatch();
        if (amount == 0) return;

        // Attribute first, then advance: the fee is already in our balance,
        // so the epoch being closed must see it as "ahead" to exclude it.
        uint256 k = _epochAt(block.timestamp);
        _epochFees[k] += amount;
        if (k > epochIndex) _notifiedAhead += amount;
        emit FeeNotified(msg.sender, k, amount);

        _maybeAdvanceEpoch();
    }

    /// @inheritdoc ILeaderboardRewards
    /// @dev Not pausable. The epoch is derived from `resolvedAt`, so
    ///      claiming late does not move a win into a quieter epoch.
    ///      A profit whose epoch is already closed is ignored, not reverted.
    function recordProfit(address user, uint256 profit, uint256 resolvedAt) external override {
        _requireMatch();
        if (user == address(0)) revert ZeroAddress();
        if (profit == 0) return;

        _maybeAdvanceEpoch();

        if (resolvedAt > block.timestamp) resolvedAt = block.timestamp;
        if (resolvedAt < epochStartTime) {
            emit ProfitIgnored(msg.sender, user, profit, resolvedAt);
            return;
        }
        uint256 epId = _epochAt(resolvedAt);
        uint256 newScore = _epochScores[epId][user] + profit;
        _epochScores[epId][user] = newScore;
        _epochTotalScore[epId] += profit;

        emit WinRecorded(msg.sender, user, epId, profit, newScore);
    }

    /// @inheritdoc ILeaderboardRewards
    /// @dev V2 credited the gross payout to the epoch open at claim time,
    ///      which made scores farmable. Now a no-op kept for ABI
    ///      compatibility with matches deployed before V3.
    function recordWin(address user, uint256 payout) external override {
        _requireMatch();
        emit LegacyWinIgnored(msg.sender, user, payout);
    }

    function _requireMatch() internal view {
        if (address(matchFactory) == address(0)) revert MatchFactoryNotSet();
        if (!matchFactory.isMatch(msg.sender)) revert UnauthorizedMatch(msg.sender);
        if (epochDuration == 0) revert EpochClockNotStarted(); // initializeV2 not run yet
    }

    /// @dev Epoch containing `t`, for `t >= epochStartTime` (the open epoch
    ///      or a later one). Later epochs are laid out with the current
    ///      duration.
    function _epochAt(uint256 t) internal view returns (uint256) {
        return epochIndex + (t - uint256(epochStartTime)) / uint256(epochDuration);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // EPOCH ADVANCE
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Permissionless catch-up trigger. Closes the open epoch once
    ///         its boundary plus SCORING_GRACE has elapsed. Reverts before
    ///         that (so callers can detect a no-op).
    function advanceEpoch() external whenNotPaused returns (uint256 closedId) {
        uint256 closesAt = uint256(epochStartTime) + uint256(epochDuration) + SCORING_GRACE;
        if (block.timestamp < closesAt) revert AdvanceNotReady(block.timestamp, closesAt);
        closedId = epochIndex;
        _maybeAdvanceEpoch();
        if (epochIndex == closedId) revert AdvanceNotReady(block.timestamp, closesAt);
    }

    /// @notice Close the open epoch if its boundary + SCORING_GRACE passed.
    /// @dev    Single-step on purpose: after a long quiet period
    ///         `advanceEpoch()` can be called repeatedly to catch up.
    ///         The claim window starts at the actual close, and the
    ///         snapshot excludes fees attributed to later epochs. An epoch
    ///         without any score snapshots nothing: its pool stays open for
    ///         the next epoch instead of being locked until expiry.
    function _maybeAdvanceEpoch() internal {
        if (epochDuration == 0) return; // clock not started (initializeV2)
        uint256 boundary = uint256(epochStartTime) + uint256(epochDuration);
        if (block.timestamp < boundary + SCORING_GRACE) return;

        uint256 closedId = epochIndex;
        Epoch storage ep = _epochs[closedId];
        if (ep.closed) return; // defensive

        uint64 closedAt    = uint64(block.timestamp);
        uint64 claimExpiry = uint64(block.timestamp + epochDuration);
        uint256 totalScore = _epochTotalScore[closedId];
        uint256 pool       = totalScore == 0 ? 0 : _openPrizePool();

        ep.closed       = true;
        ep.closedAt     = closedAt;
        ep.claimExpiry  = claimExpiry;
        ep.prizePool    = pool;
        _lockedInClosedEpochs += pool;
        _pausedClockAtClose[closedId] = _pausedClock();

        // Roll forward; fees already attributed to the new open epoch stop
        // being "ahead".
        uint256 nextId = closedId + 1;
        epochIndex      = nextId;
        epochStartTime  = uint64(boundary);
        _epochs[nextId].startTime = uint64(boundary);
        uint256 nowOpen = _epochFees[nextId];
        _notifiedAhead  = nowOpen >= _notifiedAhead ? 0 : _notifiedAhead - nowOpen;

        emit EpochAdvanced(closedId, pool, totalScore, closedAt, claimExpiry);
    }

    /// @notice Release the unclaimed remainder of an expired epoch back into
    ///         the open prize pool. Permissionless once the claim window has
    ///         elapsed.
    function rolloverEpoch(uint256 epochId)
        external
        whenNotPaused
        returns (uint256 rolledOver)
    {
        Epoch storage ep = _epochs[epochId];
        if (!ep.closed) revert EpochNotClosed(epochId);
        uint256 deadline = claimDeadline(epochId);
        if (block.timestamp <= deadline) {
            revert EpochClaimWindowNotExpired(epochId, uint64(deadline), block.timestamp);
        }

        rolledOver = ep.prizePool - ep.totalClaimed;
        if (rolledOver == 0) return 0;

        unchecked {
            _lockedInClosedEpochs -= rolledOver;
            // Zero out so re-calling this is a no-op.
            ep.totalClaimed = ep.prizePool;
        }

        emit EpochRolledOver(epochId, rolledOver);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // CLAIM (pro-rata, fully on-chain)
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Claim the caller's pro-rata share of `epochId`'s prize pool.
    ///         Amount = `epochScore[user] * prizePool / totalScore`.
    function claim(uint256 epochId)
        external
        nonReentrant
        whenNotPaused
        returns (uint256 amount)
    {
        Epoch storage ep = _epochs[epochId];
        if (!ep.closed) revert EpochNotClosed(epochId);
        uint256 deadline = claimDeadline(epochId);
        if (block.timestamp > deadline) {
            revert EpochClaimWindowExpired(epochId, uint64(deadline), block.timestamp);
        }
        if (_claimed[epochId][msg.sender]) revert AlreadyClaimed(epochId, msg.sender);

        uint256 userScore = _epochScores[epochId][msg.sender];
        uint256 totalScore = _epochTotalScore[epochId];
        amount = (userScore == 0 || totalScore == 0)
            ? 0
            : (userScore * ep.prizePool) / totalScore;
        if (amount == 0) revert NothingToClaim(epochId, msg.sender);

        // Should never trip — pool was snapshotted at close — but guard
        // against config drift (e.g. admin yanking the USDC token).
        uint256 bal = usdcToken.balanceOf(address(this));
        if (bal < amount) revert InsufficientContractBalance(amount, bal);

        _claimed[epochId][msg.sender] = true;
        unchecked {
            ep.totalClaimed += amount;
            _lockedInClosedEpochs -= amount;
        }

        usdcToken.safeTransfer(msg.sender, amount);
        emit PrizeClaimed(epochId, msg.sender, amount);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // VIEWS
    // ═══════════════════════════════════════════════════════════════════════

    /// @notice Index of the currently-open epoch.
    function currentEpoch() external view returns (uint256) {
        return epochIndex;
    }

    /// @notice Per-epoch score for `user`.
    function epochScore(uint256 epochId, address user) external view returns (uint256) {
        return _epochScores[epochId][user];
    }

    /// @notice Sum of scores for `epochId`. For the open epoch this is the
    ///         live running total; for a closed epoch it's frozen.
    function epochTotalScore(uint256 epochId) external view returns (uint256) {
        return _epochTotalScore[epochId];
    }

    /// @notice Preview of what `claim(epochId)` would pay `user`. Returns 0
    ///         for the open epoch, already-claimed entries, expired windows,
    ///         and zero-score callers.
    function pendingClaim(uint256 epochId, address user) external view returns (uint256) {
        Epoch storage ep = _epochs[epochId];
        if (!ep.closed) return 0;
        if (block.timestamp > claimDeadline(epochId)) return 0;
        if (_claimed[epochId][user]) return 0;
        uint256 userScore  = _epochScores[epochId][user];
        uint256 totalScore = _epochTotalScore[epochId];
        if (userScore == 0 || totalScore == 0) return 0;
        return (userScore * ep.prizePool) / totalScore;
    }

    /// @notice Last timestamp at which `epochId` can be claimed: its stored
    ///         `claimExpiry` plus the time spent paused since it closed, the
    ///         current pause included. Rollover is possible after it.
    function claimDeadline(uint256 epochId) public view returns (uint256) {
        return uint256(_epochs[epochId].claimExpiry) + _pausedClock() - _pausedClockAtClose[epochId];
    }

    /// @notice Snapshot of an epoch. `claimExpiry` ignores pauses; see `claimDeadline`.
    function epoch(uint256 epochId) external view returns (Epoch memory) {
        return _epochs[epochId];
    }

    /// @notice Whether `user` already claimed an epoch.
    function hasClaimed(uint256 epochId, address user) external view returns (bool) {
        return _claimed[epochId][user];
    }

    /// @notice USDC reserved for closed epochs that can still be claimed.
    function lockedInClosedEpochs() external view returns (uint256) {
        return _lockedInClosedEpochs;
    }

    /// @notice USDC that the open epoch would snapshot if it closed now:
    ///         balance minus what closed epochs still owe minus fees already
    ///         attributed to later epochs.
    function openPrizePool() external view returns (uint256) {
        return _openPrizePool();
    }

    /// @notice Fees notified for `epochId` (resolution-time attribution).
    function epochFees(uint256 epochId) external view returns (uint256) {
        return _epochFees[epochId];
    }

    /// @notice Fees attributed to epochs after the open one.
    function notifiedAhead() external view returns (uint256) {
        return _notifiedAhead;
    }

    /// @notice Epoch a market resolved at `t` scores into, or
    ///         `type(uint256).max` if that epoch is already closed.
    function epochAt(uint256 t) external view returns (uint256) {
        if (t < epochStartTime || epochDuration == 0) return type(uint256).max;
        return _epochAt(t);
    }

    /// @notice Earliest time the open epoch can be closed.
    function nextCloseTime() external view returns (uint256) {
        return uint256(epochStartTime) + uint256(epochDuration) + SCORING_GRACE;
    }

    /// @dev Seconds spent paused since V4, the current pause included.
    function _pausedClock() internal view returns (uint256 t) {
        t = _pausedTotal;
        if (_pauseStartedAt != 0) t += block.timestamp - _pauseStartedAt;
    }

    function _openPrizePool() internal view returns (uint256) {
        uint256 bal = usdcToken.balanceOf(address(this));
        uint256 reserved = _lockedInClosedEpochs + _notifiedAhead;
        return bal > reserved ? bal - reserved : 0;
    }
}

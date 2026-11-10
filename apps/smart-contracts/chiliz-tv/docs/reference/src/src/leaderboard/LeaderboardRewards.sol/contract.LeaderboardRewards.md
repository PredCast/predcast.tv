# LeaderboardRewards

**Inherits:**
Initializable, AccessControlUpgradeable, UUPSUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, [ILeaderboardRewards](../../../src/interfaces/ILeaderboardRewards.sol/interface.ILeaderboardRewards.md)

**Author:**
ChilizTV Team

Fully on-chain epoch-based leaderboard for pari-mutuel winners.

*Architecture overview
──────────────────────────
Match contracts (`FootballPariMatch`, `BasketballPariMatch`) credit each
winner's net profit through `recordProfit(user, profit, resolvedAt)`. The
contract holds USDC funded by the leaderboard share of the fee, 1% of the
pool by default, taken at every market resolution.
Distribution model: **pro-rata, per epoch**.
1. `recordProfit` adds the profit to the score of the epoch containing the
market's resolution time, and to that epoch's running total.
2. An epoch closes SCORING_GRACE after its boundary, at the first
interaction past it or through the permissionless `advanceEpoch()`.
Closing snapshots the open prize pool into `_epochs[closedId].prizePool`,
opens a claim window of `epochDuration` from the actual close, and rolls
`epochIndex` and `epochStartTime` forward by exactly one boundary.
3. `claim(epochId)` pays the caller their pro-rata share of the closed
epoch's pool: `(epochScore[user] * prizePool) / totalScore`. No
merkle proof — every scorer is implicitly entitled.
4. After the claim window expires, any unclaimed remainder rolls back
into the open prize pool via permissionless `rolloverEpoch(epochId)`.
V2 upgrade notes
────────────────
V1 used an off-chain ranker + merkle distribution. V2 deletes that path and
keeps everything on-chain. Storage layout is preserved: the legacy
cumulative `_score` mapping at slot 2 is left untouched (orphaned, harmless)
and the new state lives at slots 7–9 (slot 7 packs `epochStartTime` and
`epochDuration`; slots 8 and 9 hold the two new mappings). The
`Epoch.merkleRoot` field is also preserved (slot reservation) but never
written or read post-V2.
V3 changes
──────────
- Scores are NET PROFIT (payout minus the user's total stake on the
market) credited by `recordProfit` to the epoch containing the
market's resolution time, not to whatever epoch is open at claim time
. Self-hedging on every outcome scores nothing. The V2
`recordWin(user, grossPayout)` entrypoint credits nothing anymore.
- Fees are attributed to the epoch of the resolution that produced them
(`notifyFee`), so fees arriving after an epoch boundary belong to the
next epoch instead of inflating the one being closed.
- An epoch is closed SCORING_GRACE after its boundary, giving late
claimers of its markets time to be credited, and its claim window
runs from the actual close, never from the theoretical boundary, so
a late close no longer creates an already-expired epoch.
An epoch closed without any score keeps its pool open for the next.
- `recordProfit` / `notifyFee` are not pausable: pausing used to make
the credits of the whole pause period disappear.
`initializeV2` is restricted to DEFAULT_ADMIN_ROLE.
Storage: two variables appended after slot 9 (`_epochFees`,
`_notifiedAhead`); the gap shrinks from 40 to 38.
Trust model
────────────
- Match proxies are authorized via `matchFactory.isMatch(msg.sender)` —
identical to V1.
- `ADMIN_ROLE` can rotate the epoch duration within sane bounds and
manages the upgrade path. The duration change applies forward only;
the current epoch's `epochStartTime` is not retroactively moved.
- `ORACLE_ROLE` is preserved in the access-control table for backward
compatibility (don't break `hasRole` callers) but no entry point uses
it in V2.*


## State Variables
### ADMIN_ROLE
Admin (role management, upgrades, pause, factory pointer,
epoch duration).


```solidity
bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
```


### ORACLE_ROLE
V1 role kept for backward compatibility. Unused in V2.


```solidity
bytes32 public constant ORACLE_ROLE = keccak256("ORACLE_ROLE");
```


### PAUSER_ROLE
Emergency pause.


```solidity
bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
```


### DEFAULT_EPOCH_DURATION
Default epoch duration applied at V2 init. Admin can rotate it.


```solidity
uint64 public constant DEFAULT_EPOCH_DURATION = 30 days;
```


### MIN_EPOCH_DURATION
Lower bound of the admin-settable epoch duration.


```solidity
uint64 public constant MIN_EPOCH_DURATION = 1 days;
```


### MAX_EPOCH_DURATION
Upper bound of the admin-settable epoch duration.


```solidity
uint64 public constant MAX_EPOCH_DURATION = 365 days;
```


### SCORING_GRACE
An epoch closes this long after its boundary, so markets it
resolved can still be claimed (and scored) in the meantime.


```solidity
uint64 public constant SCORING_GRACE = 3 days;
```


### usdcToken
USDC token used to fund the leaderboard and pay prizes.


```solidity
IERC20 public usdcToken;
```


### epochIndex
Monotonically increasing epoch index. Starts at 0;
incremented when the active epoch's boundary passes.


```solidity
uint256 public epochIndex;
```


### _score
V1 cumulative score mapping. Orphaned in V2; left in place
so slot 2 keeps its meaning for any future reader.


```solidity
mapping(address user => uint256 cumulativePayout) internal _score;
```


### _epochs
Epoch metadata keyed by epoch index.


```solidity
mapping(uint256 epochId => Epoch) internal _epochs;
```


### _claimed
(epochId, user) → claimed flag. Prevents double-claim.


```solidity
mapping(uint256 epochId => mapping(address user => bool)) internal _claimed;
```


### _lockedInClosedEpochs
Sum of (Epoch.prizePool - Epoch.totalClaimed) over every
still-claimable closed epoch. Lets us compute the open
prize pool as `balanceOf(this) - _lockedInClosedEpochs`
without iterating all past epochs.


```solidity
uint256 internal _lockedInClosedEpochs;
```


### matchFactory
PariMatchFactory used to authorize match callers.


```solidity
IPariMatchFactoryView public matchFactory;
```


### epochStartTime
Start time of the currently-open epoch (`_epochs[epochIndex]`).
Set at V2 init and rolled forward by `_maybeAdvanceEpoch`.


```solidity
uint64 public epochStartTime;
```


### epochDuration
Current epoch duration. Admin-settable in `[MIN, MAX]`.


```solidity
uint64 public epochDuration;
```


### _epochScores
Per-epoch user score: `_epochScores[epochId][user]`.


```solidity
mapping(uint256 epochId => mapping(address user => uint256 score)) internal _epochScores;
```


### _epochTotalScore
Sum of `_epochScores[epochId][*]` for each epoch. Updated on
every `recordProfit` and read by `claim` for the pro-rata math.


```solidity
mapping(uint256 epochId => uint256 totalScore) internal _epochTotalScore;
```


### _epochFees
Fees notified for each epoch (by resolution time). Informative
for the closed and open epochs; used for epochs ahead of
`epochIndex` through `_notifiedAhead`.


```solidity
mapping(uint256 epochId => uint256 fees) internal _epochFees;
```


### _notifiedAhead
Sum of `_epochFees[k]` for every k > epochIndex: fees that
arrived after the open epoch's boundary and must not be swept
into it when it closes.


```solidity
uint256 internal _notifiedAhead;
```


### __gap
Reserved storage gap. V1 reserved [43]; V2 consumed 3 slots (7-9),
V3 consumes 2 (10-11), leaving 38.


```solidity
uint256[38] private __gap;
```


## Functions
### constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor();
```

### initialize

One-shot V1 initialization for the UUPS proxy. Always runs at
proxy construction time — V2 builds on top of it by calling
`initializeV2()` afterwards. The V1 marker (set by the
`initializer` modifier) is a prerequisite for the V2
`reinitializer(2)` to advance.


```solidity
function initialize(address _usdc, address _admin, address _oracle) external initializer;
```

### initializeV2

V2 initializer. Run once per proxy via one of two paths:
(a) on an existing V1 proxy, atomically through the upgrade
script's `upgradeToAndCall(newImpl, initializeV2())`; (b) on a
fresh proxy, immediately after construction in
`DeployAll._deployLeaderboard()`. The `reinitializer(2)` guard
is idempotent across re-upgrades.

*Anchors the epoch clock at the call timestamp and sets the
default 30-day duration. Doesn't touch any V1 state, so
existing `_score` entries (if any) remain readable but
unreferenced by V2 logic.
Admin-only, so nobody can front-run it to pick
the epoch clock, and refuses to run twice.*


```solidity
function initializeV2() external reinitializer(2) onlyRole(DEFAULT_ADMIN_ROLE);
```

### setUSDCToken

Update the USDC token. Only while the contract holds none of
the current token: switching with prizes in escrow would pay
claims in a token nobody deposited.


```solidity
function setUSDCToken(address _usdc) external onlyRole(ADMIN_ROLE);
```

### setMatchFactory

Register the PariMatchFactory used to authorize match
callers. Required before any match can credit scores.

*Point this at a beacon-based
PariMatchFactory only: matches of the older UUPS factory can be
upgraded by their own admin and must not be trusted to score.*


```solidity
function setMatchFactory(address _factory) external onlyRole(ADMIN_ROLE);
```

### setEpochDuration

Rotate the epoch duration. Applies to the current and future
epochs — does NOT retroactively shift `epochStartTime`, so a
shorter setting can immediately put the boundary in the past
and trigger an advance on the next interaction.


```solidity
function setEpochDuration(uint64 newDuration) external onlyRole(ADMIN_ROLE);
```

### emergencyPause

Pause epoch closing, rollovers and prize claims. Score and fee credits keep working.


```solidity
function emergencyPause() external onlyRole(PAUSER_ROLE);
```

### unpause

Lift the pause.


```solidity
function unpause() external onlyRole(ADMIN_ROLE);
```

### _authorizeUpgrade


```solidity
function _authorizeUpgrade(address) internal override onlyRole(DEFAULT_ADMIN_ROLE);
```

### notifyFee

Attribute `amount` USDC, already transferred to the leaderboard,
to the epoch in progress at the time of the call (
fees belong to the epoch of the resolution that produced them).

*Not pausable. Unauthorized callers revert; the match side
wraps the call in try/catch.*


```solidity
function notifyFee(uint256 amount) external override;
```

### recordProfit

Credit `profit` (payout minus the user's total stake on that
market, so self-hedging scores nothing) to the
epoch containing `resolvedAt`, the market's resolution time.

*Not pausable. The epoch is derived from `resolvedAt`, so
claiming late does not move a win into a quieter epoch.
A profit whose epoch is already closed is ignored, not reverted.*


```solidity
function recordProfit(address user, uint256 profit, uint256 resolvedAt) external override;
```

### recordWin

Legacy V2 entrypoint (gross payout credited at claim time).
Kept so matches deployed before V3 do not revert, but it no
longer credits anything.

*V2 credited the gross payout to the epoch open at claim time,
which made scores farmable. Now a no-op kept for ABI
compatibility with matches deployed before V3.*


```solidity
function recordWin(address user, uint256 payout) external override;
```

### _requireMatch


```solidity
function _requireMatch() internal view;
```

### _epochAt

*Epoch containing `t`, for `t >= epochStartTime` (the open epoch
or a later one). Later epochs are laid out with the current
duration.*


```solidity
function _epochAt(uint256 t) internal view returns (uint256);
```

### advanceEpoch

Permissionless catch-up trigger. Closes the open epoch once
its boundary plus SCORING_GRACE has elapsed. Reverts before
that (so callers can detect a no-op).


```solidity
function advanceEpoch() external whenNotPaused returns (uint256 closedId);
```

### _maybeAdvanceEpoch

Close the open epoch if its boundary + SCORING_GRACE passed.

*Single-step on purpose: after a long quiet period
`advanceEpoch()` can be called repeatedly to catch up.
The claim window starts at the actual close, and the
snapshot excludes fees attributed to later epochs. An epoch
without any score snapshots nothing: its pool stays open for
the next epoch instead of being locked until expiry.*


```solidity
function _maybeAdvanceEpoch() internal;
```

### rolloverEpoch

Release the unclaimed remainder of an expired epoch back into
the open prize pool. Permissionless once the claim window has
elapsed.


```solidity
function rolloverEpoch(uint256 epochId) external whenNotPaused returns (uint256 rolledOver);
```

### claim

Claim the caller's pro-rata share of `epochId`'s prize pool.
Amount = `epochScore[user] * prizePool / totalScore`.


```solidity
function claim(uint256 epochId) external nonReentrant whenNotPaused returns (uint256 amount);
```

### currentEpoch

Index of the currently-open epoch.


```solidity
function currentEpoch() external view returns (uint256);
```

### epochScore

Per-epoch score for `user`.


```solidity
function epochScore(uint256 epochId, address user) external view returns (uint256);
```

### epochTotalScore

Sum of scores for `epochId`. For the open epoch this is the
live running total; for a closed epoch it's frozen.


```solidity
function epochTotalScore(uint256 epochId) external view returns (uint256);
```

### pendingClaim

Preview of what `claim(epochId)` would pay `user`. Returns 0
for the open epoch, already-claimed entries, expired windows,
and zero-score callers.


```solidity
function pendingClaim(uint256 epochId, address user) external view returns (uint256);
```

### epoch

Snapshot of an epoch.


```solidity
function epoch(uint256 epochId) external view returns (Epoch memory);
```

### hasClaimed

Whether `user` already claimed an epoch.


```solidity
function hasClaimed(uint256 epochId, address user) external view returns (bool);
```

### lockedInClosedEpochs

USDC reserved for closed epochs that can still be claimed.


```solidity
function lockedInClosedEpochs() external view returns (uint256);
```

### openPrizePool

USDC that the open epoch would snapshot if it closed now:
balance minus what closed epochs still owe minus fees already
attributed to later epochs.


```solidity
function openPrizePool() external view returns (uint256);
```

### epochFees

Fees notified for `epochId` (resolution-time attribution).


```solidity
function epochFees(uint256 epochId) external view returns (uint256);
```

### notifiedAhead

Fees attributed to epochs after the open one.


```solidity
function notifiedAhead() external view returns (uint256);
```

### epochAt

Epoch a market resolved at `t` scores into, or
`type(uint256).max` if that epoch is already closed.


```solidity
function epochAt(uint256 t) external view returns (uint256);
```

### nextCloseTime

Earliest time the open epoch can be closed.


```solidity
function nextCloseTime() external view returns (uint256);
```

### _openPrizePool


```solidity
function _openPrizePool() internal view returns (uint256);
```

## Events
### Initialized
The proxy was initialized.


```solidity
event Initialized(address indexed usdc, address indexed admin);
```

### WinRecorded
Per-epoch score for `user` in `epochId` increased by `delta`.
`newEpochScore` is the post-increment total *for that epoch
only* — V2 scores do not carry over across epoch boundaries.


```solidity
event WinRecorded(
    address indexed match_, address indexed user, uint256 indexed epochId, uint256 delta, uint256 newEpochScore
);
```

### EpochAdvanced
The contract advanced past an epoch boundary. `closedId` is
now claimable; `prizePool` is its snapshot; `totalScore` is
the sum of scorers' weights for pro-rata claims.


```solidity
event EpochAdvanced(
    uint256 indexed closedId, uint256 prizePool, uint256 totalScore, uint64 closedAt, uint64 claimExpiry
);
```

### PrizeClaimed
`user` claimed `amount` USDC from `epochId`.


```solidity
event PrizeClaimed(uint256 indexed epochId, address indexed user, uint256 amount);
```

### EpochRolledOver
Unclaimed funds from `epochId` (= `rolledOver`) released back
into the open prize pool because the claim window expired.


```solidity
event EpochRolledOver(uint256 indexed epochId, uint256 rolledOver);
```

### USDCTokenSet
The prize token changed.


```solidity
event USDCTokenSet(address indexed token);
```

### MatchFactorySet
The factory authorizing matches changed.


```solidity
event MatchFactorySet(address indexed oldFactory, address indexed newFactory);
```

### EpochDurationSet
The epoch duration changed.


```solidity
event EpochDurationSet(uint64 oldDuration, uint64 newDuration);
```

### FeeNotified
`amount` of fees attributed to `epochId` by `match_`.


```solidity
event FeeNotified(address indexed match_, uint256 indexed epochId, uint256 amount);
```

### ProfitIgnored
A profit could not be credited: its epoch was already closed.


```solidity
event ProfitIgnored(address indexed match_, address indexed user, uint256 profit, uint256 resolvedAt);
```

### LegacyWinIgnored
A V2-style `recordWin` arrived; it no longer credits.


```solidity
event LegacyWinIgnored(address indexed match_, address indexed user, uint256 payout);
```

## Errors
### ZeroAddress

```solidity
error ZeroAddress();
```

### UnauthorizedMatch

```solidity
error UnauthorizedMatch(address caller);
```

### MatchFactoryNotSet

```solidity
error MatchFactoryNotSet();
```

### InvalidEpochDuration

```solidity
error InvalidEpochDuration(uint64 provided, uint64 min, uint64 max);
```

### EpochNotClosed

```solidity
error EpochNotClosed(uint256 epochId);
```

### EpochClaimWindowExpired

```solidity
error EpochClaimWindowExpired(uint256 epochId, uint64 claimExpiry, uint256 nowTs);
```

### EpochClaimWindowNotExpired

```solidity
error EpochClaimWindowNotExpired(uint256 epochId, uint64 claimExpiry, uint256 nowTs);
```

### AlreadyClaimed

```solidity
error AlreadyClaimed(uint256 epochId, address user);
```

### NothingToClaim

```solidity
error NothingToClaim(uint256 epochId, address user);
```

### AdvanceNotReady

```solidity
error AdvanceNotReady(uint256 nowTs, uint256 boundary);
```

### InsufficientContractBalance

```solidity
error InsufficientContractBalance(uint256 needed, uint256 available);
```

### AlreadyInitializedV2

```solidity
error AlreadyInitializedV2();
```

### EpochClockNotStarted

```solidity
error EpochClockNotStarted();
```

### BalanceNotEmpty

```solidity
error BalanceNotEmpty(uint256 balance);
```

## Structs
### Epoch
One epoch's distribution snapshot.

*V1 layout preserved; `merkleRoot` is dead storage in V2 but
kept so existing entries (currently none on mainnet/testnet)
stay readable.*


```solidity
struct Epoch {
    uint64 startTime;
    uint64 closedAt;
    uint64 claimExpiry;
    bool closed;
    uint256 prizePool;
    uint256 totalClaimed;
    bytes32 merkleRoot;
}
```


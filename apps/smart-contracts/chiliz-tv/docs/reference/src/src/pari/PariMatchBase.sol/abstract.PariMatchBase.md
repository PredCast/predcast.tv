# PariMatchBase

**Inherits:**
Initializable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable

**Author:**
ChilizTV Team

Abstract base for pari-mutuel (pooled-positions) sports markets.

*Architecture overview
──────────────────────────
This contract IS the escrow. User USDC flows directly here on placement
and flows back out at claim / refund time. No external LP vault is involved.
Fund flow:
User stakes USDC on outcome O of market M.
USDC is held in this contract until resolution.
On resolution the protocol fee is sent immediately to `feeRecipient`.
Winners claim their proportional share of the net pool.
Cancelled markets allow all stakers to withdraw their original stake.
Payout formula (per winner):
netPool        = totalPool[M] * (BPS_DENOM - feeBps) / BPS_DENOM
userPayout     = userStake[M][user][winningOutcome]
netPool
/ outcomePool[M][winningOutcome]
Special case — void market (winning outcome pool == 0):
Market transitions to Cancelled automatically at resolution time.
No fee is taken. Every staker reclaims their full _userTotalStake.
Market spec (generic):
A single mapping `_marketSpec` holds the per-market metadata that used
to live in each sport contract. Children only contribute:
- the whitelist of accepted market types       (_isValidMarketType)
- the maxOutcome for each (type, line) pair    (_getMaxOutcome)
- the outcome computed from a typed score      (sport-specific
`resolveByScore`-style entrypoint, not in the base)
Resolution paths:
- resolveMarket(id, outcome) / resolveMarketsBatch — explicit outcomes
supplied by the oracle. No assumption about the input format.
- Children may add a typed `resolveByScore(...)` that derives outcomes
for every Closed market from a single match-score input — see
FootballPariMatch / BasketballPariMatch.
Roles:
DEFAULT_ADMIN_ROLE — role management. NOT upgrades: a
match has no upgrade entrypoint; matches are
BeaconProxies and only the sport beacon's owner
(governance Safe / timelock) can change their code.
ADMIN_ROLE         — market lifecycle (create/open/close/cancel).
RESOLVER_ROLE      — set the winning outcome (oracle / off-chain backend).
PAUSER_ROLE        — emergency pause.
SWAP_ROUTER_ROLE   — place bets on behalf of users after swapping tokens.
Storage invariant:
IERC20(usdcToken).balanceOf(address(this))
== Σ_unresolvedMarkets _totalPool[m]
+ Σ_resolvedMarkets (_totalPool[m] - feeAlreadyPaid[m] - payoutsAlreadyPaid[m])
This is maintained by the CEI pattern + reentrancy guard.*


## State Variables
### ADMIN_ROLE
Market lifecycle (create, open, suspend, close, cancel) and `unpause`.


```solidity
bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
```


### RESOLVER_ROLE
Sets winning outcomes. Held by the oracle key.


```solidity
bytes32 public constant RESOLVER_ROLE = keccak256("RESOLVER_ROLE");
```


### PAUSER_ROLE
Can call `emergencyPause`.


```solidity
bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
```


### SWAP_ROUTER_ROLE
Can place stakes for users through `placeBetUSDCFor`. Held by `NetworkRouter`.


```solidity
bytes32 public constant SWAP_ROUTER_ROLE = keccak256("SWAP_ROUTER_ROLE");
```


### MIN_STAKE
Minimum stake per placement (anti-dust / anti-griefing).
0.01 USDC in 6-decimal precision.


```solidity
uint256 public constant MIN_STAKE = 10_000;
```


### BPS_DENOM
Denominator for basis-point calculations.


```solidity
uint256 public constant BPS_DENOM = 10_000;
```


### MAX_FEE_BPS
Hard ceiling on the protocol fee (5%). Prevents fee parameter
from being raised to a level that would constitute a hidden
expropriation of user funds.


```solidity
uint16 public constant MAX_FEE_BPS = 500;
```


### DEFAULT_FEE_BPS
Total fee set by the initializer (2%).


```solidity
uint16 public constant DEFAULT_FEE_BPS = 200;
```


### RESOLUTION_TIMEOUT
Once a market's betting window is over (`closesAt`), the
oracle has this long to resolve it. Past that, anyone can
cancel it so every staker gets refunded.


```solidity
uint256 public constant RESOLUTION_TIMEOUT = 7 days;
```


### LEGACY_MARKET_TTL
Betting window assumed for markets without `closesAt`
(created before the cutoff existed), counted from creation,
when computing the stale-cancel deadline.


```solidity
uint256 public constant LEGACY_MARKET_TTL = 90 days;
```


### MAX_CLAIM_PAUSE
A pause freezes claims for at most this long; after that,
winners can claim even if the match is still paused.


```solidity
uint256 public constant MAX_CLAIM_PAUSE = 7 days;
```


### matchName
Human-readable match identifier (e.g. "Barcelona vs Real Madrid").


```solidity
string public matchName;
```


### sportType
Sport identifier set by the child initializer.


```solidity
string public sportType;
```


### marketCount
Total number of markets created on this match.


```solidity
uint256 public marketCount;
```


### _marketCores
Core data per market.


```solidity
mapping(uint256 marketId => MarketCoreData) internal _marketCores;
```


### _totalPool
Gross USDC pool for each market.


```solidity
mapping(uint256 marketId => uint256) internal _totalPool;
```


### _outcomePool
USDC pool per outcome.


```solidity
mapping(uint256 marketId => mapping(uint64 outcome => uint256)) internal _outcomePool;
```


### _userStake
Individual user stake per outcome.


```solidity
mapping(uint256 marketId => mapping(address user => mapping(uint64 outcome => uint256))) internal _userStake;
```


### _userTotalStake
Sum of all user stakes in a market across every outcome.


```solidity
mapping(uint256 marketId => mapping(address user => uint256)) internal _userTotalStake;
```


### _claimed
Claim / refund gate.


```solidity
mapping(uint256 marketId => mapping(address user => bool)) internal _claimed;
```


### usdcToken
USDC token used for all settlements.


```solidity
IERC20 public usdcToken;
```


### feeRecipient
Address that receives the company portion of the protocol
fee at market resolution. Should be a multi-sig or treasury.


```solidity
address public feeRecipient;
```


### feeBps
TOTAL protocol fee in basis points (default 200 = 2%).
Split between company and leaderboard at resolve time:
leaderboardFee = totalPool * leaderboardFeeBps / BPS_DENOM
companyFee     = totalPool * (feeBps - leaderboardFeeBps) / BPS_DENOM
Capped at MAX_FEE_BPS. The setter enforces
`leaderboardFeeBps <= feeBps` so the split is always valid.


```solidity
uint16 public feeBps;
```


### _marketSpec
Per-market specification (type / line / maxOutcome / extra / groupId).


```solidity
mapping(uint256 marketId => MarketSpec) internal _marketSpec;
```


### leaderboardRecipient
Address that receives the leaderboard portion of the protocol
fee at market resolution. Expected to be a
`LeaderboardRewards` proxy. May be zero — then the full fee
goes to `feeRecipient` and no `recordWin` notify happens.


```solidity
address public leaderboardRecipient;
```


### leaderboardFeeBps
Leaderboard's share of the total fee, in basis points OF THE
POOL. E.g. feeBps=200, leaderboardFeeBps=100 → 1% of pool to
leaderboard, 1% of pool to company. Must satisfy
`leaderboardFeeBps <= feeBps`.


```solidity
uint16 public leaderboardFeeBps;
```


### pausedAt
Timestamp of the last `emergencyPause` (0 = never). Claims
reopen MAX_CLAIM_PAUSE after it even if still paused.


```solidity
uint40 public pausedAt;
```


### _accountedUsdc
*USDC this contract owes (stakes in, minus fees, payouts,
refunds and swept dust out). `placeBetUSDCFor` requires the
balance to cover it plus the new stake. Starts at 0
on proxies upgraded from an older implementation, so there it only
tracks stakes taken after the upgrade; decrements saturate at 0
so withdrawals can never revert on it.*


```solidity
uint256 internal _accountedUsdc;
```


### __gap

```solidity
uint256[36] private __gap;
```


## Functions
### validMarket


```solidity
modifier validMarket(uint256 marketId);
```

### inState


```solidity
modifier inState(uint256 marketId, MarketState required);
```

### __PariMatchBase_init


```solidity
function __PariMatchBase_init(string memory _matchName, string memory _sportType, address _owner)
    internal
    onlyInitializing;
```

### setUSDCToken

Set the settlement token. Only before any market exists:
switching tokens with stakes in escrow would pay
claims and refunds in a token nobody deposited.


```solidity
function setUSDCToken(address _usdc) external onlyRole(DEFAULT_ADMIN_ROLE);
```

### setFeeRecipient

Set the recipient of the company share of the fee.


```solidity
function setFeeRecipient(address _recipient) external onlyRole(DEFAULT_ADMIN_ROLE);
```

### setFeeBps

Total fee for markets opened from now on. Markets already open
keep the fee frozen when they opened.


```solidity
function setFeeBps(uint16 _feeBps) external onlyRole(DEFAULT_ADMIN_ROLE);
```

### setLeaderboardFeeBps

Configure the leaderboard portion of the total fee. Must be
<= `feeBps`. Zero means "no leaderboard split — full fee to
company" (backward-compatible default). A non-zero share needs
a leaderboard recipient first.
Applies to markets opened afterwards; open markets keep the
share frozen when they opened.


```solidity
function setLeaderboardFeeBps(uint16 _bps) external onlyRole(DEFAULT_ADMIN_ROLE);
```

### setLeaderboardRecipient

Set the address that receives the leaderboard share of the
fee. Zero clears the recipient (no leaderboard payouts; the
`recordWin` notify in `_processClaim` becomes a no-op) and is
only allowed once `leaderboardFeeBps` is 0.
When non-zero, must be the address of a `LeaderboardRewards`
proxy (or compatible `ILeaderboardRewards` sink).


```solidity
function setLeaderboardRecipient(address _recipient) external onlyRole(DEFAULT_ADMIN_ROLE);
```

### addMarketWithLine

Add a market of `marketType` with optional `line` parameter.

*`line` semantics depend on the market type. Examples:
- O/U markets: line in 1/10 goal/point units (25 = 2.5)
- Scalar/bucket markets: line = cap of the highest bucket
- Markets that ignore the line: pass 0*


```solidity
function addMarketWithLine(bytes32 marketType, int16 line) external onlyRole(ADMIN_ROLE) returns (uint256 marketId);
```

### addMarketAdvanced

Add a market with sport-specific `extra` byte (e.g. basketball
quarter) and optional UI `groupId`.


```solidity
function addMarketAdvanced(bytes32 marketType, int16 line, uint8 extra, uint16 groupId)
    external
    onlyRole(ADMIN_ROLE)
    returns (uint256 marketId);
```

### addMarketsBatch

Batch add markets sharing default extra/groupId = 0.


```solidity
function addMarketsBatch(bytes32[] calldata marketTypes, int16[] calldata lines) external onlyRole(ADMIN_ROLE);
```

### addMarketsBatchAdvanced

Batch add markets with sport-specific `extra` and `groupId`.


```solidity
function addMarketsBatchAdvanced(
    bytes32[] calldata marketTypes,
    int16[] calldata lines,
    uint8[] calldata extras,
    uint16[] calldata groupIds
) external onlyRole(ADMIN_ROLE);
```

### _addMarket


```solidity
function _addMarket(bytes32 marketType, int16 line, uint8 extra, uint16 groupId) internal returns (uint256 marketId);
```

### setMarketCloseTime

Set the on-chain betting cutoff of a market (typically the
kickoff for pre-match markets). From `closesAt` on, every
stake reverts and anyone may close the market.

*Allowed until the market settles, as long as the current
cutoff has not passed (a passed cutoff cannot be reopened).
`closesAt` must be in the future: to stop betting now, call
`closeMarket` / `suspendMarket`.*


```solidity
function setMarketCloseTime(uint256 marketId, uint40 closesAt) external validMarket(marketId) onlyRole(ADMIN_ROLE);
```

### setMarketsCloseTime

Batch form of `setMarketCloseTime` with one cutoff for all.


```solidity
function setMarketsCloseTime(uint256[] calldata marketIds, uint40 closesAt) external onlyRole(ADMIN_ROLE);
```

### _setCloseTime


```solidity
function _setCloseTime(uint256 marketId, uint40 closesAt) internal;
```

### closeExpiredMarket

Close a market whose cutoff has passed. Permissionless, so
resolution never waits on the admin.


```solidity
function closeExpiredMarket(uint256 marketId) external validMarket(marketId);
```

### staleAt

Timestamp from which an unresolved market can be cancelled by
anyone: cutoff + RESOLUTION_TIMEOUT, or for markets without a
cutoff, creation + LEGACY_MARKET_TTL + RESOLUTION_TIMEOUT.


```solidity
function staleAt(uint256 marketId) public view validMarket(marketId) returns (uint256);
```

### cancelStaleMarket

Cancel a market the oracle never resolved, so every staker
can claim a full refund. Permissionless once `staleAt` passed.


```solidity
function cancelStaleMarket(uint256 marketId) external validMarket(marketId);
```

### openMarket

Open a market for stakes, from Inactive or Suspended. Freezes its fees the first time.


```solidity
function openMarket(uint256 marketId) external validMarket(marketId) onlyRole(ADMIN_ROLE);
```

### suspendMarket

Stop stakes temporarily on an Open market.


```solidity
function suspendMarket(uint256 marketId) external validMarket(marketId) onlyRole(ADMIN_ROLE);
```

### closeMarket

Stop stakes on an Open or Suspended market, ahead of resolution.


```solidity
function closeMarket(uint256 marketId) external validMarket(marketId) onlyRole(ADMIN_ROLE);
```

### openMarketsBatch

Open several markets, skipping those already Open.


```solidity
function openMarketsBatch(uint256[] calldata marketIds) external onlyRole(ADMIN_ROLE);
```

### closeMarketsBatch

Close several markets, skipping those already Closed, Resolved or Cancelled.


```solidity
function closeMarketsBatch(uint256[] calldata marketIds) external onlyRole(ADMIN_ROLE);
```

### cancelMarket

Cancel an Open, Suspended or Closed market so every staker can refund.


```solidity
function cancelMarket(uint256 marketId, string calldata reason) external validMarket(marketId) onlyRole(ADMIN_ROLE);
```

### _transitionMarketState


```solidity
function _transitionMarketState(uint256 marketId, MarketState newState) internal;
```

### placeBetUSDC

Place a stake directly with USDC.

*Caller must approve `amount` USDC to THIS contract.*


```solidity
function placeBetUSDC(uint256 marketId, uint64 outcome, uint256 amount)
    external
    nonReentrant
    validMarket(marketId)
    inState(marketId, MarketState.Open)
    whenNotPaused;
```

### placeBetUSDCFor

Place a stake on behalf of a user after the router has already
transferred `amount` USDC to this contract.

*Reverts unless the USDC balance covers every stake
already accounted for plus `amount`, so a SWAP_ROUTER_ROLE
holder cannot record a stake it did not fund.*


```solidity
function placeBetUSDCFor(address user, uint256 marketId, uint64 outcome, uint256 amount)
    external
    nonReentrant
    validMarket(marketId)
    inState(marketId, MarketState.Open)
    whenNotPaused
    onlyRole(SWAP_ROUTER_ROLE);
```

### _requireBettingWindow

*No stake from the market's cutoff on.*


```solidity
function _requireBettingWindow(uint256 marketId) internal view;
```

### _recordStake


```solidity
function _recordStake(address user, uint256 marketId, uint64 outcome, uint256 amount) internal;
```

### resolveMarket

Settle a Closed market with an explicit winning outcome.

*With no stake on the winning outcome, the market is cancelled instead.*


```solidity
function resolveMarket(uint256 marketId, uint64 result) external validMarket(marketId) onlyRole(RESOLVER_ROLE);
```

### resolveMarketsBatch

Settle several Closed markets with explicit outcomes.


```solidity
function resolveMarketsBatch(uint256[] calldata marketIds, uint64[] calldata results)
    external
    onlyRole(RESOLVER_ROLE);
```

### _resolveMarketInternal


```solidity
function _resolveMarketInternal(uint256 marketId, uint64 result) internal;
```

### _decreaseAccounted

*Saturating decrement of `_accountedUsdc` (see its natspec).*


```solidity
function _decreaseAccounted(uint256 amount) internal;
```

### claim

Collect the caller's winnings on a Resolved market.


```solidity
function claim(uint256 marketId) external nonReentrant validMarket(marketId) inState(marketId, MarketState.Resolved);
```

### claimBatch

Claim several resolved markets at once. Markets that are not
resolved, already claimed, or where the caller holds no
winning stake are skipped instead of reverting.


```solidity
function claimBatch(uint256[] calldata marketIds) external nonReentrant;
```

### _requireClaimsOpen

*A pause stops claims for at most MAX_CLAIM_PAUSE, so the
pauser cannot hold winnings hostage indefinitely.*


```solidity
function _requireClaimsOpen() internal view;
```

### _processClaim


```solidity
function _processClaim(address user, uint256 marketId) internal;
```

### claimRefund

Take back the caller's whole stake on a Cancelled market. Works while paused.


```solidity
function claimRefund(uint256 marketId)
    external
    nonReentrant
    validMarket(marketId)
    inState(marketId, MarketState.Cancelled);
```

### claimRefundBatch

Refund several Cancelled markets, skipping the others, those
already refunded and those the caller has no stake in.


```solidity
function claimRefundBatch(uint256[] calldata marketIds) external nonReentrant;
```

### _processRefund


```solidity
function _processRefund(address user, uint256 marketId) internal;
```

### sweepableDust

USDC left in a resolved market once every winner has claimed:
the floor-division remainder of the payouts. Zero until the
last winning stake is claimed, so unclaimed winnings are never
counted as dust.


```solidity
function sweepableDust(uint256 marketId) public view validMarket(marketId) returns (uint256);
```

### sweepDust

Send a fully claimed market's rounding dust to `feeRecipient`.
Permissionless; reverts when there is nothing to sweep.


```solidity
function sweepDust(uint256 marketId) external nonReentrant validMarket(marketId);
```

### _validateOutcome


```solidity
function _validateOutcome(uint256 marketId, uint64 outcome) internal view;
```

### getMarketCore

State, result, timestamps and net pool of a market.


```solidity
function getMarketCore(uint256 marketId) external view validMarket(marketId) returns (MarketCore memory);
```

### getMarketFees

Fees a market settles at: frozen at opening, or the
current match-level values while it has never been opened.


```solidity
function getMarketFees(uint256 marketId)
    external
    view
    validMarket(marketId)
    returns (uint16 totalFeeBps, uint16 leaderboardShareBps, bool frozen);
```

### getMarketSpec

Type, line, outcome range, cutoff and UI fields of a market.


```solidity
function getMarketSpec(uint256 marketId) external view validMarket(marketId) returns (MarketSpec memory);
```

### getMarketInfo

Summary of a market: type, state, result, pool and outcome count.


```solidity
function getMarketInfo(uint256 marketId)
    external
    view
    validMarket(marketId)
    returns (bytes32 marketType, MarketState state, uint64 result, uint256 totalPool, uint256 outcomeCount);
```

### getTotalPool

Total USDC staked on a market.


```solidity
function getTotalPool(uint256 marketId) external view validMarket(marketId) returns (uint256);
```

### getOutcomePool

USDC staked on one outcome of a market.


```solidity
function getOutcomePool(uint256 marketId, uint64 outcome) external view validMarket(marketId) returns (uint256);
```

### getUserStake

USDC staked by `user` on one outcome of a market.


```solidity
function getUserStake(uint256 marketId, address user, uint64 outcome)
    external
    view
    validMarket(marketId)
    returns (uint256);
```

### getUserTotalStake

USDC staked by `user` across every outcome of a market.


```solidity
function getUserTotalStake(uint256 marketId, address user) external view validMarket(marketId) returns (uint256);
```

### hasClaimed

Whether `user` already claimed or refunded a market.


```solidity
function hasClaimed(uint256 marketId, address user) external view validMarket(marketId) returns (bool);
```

### getImpliedProbabilityBps

Off-chain indicative implied probability for an outcome.


```solidity
function getImpliedProbabilityBps(uint256 marketId, uint64 outcome)
    external
    view
    validMarket(marketId)
    returns (uint256 bps);
```

### emergencyPause

Stop new stakes and, for at most MAX_CLAIM_PAUSE, claims.

*The claim-freeze clock (`pausedAt`) only restarts if the previous
pause began at least 2 x MAX_CLAIM_PAUSE ago, so cycling
unpause / emergencyPause cannot keep claims frozen: they stay open
at least half of the time.*


```solidity
function emergencyPause() external onlyRole(PAUSER_ROLE);
```

### unpause

Lift the pause.


```solidity
function unpause() external onlyRole(ADMIN_ROLE);
```

### _isValidMarketType

*Children whitelist the market types they support.*


```solidity
function _isValidMarketType(bytes32 marketType) internal view virtual returns (bool);
```

### _getMaxOutcome

*Children return the inclusive max outcome index for (type, line).
Children should revert with InvalidLine if the line is unsupported.*


```solidity
function _getMaxOutcome(bytes32 marketType, int16 line) internal view virtual returns (uint8);
```

## Events
### MatchInitialized
The match proxy was initialized.


```solidity
event MatchInitialized(string indexed name, string sportType, address indexed owner);
```

### MarketCreated
A market was added to the match.


```solidity
event MarketCreated(uint256 indexed marketId, bytes32 indexed marketType, int16 line, uint8 maxOutcome, uint16 groupId);
```

### MarketStateChanged
A market moved to a new lifecycle state.


```solidity
event MarketStateChanged(uint256 indexed marketId, MarketState oldState, MarketState newState);
```

### MarketCancelled
A market was cancelled; stakers can refund.


```solidity
event MarketCancelled(uint256 indexed marketId, string reason);
```

### PositionTaken
A stake was recorded for `user`.


```solidity
event PositionTaken(
    uint256 indexed marketId,
    address indexed user,
    uint64 outcome,
    uint256 stake,
    uint256 newOutcomePool,
    uint256 newTotalPool
);
```

### MarketResolved
A market was settled with its winning outcome.


```solidity
event MarketResolved(uint256 indexed marketId, uint64 result, uint256 totalPool, uint256 fee, uint256 resolvedNetPool);
```

### PositionClaimed
`user` claimed the winnings of a market.


```solidity
event PositionClaimed(uint256 indexed marketId, address indexed user, uint256 stake, uint256 payout);
```

### StakeRefunded
`user` took back their stake on a cancelled market.


```solidity
event StakeRefunded(uint256 indexed marketId, address indexed user, uint256 amount);
```

### FeeRecipientSet
The recipient of the company fee changed.


```solidity
event FeeRecipientSet(address indexed oldRecipient, address indexed newRecipient);
```

### FeeBpsSet
The total fee for future markets changed.


```solidity
event FeeBpsSet(uint16 oldBps, uint16 newBps);
```

### LeaderboardRecipientSet
The recipient of the leaderboard fee changed.


```solidity
event LeaderboardRecipientSet(address indexed oldRecipient, address indexed newRecipient);
```

### LeaderboardFeeBpsSet
The leaderboard share for future markets changed.


```solidity
event LeaderboardFeeBpsSet(uint16 oldBps, uint16 newBps);
```

### LeaderboardRecordFailed
The leaderboard refused a score credit; the claim still went through.


```solidity
event LeaderboardRecordFailed(address indexed leaderboard, address indexed user, uint256 payout);
```

### LeaderboardNotifyFailed
The leaderboard refused a fee notification; the USDC was still sent.


```solidity
event LeaderboardNotifyFailed(address indexed leaderboard, uint256 amount);
```

### USDCTokenSet
The settlement token was set.


```solidity
event USDCTokenSet(address indexed token);
```

### MarketCloseTimeSet
The betting cutoff of a market was set.


```solidity
event MarketCloseTimeSet(uint256 indexed marketId, uint40 closesAt);
```

### MarketFeesFrozen
The fees of a market were frozen when it first opened.


```solidity
event MarketFeesFrozen(uint256 indexed marketId, uint16 feeBps, uint16 leaderboardFeeBps);
```

### StaleMarketCancelled
An unresolved market past its deadline was cancelled.


```solidity
event StaleMarketCancelled(uint256 indexed marketId, address indexed caller);
```

### DustSwept
The rounding dust of a fully claimed market was sent to the fee recipient.


```solidity
event DustSwept(uint256 indexed marketId, address indexed to, uint256 amount);
```

## Errors
### InvalidMarketId

```solidity
error InvalidMarketId(uint256 marketId);
```

### InvalidMarketState

```solidity
error InvalidMarketState(uint256 marketId, MarketState current, MarketState required);
```

### InvalidOutcome

```solidity
error InvalidOutcome(uint256 marketId, uint64 outcome);
```

### InvalidOutcomeValue

```solidity
error InvalidOutcomeValue(uint256 marketId, uint64 outcome, uint8 maxAllowed);
```

### InvalidMarketType

```solidity
error InvalidMarketType(bytes32 marketType);
```

### InvalidLine

```solidity
error InvalidLine(bytes32 marketType, int16 line);
```

### StakeBelowMinimum

```solidity
error StakeBelowMinimum(uint256 stake, uint256 minimum);
```

### ZeroStake

```solidity
error ZeroStake();
```

### AlreadyClaimed

```solidity
error AlreadyClaimed(uint256 marketId, address user);
```

### NothingToClaim

```solidity
error NothingToClaim(uint256 marketId, address user);
```

### NothingToRefund

```solidity
error NothingToRefund(uint256 marketId, address user);
```

### USDCNotConfigured

```solidity
error USDCNotConfigured();
```

### FeeRecipientNotConfigured

```solidity
error FeeRecipientNotConfigured();
```

### FeeBpsExceedsMax

```solidity
error FeeBpsExceedsMax(uint16 provided, uint16 max);
```

### LeaderboardFeeExceedsTotal

```solidity
error LeaderboardFeeExceedsTotal(uint16 leaderboardBps, uint16 totalBps);
```

### LeaderboardRecipientNotConfigured

```solidity
error LeaderboardRecipientNotConfigured();
```

### ArrayLengthMismatch

```solidity
error ArrayLengthMismatch();
```

### BettingClosed

```solidity
error BettingClosed(uint256 marketId, uint40 closesAt);
```

### InvalidCloseTime

```solidity
error InvalidCloseTime(uint256 marketId, uint40 closesAt);
```

### MarketNotStale

```solidity
error MarketNotStale(uint256 marketId, uint256 staleAt);
```

### MarketNotExpired

```solidity
error MarketNotExpired(uint256 marketId);
```

### USDCAlreadyConfigured

```solidity
error USDCAlreadyConfigured();
```

### UnbackedStake

```solidity
error UnbackedStake(uint256 required, uint256 balance);
```

### DustNotSweepable

```solidity
error DustNotSweepable(uint256 marketId);
```

### ClaimsPaused

```solidity
error ClaimsPaused(uint256 reopensAt);
```

## Structs
### MarketCore
Core market data as returned by `getMarketCore` (ABI kept
stable for the backend and frontend). Storage uses the
superset `MarketCoreData` below.


```solidity
struct MarketCore {
    MarketState state;
    uint64 result;
    uint40 createdAt;
    uint40 resolvedAt;
    uint256 resolvedNetPool;
}
```

### MarketCoreData
Core market data in storage. Four slots.
Slot A: state(1) + result(8) + createdAt(5) + resolvedAt(5)
+ feeBps(2) + leaderboardFeeBps(2) + feesFrozen(1) = 24 bytes
Slot B: resolvedNetPool
Slot C: paidOut          — USDC paid to winners so far
Slot D: claimedWinStake  — winning stake already claimed

*Upgrade-safe extension of the original two-slot struct: the
new slot-A fields sit in bytes that were always zero, slots C
and D are appended. Markets opened before this version have
`feesFrozen == false` and settle at the match-level fees.*


```solidity
struct MarketCoreData {
    MarketState state;
    uint64 result;
    uint40 createdAt;
    uint40 resolvedAt;
    uint16 feeBps;
    uint16 leaderboardFeeBps;
    bool feesFrozen;
    uint256 resolvedNetPool;
    uint256 paidOut;
    uint256 claimedWinStake;
}
```

### MarketSpec
Generic per-market metadata. Two slots.
Slot A: marketType (32 bytes)
Slot B: line(2) + maxOutcome(1) + extra(1) + groupId(2) + closesAt(5) = 11 bytes → 1 slot

*`extra` and `groupId` are sport-defined free fields:
* extra   — e.g. basketball quarter (1..4) or 0 for full-game
* groupId — UI grouping for related markets (0 = ungrouped)
`closesAt` is the on-chain betting cutoff: no
stake is accepted from that timestamp on. 0 = no cutoff (the
admin closes the market by hand, as before). It was appended
into free bytes of slot B, so existing markets read 0.*


```solidity
struct MarketSpec {
    bytes32 marketType;
    int16 line;
    uint8 maxOutcome;
    uint8 extra;
    uint16 groupId;
    uint40 closesAt;
}
```

## Enums
### MarketState
Market lifecycle. Transitions are one-directional except that
Cancelled is reachable from Open, Suspended, and Closed.


```solidity
enum MarketState {
    Inactive,
    Open,
    Suspended,
    Closed,
    Resolved,
    Cancelled
}
```


# FootballPariMatch

**Inherits:**
[PariMatchBase](../../../src/pari/PariMatchBase.sol/abstract.PariMatchBase.md)

**Author:**
ChilizTV Team

Football pari-mutuel market contract.

*Sport-specific layer on top of PariMatchBase. All position / pool /
claim / refund accounting lives in the base; this contract only adds:
(a) the football market-type whitelist
(b) the max-outcome table for each (type, line) pair
(c) `resolveByScore` — a typed oracle entrypoint that settles
every Closed market of this match from a single FootballScore
input, computing the winning outcome per market type.
Selection encoding (per market type):
WINNER             0 = Home / 1 = Draw / 2 = Away   (settled on 90' score only)
GOALS_TOTAL        0 = Under / 1 = Over (line in 1/10-goal units, e.g. 25 = 2.5)
BOTH_SCORE         0 = No / 1 = Yes
HALFTIME           0 = Home / 1 = Draw / 2 = Away
CORRECT_SCORE      encoded as clamp(home,9)*10 + clamp(away,9), 0..99
FIRST_SCORER       player ID, 1..255 (0 reserved for "no goals")
GOALS_EXACT        bucketed total goals: outcome = min(homeGoals + awayGoals, line);
line is the cap of the highest bucket (e.g. line=5 → 0,1,2,3,4,5+)
DOUBLE_CHANCE      0 = No / 1 = Yes. The DC variant is encoded in `line`:
0 = 1X (Home or Draw), 1 = 12 (Home or Away), 2 = 2X (Away or Draw).
Each variant is its own Yes/No market — three sub-markets per match.
FULL_TIME_WINNER   0 = Home / 1 = Away (binary — no draw possible). Settles on the
true final winner: penalty-shootout result if any, else extra-time
aggregate, else 90' score. Knockout-only — the backend seeds this
market exclusively when `isKnockoutMatch(fixture) == true`.
Line semantics:
- GOALS_TOTAL: 1/10-goal units. Use half-goal lines (15, 25, 35, ...) to
avoid pushes. Whole-number lines are accepted but settle as Under on tie.
- GOALS_EXACT: integer in [1, 255]. Highest bucket is "≥line".
- DOUBLE_CHANCE: integer in [0, 2]. See selection-encoding table.*


## State Variables
### MARKET_WINNER
Winner at 90 minutes: 0 = Home, 1 = Draw, 2 = Away.


```solidity
bytes32 public constant MARKET_WINNER = keccak256("WINNER");
```


### MARKET_GOALS_TOTAL
Total goals against `line` (1/10-goal units): 0 = Under, 1 = Over.


```solidity
bytes32 public constant MARKET_GOALS_TOTAL = keccak256("GOALS_TOTAL");
```


### MARKET_BOTH_SCORE
Both teams score: 0 = No, 1 = Yes.


```solidity
bytes32 public constant MARKET_BOTH_SCORE = keccak256("BOTH_SCORE");
```


### MARKET_HALFTIME
Half-time result: 0 = Home, 1 = Draw, 2 = Away.


```solidity
bytes32 public constant MARKET_HALFTIME = keccak256("HALFTIME");
```


### MARKET_CORRECT_SCORE
Score at 90 minutes, encoded as `min(home, 9) * 10 + min(away, 9)`.


```solidity
bytes32 public constant MARKET_CORRECT_SCORE = keccak256("CORRECT_SCORE");
```


### MARKET_FIRST_SCORER
Player id of the first scorer, 1..255.


```solidity
bytes32 public constant MARKET_FIRST_SCORER = keccak256("FIRST_SCORER");
```


### MARKET_GOALS_EXACT
Bucketed total goals: `min(home + away, line)`.


```solidity
bytes32 public constant MARKET_GOALS_EXACT = keccak256("GOALS_EXACT");
```


### MARKET_DOUBLE_CHANCE
Double-chance market: bettor picks one of the three 2-of-3
WINNER unions encoded in `line` (0=1X, 1=12, 2=2X). Each
instance resolves as a Yes/No pool (0=No, 1=Yes). Pari-mutuel
math is identical to BTTS — one outcome per market — so the
three DC variants are three separate markets at setup time.


```solidity
bytes32 public constant MARKET_DOUBLE_CHANCE = keccak256("DOUBLE_CHANCE");
```


### MARKET_FULL_TIME_WINNER
Final winner of the match including extra time AND penalty
shootout (knockout-only). Binary outcomes 0=Home, 1=Away —
by construction there is always a winner after 30min ET + PEN.
Distinct from MARKET_WINNER which settles strictly on the 90'
score (bookmaker convention: 1-1 at 90' settles WINNER=Draw
even if home wins 3-2 in extra time). Seeded by the backend
only when `isKnockoutMatch(fixture) == true`.


```solidity
bytes32 public constant MARKET_FULL_TIME_WINNER = keccak256("FULL_TIME_WINNER");
```


### PEN_WINNER_NONE
Sentinel value for `FootballScore.penWinner` meaning "the
match did NOT reach a penalty shootout". Distinct from 0=Home
and 1=Away so the resolver can tell "no shootout" from a
legitimate Home shootout win.


```solidity
uint8 internal constant PEN_WINNER_NONE = 255;
```


### __gap_football

```solidity
uint256[50] private __gap_football;
```


## Functions
### constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor();
```

### initialize

Initialize the proxy. Called once, by the factory.


```solidity
function initialize(string memory _matchName, address _owner) external initializer;
```

### _isValidMarketType


```solidity
function _isValidMarketType(bytes32 marketType) internal pure override returns (bool);
```

### _getMaxOutcome


```solidity
function _getMaxOutcome(bytes32 marketType, int16 line) internal pure override returns (uint8);
```

### resolveByScore

Resolve every Closed market of this match from one final-score input.

*Markets that cannot be derived from `s` (e.g. FIRST_SCORER when
`firstScorerId == 0`) are skipped — they remain Closed and the
oracle may settle them later via `resolveMarket`.
Markets in any state other than Closed are skipped.
Reverts only on access control / arithmetic errors.*


```solidity
function resolveByScore(FootballScore calldata s) external onlyRole(RESOLVER_ROLE) returns (uint256 marketsResolved);
```

### resolveBatchByScore

Resolve a chosen subset of markets from a final-score input.
Useful when the oracle wants per-market control or knows that
some markets in this batch are not derivable from `s`.


```solidity
function resolveBatchByScore(uint256[] calldata marketIds, FootballScore calldata s)
    external
    onlyRole(RESOLVER_ROLE)
    returns (uint256 marketsResolved);
```

### computeOutcome

View helper: what outcome would `s` produce for `marketId`?


```solidity
function computeOutcome(uint256 marketId, FootballScore calldata s)
    external
    view
    validMarket(marketId)
    returns (uint64 outcome, bool resolvable);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`outcome`|`uint64`|    The computed winning outcome.|
|`resolvable`|`bool`| False if this market type cannot be derived from `s` in its current configuration (caller should skip).|


### _outcomeFromScore


```solidity
function _outcomeFromScore(uint256 marketId, FootballScore calldata s)
    internal
    view
    returns (uint64 outcome, bool resolvable);
```

## Events
### MatchScoreResolved
`resolveByScore` settled every market it could derive from the score.


```solidity
event MatchScoreResolved(
    uint8 homeGoals,
    uint8 awayGoals,
    uint8 htHomeGoals,
    uint8 htAwayGoals,
    uint8 firstScorerId,
    uint8 aetHomeGoals,
    uint8 aetAwayGoals,
    uint8 penWinner,
    uint256 marketsResolved
);
```

## Structs
### FootballScore
Final score data used by `resolveByScore`.

*`firstScorerId == 0` means "unknown / not provided".
FIRST_SCORER markets are skipped (left in Closed state) when 0.
Player IDs 1..255 are the legitimate scorers.
AET / PEN fields (added after the initial v1 contract spec —
struct is calldata-only so no storage layout impact):
- `aetHomeGoals` / `aetAwayGoals` = aggregate score after
extra time. For matches that didn't reach AET, the backend
passes `aetHomeGoals = homeGoals` and `aetAwayGoals = awayGoals`.
- `penWinner` = winner of the penalty shootout. Encoded as
0=Home, 1=Away, 255=NOT_APPLICABLE (no shootout occurred).
These fields are consumed exclusively by MARKET_FULL_TIME_WINNER.
The classic MARKET_WINNER and other 90'-derived markets continue
to use `homeGoals`/`awayGoals`.*


```solidity
struct FootballScore {
    uint8 homeGoals;
    uint8 awayGoals;
    uint8 htHomeGoals;
    uint8 htAwayGoals;
    uint8 firstScorerId;
    uint8 aetHomeGoals;
    uint8 aetAwayGoals;
    uint8 penWinner;
}
```


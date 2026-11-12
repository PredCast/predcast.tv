# BasketballPariMatch

**Inherits:**
[PariMatchBase](../../../src/pari/PariMatchBase.sol/abstract.PariMatchBase.md)

**Author:**
ChilizTV Team

Basketball pari-mutuel market contract.

*Sport-specific layer on top of PariMatchBase. All position / pool /
claim / refund accounting lives in the base; this contract only adds:
(a) the basketball market-type whitelist
(b) the max-outcome table for each (type, line) pair
(c) `resolveByScore` — a typed oracle entrypoint that settles
every Closed market of this match from a single BasketballScore
input (per-quarter scores), computing the winning outcome per
market type.
Selection encoding (per market type):
WINNER          0 = Home / 1 = Away  (no draw)
TOTAL_POINTS    0 = Under / 1 = Over (line in 1/10-pt units, e.g. 2155 = 215.5)
SPREAD          0 = Home covers / 1 = Away covers
line = home handicap in 1/10-pt units, e.g.  55 → home -5.5
-55 → home +5.5
QUARTER_WINNER  0 = Home / 1 = Away  (extra = 1..4 selects the quarter)
FIRST_TO_SCORE  0 = Home / 1 = Away  (NOT derivable from final score)
HIGHEST_QUARTER 0 = Q1 / 1 = Q2 / 2 = Q3 / 3 = Q4
POINTS_EXACT    bucketed total points. outcome = min(total/step, line)
line  = highest bucket index (≥line goes to the cap)
extra = step size in points (0 ⇒ defaults to 1)
Markets whose outcome cannot be derived from a BasketballScore alone
(FIRST_TO_SCORE, push on SPREAD, tie on QUARTER_WINNER /
HIGHEST_QUARTER, misconfigured quarter) are left in Closed state by
`resolveByScore` so the oracle can settle them manually via
`resolveMarket` or the admin can `cancelMarket`.
Overtime, standard bookmaker rules:
- WINNER, TOTAL_POINTS, SPREAD, POINTS_EXACT include overtime.
- QUARTER_WINNER and HIGHEST_QUARTER use regulation quarters only
(Q4 never includes overtime).
`resolveByFinalScore` takes the overtime points. The legacy
`resolveByScore` has no overtime field: when regulation ends tied
(which is exactly when overtime was played) it leaves the four
overtime-sensitive markets Closed instead of settling them on
regulation points.*


## State Variables
### MARKET_WINNER
Winner of the game, overtime included: 0 = Home, 1 = Away.


```solidity
bytes32 public constant MARKET_WINNER = keccak256("WINNER");
```


### MARKET_TOTAL_POINTS
Total points against `line` (1/10-point units): 0 = Under, 1 = Over.


```solidity
bytes32 public constant MARKET_TOTAL_POINTS = keccak256("TOTAL_POINTS");
```


### MARKET_SPREAD
Home handicap `line` in 1/10-point units: 0 = Home covers, 1 = Away covers.


```solidity
bytes32 public constant MARKET_SPREAD = keccak256("SPREAD");
```


### MARKET_QUARTER_WINNER
Winner of the quarter in `extra` (1..4): 0 = Home, 1 = Away.


```solidity
bytes32 public constant MARKET_QUARTER_WINNER = keccak256("QUARTER_WINNER");
```


### MARKET_FIRST_TO_SCORE
First team to score: 0 = Home, 1 = Away.


```solidity
bytes32 public constant MARKET_FIRST_TO_SCORE = keccak256("FIRST_TO_SCORE");
```


### MARKET_HIGHEST_QUARTER
Quarter with the most combined points: 0..3 = Q1..Q4.


```solidity
bytes32 public constant MARKET_HIGHEST_QUARTER = keccak256("HIGHEST_QUARTER");
```


### MARKET_POINTS_EXACT
Bucketed total points: `min(total / step, line)`, with the step in `extra`.


```solidity
bytes32 public constant MARKET_POINTS_EXACT = keccak256("POINTS_EXACT");
```


### __gap_basketball

```solidity
uint256[50] private __gap_basketball;
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

### addQuarterMarket

Quarter markets need `extra` to select Q1..Q4.
Thin wrapper over `addMarketAdvanced(type, line, quarter, 0)`.


```solidity
function addQuarterMarket(bytes32 marketType, int16 line, uint8 quarter)
    external
    onlyRole(ADMIN_ROLE)
    returns (uint256 marketId);
```

### addPointsExactMarket

Points-exact markets use `extra` as bucket step (0 ⇒ step = 1).


```solidity
function addPointsExactMarket(int16 line, uint8 step) external onlyRole(ADMIN_ROLE) returns (uint256 marketId);
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

Legacy entrypoint without overtime points:
if regulation ended tied, WINNER / TOTAL_POINTS / SPREAD /
POINTS_EXACT stay Closed (use `resolveByFinalScore`).


```solidity
function resolveByScore(BasketballScore calldata s)
    external
    onlyRole(RESOLVER_ROLE)
    returns (uint256 marketsResolved);
```

### resolveByFinalScore

Settle every Closed market from the final score, overtime
included.


```solidity
function resolveByFinalScore(BasketballFinalScore calldata s)
    external
    onlyRole(RESOLVER_ROLE)
    returns (uint256 marketsResolved);
```

### resolveBatchByScore

Same as `resolveByScore`, for the listed markets only.


```solidity
function resolveBatchByScore(uint256[] calldata marketIds, BasketballScore calldata s)
    external
    onlyRole(RESOLVER_ROLE)
    returns (uint256 marketsResolved);
```

### resolveBatchByFinalScore

Same as `resolveByFinalScore`, for the listed markets only.


```solidity
function resolveBatchByFinalScore(uint256[] calldata marketIds, BasketballFinalScore calldata s)
    external
    onlyRole(RESOLVER_ROLE)
    returns (uint256 marketsResolved);
```

### computeOutcome

Outcome a `BasketballScore` would give a market, without writing anything.


```solidity
function computeOutcome(uint256 marketId, BasketballScore calldata s)
    external
    view
    validMarket(marketId)
    returns (uint64 outcome, bool resolvable);
```

### computeOutcomeFinal

Outcome a `BasketballFinalScore` would give a market, without writing anything.


```solidity
function computeOutcomeFinal(uint256 marketId, BasketballFinalScore calldata s)
    external
    view
    validMarket(marketId)
    returns (uint64 outcome, bool resolvable);
```

### _resolveAll


```solidity
function _resolveAll(BasketballFinalScore memory s, bool overtimeKnown) internal returns (uint256 marketsResolved);
```

### _resolveSome


```solidity
function _resolveSome(uint256[] calldata marketIds, BasketballFinalScore memory s, bool overtimeKnown)
    internal
    returns (uint256 marketsResolved);
```

### _fromLegacy


```solidity
function _fromLegacy(BasketballScore calldata s) private pure returns (BasketballFinalScore memory f);
```

### _outcomeFromScore


```solidity
function _outcomeFromScore(uint256 marketId, BasketballFinalScore memory s, bool overtimeKnown)
    internal
    view
    returns (uint64 outcome, bool resolvable);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`marketId`|`uint256`||
|`s`|`BasketballFinalScore`||
|`overtimeKnown`|`bool`|false for the legacy struct: a regulation tie then means overtime was played but its points are missing, so the markets that count overtime are not resolvable.|


### _homeTotal

*Final total, overtime included.*


```solidity
function _homeTotal(BasketballFinalScore memory s) private pure returns (uint16);
```

### _awayTotal

*Final total, overtime included.*


```solidity
function _awayTotal(BasketballFinalScore memory s) private pure returns (uint16);
```

### _homeRegulation


```solidity
function _homeRegulation(BasketballFinalScore memory s) private pure returns (uint16);
```

### _awayRegulation


```solidity
function _awayRegulation(BasketballFinalScore memory s) private pure returns (uint16);
```

### _regulationTied


```solidity
function _regulationTied(BasketballFinalScore memory s) private pure returns (bool);
```

### _quarterScores


```solidity
function _quarterScores(BasketballFinalScore memory s, uint8 q) private pure returns (uint8 h, uint8 a);
```

## Events
### MatchScoreResolved
A score entrypoint settled every market it could derive.


```solidity
event MatchScoreResolved(uint16 homeTotal, uint16 awayTotal, uint8 firstToScore, uint256 marketsResolved);
```

## Errors
### InvalidQuarter

```solidity
error InvalidQuarter(uint8 quarter);
```

## Structs
### BasketballScore
Per-quarter final score data used by `resolveByScore`.

*`firstToScore == 0` means "unknown / not provided" — FIRST_TO_SCORE
markets are skipped in that case. 1 = Home, 2 = Away.*


```solidity
struct BasketballScore {
    uint8 homeQ1;
    uint8 awayQ1;
    uint8 homeQ2;
    uint8 awayQ2;
    uint8 homeQ3;
    uint8 awayQ3;
    uint8 homeQ4;
    uint8 awayQ4;
    uint8 firstToScore;
}
```

### BasketballFinalScore
Final score including overtime, used by `resolveByFinalScore`.

*`homeOT` / `awayOT` are the points of ALL overtime periods
summed (0 when the game ended in regulation).*


```solidity
struct BasketballFinalScore {
    uint8 homeQ1;
    uint8 awayQ1;
    uint8 homeQ2;
    uint8 awayQ2;
    uint8 homeQ3;
    uint8 awayQ3;
    uint8 homeQ4;
    uint8 awayQ4;
    uint8 homeOT;
    uint8 awayOT;
    uint8 firstToScore;
}
```


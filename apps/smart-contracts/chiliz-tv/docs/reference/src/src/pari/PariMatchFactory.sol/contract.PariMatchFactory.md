# PariMatchFactory

**Inherits:**
Ownable2Step

**Author:**
ChilizTV Team

Factory for pari-mutuel match proxies.

*Governance:
- Every match is a `BeaconProxy` pointing at one beacon per sport.
Match contracts have NO upgrade entrypoint of their own: no match
admin can swap the code under its escrow any more. The code of all
matches of a sport changes only through
`UpgradeableBeacon.upgradeTo`, owned by `upgradeAdmin` (meant to
be a Safe, optionally behind a TimelockController).
- Because a match's code is fixed by the beacon, `isMatch` is a
trustworthy registry for the leaderboard and the router.
- Keys are split: the factory OWNER (Safe) configures
the factory; an optional `matchOperator` (backend hot key) may
also create matches; each match's `_owner` gets the ops roles
(ADMIN_ROLE + PAUSER_ROLE) only, while DEFAULT_ADMIN_ROLE (role
management, e.g. rotating the oracle or the router role) goes to
governance, the beacon owner; the oracle (RESOLVER_ROLE) must be
a different key from the match ops key, the factory owner and
the operator. The ops key therefore cannot grant itself
RESOLVER_ROLE.
- Ownership of the factory moves in two steps (Ownable2Step).
Each proxy is initialized with the factory as temporary admin, then
wired (USDC, fee recipient, leaderboard split, router role, oracle) and
handed to `_owner`; the factory renounces every role in the same
transaction.*


## State Variables
### FOOTBALL
Sport id of football matches.


```solidity
uint8 public constant FOOTBALL = uint8(SportType.FOOTBALL);
```


### BASKETBALL
Sport id of basketball matches.


```solidity
uint8 public constant BASKETBALL = uint8(SportType.BASKETBALL);
```


### MATCH_DEFAULT_FEE_BPS
Total fee a new match starts with (PariMatchBase.DEFAULT_FEE_BPS):
the leaderboard share written into new matches cannot exceed it.


```solidity
uint16 public constant MATCH_DEFAULT_FEE_BPS = 200;
```


### allMatches
Every match created by this factory.


```solidity
address[] public allMatches;
```


### matchSportType
Sport of a match.


```solidity
mapping(address => SportType) public matchSportType;
```


### isMatch
Whether an address is a match created by this factory.


```solidity
mapping(address => bool) public isMatch;
```


### footballBeacon
Beacon of every FootballPariMatch proxy (owned by `upgradeAdmin`).


```solidity
UpgradeableBeacon public immutable footballBeacon;
```


### basketballBeacon
Beacon of every BasketballPariMatch proxy (owned by `upgradeAdmin`).


```solidity
UpgradeableBeacon public immutable basketballBeacon;
```


### usdcToken
USDC token address passed to every new match.


```solidity
address public usdcToken;
```


### feeRecipient
Platform fee recipient passed to every new match.


```solidity
address public feeRecipient;
```


### swapRouter
Swap router granted SWAP_ROUTER_ROLE on every new match.


```solidity
address public swapRouter;
```


### leaderboardRewards
LeaderboardRewards proxy wired into every new match as the
recipient of the leaderboard-fee split + the sink for
leaderboard notifications. May be `address(0)` — no-leaderboard
mode, all fees go to `feeRecipient`.


```solidity
address public leaderboardRewards;
```


### leaderboardFeeBps
Leaderboard's share of the total fee, in basis points OF THE
POOL. Default 100 (1%). The factory writes this into every
new match alongside `leaderboardRewards`.


```solidity
uint16 public leaderboardFeeBps;
```


### matchOperator
Hot ops key allowed to create matches besides the owner, so
the owner can be a Safe while the backend keeps
creating matches. 0 = owner only.


```solidity
address public matchOperator;
```


## Functions
### constructor

*Implementations are deployed separately: embedding both in the
factory's creation code would exceed the 48 KB initcode limit
(EIP-3860).*


```solidity
constructor(address _footballImpl, address _basketballImpl, address _upgradeAdmin) Ownable(msg.sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_footballImpl`|`address`|  Deployed FootballPariMatch implementation.|
|`_basketballImpl`|`address`|Deployed BasketballPariMatch implementation.|
|`_upgradeAdmin`|`address`|  Owner of both beacons: the only key able to change match code. Use a Safe (or a TimelockController run by the Safe).|


### setWiring

Set the USDC token, fee recipient and router given to new matches. Owner only.


```solidity
function setWiring(address _usdcToken, address _feeRecipient, address _swapRouter) external onlyOwner;
```

### setLeaderboardWiring

Configure (or update) the leaderboard split applied to every
FUTURE match the factory creates. Existing matches are left
untouched — they keep whatever leaderboard recipient / bps
they were initialized with.


```solidity
function setLeaderboardWiring(address _leaderboard, uint16 _bps) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_leaderboard`|`address`|Address of the LeaderboardRewards proxy. Pass `address(0)` (with `_bps = 0`) to disable the leaderboard split for new matches.|
|`_bps`|`uint16`|        Leaderboard's share of the pool, in basis points. Must be <= MATCH_DEFAULT_FEE_BPS. Validated here so a bad value fails now, not in every later createMatch.|


### setMatchOperator

Set (or clear with address(0)) the ops key allowed to create matches.


```solidity
function setMatchOperator(address _operator) external onlyOwner;
```

### onlyOwnerOrOperator


```solidity
modifier onlyOwnerOrOperator();
```

### createFootballMatch

Deploy, initialize, and fully wire a FootballPariMatch proxy.


```solidity
function createFootballMatch(string calldata _matchName, address _owner, address _oracle)
    external
    onlyOwnerOrOperator
    returns (address proxy);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_matchName`|`string`|Human-readable name (e.g. "Barcelona vs Real Madrid").|
|`_owner`|`address`|    Match ops key: receives ADMIN_ROLE + PAUSER_ROLE (market lifecycle, pause). DEFAULT_ADMIN_ROLE goes to governance (`upgradeAdmin()`).|
|`_oracle`|`address`|   Receives RESOLVER_ROLE. Must differ from `_owner`, the factory owner and `matchOperator`.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`proxy`|`address`|    Address of the ready-to-use match proxy.|


### createBasketballMatch

Deploy, initialize, and fully wire a BasketballPariMatch proxy.


```solidity
function createBasketballMatch(string calldata _matchName, address _owner, address _oracle)
    external
    onlyOwnerOrOperator
    returns (address proxy);
```

### createFootballMatchWithMarkets

`createFootballMatch` plus its markets, cutoff and opening, in
one transaction instead of one per step. Same roles as
`createFootballMatch`; the factory sets the markets up while it
still holds ADMIN_ROLE, then renounces every role.


```solidity
function createFootballMatchWithMarkets(
    string calldata _matchName,
    address _owner,
    address _oracle,
    MarketSetup calldata _markets
) external onlyOwnerOrOperator returns (address proxy);
```

### createBasketballMatchWithMarkets

`createBasketballMatch` plus its markets, cutoff and opening,
in one transaction. See `createFootballMatchWithMarkets`.


```solidity
function createBasketballMatchWithMarkets(
    string calldata _matchName,
    address _owner,
    address _oracle,
    MarketSetup calldata _markets
) external onlyOwnerOrOperator returns (address proxy);
```

### _createFootball


```solidity
function _createFootball(string calldata _matchName, address _owner, address _oracle) internal returns (address);
```

### _createBasketball


```solidity
function _createBasketball(string calldata _matchName, address _owner, address _oracle) internal returns (address);
```

### _setUpMarkets

*Markets of a new match get ids 0..n-1.*


```solidity
function _setUpMarkets(PariMatchBase m, MarketSetup calldata s) internal;
```

### _createMatch


```solidity
function _createMatch(UpgradeableBeacon beacon, bytes memory initData, SportType sport, address _owner, address _oracle)
    internal
    returns (address proxy);
```

### footballImplementation

Current FootballPariMatch code (set by the beacon owner).


```solidity
function footballImplementation() public view returns (address);
```

### basketballImplementation

Current BasketballPariMatch code (set by the beacon owner).


```solidity
function basketballImplementation() public view returns (address);
```

### upgradeAdmin

Owner of the beacons, i.e. the only key able to change match code.


```solidity
function upgradeAdmin() external view returns (address);
```

### getAllMatches

Every match created by this factory.


```solidity
function getAllMatches() external view returns (address[] memory);
```

### getSportType

Sport of a match. Reverts for an unknown address.


```solidity
function getSportType(address matchAddress) external view returns (SportType);
```

### implementations

Current implementation for a sport id.


```solidity
function implementations(uint8 sport) external view returns (address);
```

### _requireWiring


```solidity
function _requireWiring() internal view;
```

### _wireMatch

*Wiring done while the factory is the temporary admin. The factory
keeps its roles until `_releaseMatch`.*


```solidity
function _wireMatch(address proxy, address _owner, address _oracle, address governance) internal;
```

### _releaseMatch

*Renounce every factory role, DEFAULT_ADMIN last. After this the
factory holds no role on the match.*


```solidity
function _releaseMatch(address proxy) internal;
```

## Events
### MatchCreated
*Signature kept: the backend reads the proxy from topic[1].*


```solidity
event MatchCreated(address indexed proxy, SportType sportType, address indexed owner);
```

### WiringSet
The token, fee recipient and router given to new matches changed.


```solidity
event WiringSet(address indexed usdcToken, address indexed feeRecipient, address indexed swapRouter);
```

### LeaderboardWiringSet
The leaderboard settings given to new matches changed.


```solidity
event LeaderboardWiringSet(address indexed leaderboard, uint16 leaderboardFeeBps);
```

### MatchOperatorSet
The ops key allowed to create matches changed.


```solidity
event MatchOperatorSet(address indexed oldOperator, address indexed newOperator);
```

## Errors
### MatchNotFound

```solidity
error MatchNotFound(address matchAddress);
```

### InvalidAddress

```solidity
error InvalidAddress();
```

### WiringNotConfigured

```solidity
error WiringNotConfigured();
```

### InvalidLeaderboardBps

```solidity
error InvalidLeaderboardBps(uint16 bps);
```

### OracleMustBeDistinct
The oracle must be a dedicated key.


```solidity
error OracleMustBeDistinct(address oracle);
```

### NotOwnerOrOperator

```solidity
error NotOwnerOrOperator(address caller);
```

## Structs
### MarketSetup
Markets created with a match, in the same transaction.


```solidity
struct MarketSetup {
    bytes32[] marketTypes;
    int16[] lines;
    uint8[] extras;
    uint16[] groupIds;
    uint40 closesAt;
    bool open;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`marketTypes`|`bytes32[]`|Market types, as in `PariMatchBase.addMarketsBatchAdvanced`.|
|`lines`|`int16[]`|      One line per market.|
|`extras`|`uint8[]`|     One sport-specific byte per market (basketball quarter 1..4, points-exact step), 0 otherwise.|
|`groupIds`|`uint16[]`|   One UI group per market, 0 for none.|
|`closesAt`|`uint40`|   Betting cutoff of every market, 0 to leave it unset.|
|`open`|`bool`|       Open every market for stakes.|

## Enums
### SportType

```solidity
enum SportType {
    FOOTBALL,
    BASKETBALL
}
```


# NetworkRouter

**Inherits:**
ReentrancyGuard, Ownable2Step

**Author:**
ChilizTV

Single entry point to pay bets, donations and subscriptions with the
network's native token, any routable ERC20, or USDC. Everything
settles in USDC.

*The same contract runs on every network and speaks the Uniswap V2
router ABI. Only its wiring changes:
- Chiliz: `masterRouter` and `tokenRouter` are the Kayen V2 router,
and `wrapperFactory` wraps fan tokens before the swap.
- Base: `masterRouter` and `tokenRouter` are a
`ConcentratedPoolAdapter`, and `wrapperFactory` stays unset.
"Native token" is the network's gas token (CHZ on Chiliz, ETH on Base);
`wrappedNativeToken` is its ERC20 form (WCHZ, WETH).
USDC goes straight into the match contract (the escrow) on the betting
path and into the streamer's `StreamWallet` on the streaming path. This
contract never holds USDC at rest, and it refuses native tokens sent
outside a payment.
Payment paths (all settle in USDC):
Betting:   placeBetWithNativeToken, placeBetWithToken, placeBetWithUSDC
-> PariMatchBase.placeBetUSDCFor
Streaming: donateWith{NativeToken,Token,USDC}, subscribeWith{NativeToken,Token,USDC}
-> fee to the treasury, the rest to the StreamWallet
ERC20 routing:
Every ERC20 swaps along [token, wrappedNativeToken, USDC], or
[wrappedNativeToken, USDC] for the wrapped native token itself. On Chiliz,
CAP-20 fan tokens (sub-18 decimals) only have liquidity in Kayen's wrapped
version: when `wrapperFactory` is set and the wrapped route pays more, the
router wraps first. On Base the adapter reads only the two ends of the
path and follows the route its owner registered. Quote with
`quoteTokenToUSDC`, so the quoted route is the executed one.
Security:
- Requires SWAP_ROUTER_ROLE on each PariMatch proxy.
- `bettingMatchFactory` validates every match before USDC is forwarded.
- Every swap needs a deadline and a non-zero `amountOutMin`, checked
against the USDC that actually arrived.
- Subscriptions are priced by the wallet and checked here too.
- Reentrancy guarded; SafeERC20 on every transfer.*


## State Variables
### masterRouter
Router for native-token swaps (Kayen V2 on Chiliz, the adapter on Base).


```solidity
IKayenMasterRouterV2 public immutable masterRouter;
```


### tokenRouter
Router for ERC20 swaps and quotes (Kayen V2 on Chiliz, the adapter on Base).


```solidity
IKayenRouter public immutable tokenRouter;
```


### usdc
Settlement token of every bet, donation and subscription.


```solidity
IERC20 public immutable usdc;
```


### wrappedNativeToken
ERC20 form of the native token: WCHZ on Chiliz, WETH on Base.


```solidity
address public immutable wrappedNativeToken;
```


### treasury
Platform treasury for streaming fee collection.


```solidity
address public treasury;
```


### platformFeeBps
Platform fee in basis points for streaming (e.g. 500 = 5%).


```solidity
uint16 public platformFeeBps;
```


### streamWalletFactory
StreamWalletFactory for wallet lookup/creation.


```solidity
StreamWalletFactory public streamWalletFactory;
```


### bettingMatchFactory
PariMatchFactory — validates that bettingMatch addresses are legitimate
before any USDC is forwarded. Must be set before any placeBetWith* call.


```solidity
PariMatchFactory public bettingMatchFactory;
```


### wrapperFactory
Kayen fan-token wrapper factory, Chiliz only (mainnet 0xAEdc…B264). When set,
sub-18-decimals tokens with an existing wrapped version are
wrapped before swapping. address(0) disables wrapping (raw
[token, wrappedNativeToken, USDC] routing only).


```solidity
IChilizWrapperFactory public wrapperFactory;
```


## Functions
### constructor


```solidity
constructor(
    address _masterRouter,
    address _tokenRouter,
    address _usdc,
    address _wrappedNativeToken,
    address _treasury,
    uint16 _platformFeeBps
) Ownable(msg.sender);
```

### placeBetWithNativeToken

Swap the native token sent for USDC and take a position in a pari-mutuel market.


```solidity
function placeBetWithNativeToken(
    address bettingMatch,
    uint256 marketId,
    uint64 outcome,
    uint256 amountOutMin,
    uint256 deadline
) external payable nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bettingMatch`|`address`| Address of the PariMatch proxy.|
|`marketId`|`uint256`|     Market identifier.|
|`outcome`|`uint64`|      Chosen outcome index.|
|`amountOutMin`|`uint256`| Minimum USDC from the swap (slippage protection).|
|`deadline`|`uint256`|     Unix timestamp deadline for the swap.|


### placeBetWithUSDC

Take a position directly with USDC (no swap).


```solidity
function placeBetWithUSDC(address bettingMatch, uint256 marketId, uint64 outcome, uint256 amount)
    external
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bettingMatch`|`address`| Address of the PariMatch proxy.|
|`marketId`|`uint256`|     Market identifier.|
|`outcome`|`uint64`|      Chosen outcome index.|
|`amount`|`uint256`|       USDC amount (caller must approve this contract first).|


### placeBetWithToken

Swap any ERC20 for USDC and take a pari-mutuel position.


```solidity
function placeBetWithToken(
    address token,
    uint256 amount,
    address bettingMatch,
    uint256 marketId,
    uint64 outcome,
    uint256 amountOutMin,
    uint256 deadline
) external nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|        ERC20 to swap (fan token, wrapped native token, etc.).|
|`amount`|`uint256`|       Token amount the caller intends to spend.|
|`bettingMatch`|`address`| Address of the PariMatch proxy.|
|`marketId`|`uint256`|     Market identifier.|
|`outcome`|`uint64`|      Chosen outcome index.|
|`amountOutMin`|`uint256`| Minimum USDC from the swap.|
|`deadline`|`uint256`|     Unix timestamp for swap expiry.|


### donateWithNativeToken

Swap the native token sent for USDC and donate it to a streamer.

*Creates the streamer's wallet on first use.*


```solidity
function donateWithNativeToken(address streamer, string calldata message, uint256 amountOutMin, uint256 deadline)
    external
    payable
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|Streamer receiving the donation.|
|`message`|`string`|Message emitted with the donation.|
|`amountOutMin`|`uint256`|Minimum USDC from the swap. Must be non-zero.|
|`deadline`|`uint256`|Unix timestamp for swap expiry.|


### subscribeWithNativeToken

Swap the native token sent for USDC and subscribe to a streamer.

*The USDC received must cover `StreamWallet.subscriptionCost(duration)`.*


```solidity
function subscribeWithNativeToken(address streamer, uint256 duration, uint256 amountOutMin, uint256 deadline)
    external
    payable
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|Streamer subscribed to.|
|`duration`|`uint256`|Subscription length in seconds.|
|`amountOutMin`|`uint256`|Minimum USDC from the swap. Must be non-zero.|
|`deadline`|`uint256`|Unix timestamp for swap expiry.|


### donateWithUSDC

Donate USDC to a streamer. The caller approves this contract first.


```solidity
function donateWithUSDC(address streamer, string calldata message, uint256 amount) external nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|Streamer receiving the donation.|
|`message`|`string`|Message emitted with the donation.|
|`amount`|`uint256`|USDC amount, platform fee included.|


### subscribeWithUSDC

Subscribe to a streamer with USDC. The caller approves this contract first.

*`amount` must cover `StreamWallet.subscriptionCost(duration)`.*


```solidity
function subscribeWithUSDC(address streamer, uint256 duration, uint256 amount) external nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|Streamer subscribed to.|
|`duration`|`uint256`|Subscription length in seconds.|
|`amount`|`uint256`|USDC amount, platform fee included.|


### donateWithToken

Swap an ERC20 for USDC and donate it to a streamer. The caller approves this contract first.


```solidity
function donateWithToken(
    address token,
    uint256 amount,
    address streamer,
    string calldata message,
    uint256 amountOutMin,
    uint256 deadline
) external nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|ERC20 to swap.|
|`amount`|`uint256`|Token amount the caller intends to spend.|
|`streamer`|`address`|Streamer receiving the donation.|
|`message`|`string`|Message emitted with the donation.|
|`amountOutMin`|`uint256`|Minimum USDC from the swap. Must be non-zero.|
|`deadline`|`uint256`|Unix timestamp for swap expiry.|


### subscribeWithToken

Swap an ERC20 for USDC and subscribe to a streamer. The caller approves this contract first.

*The USDC received must cover `StreamWallet.subscriptionCost(duration)`.*


```solidity
function subscribeWithToken(
    address token,
    uint256 amount,
    address streamer,
    uint256 duration,
    uint256 amountOutMin,
    uint256 deadline
) external nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|ERC20 to swap.|
|`amount`|`uint256`|Token amount the caller intends to spend.|
|`streamer`|`address`|Streamer subscribed to.|
|`duration`|`uint256`|Subscription length in seconds.|
|`amountOutMin`|`uint256`|Minimum USDC from the swap. Must be non-zero.|
|`deadline`|`uint256`|Unix timestamp for swap expiry.|


### setTreasury

Set the recipient of the streaming fee. Owner only.


```solidity
function setTreasury(address _treasury) external onlyOwner;
```

### setPlatformFeeBps

Set the streaming fee in basis points. Owner only.


```solidity
function setPlatformFeeBps(uint16 _feeBps) external onlyOwner;
```

### setMatchFactory

Register the PariMatchFactory so that bettingMatch addresses are validated
before USDC is forwarded. Must be set before any placeBetWith* call.


```solidity
function setMatchFactory(address _factory) external onlyOwner;
```

### setStreamWalletFactory

Set the streaming factory. Owner only.

*The factory must already list this contract as its `swapRouter`.*


```solidity
function setStreamWalletFactory(address _factory) external onlyOwner;
```

### setWrapperFactory

Register the Kayen fan-token wrapper factory. address(0) is
allowed and disables automatic wrapping (the setup on Base,
where Kayen has no wrapper deployment).


```solidity
function setWrapperFactory(address _factory) external onlyOwner;
```

### rescueTokens

Send ERC20 tokens sent to this contract by mistake to `to`. Owner only.

*Payments never leave funds here between calls, so this cannot reach
anything a user is owed.*


```solidity
function rescueTokens(IERC20 token, address to, uint256 amount) external onlyOwner;
```

### swapRouteFor

Route `_swapTokensToUSDC` takes for one whole unit of `token`
(10**decimals). The swap itself decides on the actual amount
with the same rule; use `routeFor(token, amount)` for that.


```solidity
function swapRouteFor(address token)
    public
    view
    returns (address swapToken, uint256 swapAmountPerUnit, address[] memory path);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`swapToken`|`address`| The token actually swapped (wrapped version for fan tokens).|
|`swapAmountPerUnit`|`uint256`| Wrapped units minted per 1 unit of `token` (1 when no wrapping applies).|
|`path`|`address[]`|       The swap path ending in USDC.|


### routeFor

Route and expected USDC output for swapping `amount` of `token`.

*When a wrapped version of `token` exists, both the raw
[token, wrappedNativeToken, USDC] path and the wrapped path are quoted for
this amount and the better one wins. Since anyone can create a
wrapper, neither a poolless nor a dust-seeded wrapper can divert
a token that trades raw; genuine fan tokens (no raw pool) still
route through their wrapper.*


```solidity
function routeFor(address token, uint256 amount)
    public
    view
    returns (address swapToken, uint256 swapAmountPerUnit, address[] memory path, uint256 expectedOut);
```

### quoteTokenToUSDC

Expected USDC out for swapping `amount` of `token`, following the
same route the swap will execute (0 if no route is priced).
Use this (not a hand-built path) to compute `amountOutMin`.


```solidity
function quoteTokenToUSDC(address token, uint256 amount) external view returns (uint256 usdcOut);
```

### _pullToken


```solidity
function _pullToken(IERC20 token, address from, uint256 declared) internal returns (uint256 received);
```

### _swapNativeTokenToUSDC


```solidity
function _swapNativeTokenToUSDC(uint256 nativeTokenAmount, uint256 amountOutMin, uint256 deadline)
    internal
    returns (uint256 usdcReceived);
```

### _swapTokensToUSDC

*Swap `amount` of `token` for USDC, wrapping fan tokens first.
Routing is `routeFor(token, amount)`; `amountOutMin` always
applies to the final USDC amount. Without a wrap candidate (always
the case on Base) there is nothing to compare, so the quote is skipped.*


```solidity
function _swapTokensToUSDC(address token, uint256 amount, uint256 amountOutMin, uint256 deadline)
    internal
    returns (uint256 usdcReceived);
```

### _receivedSince

*USDC that actually arrived since `before`, at least `amountOutMin`.
The amounts a DEX reports are not trusted.*


```solidity
function _receivedSince(uint256 before, uint256 amountOutMin) internal view returns (uint256 received);
```

### _pathFrom

*Kayen has no direct USDC pair for any token, so paths go through the
wrapped native token. On Base the adapter only reads the two ends.*


```solidity
function _pathFrom(address t) internal view returns (address[] memory path);
```

### _quote

*USDC out for `amountIn` along `path`, 0 when the route is not priced.*


```solidity
function _quote(uint256 amountIn, address[] memory path) internal view returns (uint256);
```

### _oneUnit


```solidity
function _oneUnit(address token) internal view returns (uint256);
```

### _wrapCandidate

*Wrapped version of `token` worth considering, with the wrapped
units minted per unit of `token`. Only when the wrapper factory is
set, the wrapped token exists and `token` has fewer than 18
decimals; `routeFor` then compares prices.*


```solidity
function _wrapCandidate(address token) internal view returns (address wrapped, uint256 perUnit);
```

### _placeBetOnBehalf

*Transfer USDC directly to the match contract (it is its own escrow),
then call placeBetUSDCFor to record the position.
Factory registry check is always enforced — no USDC is forwarded to
an address not deployed by the registered factory.*


```solidity
function _placeBetOnBehalf(address bettingMatch, uint256 marketId, uint64 outcome, uint256 amount) internal;
```

### _walletFor

*Resolve (and lazily deploy) the StreamWallet escrow for `streamer`.
Reverts if the StreamWalletFactory has not been wired — without it
we have no place to escrow USDC, so the call must fail loudly
instead of routing funds to the streamer EOA.*


```solidity
function _walletFor(address streamer) internal returns (address);
```

### _splitAndTransfer

*USDC is escrowed in the StreamWallet (`wallet`); streamer
withdraws via StreamWallet.withdrawRevenue.*


```solidity
function _splitAndTransfer(address wallet, uint256 totalAmount)
    internal
    returns (uint256 fee, uint256 streamerAmount);
```

### _recordSubscription

*The price is checked here as well as in the wallet, so a wallet
still on an implementation without pricing cannot be subscribed to
below cost: the call reverts.*


```solidity
function _recordSubscription(address wallet, address subscriber, uint256 usdcAmount, uint256 duration) internal;
```

### _recordDonation


```solidity
function _recordDonation(
    address wallet,
    address donor,
    uint256 usdcAmount,
    uint256 platformFee,
    uint256 streamerAmount,
    string calldata message
) internal;
```

## Events
### BetPlacedViaNativeToken
A bet was paid in the native token and swapped to USDC.


```solidity
event BetPlacedViaNativeToken(
    address indexed bettingMatch,
    address indexed user,
    uint256 nativeTokenSpent,
    uint256 usdcReceived,
    uint256 marketId,
    uint64 outcome
);
```

### BetPlacedViaToken
A bet was paid in an ERC20 and swapped to USDC.


```solidity
event BetPlacedViaToken(
    address indexed bettingMatch,
    address indexed user,
    address indexed token,
    uint256 tokenSpent,
    uint256 usdcReceived,
    uint256 marketId,
    uint64 outcome
);
```

### BetPlacedWithUSDC
A bet was paid directly in USDC.


```solidity
event BetPlacedWithUSDC(
    address indexed bettingMatch, address indexed user, uint256 amount, uint256 marketId, uint64 outcome
);
```

### DonationWithNativeToken
A donation was paid in the native token and swapped to USDC.


```solidity
event DonationWithNativeToken(
    address indexed donor,
    address indexed streamer,
    uint256 nativeTokenSpent,
    uint256 usdcDonated,
    uint256 platformFee,
    string message
);
```

### DonationWithToken
A donation was paid in an ERC20 and swapped to USDC.


```solidity
event DonationWithToken(
    address indexed donor,
    address indexed streamer,
    address indexed token,
    uint256 tokenSpent,
    uint256 usdcDonated,
    uint256 platformFee,
    string message
);
```

### DonationWithUSDCEvent
A donation was paid directly in USDC.


```solidity
event DonationWithUSDCEvent(
    address indexed donor, address indexed streamer, uint256 amount, uint256 platformFee, string message
);
```

### SubscriptionWithNativeToken
A subscription was paid in the native token and swapped to USDC.


```solidity
event SubscriptionWithNativeToken(
    address indexed subscriber,
    address indexed streamer,
    uint256 nativeTokenSpent,
    uint256 usdcPaid,
    uint256 platformFee,
    uint256 duration
);
```

### SubscriptionWithToken
A subscription was paid in an ERC20 and swapped to USDC.


```solidity
event SubscriptionWithToken(
    address indexed subscriber,
    address indexed streamer,
    address indexed token,
    uint256 tokenSpent,
    uint256 usdcPaid,
    uint256 platformFee,
    uint256 duration
);
```

### SubscriptionWithUSDCEvent
A subscription was paid directly in USDC.


```solidity
event SubscriptionWithUSDCEvent(
    address indexed subscriber, address indexed streamer, uint256 amount, uint256 platformFee, uint256 duration
);
```

### TreasurySet
The streaming fee recipient changed.


```solidity
event TreasurySet(address indexed oldTreasury, address indexed newTreasury);
```

### PlatformFeeBpsSet
The streaming fee changed.


```solidity
event PlatformFeeBpsSet(uint16 oldFeeBps, uint16 newFeeBps);
```

### MatchFactorySet
The factory validating match addresses changed.


```solidity
event MatchFactorySet(address indexed oldFactory, address indexed newFactory);
```

### StreamWalletFactorySet
The factory providing streamer wallets changed.


```solidity
event StreamWalletFactorySet(address indexed oldFactory, address indexed newFactory);
```

### WrapperFactorySet
The fan-token wrapper factory changed.


```solidity
event WrapperFactorySet(address indexed oldFactory, address indexed newFactory);
```

### FanTokenWrapped
A fan token was wrapped before its swap.


```solidity
event FanTokenWrapped(address indexed token, address indexed wrapped, uint256 amountIn, uint256 wrappedAmount);
```

### TokensRescued
Tokens sent to this contract by mistake were sent on to `to`.


```solidity
event TokensRescued(address indexed token, address indexed to, uint256 amount);
```

## Errors
### ZeroAddress

```solidity
error ZeroAddress();
```

### ZeroValue

```solidity
error ZeroValue();
```

### DeadlinePassed

```solidity
error DeadlinePassed();
```

### InvalidFeeBps

```solidity
error InvalidFeeBps();
```

### TokenIsUSDC

```solidity
error TokenIsUSDC();
```

### UnauthorizedBettingMatch

```solidity
error UnauthorizedBettingMatch(address bettingMatch);
```

### BettingMatchFactoryNotSet

```solidity
error BettingMatchFactoryNotSet();
```

### StreamWalletFactoryNotSet

```solidity
error StreamWalletFactoryNotSet();
```

### RouterNotConfiguredOnFactory

```solidity
error RouterNotConfiguredOnFactory();
```

### SlippageNotSet
Every swap needs a non-zero minimum output:
amountOutMin = 0 lets a sandwich take the whole trade.


```solidity
error SlippageNotSet();
```

### InsufficientOutput
The swap delivered less USDC than `amountOutMin`.


```solidity
error InsufficientOutput(uint256 received, uint256 amountOutMin);
```

### SubscriptionUnderpaid
The USDC paid does not cover the streamer's price for `duration`.


```solidity
error SubscriptionUnderpaid(uint256 paid, uint256 cost);
```


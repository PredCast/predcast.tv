# StreamWallet

**Inherits:**
Initializable, OwnableUpgradeable, UUPSUpgradeable, ReentrancyGuardUpgradeable

USDC escrow of one streamer: records donations and subscriptions
paid through the NetworkRouter and lets the streamer withdraw.

*Deployed via ERC1967 UUPS proxy by StreamWalletFactory.
The protocol config (treasury, platform fee, USDC, swap router) is
read live from `factory` on every call, so a rotation on the factory
reaches every existing wallet at once.
Payments only arrive through the router: it swaps to USDC, sends the
fee to the treasury and the rest here, then calls
`recordDonationByRouter` / `recordSubscriptionByRouter`. The legacy
fan-token paths (`recordSubscription`, `donate`, `donateFor`) were
removed: their hard-coded [token, USDC]
path reverted for every token and their fee swap had no slippage
bound.
Subscriptions are priced on-chain by the streamer:
`subscriptionPrice` USDC buys `subscriptionPeriod` seconds, pro rata.*


## State Variables
### streamer
Streamer this wallet belongs to.


```solidity
address public streamer;
```


### __deprecated_treasury
*Slots 1, 3, 4 and 5 (plus the uint16 packed in slot 1) held
per-wallet copies of the factory config, frozen at initialization.
Nothing reads or writes them: the getters `treasury()`,
`platformFeeBps()`, `usdc()` and `swapRouter()` query the factory.
They stay reserved so upgraded proxies keep the same layout;
wallets upgraded in place keep their stale values.*


```solidity
address private __deprecated_treasury;
```


### __deprecated_platformFeeBps

```solidity
uint16 private __deprecated_platformFeeBps;
```


### factory
Factory that deployed this wallet and provides its configuration.


```solidity
address public factory;
```


### __deprecated_kayenRouter

```solidity
address private __deprecated_kayenRouter;
```


### __deprecated_usdc

```solidity
address private __deprecated_usdc;
```


### __deprecated_swapRouter

```solidity
address private __deprecated_swapRouter;
```


### subscriptions
Subscription of each subscriber.


```solidity
mapping(address => Subscription) public subscriptions;
```


### lifetimeDonations
USDC donated by each donor, fee included.


```solidity
mapping(address => uint256) public lifetimeDonations;
```


### totalRevenue
USDC received in total, fee included.


```solidity
uint256 public totalRevenue;
```


### totalWithdrawn
USDC withdrawn by the streamer.


```solidity
uint256 public totalWithdrawn;
```


### totalSubscribers
Number of distinct subscribers.


```solidity
uint256 public totalSubscribers;
```


### subscriptionPrice
USDC price of one `subscriptionPeriod` (6 decimals). 0 = the
streamer has not priced subscriptions: they are refused.


```solidity
uint256 public subscriptionPrice;
```


### subscriptionPeriod
Length in seconds bought by `subscriptionPrice`.


```solidity
uint64 public subscriptionPeriod;
```


### payoutAddress
Where `withdrawRevenue` sends USDC. 0 = `streamer`.


```solidity
address public payoutAddress;
```


### MIN_SUBSCRIPTION_PERIOD
Shortest allowed `subscriptionPeriod`.


```solidity
uint64 public constant MIN_SUBSCRIPTION_PERIOD = 1 days;
```


### MAX_SUBSCRIPTION_PERIOD
Longest allowed `subscriptionPeriod`.


```solidity
uint64 public constant MAX_SUBSCRIPTION_PERIOD = 365 days;
```


## Functions
### onlyStreamer


```solidity
modifier onlyStreamer();
```

### onlyAuthorized


```solidity
modifier onlyAuthorized();
```

### _onlyStreamer


```solidity
function _onlyStreamer() internal view;
```

### _onlyAuthorized


```solidity
function _onlyAuthorized() internal view;
```

### constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor();
```

### initialize

Initialize the StreamWallet

*Called by the factory through the proxy constructor, so
`msg.sender` becomes `factory`. The config arguments are kept so
the selector (IStreamWalletInit) still matches the factories
already deployed, but they are ignored: treasury, fee, Kayen
router and USDC are read live from the factory.*


```solidity
function initialize(address streamer_, address, uint16, address, address) external initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer_`|`address`|The streamer address (owner/beneficiary)|
|`<none>`|`address`||
|`<none>`|`uint16`||
|`<none>`|`address`||
|`<none>`|`address`||


### treasury

Platform treasury receiving the fee portion (factory config).


```solidity
function treasury() public view returns (address);
```

### platformFeeBps

Platform fee in basis points (factory `defaultPlatformFeeBps`).


```solidity
function platformFeeBps() public view returns (uint16);
```

### usdc

USDC token escrowed by this wallet (factory config).


```solidity
function usdc() public view returns (address);
```

### swapRouter

NetworkRouter allowed to record donations and subscriptions (factory config).


```solidity
function swapRouter() public view returns (address);
```

### setSwapRouter

Deprecated: no effect, kept for factory compatibility.

*This used to store a per-wallet copy of the router, which a
later router rotation could not reach. The router is now read
from the factory: rotate it once with
`StreamWalletFactory.setSwapRouter`. Factories deployed before
the fix call this right after creating a wallet, so it must keep
succeeding for them. Same checks as before: factory-only (a
streamer must never pick the router) and non-zero argument.*


```solidity
function setSwapRouter(address _swapRouter) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_swapRouter`|`address`|Ignored once validated.|


### setSubscriptionPricing

Price subscriptions: `price` USDC (6 decimals) buys `period`
seconds, pro rata. Applies to future payments only.


```solidity
function setSubscriptionPricing(uint256 price, uint64 period) external onlyStreamer;
```

### subscriptionCost

USDC needed to subscribe for `duration` seconds (rounded up).


```solidity
function subscriptionCost(uint256 duration) public view returns (uint256);
```

### setPayoutAddress

Send future withdrawals to `payout` instead of the streamer
address. `address(0)` reverts to the streamer.


```solidity
function setPayoutAddress(address payout) external onlyStreamer;
```

### recordSubscriptionByRouter

Record a subscription from the swap router (swap already completed)

*Only callable by factory or authorized swap router. No token transfers
or swaps occur here — purely state tracking. Reverts unless
`totalUsdcAmount` covers `duration` at the streamer's price.*


```solidity
function recordSubscriptionByRouter(address subscriber, uint256 totalUsdcAmount, uint256 duration)
    external
    onlyAuthorized
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`subscriber`|`address`|The subscriber address|
|`totalUsdcAmount`|`uint256`|The total USDC amount paid (before fee split)|
|`duration`|`uint256`|The subscription duration in seconds|


### recordDonationByRouter

Record a donation from the swap router (swap already completed)

*Only callable by factory or authorized swap router. No token transfers
or swaps occur here — purely state tracking.*


```solidity
function recordDonationByRouter(
    address donor,
    uint256 totalUsdcAmount,
    uint256 platformFee,
    uint256 streamerAmount,
    string calldata message
) external onlyAuthorized nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`donor`|`address`|The donor address|
|`totalUsdcAmount`|`uint256`|The total USDC donated (before fee split, for metrics)|
|`platformFee`|`uint256`|The actual platform fee taken by the router|
|`streamerAmount`|`uint256`|The actual amount sent to the streamer|
|`message`|`string`|Optional donation message|


### withdrawRevenue

Streamer withdraws accumulated revenue to the payout address
(the streamer itself unless `setPayoutAddress` was used).


```solidity
function withdrawRevenue(uint256 amount) external onlyStreamer nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to withdraw|


### isSubscribed

Check if a user has an active subscription


```solidity
function isSubscribed(address user) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The user address to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if subscription is active and not expired|


### availableBalance

Get available balance for withdrawal


```solidity
function availableBalance() public view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The available balance|


### getSubscription

Get subscription details for a user


```solidity
function getSubscription(address user) external view returns (Subscription memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The user address|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Subscription`|Subscription struct with subscription details|


### getDonationAmount

Get lifetime donation amount from a donor


```solidity
function getDonationAmount(address donor) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`donor`|`address`|The donor address|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 Total donated amount|


### _authorizeUpgrade

Authorize upgrade — only the factory (platform admin) can upgrade wallets.

*Prevents streamers from upgrading their own wallet to a malicious implementation
that could steal subscriber funds or bypass fee enforcement.
Upgrades must go through StreamWalletFactory.upgradeWallet().*


```solidity
function _authorizeUpgrade(address) internal view override;
```

## Events
### SubscriptionRecorded
A subscription was paid and its expiry updated.


```solidity
event SubscriptionRecorded(address indexed subscriber, uint256 amount, uint256 duration, uint256 expiryTime);
```

### DonationReceived
A donation was recorded.


```solidity
event DonationReceived(
    address indexed donor, uint256 amount, string message, uint256 platformFee, uint256 streamerAmount
);
```

### RevenueWithdrawn
USDC left the wallet towards the payout address.


```solidity
event RevenueWithdrawn(address indexed streamer, uint256 amount);
```

### SubscriptionPricingSet
The streamer changed the subscription price.


```solidity
event SubscriptionPricingSet(uint256 price, uint64 period);
```

### PayoutAddressSet
The streamer changed the withdrawal address.


```solidity
event PayoutAddressSet(address indexed oldPayout, address indexed newPayout);
```

## Errors
### OnlyFactory

```solidity
error OnlyFactory();
```

### OnlyStreamer

```solidity
error OnlyStreamer();
```

### OnlyAuthorized

```solidity
error OnlyAuthorized();
```

### InvalidAmount

```solidity
error InvalidAmount();
```

### InvalidAddress

```solidity
error InvalidAddress();
```

### InvalidDuration

```solidity
error InvalidDuration();
```

### InsufficientBalance

```solidity
error InsufficientBalance();
```

### SubscriptionPriceNotSet

```solidity
error SubscriptionPriceNotSet();
```

### InvalidSubscriptionPricing

```solidity
error InvalidSubscriptionPricing(uint256 price, uint64 period);
```

### InsufficientSubscriptionPayment

```solidity
error InsufficientSubscriptionPayment(uint256 required, uint256 paid);
```

## Structs
### Subscription

```solidity
struct Subscription {
    uint256 amount;
    uint256 startTime;
    uint256 expiryTime;
    bool active;
}
```


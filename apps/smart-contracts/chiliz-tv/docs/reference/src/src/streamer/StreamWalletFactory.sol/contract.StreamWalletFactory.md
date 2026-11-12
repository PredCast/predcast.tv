# StreamWalletFactory

**Inherits:**
Ownable2Step

Factory for deploying StreamWallet UUPS proxies for streamers

*Uses ERC1967 proxy pattern matching betting system architecture.
Payments go through NetworkRouter, which creates wallets lazily via
`getOrCreateWallet`. The former fan-token entrypoints
`subscribeToStream` / `donateToStream` were removed: their hard-coded [token, USDC] swap path reverted for every
token, and the wallet functions they called no longer exist.*


## State Variables
### streamWalletImplementation
Current StreamWallet implementation used for new proxy deployments.

*Mutable so the platform can roll out bug fixes or new features without
redeploying this factory. Existing wallets are NOT auto-upgraded; call
upgradeWallet() individually for each streamer that needs the new impl.*


```solidity
address public streamWalletImplementation;
```


### streamerWallets
Wallet of each streamer.


```solidity
mapping(address => address) public streamerWallets;
```


### treasury
Treasury read by every wallet.


```solidity
address public treasury;
```


### defaultPlatformFeeBps
Platform fee in basis points read by every wallet.


```solidity
uint16 public defaultPlatformFeeBps;
```


### kayenRouter
DEX router stored for wallet initialization. Wallets no longer use it.


```solidity
address public kayenRouter;
```


### usdc
USDC token read by every wallet.


```solidity
address public usdc;
```


### swapRouter
Router allowed to create wallets and record payments.


```solidity
address public swapRouter;
```


## Functions
### constructor

Initialize the factory and deploy implementation


```solidity
constructor(address initialOwner, address treasury_, uint16 defaultPlatformFeeBps_, address kayenRouter_, address usdc_)
    Ownable(initialOwner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialOwner`|`address`|The owner of the factory|
|`treasury_`|`address`|The platform treasury address|
|`defaultPlatformFeeBps_`|`uint16`|Default platform fee in basis points|
|`kayenRouter_`|`address`|The Kayen DEX router address|
|`usdc_`|`address`|The USDC token address|


### _deployStreamWallet

Deploy a StreamWallet for a streamer


```solidity
function _deployStreamWallet(address streamer) internal returns (address wallet);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|The streamer address|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`wallet`|`address`|The deployed wallet address|


### getOrCreateWallet

Get or create a StreamWallet for a streamer

*Used by NetworkRouter to ensure a wallet exists before recording*


```solidity
function getOrCreateWallet(address streamer) external returns (address wallet);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|The streamer address|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`wallet`|`address`|The StreamWallet proxy address|


### deployWalletFor

Manually deploy a wallet for a streamer (admin only)


```solidity
function deployWalletFor(address streamer) external onlyOwner returns (address wallet);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|The streamer address|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`wallet`|`address`|The deployed wallet address|


### setTreasury

Update the treasury address


```solidity
function setTreasury(address newTreasury) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newTreasury`|`address`|The new treasury address|


### setPlatformFee

Update the default platform fee


```solidity
function setPlatformFee(uint16 newFeeBps) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newFeeBps`|`uint16`|The new fee in basis points|


### setKayenRouter

Update the Kayen DEX router address


```solidity
function setKayenRouter(address newRouter) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRouter`|`address`|The new router address|


### setUsdc

Update the USDC token address

*Every wallet reads `usdc` live: `availableBalance` and
`withdrawRevenue` switch to the new token at once, so USDC
escrowed in the old token can no longer be withdrawn until this
is set back. Only rotate with all wallets drained.*


```solidity
function setUsdc(address newUsdc) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newUsdc`|`address`|The new USDC address|


### setSwapRouter

Update the authorized swap router address


```solidity
function setSwapRouter(address _swapRouter) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_swapRouter`|`address`|The NetworkRouter address|


### setImplementation

Update the StreamWallet implementation used for all future proxy deployments

*Does NOT affect already-deployed wallets. Use upgradeWallet() to migrate
existing wallets individually after validating the new implementation.*


```solidity
function setImplementation(address newImplementation) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newImplementation`|`address`|Address of the new StreamWallet implementation contract|


### upgradeWallet

Upgrade a streamer's StreamWallet to a new implementation (platform admin only)

*Only callable by the factory owner. StreamWallet._authorizeUpgrade enforces
that only the factory contract can initiate upgrades, preventing streamers
from self-upgrading to malicious implementations.*


```solidity
function upgradeWallet(address streamer, address newImplementation) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|The streamer whose wallet to upgrade|
|`newImplementation`|`address`|The new StreamWallet implementation address|


### getWallet

Get the wallet address for a streamer


```solidity
function getWallet(address streamer) external view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|The streamer address|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|wallet The wallet address (address(0) if not deployed)|


### hasWallet

Check if a streamer has a wallet


```solidity
function hasWallet(address streamer) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamer`|`address`|The streamer address|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if wallet exists|


### implementation

Get the implementation address used for new wallet deployments


```solidity
function implementation() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|Current StreamWallet implementation|


## Events
### StreamWalletCreated
A wallet was deployed for a streamer.


```solidity
event StreamWalletCreated(address indexed streamer, address indexed wallet);
```

### TreasuryUpdated
The treasury changed.


```solidity
event TreasuryUpdated(address indexed oldTreasury, address indexed newTreasury);
```

### PlatformFeeUpdated
The platform fee changed.


```solidity
event PlatformFeeUpdated(uint16 oldFeeBps, uint16 newFeeBps);
```

### KayenRouterUpdated
The stored DEX router changed.


```solidity
event KayenRouterUpdated(address indexed oldRouter, address indexed newRouter);
```

### UsdcUpdated
The USDC token changed.


```solidity
event UsdcUpdated(address indexed oldUsdc, address indexed newUsdc);
```

### SwapRouterUpdated
The authorized router changed.


```solidity
event SwapRouterUpdated(address indexed oldRouter, address indexed newRouter);
```

### ImplementationUpdated
The implementation for new wallets changed.


```solidity
event ImplementationUpdated(address indexed oldImplementation, address indexed newImplementation);
```

### WalletUpgraded
A streamer's wallet moved to a new implementation.


```solidity
event WalletUpgraded(address indexed streamer, address indexed wallet, address indexed newImplementation);
```

## Errors
### InvalidAddress

```solidity
error InvalidAddress();
```

### InvalidFeeBps

```solidity
error InvalidFeeBps();
```

### WalletAlreadyExists

```solidity
error WalletAlreadyExists();
```

### Unauthorized

```solidity
error Unauthorized();
```


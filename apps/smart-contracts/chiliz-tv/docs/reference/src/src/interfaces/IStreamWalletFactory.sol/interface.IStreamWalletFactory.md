# IStreamWalletFactory

Protocol-wide configuration that every StreamWallet reads live from
the factory that deployed it.

*These are the public getters of StreamWalletFactory. They already
exist on the factories deployed before the fix (mainnet
0x0ffa30b48adc0b2b773dc01422d249aee135a4bb), so wallets upgraded in
place can rely on them without redeploying the factory.*


## Functions
### treasury

Platform treasury receiving the fee portion.


```solidity
function treasury() external view returns (address);
```

### defaultPlatformFeeBps

Platform fee in basis points, applied by every wallet.


```solidity
function defaultPlatformFeeBps() external view returns (uint16);
```

### kayenRouter

Kayen DEX router used for fan token -> USDC swaps.


```solidity
function kayenRouter() external view returns (address);
```

### usdc

USDC token escrowed by the wallets.


```solidity
function usdc() external view returns (address);
```

### swapRouter

NetworkRouter allowed to record donations and subscriptions.


```solidity
function swapRouter() external view returns (address);
```


# IConcentratedPool

The part of a Uniswap V3 pool that Aerodrome Slipstream pools share.

*`slot0` and `ticks` return more fields than declared here, and not
the same ones on both DEXes (Slipstream has no `feeProtocol` and adds
staked liquidity). Only the leading fields are identical, so only
those are decoded.*


## Functions
### token0

Lower-sorted token of the pair.


```solidity
function token0() external view returns (address);
```

### token1

Higher-sorted token of the pair.


```solidity
function token1() external view returns (address);
```

### fee

Current swap fee in hundredths of a bip. Dynamic on Slipstream.


```solidity
function fee() external view returns (uint24);
```

### tickSpacing

Distance between usable ticks.


```solidity
function tickSpacing() external view returns (int24);
```

### liquidity

Liquidity active at the current tick.


```solidity
function liquidity() external view returns (uint128);
```

### slot0

Current price and tick.


```solidity
function slot0() external view returns (uint160 sqrtPriceX96, int24 tick);
```

### ticks

Liquidity data of an initialized tick.


```solidity
function ticks(int24 tick) external view returns (uint128 liquidityGross, int128 liquidityNet);
```

### tickBitmap

Bitmap of the initialized ticks in one word.


```solidity
function tickBitmap(int16 wordPosition) external view returns (uint256);
```

### swap

Swap against the pool. It calls back `uniswapV3SwapCallback` to get paid.


```solidity
function swap(
    address recipient,
    bool zeroForOne,
    int256 amountSpecified,
    uint160 sqrtPriceLimitX96,
    bytes calldata data
) external returns (int256 amount0, int256 amount1);
```


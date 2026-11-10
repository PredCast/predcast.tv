# ConcentratedPoolQuote

Read-only exact-input quote for a Uniswap-V3-style pool.

*`NetworkRouter` quotes through a `view` function, and the DEX
quoters cannot run under STATICCALL because they call `pool.swap`
and revert. This library replays the pool's swap loop from public
state instead: same tick search, same step math, same rounding, so
the result is the swap's output in the same block.*


## State Variables
### MIN_TICK

```solidity
int24 internal constant MIN_TICK = -887272;
```


### MAX_TICK

```solidity
int24 internal constant MAX_TICK = 887272;
```


### MIN_SQRT_RATIO

```solidity
uint160 internal constant MIN_SQRT_RATIO = 4295128739;
```


### MAX_SQRT_RATIO

```solidity
uint160 internal constant MAX_SQRT_RATIO = 1461446703485210103287273052203988822378723970342;
```


### MAX_STEPS
*Bounds the gas of a quote. A swap crossing more than this many
steps has no quote; the swap itself is not limited.*


```solidity
uint256 internal constant MAX_STEPS = 256;
```


### Q96

```solidity
uint256 private constant Q96 = 1 << 96;
```


### FEE_DENOMINATOR

```solidity
uint256 private constant FEE_DENOMINATOR = 1e6;
```


## Functions
### exactInput

Output of swapping `amountIn` on `pool` at the current state.


```solidity
function exactInput(IConcentratedPool pool, bool zeroForOne, uint256 amountIn)
    internal
    view
    returns (uint256 amountOut);
```

### sqrtRatioAtTick

sqrt(1.0001^tick) as a Q64.96, rounded up like the pools do.


```solidity
function sqrtRatioAtTick(int24 tick) internal pure returns (uint160);
```

### _nextInitializedTick


```solidity
function _nextInitializedTick(IConcentratedPool pool, int24 tick, int24 spacing, bool lte)
    private
    view
    returns (int24 next, bool initialized);
```

### _position


```solidity
function _position(int24 compressed) private pure returns (int16 word, uint8 bit);
```

### _leastSignificantBit


```solidity
function _leastSignificantBit(uint256 x) private pure returns (uint256);
```

### _computeStep


```solidity
function _computeStep(uint160 current, uint160 target, uint128 liquidity, uint256 remaining, uint24 fee)
    private
    pure
    returns (uint160 next, uint256 amountIn, uint256 amountOut, uint256 feeAmount);
```

### _amountIn


```solidity
function _amountIn(bool zeroForOne, uint160 to, uint160 from, uint128 liquidity) private pure returns (uint256);
```

### _amount0Delta


```solidity
function _amount0Delta(uint160 lower, uint160 upper, uint128 liquidity, bool roundUp) private pure returns (uint256);
```

### _amount1Delta


```solidity
function _amount1Delta(uint160 lower, uint160 upper, uint128 liquidity, bool roundUp) private pure returns (uint256);
```

### _nextPriceFromInput

*Only reached when the input stops short of the target, so the
result stays between `price` and the target and fits in a uint160.*


```solidity
function _nextPriceFromInput(uint160 price, uint128 liquidity, uint256 amount, bool zeroForOne)
    private
    pure
    returns (uint160);
```

## Errors
### QuoteUnavailable
The pool cannot absorb the amount within `MAX_STEPS` steps.


```solidity
error QuoteUnavailable();
```

### TickOutOfRange

```solidity
error TickOutOfRange(int24 tick);
```


# ConcentratedPoolAdapter

**Inherits:**
[IKayenRouter](../../../../src/interfaces/IKayenRouter.sol/interface.IKayenRouter.md), ReentrancyGuard, Ownable2Step

**Author:**
ChilizTV

Gives `NetworkRouter` the Uniswap V2 ABI it expects on a network
whose liquidity sits in Uniswap V3 or Aerodrome Slipstream pools.
Deploy it and pass its address as both the master and token router.

*It calls `pool.swap` directly because the two DEXes share the pool
interface and the callback, while each periphery router only works
with the pools of one factory.
The owner registers one route per (tokenIn, tokenOut). A swap reads
only the two ends of `path`: the router always asks for
[token, WETH, USDC], while fan tokens on Base trade against USDC or
CHZ. `amounts` therefore has one entry per registered hop plus one;
its first entry is the input and its last the output, as in V2.
Tokens only pass through this contract within a transaction.
Inputs and outputs are measured by balance, and a pool can only
be paid the input of its own hop, so a pool that misreports its
amounts cannot make a swap look better than it was.*


## State Variables
### MAX_HOPS
Maximum number of pools in one route.


```solidity
uint256 public constant MAX_HOPS = 3;
```


### weth
Wrapped form of the native token.


```solidity
IWETH public immutable weth;
```


### _routes

```solidity
mapping(address tokenIn => mapping(address tokenOut => Hop[])) private _routes;
```


### _activePool
*The only address `uniswapV3SwapCallback` accepts, with the token
and the most it may be paid, set for the duration of each `pool.swap`.*


```solidity
address private _activePool;
```


### _activeToken

```solidity
address private _activeToken;
```


### _activeAmount

```solidity
uint256 private _activeAmount;
```


## Functions
### constructor


```solidity
constructor(address _weth) Ownable(msg.sender);
```

### setRoute

Register, replace or (with no pools) remove a route.

*Pool addresses are trusted: only the owner can add them. The
checks here catch a wrong order or token, not a malicious pool.*


```solidity
function setRoute(address tokenIn, address tokenOut, address[] calldata pools) external onlyOwner;
```

### rescueTokens

Send ERC20 tokens sent to this contract by mistake to `to`. Owner only.

*Swaps never leave tokens here, so this cannot reach a user's funds.*


```solidity
function rescueTokens(IERC20 token, address to, uint256 amount) external onlyOwner;
```

### getRoute

Pools the swap from `tokenIn` to `tokenOut` goes through.


```solidity
function getRoute(address tokenIn, address tokenOut) external view returns (Hop[] memory);
```

### swapExactETHForTokens

Swap native ETH along the route from `path[0]` (WETH) to the last token.


```solidity
function swapExactETHForTokens(uint256 amountOutMin, address[] calldata path, address to, uint256 deadline)
    external
    payable
    nonReentrant
    returns (uint256[] memory amounts);
```

### swapExactTokensForTokens

Swap an exact ERC20 input along the route from `path[0]` to the last token.

*The caller approves this contract first. `amounts[0]` is what
arrived, which is less than `amountIn` for a fee-on-transfer token.*


```solidity
function swapExactTokensForTokens(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] calldata path,
    address to,
    uint256 deadline
) external nonReentrant returns (uint256[] memory amounts);
```

### getAmountsOut

Exact output of the swap at the current pool state.

*Reverts when the route is unknown or the pool cannot absorb
`amountIn`; `NetworkRouter` reads a revert as "no quote".*


```solidity
function getAmountsOut(uint256 amountIn, address[] calldata path) external view returns (uint256[] memory amounts);
```

### uniswapV3SwapCallback

Pays the pool during `pool.swap`. Both DEXes use this selector.

*The token and the cap come from this contract's own state, not
from `data`, which the pool hands back.*


```solidity
function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata) external;
```

### _openSwap


```solidity
function _openSwap(address[] calldata path, uint256 deadline) private view returns (Hop[] storage);
```

### _route


```solidity
function _route(address[] calldata path) private view returns (Hop[] storage hops);
```

### _swap


```solidity
function _swap(Hop[] storage hops, address tokenIn, uint256 amountIn, uint256 amountOutMin, address to)
    private
    returns (uint256[] memory amounts);
```

### _swapOnPool

*The output is what reached `recipient`, not what the pool reports.*


```solidity
function _swapOnPool(Hop memory hop, address tokenIn, uint256 amountIn, address recipient)
    private
    returns (uint256 amountOut);
```

## Events
### RouteSet
The route from `tokenIn` to `tokenOut` was registered, replaced or removed.


```solidity
event RouteSet(address indexed tokenIn, address indexed tokenOut, address[] pools);
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

### InvalidPath

```solidity
error InvalidPath();
```

### DeadlinePassed

```solidity
error DeadlinePassed();
```

### TooManyHops

```solidity
error TooManyHops();
```

### RouteNotSet

```solidity
error RouteNotSet(address tokenIn, address tokenOut);
```

### PoolTokenMismatch

```solidity
error PoolTokenMismatch(address pool, address token);
```

### RouteEndMismatch

```solidity
error RouteEndMismatch(address reached, address expected);
```

### InsufficientOutput

```solidity
error InsufficientOutput(uint256 amountOut, uint256 amountOutMin);
```

### PartialFill
The pool ran out of liquidity before taking the whole input.


```solidity
error PartialFill(address pool, uint256 consumed, uint256 amountIn);
```

### UnauthorizedCallback

```solidity
error UnauthorizedCallback(address caller);
```

### ExcessivePayment
The pool asked for more than the input of its hop.


```solidity
error ExcessivePayment(uint256 requested, uint256 allowed);
```

## Structs
### Hop

```solidity
struct Hop {
    address pool;
    address tokenOut;
    bool zeroForOne;
}
```


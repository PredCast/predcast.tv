// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable}           from "@openzeppelin/contracts/access/Ownable.sol";
import {Ownable2Step}      from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {IERC20}            from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20}         from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {SafeCast}          from "@openzeppelin/contracts/utils/math/SafeCast.sol";
import {ReentrancyGuard}   from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IConcentratedPool} from "../../interfaces/IConcentratedPool.sol";
import {IKayenRouter}      from "../../interfaces/IKayenRouter.sol";
import {ConcentratedPoolQuote} from "./ConcentratedPoolQuote.sol";

interface IWETH {
    /// @notice Wrap the ETH sent.
    function deposit() external payable;
}

/**
 * @title ConcentratedPoolAdapter
 * @author ChilizTV
 * @notice Gives `NetworkRouter` the Uniswap V2 ABI it expects on a network
 *         whose liquidity sits in Uniswap V3 or Aerodrome Slipstream pools.
 *         Deploy it and pass its address as both the master and token router.
 *
 * @dev    It calls `pool.swap` directly because the two DEXes share the pool
 *         interface and the callback, while each periphery router only works
 *         with the pools of one factory.
 *
 *         The owner registers one route per (tokenIn, tokenOut). A swap reads
 *         only the two ends of `path`: the router always asks for
 *         [token, WETH, USDC], while fan tokens on Base trade against USDC or
 *         CHZ. `amounts` therefore has one entry per registered hop plus one;
 *         its first entry is the input and its last the output, as in V2.
 *
 *         Tokens only pass through this contract within a transaction.
 */
contract ConcentratedPoolAdapter is IKayenRouter, ReentrancyGuard, Ownable2Step {
    using SafeERC20 for IERC20;

    struct Hop {
        address pool;
        address tokenOut;
        bool    zeroForOne;
    }

    /// @notice Maximum number of pools in one route.
    uint256 public constant MAX_HOPS = 3;

    /// @notice Wrapped form of the native token.
    IWETH public immutable weth;

    mapping(address tokenIn => mapping(address tokenOut => Hop[])) private _routes;

    /// @dev The only address `uniswapV3SwapCallback` accepts, set for the
    ///      duration of each `pool.swap`.
    address private _activePool;

    /// @notice The route from `tokenIn` to `tokenOut` was registered, replaced or removed.
    event RouteSet(address indexed tokenIn, address indexed tokenOut, address[] pools);

    error ZeroAddress();
    error InvalidPath();
    error DeadlinePassed();
    error TooManyHops();
    error RouteNotSet(address tokenIn, address tokenOut);
    error PoolTokenMismatch(address pool, address token);
    error RouteEndMismatch(address reached, address expected);
    error InsufficientOutput(uint256 amountOut, uint256 amountOutMin);
    /// @notice The pool ran out of liquidity before taking the whole input.
    error PartialFill(address pool, uint256 consumed, uint256 amountIn);
    error UnauthorizedCallback(address caller);

    constructor(address _weth) Ownable(msg.sender) {
        if (_weth == address(0)) revert ZeroAddress();
        weth = IWETH(_weth);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ADMIN
    // ══════════════════════════════════════════════════════════════════════════

    /**
     * @notice Register, replace or (with no pools) remove a route.
     * @dev    Pool addresses are trusted: only the owner can add them. The
     *         checks here catch a wrong order or token, not a malicious pool.
     */
    function setRoute(address tokenIn, address tokenOut, address[] calldata pools) external onlyOwner {
        if (tokenIn == address(0) || tokenOut == address(0)) revert ZeroAddress();
        if (pools.length > MAX_HOPS) revert TooManyHops();

        delete _routes[tokenIn][tokenOut];
        Hop[] storage route = _routes[tokenIn][tokenOut];

        address current = tokenIn;
        for (uint256 i; i < pools.length; ++i) {
            address token0 = IConcentratedPool(pools[i]).token0();
            address token1 = IConcentratedPool(pools[i]).token1();
            bool zeroForOne = current == token0;
            if (!zeroForOne && current != token1) revert PoolTokenMismatch(pools[i], current);
            current = zeroForOne ? token1 : token0;
            route.push(Hop(pools[i], current, zeroForOne));
        }
        if (pools.length != 0 && current != tokenOut) revert RouteEndMismatch(current, tokenOut);

        emit RouteSet(tokenIn, tokenOut, pools);
    }

    /// @notice Pools the swap from `tokenIn` to `tokenOut` goes through.
    function getRoute(address tokenIn, address tokenOut) external view returns (Hop[] memory) {
        return _routes[tokenIn][tokenOut];
    }

    // ══════════════════════════════════════════════════════════════════════════
    // V2 ABI
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Swap native ETH along the route from `path[0]` (WETH) to the last token.
    function swapExactETHForTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable nonReentrant returns (uint256[] memory amounts) {
        Hop[] storage hops = _openSwap(path, deadline);
        if (path[0] != address(weth)) revert InvalidPath();

        weth.deposit{value: msg.value}();
        amounts = _swap(hops, path[0], msg.value, amountOutMin, to);
    }

    /// @notice Swap an exact ERC20 input along the route from `path[0]` to the last token.
    /// @dev The caller approves this contract first.
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external nonReentrant returns (uint256[] memory amounts) {
        Hop[] storage hops = _openSwap(path, deadline);

        IERC20(path[0]).safeTransferFrom(msg.sender, address(this), amountIn);
        amounts = _swap(hops, path[0], amountIn, amountOutMin, to);
    }

    /// @notice Exact output of the swap at the current pool state.
    /// @dev    Reverts when the route is unknown or the pool cannot absorb
    ///         `amountIn`; `NetworkRouter` reads a revert as "no quote".
    function getAmountsOut(uint256 amountIn, address[] calldata path)
        external
        view
        returns (uint256[] memory amounts)
    {
        Hop[] storage hops = _route(path);
        uint256 count = hops.length;
        amounts = new uint256[](count + 1);
        amounts[0] = amountIn;
        for (uint256 i; i < count; ++i) {
            Hop memory hop = hops[i];
            amounts[i + 1] = ConcentratedPoolQuote.exactInput(IConcentratedPool(hop.pool), hop.zeroForOne, amounts[i]);
        }
    }

    // ══════════════════════════════════════════════════════════════════════════
    // POOL CALLBACK
    // ══════════════════════════════════════════════════════════════════════════

    /// @notice Pays the pool during `pool.swap`. Both DEXes use this selector.
    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external {
        if (msg.sender != _activePool) revert UnauthorizedCallback(msg.sender);

        address tokenIn = abi.decode(data, (address));
        uint256 owed = uint256(amount0Delta > 0 ? amount0Delta : amount1Delta);
        IERC20(tokenIn).safeTransfer(msg.sender, owed);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // INTERNAL
    // ══════════════════════════════════════════════════════════════════════════

    function _openSwap(address[] calldata path, uint256 deadline) private view returns (Hop[] storage) {
        if (block.timestamp > deadline) revert DeadlinePassed();
        return _route(path);
    }

    function _route(address[] calldata path) private view returns (Hop[] storage hops) {
        if (path.length < 2) revert InvalidPath();
        address tokenIn = path[0];
        address tokenOut = path[path.length - 1];
        hops = _routes[tokenIn][tokenOut];
        if (hops.length == 0) revert RouteNotSet(tokenIn, tokenOut);
    }

    function _swap(Hop[] storage hops, address tokenIn, uint256 amountIn, uint256 amountOutMin, address to)
        private
        returns (uint256[] memory amounts)
    {
        uint256 count = hops.length;
        amounts = new uint256[](count + 1);
        amounts[0] = amountIn;
        for (uint256 i; i < count; ++i) {
            Hop memory hop = hops[i];
            amounts[i + 1] = _swapOnPool(hop, tokenIn, amounts[i], i + 1 == count ? to : address(this));
            tokenIn = hop.tokenOut;
        }
        if (amounts[count] < amountOutMin) revert InsufficientOutput(amounts[count], amountOutMin);
    }

    function _swapOnPool(Hop memory hop, address tokenIn, uint256 amountIn, address recipient)
        private
        returns (uint256 amountOut)
    {
        _activePool = hop.pool;
        (int256 amount0, int256 amount1) = IConcentratedPool(hop.pool).swap(
            recipient,
            hop.zeroForOne,
            SafeCast.toInt256(amountIn),
            hop.zeroForOne
                ? ConcentratedPoolQuote.MIN_SQRT_RATIO + 1
                : ConcentratedPoolQuote.MAX_SQRT_RATIO - 1,
            abi.encode(tokenIn)
        );
        _activePool = address(0);

        (int256 paid, int256 received) = hop.zeroForOne ? (amount0, amount1) : (amount1, amount0);
        if (uint256(paid) != amountIn) revert PartialFill(hop.pool, uint256(paid), amountIn);
        amountOut = uint256(-received);
    }
}

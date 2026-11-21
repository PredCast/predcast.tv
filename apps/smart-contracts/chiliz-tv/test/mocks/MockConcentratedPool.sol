// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ISwapCallback {
    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external;
}

/**
 * @title MockConcentratedPool
 * @notice Fixed-rate stand-in for a V3 pool: pays out first, then requires the
 *         callback to settle, like the real one. Fund it with both tokens.
 */
contract MockConcentratedPool {
    address public immutable token0;
    address public immutable token1;

    uint256 public outPerInBps = 10_000;
    uint256 public fillBps = 10_000;

    constructor(address _token0, address _token1) {
        token0 = _token0;
        token1 = _token1;
    }

    function setOutPerInBps(uint256 bps) external {
        outPerInBps = bps;
    }

    function setFillBps(uint256 bps) external {
        fillBps = bps;
    }

    function swap(address recipient, bool zeroForOne, int256 amountSpecified, uint160, bytes calldata data)
        external
        returns (int256 amount0, int256 amount1)
    {
        uint256 consumed = (uint256(amountSpecified) * fillBps) / 10_000;
        uint256 amountOut = (consumed * outPerInBps) / 10_000;

        (address tokenIn, address tokenOut) = zeroForOne ? (token0, token1) : (token1, token0);
        IERC20(tokenOut).transfer(recipient, amountOut);

        (amount0, amount1) = zeroForOne
            ? (int256(consumed), -int256(amountOut))
            : (-int256(amountOut), int256(consumed));

        uint256 balanceBefore = IERC20(tokenIn).balanceOf(address(this));
        ISwapCallback(msg.sender).uniswapV3SwapCallback(amount0, amount1, data);
        require(IERC20(tokenIn).balanceOf(address(this)) - balanceBefore == consumed, "not settled");
    }
}

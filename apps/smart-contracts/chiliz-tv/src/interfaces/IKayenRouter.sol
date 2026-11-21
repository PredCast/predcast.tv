// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title IKayenRouter
/// @notice The part of the Uniswap V2 router ABI that `NetworkRouter` uses for
///         ERC20 swaps. Implemented by the Kayen V2 router and by
///         `ConcentratedPoolAdapter`.
interface IKayenRouter {
    /// @notice Swap an exact input along `path` and send the output to `to`.
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    /// @notice Expected amounts along `path`. The last entry is the output.
    function getAmountsOut(
        uint256 amountIn,
        address[] calldata path
    ) external view returns (uint256[] memory amounts);
}

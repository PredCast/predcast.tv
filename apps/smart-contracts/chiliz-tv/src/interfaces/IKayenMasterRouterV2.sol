// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title IKayenMasterRouterV2
 * @notice Native-CHZ swap interface used by `ChilizSwapRouter._swapCHZToUSDC`.
 * @dev    On Chiliz Spicy testnet the routers Kayen advertises (e.g.
 *         0x4D3D…3079) do NOT implement the documented V1
 *         `swapExactETHForTokens(uint256,address[],bool,address,uint256)`
 *         variant — calling it reverts with empty data because the selector
 *         (0x56ba8c44) is absent from the bytecode. Every router we found
 *         on Spicy is a vanilla Uniswap-V2 fork using the standard 4-arg
 *         signature (selector 0x7ff36ab5). This interface mirrors that
 *         reality. If a future Kayen MasterRouterV2 deployment ships with
 *         the extra `bool receiveUnwrappedToken` arg, swap this back.
 *         path[0] must be WCHZ.
 */
interface IKayenMasterRouterV2 {
    /// @notice Swap exact native CHZ for tokens (e.g., USDC). Standard V2.
    function swapExactETHForTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);

    /// @notice Swap native CHZ for exact amount of output tokens. Standard V2.
    function swapETHForExactTokens(
        uint256 amountOut,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);
}

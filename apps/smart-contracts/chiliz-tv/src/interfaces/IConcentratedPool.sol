// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title IConcentratedPool
 * @notice The part of a Uniswap V3 pool that Aerodrome Slipstream pools share.
 * @dev    `slot0` and `ticks` return more fields than declared here, and not
 *         the same ones on both DEXes (Slipstream has no `feeProtocol` and adds
 *         staked liquidity). Only the leading fields are identical, so only
 *         those are decoded.
 */
interface IConcentratedPool {
    /// @notice Lower-sorted token of the pair.
    function token0() external view returns (address);
    /// @notice Higher-sorted token of the pair.
    function token1() external view returns (address);

    /// @notice Current swap fee in hundredths of a bip. Dynamic on Slipstream.
    function fee() external view returns (uint24);
    /// @notice Distance between usable ticks.
    function tickSpacing() external view returns (int24);
    /// @notice Liquidity active at the current tick.
    function liquidity() external view returns (uint128);
    /// @notice Current price and tick.
    function slot0() external view returns (uint160 sqrtPriceX96, int24 tick);
    /// @notice Liquidity data of an initialized tick.
    function ticks(int24 tick) external view returns (uint128 liquidityGross, int128 liquidityNet);
    /// @notice Bitmap of the initialized ticks in one word.
    function tickBitmap(int16 wordPosition) external view returns (uint256);

    /// @notice Swap against the pool. It calls back `uniswapV3SwapCallback` to get paid.
    function swap(
        address recipient,
        bool zeroForOne,
        int256 amountSpecified,
        uint160 sqrtPriceLimitX96,
        bytes calldata data
    ) external returns (int256 amount0, int256 amount1);
}

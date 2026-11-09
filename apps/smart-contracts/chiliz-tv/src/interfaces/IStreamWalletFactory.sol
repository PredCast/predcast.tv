// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title IStreamWalletFactory
 * @notice Protocol-wide configuration that every StreamWallet reads live from
 *         the factory that deployed it (audit 2026-10, finding M-04).
 * @dev    These are the public getters of StreamWalletFactory. They already
 *         exist on the factories deployed before the fix (mainnet
 *         0x0ffa30b48adc0b2b773dc01422d249aee135a4bb), so wallets upgraded in
 *         place can rely on them without redeploying the factory.
 */
interface IStreamWalletFactory {
    /// @notice Platform treasury receiving the fee portion.
    function treasury() external view returns (address);

    /// @notice Platform fee in basis points, applied by every wallet.
    function defaultPlatformFeeBps() external view returns (uint16);

    /// @notice Kayen DEX router used for fan token -> USDC swaps.
    function kayenRouter() external view returns (address);

    /// @notice USDC token escrowed by the wallets.
    function usdc() external view returns (address);

    /// @notice ChilizSwapRouter allowed to record donations and subscriptions.
    function swapRouter() external view returns (address);
}

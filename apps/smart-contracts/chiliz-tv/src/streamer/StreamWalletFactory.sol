// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {StreamWallet} from "./StreamWallet.sol";
import {IStreamWalletInit} from "../interfaces/IStreamWalletInit.sol";

/**
 * @title StreamWalletFactory
 * @notice Factory for deploying StreamWallet UUPS proxies for streamers
 * @dev Uses ERC1967 proxy pattern matching betting system architecture.
 *      Payments go through ChilizSwapRouter, which creates wallets lazily via
 *      `getOrCreateWallet`. The former fan-token entrypoints
 *      `subscribeToStream` / `donateToStream` were removed (audit H-05
 *      residual): their hard-coded [token, USDC] swap path reverted for every
 *      token, and the wallet functions they called no longer exist.
 */
contract StreamWalletFactory is Ownable2Step {

    /*//////////////////////////////////////////////////////////////
                                 STATE
    //////////////////////////////////////////////////////////////*/

    /// @notice Current StreamWallet implementation used for new proxy deployments.
    /// @dev Mutable so the platform can roll out bug fixes or new features without
    ///      redeploying this factory. Existing wallets are NOT auto-upgraded; call
    ///      upgradeWallet() individually for each streamer that needs the new impl.
    address public streamWalletImplementation;
    mapping(address => address) public streamerWallets; // streamer => wallet

    // Protocol config below is read live by every StreamWallet (M-04): each
    // setter applies at once to all wallets running the post-M-04
    // implementation, existing ones included.
    address public treasury;
    uint16 public defaultPlatformFeeBps; // e.g., 500 = 5%
    address public kayenRouter;
    address public usdc;
    address public swapRouter;

    /*//////////////////////////////////////////////////////////////
                                 EVENTS
    //////////////////////////////////////////////////////////////*/

    event StreamWalletCreated(
        address indexed streamer,
        address indexed wallet
    );

    event TreasuryUpdated(address indexed oldTreasury, address indexed newTreasury);

    event PlatformFeeUpdated(uint16 oldFeeBps, uint16 newFeeBps);

    event KayenRouterUpdated(address indexed oldRouter, address indexed newRouter);

    event UsdcUpdated(address indexed oldUsdc, address indexed newUsdc);

    event SwapRouterUpdated(address indexed oldRouter, address indexed newRouter);

    event ImplementationUpdated(address indexed oldImplementation, address indexed newImplementation);

    event WalletUpgraded(address indexed streamer, address indexed wallet, address indexed newImplementation);

    /*//////////////////////////////////////////////////////////////
                                 ERRORS
    //////////////////////////////////////////////////////////////*/

    error InvalidAddress();
    error InvalidFeeBps();
    error WalletAlreadyExists();
    error Unauthorized();

    /*//////////////////////////////////////////////////////////////
                              CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/
    /**
     * @notice Initialize the factory and deploy implementation
     * @param initialOwner The owner of the factory
     * @param treasury_ The platform treasury address
     * @param defaultPlatformFeeBps_ Default platform fee in basis points
     * @param kayenRouter_ The Kayen DEX router address
     * @param usdc_ The USDC token address
     */
    constructor(
        address initialOwner,
        address treasury_,
        uint16 defaultPlatformFeeBps_,
        address kayenRouter_,
        address usdc_
    ) Ownable(initialOwner) {
        if (treasury_ == address(0)) revert InvalidAddress();
        if (defaultPlatformFeeBps_ > 10_000) revert InvalidFeeBps();

        streamWalletImplementation = address(new StreamWallet());
        treasury = treasury_;
        defaultPlatformFeeBps = defaultPlatformFeeBps_;
        kayenRouter = kayenRouter_;
        usdc = usdc_;
    }

    /*//////////////////////////////////////////////////////////////
                          WALLET DEPLOYMENT
    //////////////////////////////////////////////////////////////*/
    /**
     * @notice Deploy a StreamWallet for a streamer
     * @param streamer The streamer address
     * @return wallet The deployed wallet address
     */
    function _deployStreamWallet(
        address streamer
    ) internal returns (address wallet) {
        // Prepare initialization data
        bytes memory initData = abi.encodeWithSelector(
            IStreamWalletInit.initialize.selector,
            streamer,
            treasury,
            defaultPlatformFeeBps,
            kayenRouter,
            usdc
        );
        // Deploy ERC1967 UUPS proxy pointing at the current implementation.
        // No per-wallet router setup: the wallet reads swapRouter() from this
        // factory on every call (M-04).
        wallet = address(new ERC1967Proxy(streamWalletImplementation, initData));

        emit StreamWalletCreated(streamer, wallet);
    }

    /**
     * @notice Get or create a StreamWallet for a streamer
     * @dev Used by ChilizSwapRouter to ensure a wallet exists before recording
     * @param streamer The streamer address
     * @return wallet The StreamWallet proxy address
     */
    function getOrCreateWallet(address streamer) external returns (address wallet) {
        if (msg.sender != owner() && msg.sender != swapRouter) revert Unauthorized();
        if (streamer == address(0)) revert InvalidAddress();

        wallet = streamerWallets[streamer];
        if (wallet == address(0)) {
            wallet = _deployStreamWallet(streamer);
            streamerWallets[streamer] = wallet;
        }
    }

    /**
     * @notice Manually deploy a wallet for a streamer (admin only)
     * @param streamer The streamer address
     * @return wallet The deployed wallet address
     */
    function deployWalletFor(
        address streamer
    ) external onlyOwner returns (address wallet) {
        if (streamer == address(0)) revert InvalidAddress();
        if (streamerWallets[streamer] != address(0))
            revert WalletAlreadyExists();

        wallet = _deployStreamWallet(streamer);
        streamerWallets[streamer] = wallet;
    }

    /*//////////////////////////////////////////////////////////////
                           ADMIN FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Update the treasury address
     * @param newTreasury The new treasury address
     */
    function setTreasury(address newTreasury) external onlyOwner {
        if (newTreasury == address(0)) revert InvalidAddress();

        address oldTreasury = treasury;
        treasury = newTreasury;

        emit TreasuryUpdated(oldTreasury, newTreasury);
    }

    /**
     * @notice Update the default platform fee
     * @param newFeeBps The new fee in basis points
     */
    /**
     * @notice Update the default platform fee
     * @param newFeeBps The new fee in basis points
     */
    function setPlatformFee(uint16 newFeeBps) external onlyOwner {
        if (newFeeBps > 10_000) revert InvalidFeeBps();

        uint16 oldFeeBps = defaultPlatformFeeBps;
        defaultPlatformFeeBps = newFeeBps;

        emit PlatformFeeUpdated(oldFeeBps, newFeeBps);
    }

    /**
     * @notice Update the Kayen DEX router address
     * @param newRouter The new router address
     */
    function setKayenRouter(address newRouter) external onlyOwner {
        if (newRouter == address(0)) revert InvalidAddress();

        address oldRouter = kayenRouter;
        kayenRouter = newRouter;

        emit KayenRouterUpdated(oldRouter, newRouter);
    }

    /**
     * @notice Update the USDC token address
     * @dev    Every wallet reads `usdc` live (M-04): `availableBalance` and
     *         `withdrawRevenue` switch to the new token at once, so USDC
     *         escrowed in the old token can no longer be withdrawn until this
     *         is set back. Only rotate with all wallets drained.
     * @param newUsdc The new USDC address
     */
    function setUsdc(address newUsdc) external onlyOwner {
        if (newUsdc == address(0)) revert InvalidAddress();

        address oldUsdc = usdc;
        usdc = newUsdc;

        emit UsdcUpdated(oldUsdc, newUsdc);
    }

    /**
     * @notice Update the authorized swap router address
     * @param _swapRouter The ChilizSwapRouter address
     */
    function setSwapRouter(address _swapRouter) external onlyOwner {
        if (_swapRouter == address(0)) revert InvalidAddress();

        address oldRouter = swapRouter;
        swapRouter = _swapRouter;

        emit SwapRouterUpdated(oldRouter, _swapRouter);
    }

    /**
     * @notice Update the StreamWallet implementation used for all future proxy deployments
     * @dev Does NOT affect already-deployed wallets. Use upgradeWallet() to migrate
     *      existing wallets individually after validating the new implementation.
     * @param newImplementation Address of the new StreamWallet implementation contract
     */
    function setImplementation(address newImplementation) external onlyOwner {
        if (newImplementation.code.length == 0) revert InvalidAddress(); // L-05

        address old = streamWalletImplementation;
        streamWalletImplementation = newImplementation;

        emit ImplementationUpdated(old, newImplementation);
    }

    /**
     * @notice Upgrade a streamer's StreamWallet to a new implementation (platform admin only)
     * @dev Only callable by the factory owner. StreamWallet._authorizeUpgrade enforces
     *      that only the factory contract can initiate upgrades, preventing streamers
     *      from self-upgrading to malicious implementations.
     * @param streamer The streamer whose wallet to upgrade
     * @param newImplementation The new StreamWallet implementation address
     */
    function upgradeWallet(address streamer, address newImplementation) external onlyOwner {
        if (newImplementation.code.length == 0) revert InvalidAddress(); // L-05
        address wallet = streamerWallets[streamer];
        if (wallet == address(0)) revert InvalidAddress();

        StreamWallet(payable(wallet)).upgradeToAndCall(newImplementation, "");
        emit WalletUpgraded(streamer, wallet, newImplementation);
    }

    /**
     * @notice Get the wallet address for a streamer
     * @param streamer The streamer address
     * @return wallet The wallet address (address(0) if not deployed)
     */
    function getWallet(address streamer) external view returns (address) {
        return streamerWallets[streamer];
    }

    /**
     * @notice Check if a streamer has a wallet
     * @param streamer The streamer address
     * @return bool True if wallet exists
     */
    function hasWallet(address streamer) external view returns (bool) {
        return streamerWallets[streamer] != address(0);
    }

    /**
     * @notice Get the implementation address used for new wallet deployments
     * @return Current StreamWallet implementation
     */
    function implementation() external view returns (address) {
        return streamWalletImplementation;
    }
}

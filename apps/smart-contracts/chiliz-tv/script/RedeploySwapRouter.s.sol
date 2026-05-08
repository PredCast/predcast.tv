// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script, console} from "forge-std/Script.sol";
import {ChilizSwapRouter} from "../src/swap/ChilizSwapRouter.sol";
import {BettingMatchFactory} from "../src/betting/BettingMatchFactory.sol";
import {StreamWalletFactory} from "../src/streamer/StreamWalletFactory.sol";

/**
 * @title  RedeploySwapRouter
 * @notice Redeploys ONLY the ChilizSwapRouter and re-wires the existing
 *         BettingMatchFactory + StreamWalletFactory to point at the new one.
 *         Pool, factories, and existing matches are left in place.
 *
 * Why a separate script: the original `ChilizSwapRouter` was wired against
 * a Kayen "V1 with bool" master-router signature that doesn't exist on
 * Spicy testnet (selector 0x56ba8c44 absent from every deployed router's
 * bytecode). The interface + call have been switched to the standard
 * Uniswap-V2 4-arg `swapExactETHForTokens` (selector 0x7ff36ab5). This
 * script ships only that fix without touching liquidity, pool state, or
 * any deployed matches.
 *
 * Pre-conditions:
 *   - `KAYEN_MASTER_ROUTER` and `KAYEN_ROUTER` env vars point at routers
 *     that respond to selector 0x7ff36ab5 (any V2 router does — they may
 *     even be the same address now that we've dropped the distinctness
 *     check).
 *   - The signing key (PRIVATE_KEY) is the OWNER of both
 *     `BETTING_FACTORY_ADDRESS` and `STREAM_FACTORY_ADDRESS` — those
 *     setters are `onlyOwner`-gated.
 *   - `LIQUIDITY_POOL_PROXY_ADDRESS`, `BETTING_FACTORY_ADDRESS`,
 *     `STREAM_FACTORY_ADDRESS` are populated from the existing deployment.
 *
 * Env (in addition to the standard deploy.sh vars):
 *   BETTING_FACTORY_ADDRESS      0x881ae75e…  (existing)
 *   STREAM_FACTORY_ADDRESS       0xc30b1493…  (existing)
 *   LIQUIDITY_POOL_PROXY_ADDRESS 0x75fa6ab5…  (existing)
 *
 * Usage:
 *   source .env.chilizTestnet
 *   export BETTING_FACTORY_ADDRESS=0x881ae75ec8cb5280e5227453241dfe2c18ddee54
 *   export STREAM_FACTORY_ADDRESS=0xc30b1493ef233b8e0caeff7e2d59c38cbaa0dfb8
 *   export LIQUIDITY_POOL_PROXY_ADDRESS=0x75fa6ab55d9301229ba907239203acff85b83c3a
 *   forge script script/RedeploySwapRouter.s.sol \
 *     --rpc-url $RPC_URL --broadcast $FORGE_FLAGS --private-key $PRIVATE_KEY -vvvv
 */
contract RedeploySwapRouter is Script {

    // Existing deployment we don't touch.
    BettingMatchFactory public bettingFactory;
    StreamWalletFactory public streamFactory;
    address public liquidityPool;
    address public usdcAddress;
    address public wchz;
    address public treasury;
    address public masterRouter;
    address public tokenRouter;
    uint16  public platformFeeBps;

    // The new SwapRouter we're about to deploy.
    ChilizSwapRouter public newRouter;

    function run() external {
        _loadConfig();

        vm.startBroadcast();

        _printHeader();
        _deployNewRouter();
        _wireNewRouterToExistingDependencies();
        _swapPointersOnFactories();
        _printSummary();

        vm.stopBroadcast();
    }

    function _loadConfig() internal {
        bettingFactory = BettingMatchFactory(vm.envAddress("BETTING_FACTORY_ADDRESS"));
        streamFactory  = StreamWalletFactory(vm.envAddress("STREAM_FACTORY_ADDRESS"));
        liquidityPool  = vm.envAddress("LIQUIDITY_POOL_PROXY_ADDRESS");
        usdcAddress    = vm.envAddress("USDC_ADDRESS");
        wchz           = vm.envAddress("WCHZ_ADDRESS");
        treasury       = vm.envAddress("SAFE_ADDRESS");
        masterRouter   = vm.envAddress("KAYEN_MASTER_ROUTER");
        tokenRouter    = vm.envAddress("KAYEN_ROUTER");
        platformFeeBps = uint16(_envUintOr("PLATFORM_FEE_BPS", 500));

        require(address(bettingFactory) != address(0), "BETTING_FACTORY_ADDRESS required");
        require(address(streamFactory)  != address(0), "STREAM_FACTORY_ADDRESS required");
        require(liquidityPool != address(0),           "LIQUIDITY_POOL_PROXY_ADDRESS required");
    }

    function _printHeader() internal view {
        console.log("=========================================");
        console.log("REDEPLOY ChilizSwapRouter ONLY");
        console.log("=========================================");
        console.log("Existing BettingMatchFactory:", address(bettingFactory));
        console.log("Existing StreamWalletFactory:", address(streamFactory));
        console.log("Existing LiquidityPool:      ", liquidityPool);
        console.log("USDC:                        ", usdcAddress);
        console.log("WCHZ:                        ", wchz);
        console.log("masterRouter (Kayen):        ", masterRouter);
        console.log("tokenRouter  (Kayen):        ", tokenRouter);
        console.log("Treasury:                    ", treasury);
        console.log("platformFeeBps:              ", platformFeeBps);
        console.log("");
    }

    function _deployNewRouter() internal {
        newRouter = new ChilizSwapRouter(
            masterRouter,
            tokenRouter,
            usdcAddress,
            wchz,
            treasury,
            platformFeeBps
        );
        console.log("Deployed new ChilizSwapRouter at:", address(newRouter));
    }

    function _wireNewRouterToExistingDependencies() internal {
        // The new router needs to know the pool + the BettingMatchFactory
        // upfront — these setters have no cross-checks. The
        // StreamWalletFactory setter is deferred to the last step because
        // the contract guards against config-order mistakes (it requires
        // streamFactory.swapRouter() == address(this) BEFORE letting the
        // router register the factory).
        newRouter.setLiquidityPool(liquidityPool);
        newRouter.setMatchFactory(address(bettingFactory));
        console.log("  newRouter.setLiquidityPool       ->", liquidityPool);
        console.log("  newRouter.setMatchFactory        ->", address(bettingFactory));
    }

    function _swapPointersOnFactories() internal {
        // Future-created matches inherit `swapRouter` via factory.setWiring,
        // so updating the factory's pointer is enough — no per-match work.
        bettingFactory.setWiring(liquidityPool, usdcAddress, address(newRouter));
        console.log("  bettingFactory.setWiring         -> pool/usdc/newRouter");

        // Update the stream factory's pointer FIRST so the next step's
        // cross-check (RouterNotConfiguredOnFactory) passes.
        streamFactory.setSwapRouter(address(newRouter));
        console.log("  streamFactory.setSwapRouter      ->", address(newRouter));

        // Now safe to register the stream factory on the router.
        newRouter.setStreamWalletFactory(address(streamFactory));
        console.log("  newRouter.setStreamWalletFactory ->", address(streamFactory));
    }

    function _printSummary() internal view {
        console.log("");
        console.log("=========================================");
        console.log("REDEPLOY COMPLETE");
        console.log("=========================================");
        console.log("New ChilizSwapRouter:", address(newRouter));
        console.log("");
        console.log("Update apps/frontend/.env:");
        console.log("  NEXT_PUBLIC_CHILIZ_SWAP_ROUTER_ADDRESS=", address(newRouter));
        console.log("");
        console.log("Sanity test (cast):");
        console.log("  cast send <newRouter> 'depositLiquidityWithCHZ(uint256,uint256,address)' \\");
        console.log("    <amountOutMin> <deadline> <receiver> \\");
        console.log("    --value 1ether --legacy --gas-price 3500000000001 \\");
        console.log("    --rpc-url $RPC_URL --private-key $PRIVATE_KEY");
    }

    function _envUintOr(string memory key, uint256 defaultValue) internal view returns (uint256) {
        try vm.envUint(key) returns (uint256 v) { return v; } catch { return defaultValue; }
    }
}

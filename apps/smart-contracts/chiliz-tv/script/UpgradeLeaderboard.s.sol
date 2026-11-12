// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script, console}      from "forge-std/Script.sol";
import {LeaderboardRewards}   from "../src/leaderboard/LeaderboardRewards.sol";

/// @dev Minimal UUPS proxy surface we need to drive the upgrade. The deployed
///      proxy inherits this from `UUPSUpgradeable`; importing the upgradeable
///      contract here would double-register `initialize` selectors.
interface IUUPSProxy {
    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable;
}

/**
 * @title  UpgradeLeaderboard
 * @author ChilizTV
 * @notice Upgrade the deployed `LeaderboardRewards` ERC1967 proxy to the V2
 *         implementation in `src/leaderboard/LeaderboardRewards.sol`.
 *
 *         Works for V1 -> V3 and V2 -> V3 proxies (see step 2). V3 =
 *         profit-based scores, per-epoch fee attribution,
 *         scoring grace, claim window from the actual close.
 *
 *         V2 swaps the off-chain merkle distribution for fully on-chain
 *         pro-rata per-epoch payouts with admin-settable epoch duration and
 *         lazy auto-advance. Storage layout is preserved; the legacy V1
 *         `_score` mapping at slot 2 is orphaned but left untouched.
 *
 * USAGE:
 *   PRIVATE_KEY=<DEFAULT_ADMIN_ROLE holder> \
 *   LEADERBOARD_PROXY=0xed2637471c32604048de1e147c94eef6ffe3dc4b \
 *   forge script script/UpgradeLeaderboard.s.sol \
 *     --rpc-url https://spicy-rpc.chiliz.com --broadcast -vvvv
 *
 *   Or via deploy.sh: `./deploy.sh --network chilizTestnet --upgrade-leaderboard`.
 *
 * ENVIRONMENT VARIABLES:
 *   PRIVATE_KEY        — Deployer private key. Must hold DEFAULT_ADMIN_ROLE
 *                        on the proxy (UUPS `_authorizeUpgrade` is admin-only).
 *   LEADERBOARD_PROXY  — Deployed ERC1967 proxy address (NOT the impl).
 *   MATCH_FACTORY      — Optional: new beacon-based PariMatchFactory to trust
 *                        (setMatchFactory, needs ADMIN_ROLE). Strongly
 *                        recommended in the same run as the V3 upgrade.
 */
contract UpgradeLeaderboard is Script {

    address public deployer;
    address public proxyAddr;
    address public newImpl;

    function run() external {
        deployer  = msg.sender;
        proxyAddr = vm.envAddress("LEADERBOARD_PROXY");
        if (proxyAddr == address(0)) revert("LEADERBOARD_PROXY required");

        _printHeader();

        vm.startBroadcast();

        // 1. Deploy fresh V2 implementation. The contract's constructor calls
        //    `_disableInitializers()` so the impl itself is dead-locked; only
        //    the proxy ever runs `initialize` / `initializeV2`.
        newImpl = address(new LeaderboardRewards());
        console.log("New LeaderboardRewards impl:", newImpl);

        // 2. Drive the upgrade through the proxy. A V1 proxy (epoch clock not
        //    started) also runs `initializeV2()` in the same call; a V2 proxy
        //    (e.g. mainnet / Spicy, upgraded to V3) must NOT: `reinitializer(2)`
        //    would revert and take the whole upgrade with it. V3 needs no
        //    initializer (its two new storage variables start at zero).
        bool needsV2 = LeaderboardRewards(proxyAddr).epochDuration() == 0;
        bytes memory initData = needsV2
            ? abi.encodeWithSelector(LeaderboardRewards.initializeV2.selector)
            : bytes("");
        console.log("Runs initializeV2:", needsV2);
        IUUPSProxy(proxyAddr).upgradeToAndCall(newImpl, initData);
        console.log("Proxy upgraded:", proxyAddr, "->", newImpl);

        // 3. Trust only the beacon-based PariMatchFactory. Until
        //    this runs, the old factory's UUPS matches (still upgradable by
        //    their admin) can call recordProfit / notifyFee, and new beacon
        //    matches are rejected. Do it in the same run when possible.
        try vm.envAddress("MATCH_FACTORY") returns (address f) {
            LeaderboardRewards(proxyAddr).setMatchFactory(f);
            console.log("matchFactory repointed ->", f);
        } catch {
            console.log("WARNING: MATCH_FACTORY not set; matchFactory unchanged:",
                address(LeaderboardRewards(proxyAddr).matchFactory()));
        }

        vm.stopBroadcast();

        _printPostChecks();
    }

    function _printHeader() internal view {
        console.log("==============================================");
        console.log("LEADERBOARD V2 UPGRADE");
        console.log("==============================================");
        console.log("Deployer :", deployer);
        console.log("Proxy    :", proxyAddr);
        console.log("");
    }

    function _printPostChecks() internal view {
        LeaderboardRewards lb = LeaderboardRewards(proxyAddr);
        console.log("");
        console.log("==============================================");
        console.log("POST-UPGRADE VIEWS");
        console.log("==============================================");
        console.log("currentEpoch   :", lb.currentEpoch());
        console.log("epochDuration  :", lb.epochDuration());
        console.log("epochStartTime :", lb.epochStartTime());
        console.log("openPrizePool  :", lb.openPrizePool());
        console.log("");
        console.log("Sanity: epochDuration should be 30 days = 2592000.");
        console.log("        epochStartTime should be ~ block.timestamp of the upgrade tx.");
        console.log("==============================================");
    }
}

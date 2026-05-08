// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script, console} from "forge-std/Script.sol";
import {BettingMatch} from "../src/betting/BettingMatch.sol";

/**
 * @title  ResolveMatch
 * @notice Mass-resolve a match's markets when the game is over. Two batched
 *         on-chain calls under one broadcast:
 *           1. closeMarketsBatch  (idempotent — skips already-Closed)
 *           2. resolveMarketsBatch (paired marketIds + winning selections)
 *
 * Env:
 *   MATCH_ADDRESS  required  match proxy
 *   MARKET_IDS     required  comma-separated uint256 (e.g. "0,1,2")
 *   RESULTS        required  comma-separated uint64  (winning selection per market)
 *
 * Usage:
 *   source .env.chilizTestnet
 *   MATCH_ADDRESS=0x... \
 *   MARKET_IDS=0,1,2 \
 *   RESULTS=0,1,1 \
 *   forge script script/ResolveMatch.s.sol \
 *     --rpc-url $RPC_URL --broadcast $FORGE_FLAGS \
 *     --private-key $PRIVATE_KEY -vvvv
 *
 * The signing key MUST hold both ADMIN_ROLE (for closeMarketsBatch) AND
 * RESOLVER_ROLE (for resolveMarketsBatch). On a fresh testnet deploy where
 * ORACLE_ADDRESS was not set, the deployer holds both. In production with
 * a separate oracle key, run this script in two steps:
 *   - close pass under the admin key (comment out the resolve line below), then
 *   - resolve pass under the oracle key (comment out the close line).
 */
contract ResolveMatch is Script {

    function run() external {
        address matchAddr = vm.envAddress("MATCH_ADDRESS");
        uint256[] memory ids = vm.envUint("MARKET_IDS", ",");
        uint256[] memory rawResults = vm.envUint("RESULTS", ",");

        require(ids.length > 0, "MARKET_IDS empty");
        require(ids.length == rawResults.length, "MARKET_IDS / RESULTS length mismatch");

        uint64[] memory results = new uint64[](rawResults.length);
        for (uint256 i; i < rawResults.length; ++i) {
            require(rawResults[i] <= type(uint64).max, "result overflow");
            results[i] = uint64(rawResults[i]);
        }

        BettingMatch m = BettingMatch(payable(matchAddr));

        _printHeader(matchAddr, ids, results);

        vm.startBroadcast();

        m.closeMarketsBatch(ids);
        console.log("closeMarketsBatch: ok");

        m.resolveMarketsBatch(ids, results);
        console.log("resolveMarketsBatch: ok");

        vm.stopBroadcast();

        _printSummary(matchAddr, ids, results);
    }

    function _printHeader(address matchAddr, uint256[] memory ids, uint64[] memory results) internal view {
        console.log("=============================================");
        console.log("CHILIZ-TV MASS RESOLVE");
        console.log("=============================================");
        console.log("Match:  ", matchAddr);
        console.log("Markets:", ids.length);
        for (uint256 i; i < ids.length; ++i) {
            console.log("  marketId =", ids[i], "result =", uint256(results[i]));
        }
        console.log("");
    }

    function _printSummary(address matchAddr, uint256[] memory ids, uint64[] memory results) internal view {
        console.log("");
        console.log("=============================================");
        console.log("DONE");
        console.log("=============================================");
        console.log("Match:           ", matchAddr);
        console.log("Markets resolved:", ids.length);
        for (uint256 i; i < ids.length; ++i) {
            console.log("  marketId =", ids[i], "winner selection =", uint256(results[i]));
        }
        console.log("");
        console.log("Winners can claim:");
        console.log("  cast send <MATCH> 'claimAll(uint256)' <marketId> \\");
        console.log("    --rpc-url $RPC_URL --legacy --with-gas-price 3500000000001 \\");
        console.log("    --private-key $WINNER_PK");
    }
}

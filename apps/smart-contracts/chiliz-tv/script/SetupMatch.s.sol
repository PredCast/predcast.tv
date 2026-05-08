// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script, console} from "forge-std/Script.sol";
import {BettingMatchFactory} from "../src/betting/BettingMatchFactory.sol";
import {BettingMatch} from "../src/betting/BettingMatch.sol";
import {FootballMatch} from "../src/betting/FootballMatch.sol";
import {BasketballMatch} from "../src/betting/BasketballMatch.sol";

/**
 * @title  SetupMatch
 * @notice Sport-aware match bootstrap. In one broadcast:
 *           1. factory.createFootballMatch / createBasketballMatch
 *           2. addMarketsBatch  (single tx — N markets)
 *           3. openMarketsBatch (single tx — N markets)
 *
 *         Default market sets are hard-coded per sport below — edit the
 *         `_setupFootballMarkets` / `_setupBasketballMarkets` arrays to
 *         suit. Odds are x10000 precision (22000 = 2.20x).
 *
 * Env:
 *   FACTORY_ADDRESS  required  BettingMatchFactory address
 *   SPORT            required  "FOOTBALL" or "BASKETBALL"
 *   MATCH_NAME       required  display name
 *   ORACLE_ADDRESS   optional  RESOLVER_ROLE holder (default: deployer)
 *   MATCH_OWNER      optional  match admin / Ownable owner (default: deployer)
 *
 * Usage:
 *   source .env.chilizTestnet
 *   FACTORY_ADDRESS=0x... \
 *   SPORT=FOOTBALL \
 *   MATCH_NAME="PSG vs Marseille - Ligue 1" \
 *   forge script script/SetupMatch.s.sol \
 *     --rpc-url $RPC_URL --broadcast $FORGE_FLAGS \
 *     --private-key $PRIVATE_KEY -vvvv
 *
 * Caller must be the factory owner (it gates createFootballMatch /
 * createBasketballMatch). After this script finishes, MATCH_OWNER holds
 * ADMIN_ROLE on the match (so MATCH_OWNER must equal the script signer
 * or the operator who later updates odds / closes / cancels).
 */
contract SetupMatch is Script {

    // Football market type ids (mirror FootballMatch.sol).
    bytes32 internal constant FOOTBALL_WINNER       = keccak256("WINNER");
    bytes32 internal constant FOOTBALL_GOALS_TOTAL  = keccak256("GOALS_TOTAL");
    bytes32 internal constant FOOTBALL_BOTH_SCORE   = keccak256("BOTH_SCORE");

    // Basketball market type ids (mirror BasketballMatch.sol).
    bytes32 internal constant BASKETBALL_WINNER       = keccak256("WINNER");
    bytes32 internal constant BASKETBALL_TOTAL_POINTS = keccak256("TOTAL_POINTS");
    bytes32 internal constant BASKETBALL_SPREAD       = keccak256("SPREAD");

    function run() external {
        address deployer = msg.sender;

        BettingMatchFactory factory = BettingMatchFactory(vm.envAddress("FACTORY_ADDRESS"));
        string memory sport     = vm.envString("SPORT");
        string memory matchName = vm.envString("MATCH_NAME");

        address oracle;
        try vm.envAddress("ORACLE_ADDRESS") returns (address o) { oracle = o; }
        catch { oracle = deployer; }

        address owner;
        try vm.envAddress("MATCH_OWNER") returns (address o) { owner = o; }
        catch { owner = deployer; }

        bool isFootball   = _eq(sport, "FOOTBALL");
        bool isBasketball = _eq(sport, "BASKETBALL");
        require(isFootball || isBasketball, "SPORT must be FOOTBALL or BASKETBALL");

        vm.startBroadcast();

        _printHeader(address(factory), deployer, matchName, sport, owner, oracle);

        address matchAddr = isFootball
            ? factory.createFootballMatch(matchName, owner, oracle)
            : factory.createBasketballMatch(matchName, owner, oracle);

        console.log("Match deployed at:", matchAddr);
        console.log("");

        if (isFootball) {
            _setupFootballMarkets(FootballMatch(payable(matchAddr)));
        } else {
            _setupBasketballMarkets(BasketballMatch(payable(matchAddr)));
        }

        vm.stopBroadcast();

        _printSummary(matchAddr, isFootball);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Default market sets — edit these to taste.
    // ─────────────────────────────────────────────────────────────────────

    function _setupFootballMarkets(FootballMatch m) internal {
        bytes32[] memory types = new bytes32[](3);
        uint32[]  memory odds  = new uint32[](3);
        int16[]   memory lines = new int16[](3);

        // 1X2 — initial 2.20x (Home).
        types[0] = FOOTBALL_WINNER;       odds[0] = 22000; lines[0] = 0;
        // Goals O/U 2.5 — 1.85x (Over). line=25 → 2.5 goals.
        types[1] = FOOTBALL_GOALS_TOTAL;  odds[1] = 18500; lines[1] = 25;
        // BTTS — 1.70x (Yes).
        types[2] = FOOTBALL_BOTH_SCORE;   odds[2] = 17000; lines[2] = 0;

        m.addMarketsBatch(types, odds, lines);
        console.log("addMarketsBatch: 3 football markets created");

        uint256[] memory ids = new uint256[](3);
        ids[0] = 0; ids[1] = 1; ids[2] = 2;
        m.openMarketsBatch(ids);
        console.log("openMarketsBatch: markets 0,1,2 OPEN");
    }

    function _setupBasketballMarkets(BasketballMatch m) internal {
        bytes32[] memory types = new bytes32[](3);
        uint32[]  memory odds  = new uint32[](3);
        int16[]   memory lines = new int16[](3);

        // ML Home/Away — 1.90x.
        types[0] = BASKETBALL_WINNER;       odds[0] = 19000; lines[0] = 0;
        // Total O/U 215.5 — 1.90x. line=2155 → 215.5 points.
        types[1] = BASKETBALL_TOTAL_POINTS; odds[1] = 19000; lines[1] = 2155;
        // Spread -5.0 home covers — 1.90x. line=50 → 5.0 points.
        types[2] = BASKETBALL_SPREAD;       odds[2] = 19000; lines[2] = 50;

        m.addMarketsBatch(types, odds, lines);
        console.log("addMarketsBatch: 3 basketball markets created");

        uint256[] memory ids = new uint256[](3);
        ids[0] = 0; ids[1] = 1; ids[2] = 2;
        m.openMarketsBatch(ids);
        console.log("openMarketsBatch: markets 0,1,2 OPEN");
    }

    // ─────────────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────────────

    function _eq(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }

    function _printHeader(
        address factory,
        address deployer,
        string memory name,
        string memory sport,
        address owner,
        address oracle
    ) internal pure {
        console.log("=============================================");
        console.log("CHILIZ-TV MATCH SETUP");
        console.log("=============================================");
        console.log("Factory: ", factory);
        console.log("Deployer:", deployer);
        console.log("Sport:   ", sport);
        console.log("Match:   ", name);
        console.log("Owner:   ", owner);
        console.log("Oracle:  ", oracle);
        console.log("");
    }

    function _printSummary(address matchAddr, bool isFootball) internal pure {
        console.log("");
        console.log("=============================================");
        console.log("DONE");
        console.log("=============================================");
        console.log("Match address:", matchAddr);
        if (isFootball) {
            console.log("Markets: 0=WINNER  1=GOALS_TOTAL(O/U2.5)  2=BOTH_SCORE");
            console.log("Selections:");
            console.log("  WINNER: 0=Home 1=Draw 2=Away");
            console.log("  GOALS_TOTAL: 0=Under 1=Over");
            console.log("  BOTH_SCORE: 0=No 1=Yes");
        } else {
            console.log("Markets: 0=WINNER  1=TOTAL_POINTS(O/U215.5)  2=SPREAD");
            console.log("Selections:");
            console.log("  WINNER: 0=Home 1=Away");
            console.log("  TOTAL_POINTS: 0=Under 1=Over");
            console.log("  SPREAD: 0=Home covers 1=Away covers");
        }
        console.log("");
        console.log("Resolve when match ends:");
        console.log("  MATCH_ADDRESS=<above> MARKET_IDS=0,1,2 RESULTS=<r0>,<r1>,<r2> \\");
        console.log("    forge script script/ResolveMatch.s.sol \\");
        console.log("      --rpc-url $RPC_URL --broadcast $FORGE_FLAGS --private-key $PRIVATE_KEY");
    }
}

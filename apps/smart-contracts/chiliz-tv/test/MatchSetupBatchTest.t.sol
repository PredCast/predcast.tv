// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test, console} from "forge-std/Test.sol";

import {PariMatchBase}       from "../src/pari/PariMatchBase.sol";
import {FootballPariMatch}   from "../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../src/pari/BasketballPariMatch.sol";
import {PariMatchFactory}    from "../src/pari/PariMatchFactory.sol";
import {MockUSDC}            from "./mocks/MockUSDC.sol";
import {PariFactoryDeployer} from "./helpers/PariFactoryDeployer.sol";

/**
 * @title Match setup in one transaction
 * @notice `create*MatchWithMarkets` creates the match, its markets, their
 *         cutoff and opens them in one call, with the same roles as the
 *         four-step flow.
 */
contract MatchSetupBatchTest is Test {
    bytes32 constant WINNER         = keccak256("WINNER");
    bytes32 constant GOALS_TOTAL    = keccak256("GOALS_TOTAL");
    bytes32 constant BOTH_SCORE     = keccak256("BOTH_SCORE");
    bytes32 constant QUARTER_WINNER = keccak256("QUARTER_WINNER");

    address owner      = makeAddr("matchOwner");
    address oracle     = makeAddr("oracle");
    address feeAddr    = makeAddr("feeRecipient");
    address swapRouter = makeAddr("swapRouter");
    address operator   = makeAddr("operator");
    address alice      = makeAddr("alice");

    MockUSDC usdc;
    PariMatchFactory factory;

    function setUp() public {
        usdc = new MockUSDC();
        factory = PariFactoryDeployer.deploy();
        factory.setWiring(address(usdc), feeAddr, swapRouter);
        factory.setMatchOperator(operator);
    }

    function _footballSetup(uint40 closesAt, bool open) internal pure returns (PariMatchFactory.MarketSetup memory s) {
        s.marketTypes = new bytes32[](3);
        s.lines = new int16[](3);
        s.extras = new uint8[](3);
        s.groupIds = new uint16[](3);
        s.marketTypes[0] = WINNER;
        s.marketTypes[1] = GOALS_TOTAL;
        s.lines[1] = 25;
        s.marketTypes[2] = BOTH_SCORE;
        s.groupIds[2] = 7;
        s.closesAt = closesAt;
        s.open = open;
    }

    function test_CreatesAFootballMatchWithOpenMarkets() public {
        uint40 kickoff = uint40(block.timestamp + 1 days);
        vm.prank(operator);
        PariMatchBase m = PariMatchBase(payable(
            factory.createFootballMatchWithMarkets("PSG vs OM", owner, oracle, _footballSetup(kickoff, true))
        ));

        assertTrue(factory.isMatch(address(m)));
        assertEq(m.marketCount(), 3);
        for (uint256 id; id < 3; ++id) {
            assertEq(uint8(m.getMarketCore(id).state), uint8(PariMatchBase.MarketState.Open));
            assertEq(m.getMarketSpec(id).closesAt, kickoff);
            (,, bool frozen) = m.getMarketFees(id);
            assertTrue(frozen, "fees frozen at opening");
        }
        assertEq(m.getMarketSpec(1).line, 25);
        assertEq(m.getMarketSpec(2).groupId, 7);
        _assertRoles(m);

        // Ready for bets right away (swapRouter plays NetworkRouter).
        usdc.mint(address(m), 10e6);
        vm.prank(swapRouter);
        m.placeBetUSDCFor(alice, 1, 1, 10e6);
        assertEq(m.getTotalPool(1), 10e6);
    }

    function test_CreatesABasketballMatchWithAQuarterMarket() public {
        PariMatchFactory.MarketSetup memory s;
        s.marketTypes = new bytes32[](2);
        s.lines = new int16[](2);
        s.extras = new uint8[](2);
        s.groupIds = new uint16[](2);
        s.marketTypes[0] = WINNER;
        s.marketTypes[1] = QUARTER_WINNER;
        s.extras[1] = 2;
        s.open = true;

        PariMatchBase m = PariMatchBase(payable(
            factory.createBasketballMatchWithMarkets("Lakers vs Celtics", owner, oracle, s)
        ));
        assertEq(uint8(factory.getSportType(address(m))), uint8(PariMatchFactory.SportType.BASKETBALL));
        assertEq(m.getMarketSpec(1).extra, 2, "quarter 2");
        assertEq(m.getMarketSpec(1).closesAt, 0, "no cutoff asked");
        assertEq(uint8(m.getMarketCore(1).state), uint8(PariMatchBase.MarketState.Open));
        _assertRoles(m);
    }

    function test_MarketsStayInactiveWhenNotOpened() public {
        PariMatchBase m = PariMatchBase(payable(
            factory.createFootballMatchWithMarkets("A vs B", owner, oracle, _footballSetup(0, false))
        ));
        for (uint256 id; id < 3; ++id) {
            assertEq(uint8(m.getMarketCore(id).state), uint8(PariMatchBase.MarketState.Inactive));
            assertEq(m.getMarketSpec(id).closesAt, 0);
        }
        // The owner takes over as in the four-step flow.
        vm.prank(owner);
        m.openMarket(0);
        _assertRoles(m);
    }

    function test_AnEmptySetupIsAPlainMatch() public {
        PariMatchFactory.MarketSetup memory s;
        PariMatchBase m = PariMatchBase(payable(factory.createFootballMatchWithMarkets("A vs B", owner, oracle, s)));
        assertEq(m.marketCount(), 0);
        _assertRoles(m);
    }

    function test_RevertsOnMismatchedArrays() public {
        PariMatchFactory.MarketSetup memory s = _footballSetup(0, true);
        s.extras = new uint8[](2);
        vm.expectRevert(PariMatchBase.ArrayLengthMismatch.selector);
        factory.createFootballMatchWithMarkets("A vs B", owner, oracle, s);
    }

    function test_RevertsOnACutoffInThePast() public {
        vm.warp(1_000_000);
        PariMatchFactory.MarketSetup memory s = _footballSetup(uint40(block.timestamp), true);
        vm.expectRevert();
        factory.createFootballMatchWithMarkets("A vs B", owner, oracle, s);
    }

    function test_OnlyTheOwnerOrTheOperator() public {
        vm.prank(alice);
        vm.expectRevert(abi.encodeWithSelector(PariMatchFactory.NotOwnerOrOperator.selector, alice));
        factory.createFootballMatchWithMarkets("A vs B", owner, oracle, _footballSetup(0, true));
    }

    function test_TheOracleMustStillBeDistinct() public {
        vm.prank(operator);
        vm.expectRevert(abi.encodeWithSelector(PariMatchFactory.OracleMustBeDistinct.selector, owner));
        factory.createFootballMatchWithMarkets("A vs B", owner, owner, _footballSetup(0, true));
    }

    /// Execution gas only: a real four-transaction flow also pays 21,000 gas
    /// per extra transaction, its calldata and cold storage access each time.
    function test_GasAgainstTheFourStepFlow() public {
        uint40 kickoff = uint40(block.timestamp + 1 days);
        uint256 oneCall = _gasOneCall(kickoff);
        uint256 fourCalls = _gasFourCalls(kickoff);
        console.log("one call, execution gas  :", oneCall);
        console.log("four calls, execution gas:", fourCalls);
        console.log("four calls, + 3 x 21000  :", fourCalls + 3 * 21_000);
        assertLt(oneCall, fourCalls + 3 * 21_000, "one transaction is cheaper");
    }

    function _gasOneCall(uint40 kickoff) internal returns (uint256 used) {
        PariMatchFactory.MarketSetup memory s = _footballSetup(kickoff, true);
        uint256 g = gasleft();
        vm.prank(operator);
        factory.createFootballMatchWithMarkets("One call", owner, oracle, s);
        used = g - gasleft();
    }

    function _gasFourCalls(uint40 kickoff) internal returns (uint256 used) {
        PariMatchFactory.MarketSetup memory s = _footballSetup(kickoff, true);
        uint256[] memory ids = new uint256[](3);
        ids[1] = 1;
        ids[2] = 2;
        uint256 g = gasleft();
        vm.prank(operator);
        PariMatchBase m = PariMatchBase(payable(factory.createFootballMatch("Four calls", owner, oracle)));
        vm.startPrank(owner);
        m.addMarketsBatchAdvanced(s.marketTypes, s.lines, s.extras, s.groupIds);
        m.setMarketsCloseTime(ids, kickoff);
        m.openMarketsBatch(ids);
        vm.stopPrank();
        used = g - gasleft();
    }

    function _assertRoles(PariMatchBase m) internal view {
        assertTrue(m.hasRole(m.ADMIN_ROLE(), owner));
        assertTrue(m.hasRole(m.PAUSER_ROLE(), owner));
        assertTrue(m.hasRole(m.RESOLVER_ROLE(), oracle));
        assertTrue(m.hasRole(m.SWAP_ROUTER_ROLE(), swapRouter));
        assertTrue(m.hasRole(m.DEFAULT_ADMIN_ROLE(), factory.upgradeAdmin()));
        assertFalse(m.hasRole(m.ADMIN_ROLE(), address(factory)), "factory keeps no ADMIN_ROLE");
        assertFalse(m.hasRole(m.PAUSER_ROLE(), address(factory)), "factory keeps no PAUSER_ROLE");
        assertFalse(m.hasRole(m.DEFAULT_ADMIN_ROLE(), address(factory)), "factory keeps no DEFAULT_ADMIN_ROLE");
    }
}

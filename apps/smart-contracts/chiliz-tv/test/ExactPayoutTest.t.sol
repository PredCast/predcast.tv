// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}         from "forge-std/Test.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import {PariMatchBase}      from "../src/pari/PariMatchBase.sol";
import {FootballPariMatch}  from "../src/pari/FootballPariMatch.sol";
import {PariMatchFactory}   from "../src/pari/PariMatchFactory.sol";
import {LeaderboardRewards} from "../src/leaderboard/LeaderboardRewards.sol";
import {MockUSDC}           from "./mocks/MockUSDC.sol";
import {PariFactoryDeployer} from "./helpers/PariFactoryDeployer.sol";

/**
 * @title Exact payouts and the default fee split
 * @notice Winners and leaderboard prizes are rounded on the running total of
 *         what was already claimed, so the last claim empties the pool: no
 *         rounding dust stays in the contracts. Each payout is the exact
 *         share rounded down or up by at most one USDC unit (1e-6 USDC).
 *         The default fee is 2%: 1.5% to the company, 0.5% to the leaderboard.
 */
contract ExactPayoutTest is Test {
    bytes32 internal constant WINNER = keccak256("WINNER");
    uint256 internal constant MIN_STAKE = 10_000; // 0.01 USDC
    uint64  internal constant EPOCH = 30 days;
    uint64  internal constant GRACE = 3 days;

    address internal owner        = makeAddr("owner");
    address internal oracle       = makeAddr("oracle");
    address internal feeRecipient = makeAddr("feeRecipient");
    address internal router       = makeAddr("router");
    address internal loser        = makeAddr("loser");

    MockUSDC           internal usdc;
    PariMatchFactory   internal factory;
    LeaderboardRewards internal lb;
    FootballPariMatch  internal m;
    uint256            internal t0;

    function setUp() public {
        usdc = new MockUSDC();
        lb = LeaderboardRewards(address(new ERC1967Proxy(
            address(new LeaderboardRewards()),
            abi.encodeCall(LeaderboardRewards.initialize, (address(usdc), address(this), address(0)))
        )));
        lb.initializeV2();
        t0 = block.timestamp;

        factory = PariFactoryDeployer.deploy();
        factory.setWiring(address(usdc), feeRecipient, router);
        factory.setLeaderboardWiring(address(lb), factory.DEFAULT_LEADERBOARD_FEE_BPS());
        lb.setMatchFactory(address(factory));

        m = FootballPariMatch(payable(factory.createFootballMatch("Exact FC vs Rounding United", owner, oracle)));
        vm.startPrank(owner);
        m.addMarketWithLine(WINNER, 0);
        m.openMarket(0);
        vm.stopPrank();
    }

    // ─── helpers ────────────────────────────────────────────────────────────

    function _bet(address user, uint64 outcome, uint256 amount) internal {
        usdc.mint(address(m), amount); // the router sends the USDC first
        vm.prank(router);
        m.placeBetUSDCFor(user, 0, outcome, amount);
    }

    function _closeAndResolve(uint64 result) internal {
        vm.prank(owner);
        m.closeMarket(0);
        vm.prank(oracle);
        m.resolveMarket(0, result);
    }

    function _claim(address user) internal returns (uint256 got) {
        uint256 before = usdc.balanceOf(user);
        vm.prank(user);
        m.claim(0);
        got = usdc.balanceOf(user) - before;
    }

    function _winner(uint256 i) internal returns (address) {
        return makeAddr(string.concat("winner", vm.toString(i)));
    }

    // ─── fee split ──────────────────────────────────────────────────────────

    function test_DefaultFee_OneAndAHalfToCompany_HalfToLeaderboard() public view {
        assertEq(factory.DEFAULT_LEADERBOARD_FEE_BPS(), 50);
        assertEq(factory.leaderboardFeeBps(), 50);
        assertEq(m.feeBps(), 200);
        assertEq(m.leaderboardFeeBps(), 50);
        (uint16 total, uint16 lbShare, bool frozen) = m.getMarketFees(0);
        assertEq(total, 200);
        assertEq(lbShare, 50);
        assertTrue(frozen);
    }

    function test_FeeSplit_OnResolution() public {
        _bet(_winner(0), 0, 600e6);
        _bet(loser, 2, 400e6);
        _closeAndResolve(0);

        assertEq(usdc.balanceOf(feeRecipient), 15e6, "1.5% of the 1,000 USDC pool");
        assertEq(usdc.balanceOf(address(lb)), 5e6, "0.5% of the pool");
        assertEq(lb.epochFees(0), 5e6, "fee notified to the leaderboard");
        assertEq(m.getMarketCore(0).resolvedNetPool, 980e6);
        assertEq(_claim(_winner(0)), 980e6);
        assertEq(usdc.balanceOf(address(m)), 0);
    }

    // ─── winners: the last claim empties the pool ───────────────────────────

    /// Stakes of 1, 2 and 4 USDC: none of the three shares is a whole number
    /// of units. Flooring each share would leave 2 units in the match.
    function test_ThreeWinners_LastClaimEmptiesThePool() public {
        uint256[3] memory stakes = [uint256(1e6), 2e6, 4e6];
        for (uint256 i; i < 3; ++i) _bet(_winner(i), 0, stakes[i]);
        _bet(loser, 1, 3_333_333);
        _closeAndResolve(0);

        uint256 net = m.getMarketCore(0).resolvedNetPool;
        assertEq(net, 10_333_333 - 154_999 - 51_666, "1.5% and 0.5% fees, each floored");

        uint256 flooredSum;
        for (uint256 i; i < 3; ++i) flooredSum += (stakes[i] * net) / 7e6;
        assertEq(net - flooredSum, 2, "per-claim flooring would have left 2 units");

        uint256 paid;
        for (uint256 i; i < 3; ++i) {
            uint256 got = _claim(_winner(i));
            uint256 low = (stakes[i] * net) / 7e6;
            assertTrue(got == low || got == low + 1, "exact share rounded down or up");
            paid += got;
        }
        assertEq(paid, net, "winners share the whole net pool");
        assertEq(usdc.balanceOf(address(m)), 0, "nothing left in the match");
    }

    /// Any stakes, any number of winners from 1 to 6, any claim order.
    function testFuzz_PayoutsAddUpToTheNetPool(uint256[6] memory stakes, uint256 n, uint256 lost, uint256 orderSeed)
        public
    {
        n = bound(n, 1, 6);
        uint256 winningPool;
        for (uint256 i; i < n; ++i) {
            stakes[i] = bound(stakes[i], MIN_STAKE, 1e13);
            _bet(_winner(i), 0, stakes[i]);
            winningPool += stakes[i];
        }
        lost = bound(lost, 0, 1e13);
        if (lost != 0 && lost < MIN_STAKE) lost = MIN_STAKE;
        if (lost != 0) _bet(loser, 2, lost);
        _closeAndResolve(0);
        uint256 net = m.getMarketCore(0).resolvedNetPool;

        // Claim in a shuffled order.
        uint256[6] memory order = [uint256(0), 1, 2, 3, 4, 5];
        for (uint256 i = n; i > 1; --i) {
            uint256 j = uint256(keccak256(abi.encode(orderSeed, i))) % i;
            (order[i - 1], order[j]) = (order[j], order[i - 1]);
        }
        uint256 paid;
        for (uint256 k; k < n; ++k) {
            uint256 i = order[k];
            uint256 got = _claim(_winner(i));
            uint256 scaled = stakes[i] * net;
            assertGe(got, scaled / winningPool, "never below the floor of the share");
            assertLe(got, (scaled + winningPool - 1) / winningPool, "never above its ceiling");
            paid += got;
        }
        assertEq(paid, net, "payouts add up to the net pool");
        assertEq(usdc.balanceOf(address(m)), 0, "no rounding dust");
    }

    // ─── leaderboard: the last claim empties the epoch ──────────────────────

    function _closeEpoch0(address[] memory users, uint256[] memory scores, uint256 pool) internal {
        for (uint256 i; i < users.length; ++i) {
            vm.prank(address(m));
            lb.recordProfit(users[i], scores[i], block.timestamp);
        }
        usdc.mint(address(lb), pool);
        vm.prank(address(m));
        lb.notifyFee(pool);
        vm.warp(t0 + EPOCH + GRACE);
        lb.advanceEpoch();
        assertEq(lb.epoch(0).prizePool, pool);
    }

    /// Three equal scores for 100 units: 33.33 each. Flooring would pay 99.
    function test_Leaderboard_EqualThirds_PoolFullyPaid() public {
        address[] memory users = new address[](3);
        uint256[] memory scores = new uint256[](3);
        for (uint256 i; i < 3; ++i) (users[i], scores[i]) = (_winner(i), 7e6);
        _closeEpoch0(users, scores, 100);

        uint256 paid;
        for (uint256 i; i < 3; ++i) {
            vm.prank(users[i]);
            uint256 got = lb.claim(0);
            assertTrue(got == 33 || got == 34, "a third, rounded down or up");
            paid += got;
        }
        assertEq(paid, 100, "the whole pool is paid");
        assertEq(lb.epoch(0).totalClaimed, 100);
        assertEq(lb.epochClaimedScore(0), 21e6);
        assertEq(lb.lockedInClosedEpochs(), 0);
        assertEq(usdc.balanceOf(address(lb)), 0, "no rounding dust");
    }

    function testFuzz_Leaderboard_PrizesAddUpToThePool(uint256[5] memory raw, uint256 n, uint256 pool) public {
        n = bound(n, 1, 5);
        pool = bound(pool, 1e6, 1e13);
        address[] memory users = new address[](n);
        uint256[] memory scores = new uint256[](n);
        uint256 total;
        for (uint256 i; i < n; ++i) {
            users[i] = _winner(i);
            // Scores comparable to the pool, so no share rounds to zero.
            scores[i] = bound(raw[i], pool, pool * 50);
            total += scores[i];
        }
        _closeEpoch0(users, scores, pool);

        uint256 paid;
        for (uint256 i; i < n; ++i) {
            uint256 pending = lb.pendingClaim(0, users[i]);
            vm.prank(users[i]);
            uint256 got = lb.claim(0);
            assertEq(got, pending, "pendingClaim previews the claim");
            uint256 scaled = scores[i] * pool;
            assertGe(got, scaled / total);
            assertLe(got, (scaled + total - 1) / total);
            paid += got;
        }
        assertEq(paid, pool, "prizes add up to the pool");
        assertEq(lb.lockedInClosedEpochs(), 0);
        assertEq(usdc.balanceOf(address(lb)), 0, "no rounding dust");
    }
}

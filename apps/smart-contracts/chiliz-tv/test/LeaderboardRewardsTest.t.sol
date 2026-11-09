// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}            from "forge-std/Test.sol";
import {ERC1967Proxy}    from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {IAccessControl} from "@openzeppelin/contracts/access/IAccessControl.sol";

import {LeaderboardRewards} from "../src/leaderboard/LeaderboardRewards.sol";
import {MockUSDC}           from "./mocks/MockUSDC.sol";

/**
 * @title LeaderboardRewardsTest
 * @notice V3 coverage (audit 2026-10 lot 3: M-03, M-05, L-03):
 *           1.  Initialization; initializeV2 admin-only and single-use (L-03)
 *           2.  Match authorization on notifyFee / recordProfit / recordWin
 *           3.  Profit credited to the epoch of the resolution (M-05)
 *           4.  Fees attributed to the epoch of the resolution (M-03)
 *           5.  Close after boundary + SCORING_GRACE; claim window from the
 *               actual close (M-03); empty epochs keep their pool open
 *           6.  Pro-rata claim, claim rejections, rollover
 *           7.  Pause no longer drops credits (L-03), still blocks payouts
 *           8.  Admin setters
 *           9.  Storage sanity (V1 `_score` slot stays cold)
 */
contract LeaderboardRewardsTest is Test {

    address public admin    = makeAddr("admin");
    address public alice    = makeAddr("alice");
    address public bob      = makeAddr("bob");
    address public carol    = makeAddr("carol");
    address public stranger = makeAddr("stranger");

    MockUSDC public usdc;
    LeaderboardRewards public lb;
    MockMatchFactory public mockFactory;
    address public matchA;
    address public matchB;

    bytes32 constant ADMIN_ROLE    = keccak256("ADMIN_ROLE");
    bytes32 constant ORACLE_ROLE   = keccak256("ORACLE_ROLE");
    bytes32 constant PAUSER_ROLE   = keccak256("PAUSER_ROLE");
    bytes32 constant DEFAULT_ADMIN = 0x00;

    uint64 constant D     = 30 days;
    uint64 constant GRACE = 3 days;
    uint256 T0;

    function setUp() public {
        usdc = new MockUSDC();
        lb = _newProxy();
        vm.prank(admin);
        lb.initializeV2();
        T0 = block.timestamp;

        mockFactory = new MockMatchFactory();
        matchA = makeAddr("matchA");
        matchB = makeAddr("matchB");
        mockFactory.setMatch(matchA, true);
        mockFactory.setMatch(matchB, true);

        vm.prank(admin);
        lb.setMatchFactory(address(mockFactory));
    }

    // ─── helpers ────────────────────────────────────────────────────────────

    function _newProxy() internal returns (LeaderboardRewards p) {
        LeaderboardRewards impl = new LeaderboardRewards();
        bytes memory init = abi.encodeWithSelector(
            LeaderboardRewards.initialize.selector, address(usdc), admin, address(0)
        );
        p = LeaderboardRewards(address(new ERC1967Proxy(address(impl), init)));
    }

    /// Simulates a match resolution: USDC sent, then notified.
    function _fee(address m, uint256 amount) internal {
        usdc.mint(address(lb), amount);
        vm.prank(m);
        lb.notifyFee(amount);
    }

    function _profit(address m, address user, uint256 profit, uint256 resolvedAt) internal {
        vm.prank(m);
        lb.recordProfit(user, profit, resolvedAt);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 1. INITIALIZATION
    // ═══════════════════════════════════════════════════════════════════════

    function test_Initialize_RolesAndClock() public view {
        assertTrue(lb.hasRole(DEFAULT_ADMIN, admin));
        assertTrue(lb.hasRole(ADMIN_ROLE,    admin));
        assertTrue(lb.hasRole(PAUSER_ROLE,   admin));
        assertEq(address(lb.usdcToken()), address(usdc));
        assertEq(lb.epochIndex(), 0);
        assertEq(uint256(lb.epochDuration()), D);
        assertEq(uint256(lb.epochStartTime()), T0);
        assertEq(lb.nextCloseTime(), T0 + D + GRACE);
    }

    function test_Revert_InitializeTwice() public {
        vm.expectRevert();
        lb.initialize(address(usdc), admin, address(0));
    }

    function test_L03_InitializeV2_AdminOnly_AndSingleUse() public {
        LeaderboardRewards fresh = _newProxy();
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(
            IAccessControl.AccessControlUnauthorizedAccount.selector, stranger, DEFAULT_ADMIN
        ));
        fresh.initializeV2();

        vm.prank(admin);
        fresh.initializeV2();
        assertEq(uint256(fresh.epochDuration()), D);

        vm.prank(admin);
        vm.expectRevert();
        fresh.initializeV2();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 2. AUTHORIZATION
    // ═══════════════════════════════════════════════════════════════════════

    function test_Revert_UnauthorizedMatch() public {
        vm.startPrank(stranger);
        vm.expectRevert(abi.encodeWithSelector(LeaderboardRewards.UnauthorizedMatch.selector, stranger));
        lb.recordProfit(alice, 1e6, block.timestamp);
        vm.expectRevert(abi.encodeWithSelector(LeaderboardRewards.UnauthorizedMatch.selector, stranger));
        lb.notifyFee(1e6);
        vm.expectRevert(abi.encodeWithSelector(LeaderboardRewards.UnauthorizedMatch.selector, stranger));
        lb.recordWin(alice, 1e6);
        vm.stopPrank();
    }

    function test_Revert_MatchFactoryNotSet() public {
        LeaderboardRewards fresh = _newProxy();
        vm.prank(admin);
        fresh.initializeV2();
        vm.prank(matchA);
        vm.expectRevert(LeaderboardRewards.MatchFactoryNotSet.selector);
        fresh.recordProfit(alice, 1e6, block.timestamp);
    }

    function test_Revert_ClockNotStarted() public {
        LeaderboardRewards fresh = _newProxy();
        vm.prank(admin);
        fresh.setMatchFactory(address(mockFactory));
        vm.prank(matchA);
        vm.expectRevert(LeaderboardRewards.EpochClockNotStarted.selector);
        fresh.notifyFee(1e6);
    }

    function test_Revert_ZeroUser() public {
        vm.prank(matchA);
        vm.expectRevert(LeaderboardRewards.ZeroAddress.selector);
        lb.recordProfit(address(0), 1e6, block.timestamp);
    }

    function test_ZeroProfitAndZeroFee_NoOp() public {
        _profit(matchA, alice, 0, block.timestamp);
        _fee(matchA, 0);
        assertEq(lb.epochTotalScore(0), 0);
        assertEq(lb.epochFees(0), 0);
    }

    function test_M05_LegacyRecordWinCreditsNothing() public {
        vm.prank(matchA);
        vm.expectEmit(true, true, false, true);
        emit LeaderboardRewards.LegacyWinIgnored(matchA, alice, 100e6);
        lb.recordWin(alice, 100e6);
        assertEq(lb.epochScore(0, alice), 0);
        assertEq(lb.epochTotalScore(0), 0);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 3. PROFIT → EPOCH OF RESOLUTION  (M-05)
    // ═══════════════════════════════════════════════════════════════════════

    function test_M05_ProfitAccumulatesInResolutionEpoch() public {
        _profit(matchA, alice, 30e6, block.timestamp);
        _profit(matchB, alice, 20e6, block.timestamp);
        _profit(matchA, bob,   50e6, block.timestamp);
        assertEq(lb.epochScore(0, alice), 50e6);
        assertEq(lb.epochScore(0, bob),   50e6);
        assertEq(lb.epochTotalScore(0),  100e6);
    }

    function test_M05_LateClaimStillScoresInResolutionEpoch() public {
        uint256 resolvedAt = T0 + 10 days;            // epoch 0
        vm.warp(T0 + D + 1 days);                     // claim during epoch 1, inside the grace
        _profit(matchA, alice, 40e6, resolvedAt);
        assertEq(lb.epochScore(0, alice), 40e6, "scored where the market resolved");
        assertEq(lb.epochScore(1, alice), 0, "not moved to the quieter epoch");
    }

    function test_M05_ProfitForClosedEpochIgnored() public {
        uint256 resolvedAt = T0 + 10 days;
        vm.warp(T0 + D + GRACE);                      // epoch 0 closes on the next interaction
        vm.prank(matchA);
        vm.expectEmit(true, true, false, true);
        emit LeaderboardRewards.ProfitIgnored(matchA, alice, 40e6, resolvedAt);
        lb.recordProfit(alice, 40e6, resolvedAt);
        assertEq(lb.epochIndex(), 1);
        assertEq(lb.epochScore(0, alice), 0);
        assertEq(lb.epochTotalScore(0), 0);
    }

    function test_M05_ProfitAheadOfOpenEpoch() public {
        vm.warp(T0 + D + 1 days);                     // boundary passed, epoch 0 still open (grace)
        _profit(matchA, alice, 10e6, block.timestamp);
        assertEq(lb.epochIndex(), 0);
        assertEq(lb.epochScore(1, alice), 10e6, "credited to the epoch it resolved in");
        assertEq(lb.epochAt(block.timestamp), 1);
    }

    function test_M05_FutureResolvedAtClamped() public {
        _profit(matchA, alice, 10e6, block.timestamp + 365 days);
        assertEq(lb.epochScore(0, alice), 10e6);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 4. FEES → EPOCH OF RESOLUTION  (M-03)
    // ═══════════════════════════════════════════════════════════════════════

    function test_M03_FeesAfterBoundaryBelongToNextEpoch() public {
        _profit(matchA, alice, 10e6, block.timestamp);
        _fee(matchA, 100e6);                          // epoch 0

        vm.warp(T0 + D + 1 days);                     // inside the grace
        _profit(matchA, bob, 10e6, block.timestamp);  // epoch 1
        _fee(matchA, 40e6);                           // epoch 1 → ahead
        assertEq(lb.epochFees(0), 100e6);
        assertEq(lb.epochFees(1), 40e6);
        assertEq(lb.notifiedAhead(), 40e6);
        assertEq(lb.openPrizePool(), 100e6, "epoch-1 fee excluded from epoch 0");

        vm.warp(T0 + D + GRACE);
        lb.advanceEpoch();
        assertEq(lb.epoch(0).prizePool, 100e6, "epoch 0 snapshot = its own fees only");
        assertEq(lb.notifiedAhead(), 0);
        assertEq(lb.openPrizePool(), 40e6, "epoch-1 fee now in the open pool");
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 5. CLOSE TIMING  (M-03)
    // ═══════════════════════════════════════════════════════════════════════

    function test_Revert_AdvanceBeforeGrace() public {
        vm.warp(T0 + D + GRACE - 1);
        vm.expectRevert(abi.encodeWithSelector(
            LeaderboardRewards.AdvanceNotReady.selector, block.timestamp, T0 + D + GRACE
        ));
        lb.advanceEpoch();
    }

    function test_AdvanceIsPermissionless() public {
        _profit(matchA, alice, 10e6, block.timestamp);
        vm.warp(T0 + D + GRACE);
        vm.prank(stranger);
        assertEq(lb.advanceEpoch(), 0);
        assertEq(lb.epochIndex(), 1);
        assertEq(uint256(lb.epochStartTime()), T0 + D, "next epoch starts at the boundary");
    }

    function test_M03_LateCloseStillLeavesFullClaimWindow() public {
        _profit(matchA, alice, 20e6, block.timestamp);
        _fee(matchA, 20e6);

        // Nobody touches the leaderboard for two whole epochs.
        vm.warp(T0 + 3 * D);
        lb.advanceEpoch();
        LeaderboardRewards.Epoch memory e0 = lb.epoch(0);
        assertEq(uint256(e0.closedAt), block.timestamp);
        assertEq(uint256(e0.claimExpiry), block.timestamp + D, "window counted from the actual close");

        vm.prank(alice);
        assertEq(lb.claim(0), 20e6, "V2 would have closed it already expired");
    }

    function test_M03_EmptyEpochKeepsPoolOpen() public {
        _fee(matchA, 50e6);                           // fees but no scorer
        vm.warp(T0 + D + GRACE);
        lb.advanceEpoch();
        assertEq(lb.epoch(0).prizePool, 0);
        assertEq(lb.lockedInClosedEpochs(), 0);
        assertEq(lb.openPrizePool(), 50e6, "rolls into the next epoch at once");

        _profit(matchA, bob, 1e6, block.timestamp);   // epoch 1 scorer
        vm.warp(T0 + 2 * D + GRACE);
        lb.advanceEpoch();
        vm.prank(bob);
        assertEq(lb.claim(1), 50e6);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 6. CLAIMS & ROLLOVER
    // ═══════════════════════════════════════════════════════════════════════

    function _closedEpoch0_60_40() internal {
        _profit(matchA, alice, 60e6, block.timestamp);
        _profit(matchA, bob,   40e6, block.timestamp);
        _fee(matchA, 1_000e6);
        vm.warp(T0 + D + GRACE);
        lb.advanceEpoch();
    }

    function test_Claim_ProRata_60_40() public {
        _closedEpoch0_60_40();
        assertEq(lb.pendingClaim(0, alice), 600e6);
        vm.prank(alice);
        assertEq(lb.claim(0), 600e6);
        vm.prank(bob);
        assertEq(lb.claim(0), 400e6);
        assertEq(usdc.balanceOf(address(lb)), 0);
        assertEq(lb.lockedInClosedEpochs(), 0);
    }

    function test_Revert_Claim_EpochNotClosed() public {
        _profit(matchA, alice, 10e6, block.timestamp);
        vm.prank(alice);
        vm.expectRevert(abi.encodeWithSelector(LeaderboardRewards.EpochNotClosed.selector, 0));
        lb.claim(0);
    }

    function test_Revert_Claim_AlreadyClaimed() public {
        _closedEpoch0_60_40();
        vm.startPrank(alice);
        lb.claim(0);
        vm.expectRevert(abi.encodeWithSelector(LeaderboardRewards.AlreadyClaimed.selector, 0, alice));
        lb.claim(0);
        vm.stopPrank();
    }

    function test_Revert_Claim_NoScore() public {
        _closedEpoch0_60_40();
        vm.prank(carol);
        vm.expectRevert(abi.encodeWithSelector(LeaderboardRewards.NothingToClaim.selector, 0, carol));
        lb.claim(0);
    }

    function test_Revert_Claim_Expired() public {
        _closedEpoch0_60_40();
        uint64 expiry = lb.epoch(0).claimExpiry;
        vm.warp(uint256(expiry) + 1);
        vm.prank(alice);
        vm.expectRevert(abi.encodeWithSelector(
            LeaderboardRewards.EpochClaimWindowExpired.selector, 0, expiry, uint256(expiry) + 1
        ));
        lb.claim(0);
    }

    function test_Rollover_ReleasesUnclaimed() public {
        _closedEpoch0_60_40();
        vm.prank(alice);
        lb.claim(0);
        vm.warp(uint256(lb.epoch(0).claimExpiry) + 1);
        assertEq(lb.rolloverEpoch(0), 400e6);
        assertEq(lb.lockedInClosedEpochs(), 0);
        assertEq(lb.openPrizePool(), 400e6);
    }

    function test_Revert_RolloverBeforeExpiry() public {
        _closedEpoch0_60_40();
        vm.expectRevert();
        lb.rolloverEpoch(0);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 7. PAUSE  (L-03)
    // ═══════════════════════════════════════════════════════════════════════

    function test_L03_PauseKeepsCreditsButBlocksPayouts() public {
        vm.prank(admin);
        lb.emergencyPause();

        _profit(matchA, alice, 10e6, block.timestamp); // not lost any more
        _fee(matchA, 5e6);
        assertEq(lb.epochScore(0, alice), 10e6);
        assertEq(lb.epochFees(0), 5e6);

        vm.warp(T0 + D + GRACE);
        vm.expectRevert();
        lb.advanceEpoch();

        vm.prank(admin);
        lb.unpause();
        lb.advanceEpoch();
        vm.prank(admin);
        lb.emergencyPause();
        vm.prank(alice);
        vm.expectRevert();
        lb.claim(0);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 8. ADMIN
    // ═══════════════════════════════════════════════════════════════════════

    function test_SetEpochDuration_AdminAndBounds() public {
        vm.prank(admin);
        lb.setEpochDuration(7 days);
        assertEq(uint256(lb.epochDuration()), 7 days);

        vm.prank(stranger);
        vm.expectRevert();
        lb.setEpochDuration(7 days);

        vm.startPrank(admin);
        vm.expectRevert();
        lb.setEpochDuration(1 hours);
        vm.expectRevert();
        lb.setEpochDuration(400 days);
        vm.stopPrank();
    }

    function test_SetUSDCToken_RefusedWithBalance() public {
        _fee(matchA, 1e6);
        vm.prank(admin);
        vm.expectRevert(abi.encodeWithSelector(LeaderboardRewards.BalanceNotEmpty.selector, 1e6));
        lb.setUSDCToken(makeAddr("otherUsdc"));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 9. STORAGE SANITY
    // ═══════════════════════════════════════════════════════════════════════

    /// @dev Slot 2 holds the legacy V1 `_score` mapping. V3 must not touch it.
    function test_StorageLayout_LegacyScoreSlotUntouched() public {
        bytes32 legacyScoreSlot = keccak256(abi.encode(alice, uint256(2)));
        vm.store(address(lb), legacyScoreSlot, bytes32(uint256(0xdeadbeef)));

        _profit(matchA, alice, 100e6, block.timestamp);

        assertEq(uint256(vm.load(address(lb), legacyScoreSlot)), 0xdeadbeef);
        assertEq(lb.epochScore(0, alice), 100e6);
    }
}

contract MockMatchFactory {
    mapping(address => bool) public isMatch;
    function setMatch(address m, bool v) external { isMatch[m] = v; }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}            from "forge-std/Test.sol";
import {ERC1967Proxy}    from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import {LeaderboardRewards} from "../src/leaderboard/LeaderboardRewards.sol";
import {MockUSDC}           from "./mocks/MockUSDC.sol";

/**
 * @title LeaderboardRewardsTest
 * @notice V2 coverage:
 *           1.  Initialization (V1 then V2 reinitializer)
 *           2.  recordWin auth (factory.isMatch)
 *           3.  Per-epoch score accumulation + isolation across epochs
 *           4.  Auto-advance on the first interaction past the boundary
 *           5.  Permissionless advanceEpoch + AdvanceNotReady revert
 *           6.  Pro-rata claim payout (60/40 fixture)
 *           7.  claim rejects: not closed, expired, already claimed, no score
 *           8.  rolloverEpoch releases unclaimed remainder
 *           9.  setEpochDuration admin-only + bounded
 *          10.  Pause blocks recordWin + claim + advance
 *          11.  Storage-layout sanity (V1 _score slot 2 stays cold)
 *          12.  pendingClaim view
 */
contract LeaderboardRewardsTest is Test {

    // ═══════════════════════════════════════════════════════════════════════
    // ACTORS
    // ═══════════════════════════════════════════════════════════════════════

    address public admin    = makeAddr("admin");
    address public oracle   = makeAddr("oracle");
    address public alice    = makeAddr("alice");
    address public bob      = makeAddr("bob");
    address public carol    = makeAddr("carol");
    address public stranger = makeAddr("stranger");

    // ═══════════════════════════════════════════════════════════════════════
    // CONTRACTS
    // ═══════════════════════════════════════════════════════════════════════

    MockUSDC public usdc;
    LeaderboardRewards public lb;
    MockMatchFactory public mockFactory;
    address public matchA;
    address public matchB;

    bytes32 constant ADMIN_ROLE    = keccak256("ADMIN_ROLE");
    bytes32 constant ORACLE_ROLE   = keccak256("ORACLE_ROLE");
    bytes32 constant PAUSER_ROLE   = keccak256("PAUSER_ROLE");
    bytes32 constant DEFAULT_ADMIN = 0x00;

    uint64 constant EPOCH_DURATION = 30 days;

    function setUp() public {
        usdc = new MockUSDC();

        LeaderboardRewards impl = new LeaderboardRewards();
        bytes memory init = abi.encodeWithSelector(
            LeaderboardRewards.initialize.selector,
            address(usdc),
            admin,
            oracle
        );
        lb = LeaderboardRewards(address(new ERC1967Proxy(address(impl), init)));

        // V2 init advances the reinitializer marker to 2 and anchors the
        // epoch clock at the test's block timestamp. In production this is
        // performed atomically inside `upgradeToAndCall`.
        lb.initializeV2();

        mockFactory = new MockMatchFactory();
        matchA = makeAddr("matchA");
        matchB = makeAddr("matchB");
        mockFactory.setMatch(matchA, true);
        mockFactory.setMatch(matchB, true);

        vm.prank(admin);
        lb.setMatchFactory(address(mockFactory));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 1. INITIALIZATION
    // ═══════════════════════════════════════════════════════════════════════

    function test_Initialize_RolesGranted() public view {
        assertTrue(lb.hasRole(DEFAULT_ADMIN, admin),  "admin gets DEFAULT_ADMIN");
        assertTrue(lb.hasRole(ADMIN_ROLE,    admin),  "admin gets ADMIN_ROLE");
        assertTrue(lb.hasRole(PAUSER_ROLE,   admin),  "admin gets PAUSER_ROLE");
        assertTrue(lb.hasRole(ORACLE_ROLE,   oracle), "oracle still has ORACLE_ROLE (backwards compat)");
        assertEq(address(lb.usdcToken()), address(usdc));
        assertEq(lb.epochIndex(), 0);
        assertEq(uint256(lb.epochDuration()), EPOCH_DURATION);
        assertEq(uint256(lb.epochStartTime()), block.timestamp);
    }

    function test_Revert_InitializeTwice() public {
        vm.expectRevert();
        lb.initialize(address(usdc), admin, oracle);
    }

    function test_Revert_InitializeV2Twice() public {
        vm.expectRevert();
        lb.initializeV2();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 2. recordWin AUTH
    // ═══════════════════════════════════════════════════════════════════════

    function test_RecordWin_AuthorizedMatch() public {
        vm.prank(matchA);
        lb.recordWin(alice, 100e6);
        assertEq(lb.epochScore(0, alice), 100e6);
        assertEq(lb.epochTotalScore(0), 100e6);
    }

    function test_Revert_RecordWin_UnauthorizedMatch() public {
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(
            LeaderboardRewards.UnauthorizedMatch.selector, stranger
        ));
        lb.recordWin(alice, 100e6);
    }

    function test_Revert_RecordWin_MatchFactoryNotSet() public {
        // Deploy a fresh proxy WITHOUT calling setMatchFactory.
        LeaderboardRewards impl2 = new LeaderboardRewards();
        bytes memory init = abi.encodeWithSelector(
            LeaderboardRewards.initialize.selector, address(usdc), admin, oracle
        );
        LeaderboardRewards lb2 = LeaderboardRewards(address(new ERC1967Proxy(address(impl2), init)));
        lb2.initializeV2();

        vm.prank(matchA);
        vm.expectRevert(LeaderboardRewards.MatchFactoryNotSet.selector);
        lb2.recordWin(alice, 100e6);
    }

    function test_RecordWin_ZeroPayout_NoOp() public {
        vm.prank(matchA);
        lb.recordWin(alice, 0);
        assertEq(lb.epochScore(0, alice), 0);
        assertEq(lb.epochTotalScore(0), 0);
    }

    function test_Revert_RecordWin_ZeroUser() public {
        vm.prank(matchA);
        vm.expectRevert(LeaderboardRewards.ZeroAddress.selector);
        lb.recordWin(address(0), 100e6);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 3. PER-EPOCH SCORE ACCUMULATION
    // ═══════════════════════════════════════════════════════════════════════

    function test_RecordWin_Accumulates_SameEpoch() public {
        vm.startPrank(matchA);
        lb.recordWin(alice, 30e6);
        lb.recordWin(alice, 20e6);
        lb.recordWin(bob,   50e6);
        vm.stopPrank();

        assertEq(lb.epochScore(0, alice), 50e6);
        assertEq(lb.epochScore(0, bob),   50e6);
        assertEq(lb.epochTotalScore(0),  100e6);
    }

    function test_RecordWin_MultipleMatches() public {
        vm.prank(matchA);
        lb.recordWin(alice, 40e6);
        vm.prank(matchB);
        lb.recordWin(alice, 60e6);
        assertEq(lb.epochScore(0, alice), 100e6);
        assertEq(lb.epochTotalScore(0),   100e6);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 4. AUTO-ADVANCE
    // ═══════════════════════════════════════════════════════════════════════

    function test_AutoAdvance_OnFirstInteractionPastBoundary() public {
        // Score in epoch 0.
        vm.prank(matchA);
        lb.recordWin(alice, 100e6);
        // Fund the contract so the snapshot is non-zero.
        usdc.mint(address(lb), 1_000e6);

        // Move past the boundary.
        vm.warp(block.timestamp + EPOCH_DURATION + 1);

        // Next recordWin advances epoch 0 → 1 and credits to epoch 1.
        vm.prank(matchB);
        lb.recordWin(bob, 200e6);

        assertEq(lb.epochIndex(), 1, "should have advanced");
        // Epoch 0 frozen.
        assertEq(lb.epochScore(0, alice), 100e6);
        assertEq(lb.epochTotalScore(0),   100e6);
        // Epoch 1 contains the new score.
        assertEq(lb.epochScore(1, bob),   200e6);
        assertEq(lb.epochTotalScore(1),   200e6);

        LeaderboardRewards.Epoch memory ep0 = lb.epoch(0);
        assertTrue(ep0.closed, "epoch 0 closed");
        assertEq(uint256(ep0.prizePool), 1_000e6, "pool snapshotted");
    }

    function test_RecordWin_PreBoundary_NoAdvance() public {
        vm.prank(matchA);
        lb.recordWin(alice, 100e6);

        // Right at the boundary minus 1 second.
        vm.warp(block.timestamp + EPOCH_DURATION - 1);

        vm.prank(matchA);
        lb.recordWin(alice, 50e6);

        assertEq(lb.epochIndex(), 0, "no advance");
        assertEq(lb.epochScore(0, alice), 150e6);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 5. advanceEpoch (PERMISSIONLESS)
    // ═══════════════════════════════════════════════════════════════════════

    function test_AdvanceEpoch_Permissionless() public {
        usdc.mint(address(lb), 500e6);
        vm.prank(matchA);
        lb.recordWin(alice, 100e6);

        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        uint256 closedId = lb.advanceEpoch();
        assertEq(closedId, 0);
        assertEq(lb.epochIndex(), 1);
    }

    function test_Revert_AdvanceEpoch_NotReady() public {
        vm.prank(stranger);
        vm.expectRevert(); // AdvanceNotReady
        lb.advanceEpoch();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 6. PRO-RATA CLAIM
    // ═══════════════════════════════════════════════════════════════════════

    function test_Claim_ProRata_60_40() public {
        // Set up: alice has 60% of total, bob has 40%.
        vm.startPrank(matchA);
        lb.recordWin(alice, 60e6);
        lb.recordWin(bob,   40e6);
        vm.stopPrank();

        // Fund the pool, advance the epoch.
        usdc.mint(address(lb), 100e6);
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();

        // Alice claims first.
        vm.prank(alice);
        uint256 aliceAmount = lb.claim(0);
        assertEq(aliceAmount, 60e6, "alice gets 60% of pool");
        assertEq(usdc.balanceOf(alice), 60e6);

        // Bob claims.
        vm.prank(bob);
        uint256 bobAmount = lb.claim(0);
        assertEq(bobAmount, 40e6, "bob gets 40% of pool");
        assertEq(usdc.balanceOf(bob), 40e6);
    }

    function test_PendingClaim_ReflectsPreview() public {
        vm.prank(matchA);
        lb.recordWin(alice, 50e6);
        // Pre-close: nothing pending.
        assertEq(lb.pendingClaim(0, alice), 0);

        usdc.mint(address(lb), 100e6);
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();

        // Single scorer takes the whole pool.
        assertEq(lb.pendingClaim(0, alice), 100e6);
        assertEq(lb.pendingClaim(0, bob),     0);

        vm.prank(alice);
        lb.claim(0);
        // Post-claim preview drops to zero.
        assertEq(lb.pendingClaim(0, alice), 0);
    }

    function test_Revert_Claim_EpochNotClosed() public {
        vm.prank(matchA);
        lb.recordWin(alice, 50e6);
        usdc.mint(address(lb), 100e6);

        vm.prank(alice);
        vm.expectRevert(abi.encodeWithSelector(
            LeaderboardRewards.EpochNotClosed.selector, 0
        ));
        lb.claim(0);
    }

    function test_Revert_Claim_AlreadyClaimed() public {
        vm.prank(matchA);
        lb.recordWin(alice, 50e6);
        usdc.mint(address(lb), 100e6);
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();

        vm.prank(alice);
        lb.claim(0);

        vm.prank(alice);
        vm.expectRevert(abi.encodeWithSelector(
            LeaderboardRewards.AlreadyClaimed.selector, 0, alice
        ));
        lb.claim(0);
    }

    function test_Revert_Claim_NoScore() public {
        vm.prank(matchA);
        lb.recordWin(alice, 50e6);
        usdc.mint(address(lb), 100e6);
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();

        vm.prank(bob);
        vm.expectRevert(abi.encodeWithSelector(
            LeaderboardRewards.NothingToClaim.selector, 0, bob
        ));
        lb.claim(0);
    }

    function test_Revert_Claim_Expired() public {
        vm.prank(matchA);
        lb.recordWin(alice, 50e6);
        usdc.mint(address(lb), 100e6);
        // Advance past close.
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();
        // Past the claim window too.
        vm.warp(block.timestamp + EPOCH_DURATION + 1);

        vm.prank(alice);
        vm.expectRevert(); // EpochClaimWindowExpired
        lb.claim(0);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 7. rolloverEpoch
    // ═══════════════════════════════════════════════════════════════════════

    function test_RolloverEpoch_ReleasesUnclaimed() public {
        // Single scorer doesn't claim → entire pool rolls over.
        vm.prank(matchA);
        lb.recordWin(alice, 100e6);
        usdc.mint(address(lb), 200e6);
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();

        // Open pool now equals: balance(200) - locked(200) = 0.
        assertEq(lb.openPrizePool(), 0);

        // Wait past claim window without claiming.
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        uint256 rolled = lb.rolloverEpoch(0);
        assertEq(rolled, 200e6);
        // Open pool restored.
        assertEq(lb.openPrizePool(), 200e6);
    }

    function test_RolloverEpoch_RevertsBeforeExpiry() public {
        vm.prank(matchA);
        lb.recordWin(alice, 100e6);
        usdc.mint(address(lb), 200e6);
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();

        // Claim window still open.
        vm.prank(stranger);
        vm.expectRevert(); // EpochClaimWindowNotExpired
        lb.rolloverEpoch(0);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 8. setEpochDuration
    // ═══════════════════════════════════════════════════════════════════════

    function test_SetEpochDuration_Admin() public {
        vm.prank(admin);
        lb.setEpochDuration(7 days);
        assertEq(uint256(lb.epochDuration()), 7 days);
    }

    function test_Revert_SetEpochDuration_NonAdmin() public {
        vm.prank(stranger);
        vm.expectRevert();
        lb.setEpochDuration(7 days);
    }

    function test_Revert_SetEpochDuration_BelowMin() public {
        vm.prank(admin);
        vm.expectRevert(); // InvalidEpochDuration
        lb.setEpochDuration(0);
    }

    function test_Revert_SetEpochDuration_AboveMax() public {
        vm.prank(admin);
        vm.expectRevert(); // InvalidEpochDuration
        lb.setEpochDuration(366 days);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 9. PAUSE
    // ═══════════════════════════════════════════════════════════════════════

    function test_Pause_BlocksRecordWin_AndAdvance() public {
        vm.prank(admin);
        lb.emergencyPause();

        vm.prank(matchA);
        vm.expectRevert();
        lb.recordWin(alice, 50e6);

        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        vm.expectRevert();
        lb.advanceEpoch();
    }

    function test_Pause_BlocksClaim() public {
        vm.prank(matchA);
        lb.recordWin(alice, 50e6);
        usdc.mint(address(lb), 100e6);
        vm.warp(block.timestamp + EPOCH_DURATION + 1);
        vm.prank(stranger);
        lb.advanceEpoch();

        vm.prank(admin);
        lb.emergencyPause();

        vm.prank(alice);
        vm.expectRevert();
        lb.claim(0);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // 10. STORAGE-LAYOUT SANITY  (V1 _score slot stays cold)
    // ═══════════════════════════════════════════════════════════════════════

    /// @dev Storage slot 2 holds the legacy `_score` mapping pointer. The V2
    ///      contract must not touch it. We write a sentinel into the slot
    ///      derived from `keccak256(abi.encode(alice, 2))` (V1 mapping layout)
    ///      and confirm that `recordWin` in V2 doesn't overwrite it — its
    ///      new state lives at the V2 mappings at slots 8 / 9.
    function test_StorageLayout_LegacyScoreSlotUntouched() public {
        bytes32 legacyScoreSlot = keccak256(abi.encode(alice, uint256(2)));
        vm.store(address(lb), legacyScoreSlot, bytes32(uint256(0xdeadbeef)));

        vm.prank(matchA);
        lb.recordWin(alice, 100e6);

        // V1 sentinel still there — V2 didn't reuse the slot.
        assertEq(uint256(vm.load(address(lb), legacyScoreSlot)), 0xdeadbeef);
        // V2 score recorded in the new mapping (slot 8).
        assertEq(lb.epochScore(0, alice), 100e6);
    }
}

contract MockMatchFactory {
    mapping(address => bool) public isMatch;
    function setMatch(address m, bool v) external { isMatch[m] = v; }
}

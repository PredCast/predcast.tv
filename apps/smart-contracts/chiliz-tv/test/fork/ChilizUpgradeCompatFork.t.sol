// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}   from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {LeaderboardRewards}  from "../../src/leaderboard/LeaderboardRewards.sol";
import {StreamWallet}        from "../../src/streamer/StreamWallet.sol";
import {StreamWalletFactory} from "../../src/streamer/StreamWalletFactory.sol";

interface ILegacyMatchFactory {
    function allMatches(uint256) external view returns (address);
    function isMatch(address) external view returns (bool);
}

/**
 * @title Chiliz mainnet upgrade compatibility (fork)
 * @notice Upgrades the proxies live on Chiliz mainnet to the code of this
 *         branch, on a fork, and checks that their storage reads back
 *         unchanged and that they keep working:
 *           - the LeaderboardRewards proxy (UUPS, live implementation V2),
 *           - the only StreamWallet of the live StreamWalletFactory (UUPS,
 *             upgraded through the factory).
 *         Addresses come from deployments/chilizMainnet.json and the
 *         factory's StreamWalletCreated events (one wallet, 2026-11-10).
 *         Needs an archive RPC in CHILIZ_RPC_URL (default https://rpc.chiliz.com).
 */
contract ChilizUpgradeCompatForkTest is Test {
    address constant LEADERBOARD    = 0x3210326343f4C682FF3D9d29727BB61785deF55b;
    address constant MATCH_FACTORY  = 0x1e7F73d14D3E87205A766A14eC5847C12FEBfFd7;
    address constant STREAM_FACTORY = 0x0Ffa30b48ADc0b2B773DC01422D249aEE135a4Bb;
    address constant WALLET         = 0x94B477536C84E32942DA6354657551b111dadD6c;
    address constant STREAMER       = 0x0a5A9A0D53De4CBd8AD8a1cC28B563C5d6aD2a9f;
    address constant ADMIN          = 0xdaE0c2e9C16E8eC5fc9CBE04808AE549bb80E387; // live owner / admin
    bytes32 constant IMPL_SLOT      = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    function setUp() public {
        vm.createSelectFork(vm.envOr("CHILIZ_RPC_URL", string("https://rpc.chiliz.com")));
        assertEq(block.chainid, 88888);
    }

    // ─── helpers ────────────────────────────────────────────────────────────

    function _slots(address target, uint256 n) internal view returns (bytes32[] memory out) {
        out = new bytes32[](n);
        for (uint256 i; i < n; ++i) out[i] = vm.load(target, bytes32(i));
    }

    /// Raw return data of each view, or empty when the call reverted.
    function _views(address target, bytes[] memory calls) internal view returns (bytes[] memory out) {
        out = new bytes[](calls.length);
        for (uint256 i; i < calls.length; ++i) {
            (bool ok, bytes memory ret) = target.staticcall(calls[i]);
            if (ok) out[i] = ret;
        }
    }

    function _assertSame(bytes32[] memory a, bytes32[] memory b, string memory what) internal pure {
        for (uint256 i; i < a.length; ++i) assertEq(a[i], b[i], string.concat(what, ": slot ", vm.toString(i)));
    }

    // ─── LeaderboardRewards ─────────────────────────────────────────────────

    function _leaderboardViews() internal view returns (bytes[] memory calls) {
        LeaderboardRewards lb = LeaderboardRewards(LEADERBOARD);
        calls = new bytes[](10);
        calls[0] = abi.encodeCall(lb.usdcToken, ());
        calls[1] = abi.encodeCall(lb.epochIndex, ());
        calls[2] = abi.encodeCall(lb.matchFactory, ());
        calls[3] = abi.encodeCall(lb.epochStartTime, ());
        calls[4] = abi.encodeCall(lb.epochDuration, ());
        calls[5] = abi.encodeCall(lb.lockedInClosedEpochs, ());
        calls[6] = abi.encodeCall(lb.epochTotalScore, (0));
        calls[7] = abi.encodeCall(lb.epoch, (0));
        calls[8] = abi.encodeCall(lb.hasRole, (bytes32(0), ADMIN));
        calls[9] = abi.encodeCall(lb.paused, ());
    }

    function test_Leaderboard_UpgradesInPlaceAndKeepsItsState() public {
        uint256 balance = _upgradeLeaderboardAndCompare();
        _leaderboardCatchesUpOverdueEpochs(balance);
        _leaderboardRunsACycle(balance);
    }

    function _upgradeLeaderboardAndCompare() internal returns (uint256 balance) {
        LeaderboardRewards lb = LeaderboardRewards(LEADERBOARD);
        bytes32[] memory slotsBefore = _slots(LEADERBOARD, 50);
        bytes[] memory calls = _leaderboardViews();
        bytes[] memory viewsBefore = _views(LEADERBOARD, calls);
        balance = IERC20(lb.usdcToken()).balanceOf(LEADERBOARD);
        assertTrue(lb.hasRole(bytes32(0), ADMIN), "ADMIN holds DEFAULT_ADMIN_ROLE");
        assertGt(lb.epochDuration(), 0, "live proxy already ran initializeV2");

        address impl = address(new LeaderboardRewards());
        vm.prank(ADMIN);
        lb.upgradeToAndCall(impl, "");
        assertEq(address(uint160(uint256(vm.load(LEADERBOARD, IMPL_SLOT)))), impl);

        _assertSame(slotsBefore, _slots(LEADERBOARD, 50), "leaderboard");
        bytes[] memory viewsAfter = _views(LEADERBOARD, calls);
        for (uint256 i; i < calls.length; ++i) {
            if (viewsBefore[i].length != 0) {
                assertEq(viewsAfter[i], viewsBefore[i], string.concat("view ", vm.toString(i), " reads the same"));
            }
        }
        // State added after the live version starts empty.
        assertEq(lb.notifiedAhead(), 0);
        assertEq(lb.claimDeadline(0), lb.epoch(0).claimExpiry);
    }

    /// The live epoch 0 is long overdue: closing catches up one epoch per call.
    function _leaderboardCatchesUpOverdueEpochs(uint256 balance) internal {
        LeaderboardRewards lb = LeaderboardRewards(LEADERBOARD);
        uint256 scored = lb.epochTotalScore(0);
        uint256 closed;
        while (block.timestamp >= lb.nextCloseTime() && closed < 24) {
            lb.advanceEpoch();
            ++closed;
        }
        assertGt(closed, 0, "the overdue epoch 0 closed");
        LeaderboardRewards.Epoch memory first = lb.epoch(0);
        assertTrue(first.closed);
        assertEq(first.prizePool, scored == 0 ? 0 : balance, "epoch 0 snapshots the balance held");
        assertEq(lb.lockedInClosedEpochs(), first.prizePool);
    }

    /// A live match credits a fee and a profit; the winner claims after a pause.
    function _leaderboardRunsACycle(uint256 balance) internal {
        LeaderboardRewards lb = LeaderboardRewards(LEADERBOARD);
        address m = ILegacyMatchFactory(MATCH_FACTORY).allMatches(0);
        assertTrue(ILegacyMatchFactory(MATCH_FACTORY).isMatch(m));
        address winner = makeAddr("winner");
        // Inside the grace period the next epoch is already the scoring one:
        // close the open epoch first, so the profit and the fee land in it.
        if (lb.epochAt(block.timestamp) != lb.epochIndex()) {
            vm.warp(lb.nextCloseTime());
            lb.advanceEpoch();
        }
        uint256 open = lb.epochIndex();
        assertEq(lb.epochAt(block.timestamp), open);
        deal(address(lb.usdcToken()), LEADERBOARD, balance + 10e6);
        vm.startPrank(m);
        lb.notifyFee(10e6);
        lb.recordProfit(winner, 3e6, block.timestamp);
        vm.stopPrank();
        assertEq(lb.epochScore(open, winner), 3e6);

        vm.warp(lb.nextCloseTime());
        lb.advanceEpoch();
        LeaderboardRewards.Epoch memory ep = lb.epoch(open);
        assertEq(ep.prizePool, 10e6, "only the new fee: epoch 0's prize stays locked");

        // A pause extends the window instead of letting the prize expire.
        vm.prank(ADMIN);
        lb.emergencyPause();
        vm.warp(uint256(ep.claimExpiry) + 2 days);
        vm.prank(ADMIN);
        lb.unpause();
        assertGt(lb.claimDeadline(open), block.timestamp);
        vm.prank(winner);
        assertEq(lb.claim(open), 10e6);
    }

    // ─── StreamWallet ───────────────────────────────────────────────────────

    function _walletViews() internal view returns (bytes[] memory calls) {
        StreamWallet w = StreamWallet(payable(WALLET));
        calls = new bytes[](9);
        calls[0] = abi.encodeCall(w.streamer, ());
        calls[1] = abi.encodeCall(w.factory, ());
        calls[2] = abi.encodeCall(w.totalRevenue, ());
        calls[3] = abi.encodeCall(w.totalWithdrawn, ());
        calls[4] = abi.encodeCall(w.totalSubscribers, ());
        calls[5] = abi.encodeCall(w.availableBalance, ());
        calls[6] = abi.encodeCall(w.usdc, ());
        calls[7] = abi.encodeCall(w.treasury, ());
        calls[8] = abi.encodeCall(w.platformFeeBps, ());
    }

    function test_StreamWallet_UpgradesThroughTheLiveFactoryAndKeepsItsState() public {
        address impl = _upgradeWalletAndCompare();
        _walletStillWorks(impl);
    }

    function _upgradeWalletAndCompare() internal returns (address impl) {
        StreamWalletFactory factory = StreamWalletFactory(STREAM_FACTORY);
        assertEq(factory.owner(), ADMIN);
        assertEq(factory.getWallet(STREAMER), WALLET);

        bytes32[] memory slotsBefore = _slots(WALLET, 20);
        bytes[] memory calls = _walletViews();
        bytes[] memory viewsBefore = _views(WALLET, calls);

        impl = address(new StreamWallet());
        vm.startPrank(ADMIN);
        factory.setImplementation(impl);
        factory.upgradeWallet(STREAMER, impl);
        vm.stopPrank();
        assertEq(address(uint160(uint256(vm.load(WALLET, IMPL_SLOT)))), impl);

        _assertSame(slotsBefore, _slots(WALLET, 20), "wallet");
        bytes[] memory viewsAfter = _views(WALLET, calls);
        for (uint256 i; i < calls.length; ++i) {
            assertGt(viewsBefore[i].length, 0, "view existed on the live code");
            assertEq(viewsAfter[i], viewsBefore[i], string.concat("view ", vm.toString(i), " reads the same"));
        }
    }

    /// Pricing, a router payment, a withdrawal and a new wallet, on the new code.
    function _walletStillWorks(address impl) internal {
        StreamWalletFactory factory = StreamWalletFactory(STREAM_FACTORY);
        StreamWallet w = StreamWallet(payable(WALLET));
        vm.prank(STREAMER);
        w.setSubscriptionPricing(1e6, 30 days);

        address router = factory.swapRouter();
        address viewer = makeAddr("viewer");
        IERC20 usdc = IERC20(factory.usdc());
        deal(address(usdc), WALLET, 0.95e6);
        vm.prank(router);
        w.recordSubscriptionByRouter(viewer, 1e6, 30 days);
        assertTrue(w.isSubscribed(viewer));
        assertEq(w.totalRevenue(), 1e6);

        uint256 before = usdc.balanceOf(STREAMER);
        vm.prank(STREAMER);
        w.withdrawRevenue(0.95e6);
        assertEq(usdc.balanceOf(STREAMER) - before, 0.95e6);

        // New wallets from the live factory get the new code too.
        address fresh = makeAddr("freshStreamer");
        vm.prank(ADMIN);
        address freshWallet = factory.deployWalletFor(fresh);
        assertEq(address(uint160(uint256(vm.load(freshWallet, IMPL_SLOT)))), impl);
        assertEq(StreamWallet(payable(freshWallet)).streamer(), fresh);
    }
}

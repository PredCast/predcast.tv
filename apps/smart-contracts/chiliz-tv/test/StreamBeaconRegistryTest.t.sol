// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {StreamWalletFactory} from "../src/streamer/StreamWalletFactory.sol";
import {StreamWallet} from "../src/streamer/StreamWallet.sol";
import {MockUSDC} from "./mocks/MockUSDC.sol";

/**
 * @title StreamWallet / StreamWalletFactory unit tests
 * @notice Covers the wallet as it stands after the 2026-10 audit:
 *         router-only payments, on-chain subscription pricing (H-03),
 *         payout address (L-06), removed fan-token paths (H-05 residual),
 *         config read live from the factory (M-04), factory-only upgrades.
 *         End-to-end flows through the real ChilizSwapRouter live in
 *         StreamSwapRouterTest / FanTokenSwapRouterTest.
 * @dev    Historical file name: the beacon design it was named after never
 *         shipped (see README).
 */
contract StreamBeaconRegistryTest is Test {
    StreamWalletFactory public factory;
    MockUSDC public usdc;

    address public admin     = address(0x1);
    address public treasury  = address(0x3);
    address public streamer1 = address(0x4);
    address public streamer2 = address(0x5);
    address public viewer1   = address(0x6);
    address public viewer2   = address(0x7);
    address public router    = makeAddr("swapRouter");
    address public kayen     = makeAddr("kayenRouter");

    uint16 public constant PLATFORM_FEE_BPS = 500; // 5%
    uint256 public constant PRICE  = 10e6;         // 10 USDC
    uint64  public constant PERIOD = 30 days;

    function setUp() public {
        usdc = new MockUSDC();
        vm.startPrank(admin);
        factory = new StreamWalletFactory(admin, treasury, PLATFORM_FEE_BPS, kayen, address(usdc));
        factory.setSwapRouter(router);
        vm.stopPrank();
    }

    // ─── helpers ────────────────────────────────────────────────────────────

    function _wallet(address streamer) internal returns (StreamWallet w) {
        vm.prank(admin);
        w = StreamWallet(payable(factory.deployWalletFor(streamer)));
    }

    function _pricedWallet(address streamer) internal returns (StreamWallet w) {
        w = _wallet(streamer);
        vm.prank(streamer);
        w.setSubscriptionPricing(PRICE, PERIOD);
    }

    /// Mimics ChilizSwapRouter: fee already sent to the treasury, the rest to
    /// the wallet, then the wallet records the payment.
    function _routerDonate(StreamWallet w, address donor, uint256 total) internal {
        uint256 fee = (total * PLATFORM_FEE_BPS) / 10_000;
        usdc.mint(address(w), total - fee);
        vm.prank(router);
        w.recordDonationByRouter(donor, total, fee, total - fee, "gg");
    }

    function _routerSubscribe(StreamWallet w, address sub, uint256 total, uint256 duration) internal {
        uint256 fee = (total * PLATFORM_FEE_BPS) / 10_000;
        usdc.mint(address(w), total - fee);
        vm.prank(router);
        w.recordSubscriptionByRouter(sub, total, duration);
    }

    // ═══════════════════════════════════════════════════════════════════════
    // FACTORY
    // ═══════════════════════════════════════════════════════════════════════

    function testFactoryDeployment() public view {
        assertEq(factory.owner(), admin);
        assertEq(factory.treasury(), treasury);
        assertEq(factory.defaultPlatformFeeBps(), PLATFORM_FEE_BPS);
        assertTrue(factory.implementation() != address(0));
        assertEq(factory.kayenRouter(), kayen);
        assertEq(factory.usdc(), address(usdc));
        assertEq(factory.swapRouter(), router);
    }

    function testManualWalletDeployment() public {
        StreamWallet w = _wallet(streamer1);
        assertTrue(factory.hasWallet(streamer1));
        assertEq(factory.getWallet(streamer1), address(w));
        assertEq(w.streamer(), streamer1);
        assertEq(w.owner(), streamer1);
        assertEq(w.factory(), address(factory));

        vm.prank(admin);
        vm.expectRevert(StreamWalletFactory.WalletAlreadyExists.selector);
        factory.deployWalletFor(streamer1);
    }

    function testGetOrCreateWallet_RouterOrOwnerOnly() public {
        vm.prank(router);
        address w = factory.getOrCreateWallet(streamer1);
        vm.prank(admin);
        assertEq(factory.getOrCreateWallet(streamer1), w, "idempotent");

        vm.prank(viewer1);
        vm.expectRevert(StreamWalletFactory.Unauthorized.selector);
        factory.getOrCreateWallet(streamer2);
    }

    function test_H05_LegacyFanTokenEntrypointsRemoved() public {
        StreamWallet w = _wallet(streamer1);
        (bool ok,) = address(factory).call(abi.encodeWithSignature(
            "subscribeToStream(address,uint256,uint256,uint256,uint256,address)",
            streamer1, 30 days, 1e6, 0, block.timestamp, address(usdc)
        ));
        assertFalse(ok, "factory.subscribeToStream gone");
        (ok,) = address(factory).call(abi.encodeWithSignature(
            "donateToStream(address,string,uint256,uint256,uint256,address)",
            streamer1, "x", 1e6, 0, block.timestamp, address(usdc)
        ));
        assertFalse(ok, "factory.donateToStream gone");
        (ok,) = address(w).call(abi.encodeWithSignature(
            "donate(uint256,string,uint256,uint256,address)", 1e6, "x", 0, block.timestamp, address(usdc)
        ));
        assertFalse(ok, "wallet.donate gone");
    }

    // ═══════════════════════════════════════════════════════════════════════
    // DONATIONS (router path)
    // ═══════════════════════════════════════════════════════════════════════

    function testDonationRecorded() public {
        StreamWallet w = _wallet(streamer1);
        _routerDonate(w, viewer1, 20e6);
        _routerDonate(w, viewer1, 5e6);
        assertEq(w.lifetimeDonations(viewer1), 25e6);
        assertEq(w.getDonationAmount(viewer1), 25e6);
        assertEq(w.totalRevenue(), 25e6, "USDC only (L-06)");
        assertEq(w.availableBalance(), 25e6 - (25e6 * uint256(PLATFORM_FEE_BPS)) / 10_000);
    }

    function testRevertDonationUnauthorizedOrZero() public {
        StreamWallet w = _wallet(streamer1);
        vm.prank(viewer1);
        vm.expectRevert(StreamWallet.OnlyAuthorized.selector);
        w.recordDonationByRouter(viewer1, 1e6, 0, 1e6, "x");

        vm.prank(streamer1); // the streamer cannot fabricate revenue either
        vm.expectRevert(StreamWallet.OnlyAuthorized.selector);
        w.recordDonationByRouter(viewer1, 1e6, 0, 1e6, "x");

        vm.prank(router);
        vm.expectRevert(StreamWallet.InvalidAmount.selector);
        w.recordDonationByRouter(viewer1, 0, 0, 0, "x");
    }

    // ═══════════════════════════════════════════════════════════════════════
    // SUBSCRIPTION PRICING  (audit H-03)
    // ═══════════════════════════════════════════════════════════════════════

    function test_H03_PricingStreamerOnlyAndBounded() public {
        StreamWallet w = _wallet(streamer1);
        vm.prank(viewer1);
        vm.expectRevert(StreamWallet.OnlyStreamer.selector);
        w.setSubscriptionPricing(PRICE, PERIOD);

        vm.startPrank(streamer1);
        vm.expectRevert(abi.encodeWithSelector(StreamWallet.InvalidSubscriptionPricing.selector, 0, PERIOD));
        w.setSubscriptionPricing(0, PERIOD);
        vm.expectRevert(abi.encodeWithSelector(StreamWallet.InvalidSubscriptionPricing.selector, PRICE, uint64(1 hours)));
        w.setSubscriptionPricing(PRICE, 1 hours);
        vm.expectRevert(abi.encodeWithSelector(StreamWallet.InvalidSubscriptionPricing.selector, PRICE, uint64(400 days)));
        w.setSubscriptionPricing(PRICE, 400 days);
        w.setSubscriptionPricing(PRICE, PERIOD);
        vm.stopPrank();
        assertEq(w.subscriptionPrice(), PRICE);
        assertEq(w.subscriptionPeriod(), PERIOD);
    }

    function test_H03_NoPriceNoSubscription() public {
        StreamWallet w = _wallet(streamer1);
        vm.prank(router);
        vm.expectRevert(StreamWallet.SubscriptionPriceNotSet.selector);
        w.recordSubscriptionByRouter(viewer1, 1_000e6, 30 days);
    }

    function test_H03_HundredYearsForOneMicroUsdcRejected() public {
        StreamWallet w = _pricedWallet(streamer1);
        uint256 duration = 100 * 365 days;
        uint256 required = w.subscriptionCost(duration);
        vm.prank(router);
        vm.expectRevert(abi.encodeWithSelector(StreamWallet.InsufficientSubscriptionPayment.selector, required, 1));
        w.recordSubscriptionByRouter(viewer1, 1, duration);
    }

    function test_H03_ExactAndProRataPayments() public {
        StreamWallet w = _pricedWallet(streamer1);
        assertEq(w.subscriptionCost(PERIOD), PRICE);
        assertEq(w.subscriptionCost(PERIOD / 2), PRICE / 2);
        assertEq(w.subscriptionCost(1), 4, "1 s = 3.86 micro-USDC, rounded up: never free");

        _routerSubscribe(w, viewer1, PRICE, PERIOD);
        assertTrue(w.isSubscribed(viewer1));
        assertEq(w.getSubscription(viewer1).expiryTime, block.timestamp + PERIOD);

        _routerSubscribe(w, viewer2, PRICE / 2, PERIOD / 2);
        assertEq(w.getSubscription(viewer2).expiryTime, block.timestamp + PERIOD / 2);
        assertEq(w.totalSubscribers(), 2);
        assertEq(w.totalRevenue(), PRICE + PRICE / 2);
    }

    function testSubscriptionExtendsFromCurrentExpiry() public {
        StreamWallet w = _pricedWallet(streamer1);
        _routerSubscribe(w, viewer1, PRICE, PERIOD);
        uint256 firstExpiry = w.getSubscription(viewer1).expiryTime;
        vm.warp(block.timestamp + 10 days);
        _routerSubscribe(w, viewer1, PRICE, PERIOD);
        assertEq(w.getSubscription(viewer1).expiryTime, firstExpiry + PERIOD, "no time lost");
        assertEq(w.totalSubscribers(), 1);
        assertEq(w.getSubscription(viewer1).amount, 2 * PRICE);
    }

    function testSubscriptionExpiresAndRestartsFromNow() public {
        StreamWallet w = _pricedWallet(streamer1);
        _routerSubscribe(w, viewer1, PRICE, PERIOD);
        vm.warp(block.timestamp + PERIOD);
        assertFalse(w.isSubscribed(viewer1));
        _routerSubscribe(w, viewer1, PRICE, PERIOD);
        assertEq(w.getSubscription(viewer1).expiryTime, block.timestamp + PERIOD);
    }

    function testRevertSubscriptionZeroValues() public {
        StreamWallet w = _pricedWallet(streamer1);
        vm.startPrank(router);
        vm.expectRevert(StreamWallet.InvalidAmount.selector);
        w.recordSubscriptionByRouter(viewer1, 0, PERIOD);
        vm.expectRevert(StreamWallet.InvalidDuration.selector);
        w.recordSubscriptionByRouter(viewer1, PRICE, 0);
        vm.stopPrank();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // WITHDRAWALS & PAYOUT ADDRESS  (audit L-06)
    // ═══════════════════════════════════════════════════════════════════════

    function testStreamerWithdrawal() public {
        StreamWallet w = _wallet(streamer1);
        _routerDonate(w, viewer1, 100e6);
        uint256 bal = w.availableBalance();
        vm.prank(streamer1);
        w.withdrawRevenue(bal);
        assertEq(usdc.balanceOf(streamer1), bal);
        assertEq(w.totalWithdrawn(), bal);
        assertEq(w.availableBalance(), 0);
    }

    function testRevertWithdrawal() public {
        StreamWallet w = _wallet(streamer1);
        _routerDonate(w, viewer1, 10e6);
        vm.prank(viewer1);
        vm.expectRevert(StreamWallet.OnlyStreamer.selector);
        w.withdrawRevenue(1);

        vm.startPrank(streamer1);
        vm.expectRevert(StreamWallet.InvalidAmount.selector);
        w.withdrawRevenue(0);
        vm.expectRevert(StreamWallet.InsufficientBalance.selector);
        w.withdrawRevenue(10e6); // only 9.5 escrowed
        vm.stopPrank();
    }

    function test_L06_PayoutAddress() public {
        StreamWallet w = _wallet(streamer1);
        _routerDonate(w, viewer1, 100e6);
        address cold = makeAddr("coldWallet");

        vm.prank(viewer1);
        vm.expectRevert(StreamWallet.OnlyStreamer.selector);
        w.setPayoutAddress(viewer1);

        vm.startPrank(streamer1);
        w.setPayoutAddress(cold);
        w.withdrawRevenue(50e6);
        assertEq(usdc.balanceOf(cold), 50e6);

        w.setPayoutAddress(address(0)); // back to the streamer
        w.withdrawRevenue(45e6);
        assertEq(usdc.balanceOf(streamer1), 45e6);
        vm.stopPrank();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // UPGRADES (UUPS, factory-only)
    // ═══════════════════════════════════════════════════════════════════════

    function testUpgradeImplementation() public {
        StreamWallet w = _pricedWallet(streamer1);
        _routerSubscribe(w, viewer1, PRICE, PERIOD);

        StreamWallet newImplementation = new StreamWallet();
        vm.prank(admin);
        factory.upgradeWallet(streamer1, address(newImplementation));

        assertTrue(w.isSubscribed(viewer1));
        assertEq(w.subscriptionPrice(), PRICE, "pricing survives the upgrade");
    }

    function testOnlyOwnerCanUpgrade() public {
        StreamWallet w = _wallet(streamer1);
        StreamWallet newImplementation = new StreamWallet();

        vm.prank(viewer1);
        vm.expectRevert();
        w.upgradeToAndCall(address(newImplementation), "");

        vm.prank(streamer1);
        vm.expectRevert(); // OnlyFactory
        w.upgradeToAndCall(address(newImplementation), "");

        vm.prank(viewer1);
        vm.expectRevert();
        factory.upgradeWallet(streamer1, address(newImplementation));

        vm.prank(admin);
        factory.upgradeWallet(streamer1, address(newImplementation));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // FACTORY ADMIN SETTERS
    // ═══════════════════════════════════════════════════════════════════════

    function testAdminSetters() public {
        vm.startPrank(admin);
        factory.setTreasury(address(0x999));
        factory.setPlatformFee(1000);
        factory.setKayenRouter(address(0xABC));
        factory.setUsdc(address(0xFED));
        vm.stopPrank();
        assertEq(factory.treasury(), address(0x999));
        assertEq(factory.defaultPlatformFeeBps(), 1000);
        assertEq(factory.kayenRouter(), address(0xABC));
        assertEq(factory.usdc(), address(0xFED));
    }

    function testRevertAdminSetters() public {
        vm.prank(viewer1);
        vm.expectRevert();
        factory.setTreasury(address(0x999));

        vm.startPrank(admin);
        vm.expectRevert(StreamWalletFactory.InvalidFeeBps.selector);
        factory.setPlatformFee(10001);
        vm.expectRevert(StreamWalletFactory.InvalidAddress.selector);
        factory.setKayenRouter(address(0));
        vm.expectRevert(StreamWalletFactory.InvalidAddress.selector);
        factory.setTreasury(address(0));
        vm.stopPrank();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // L-03: StreamWallet.setSwapRouter (no-op since M-04)
    // ═══════════════════════════════════════════════════════════════════════

    function test_L03_SetSwapRouter_ZeroReverts() public {
        StreamWallet w = _wallet(streamer1);
        vm.prank(address(factory));
        vm.expectRevert(StreamWallet.InvalidAddress.selector);
        w.setSwapRouter(address(0));
    }

    function test_L03_SetSwapRouter_IsNoOpRouterComesFromFactory() public {
        StreamWallet w = _wallet(streamer1);
        // Factories deployed before M-04 still call setSwapRouter on new
        // wallets: it must succeed for them but change nothing.
        vm.prank(address(factory));
        w.setSwapRouter(address(0xABC));
        assertEq(w.swapRouter(), router);

        vm.prank(admin);
        factory.setSwapRouter(address(0xDEF));
        assertEq(w.swapRouter(), address(0xDEF));
    }

    function test_L03_SetSwapRouter_OnlyFactory() public {
        StreamWallet w = _wallet(streamer1);
        vm.prank(viewer1);
        vm.expectRevert(StreamWallet.OnlyAuthorized.selector);
        w.setSwapRouter(address(0x1));
        vm.prank(streamer1);
        vm.expectRevert(StreamWallet.OnlyAuthorized.selector);
        w.setSwapRouter(address(0x1));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // M-04 (audit 2026-10): config is read from the factory
    // ═══════════════════════════════════════════════════════════════════════

    function test_M04_FactoryConfigRotationReachesExistingWallet() public {
        StreamWallet w = _wallet(streamer1);
        _routerDonate(w, viewer1, 10e6);
        assertEq(w.treasury(), treasury);
        assertEq(w.platformFeeBps(), PLATFORM_FEE_BPS);

        address newTreasury = makeAddr("newTreasury");
        address newRouter = makeAddr("newRouter");
        vm.startPrank(admin);
        factory.setTreasury(newTreasury);
        factory.setPlatformFee(1_000);
        factory.setSwapRouter(newRouter);
        vm.stopPrank();

        assertEq(w.treasury(), newTreasury);
        assertEq(w.platformFeeBps(), 1_000);
        assertEq(w.usdc(), address(usdc));
        assertEq(w.swapRouter(), newRouter);

        vm.prank(newRouter); // the rotated router is authorized at once
        w.recordDonationByRouter(viewer2, 1e6, 0, 1e6, "via new router");
        assertEq(w.lifetimeDonations(viewer2), 1e6);

        vm.prank(router); // the retired one is not
        vm.expectRevert(StreamWallet.OnlyAuthorized.selector);
        w.recordDonationByRouter(viewer2, 1e6, 0, 1e6, "stale");
    }

    function test_M04_UpgradeKeepsStorageAndIgnoresStaleSlots() public {
        StreamWallet w = _pricedWallet(streamer1);
        _routerSubscribe(w, viewer1, PRICE, PERIOD);
        uint256 revenue = w.totalRevenue();
        uint256 escrow = w.availableBalance();

        StreamWallet newImpl = new StreamWallet();
        vm.prank(admin);
        factory.upgradeWallet(streamer1, address(newImpl));

        // Wallets upgraded in place keep stale copies in the deprecated slots
        // (1, 3, 4, 5). Simulate that and check nothing reads them.
        vm.store(address(w), bytes32(uint256(1)), bytes32(uint256(uint160(address(0xDEAD1)))));
        vm.store(address(w), bytes32(uint256(3)), bytes32(uint256(uint160(address(0xDEAD3)))));
        vm.store(address(w), bytes32(uint256(4)), bytes32(uint256(uint160(address(0xDEAD4)))));
        vm.store(address(w), bytes32(uint256(5)), bytes32(uint256(uint160(address(0xDEAD5)))));

        assertEq(w.streamer(), streamer1);
        assertEq(w.factory(), address(factory));
        assertEq(w.totalRevenue(), revenue);
        assertEq(w.availableBalance(), escrow);
        assertTrue(w.isSubscribed(viewer1));
        assertEq(w.treasury(), treasury);
        assertEq(w.platformFeeBps(), PLATFORM_FEE_BPS);
        assertEq(w.usdc(), address(usdc));
        assertEq(w.swapRouter(), router);

        vm.prank(address(0xDEAD5)); // stale router copy grants nothing
        vm.expectRevert(StreamWallet.OnlyAuthorized.selector);
        w.recordDonationByRouter(viewer2, 1e6, 0, 1e6, "stale");
    }
}

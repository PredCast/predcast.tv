// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}  from "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";
import {StreamWallet}        from "../../src/streamer/StreamWallet.sol";
import {StreamWalletFactory} from "../../src/streamer/StreamWalletFactory.sol";
import {MockUSDC}            from "../mocks/MockUSDC.sol";
import {MockKayenRouter}     from "../mocks/MockKayenRouter.sol";

contract InvariantToken is ERC20("Invariant Token", "INV") {
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

/**
 * @notice Pays donations and subscriptions through the router in USDC,
 *         native token or an ERC20, withdraws, reprices, changes the fee and
 *         sends stray funds, in random order. Each payment is checked on the
 *         spot: the treasury gets exactly the fee, the wallet the rest.
 */
contract StreamingHandler is Test {
    uint256 internal constant RATE = 100_000; // MockKayenRouter: USDC per 1e18 input

    NetworkRouter       public immutable router;
    StreamWalletFactory public immutable factory;
    MockUSDC            public immutable usdc;
    InvariantToken      public immutable token;
    address             public immutable treasury;
    address             public immutable sink;

    address[] internal _streamers;
    address[] internal _viewers;
    uint256 public time;

    uint256 public ghostFees;
    uint256 public routerStray;
    uint256 public rescued;
    mapping(address => uint256) public netOf;
    mapping(address => uint256) public grossOf;
    mapping(address => uint256) public strayOf;
    mapping(address => uint256) public withdrawnOf;

    uint256 public unexpected;
    string  public lastUnexpected;

    constructor(
        NetworkRouter router_,
        StreamWalletFactory factory_,
        MockUSDC usdc_,
        InvariantToken token_,
        address treasury_,
        address[] memory streamers_
    ) {
        router = router_;
        factory = factory_;
        usdc = usdc_;
        token = token_;
        treasury = treasury_;
        sink = makeAddr("rescueSink");
        _streamers = streamers_;
        time = block.timestamp;
        for (uint256 i; i < 3; ++i) _viewers.push(makeAddr(string.concat("viewer", vm.toString(i))));
    }

    modifier timed() {
        vm.warp(time);
        _;
    }

    function streamers() external view returns (address[] memory) {
        return _streamers;
    }

    // ─── payments ───────────────────────────────────────────────────────────

    function donate(uint256 viewerSeed, uint256 streamerSeed, uint256 amount, uint256 kind, uint256 minSeed)
        external
        timed
    {
        _pay(false, viewerSeed, streamerSeed, amount, kind, minSeed, 0);
    }

    function subscribe(
        uint256 viewerSeed,
        uint256 streamerSeed,
        uint256 amount,
        uint256 kind,
        uint256 minSeed,
        uint256 duration
    ) external timed {
        _pay(true, viewerSeed, streamerSeed, amount, kind, minSeed, bound(duration, 1 hours, 400 days));
    }

    function _pay(
        bool isSubscription,
        uint256 viewerSeed,
        uint256 streamerSeed,
        uint256 amount,
        uint256 kind,
        uint256 minSeed,
        uint256 duration
    ) internal {
        address viewer = _viewers[viewerSeed % _viewers.length];
        address streamer = _streamers[streamerSeed % _streamers.length];
        kind %= 3; // 0 USDC, 1 native, 2 ERC20

        uint256 gross;
        uint256 minOut;
        if (kind == 0) {
            amount = bound(amount, 1, 10_000e6);
            gross = amount;
            usdc.mint(viewer, amount);
            vm.prank(viewer);
            usdc.approve(address(router), amount);
        } else {
            amount = bound(amount, 1e17, 100_000 ether);
            gross = (amount * RATE) / 1e18;
            // Mostly a reachable minimum, sometimes one just above the output.
            minOut = minSeed % 8 == 0 ? gross + 1 : bound(minSeed, 1, gross);
            if (kind == 1) {
                vm.deal(viewer, amount);
            } else {
                token.mint(viewer, amount);
                vm.prank(viewer);
                token.approve(address(router), amount);
            }
        }

        address wallet = factory.getWallet(streamer);
        bool shouldWork = kind == 0 || minOut <= gross;
        if (isSubscription) shouldWork = shouldWork && _covers(wallet, gross, duration);

        uint256 fee = (gross * router.platformFeeBps()) / 10_000;
        uint256 treasuryBefore = usdc.balanceOf(treasury);
        uint256 walletBefore = wallet == address(0) ? 0 : usdc.balanceOf(wallet);

        bool ok = _call(isSubscription, viewer, streamer, kind, amount, minOut, duration);

        if (ok) {
            wallet = factory.getWallet(streamer);
            if (usdc.balanceOf(treasury) - treasuryBefore != fee) _fail("treasury got a different fee");
            if (usdc.balanceOf(wallet) - walletBefore != gross - fee) _fail("wallet got a different amount");
            ghostFees += fee;
            netOf[wallet] += gross - fee;
            grossOf[wallet] += gross;
        } else {
            // Leave no unspent test funds behind.
            if (kind == 0) usdc.burn(viewer, amount);
        }
        _expect(ok, shouldWork, isSubscription ? "subscription" : "donation");
    }

    function _call(
        bool isSubscription,
        address viewer,
        address streamer,
        uint256 kind,
        uint256 amount,
        uint256 minOut,
        uint256 duration
    ) internal returns (bool ok) {
        uint256 deadline = block.timestamp + 1 hours;
        vm.startPrank(viewer);
        if (isSubscription) {
            if (kind == 0) {
                try router.subscribeWithUSDC(streamer, duration, amount) { ok = true; } catch {}
            } else if (kind == 1) {
                try router.subscribeWithNativeToken{value: amount}(streamer, duration, minOut, deadline) { ok = true; } catch {}
            } else {
                try router.subscribeWithToken(address(token), amount, streamer, duration, minOut, deadline) { ok = true; } catch {}
            }
        } else {
            if (kind == 0) {
                try router.donateWithUSDC(streamer, "gg", amount) { ok = true; } catch {}
            } else if (kind == 1) {
                try router.donateWithNativeToken{value: amount}(streamer, "gg", minOut, deadline) { ok = true; } catch {}
            } else {
                try router.donateWithToken(address(token), amount, streamer, "gg", minOut, deadline) { ok = true; } catch {}
            }
        }
        vm.stopPrank();
    }

    // ─── streamer ───────────────────────────────────────────────────────────

    function withdraw(uint256 streamerSeed, uint256 amount) external timed {
        address streamer = _streamers[streamerSeed % _streamers.length];
        address wallet = factory.getWallet(streamer);
        if (wallet == address(0)) return;
        uint256 available = usdc.balanceOf(wallet);
        if (available == 0) return;
        amount = bound(amount, 1, available);
        vm.prank(streamer);
        try StreamWallet(payable(wallet)).withdrawRevenue(amount) {
            withdrawnOf[wallet] += amount;
        } catch {
            _fail("withdrawRevenue reverted");
        }
    }

    function setPrice(uint256 streamerSeed, uint256 price, uint256 period) external timed {
        address streamer = _streamers[streamerSeed % _streamers.length];
        address wallet = factory.getWallet(streamer);
        if (wallet == address(0)) return;
        vm.prank(streamer);
        StreamWallet(payable(wallet)).setSubscriptionPricing(bound(price, 1, 100e6), uint64(bound(period, 1 days, 365 days)));
    }

    // ─── owner and mistakes ─────────────────────────────────────────────────

    function setFee(uint256 bps) external timed {
        router.setPlatformFeeBps(uint16(bound(bps, 0, 10_000)));
    }

    function strayToWallet(uint256 streamerSeed, uint256 amount) external timed {
        address wallet = factory.getWallet(_streamers[streamerSeed % _streamers.length]);
        if (wallet == address(0)) return;
        amount = bound(amount, 1, 1_000e6);
        usdc.mint(wallet, amount);
        strayOf[wallet] += amount;
    }

    function strayToRouter(uint256 amount) external timed {
        amount = bound(amount, 1, 1_000e6);
        usdc.mint(address(router), amount);
        routerStray += amount;
    }

    function rescue(uint256 amount) external timed {
        uint256 held = usdc.balanceOf(address(router));
        if (held == 0) return;
        amount = bound(amount, 1, held);
        router.rescueTokens(usdc, sink, amount);
        rescued += amount;
    }

    function sendNativeToRouter(uint256 amount) external timed {
        amount = bound(amount, 1, 10 ether);
        vm.deal(address(this), amount);
        (bool ok,) = address(router).call{value: amount}("");
        if (ok) _fail("router accepted a plain native transfer");
    }

    function warp(uint256 secondsAhead) external {
        time += bound(secondsAhead, 1 minutes, 30 days);
    }

    // ─── helpers ────────────────────────────────────────────────────────────

    function _covers(address wallet, uint256 gross, uint256 duration) internal view returns (bool) {
        if (wallet == address(0) || gross == 0) return false;
        try StreamWallet(payable(wallet)).subscriptionCost(duration) returns (uint256 cost) {
            return gross >= cost;
        } catch {
            return false; // price not set
        }
    }

    function _expect(bool ok, bool shouldSucceed, string memory what) internal {
        if (ok && !shouldSucceed) _fail(string.concat(what, " succeeded but should revert"));
        if (!ok && shouldSucceed) _fail(string.concat(what, " reverted but should succeed"));
    }

    function _fail(string memory why) internal {
        ++unexpected;
        lastUnexpected = why;
    }
}

/**
 * @title Streaming payment invariants
 * @notice The router keeps nothing but stray USDC (which the owner can
 *         rescue), each wallet holds exactly the net payments plus stray
 *         USDC minus withdrawals, and the treasury holds exactly the fees.
 */
contract StreamingInvariantTest is Test {
    address internal treasury = makeAddr("treasury");

    MockUSDC            internal usdc;
    InvariantToken      internal token;
    NetworkRouter       internal router;
    StreamWalletFactory internal factory;
    StreamingHandler    internal handler;

    function setUp() public {
        usdc = new MockUSDC();
        token = new InvariantToken();
        MockKayenRouter dex = new MockKayenRouter(address(usdc));
        router = new NetworkRouter(address(dex), address(dex), address(usdc), address(0xC42), treasury, 500);
        factory = new StreamWalletFactory(address(this), treasury, 500, address(dex), address(usdc));
        factory.setSwapRouter(address(router));
        router.setStreamWalletFactory(address(factory));

        // Three streamers with a price; the fourth gets a wallet on first
        // donation and has no price, so subscribing to it must revert.
        address[] memory streamers = new address[](4);
        for (uint256 i; i < 4; ++i) streamers[i] = makeAddr(string.concat("streamer", vm.toString(i)));
        for (uint256 i; i < 3; ++i) {
            StreamWallet w = StreamWallet(payable(factory.deployWalletFor(streamers[i])));
            vm.prank(streamers[i]);
            w.setSubscriptionPricing(1e6, 30 days);
        }

        handler = new StreamingHandler(router, factory, usdc, token, treasury, streamers);
        router.transferOwnership(address(handler));
        vm.prank(address(handler));
        router.acceptOwnership();

        bytes4[] memory selectors = new bytes4[](11);
        selectors[0]  = StreamingHandler.donate.selector;
        selectors[1]  = StreamingHandler.subscribe.selector;
        selectors[2]  = StreamingHandler.withdraw.selector;
        selectors[3]  = StreamingHandler.setPrice.selector;
        selectors[4]  = StreamingHandler.setFee.selector;
        selectors[5]  = StreamingHandler.strayToWallet.selector;
        selectors[6]  = StreamingHandler.strayToRouter.selector;
        selectors[7]  = StreamingHandler.rescue.selector;
        selectors[8]  = StreamingHandler.sendNativeToRouter.selector;
        selectors[9]  = StreamingHandler.warp.selector;
        selectors[10] = StreamingHandler.subscribe.selector;
        targetSelector(FuzzSelector({addr: address(handler), selectors: selectors}));
        targetContract(address(handler));
    }

    function invariant_RouterKeepsOnlyStrayUSDC() public view {
        assertEq(usdc.balanceOf(address(router)), handler.routerStray() - handler.rescued());
        assertEq(token.balanceOf(address(router)), 0);
        assertEq(address(router).balance, 0);
    }

    function invariant_WalletsHoldNetPaymentsMinusWithdrawals() public view {
        address[] memory streamers = handler.streamers();
        for (uint256 i; i < streamers.length; ++i) {
            address wallet = factory.getWallet(streamers[i]);
            if (wallet == address(0)) continue;
            StreamWallet w = StreamWallet(payable(wallet));
            assertEq(
                usdc.balanceOf(wallet),
                handler.netOf(wallet) + handler.strayOf(wallet) - handler.withdrawnOf(wallet),
                "wallet balance"
            );
            assertEq(w.totalWithdrawn(), handler.withdrawnOf(wallet), "totalWithdrawn");
            assertEq(w.totalRevenue(), handler.grossOf(wallet), "totalRevenue counts gross payments");
        }
    }

    function invariant_TreasuryHoldsExactlyTheFees() public view {
        assertEq(usdc.balanceOf(treasury), handler.ghostFees());
    }

    function invariant_NoUnexpectedRevertOrSuccess() public view {
        assertEq(handler.unexpected(), 0, handler.lastUnexpected());
    }
}

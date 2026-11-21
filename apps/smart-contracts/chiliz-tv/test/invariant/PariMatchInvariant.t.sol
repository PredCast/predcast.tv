// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}         from "forge-std/Test.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import {PariMatchBase}       from "../../src/pari/PariMatchBase.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";
import {LeaderboardRewards}  from "../../src/leaderboard/LeaderboardRewards.sol";
import {MockUSDC}            from "../mocks/MockUSDC.sol";
import {MockKayenRouter}     from "../mocks/MockKayenRouter.sol";
import {PariFactoryDeployer} from "../helpers/PariFactoryDeployer.sol";

/// @dev Reads the match's internal accounting. Slots checked with
///      `forge inspect FootballPariMatch storageLayout` and by
///      `test_StorageSlotsMatchTheLayout` below.
library PariSlots {
    uint256 internal constant MARKET_CORES = 3;
    uint256 internal constant ACCOUNTED_USDC = 13;

    function accounted(address pari) internal view returns (uint256) {
        return uint256(_vm().load(pari, bytes32(ACCOUNTED_USDC)));
    }

    /// MarketCoreData: [state..feesFrozen], resolvedNetPool, paidOut, claimedWinStake.
    function paidOut(address pari, uint256 marketId) internal view returns (uint256) {
        return uint256(_vm().load(pari, bytes32(_core(marketId) + 2)));
    }

    function claimedWinStake(address pari, uint256 marketId) internal view returns (uint256) {
        return uint256(_vm().load(pari, bytes32(_core(marketId) + 3)));
    }

    function _core(uint256 marketId) private pure returns (uint256) {
        return uint256(keccak256(abi.encode(marketId, MARKET_CORES)));
    }

    function _vm() private pure returns (VmLoad) {
        return VmLoad(address(uint160(uint256(keccak256("hevm cheat code")))));
    }
}

interface VmLoad {
    function load(address target, bytes32 slot) external view returns (bytes32);
}

/**
 * @notice Drives one factory-made football match through every action a
 *         user, the match owner, the oracle or anyone can take, in random
 *         order, and keeps the money that moved in ghost variables.
 *
 *         A call that should succeed but reverts, or should revert but
 *         succeeds, is counted in `unexpected` (the invariant run ignores
 *         reverts, so this is how liveness is checked).
 */
contract PariMatchHandler is Test {
    bytes32 internal constant WINNER = keccak256("WINNER");
    uint256 public constant MARKETS = 3;
    uint256 internal constant MIN_STAKE = 10_000;
    uint256 internal constant MAX_CLAIM_PAUSE = 7 days;

    FootballPariMatch public immutable pari;
    MockUSDC          public immutable usdc;
    NetworkRouter     public immutable router;
    address           public immutable admin;
    address           public immutable oracle;
    address           public immutable feeRecipient;
    address           public immutable leaderboard;

    address[] internal _actors;
    uint256 public time;

    // Money that entered or left the match.
    uint256 public ghostIn;
    uint256 public ghostStray;
    uint256 public ghostPayouts;
    uint256 public ghostRefunds;
    uint256 public ghostFees;
    mapping(uint256 => uint256) public refundsOf;
    mapping(uint256 => uint256) public feesOf;

    uint256 public unexpected;
    string  public lastUnexpected;
    mapping(string => uint256) public calls;

    constructor(
        FootballPariMatch pari_,
        MockUSDC usdc_,
        NetworkRouter router_,
        address admin_,
        address oracle_,
        address feeRecipient_,
        address leaderboard_
    ) {
        pari = pari_;
        usdc = usdc_;
        router = router_;
        admin = admin_;
        oracle = oracle_;
        feeRecipient = feeRecipient_;
        leaderboard = leaderboard_;
        time = block.timestamp;
        for (uint256 i; i < 5; ++i) _actors.push(makeAddr(string.concat("bettor", vm.toString(i))));
    }

    /// Foundry does not carry `vm.warp` from one handler call to the next.
    modifier timed() {
        vm.warp(time);
        _;
    }

    function actors() external view returns (address[] memory) {
        return _actors;
    }

    // ─── user actions ───────────────────────────────────────────────────────

    function bet(uint256 actorSeed, uint256 marketSeed, uint256 outcomeSeed, uint256 amount)
        external
        timed
    {
        _bet(actorSeed, marketSeed, outcomeSeed, amount);
    }

    /// Same as `bet`: a second selector so bets are drawn twice as often.
    function betAgain(uint256 actorSeed, uint256 marketSeed, uint256 outcomeSeed, uint256 amount)
        external
        timed
    {
        _bet(actorSeed, marketSeed, outcomeSeed, amount);
    }

    function _bet(uint256 actorSeed, uint256 marketSeed, uint256 outcomeSeed, uint256 amount)
        internal
    {
        address user = _actor(actorSeed);
        uint256 id = marketSeed % MARKETS;
        uint64 outcome = uint64(outcomeSeed % 3);
        amount = bound(amount, MIN_STAKE, 5_000e6);
        bool accepting = _state(id) == PariMatchBase.MarketState.Open && !pari.paused() && _bettingWindowOpen(id);

        usdc.mint(user, amount);
        vm.startPrank(user);
        usdc.approve(address(router), amount);
        bool ok;
        try router.placeBetWithUSDC(address(pari), id, outcome, amount) { ok = true; } catch {}
        vm.stopPrank();

        if (ok) {
            ghostIn += amount;
            ++calls["bet"];
        } else {
            usdc.burn(user, amount);
        }
        _expect(ok, accepting, "bet");
    }

    function claim(uint256 actorSeed, uint256 marketSeed) external timed {
        address user = _actor(actorSeed);
        uint256 id = marketSeed % MARKETS;
        PariMatchBase.MarketCore memory c = pari.getMarketCore(id);
        bool claimable = c.state == PariMatchBase.MarketState.Resolved && !pari.hasClaimed(id, user)
            && pari.getUserStake(id, user, c.result) != 0 && _claimsOpen();

        uint256 before = usdc.balanceOf(user);
        vm.prank(user);
        bool ok;
        try pari.claim(id) { ok = true; } catch {}
        if (ok) {
            uint256 got = usdc.balanceOf(user) - before;
            ghostPayouts += got;
            _checkShare(id, user, got);
            ++calls["claim"];
        }
        _expect(ok, claimable, "claim");
    }

    function claimAll(uint256 actorSeed) external timed {
        address user = _actor(actorSeed);
        uint256 before = usdc.balanceOf(user);
        vm.prank(user);
        bool ok;
        try pari.claimBatch(_allMarkets()) { ok = true; } catch {}
        if (ok) {
            ghostPayouts += usdc.balanceOf(user) - before;
            ++calls["claimBatch"];
        }
        _expect(ok, _claimsOpen(), "claimBatch");
    }

    function refund(uint256 actorSeed, uint256 marketSeed) external timed {
        address user = _actor(actorSeed);
        uint256 id = marketSeed % MARKETS;
        bool refundable = _state(id) == PariMatchBase.MarketState.Cancelled && !pari.hasClaimed(id, user)
            && pari.getUserTotalStake(id, user) != 0;

        uint256 before = usdc.balanceOf(user);
        vm.prank(user);
        bool ok;
        try pari.claimRefund(id) { ok = true; } catch {}
        if (ok) {
            uint256 got = usdc.balanceOf(user) - before;
            ghostRefunds += got;
            refundsOf[id] += got;
            ++calls["refund"];
        }
        _expect(ok, refundable, "refund");
    }

    function refundAll(uint256 actorSeed) external timed {
        address user = _actor(actorSeed);
        uint256[] memory ids = _allMarkets();
        uint256[] memory before = new uint256[](MARKETS);
        for (uint256 i; i < MARKETS; ++i) before[i] = _refundable(i, user) ? pari.getUserTotalStake(i, user) : 0;

        uint256 balanceBefore = usdc.balanceOf(user);
        vm.prank(user);
        bool ok;
        try pari.claimRefundBatch(ids) { ok = true; } catch {}
        if (ok) {
            uint256 got = usdc.balanceOf(user) - balanceBefore;
            uint256 expected;
            for (uint256 i; i < MARKETS; ++i) {
                refundsOf[i] += before[i];
                expected += before[i];
            }
            ghostRefunds += got;
            if (got != expected) _fail("refund batch amount");
            ++calls["refundBatch"];
        }
        _expect(ok, true, "refundBatch");
    }

    function closeExpired(uint256 marketSeed) external timed {
        uint256 id = marketSeed % MARKETS;
        uint40 closesAt = pari.getMarketSpec(id).closesAt;
        PariMatchBase.MarketState s = _state(id);
        bool due = closesAt != 0 && block.timestamp >= closesAt
            && (s == PariMatchBase.MarketState.Open || s == PariMatchBase.MarketState.Suspended);
        bool ok;
        try pari.closeExpiredMarket(id) { ok = true; } catch {}
        _expect(ok, due, "closeExpiredMarket");
    }

    function cancelStale(uint256 marketSeed) external timed {
        uint256 id = marketSeed % MARKETS;
        PariMatchBase.MarketState s = _state(id);
        bool due = block.timestamp >= pari.staleAt(id) && (s == PariMatchBase.MarketState.Open
            || s == PariMatchBase.MarketState.Suspended || s == PariMatchBase.MarketState.Closed);
        bool ok;
        try pari.cancelStaleMarket(id) { ok = true; } catch {}
        if (ok) ++calls["cancelStale"];
        _expect(ok, due, "cancelStaleMarket");
    }

    /// USDC sent to the match by mistake. It must never be paid out as a stake.
    function stray(uint256 amount) external timed {
        amount = bound(amount, 1, 1_000e6);
        usdc.mint(address(pari), amount);
        ghostStray += amount;
    }

    function warp(uint256 secondsAhead) external {
        time += bound(secondsAhead, 1 minutes, 10 days);
    }

    // ─── match owner and oracle ─────────────────────────────────────────────

    function open(uint256 marketSeed) external timed {
        vm.prank(admin);
        try pari.openMarket(marketSeed % MARKETS) {} catch {}
    }

    function suspend(uint256 marketSeed) external timed {
        vm.prank(admin);
        try pari.suspendMarket(marketSeed % MARKETS) {} catch {}
    }

    function close(uint256 marketSeed) external timed {
        vm.prank(admin);
        try pari.closeMarket(marketSeed % MARKETS) {} catch {}
    }

    function setCloseTime(uint256 marketSeed, uint256 delay) external timed {
        uint40 closesAt = uint40(block.timestamp + bound(delay, 1 hours, 20 days));
        vm.prank(admin);
        try pari.setMarketCloseTime(marketSeed % MARKETS, closesAt) {} catch {}
    }

    function cancel(uint256 marketSeed) external timed {
        vm.prank(admin);
        try pari.cancelMarket(marketSeed % MARKETS, "invariant") {} catch {}
    }

    function pause() external timed {
        vm.prank(admin);
        try pari.emergencyPause() {} catch {}
    }

    function unpause() external timed {
        vm.prank(admin);
        try pari.unpause() {} catch {}
    }

    function resolve(uint256 marketSeed, uint256 outcomeSeed) external timed {
        uint256 id = marketSeed % MARKETS;
        bool closed = _state(id) == PariMatchBase.MarketState.Closed;
        bool ok = _resolve(id, uint64(outcomeSeed % 3));
        _expect(ok, closed, "resolveMarket");
    }

    // ─── end of run: everyone must be able to leave with their money ────────

    /// @dev Not a fuzz target. Every call here must succeed.
    function settleAll() external timed {
        if (pari.paused()) {
            vm.prank(admin);
            pari.unpause();
        }
        for (uint256 id; id < MARKETS; ++id) {
            PariMatchBase.MarketState s = _state(id);
            if (s == PariMatchBase.MarketState.Open || s == PariMatchBase.MarketState.Suspended) {
                vm.prank(admin);
                pari.closeMarket(id);
                s = PariMatchBase.MarketState.Closed;
            }
            if (s == PariMatchBase.MarketState.Closed) {
                require(_resolve(id, uint64(id % 3)), "resolve at settlement");
            }
        }
        for (uint256 id; id < MARKETS; ++id) {
            for (uint256 a; a < _actors.length; ++a) this.collect(id, _actors[a]);
        }
    }

    /// @dev Not a fuzz target. External so via_ir keeps settleAll's stack small.
    ///      Claims or refunds what `user` is owed on `id`; must not revert.
    function collect(uint256 id, address user) external {
        if (pari.hasClaimed(id, user)) return;
        PariMatchBase.MarketCore memory c = pari.getMarketCore(id);
        uint256 before = usdc.balanceOf(user);
        if (c.state == PariMatchBase.MarketState.Resolved && pari.getUserStake(id, user, c.result) != 0) {
            vm.prank(user);
            pari.claim(id);
            uint256 got = usdc.balanceOf(user) - before;
            ghostPayouts += got;
            _checkShare(id, user, got);
        } else if (c.state == PariMatchBase.MarketState.Cancelled && pari.getUserTotalStake(id, user) != 0) {
            vm.prank(user);
            pari.claimRefund(id);
            uint256 got = usdc.balanceOf(user) - before;
            ghostRefunds += got;
            refundsOf[id] += got;
        }
    }

    // ─── helpers ────────────────────────────────────────────────────────────

    /// A payout is the exact pro-rata share rounded down or up, never further.
    function _checkShare(uint256 id, address user, uint256 got) internal {
        PariMatchBase.MarketCore memory c = pari.getMarketCore(id);
        uint256 winningPool = pari.getOutcomePool(id, c.result);
        uint256 scaled = pari.getUserStake(id, user, c.result) * c.resolvedNetPool;
        uint256 low = scaled / winningPool;
        uint256 high = (scaled + winningPool - 1) / winningPool;
        if (got < low || got > high) _fail("payout further than one unit from the exact share");
    }

    function _resolve(uint256 id, uint64 outcome) internal returns (bool ok) {
        uint256 before = usdc.balanceOf(feeRecipient) + usdc.balanceOf(leaderboard);
        vm.prank(oracle);
        try pari.resolveMarket(id, outcome) { ok = true; } catch {}
        if (ok) {
            uint256 fee = usdc.balanceOf(feeRecipient) + usdc.balanceOf(leaderboard) - before;
            feesOf[id] += fee;
            ghostFees += fee;
            ++calls["resolve"];
        }
    }

    function _actor(uint256 seed) internal view returns (address) {
        return _actors[seed % _actors.length];
    }

    function _state(uint256 id) internal view returns (PariMatchBase.MarketState) {
        return pari.getMarketCore(id).state;
    }

    function _bettingWindowOpen(uint256 id) internal view returns (bool) {
        uint40 closesAt = pari.getMarketSpec(id).closesAt;
        return closesAt == 0 || block.timestamp < closesAt;
    }

    function _claimsOpen() internal view returns (bool) {
        return !pari.paused() || block.timestamp >= uint256(pari.pausedAt()) + MAX_CLAIM_PAUSE;
    }

    function _refundable(uint256 id, address user) internal view returns (bool) {
        return _state(id) == PariMatchBase.MarketState.Cancelled && !pari.hasClaimed(id, user);
    }

    function _allMarkets() internal pure returns (uint256[] memory ids) {
        ids = new uint256[](MARKETS);
        for (uint256 i; i < MARKETS; ++i) ids[i] = i;
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
 * @title Pari-mutuel solvency invariants
 * @notice One factory-made match with three WINNER markets, the real router
 *         and the real leaderboard. After any sequence of bets, lifecycle
 *         changes, resolutions, claims, refunds, pauses and stray transfers:
 *         the match always holds what it owes, money is conserved, fees stay
 *         within the frozen rate, and at the end everyone can collect.
 */
contract PariMatchInvariantTest is Test {
    bytes32 internal constant WINNER = keccak256("WINNER");

    address internal admin        = makeAddr("matchAdmin");
    address internal oracle       = makeAddr("oracle");
    address internal feeRecipient = makeAddr("feeRecipient");

    MockUSDC           internal usdc;
    NetworkRouter      internal router;
    LeaderboardRewards internal leaderboard;
    PariMatchFactory   internal factory;
    FootballPariMatch  internal pari;
    PariMatchHandler   internal handler;

    function setUp() public {
        usdc = new MockUSDC();
        MockKayenRouter dex = new MockKayenRouter(address(usdc));
        router = new NetworkRouter(address(dex), address(dex), address(usdc), address(0xC42), feeRecipient, 500);

        leaderboard = LeaderboardRewards(address(new ERC1967Proxy(
            address(new LeaderboardRewards()),
            abi.encodeCall(LeaderboardRewards.initialize, (address(usdc), address(this), address(0)))
        )));
        leaderboard.initializeV2();

        factory = PariFactoryDeployer.deploy();
        factory.setWiring(address(usdc), feeRecipient, address(router));
        factory.setLeaderboardWiring(address(leaderboard), factory.DEFAULT_LEADERBOARD_FEE_BPS());
        router.setMatchFactory(address(factory));
        leaderboard.setMatchFactory(address(factory));

        pari = FootballPariMatch(payable(factory.createFootballMatch("Invariant FC vs Fuzz United", admin, oracle)));
        vm.startPrank(admin);
        for (uint256 i; i < 3; ++i) pari.addMarketWithLine(WINNER, 0);
        vm.stopPrank();

        handler = new PariMatchHandler(pari, usdc, router, admin, oracle, feeRecipient, address(leaderboard));

        bytes4[] memory selectors = new bytes4[](18);
        selectors[0]  = PariMatchHandler.bet.selector;
        selectors[1]  = PariMatchHandler.betAgain.selector; // bets weigh double
        selectors[2]  = PariMatchHandler.claim.selector;
        selectors[3]  = PariMatchHandler.claimAll.selector;
        selectors[4]  = PariMatchHandler.refund.selector;
        selectors[5]  = PariMatchHandler.refundAll.selector;
        selectors[6]  = PariMatchHandler.closeExpired.selector;
        selectors[7]  = PariMatchHandler.cancelStale.selector;
        selectors[8]  = PariMatchHandler.stray.selector;
        selectors[9]  = PariMatchHandler.warp.selector;
        selectors[10] = PariMatchHandler.open.selector;
        selectors[11] = PariMatchHandler.suspend.selector;
        selectors[12] = PariMatchHandler.close.selector;
        selectors[13] = PariMatchHandler.setCloseTime.selector;
        selectors[14] = PariMatchHandler.cancel.selector;
        selectors[15] = PariMatchHandler.pause.selector;
        selectors[16] = PariMatchHandler.unpause.selector;
        selectors[17] = PariMatchHandler.resolve.selector;
        targetSelector(FuzzSelector({addr: address(handler), selectors: selectors}));
        targetContract(address(handler));
    }

    // ─── invariants ─────────────────────────────────────────────────────────

    function invariant_BalanceCoversWhatIsOwed() public view {
        assertGe(usdc.balanceOf(address(pari)), PariSlots.accounted(address(pari)));
    }

    function invariant_AccountingMatchesMarkets() public view {
        assertEq(PariSlots.accounted(address(pari)), _owed(), "accounted USDC = sum owed per market");
    }

    function invariant_MoneyIsConserved() public view {
        uint256 expected = handler.ghostIn() + handler.ghostStray() - handler.ghostPayouts()
            - handler.ghostRefunds() - handler.ghostFees();
        assertEq(usdc.balanceOf(address(pari)), expected);
    }

    function invariant_MarketBounds() public view {
        for (uint256 id; id < handler.MARKETS(); ++id) {
            PariMatchBase.MarketCore memory c = pari.getMarketCore(id);
            uint256 total = pari.getTotalPool(id);
            (uint16 totalFeeBps,,) = pari.getMarketFees(id);
            assertLe(handler.feesOf(id), (total * totalFeeBps) / 10_000, "fee within the frozen rate");

            if (c.state == PariMatchBase.MarketState.Resolved) {
                uint256 winningPool = pari.getOutcomePool(id, c.result);
                assertEq(c.resolvedNetPool + handler.feesOf(id), total, "net pool + fee = total pool");
                assertLe(PariSlots.paidOut(address(pari), id), c.resolvedNetPool, "never pays more than the net pool");
                uint256 claimedStake = PariSlots.claimedWinStake(address(pari), id);
                assertLe(claimedStake, winningPool);
                // Cumulative rounding: what was paid is the floor of the
                // claimed stake's share, so a fully claimed pool is paid exactly.
                assertEq(
                    PariSlots.paidOut(address(pari), id),
                    (claimedStake * c.resolvedNetPool) / winningPool,
                    "paid out = floor(claimed stake share)"
                );
                if (winningPool == total) assertEq(handler.feesOf(id), 0, "no fee when nobody lost");
            } else {
                assertEq(handler.feesOf(id), 0, "fees only on resolution");
            }
            if (c.state == PariMatchBase.MarketState.Cancelled) {
                assertLe(handler.refundsOf(id), total, "refunds within the pool");
            } else {
                assertEq(handler.refundsOf(id), 0, "refunds only on cancelled markets");
            }
        }
    }

    function invariant_RouterHoldsNothing() public view {
        assertEq(usdc.balanceOf(address(router)), 0);
        assertEq(address(router).balance, 0);
    }

    function invariant_LeaderboardCoversLockedPrizes() public view {
        assertGe(usdc.balanceOf(address(leaderboard)), leaderboard.lockedInClosedEpochs());
    }

    function invariant_NoUnexpectedRevertOrSuccess() public view {
        assertEq(handler.unexpected(), 0, handler.lastUnexpected());
    }

    /// Close everything, let everyone collect: only the stray USDC may stay,
    /// with no rounding dust.
    function afterInvariant() external {
        handler.settleAll();
        assertEq(handler.unexpected(), 0, handler.lastUnexpected());
        assertEq(PariSlots.accounted(address(pari)), 0, "nothing owed after settlement");
        assertEq(usdc.balanceOf(address(pari)), handler.ghostStray(), "only stray USDC is left");
        for (uint256 id; id < handler.MARKETS(); ++id) {
            PariMatchBase.MarketCore memory c = pari.getMarketCore(id);
            if (c.state == PariMatchBase.MarketState.Resolved) {
                assertEq(PariSlots.paidOut(address(pari), id), c.resolvedNetPool, "net pool fully paid");
            }
        }
    }

    // ─── layout check ───────────────────────────────────────────────────────

    function test_StorageSlotsMatchTheLayout() public {
        address alice = makeAddr("alice");
        address bob = makeAddr("bob");
        vm.prank(admin);
        pari.openMarket(1);
        usdc.mint(alice, 3e6);
        usdc.mint(bob, 1e6);
        vm.startPrank(alice);
        usdc.approve(address(router), 3e6);
        router.placeBetWithUSDC(address(pari), 1, 0, 3e6);
        vm.stopPrank();
        vm.startPrank(bob);
        usdc.approve(address(router), 1e6);
        router.placeBetWithUSDC(address(pari), 1, 2, 1e6);
        vm.stopPrank();
        assertEq(PariSlots.accounted(address(pari)), 4e6, "_accountedUsdc slot");

        vm.prank(admin);
        pari.closeMarket(1);
        vm.prank(oracle);
        pari.resolveMarket(1, 0);
        vm.prank(alice);
        pari.claim(1);
        uint256 net = pari.getMarketCore(1).resolvedNetPool;
        assertEq(PariSlots.paidOut(address(pari), 1), net, "paidOut slot");
        assertEq(PariSlots.claimedWinStake(address(pari), 1), 3e6, "claimedWinStake slot");
        assertEq(PariSlots.accounted(address(pari)), 0);
    }

    function _owed() internal view returns (uint256 owed) {
        for (uint256 id; id < handler.MARKETS(); ++id) {
            PariMatchBase.MarketCore memory c = pari.getMarketCore(id);
            if (c.state == PariMatchBase.MarketState.Resolved) {
                owed += c.resolvedNetPool - PariSlots.paidOut(address(pari), id);
            } else if (c.state == PariMatchBase.MarketState.Cancelled) {
                owed += pari.getTotalPool(id) - handler.refundsOf(id);
            } else {
                owed += pari.getTotalPool(id);
            }
        }
    }
}

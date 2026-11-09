// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../../src/pari/BasketballPariMatch.sol";
import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";
import {StreamWalletFactory} from "../../src/streamer/StreamWalletFactory.sol";
import {StreamWallet}        from "../../src/streamer/StreamWallet.sol";
import {LeaderboardRewards}  from "../../src/leaderboard/LeaderboardRewards.sol";

interface IKayenV2Router {
    function factory() external view returns (address);
    function WETH() external view returns (address);
}

/**
 * @title Chiliz mainnet end-to-end, real Kayen pools (fork)
 * @notice Deploys the audited stack on a fork of Chiliz mainnet, wired to the
 *         real Kayen V2 router, wrapper factory, WCHZ, USDC and fan tokens,
 *         and runs the money paths against live pools. The contracts already
 *         deployed on mainnet are the working baseline: the BASELINE tests
 *         replay the same action on both stacks from the same state and
 *         compare the results.
 *
 *         Through anvil (recommended, pinned block, shared with cast):
 *           anvil --fork-url https://rpc.ankr.com/chiliz --port 8545 \
 *                 --balance 1000000 --auto-impersonate
 *           CHILIZ_RPC_URL=http://127.0.0.1:8545 \
 *             forge test --match-path "test/fork/ChilizKayenE2EFork.t.sol" -vv
 */
contract ChilizKayenE2EForkTest is Test {
    // ── Real Chiliz mainnet infrastructure ───────────────────────────────────
    address constant USDC            = 0xa37936F56249965d407E39347528a1A91eB1cbef;
    address constant WCHZ            = 0x677F7e16C7Dd57be1D4C8aD1244883214953DC47;
    address constant KAYEN_ROUTER    = 0x1918EbB39492C8b98865c5E53219c3f1AE79e76F;
    address constant KAYEN_FACTORY   = 0xE2918AA38088878546c1A18F2F9b1BC83297fdD3;
    address constant WRAPPER_FACTORY = 0xAEdcF2bf41891777c5F638A098bbdE1eDBa7B264;

    // ── Fan tokens: 0-decimals CAP-20, pools live on their wrapped version ───
    address constant PSG    = 0xc2661815C69c2B3924D3dd0c2C1358A1E38A3105;
    address constant SAUBER = 0xcf6D626203011e5554C82baBE17dd7CDC4Ee86BF;
    address constant BAR    = 0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b;
    address constant CITY   = 0x6401b29F40a02578Ae44241560625232A01B3F79;
    address constant LUFC   = 0xF67A8a4299f7EBF0c58DbFb38941D0867f300C30;
    address constant ACM    = 0xF9C0F80a6c67b1B39bdDF00ecD57f2533ef5b688;
    address constant OG     = 0x19cA0F4aDb29e2130A56b9C9422150B5dc07f294;
    address constant JUV    = 0x454038003a93cf44766aF352F74bad6B745616D0;

    // ── Other token families the UI can send ─────────────────────────────────
    address constant WPSG   = 0x476eF844B3E8318b3bc887a7db07a1A0FEde5557; // Kayen-wrapped, 18 dp
    address constant WBAR   = 0xbaAAEF59F4A6C11cC87FF75EAa7a386e753b2666; // Kayen-wrapped, 18 dp
    address constant CHZINU = 0xF3928e7871eb136DD6648Ad08aEEF6B6ea893001; // 4 dp, trades raw
    address constant SCCP   = 0x20BFeab58f8bE903753d037Ba7e307fc77c97388; // pool drained to dust

    // ── Live deployment = the version that already works ─────────────────────
    NetworkRouter constant LIVE_ROUTER  = NetworkRouter(payable(0x72befD1186f24Cba64266995cD627B79C799292a));
    PariMatchFactory constant LIVE_FACTORY = PariMatchFactory(payable(0x1e7F73d14D3E87205A766A14eC5847C12FEBfFd7));
    address constant LIVE_OWNER = 0xdaE0c2e9C16E8eC5fc9CBE04808AE549bb80E387;

    bytes32 constant WINNER = keccak256("WINNER");

    address governance = makeAddr("governanceSafe");
    address matchAdmin = makeAddr("matchAdmin");
    address oracle     = makeAddr("oracle");
    address alice      = makeAddr("alice");
    address bob        = makeAddr("bob");
    address streamer   = makeAddr("streamer");

    PariMatchFactory    factory;
    NetworkRouter       router;
    StreamWalletFactory streamFactory;
    LeaderboardRewards  leaderboard;
    FootballPariMatch   m;

    function setUp() public {
        vm.createSelectFork(vm.envOr("CHILIZ_RPC_URL", string("https://rpc.chiliz.com")));
        assertEq(block.chainid, 88888, "not a Chiliz mainnet fork");

        factory = new PariMatchFactory(
            address(new FootballPariMatch()), address(new BasketballPariMatch()), governance
        );
        streamFactory = new StreamWalletFactory(address(this), governance, 500, KAYEN_ROUTER, USDC);
        router = new NetworkRouter(KAYEN_ROUTER, KAYEN_ROUTER, USDC, WCHZ, governance, 500);
        LeaderboardRewards impl = new LeaderboardRewards();
        leaderboard = LeaderboardRewards(address(new ERC1967Proxy(
            address(impl), abi.encodeCall(LeaderboardRewards.initialize, (USDC, address(this), address(0)))
        )));
        leaderboard.initializeV2();

        factory.setWiring(USDC, governance, address(router));
        factory.setLeaderboardWiring(address(leaderboard), 100);
        router.setMatchFactory(address(factory));
        streamFactory.setSwapRouter(address(router));
        router.setStreamWalletFactory(address(streamFactory));
        router.setWrapperFactory(WRAPPER_FACTORY);
        leaderboard.setMatchFactory(address(factory));

        m = _newMatch();

        vm.deal(alice, 100_000 ether);
        vm.deal(bob, 100_000 ether);
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    function _newMatch() internal returns (FootballPariMatch n) {
        n = FootballPariMatch(payable(factory.createFootballMatch("Fork FC vs Kayen United", matchAdmin, oracle)));
        vm.startPrank(matchAdmin);
        n.addMarketWithLine(WINNER, 0);
        n.openMarket(0);
        vm.stopPrank();
    }

    function _newLiveMatch() internal returns (FootballPariMatch n) {
        vm.startPrank(LIVE_OWNER);
        n = FootballPariMatch(payable(LIVE_FACTORY.createFootballMatch("Baseline FC vs Kayen United", LIVE_OWNER, oracle)));
        n.addMarketWithLine(WINNER, 0);
        n.openMarket(0);
        vm.stopPrank();
    }

    function _deadline() internal view returns (uint256) {
        return block.timestamp + 1 hours;
    }

    function _min(uint256 quote) internal pure returns (uint256) {
        return (quote * 98) / 100;
    }

    function _betToken(NetworkRouter r, FootballPariMatch target, address token, uint256 amount, uint256 min, address who)
        internal
    {
        deal(token, who, amount);
        vm.startPrank(who);
        IERC20(token).approve(address(r), amount);
        r.placeBetWithToken(token, amount, address(target), 0, 0, min, _deadline());
        vm.stopPrank();
    }

    function _checkTokenBet(string memory symbol, address token, uint256 amount, uint256 expectedPathLen) internal {
        address bettor = makeAddr(string.concat("bettor-", symbol));
        uint256 quote = router.quoteTokenToUSDC(token, amount);
        assertGt(quote, 0, string.concat(symbol, ": no live quote"));

        (, , address[] memory path, ) = router.routeFor(token, amount);
        assertEq(path.length, expectedPathLen, string.concat(symbol, ": unexpected route"));
        assertEq(path[path.length - 2], WCHZ, string.concat(symbol, ": not hubbed on WCHZ"));
        assertEq(path[path.length - 1], USDC, string.concat(symbol, ": does not end in USDC"));

        uint256 escrowBefore = IERC20(USDC).balanceOf(address(m));
        _betToken(router, m, token, amount, _min(quote), bettor);

        uint256 stake = m.getUserStake(0, bettor, 0);
        console2.log(symbol, "quote (uUSDC):", quote, "stake:");
        console2.log(stake);
        assertEq(IERC20(token).balanceOf(bettor), 0, string.concat(symbol, ": tokens not pulled"));
        assertEq(stake, quote, string.concat(symbol, ": stake differs from the quote"));
        assertEq(IERC20(USDC).balanceOf(address(m)) - escrowBefore, stake, string.concat(symbol, ": match is not the escrow"));
        assertEq(IERC20(token).balanceOf(address(router)), 0, string.concat(symbol, ": dust left in the router"));
    }

    // ── Environment ──────────────────────────────────────────────────────────

    function test_Env_RealKayenInfrastructure() public view {
        assertEq(IKayenV2Router(KAYEN_ROUTER).factory(), KAYEN_FACTORY);
        assertEq(IKayenV2Router(KAYEN_ROUTER).WETH(), WCHZ);
        assertEq(address(LIVE_ROUTER.tokenRouter()), KAYEN_ROUTER, "live router uses the same Kayen router");
        assertGt(router.quoteTokenToUSDC(WCHZ, 1_000 ether), 0, "WCHZ/USDC pool is priced");
    }

    // ── Betting, one test per payment type ───────────────────────────────────

    function test_Bet_USDC() public {
        deal(USDC, alice, 5e6);
        vm.startPrank(alice);
        IERC20(USDC).approve(address(router), 5e6);
        router.placeBetWithUSDC(address(m), 0, 0, 5e6);
        vm.stopPrank();
        assertEq(m.getUserStake(0, alice, 0), 5e6);
        assertEq(IERC20(USDC).balanceOf(address(m)), 5e6);
    }

    function test_Bet_NativeCHZ() public {
        uint256 quote = router.quoteTokenToUSDC(WCHZ, 1_000 ether);
        vm.prank(alice);
        router.placeBetWithCHZ{value: 1_000 ether}(address(m), 0, 0, _min(quote), _deadline());
        assertEq(m.getUserStake(0, alice, 0), quote, "stake equals the live quote");
        assertEq(IERC20(USDC).balanceOf(address(m)), quote);
    }

    function test_Bet_FanTokens_WrappedRoute() public {
        _checkTokenBet("PSG", PSG, 5, 3);
        _checkTokenBet("SAUBER", SAUBER, 20, 3);
        _checkTokenBet("BAR", BAR, 5, 3);
        _checkTokenBet("CITY", CITY, 5, 3);
        _checkTokenBet("LUFC", LUFC, 20, 3);
        _checkTokenBet("ACM", ACM, 5, 3);
        _checkTokenBet("OG", OG, 5, 3);
        _checkTokenBet("JUV", JUV, 5, 3);
    }

    function test_Bet_AlreadyWrappedFanTokens() public {
        _checkTokenBet("WPSG", WPSG, 2 ether, 3);
        _checkTokenBet("WBAR", WBAR, 2 ether, 3);
    }

    function test_Bet_FourDecimalsTokenTradesRaw() public {
        (address swapToken, , , ) = router.routeFor(CHZINU, 1e12);
        assertEq(swapToken, CHZINU, "raw pool beats the empty wrapper");
        _checkTokenBet("ChzInu", CHZINU, 1e12, 3);
    }

    // ── Slippage protection (M-07) against real pools ────────────────────────

    function test_Slippage_ZeroMinOutRejected_CHZ() public {
        vm.prank(alice);
        vm.expectRevert(NetworkRouter.SlippageNotSet.selector);
        router.placeBetWithCHZ{value: 1_000 ether}(address(m), 0, 0, 0, _deadline());
    }

    function test_Slippage_ZeroMinOutRejected_FanToken() public {
        deal(PSG, alice, 5);
        vm.startPrank(alice);
        IERC20(PSG).approve(address(router), 5);
        vm.expectRevert(NetworkRouter.SlippageNotSet.selector);
        router.placeBetWithToken(PSG, 5, address(m), 0, 0, 0, _deadline());
        vm.stopPrank();
    }

    function test_Slippage_MinOutAboveMarketReverts() public {
        uint256 quote = router.quoteTokenToUSDC(PSG, 5);
        deal(PSG, alice, 5);
        vm.startPrank(alice);
        IERC20(PSG).approve(address(router), 5);
        vm.expectRevert();
        router.placeBetWithToken(PSG, 5, address(m), 0, 0, quote + 1, _deadline());
        vm.stopPrank();
        assertEq(IERC20(PSG).balanceOf(alice), 5, "failed swap keeps the tokens");
    }

    /// @dev The UI still offers SCCP but its pool went from 515k CHZ to dust.
    function test_DrainedPool_SCCP_QuoteIsWorthless() public view {
        uint256 quote = router.quoteTokenToUSDC(SCCP, 100);
        assertLt(quote, 10_000, "100 SCCP is worth less than MIN_STAKE");
    }

    // ── Full round: fan token + CHZ bets, resolution, claim, fees ────────────

    function test_FullRound_FanTokenVersusCHZ() public {
        uint256 q = router.quoteTokenToUSDC(PSG, 10);
        _betToken(router, m, PSG, 10, _min(q), alice);

        uint256 qb = router.quoteTokenToUSDC(WCHZ, 200 ether);
        vm.prank(bob);
        router.placeBetWithCHZ{value: 200 ether}(address(m), 0, 2, _min(qb), _deadline());

        uint256 total = m.getTotalPool(0);
        assertEq(IERC20(USDC).balanceOf(address(m)), total, "escrow covers the pool");

        vm.prank(matchAdmin);
        m.closeMarket(0);
        vm.prank(oracle);
        m.resolveMarket(0, 0);

        uint256 before = IERC20(USDC).balanceOf(alice);
        vm.prank(alice);
        m.claim(0);
        uint256 payout = IERC20(USDC).balanceOf(alice) - before;

        assertEq(payout, total - (total * 100) / 10_000 - (total * 100) / 10_000, "net pool after the 2 % fee");
        assertGt(IERC20(USDC).balanceOf(governance), 0, "company fee paid");
        assertGt(leaderboard.epochFees(0), 0, "leaderboard fee notified");
        assertGt(leaderboard.epochScore(0, alice), 0, "net profit scored");
    }

    // ── Streaming ────────────────────────────────────────────────────────────

    function test_Stream_DonateWithFanToken() public {
        uint256 q = router.quoteTokenToUSDC(BAR, 5);
        deal(BAR, alice, 5);
        vm.startPrank(alice);
        IERC20(BAR).approve(address(router), 5);
        router.donateWithToken(BAR, 5, streamer, "allez", _min(q), _deadline());
        vm.stopPrank();

        address wallet = streamFactory.getWallet(streamer);
        uint256 fee = (q * 500) / 10_000;
        assertEq(IERC20(USDC).balanceOf(wallet), q - fee, "streamer share escrowed");
        assertEq(IERC20(USDC).balanceOf(governance), fee, "5 % platform fee");
    }

    function test_Stream_SubscribeWithCHZ_AfterPriceSet() public {
        address wallet = streamFactory.deployWalletFor(streamer);
        vm.prank(streamer);
        StreamWallet(payable(wallet)).setSubscriptionPricing(1e6, 30 days); // 1 USDC / 30 days

        uint256 q = router.quoteTokenToUSDC(WCHZ, 200 ether);
        assertGe(_min(q), 1e6, "enough CHZ for one period");
        vm.prank(alice);
        router.subscribeWithCHZ{value: 200 ether}(streamer, 30 days, _min(q), _deadline());
        assertTrue(StreamWallet(payable(wallet)).isSubscribed(alice));
    }

    // ── BASELINE: same action on the live contracts and on the audited stack ─

    function test_Baseline_QuotesMatchLiveRouter() public view {
        address[6] memory tokens = [PSG, SAUBER, BAR, CITY, ACM, WCHZ];
        uint256[6] memory amounts = [uint256(5), 20, 5, 5, 5, 1_000 ether];
        for (uint256 i; i < tokens.length; ++i) {
            assertEq(router.quoteTokenToUSDC(tokens[i], amounts[i]), LIVE_ROUTER.quoteTokenToUSDC(tokens[i], amounts[i]));
        }
    }

    function test_Baseline_CHZBetSameStakeAsLiveRouter() public {
        uint256 quote = router.quoteTokenToUSDC(WCHZ, 1_000 ether);
        uint256 snap = vm.snapshotState();

        FootballPariMatch live = _newLiveMatch();
        vm.prank(alice);
        LIVE_ROUTER.placeBetWithCHZ{value: 1_000 ether}(address(live), 0, 0, _min(quote), _deadline());
        uint256 liveStake = live.getUserStake(0, alice, 0);

        vm.revertToState(snap);
        vm.prank(alice);
        router.placeBetWithCHZ{value: 1_000 ether}(address(m), 0, 0, _min(quote), _deadline());

        assertGt(liveStake, 0);
        assertEq(m.getUserStake(0, alice, 0), liveStake, "same CHZ gives the same stake");
    }

    function test_Baseline_FanTokenBetSameStakeAsLiveRouter() public {
        uint256 quote = router.quoteTokenToUSDC(PSG, 5);
        uint256 snap = vm.snapshotState();

        FootballPariMatch live = _newLiveMatch();
        _betToken(LIVE_ROUTER, live, PSG, 5, _min(quote), alice);
        uint256 liveStake = live.getUserStake(0, alice, 0);

        vm.revertToState(snap);
        _betToken(router, m, PSG, 5, _min(quote), alice);

        assertGt(liveStake, 0);
        assertEq(m.getUserStake(0, alice, 0), liveStake, "same PSG gives the same stake");
    }

    function test_Baseline_FullRoundSamePayoutAsLiveContracts() public {
        uint256 qa = router.quoteTokenToUSDC(PSG, 10);
        uint256 qb = router.quoteTokenToUSDC(WCHZ, 200 ether);
        uint256 snap = vm.snapshotState();

        FootballPariMatch live = _newLiveMatch();
        _betToken(LIVE_ROUTER, live, PSG, 10, _min(qa), alice);
        vm.prank(bob);
        LIVE_ROUTER.placeBetWithCHZ{value: 200 ether}(address(live), 0, 2, _min(qb), _deadline());
        vm.prank(LIVE_OWNER);
        live.closeMarket(0);
        vm.prank(oracle);
        live.resolveMarket(0, 0);
        uint256 before = IERC20(USDC).balanceOf(alice);
        vm.prank(alice);
        live.claim(0);
        uint256 livePayout = IERC20(USDC).balanceOf(alice) - before;

        vm.revertToState(snap);
        _betToken(router, m, PSG, 10, _min(qa), alice);
        vm.prank(bob);
        router.placeBetWithCHZ{value: 200 ether}(address(m), 0, 2, _min(qb), _deadline());
        vm.prank(matchAdmin);
        m.closeMarket(0);
        vm.prank(oracle);
        m.resolveMarket(0, 0);
        before = IERC20(USDC).balanceOf(alice);
        vm.prank(alice);
        m.claim(0);

        assertGt(livePayout, 0);
        assertEq(IERC20(USDC).balanceOf(alice) - before, livePayout, "same bets give the same payout");
    }

    // ── Intended differences with the live version ───────────────────────────

    function test_Diff_LiveRouterAcceptsZeroMinOut_AuditedDoesNot() public {
        FootballPariMatch live = _newLiveMatch();
        vm.prank(alice);
        LIVE_ROUTER.placeBetWithCHZ{value: 1_000 ether}(address(live), 0, 0, 0, _deadline());
        assertGt(live.getUserStake(0, alice, 0), 0, "live version swaps with no protection");

        vm.prank(alice);
        vm.expectRevert(NetworkRouter.SlippageNotSet.selector);
        router.placeBetWithCHZ{value: 1_000 ether}(address(m), 0, 0, 0, _deadline());
    }

    function test_Diff_AuditedSubscriptionNeedsAPrice() public {
        address wallet = streamFactory.deployWalletFor(streamer);
        uint256 q = router.quoteTokenToUSDC(WCHZ, 200 ether);
        vm.prank(alice);
        vm.expectRevert(StreamWallet.SubscriptionPriceNotSet.selector);
        router.subscribeWithCHZ{value: 200 ether}(streamer, 30 days, _min(q), _deadline());
        assertFalse(StreamWallet(payable(wallet)).isSubscribed(alice));
    }
}

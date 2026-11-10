// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test} from "forge-std/Test.sol";
import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../../src/pari/BasketballPariMatch.sol";
import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";
import {StreamWalletFactory} from "../../src/streamer/StreamWalletFactory.sol";
import {StreamWallet}        from "../../src/streamer/StreamWallet.sol";
import {LeaderboardRewards}  from "../../src/leaderboard/LeaderboardRewards.sol";

/**
 * @title Base Sepolia integration (fork)
 * @notice Lot 5: this suite deploys the whole platform on a fork of Base
 *         Sepolia (84532), wired like script/DeployAll.s.sol with a V2 router
 *         set in KAYEN_ROUTER, and runs the real money paths against Uniswap
 *         V2 Router02 (its ABI matches IKayenMasterRouterV2 / IKayenRouter)
 *         and Circle USDC. DeployAll's default on Base is the pool adapter,
 *         covered by test/fork/BaseDexAdapterFork.t.sol. "CHZ" in function
 *         names means native ETH on Base, "WCHZ" means WETH.
 *         Needs network access to https://sepolia.base.org (override with
 *         BASE_SEPOLIA_RPC_URL). The WETH/USDC V2 pair is thin (~150 USDC):
 *         amounts stay tiny.
 *         Run: forge test --match-path "test/fork/BaseSepoliaFork.t.sol" -vv
 */
contract BaseSepoliaForkTest is Test {
    address constant UNISWAP_V2_ROUTER = 0x1689E7B1F10000AE47eBfE339a4f69dECd19F602;
    address constant WETH              = 0x4200000000000000000000000000000000000006;
    address constant USDC              = 0x036CbD53842c5426634e7929541eC2318f3dCF7e;
    bytes32 constant WINNER            = keccak256("WINNER");

    address governance = makeAddr("governanceSafe"); // beacon owner + treasury
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
        vm.createSelectFork(vm.envOr("BASE_SEPOLIA_RPC_URL", string("https://sepolia.base.org")));
        assertEq(block.chainid, 84532);

        // Same sequence as DeployAll (deployer = this test).
        factory = new PariMatchFactory(
            address(new FootballPariMatch()), address(new BasketballPariMatch()), governance
        );
        streamFactory = new StreamWalletFactory(address(this), governance, 500, UNISWAP_V2_ROUTER, USDC);
        router = new NetworkRouter(UNISWAP_V2_ROUTER, UNISWAP_V2_ROUTER, USDC, WETH, governance, 500);
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
        leaderboard.setMatchFactory(address(factory));

        m = FootballPariMatch(payable(factory.createFootballMatch("Base FC vs Sepolia United", matchAdmin, oracle)));
        vm.startPrank(matchAdmin);
        m.addMarketWithLine(WINNER, 0);
        m.openMarket(0);
        vm.stopPrank();

        vm.deal(alice, 1 ether);
        vm.deal(bob, 1 ether);
    }

    /// 90 % of the live quote: a realistic amountOutMin (M-07 forbids 0).
    function _minOut(uint256 ethIn) internal view returns (uint256) {
        address[] memory path = new address[](2);
        path[0] = WETH;
        path[1] = USDC;
        (bool ok, bytes memory ret) = UNISWAP_V2_ROUTER.staticcall(
            abi.encodeWithSignature("getAmountsOut(uint256,address[])", ethIn, path)
        );
        require(ok, "quote failed");
        uint256[] memory amounts = abi.decode(ret, (uint256[]));
        return (amounts[1] * 90) / 100;
    }

    function test_Fork_Base_PlaceBetWithNativeEth() public {
        uint256 minOut = _minOut(0.0005 ether);
        assertGt(minOut, 0, "pool has liquidity");
        vm.prank(alice);
        router.placeBetWithNativeToken{value: 0.0005 ether}(address(m), 0, 0, minOut, block.timestamp + 1 hours);
        uint256 stake = m.getUserStake(0, alice, 0);
        assertGe(stake, minOut);
        assertEq(IERC20(USDC).balanceOf(address(m)), stake, "the match is the escrow");
    }

    function test_Fork_Base_FullBettingRound() public {
        uint256 minA = _minOut(0.0005 ether);
        vm.prank(alice);
        router.placeBetWithNativeToken{value: 0.0005 ether}(address(m), 0, 0, minA, block.timestamp + 1 hours);
        uint256 minB = _minOut(0.0003 ether);
        vm.prank(bob);
        router.placeBetWithNativeToken{value: 0.0003 ether}(address(m), 0, 2, minB, block.timestamp + 1 hours);

        uint256 total = m.getTotalPool(0);
        vm.prank(matchAdmin);
        m.closeMarket(0);
        vm.prank(oracle);
        m.resolveMarket(0, 0);

        uint256 before = IERC20(USDC).balanceOf(alice);
        vm.prank(alice);
        m.claim(0);
        uint256 payout = IERC20(USDC).balanceOf(alice) - before;
        // Alice is the only winner: she takes the whole net pool (1 % company
        // + 1 % leaderboard, each floored).
        assertEq(payout, total - (total * 100) / 10_000 - (total * 100) / 10_000, "net pool after the 2 % fee");
        assertGt(leaderboard.epochScore(0, alice), 0, "net profit scored");
        assertGt(leaderboard.epochFees(0), 0, "1 % fee notified to the leaderboard");
    }

    function test_Fork_Base_DonateAndSubscribeWithNativeEth() public {
        address w = streamFactory.deployWalletFor(streamer);
        vm.prank(streamer);
        StreamWallet(payable(w)).setSubscriptionPricing(1e5, 30 days); // 0.10 USDC / 30 d

        uint256 minOut = _minOut(0.0002 ether);
        vm.prank(alice);
        router.donateWithNativeToken{value: 0.0002 ether}(streamer, "gm from Base", minOut, block.timestamp + 1 hours);
        assertGt(StreamWallet(payable(w)).availableBalance(), 0);
        assertGt(IERC20(USDC).balanceOf(governance), 0, "platform fee to treasury");

        minOut = _minOut(0.0001 ether);
        vm.prank(bob);
        router.subscribeWithNativeToken{value: 0.0001 ether}(streamer, 30 days, minOut, block.timestamp + 1 hours);
        assertTrue(StreamWallet(payable(w)).isSubscribed(bob));
    }

    function test_Fork_Base_RouterQuoteMatchesWethPath() public view {
        (address swapToken,, address[] memory path) = router.swapRouteFor(WETH);
        assertEq(swapToken, WETH);
        assertEq(path.length, 2, "WETH routes directly to USDC");
        assertGt(router.quoteTokenToUSDC(WETH, 0.0005 ether), 0);
    }
}

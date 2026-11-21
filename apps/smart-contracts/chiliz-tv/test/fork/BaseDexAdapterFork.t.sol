// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../../src/pari/BasketballPariMatch.sol";
import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";
import {StreamWalletFactory} from "../../src/streamer/StreamWalletFactory.sol";
import {StreamWallet}        from "../../src/streamer/StreamWallet.sol";
import {ConcentratedPoolAdapter} from "../../src/swap/uniswapV3/ConcentratedPoolAdapter.sol";
import {IConcentratedPool}       from "../../src/interfaces/IConcentratedPool.sol";
import {BaseDexConfig}           from "../../script/config/BaseDexConfig.sol";

/**
 * @title ConcentratedPoolAdapter on Base (fork)
 * @notice Deploys the adapter from BaseDexConfig, wires it behind an unmodified
 *         NetworkRouter and exercises the real pools: Aerodrome Slipstream
 *         on Base mainnet, Uniswap V3 on Base Sepolia. "CHZ" in router
 *         function names means native ETH on Base.
 *
 *         `--evm-version cancun` is needed because the fee hooks of the
 *         Aerodrome pools use Cancun opcodes and the project default is
 *         shanghai (Chiliz). It only changes what the tests run on.
 *
 *         Through anvil:
 *           BASE_RPC_URL=http://127.0.0.1:8547 BASE_SEPOLIA_RPC_URL=http://127.0.0.1:8548 \
 *             forge test --evm-version cancun --match-path "test/fork/BaseDexAdapterFork.t.sol" -vv
 */
abstract contract BaseDexAdapterForkTest is Test {
    bytes32 constant WINNER = keccak256("WINNER");

    address governance = makeAddr("governanceSafe");
    address matchAdmin = makeAddr("matchAdmin");
    address oracle     = makeAddr("oracle");
    address alice      = makeAddr("alice");
    address taker      = makeAddr("taker");
    address streamer   = makeAddr("streamer");

    ConcentratedPoolAdapter adapter;
    PariMatchFactory        factory;
    StreamWalletFactory     streamFactory;
    NetworkRouter           router;
    FootballPariMatch       m;
    address weth;
    address usdc;

    function _rpcUrl() internal view virtual returns (string memory);
    function _chainId() internal pure virtual returns (uint256);
    function _wethPool() internal pure virtual returns (address);
    function _ethAmounts() internal pure virtual returns (uint256[] memory);
    function _usdcAmounts() internal pure virtual returns (uint256[] memory);
    function _betSizeEth() internal pure virtual returns (uint256);

    function setUp() public {
        vm.createSelectFork(_rpcUrl());
        assertEq(block.chainid, _chainId());
        try IConcentratedPool(_wethPool()).fee() returns (uint24) {} catch {
            revert("pool fee() failed: run with --evm-version cancun");
        }

        BaseDexConfig.Network memory net = BaseDexConfig.forChain(block.chainid);
        weth = net.weth;
        usdc = net.usdc;
        adapter = BaseDexConfig.deployAdapter(net);

        factory = new PariMatchFactory(
            address(new FootballPariMatch()), address(new BasketballPariMatch()), governance
        );
        streamFactory = new StreamWalletFactory(address(this), governance, 500, address(adapter), usdc);
        router = new NetworkRouter(address(adapter), address(adapter), usdc, weth, governance, 500);
        factory.setWiring(usdc, governance, address(router));
        router.setMatchFactory(address(factory));
        streamFactory.setSwapRouter(address(router));
        router.setStreamWalletFactory(address(streamFactory));

        m = FootballPariMatch(payable(factory.createFootballMatch("Base FC vs Adapter United", matchAdmin, oracle)));
        vm.startPrank(matchAdmin);
        m.addMarketWithLine(WINNER, 0);
        m.openMarket(0);
        vm.stopPrank();

        vm.deal(alice, 1_000 ether);
    }

    function verifyConfig(BaseDexConfig.Network memory net) external view {
        BaseDexConfig.verify(net);
    }

    function _path(address tokenIn, address tokenOut) internal pure returns (address[] memory path) {
        path = new address[](2);
        path[0] = tokenIn;
        path[1] = tokenOut;
    }

    /// @dev Quote then swap in the same state: the output must be equal to the wei.
    function _assertQuoteIsExact(address tokenIn, address tokenOut, uint256 amountIn) internal returns (uint256 out) {
        address[] memory path = _path(tokenIn, tokenOut);
        uint256 id = vm.snapshotState();

        uint256[] memory quoted = adapter.getAmountsOut(amountIn, path);
        deal(tokenIn, taker, amountIn);
        vm.startPrank(taker);
        IERC20(tokenIn).approve(address(adapter), amountIn);
        uint256[] memory swapped = adapter.swapExactTokensForTokens(amountIn, 1, path, taker, block.timestamp);
        vm.stopPrank();

        assertEq(swapped.length, quoted.length);
        for (uint256 i; i < swapped.length; ++i) {
            assertEq(swapped[i], quoted[i], "quote equals swap");
        }
        out = swapped[swapped.length - 1];
        assertEq(IERC20(tokenOut).balanceOf(taker), out, "taker received the output");
        assertEq(IERC20(tokenIn).balanceOf(address(adapter)), 0, "no input left in the adapter");
        assertEq(IERC20(tokenOut).balanceOf(address(adapter)), 0, "no output left in the adapter");

        vm.revertToState(id);
    }

    function _betWithToken(address token, uint256 amount) internal {
        uint256 quote = router.quoteTokenToUSDC(token, amount);
        assertGt(quote, 0, "token has a quote");

        deal(token, alice, amount);
        vm.startPrank(alice);
        IERC20(token).approve(address(router), amount);
        router.placeBetWithToken(token, amount, address(m), 0, 0, quote, block.timestamp + 1 hours);
        vm.stopPrank();

        assertEq(m.getUserStake(0, alice, 0), quote, "the stake is exactly the quote");
        assertEq(IERC20(usdc).balanceOf(address(m)), quote, "the match is the escrow");
        assertEq(IERC20(token).balanceOf(address(adapter)), 0, "nothing left in the adapter");
        assertEq(IERC20(token).balanceOf(address(router)), 0, "nothing left in the router");
        assertEq(IERC20(usdc).balanceOf(address(router)), 0, "router holds no USDC at rest");
    }

    function test_Config_MatchesTheChain() public view {
        BaseDexConfig.Network memory net = BaseDexConfig.forChain(block.chainid);
        BaseDexConfig.verify(net);
        for (uint256 i; i < net.routes.length; ++i) {
            BaseDexConfig.RouteSpec memory route = net.routes[i];
            assertEq(adapter.getRoute(route.tokenIn, route.tokenOut).length, route.pools.length);
        }
    }

    function test_Config_RefusesAWrongSymbol() public {
        BaseDexConfig.Network memory net = BaseDexConfig.forChain(block.chainid);
        net.tokens[1].symbol = "NOPE";
        vm.expectRevert(bytes("BaseDexConfig: wrong token for NOPE"));
        this.verifyConfig(net);
    }

    function test_Config_RefusesAPoolFromAnotherFactory() public {
        BaseDexConfig.Network memory net = BaseDexConfig.forChain(block.chainid);
        net.pools[0].factory = makeAddr("otherFactory");
        vm.expectRevert(bytes("BaseDexConfig: pool from another factory"));
        this.verifyConfig(net);
    }

    function test_Quote_WethToUsdcIsExact() public {
        uint256[] memory amounts = _ethAmounts();
        for (uint256 i; i < amounts.length; ++i) {
            uint256 out = _assertQuoteIsExact(weth, usdc, amounts[i]);
            console2.log("WETH in / USDC out", amounts[i], out);
        }
    }

    function test_Quote_UsdcToWethIsExact() public {
        address[] memory pools = new address[](1);
        pools[0] = _wethPool();
        adapter.setRoute(usdc, weth, pools);

        uint256[] memory amounts = _usdcAmounts();
        for (uint256 i; i < amounts.length; ++i) {
            uint256 out = _assertQuoteIsExact(usdc, weth, amounts[i]);
            console2.log("USDC in / WETH out", amounts[i], out);
        }
    }

    function test_Bet_WithNativeEthStakesExactlyTheQuote() public {
        uint256 amount = _betSizeEth();
        uint256 quote = router.quoteTokenToUSDC(weth, amount);
        assertGt(quote, 0);

        uint256 gasBefore = gasleft();
        vm.prank(alice);
        router.placeBetWithNativeToken{value: amount}(address(m), 0, 0, quote, block.timestamp + 1 hours);
        console2.log("placeBetWithNativeToken gas", gasBefore - gasleft());

        assertEq(m.getUserStake(0, alice, 0), quote, "the stake is exactly the quote");
        assertEq(IERC20(usdc).balanceOf(address(m)), quote, "the match is the escrow");
        assertEq(address(adapter).balance, 0);
        assertEq(IERC20(weth).balanceOf(address(adapter)), 0);
    }

    function test_Bet_WithWeth() public {
        _betWithToken(weth, _betSizeEth());
    }

    function test_Bet_RevertsWhenTheMinimumIsNotMet() public {
        uint256 amount = _betSizeEth();
        uint256 quote = router.quoteTokenToUSDC(weth, amount);
        vm.prank(alice);
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolAdapter.InsufficientOutput.selector, quote, quote + 1));
        router.placeBetWithNativeToken{value: amount}(address(m), 0, 0, quote + 1, block.timestamp + 1 hours);
        assertEq(m.getUserStake(0, alice, 0), 0);
    }

    function test_Donate_WithNativeEth() public {
        uint256 amount = _betSizeEth();
        address wallet = streamFactory.deployWalletFor(streamer);
        uint256 quote = router.quoteTokenToUSDC(weth, amount);

        vm.prank(alice);
        router.donateWithNativeToken{value: amount}(streamer, "gm from Base", quote, block.timestamp + 1 hours);

        uint256 fee = (quote * 500) / 10_000;
        assertEq(IERC20(usdc).balanceOf(governance), fee, "platform fee");
        assertEq(StreamWallet(payable(wallet)).availableBalance(), quote - fee);
    }

    /// @dev More than a full-range position can absorb: refused whole, nothing is kept.
    function test_Swap_RefusesAnAmountThePoolCannotAbsorb() public {
        uint256 huge = 1e40;
        deal(weth, taker, huge);
        vm.startPrank(taker);
        IERC20(weth).approve(address(adapter), huge);
        vm.expectPartialRevert(ConcentratedPoolAdapter.PartialFill.selector);
        adapter.swapExactTokensForTokens(huge, 1, _path(weth, usdc), taker, block.timestamp);
        vm.stopPrank();
        assertEq(IERC20(weth).balanceOf(taker), huge, "input untouched");
    }
}

contract BaseMainnetDexAdapterForkTest is BaseDexAdapterForkTest {
    address constant CHZ    = 0x70c8392DE9b39a1E48d12A70Af6FF4Be25D6D0A2;
    address constant PSG    = 0xDD15623d107c639aF0C5127AFFA26d3f20327EC8;
    address constant AFC    = 0x580edA966a8129C3c01D149871B47feFcC599D28;
    address constant PEPPER = 0x5e985E4BCa4664E985f3FaF8140EbA25b10E28C2;
    address constant MENGO  = 0x8269C9930791B0f3339519aB742Eb08413bEb335;
    address constant POOL_CHZ_USDC = 0xF97dc64314813De750169Ce924C92564bc9fF411;
    address constant POOL_PSG_USDC = 0xce9d679f6451EC5B6B9ECbE49A59e59Ce24bbe2B;
    address constant POOL_AFC_USDC = 0x3B62856717d896b0fdBF72CacD0184e5091e5740;

    function _rpcUrl() internal view override returns (string memory) {
        return vm.envOr("BASE_RPC_URL", string("https://mainnet.base.org"));
    }
    function _chainId() internal pure override returns (uint256) { return 8453; }
    function _wethPool() internal pure override returns (address) { return 0x4A7af46bC8aBc00048c6c7920a1488DAF568366c; }
    function _betSizeEth() internal pure override returns (uint256) { return 0.01 ether; }

    function _ethAmounts() internal pure override returns (uint256[] memory a) {
        a = new uint256[](5);
        a[0] = 0.0001 ether; a[1] = 0.01 ether; a[2] = 1 ether; a[3] = 100 ether; a[4] = 1_000 ether;
    }

    function _usdcAmounts() internal pure override returns (uint256[] memory a) {
        a = new uint256[](3);
        a[0] = 1e6; a[1] = 10_000e6; a[2] = 1_000_000e6;
    }

    function test_Quote_FanTokensAreExact() public {
        uint256[4] memory sizes = [uint256(1e18), 100e18, 10_000e18, 60_000e18];
        for (uint256 i; i < 4; ++i) {
            console2.log("size", sizes[i] / 1e18);
            console2.log("  CHZ -> USDC", _assertQuoteIsExact(CHZ, usdc, sizes[i]));
            console2.log("  PSG -> USDC", _assertQuoteIsExact(PSG, usdc, sizes[i]));
            console2.log("  AFC -> USDC", _assertQuoteIsExact(AFC, usdc, sizes[i]));
        }
    }

    function test_Quote_PepperHopsThroughChzAndIsExact() public {
        assertEq(adapter.getRoute(PEPPER, usdc).length, 2);
        console2.log("1e9 PEPPER -> USDC", _assertQuoteIsExact(PEPPER, usdc, 1e9 * 1e18));
        console2.log("1e12 PEPPER -> USDC", _assertQuoteIsExact(PEPPER, usdc, 1e12 * 1e18));
    }

    /// @dev The tick-crossing branch must really run for the equality to mean anything.
    function test_Quote_IsExactWhenCrossingInitializedTicks() public {
        address[3] memory pools = [POOL_CHZ_USDC, POOL_PSG_USDC, POOL_AFC_USDC];
        address[3] memory tokens = [CHZ, PSG, AFC];
        uint256[3] memory sizes = [uint256(2_000_000e18), 40_000e18, 100_000e18];

        for (uint256 i; i < 3; ++i) {
            uint256 id = vm.snapshotState();
            uint128 liquidityBefore = IConcentratedPool(pools[i]).liquidity();
            _assertQuoteIsExact(tokens[i], usdc, sizes[i]);

            deal(tokens[i], taker, sizes[i]);
            vm.startPrank(taker);
            IERC20(tokens[i]).approve(address(adapter), sizes[i]);
            adapter.swapExactTokensForTokens(sizes[i], 1, _path(tokens[i], usdc), taker, block.timestamp);
            vm.stopPrank();

            uint128 liquidityAfter = IConcentratedPool(pools[i]).liquidity();
            console2.log("liquidity before/after", liquidityBefore, liquidityAfter);
            assertTrue(liquidityAfter != liquidityBefore, "swap crossed at least one initialized tick");
            vm.revertToState(id);
        }
    }

    function test_Bet_WithChz() public { _betWithToken(CHZ, 1_000e18); }
    function test_Bet_WithPsg() public { _betWithToken(PSG, 10e18); }
    function test_Bet_WithAfc() public { _betWithToken(AFC, 100e18); }
    function test_Bet_WithPepper() public { _betWithToken(PEPPER, 1e9 * 1e18); }

    function test_Bet_TokenWithoutARouteHasNoQuoteAndCannotBet() public {
        assertEq(router.quoteTokenToUSDC(MENGO, 1e18), 0);

        deal(MENGO, alice, 1e18);
        vm.startPrank(alice);
        IERC20(MENGO).approve(address(router), 1e18);
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolAdapter.RouteNotSet.selector, MENGO, usdc));
        router.placeBetWithToken(MENGO, 1e18, address(m), 0, 0, 1, block.timestamp + 1 hours);
        vm.stopPrank();
    }
}

contract BaseSepoliaDexAdapterForkTest is BaseDexAdapterForkTest {
    function _rpcUrl() internal view override returns (string memory) {
        return vm.envOr("BASE_SEPOLIA_RPC_URL", string("https://sepolia.base.org"));
    }
    function _chainId() internal pure override returns (uint256) { return 84532; }
    function _wethPool() internal pure override returns (address) { return 0x46880b404CD35c165EDdefF7421019F8dD25F4Ad; }
    function _betSizeEth() internal pure override returns (uint256) { return 0.001 ether; }

    function _ethAmounts() internal pure override returns (uint256[] memory a) {
        a = new uint256[](3);
        a[0] = 0.0001 ether; a[1] = 0.01 ether; a[2] = 1 ether;
    }

    function _usdcAmounts() internal pure override returns (uint256[] memory a) {
        a = new uint256[](3);
        a[0] = 1e6; a[1] = 100e6; a[2] = 2_000e6;
    }
}

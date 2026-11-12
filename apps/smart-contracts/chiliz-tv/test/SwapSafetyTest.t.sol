// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}    from "forge-std/Test.sol";
import {ERC20}   from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20}  from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {NetworkRouter}           from "../src/swap/NetworkRouter.sol";
import {ConcentratedPoolAdapter} from "../src/swap/uniswapV3/ConcentratedPoolAdapter.sol";
import {StreamWallet}            from "../src/streamer/StreamWallet.sol";
import {StreamWalletFactory}     from "../src/streamer/StreamWalletFactory.sol";
import {IKayenRouter}            from "../src/interfaces/IKayenRouter.sol";
import {MockUSDC}                from "./mocks/MockUSDC.sol";
import {MockKayenRouter}         from "./mocks/MockKayenRouter.sol";
import {MockConcentratedPool}    from "./mocks/MockConcentratedPool.sol";

/// V2-style DEX that mints `actualBps` of the fair output but reports the fair output plus `bonus`.
contract MisreportingDex {
    MockUSDC public immutable usdc;
    uint256 public actualBps = 10_000;
    uint256 public bonus;

    constructor(MockUSDC usdc_) {
        usdc = usdc_;
    }

    function set(uint256 actualBps_, uint256 bonus_) external {
        actualBps = actualBps_;
        bonus = bonus_;
    }

    function swapExactETHForTokens(uint256, address[] calldata path, address to, uint256)
        external
        payable
        returns (uint256[] memory amounts)
    {
        amounts = _settle(msg.value, path.length, to);
    }

    function swapExactTokensForTokens(uint256 amountIn, uint256, address[] calldata path, address to, uint256)
        external
        returns (uint256[] memory amounts)
    {
        IERC20(path[0]).transferFrom(msg.sender, address(this), amountIn);
        amounts = _settle(amountIn, path.length, to);
    }

    function getAmountsOut(uint256 amountIn, address[] calldata path) external pure returns (uint256[] memory amounts) {
        amounts = new uint256[](path.length);
        amounts[0] = amountIn;
        amounts[path.length - 1] = amountIn / 1e12;
    }

    function _settle(uint256 amountIn, uint256 hops, address to) internal returns (uint256[] memory amounts) {
        uint256 fair = amountIn / 1e12; // 1e18 in -> 1 USDC
        usdc.mint(to, (fair * actualBps) / 10_000);
        amounts = new uint256[](hops);
        amounts[0] = amountIn;
        amounts[hops - 1] = fair + bonus;
    }
}

contract SafetyToken is ERC20 {
    constructor(string memory s) ERC20(s, s) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract SafetyWeth is SafetyToken("WETH") {
    function deposit() external payable {
        _mint(msg.sender, msg.value);
    }
}

interface ISafetyCallback {
    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external;
}

/// Asks for twice the input.
contract GreedySafetyPool {
    address public immutable token0;
    address public immutable token1;

    constructor(address t0, address t1) {
        token0 = t0;
        token1 = t1;
    }

    function swap(address recipient, bool, int256 amountSpecified, uint160, bytes calldata data)
        external
        returns (int256, int256)
    {
        IERC20(token1).transfer(recipient, uint256(amountSpecified));
        ISafetyCallback(msg.sender).uniswapV3SwapCallback(amountSpecified * 2, -amountSpecified, data);
        return (amountSpecified * 2, -amountSpecified);
    }
}

/// Takes the input, delivers nothing, reports a huge output.
contract LyingSafetyPool {
    address public immutable token0;
    address public immutable token1;

    constructor(address t0, address t1) {
        token0 = t0;
        token1 = t1;
    }

    function swap(address, bool, int256 amountSpecified, uint160, bytes calldata data)
        external
        returns (int256, int256)
    {
        ISafetyCallback(msg.sender).uniswapV3SwapCallback(amountSpecified, -1e30, data);
        return (amountSpecified, -1e30);
    }
}

/// Pays the output but hands back callback data naming another token.
contract DataSwappingPool {
    address public immutable token0;
    address public immutable token1;
    address public immutable other;

    constructor(address t0, address t1, address other_) {
        token0 = t0;
        token1 = t1;
        other = other_;
    }

    function swap(address recipient, bool, int256 amountSpecified, uint160, bytes calldata)
        external
        returns (int256, int256)
    {
        IERC20(token1).transfer(recipient, uint256(amountSpecified));
        ISafetyCallback(msg.sender).uniswapV3SwapCallback(amountSpecified, -amountSpecified, abi.encode(other));
        return (amountSpecified, -amountSpecified);
    }
}

/**
 * @title Swap safety
 * @notice The router and the adapter rely on balances, not on what a DEX or
 *         a pool reports; neither keeps or gives away funds it should not.
 */
contract SwapSafetyTest is Test {
    address internal treasury = makeAddr("treasury");
    address internal streamer = makeAddr("streamer");
    address internal viewer   = makeAddr("viewer");

    MockUSDC            internal usdc;
    MisreportingDex     internal dex;
    NetworkRouter       internal router;
    StreamWalletFactory internal factory;
    StreamWallet        internal wallet;

    function setUp() public {
        usdc = new MockUSDC();
        dex = new MisreportingDex(usdc);
        router = new NetworkRouter(address(dex), address(dex), address(usdc), address(0xC42), treasury, 500);
        factory = new StreamWalletFactory(address(this), treasury, 500, address(dex), address(usdc));
        factory.setSwapRouter(address(router));
        router.setStreamWalletFactory(address(factory));
        wallet = StreamWallet(payable(factory.deployWalletFor(streamer)));
        vm.prank(streamer);
        wallet.setSubscriptionPricing(1e6, 30 days);
        vm.deal(viewer, 100 ether);
    }

    // ─── router ─────────────────────────────────────────────────────────────

    function test_Router_ForwardsWhatArrivedNotWhatTheDexReported() public {
        usdc.mint(address(router), 1e6); // stray USDC must not be spent
        dex.set(10_000, 5e6); // reports 5 USDC more than it mints

        vm.prank(viewer);
        router.donateWithNativeToken{value: 10 ether}(streamer, "hi", 1, block.timestamp);

        // 10 USDC arrived: 5 % to the treasury, the rest to the wallet.
        assertEq(usdc.balanceOf(treasury), 0.5e6);
        assertEq(usdc.balanceOf(address(wallet)), 9.5e6);
        assertEq(usdc.balanceOf(address(router)), 1e6, "stray USDC untouched");
        assertEq(wallet.totalRevenue(), 10e6);
    }

    function test_Router_RevertsWhenLessThanTheMinimumArrives() public {
        dex.set(5_000, 5e6); // reports 15 USDC, mints 5
        vm.prank(viewer);
        vm.expectRevert(abi.encodeWithSelector(NetworkRouter.InsufficientOutput.selector, 5e6, 9e6));
        router.donateWithNativeToken{value: 10 ether}(streamer, "hi", 9e6, block.timestamp);
    }

    function test_Router_TokenPathMeasuresTheBalanceToo() public {
        SafetyToken token = new SafetyToken("TKN");
        token.mint(viewer, 10 ether);
        dex.set(5_000, 5e6);
        vm.startPrank(viewer);
        token.approve(address(router), 10 ether);
        vm.expectRevert(abi.encodeWithSelector(NetworkRouter.InsufficientOutput.selector, 5e6, 9e6));
        router.donateWithToken(address(token), 10 ether, streamer, "hi", 9e6, block.timestamp);
        vm.stopPrank();
    }

    function test_Router_SkipsTheQuoteWithoutAWrapperFactory() public {
        SafetyToken token = new SafetyToken("TKN");
        token.mint(viewer, 10 ether);
        vm.startPrank(viewer);
        token.approve(address(router), 10 ether);
        vm.expectCall(address(dex), abi.encodeWithSelector(IKayenRouter.getAmountsOut.selector), 0);
        router.donateWithToken(address(token), 10 ether, streamer, "hi", 1, block.timestamp);
        vm.stopPrank();
        assertEq(usdc.balanceOf(address(wallet)), 9.5e6);
    }

    function test_Router_RefusesAPlainNativeTransfer() public {
        vm.prank(viewer);
        (bool ok,) = address(router).call{value: 1 ether}("");
        assertFalse(ok);
        assertEq(address(router).balance, 0);
    }

    function test_Router_OwnerRescuesStrayTokens() public {
        usdc.mint(address(router), 3e6);
        address to = makeAddr("rescued");

        vm.prank(viewer);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, viewer));
        router.rescueTokens(usdc, to, 3e6);

        vm.expectRevert(NetworkRouter.ZeroAddress.selector);
        router.rescueTokens(usdc, address(0), 3e6);

        router.rescueTokens(usdc, to, 3e6);
        assertEq(usdc.balanceOf(to), 3e6);
        assertEq(usdc.balanceOf(address(router)), 0);
    }

    /// The router checks the price itself, so a wallet whose own check is
    /// missing (older implementation) cannot be subscribed to below cost.
    function test_Router_ChecksTheSubscriptionPriceItself() public {
        vm.mockCall(address(wallet), abi.encodeCall(StreamWallet.subscriptionCost, (30 days)), abi.encode(uint256(2e6)));
        usdc.mint(viewer, 1.5e6);
        vm.startPrank(viewer);
        usdc.approve(address(router), 1.5e6);
        vm.expectRevert(abi.encodeWithSelector(NetworkRouter.SubscriptionUnderpaid.selector, 1.5e6, 2e6));
        router.subscribeWithUSDC(streamer, 30 days, 1.5e6);
        vm.stopPrank();
    }

    function test_Router_RefusesAWalletWithoutPricing() public {
        vm.mockCallRevert(address(wallet), abi.encodeWithSelector(StreamWallet.subscriptionCost.selector), "");
        usdc.mint(viewer, 1e6);
        vm.startPrank(viewer);
        usdc.approve(address(router), 1e6);
        vm.expectRevert();
        router.subscribeWithUSDC(streamer, 30 days, 1e6);
        vm.stopPrank();
        assertFalse(wallet.isSubscribed(viewer));
    }

    function test_Router_SubscriptionAtThePriceStillWorks() public {
        usdc.mint(viewer, 1e6);
        vm.startPrank(viewer);
        usdc.approve(address(router), 1e6);
        router.subscribeWithUSDC(streamer, 30 days, 1e6);
        vm.stopPrank();
        assertTrue(wallet.isSubscribed(viewer));
    }

    // ─── adapter ────────────────────────────────────────────────────────────

    SafetyWeth internal weth;
    SafetyToken internal tokenA;
    SafetyToken internal tokenB;
    SafetyToken internal bait;
    ConcentratedPoolAdapter internal adapter;
    address internal taker = makeAddr("taker");
    address internal receiver = makeAddr("receiver");

    function _adapterSetUp() internal {
        weth = new SafetyWeth();
        tokenA = new SafetyToken("A");
        tokenB = new SafetyToken("B");
        bait = new SafetyToken("BAIT");
        adapter = new ConcentratedPoolAdapter(address(weth));
        tokenA.mint(taker, 1_000 ether);
        vm.prank(taker);
        tokenA.approve(address(adapter), type(uint256).max);
    }

    function _route(address pool) internal {
        address[] memory pools = new address[](1);
        pools[0] = pool;
        adapter.setRoute(address(tokenA), address(tokenB), pools);
    }

    function _path() internal view returns (address[] memory p) {
        p = new address[](2);
        p[0] = address(tokenA);
        p[1] = address(tokenB);
    }

    function test_Adapter_NeverPaysAPoolMoreThanItsInput() public {
        _adapterSetUp();
        GreedySafetyPool pool = new GreedySafetyPool(address(tokenA), address(tokenB));
        tokenB.mint(address(pool), 1_000 ether);
        _route(address(pool));
        tokenA.mint(address(adapter), 500 ether); // stray tokens a greedy pool would like

        vm.prank(taker);
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolAdapter.ExcessivePayment.selector, 20 ether, 10 ether));
        adapter.swapExactTokensForTokens(10 ether, 0, _path(), receiver, block.timestamp);
        assertEq(tokenA.balanceOf(address(adapter)), 500 ether);
    }

    function test_Adapter_OutputIsWhatArrivedNotWhatThePoolReported() public {
        _adapterSetUp();
        LyingSafetyPool pool = new LyingSafetyPool(address(tokenA), address(tokenB));
        _route(address(pool));

        vm.prank(taker);
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolAdapter.InsufficientOutput.selector, 0, 1));
        adapter.swapExactTokensForTokens(10 ether, 1, _path(), receiver, block.timestamp);

        vm.prank(taker);
        uint256[] memory amounts = adapter.swapExactTokensForTokens(10 ether, 0, _path(), receiver, block.timestamp);
        assertEq(amounts[1], 0, "the reported 1e30 is ignored");
    }

    function test_Adapter_CallbackIgnoresTheTokenInTheData() public {
        _adapterSetUp();
        DataSwappingPool pool = new DataSwappingPool(address(tokenA), address(tokenB), address(bait));
        tokenB.mint(address(pool), 1_000 ether);
        _route(address(pool));
        bait.mint(address(adapter), 50 ether);

        vm.prank(taker);
        adapter.swapExactTokensForTokens(10 ether, 10 ether, _path(), receiver, block.timestamp);
        assertEq(tokenA.balanceOf(address(pool)), 10 ether, "paid in the hop's input token");
        assertEq(bait.balanceOf(address(adapter)), 50 ether, "the other token stays");
        assertEq(tokenB.balanceOf(receiver), 10 ether);
    }

    function test_Adapter_CallbackOutsideASwapReverts() public {
        _adapterSetUp();
        MockConcentratedPool pool = new MockConcentratedPool(address(tokenA), address(tokenB));
        _route(address(pool));
        tokenA.mint(address(adapter), 5 ether);
        vm.prank(address(pool));
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolAdapter.UnauthorizedCallback.selector, address(pool)));
        adapter.uniswapV3SwapCallback(5 ether, 0, abi.encode(address(tokenA)));
    }

    function test_Adapter_OwnerRescuesStrayTokens() public {
        _adapterSetUp();
        tokenA.mint(address(adapter), 7 ether);
        address to = makeAddr("rescued");

        vm.prank(taker);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, taker));
        adapter.rescueTokens(tokenA, to, 7 ether);

        adapter.rescueTokens(tokenA, to, 7 ether);
        assertEq(tokenA.balanceOf(to), 7 ether);
    }
}

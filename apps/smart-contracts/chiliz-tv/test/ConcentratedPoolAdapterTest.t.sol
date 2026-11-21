// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test} from "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {ConcentratedPoolAdapter} from "../src/swap/uniswapV3/ConcentratedPoolAdapter.sol";
import {ConcentratedPoolQuote}   from "../src/swap/uniswapV3/ConcentratedPoolQuote.sol";
import {MockConcentratedPool}    from "./mocks/MockConcentratedPool.sol";

contract TestToken is ERC20 {
    constructor(string memory symbol_) ERC20(symbol_, symbol_) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract TestWeth is TestToken("WETH") {
    function deposit() external payable {
        _mint(msg.sender, msg.value);
    }
}

contract TickMathHarness {
    function sqrtRatioAtTick(int24 tick) external pure returns (uint160) {
        return ConcentratedPoolQuote.sqrtRatioAtTick(tick);
    }
}

contract ConcentratedPoolAdapterTest is Test {
    TestWeth weth;
    TestToken usdc;
    TestToken chz;
    TestToken pepper;
    TestToken unrelated;
    MockConcentratedPool poolChzUsdc;
    MockConcentratedPool poolPepperChz;
    ConcentratedPoolAdapter adapter;

    address taker = makeAddr("taker");
    address receiver = makeAddr("receiver");
    address stranger = makeAddr("stranger");

    uint256 constant AMOUNT = 1_000e18;

    function setUp() public {
        weth = new TestWeth();
        usdc = new TestToken("USDC");
        chz = new TestToken("CHZ");
        pepper = new TestToken("PEPPER");
        unrelated = new TestToken("NOPE");

        poolChzUsdc = _pool(address(chz), address(usdc));
        poolPepperChz = _pool(address(pepper), address(chz));

        adapter = new ConcentratedPoolAdapter(address(weth));
        _setRoute(address(chz), address(usdc), _one(address(poolChzUsdc)));

        chz.mint(taker, AMOUNT);
        usdc.mint(taker, AMOUNT);
        pepper.mint(taker, AMOUNT);
        vm.startPrank(taker);
        chz.approve(address(adapter), type(uint256).max);
        usdc.approve(address(adapter), type(uint256).max);
        pepper.approve(address(adapter), type(uint256).max);
        vm.stopPrank();
    }

    function _pool(address token0, address token1) internal returns (MockConcentratedPool pool) {
        pool = new MockConcentratedPool(token0, token1);
        TestToken(token0).mint(address(pool), 1_000_000e18);
        TestToken(token1).mint(address(pool), 1_000_000e18);
    }

    function _one(address a) internal pure returns (address[] memory pools) {
        pools = new address[](1);
        pools[0] = a;
    }

    function _two(address a, address b) internal pure returns (address[] memory pools) {
        pools = new address[](2);
        pools[0] = a;
        pools[1] = b;
    }

    function _setRoute(address tokenIn, address tokenOut, address[] memory pools) internal {
        adapter.setRoute(tokenIn, tokenOut, pools);
    }

    function _swap(address tokenIn, address tokenOut, uint256 minOut) internal returns (uint256[] memory) {
        vm.prank(taker);
        return adapter.swapExactTokensForTokens(AMOUNT, minOut, _two(tokenIn, tokenOut), receiver, block.timestamp);
    }

    // ── Route administration ─────────────────────────────────────────────────

    function test_SetRoute_OnlyOwner() public {
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(Ownable.OwnableUnauthorizedAccount.selector, stranger));
        adapter.setRoute(address(chz), address(usdc), _one(address(poolChzUsdc)));
    }

    function test_SetRoute_RejectsZeroToken() public {
        vm.expectRevert(ConcentratedPoolAdapter.ZeroAddress.selector);
        adapter.setRoute(address(0), address(usdc), _one(address(poolChzUsdc)));
    }

    function test_SetRoute_RejectsPoolWithoutTheToken() public {
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.PoolTokenMismatch.selector, address(poolChzUsdc), address(unrelated)
        ));
        adapter.setRoute(address(unrelated), address(usdc), _one(address(poolChzUsdc)));
    }

    function test_SetRoute_RejectsHopsInTheWrongOrder() public {
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.PoolTokenMismatch.selector, address(poolChzUsdc), address(pepper)
        ));
        adapter.setRoute(address(pepper), address(usdc), _two(address(poolChzUsdc), address(poolPepperChz)));
    }

    function test_SetRoute_RejectsRouteEndingElsewhere() public {
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.RouteEndMismatch.selector, address(chz), address(usdc)
        ));
        adapter.setRoute(address(pepper), address(usdc), _one(address(poolPepperChz)));
    }

    function test_SetRoute_RejectsTooManyHops() public {
        address[] memory pools = new address[](4);
        vm.expectRevert(ConcentratedPoolAdapter.TooManyHops.selector);
        adapter.setRoute(address(chz), address(usdc), pools);
    }

    function test_SetRoute_RecordsTokensAndDirection() public {
        adapter.setRoute(address(usdc), address(pepper), _two(address(poolChzUsdc), address(poolPepperChz)));
        ConcentratedPoolAdapter.Hop[] memory hops = adapter.getRoute(address(usdc), address(pepper));
        assertEq(hops.length, 2);
        assertEq(hops[0].tokenOut, address(chz));
        assertFalse(hops[0].zeroForOne, "usdc is token1");
        assertEq(hops[1].tokenOut, address(pepper));
        assertFalse(hops[1].zeroForOne, "chz is token1");
    }

    function test_SetRoute_ReplacesThePreviousRoute() public {
        MockConcentratedPool better = _pool(address(chz), address(usdc));
        adapter.setRoute(address(chz), address(usdc), _one(address(better)));
        ConcentratedPoolAdapter.Hop[] memory hops = adapter.getRoute(address(chz), address(usdc));
        assertEq(hops.length, 1);
        assertEq(hops[0].pool, address(better));
    }

    function test_SetRoute_NoPoolsRemovesTheRoute() public {
        adapter.setRoute(address(chz), address(usdc), new address[](0));
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.RouteNotSet.selector, address(chz), address(usdc)
        ));
        _swap(address(chz), address(usdc), 1);
    }

    function test_Ownership_TakesTwoSteps() public {
        adapter.transferOwnership(stranger);
        assertEq(adapter.owner(), address(this), "owner until accepted");
        vm.prank(stranger);
        adapter.acceptOwnership();
        assertEq(adapter.owner(), stranger);
    }

    // ── Swaps ────────────────────────────────────────────────────────────────

    function test_Swap_ZeroForOne() public {
        poolChzUsdc.setOutPerInBps(9_000);
        uint256[] memory amounts = _swap(address(chz), address(usdc), 900e18);
        assertEq(amounts[0], AMOUNT);
        assertEq(amounts[1], 900e18);
        assertEq(usdc.balanceOf(receiver), 900e18);
        assertEq(chz.balanceOf(taker), 0);
    }

    function test_Swap_OneForZero() public {
        adapter.setRoute(address(usdc), address(chz), _one(address(poolChzUsdc)));
        uint256[] memory amounts = _swap(address(usdc), address(chz), AMOUNT);
        assertEq(amounts[1], AMOUNT);
        assertEq(chz.balanceOf(receiver), AMOUNT);
    }

    function test_Swap_TwoHopsDeliverOnlyTheFinalToken() public {
        poolPepperChz.setOutPerInBps(5_000);
        poolChzUsdc.setOutPerInBps(2_000);
        adapter.setRoute(address(pepper), address(usdc), _two(address(poolPepperChz), address(poolChzUsdc)));

        uint256[] memory amounts = _swap(address(pepper), address(usdc), 100e18);
        assertEq(amounts.length, 3);
        assertEq(amounts[1], 500e18);
        assertEq(amounts[2], 100e18);
        assertEq(usdc.balanceOf(receiver), 100e18);
        assertEq(chz.balanceOf(receiver), 0, "intermediate token is not delivered");
        assertEq(chz.balanceOf(address(adapter)), 0);
    }

    /// @dev NetworkRouter always asks for [token, WETH, USDC].
    function test_Swap_IgnoresThePathMiddle() public {
        address[] memory path = new address[](3);
        path[0] = address(chz);
        path[1] = address(weth);
        path[2] = address(usdc);
        vm.prank(taker);
        uint256[] memory amounts = adapter.swapExactTokensForTokens(AMOUNT, AMOUNT, path, receiver, block.timestamp);
        assertEq(amounts[amounts.length - 1], AMOUNT);
        assertEq(usdc.balanceOf(receiver), AMOUNT);
    }

    function test_Swap_LeavesNothingInTheAdapter() public {
        _swap(address(chz), address(usdc), 1);
        assertEq(chz.balanceOf(address(adapter)), 0);
        assertEq(usdc.balanceOf(address(adapter)), 0);
    }

    function test_Swap_RevertsBelowMinimumOutput() public {
        poolChzUsdc.setOutPerInBps(9_000);
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.InsufficientOutput.selector, 900e18, 900e18 + 1
        ));
        _swap(address(chz), address(usdc), 900e18 + 1);
    }

    function test_Swap_RevertsOnPartialFill() public {
        poolChzUsdc.setFillBps(5_000);
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.PartialFill.selector, address(poolChzUsdc), AMOUNT / 2, AMOUNT
        ));
        _swap(address(chz), address(usdc), 1);
        assertEq(chz.balanceOf(taker), AMOUNT, "input not taken");
    }

    function test_Swap_RevertsPastDeadline() public {
        vm.warp(1_000);
        vm.prank(taker);
        vm.expectRevert(ConcentratedPoolAdapter.DeadlinePassed.selector);
        adapter.swapExactTokensForTokens(AMOUNT, 1, _two(address(chz), address(usdc)), receiver, 999);
    }

    function test_Swap_RevertsOnUnknownRoute() public {
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.RouteNotSet.selector, address(pepper), address(usdc)
        ));
        _swap(address(pepper), address(usdc), 1);
    }

    function test_Swap_RevertsOnShortPath() public {
        vm.prank(taker);
        vm.expectRevert(ConcentratedPoolAdapter.InvalidPath.selector);
        adapter.swapExactTokensForTokens(AMOUNT, 1, _one(address(chz)), receiver, block.timestamp);
    }

    function test_Quote_RevertsOnUnknownRoute() public {
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.RouteNotSet.selector, address(pepper), address(usdc)
        ));
        adapter.getAmountsOut(AMOUNT, _two(address(pepper), address(usdc)));
    }

    // ── Native ETH ───────────────────────────────────────────────────────────

    function test_SwapEth_WrapsThenSwaps() public {
        MockConcentratedPool poolWethUsdc = _pool(address(weth), address(usdc));
        adapter.setRoute(address(weth), address(usdc), _one(address(poolWethUsdc)));

        vm.deal(taker, 1 ether);
        vm.prank(taker);
        uint256[] memory amounts = adapter.swapExactETHForTokens{value: 1 ether}(
            1 ether, _two(address(weth), address(usdc)), receiver, block.timestamp
        );
        assertEq(amounts[1], 1 ether);
        assertEq(usdc.balanceOf(receiver), 1 ether);
        assertEq(weth.balanceOf(address(adapter)), 0);
        assertEq(address(adapter).balance, 0);
    }

    function test_SwapEth_RejectsAPathNotStartingWithWeth() public {
        vm.deal(taker, 1 ether);
        vm.prank(taker);
        vm.expectRevert(ConcentratedPoolAdapter.InvalidPath.selector);
        adapter.swapExactETHForTokens{value: 1 ether}(1, _two(address(chz), address(usdc)), receiver, block.timestamp);
    }

    function test_PlainEthTransferIsRefused() public {
        vm.deal(taker, 1 ether);
        vm.prank(taker);
        (bool ok,) = address(adapter).call{value: 1 ether}("");
        assertFalse(ok, "no receive function");
    }

    // ── Callback ─────────────────────────────────────────────────────────────

    function test_Callback_RefusesAStranger() public {
        chz.mint(address(adapter), 1e18); // stray funds a forged callback would take
        vm.prank(stranger);
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolAdapter.UnauthorizedCallback.selector, stranger));
        adapter.uniswapV3SwapCallback(1e18, 0, abi.encode(address(chz)));
    }

    function test_Callback_RefusesARegisteredPoolOutsideASwap() public {
        chz.mint(address(adapter), 1e18);
        vm.prank(address(poolChzUsdc));
        vm.expectRevert(abi.encodeWithSelector(
            ConcentratedPoolAdapter.UnauthorizedCallback.selector, address(poolChzUsdc)
        ));
        adapter.uniswapV3SwapCallback(1e18, 0, abi.encode(address(chz)));
    }

    // ── Tick math, against the values published with Uniswap V3 ──────────────

    function test_TickMath_KnownValues() public {
        TickMathHarness h = new TickMathHarness();
        assertEq(h.sqrtRatioAtTick(0), 1 << 96);
        assertEq(h.sqrtRatioAtTick(-887272), 4295128739);
        assertEq(h.sqrtRatioAtTick(-887271), 4295343490);
        assertEq(h.sqrtRatioAtTick(887271), 1461373636630004318706518188784493106690254656249);
        assertEq(h.sqrtRatioAtTick(887272), 1461446703485210103287273052203988822378723970342);
    }

    function test_TickMath_RefusesOutOfRangeTicks() public {
        TickMathHarness h = new TickMathHarness();
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolQuote.TickOutOfRange.selector, int24(887273)));
        h.sqrtRatioAtTick(887273);
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolQuote.TickOutOfRange.selector, int24(-887273)));
        h.sqrtRatioAtTick(-887273);
    }

    function testFuzz_TickMath_IsStrictlyIncreasing(int24 tick) public {
        tick = int24(bound(tick, -887272, 887271));
        TickMathHarness h = new TickMathHarness();
        assertLt(h.sqrtRatioAtTick(tick), h.sqrtRatioAtTick(tick + 1));
    }
}

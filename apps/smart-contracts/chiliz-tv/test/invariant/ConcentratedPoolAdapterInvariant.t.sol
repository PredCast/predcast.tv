// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test}   from "forge-std/Test.sol";
import {ERC20}  from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {ConcentratedPoolAdapter} from "../../src/swap/uniswapV3/ConcentratedPoolAdapter.sol";
import {MockConcentratedPool}    from "../mocks/MockConcentratedPool.sol";

contract AdapterInvToken is ERC20 {
    constructor(string memory symbol_) ERC20(symbol_, symbol_) {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract AdapterInvWeth is AdapterInvToken("WETH") {
    function deposit() external payable {
        _mint(msg.sender, msg.value);
    }
}

interface IAdapterCallback {
    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external;
}

/// Pays the output, then asks the adapter for twice the input.
contract GreedyPool {
    address public immutable token0;
    address public immutable token1;

    constructor(address t0, address t1) {
        token0 = t0;
        token1 = t1;
    }

    function swap(address recipient, bool zeroForOne, int256 amountSpecified, uint160, bytes calldata data)
        external
        returns (int256 amount0, int256 amount1)
    {
        IERC20(zeroForOne ? token1 : token0).transfer(recipient, uint256(amountSpecified));
        int256 asked = amountSpecified * 2;
        (amount0, amount1) = zeroForOne ? (asked, -amountSpecified) : (-amountSpecified, asked);
        IAdapterCallback(msg.sender).uniswapV3SwapCallback(amount0, amount1, data);
    }
}

/// Takes the input, delivers nothing, and reports a huge output.
contract LiarPool {
    address public immutable token0;
    address public immutable token1;

    constructor(address t0, address t1) {
        token0 = t0;
        token1 = t1;
    }

    function swap(address, bool zeroForOne, int256 amountSpecified, uint160, bytes calldata data)
        external
        returns (int256 amount0, int256 amount1)
    {
        (amount0, amount1) = zeroForOne ? (amountSpecified, -int256(1e30)) : (-int256(1e30), amountSpecified);
        IAdapterCallback(msg.sender).uniswapV3SwapCallback(amount0, amount1, data);
    }
}

/**
 * @notice Swaps through honest pools at random rates and fills, through a
 *         greedy and a lying pool, calls the callback from strangers and
 *         from pools outside a swap, and leaves stray tokens in the adapter.
 */
contract AdapterHandler is Test {
    ConcentratedPoolAdapter public immutable adapter;
    AdapterInvWeth  public immutable weth;
    AdapterInvToken public immutable usdc;
    AdapterInvToken public immutable chz;
    AdapterInvToken public immutable pepper;
    AdapterInvToken public immutable bait;
    MockConcentratedPool public immutable poolWethUsdc;
    MockConcentratedPool public immutable poolPepperChz;
    MockConcentratedPool public immutable poolChzUsdc;
    GreedyPool public immutable greedy;
    LiarPool   public immutable liar;

    address internal immutable receiver;
    mapping(address => uint256) public strayOf;
    uint256 public unexpected;
    string  public lastUnexpected;

    constructor(
        ConcentratedPoolAdapter adapter_,
        AdapterInvWeth weth_,
        AdapterInvToken[4] memory tokens_, // usdc, chz, pepper, bait
        MockConcentratedPool[3] memory pools, // weth/usdc, pepper/chz, chz/usdc
        GreedyPool greedy_,
        LiarPool liar_
    ) {
        adapter = adapter_;
        weth = weth_;
        usdc = tokens_[0];
        chz = tokens_[1];
        pepper = tokens_[2];
        bait = tokens_[3];
        poolWethUsdc = pools[0];
        poolPepperChz = pools[1];
        poolChzUsdc = pools[2];
        greedy = greedy_;
        liar = liar_;
        receiver = makeAddr("receiver");
    }

    function tokens() external view returns (address[] memory list) {
        list = new address[](5);
        list[0] = address(weth);
        list[1] = address(usdc);
        list[2] = address(chz);
        list[3] = address(pepper);
        list[4] = address(bait);
    }

    function swapNative(uint256 value, uint256 rateBps, uint256 fillSeed, uint256 minSeed) external {
        value = bound(value, 1, 1_000 ether);
        rateBps = bound(rateBps, 1, 20_000);
        uint256 fillBps = fillSeed % 4 == 0 ? bound(fillSeed, 5_000, 9_999) : 10_000;
        poolWethUsdc.setOutPerInBps(rateBps);
        poolWethUsdc.setFillBps(fillBps);

        uint256 out = (value * rateBps) / 10_000;
        uint256 minOut = minSeed % 6 == 0 ? out + 1 : bound(minSeed, 0, out);
        bool shouldWork = fillBps == 10_000 && minOut <= out;

        vm.deal(address(this), value);
        uint256 before = usdc.balanceOf(receiver);
        bool ok;
        try adapter.swapExactETHForTokens{value: value}(minOut, _path(address(weth), address(usdc)), receiver, block.timestamp)
            returns (uint256[] memory amounts)
        {
            ok = true;
            if (amounts[amounts.length - 1] != out || usdc.balanceOf(receiver) - before != out) {
                _fail("native swap output");
            }
        } catch {}
        _expect(ok, shouldWork, "native swap");
    }

    function swapTwoHops(uint256 amount, uint256 rateA, uint256 rateB, uint256 minSeed) external {
        amount = bound(amount, 1, 1e30);
        rateA = bound(rateA, 1, 20_000);
        rateB = bound(rateB, 1, 20_000);
        poolPepperChz.setOutPerInBps(rateA);
        poolChzUsdc.setOutPerInBps(rateB);
        uint256 mid = (amount * rateA) / 10_000;
        uint256 out = (mid * rateB) / 10_000;
        uint256 minOut = minSeed % 6 == 0 ? out + 1 : bound(minSeed, 0, out);
        // When the first hop rounds to zero the outcome depends on the pool; skip the check.
        bool shouldWork = mid != 0 && minOut <= out;

        pepper.mint(address(this), amount);
        pepper.approve(address(adapter), amount);
        uint256 before = usdc.balanceOf(receiver);
        bool ok;
        try adapter.swapExactTokensForTokens(amount, minOut, _path(address(pepper), address(usdc)), receiver, block.timestamp)
            returns (uint256[] memory amounts)
        {
            ok = true;
            if (amounts[1] != mid || amounts[2] != out || usdc.balanceOf(receiver) - before != out) {
                _fail("two-hop output");
            }
        } catch {
            pepper.approve(address(adapter), 0);
        }
        if (mid != 0) _expect(ok, shouldWork, "two-hop swap");
    }

    /// A pool asking for more than its input must never be paid, even with
    /// stray tokens sitting in the adapter.
    function swapGreedy(uint256 amount) external {
        amount = bound(amount, 1, 1e24);
        chz.mint(address(this), amount);
        chz.approve(address(adapter), amount);
        try adapter.swapExactTokensForTokens(amount, 0, _path(address(chz), address(bait)), receiver, block.timestamp) {
            _fail("greedy pool was paid");
        } catch {
            chz.approve(address(adapter), 0);
        }
    }

    /// A pool that lies about its output must not pass the minimum.
    function swapLiar(uint256 amount, uint256 minOut) external {
        amount = bound(amount, 1, 1e24);
        minOut = bound(minOut, 0, 1e30);
        bait.mint(address(this), amount);
        bait.approve(address(adapter), amount);
        uint256 before = pepper.balanceOf(receiver);
        try adapter.swapExactTokensForTokens(amount, minOut, _path(address(bait), address(pepper)), receiver, block.timestamp)
            returns (uint256[] memory amounts)
        {
            if (minOut != 0) _fail("lying pool passed the minimum");
            if (amounts[1] != 0 || pepper.balanceOf(receiver) != before) _fail("lying pool output");
        } catch {
            bait.approve(address(adapter), 0);
            if (minOut == 0) _fail("lying pool swap with no minimum reverted");
        }
    }

    function rogueCallback(uint256 callerSeed, int256 amount0, int256 amount1, uint256 tokenSeed) external {
        address[6] memory callers = [
            address(poolWethUsdc), address(poolPepperChz), address(poolChzUsdc),
            address(greedy), address(liar), makeAddr("stranger")
        ];
        address caller = callers[callerSeed % callers.length];
        address[] memory list = this.tokens();
        vm.prank(caller);
        try adapter.uniswapV3SwapCallback(amount0, amount1, abi.encode(list[tokenSeed % list.length])) {
            _fail("callback accepted outside a swap");
        } catch {}
    }

    function stray(uint256 tokenSeed, uint256 amount) external {
        address[] memory list = this.tokens();
        address t = list[tokenSeed % list.length];
        amount = bound(amount, 1, 1e24);
        AdapterInvToken(t).mint(address(adapter), amount);
        strayOf[t] += amount;
    }

    function _path(address a, address b) internal pure returns (address[] memory p) {
        p = new address[](2);
        p[0] = a;
        p[1] = b;
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
 * @title Concentrated-pool adapter invariants
 * @notice The adapter never keeps or gives away anything beyond the swap in
 *         progress: its balances only ever hold stray tokens, the callback
 *         only pays the active pool, and outputs are what actually arrived.
 */
contract ConcentratedPoolAdapterInvariantTest is Test {
    ConcentratedPoolAdapter internal adapter;
    AdapterHandler internal handler;

    function setUp() public {
        AdapterInvWeth weth = new AdapterInvWeth();
        AdapterInvToken[4] memory t = [
            new AdapterInvToken("USDC"), new AdapterInvToken("CHZ"),
            new AdapterInvToken("PEPPER"), new AdapterInvToken("BAIT")
        ];
        MockConcentratedPool[3] memory pools = [
            new MockConcentratedPool(address(weth), address(t[0])),
            new MockConcentratedPool(address(t[2]), address(t[1])),
            new MockConcentratedPool(address(t[1]), address(t[0]))
        ];
        GreedyPool greedy = new GreedyPool(address(t[1]), address(t[3]));
        LiarPool liar = new LiarPool(address(t[3]), address(t[2]));

        // Output liquidity for every pool.
        t[0].mint(address(pools[0]), 1e40);
        t[1].mint(address(pools[1]), 1e40);
        t[0].mint(address(pools[2]), 1e40);
        t[3].mint(address(greedy), 1e40);

        adapter = new ConcentratedPoolAdapter(address(weth));
        adapter.setRoute(address(weth), address(t[0]), _one(address(pools[0])));
        address[] memory twoHops = new address[](2);
        twoHops[0] = address(pools[1]);
        twoHops[1] = address(pools[2]);
        adapter.setRoute(address(t[2]), address(t[0]), twoHops);
        adapter.setRoute(address(t[1]), address(t[3]), _one(address(greedy)));
        adapter.setRoute(address(t[3]), address(t[2]), _one(address(liar)));

        handler = new AdapterHandler(adapter, weth, t, pools, greedy, liar);

        bytes4[] memory selectors = new bytes4[](6);
        selectors[0] = AdapterHandler.swapNative.selector;
        selectors[1] = AdapterHandler.swapTwoHops.selector;
        selectors[2] = AdapterHandler.swapGreedy.selector;
        selectors[3] = AdapterHandler.swapLiar.selector;
        selectors[4] = AdapterHandler.rogueCallback.selector;
        selectors[5] = AdapterHandler.stray.selector;
        targetSelector(FuzzSelector({addr: address(handler), selectors: selectors}));
        targetContract(address(handler));
    }

    function invariant_AdapterHoldsOnlyStrayTokens() public view {
        address[] memory list = handler.tokens();
        for (uint256 i; i < list.length; ++i) {
            assertEq(IERC20(list[i]).balanceOf(address(adapter)), handler.strayOf(list[i]));
        }
        assertEq(address(adapter).balance, 0);
    }

    function invariant_NoUnexpectedRevertOrSuccess() public view {
        assertEq(handler.unexpected(), 0, handler.lastUnexpected());
    }

    function _one(address pool) internal pure returns (address[] memory p) {
        p = new address[](1);
        p[0] = pool;
    }
}

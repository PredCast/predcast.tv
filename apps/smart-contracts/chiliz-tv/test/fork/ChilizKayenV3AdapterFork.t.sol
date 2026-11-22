// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {ConcentratedPoolAdapter} from "../../src/swap/uniswapV3/ConcentratedPoolAdapter.sol";
import {IConcentratedPool}       from "../../src/interfaces/IConcentratedPool.sol";

interface IKayenV3Factory {
    function getPool(address tokenA, address tokenB, uint24 fee) external view returns (address);
    function feeAmountTickSpacing(uint24 fee) external view returns (int24);
}

interface IKayenV3PoolFactory {
    function factory() external view returns (address);
}

interface IKayenQuoterV2 {
    struct QuoteExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint256 amountIn;
        uint24 fee;
        uint160 sqrtPriceLimitX96;
    }

    function factory() external view returns (address);
    function quoteExactInputSingle(QuoteExactInputSingleParams memory params)
        external
        returns (uint256 amountOut, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate);
}

interface IKayenV2Router {
    function getAmountsOut(uint256 amountIn, address[] calldata path) external view returns (uint256[] memory);
}

interface IUniversalRouter {
    function execute(bytes calldata commands, bytes[] calldata inputs, uint256 deadline) external payable;
}

interface IPermit2 {
    struct PermitDetails {
        address token;
        uint160 amount;
        uint48 expiration;
        uint48 nonce;
    }

    struct PermitSingle {
        PermitDetails details;
        address spender;
        uint256 sigDeadline;
    }

    function DOMAIN_SEPARATOR() external view returns (bytes32);
    function allowance(address owner, address token, address spender)
        external
        view
        returns (uint160 amount, uint48 expiration, uint48 nonce);
}

/**
 * @title ConcentratedPoolAdapter on Kayen V3, Chiliz mainnet (fork)
 * @notice Checks whether the adapter written for Uniswap V3 / Slipstream pools
 *         on Base can swap on Kayen V3 pools unchanged, and what the Kayen
 *         Universal Router supports for a fee-taking fan-token buy/sell.
 *
 *         Kayen V3 pools are Uniswap v3-core renamed (`KayenFinanceV3Pool`):
 *         same storage, math, `slot0`, `ticks`, `tickBitmap` and `swap`, but
 *         the pool pays itself through `kayenFinanceV3SwapCallback` (0xcea2f9e3)
 *         instead of `uniswapV3SwapCallback` (0xfa461e33). The unchanged adapter
 *         therefore quotes exactly but cannot swap; the MinimalFix tests patch
 *         only that selector in the deployed bytecode to prove nothing else is
 *         missing. Swap sizes are fractions of each pool's balance.
 *
 *           CHILIZ_RPC_URL=https://chiliz-rpc.publicnode.com \
 *             forge test --match-path test/fork/ChilizKayenV3AdapterFork.t.sol -vvv
 */
contract ChilizKayenV3AdapterForkTest is Test {
    // ── Chiliz mainnet tokens ────────────────────────────────────────────────
    address constant WCHZ = 0x677F7e16C7Dd57be1D4C8aD1244883214953DC47;
    address constant USDC = 0xa37936F56249965d407E39347528a1A91eB1cbef;
    address constant OM   = 0x08Cde3aB71adC228332CB774c4EcCa4D664aB807; // 18 dp
    address constant PSGL = 0xFe1d4A935df7A4A52F835f6104C97AF9D72217f2; // legacy PSG, 18 dp
    address constant BAR  = 0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b; // CAP-20, 0 dp
    address constant WBAR = 0xbaAAEF59F4A6C11cC87FF75EAa7a386e753b2666; // Kayen-wrapped BAR

    // ── Kayen V3 / Universal Router ──────────────────────────────────────────
    address constant V3_FACTORY = 0x4bC8BDF50843Cc503E196Be4A9560134d358bb3C;
    address constant UR         = 0xA6cC1A441E319127aC3de6609617F7D3f2Fed855;
    address constant QUOTER_V2  = 0xf8eCC1068F2aDe4EF3F731Bf744f61F1D87c086c;
    address constant PERMIT2    = 0x29E19383286BB6f1C11C9052662eEd93C5258d30;
    address constant V2_ROUTER  = 0x1918EbB39492C8b98865c5E53219c3f1AE79e76F;

    address constant OM_POOL   = 0x284f37a01cC4e74e66e5346A2Edba66B73d8694B; // OM/WCHZ 0.3%
    address constant PSGL_POOL = 0xeCC0E03054429fF0B06aFE2137109cEaC3b0D525; // WCHZ/PSG-L 0.3%
    uint24  constant POOL_FEE  = 3000;

    bytes4 constant UNISWAP_CALLBACK = 0xfa461e33; // uniswapV3SwapCallback(int256,int256,bytes)
    bytes4 constant KAYEN_CALLBACK   = 0xcea2f9e3; // kayenFinanceV3SwapCallback(int256,int256,bytes)
    bytes4 constant ALGEBRA_CALLBACK = 0x2c8958f6; // algebraSwapCallback(int256,int256,bytes)
    bytes4 constant PANCAKE_CALLBACK = 0x23a69e75; // pancakeV3SwapCallback(int256,int256,bytes)
    bytes4 constant SWAP_SELECTOR    = 0x128acb08; // swap(address,bool,int256,uint160,bytes)

    // ── Universal Router command ids and sentinels ───────────────────────────
    uint8 constant V3_SWAP_EXACT_IN = 0x00;
    uint8 constant SWEEP            = 0x04;
    uint8 constant PAY_PORTION      = 0x06;
    uint8 constant V2_SWAP_EXACT_IN = 0x08;
    uint8 constant PERMIT2_PERMIT   = 0x0a;
    uint8 constant WRAP_ETH         = 0x0b;
    uint8 constant UNWRAP_WETH      = 0x0c;
    address constant NATIVE       = address(0);
    address constant MSG_SENDER   = address(1);
    address constant ADDRESS_THIS = address(2);
    uint256 constant CONTRACT_BALANCE = 1 << 255;

    uint256 constant TREASURY_BPS = 150;

    ConcentratedPoolAdapter adapter;
    address alice;
    uint256 aliceKey;
    address treasury = makeAddr("treasury");

    function setUp() public {
        vm.createSelectFork(vm.envOr("CHILIZ_RPC_URL", string("https://chiliz-rpc.publicnode.com")));
        assertEq(block.chainid, 88888, "not a Chiliz mainnet fork");
        (alice, aliceKey) = makeAddrAndKey("alice");

        adapter = new ConcentratedPoolAdapter(WCHZ);
        _route(WCHZ, OM, OM_POOL);
        _route(OM, WCHZ, OM_POOL);
        _route(WCHZ, PSGL, PSGL_POOL);
        _route(PSGL, WCHZ, PSGL_POOL);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // POOL SHAPE
    // ══════════════════════════════════════════════════════════════════════════

    function test_Pools_AreUniswapV3ShapedButUseKayenCallback() public view {
        _checkPool(OM_POOL, OM, 60);
        _checkPool(PSGL_POOL, PSGL, 60);
        assertEq(IKayenQuoterV2(QUOTER_V2).factory(), V3_FACTORY, "QuoterV2 factory");
        assertEq(IKayenV3Factory(V3_FACTORY).feeAmountTickSpacing(100), 1);
        assertEq(IKayenV3Factory(V3_FACTORY).feeAmountTickSpacing(500), 10);
        assertEq(IKayenV3Factory(V3_FACTORY).feeAmountTickSpacing(3000), 60);
        assertEq(IKayenV3Factory(V3_FACTORY).feeAmountTickSpacing(10000), 200);
        assertEq(IKayenV3Factory(V3_FACTORY).feeAmountTickSpacing(2500), 0, "2500 tier not enabled");
    }

    /// @dev Snapshot: BAR has no Kayen V3 pool (raw or wrapped, vs WCHZ or USDC).
    function test_Pools_BarHasNoKayenV3Pool() public view {
        uint24[4] memory fees = [uint24(100), 500, 3000, 10000];
        for (uint256 i; i < fees.length; ++i) {
            assertEq(IKayenV3Factory(V3_FACTORY).getPool(WCHZ, BAR, fees[i]), address(0));
            assertEq(IKayenV3Factory(V3_FACTORY).getPool(WCHZ, WBAR, fees[i]), address(0));
            assertEq(IKayenV3Factory(V3_FACTORY).getPool(USDC, BAR, fees[i]), address(0));
            assertEq(IKayenV3Factory(V3_FACTORY).getPool(USDC, WBAR, fees[i]), address(0));
        }
    }

    // ══════════════════════════════════════════════════════════════════════════
    // UNCHANGED ADAPTER
    // ══════════════════════════════════════════════════════════════════════════

    /// @dev The quote library only reads pool state, so it works as is.
    function test_Unchanged_QuoteMatchesKayenQuoterV2() public {
        _assertQuoteMatchesQuoter(WCHZ, OM, _size(OM_POOL, WCHZ, 10));
        _assertQuoteMatchesQuoter(WCHZ, OM, _size(OM_POOL, WCHZ, 200));
        _assertQuoteMatchesQuoter(OM, WCHZ, _size(OM_POOL, OM, 10));
        _assertQuoteMatchesQuoter(WCHZ, PSGL, _size(PSGL_POOL, WCHZ, 10));
        _assertQuoteMatchesQuoter(PSGL, WCHZ, _size(PSGL_POOL, PSGL, 200));
    }

    /// @dev The pool calls `kayenFinanceV3SwapCallback` on the adapter, which
    ///      has no such function and no fallback: empty revert, whole swap undone.
    function test_Unchanged_SwapRevertsOnKayenCallback() public {
        uint256 amountIn = _size(OM_POOL, WCHZ, 10);
        vm.deal(alice, amountIn);
        vm.prank(alice);
        vm.expectRevert(bytes(""));
        adapter.swapExactETHForTokens{value: amountIn}(0, _path(WCHZ, OM), alice, block.timestamp);

        uint256 omIn = _size(OM_POOL, OM, 10);
        deal(OM, alice, omIn);
        vm.startPrank(alice);
        IERC20(OM).approve(address(adapter), omIn);
        vm.expectRevert(bytes(""));
        adapter.swapExactTokensForTokens(omIn, 0, _path(OM, WCHZ), alice, block.timestamp);
        vm.stopPrank();
    }

    /// @dev Root cause in isolation: the adapter answers the Uniswap selector
    ///      (with its own access check) but not the Kayen one.
    function test_Unchanged_AdapterLacksKayenCallbackSelector() public {
        vm.prank(OM_POOL);
        vm.expectRevert(abi.encodeWithSelector(ConcentratedPoolAdapter.UnauthorizedCallback.selector, OM_POOL));
        adapter.uniswapV3SwapCallback(1, 0, "");

        vm.prank(OM_POOL);
        (bool ok, bytes memory ret) = address(adapter).call(abi.encodeWithSelector(KAYEN_CALLBACK, int256(1), int256(0), ""));
        assertFalse(ok, "adapter answered the Kayen callback");
        assertEq(ret.length, 0, "unknown selector reverts without data");
        assertTrue(_hasPush4(address(adapter), UNISWAP_CALLBACK));
        assertFalse(_hasPush4(address(adapter), KAYEN_CALLBACK));
    }

    // ══════════════════════════════════════════════════════════════════════════
    // MINIMAL FIX: SAME ADAPTER, CALLBACK SELECTOR RENAMED
    // ══════════════════════════════════════════════════════════════════════════

    function test_MinimalFix_SwapsMatchQuoteExactly() public {
        _patchCallbackSelector(address(adapter));

        _buyWithNative(OM, OM_POOL, 10);
        _buyWithNative(OM, OM_POOL, 200);
        _sellToken(OM, OM_POOL, 10);
        _sellToken(OM, OM_POOL, 200);
        _buyWithNative(PSGL, PSGL_POOL, 10);
        _sellToken(PSGL, PSGL_POOL, 10);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // KAYEN UNIVERSAL ROUTER
    // ══════════════════════════════════════════════════════════════════════════

    /// @dev Native CHZ in, treasury cut in WCHZ, rest swapped on the Kayen V3 pool.
    function test_UR_FeeTakingBuy_WrapPayPortionV3SwapSweep() public {
        uint256 amountIn = _size(OM_POOL, WCHZ, 10);
        uint256 fee = amountIn * TREASURY_BPS / 10_000;
        uint256 expectedOut = adapter.getAmountsOut(amountIn - fee, _path(WCHZ, OM))[1];
        uint256 poolWchzBefore = IERC20(WCHZ).balanceOf(OM_POOL);
        _assertRouterEmpty();

        bytes memory commands = abi.encodePacked(WRAP_ETH, PAY_PORTION, V3_SWAP_EXACT_IN, SWEEP);
        bytes[] memory inputs = new bytes[](4);
        inputs[0] = abi.encode(ADDRESS_THIS, CONTRACT_BALANCE);
        inputs[1] = abi.encode(WCHZ, treasury, TREASURY_BPS);
        inputs[2] = abi.encode(MSG_SENDER, CONTRACT_BALANCE, expectedOut, abi.encodePacked(WCHZ, POOL_FEE, OM), false);
        inputs[3] = abi.encode(WCHZ, MSG_SENDER, 0);

        vm.deal(alice, amountIn);
        vm.prank(alice);
        uint256 gasBefore = gasleft();
        IUniversalRouter(UR).execute{value: amountIn}(commands, inputs, block.timestamp);
        uint256 gasUsed = gasBefore - gasleft();

        assertEq(IERC20(WCHZ).balanceOf(treasury), fee, "treasury got exactly the portion");
        assertEq(IERC20(OM).balanceOf(alice), expectedOut, "user got the quoted output");
        assertEq(IERC20(WCHZ).balanceOf(OM_POOL) - poolWchzBefore, amountIn - fee, "routed through the Kayen V3 pool");
        _assertRouterEmpty();
        console2.log("UR buy  CHZ in      ", amountIn);
        console2.log("UR buy  treasury fee", fee);
        console2.log("UR buy  OM out      ", expectedOut);
        console2.log("UR buy  gas         ", gasUsed);
    }

    /// @dev Fan token in through a signed Permit2 permit, treasury cut in native CHZ.
    function test_UR_FeeTakingSell_PermitV3SwapUnwrapPayPortionSweep() public {
        uint256 omIn = _size(OM_POOL, OM, 10);
        deal(OM, alice, omIn);
        uint256 gross = adapter.getAmountsOut(omIn, _path(OM, WCHZ))[1];
        uint256 fee = gross * TREASURY_BPS / 10_000;
        _assertRouterEmpty();

        vm.prank(alice);
        IERC20(OM).approve(PERMIT2, type(uint256).max);

        bytes memory commands = abi.encodePacked(PERMIT2_PERMIT, V3_SWAP_EXACT_IN, UNWRAP_WETH, PAY_PORTION, SWEEP);
        bytes[] memory inputs = new bytes[](5);
        inputs[0] = _signedPermit(OM, omIn);
        inputs[1] = abi.encode(ADDRESS_THIS, omIn, gross, abi.encodePacked(OM, POOL_FEE, WCHZ), true);
        inputs[2] = abi.encode(ADDRESS_THIS, 0);
        inputs[3] = abi.encode(NATIVE, treasury, TREASURY_BPS);
        inputs[4] = abi.encode(NATIVE, MSG_SENDER, gross - fee);

        vm.prank(alice);
        uint256 gasBefore = gasleft();
        IUniversalRouter(UR).execute(commands, inputs, block.timestamp);
        uint256 gasUsed = gasBefore - gasleft();

        assertEq(treasury.balance, fee, "treasury got exactly the portion, in CHZ");
        assertEq(alice.balance, gross - fee, "user got the rest, in CHZ");
        assertEq(IERC20(OM).balanceOf(alice), 0);
        _assertRouterEmpty();
        console2.log("UR sell OM in       ", omIn);
        console2.log("UR sell CHZ gross   ", gross);
        console2.log("UR sell treasury fee", fee);
        console2.log("UR sell gas         ", gasUsed);
    }

    /// @dev The V2 module targets the Kayen V2 factory (same output as the Kayen V2 router).
    function test_UR_V2SwapExactIn_UsesKayenV2Pairs() public {
        address[] memory path = _path(WCHZ, USDC);
        uint256 amountIn = 1_000 ether;
        uint256 expectedOut = IKayenV2Router(V2_ROUTER).getAmountsOut(amountIn, path)[1];

        bytes memory commands = abi.encodePacked(WRAP_ETH, V2_SWAP_EXACT_IN);
        bytes[] memory inputs = new bytes[](2);
        inputs[0] = abi.encode(ADDRESS_THIS, CONTRACT_BALANCE);
        inputs[1] = abi.encode(MSG_SENDER, amountIn, expectedOut, path, false);

        vm.deal(alice, amountIn);
        vm.prank(alice);
        IUniversalRouter(UR).execute{value: amountIn}(commands, inputs, block.timestamp);
        assertEq(IERC20(USDC).balanceOf(alice), expectedOut);
    }

    function test_UR_UnknownCommandIdsRevertWithInvalidCommandType() public {
        _expectInvalidCommand(0x07);
        _expectInvalidCommand(0x0f);
        _expectInvalidCommand(0x3f);
    }

    /// @dev NFT protocol slots are wired to an "UnsupportedProtocol" contract.
    function test_UR_NftCommandsAreDisabled() public {
        bytes[] memory inputs = new bytes[](1);
        inputs[0] = abi.encode(uint256(0), bytes(""));
        vm.expectRevert();
        IUniversalRouter(UR).execute(abi.encodePacked(uint8(0x10)), inputs, block.timestamp);
    }

    // ══════════════════════════════════════════════════════════════════════════
    // HELPERS
    // ══════════════════════════════════════════════════════════════════════════

    function _buyWithNative(address token, address pool, uint256 bps) internal {
        uint256 amountIn = _size(pool, WCHZ, bps);
        uint256 quoted = adapter.getAmountsOut(amountIn, _path(WCHZ, token))[1];
        uint256 before = IERC20(token).balanceOf(alice);

        vm.deal(alice, amountIn);
        vm.prank(alice);
        uint256 gasBefore = gasleft();
        uint256[] memory amounts =
            adapter.swapExactETHForTokens{value: amountIn}(quoted, _path(WCHZ, token), alice, block.timestamp);
        uint256 gasUsed = gasBefore - gasleft();

        assertEq(amounts[1], quoted, "reported output == quote");
        assertEq(IERC20(token).balanceOf(alice) - before, quoted, "received == quote");
        console2.log("buy  bps / in / out / gas", bps, amountIn, quoted);
        console2.log("     gas", gasUsed);
    }

    function _sellToken(address token, address pool, uint256 bps) internal {
        uint256 amountIn = _size(pool, token, bps);
        deal(token, alice, amountIn);
        uint256 quoted = adapter.getAmountsOut(amountIn, _path(token, WCHZ))[1];
        uint256 before = IERC20(WCHZ).balanceOf(alice);

        vm.startPrank(alice);
        IERC20(token).approve(address(adapter), amountIn);
        uint256 gasBefore = gasleft();
        uint256[] memory amounts =
            adapter.swapExactTokensForTokens(amountIn, quoted, _path(token, WCHZ), alice, block.timestamp);
        uint256 gasUsed = gasBefore - gasleft();
        vm.stopPrank();

        assertEq(amounts[1], quoted, "reported output == quote");
        assertEq(IERC20(WCHZ).balanceOf(alice) - before, quoted, "received == quote");
        console2.log("sell bps / in / out", bps, amountIn, quoted);
        console2.log("     gas", gasUsed);
    }

    function _assertQuoteMatchesQuoter(address tokenIn, address tokenOut, uint256 amountIn) internal {
        uint256 ours = adapter.getAmountsOut(amountIn, _path(tokenIn, tokenOut))[1];
        (uint256 kayen,,,) = IKayenQuoterV2(QUOTER_V2).quoteExactInputSingle(
            IKayenQuoterV2.QuoteExactInputSingleParams(tokenIn, tokenOut, amountIn, POOL_FEE, 0)
        );
        assertEq(ours, kayen, "adapter quote == Kayen QuoterV2");
        assertGt(ours, 0);
    }

    function _checkPool(address pool, address fanToken, int24 spacing) internal view {
        IConcentratedPool p = IConcentratedPool(pool);
        assertEq(IKayenV3PoolFactory(pool).factory(), V3_FACTORY, "pool factory");
        assertEq(IKayenV3Factory(V3_FACTORY).getPool(WCHZ, fanToken, POOL_FEE), pool, "factory.getPool");
        assertEq(p.fee(), POOL_FEE);
        assertEq(p.tickSpacing(), spacing);
        assertTrue(
            (p.token0() == WCHZ && p.token1() == fanToken) || (p.token0() == fanToken && p.token1() == WCHZ)
        );
        (uint160 price, int24 tick) = p.slot0();
        assertGt(price, 0);
        int24 compressed = tick / spacing;
        if (tick < 0 && tick % spacing != 0) compressed--;
        p.tickBitmap(int16(compressed >> 8));
        p.ticks(tick);

        assertTrue(_hasPush4(pool, SWAP_SELECTOR), "swap selector");
        assertTrue(_hasPush4(pool, KAYEN_CALLBACK), "calls kayenFinanceV3SwapCallback");
        assertFalse(_hasPush4(pool, UNISWAP_CALLBACK), "does not call uniswapV3SwapCallback");
        assertFalse(_hasPush4(pool, ALGEBRA_CALLBACK));
        assertFalse(_hasPush4(pool, PANCAKE_CALLBACK));
    }

    /// @dev Rewrites the dispatcher entry 0xfa461e33 to 0xcea2f9e3 in the
    ///      deployed adapter, keeping its storage, routes and immutables.
    function _patchCallbackSelector(address target) internal {
        bytes memory code = target.code;
        uint256 hits;
        for (uint256 i; i + 4 < code.length; ++i) {
            if (code[i] == 0x63 && bytes4(_word(code, i + 1)) == UNISWAP_CALLBACK) {
                code[i + 1] = KAYEN_CALLBACK[0];
                code[i + 2] = KAYEN_CALLBACK[1];
                code[i + 3] = KAYEN_CALLBACK[2];
                code[i + 4] = KAYEN_CALLBACK[3];
                ++hits;
            }
        }
        assertEq(hits, 1, "callback selector found once in the adapter");
        vm.etch(target, code);
    }

    function _hasPush4(address target, bytes4 selector) internal view returns (bool) {
        bytes memory code = target.code;
        for (uint256 i; i + 4 < code.length; ++i) {
            if (code[i] == 0x63 && bytes4(_word(code, i + 1)) == selector) return true;
        }
        return false;
    }

    function _word(bytes memory data, uint256 offset) private pure returns (bytes32 w) {
        assembly {
            w := mload(add(add(data, 0x20), offset))
        }
    }

    function _signedPermit(address token, uint256 amount) internal view returns (bytes memory) {
        (,, uint48 nonce) = IPermit2(PERMIT2).allowance(alice, token, UR);
        IPermit2.PermitSingle memory permit = IPermit2.PermitSingle(
            IPermit2.PermitDetails(token, uint160(amount), uint48(block.timestamp + 1 hours), nonce),
            UR,
            block.timestamp + 1 hours
        );
        bytes32 detailsHash = keccak256(abi.encode(
            keccak256("PermitDetails(address token,uint160 amount,uint48 expiration,uint48 nonce)"),
            permit.details
        ));
        bytes32 structHash = keccak256(abi.encode(
            keccak256(
                "PermitSingle(PermitDetails details,address spender,uint256 sigDeadline)"
                "PermitDetails(address token,uint160 amount,uint48 expiration,uint48 nonce)"
            ),
            detailsHash,
            permit.spender,
            permit.sigDeadline
        ));
        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", IPermit2(PERMIT2).DOMAIN_SEPARATOR(), structHash));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(aliceKey, digest);
        return abi.encode(permit, abi.encodePacked(r, s, v));
    }

    function _expectInvalidCommand(uint8 command) internal {
        bytes[] memory inputs = new bytes[](1);
        vm.expectRevert(abi.encodeWithSignature("InvalidCommandType(uint256)", uint256(command)));
        IUniversalRouter(UR).execute(abi.encodePacked(command), inputs, block.timestamp);
    }

    function _assertRouterEmpty() internal view {
        assertEq(UR.balance, 0, "router native");
        assertEq(IERC20(WCHZ).balanceOf(UR), 0, "router WCHZ");
        assertEq(IERC20(OM).balanceOf(UR), 0, "router OM");
    }

    /// @dev `bps` of the pool's current balance of `token`.
    function _size(address pool, address token, uint256 bps) internal view returns (uint256) {
        return IERC20(token).balanceOf(pool) * bps / 10_000;
    }

    function _route(address tokenIn, address tokenOut, address pool) internal {
        address[] memory pools = new address[](1);
        pools[0] = pool;
        adapter.setRoute(tokenIn, tokenOut, pools);
    }

    function _path(address a, address b) internal pure returns (address[] memory path) {
        path = new address[](2);
        path[0] = a;
        path[1] = b;
    }
}

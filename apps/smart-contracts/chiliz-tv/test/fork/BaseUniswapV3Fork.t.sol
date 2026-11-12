// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../../src/pari/BasketballPariMatch.sol";
import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";

interface ISwapRouter02 {
    struct ExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 amountIn;
        uint256 amountOutMinimum;
        uint160 sqrtPriceLimitX96;
    }

    function exactInputSingle(ExactInputSingleParams calldata params) external payable returns (uint256 amountOut);
    function factory() external view returns (address);
    function WETH9() external view returns (address);
}

interface IQuoterV2 {
    struct QuoteExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint256 amountIn;
        uint24 fee;
        uint160 sqrtPriceLimitX96;
    }

    function quoteExactInputSingle(QuoteExactInputSingleParams memory params)
        external
        returns (uint256 amountOut, uint160 sqrtPriceX96After, uint32 initializedTicksCrossed, uint256 gasEstimate);
}

interface IUniswapV3Factory {
    function getPool(address tokenA, address tokenB, uint24 fee) external view returns (address);
}

/**
 * @title Uniswap V3 on Base: what works and what does not (fork)
 * @notice NetworkRouter speaks the Uniswap V2 ABI that Kayen exposes
 *         (swapExactETHForTokens, swapExactTokensForTokens, getAmountsOut).
 *         Uniswap V3 has another ABI (exactInputSingle plus a QuoterV2), so
 *         these tests check the V3 infrastructure and wallets on the fork,
 *         then pin the fact that the router cannot use V3 as it stands.
 *
 *         Through anvil:
 *           BASE_RPC_URL=http://127.0.0.1:8547 BASE_SEPOLIA_RPC_URL=http://127.0.0.1:8548 \
 *             forge test --match-path "test/fork/BaseUniswapV3Fork.t.sol" -vv
 */
abstract contract BaseUniswapV3ForkTest is Test {
    address constant WETH = 0x4200000000000000000000000000000000000006;
    bytes32 constant WINNER = keccak256("WINNER");

    address governance = makeAddr("governanceSafe");
    address matchAdmin = makeAddr("matchAdmin");
    address oracle     = makeAddr("oracle");
    address alice      = makeAddr("alice");

    PariMatchFactory  factory;
    NetworkRouter     router;
    FootballPariMatch m;

    function _rpcUrl() internal view virtual returns (string memory);
    function _chainId() internal pure virtual returns (uint256);
    function _usdc() internal pure virtual returns (address);
    function _swapRouter02() internal pure virtual returns (address);
    function _quoterV2() internal pure virtual returns (address);
    function _v3Factory() internal pure virtual returns (address);
    function _poolFee() internal pure virtual returns (uint24);

    function setUp() public {
        vm.createSelectFork(_rpcUrl());
        assertEq(block.chainid, _chainId());

        factory = new PariMatchFactory(
            address(new FootballPariMatch()), address(new BasketballPariMatch()), governance
        );
        // What a config-only port to V3 would look like.
        router = new NetworkRouter(_swapRouter02(), _swapRouter02(), _usdc(), WETH, governance, 500);
        factory.setWiring(_usdc(), governance, address(router));
        router.setMatchFactory(address(factory));

        m = FootballPariMatch(payable(factory.createFootballMatch("Base FC vs V3 United", matchAdmin, oracle)));
        vm.startPrank(matchAdmin);
        m.addMarketWithLine(WINNER, 0);
        m.openMarket(0);
        vm.stopPrank();

        vm.deal(alice, 10 ether);
    }

    function _quote(uint256 amountIn) internal returns (uint256 out) {
        (out,,,) = IQuoterV2(_quoterV2()).quoteExactInputSingle(
            IQuoterV2.QuoteExactInputSingleParams(WETH, _usdc(), amountIn, _poolFee(), 0)
        );
    }

    function test_Env_V3AddressesAreConsistentOnChain() public view {
        assertEq(ISwapRouter02(_swapRouter02()).factory(), _v3Factory());
        assertEq(ISwapRouter02(_swapRouter02()).WETH9(), WETH);
        assertTrue(IUniswapV3Factory(_v3Factory()).getPool(WETH, _usdc(), _poolFee()) != address(0), "WETH/USDC pool");
    }

    /// @dev Proves the fork, the funded wallet and the V3 pool are usable.
    function test_Env_DirectV3SwapFromTestWallet() public {
        uint256 quoted = _quote(0.01 ether);
        assertGt(quoted, 0, "pool has liquidity");

        vm.prank(alice);
        uint256 out = ISwapRouter02(_swapRouter02()).exactInputSingle{value: 0.01 ether}(
            ISwapRouter02.ExactInputSingleParams(WETH, _usdc(), _poolFee(), alice, 0.01 ether, (quoted * 99) / 100, 0)
        );
        assertEq(out, quoted, "QuoterV2 predicts the swap");
        assertEq(IERC20(_usdc()).balanceOf(alice), out);
    }

    /// @dev Pins the gap: replacing the router address is not enough for V3.
    function test_Gap_RouterCannotSwapThroughUniswapV3() public {
        uint256 quoted = _quote(0.01 ether);
        vm.prank(alice);
        vm.expectRevert();
        router.placeBetWithNativeToken{value: 0.01 ether}(address(m), 0, 0, (quoted * 99) / 100, block.timestamp + 1 hours);
        assertEq(m.getUserStake(0, alice, 0), 0);
    }

    /// @dev The on-chain quote the UI needs for amountOutMin is unavailable too.
    function test_Gap_RouterCannotQuoteThroughUniswapV3() public view {
        assertEq(router.quoteTokenToUSDC(WETH, 0.01 ether), 0);
    }
}

contract BaseMainnetUniswapV3ForkTest is BaseUniswapV3ForkTest {
    function _rpcUrl() internal view override returns (string memory) {
        return vm.envOr("BASE_RPC_URL", string("https://mainnet.base.org"));
    }
    function _chainId() internal pure override returns (uint256) { return 8453; }
    function _usdc() internal pure override returns (address) { return 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913; }
    function _swapRouter02() internal pure override returns (address) { return 0x2626664c2603336E57B271c5C0b26F421741e481; }
    function _quoterV2() internal pure override returns (address) { return 0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a; }
    function _v3Factory() internal pure override returns (address) { return 0x33128a8fC17869897dcE68Ed026d694621f6FDfD; }
    function _poolFee() internal pure override returns (uint24) { return 500; }
}

contract BaseSepoliaUniswapV3ForkTest is BaseUniswapV3ForkTest {
    function _rpcUrl() internal view override returns (string memory) {
        return vm.envOr("BASE_SEPOLIA_RPC_URL", string("https://sepolia.base.org"));
    }
    function _chainId() internal pure override returns (uint256) { return 84532; }
    function _usdc() internal pure override returns (address) { return 0x036CbD53842c5426634e7929541eC2318f3dCF7e; }
    function _swapRouter02() internal pure override returns (address) { return 0x94cC0AaC535CCDB3C01d6787D6413C739ae12bc4; }
    function _quoterV2() internal pure override returns (address) { return 0xC5290058841028F1614F3A6F0F5816cAd0df5E27; }
    function _v3Factory() internal pure override returns (address) { return 0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24; }
    function _poolFee() internal pure override returns (uint24) { return 3000; }
}

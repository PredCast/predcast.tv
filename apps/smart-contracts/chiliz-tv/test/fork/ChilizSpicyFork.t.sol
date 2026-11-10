// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../../src/pari/BasketballPariMatch.sol";
import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";

/**
 * @title Chiliz Spicy testnet smoke test (fork)
 * @notice Spicy has one priced Kayen pool, WCHZ/USDC (850k WCHZ for 17 USDC).
 *         Every fan token pool is empty, so only CHZ and USDC paths can run.
 *
 *         Through anvil:
 *           CHILIZ_SPICY_RPC_URL=http://127.0.0.1:8546 \
 *             forge test --match-path "test/fork/ChilizSpicyFork.t.sol" -vv
 */
contract ChilizSpicyForkTest is Test {
    address constant USDC         = 0x66F3eE96A0185216f8cb427D2BC4E53947CEF60C;
    address constant WCHZ         = 0x678c34581db0a7808d0aC669d7025f1408C9a3C6;
    address constant KAYEN_ROUTER = 0xb82b0e988a1FcA39602c5079382D360C870b44c8;
    address constant FAN_PSG      = 0xb0Fa395a3386800658B9617F90e834E2CeC76Dd3;

    bytes32 constant WINNER = keccak256("WINNER");

    address governance = makeAddr("governanceSafe");
    address matchAdmin = makeAddr("matchAdmin");
    address oracle     = makeAddr("oracle");
    address alice      = makeAddr("alice");
    address bob        = makeAddr("bob");

    PariMatchFactory  factory;
    NetworkRouter     router;
    FootballPariMatch m;

    function setUp() public {
        vm.createSelectFork(vm.envOr("CHILIZ_SPICY_RPC_URL", string("https://spicy-rpc.chiliz.com")));
        assertEq(block.chainid, 88882, "not a Spicy fork");

        factory = new PariMatchFactory(
            address(new FootballPariMatch()), address(new BasketballPariMatch()), governance
        );
        router = new NetworkRouter(KAYEN_ROUTER, KAYEN_ROUTER, USDC, WCHZ, governance, 500);
        factory.setWiring(USDC, governance, address(router));
        router.setMatchFactory(address(factory));

        m = FootballPariMatch(payable(factory.createFootballMatch("Spicy FC vs Testnet United", matchAdmin, oracle)));
        vm.startPrank(matchAdmin);
        m.addMarketWithLine(WINNER, 0);
        m.openMarket(0);
        vm.stopPrank();

        vm.deal(alice, 100_000 ether);
        vm.deal(bob, 100_000 ether);
    }

    function test_FullRound_NativeCHZ() public {
        uint256 qa = router.quoteTokenToUSDC(WCHZ, 5_000 ether);
        vm.prank(alice);
        router.placeBetWithNativeToken{value: 5_000 ether}(address(m), 0, 0, (qa * 98) / 100, block.timestamp + 1 hours);

        uint256 qb = router.quoteTokenToUSDC(WCHZ, 2_000 ether);
        vm.prank(bob);
        router.placeBetWithNativeToken{value: 2_000 ether}(address(m), 0, 2, (qb * 98) / 100, block.timestamp + 1 hours);

        uint256 total = m.getTotalPool(0);
        assertEq(IERC20(USDC).balanceOf(address(m)), total);

        vm.prank(matchAdmin);
        m.closeMarket(0);
        vm.prank(oracle);
        m.resolveMarket(0, 0);

        vm.prank(alice);
        m.claim(0);
        assertGt(IERC20(USDC).balanceOf(alice), m.getUserStake(0, alice, 0), "winner takes the other side");
    }

    function test_FanTokensHaveNoLiquidityOnSpicy() public view {
        assertEq(router.quoteTokenToUSDC(FAN_PSG, 5), 0);
    }
}

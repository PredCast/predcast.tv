// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Script, console} from "forge-std/Script.sol";
import {IERC20}          from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {PariMatchFactory}    from "../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../src/pari/FootballPariMatch.sol";
import {NetworkRouter}       from "../src/swap/NetworkRouter.sol";
import {StreamWallet}        from "../src/streamer/StreamWallet.sol";
import {StreamWalletFactory} from "../src/streamer/StreamWalletFactory.sol";

/**
 * @title SmokeTestBase
 * @notice End-to-end check of a fresh `DeployAll` on Base (Sepolia first):
 *         one bet round paid in native ETH and one donation plus one
 *         subscription, with every amount checked against the router quote.
 *
 *         Three keys, all distinct (the factory refuses an oracle equal to
 *         the operator or the match owner):
 *           PRIVATE_KEY         deployer = factory owner = match operator, bettor A, viewer
 *           OWNER_PRIVATE_KEY   match owner (ADMIN_ROLE), bettor B, streamer
 *           ORACLE_PRIVATE_KEY  oracle (RESOLVER_ROLE)
 *         PARI_FACTORY_ADDRESS  the factory DeployAll created
 *
 *         Rehearse on a fork first:
 *           forge script script/SmokeTestBase.s.sol --rpc-url http://127.0.0.1:8548
 *         then add --broadcast --slow with the real RPC. On Base mainnet also
 *         pass --evm-version cancun (with its own --out / --cache-path): the
 *         pools' swap hooks use Cancun opcodes and a shanghai simulation
 *         prices the route at 0. Amounts are a few cents of ETH; the script
 *         stops at the first unexpected value.
 */
contract SmokeTestBase is Script {
    bytes32 internal constant WINNER = keccak256("WINNER");
    address internal constant WETH = 0x4200000000000000000000000000000000000006;

    uint256 internal constant BET_A = 0.0002 ether;
    uint256 internal constant BET_B = 0.0001 ether;
    uint256 internal constant DONATION = 0.0001 ether;
    uint256 internal constant SUBSCRIPTION = 0.0001 ether;
    uint256 internal constant PRICE = 50_000; // 0.05 USDC per 30 days

    struct Keys {
        uint256 deployer;
        uint256 owner;
        uint256 oracle;
        address deployerAddr;
        address ownerAddr;
        address oracleAddr;
    }

    function run() external {
        require(block.chainid == 84532 || block.chainid == 8453, "Base only");
        Keys memory k = Keys({
            deployer: vm.envUint("PRIVATE_KEY"),
            owner: vm.envUint("OWNER_PRIVATE_KEY"),
            oracle: vm.envUint("ORACLE_PRIVATE_KEY"),
            deployerAddr: address(0),
            ownerAddr: address(0),
            oracleAddr: address(0)
        });
        k.deployerAddr = vm.addr(k.deployer);
        k.ownerAddr = vm.addr(k.owner);
        k.oracleAddr = vm.addr(k.oracle);

        PariMatchFactory factory = PariMatchFactory(vm.envAddress("PARI_FACTORY_ADDRESS"));
        NetworkRouter router = NetworkRouter(factory.swapRouter());
        IERC20 usdc = IERC20(factory.usdcToken());
        require(address(router.usdc()) == address(usdc), "router and factory use the same USDC");

        FootballPariMatch m = _betRound(k, factory, router, usdc);
        _streamingRound(k, router, usdc);

        require(usdc.balanceOf(address(router)) == 0, "router keeps no USDC");
        require(uint256(vm.load(address(m), bytes32(uint256(13)))) == 0, "match owes nothing after the claim");
        console.log("SMOKE TEST PASSED on chain", block.chainid);
        console.log("  match", address(m));
    }

    function _betRound(Keys memory k, PariMatchFactory factory, NetworkRouter router, IERC20 usdc)
        internal
        returns (FootballPariMatch m)
    {
        vm.startBroadcast(k.deployer);
        m = FootballPariMatch(payable(factory.createFootballMatch("Smoke FC vs Base United", k.ownerAddr, k.oracleAddr)));
        vm.stopBroadcast();
        require(m.hasRole(m.RESOLVER_ROLE(), k.oracleAddr), "oracle wired");
        require(!m.hasRole(m.RESOLVER_ROLE(), k.ownerAddr), "match owner is not the oracle");

        vm.startBroadcast(k.owner);
        m.addMarketWithLine(WINNER, 0);
        m.openMarket(0);
        vm.stopBroadcast();

        uint256 quoteA = router.quoteTokenToUSDC(WETH, BET_A);
        uint256 quoteB = router.quoteTokenToUSDC(WETH, BET_B);
        require(quoteA > 0 && quoteB > 0, "WETH/USDC route priced");

        vm.startBroadcast(k.deployer);
        router.placeBetWithNativeToken{value: BET_A}(address(m), 0, 0, (quoteA * 99) / 100, block.timestamp + 30 minutes);
        vm.stopBroadcast();
        vm.startBroadcast(k.owner);
        router.placeBetWithNativeToken{value: BET_B}(address(m), 0, 2, (quoteB * 99) / 100, block.timestamp + 30 minutes);
        vm.stopBroadcast();

        uint256 stakeA = m.getUserStake(0, k.deployerAddr, 0);
        uint256 stakeB = m.getUserStake(0, k.ownerAddr, 2);
        require(stakeA >= (quoteA * 99) / 100 && stakeB >= (quoteB * 99) / 100, "stakes at least the minimum");
        uint256 total = m.getTotalPool(0);
        require(total == stakeA + stakeB, "pool = sum of stakes");
        require(usdc.balanceOf(address(m)) == total, "the match holds every stake");
        console.log("  stakes (USDC, 6 dec):", stakeA, stakeB);

        vm.startBroadcast(k.owner);
        m.closeMarket(0);
        vm.stopBroadcast();

        address feeRecipient = m.feeRecipient();
        address leaderboard = m.leaderboardRecipient();
        uint256 feeBefore = usdc.balanceOf(feeRecipient);
        uint256 lbBefore = usdc.balanceOf(leaderboard);
        vm.startBroadcast(k.oracle);
        m.resolveMarket(0, 0);
        vm.stopBroadcast();

        (uint16 totalBps, uint16 lbBps,) = m.getMarketFees(0);
        uint256 lbFee = (total * lbBps) / 10_000;
        uint256 companyFee = (total * (totalBps - lbBps)) / 10_000;
        require(usdc.balanceOf(feeRecipient) - feeBefore == companyFee, "company fee to the treasury");
        require(usdc.balanceOf(leaderboard) - lbBefore == lbFee, "leaderboard share");

        uint256 before = usdc.balanceOf(k.deployerAddr);
        vm.startBroadcast(k.deployer);
        m.claim(0);
        vm.stopBroadcast();
        uint256 payout = usdc.balanceOf(k.deployerAddr) - before;
        require(payout == total - lbFee - companyFee, "sole winner takes the net pool");
        console.log("  payout (USDC, 6 dec):", payout);
    }

    function _streamingRound(Keys memory k, NetworkRouter router, IERC20 usdc) internal {
        StreamWalletFactory streams = router.streamWalletFactory();
        address treasury = router.treasury();
        uint16 feeBps = router.platformFeeBps();

        uint256 quote = router.quoteTokenToUSDC(WETH, DONATION);
        uint256 treasuryBefore = usdc.balanceOf(treasury);
        vm.startBroadcast(k.deployer);
        router.donateWithNativeToken{value: DONATION}(k.ownerAddr, "smoke test", (quote * 99) / 100, block.timestamp + 30 minutes);
        vm.stopBroadcast();

        StreamWallet wallet = StreamWallet(payable(streams.getWallet(k.ownerAddr)));
        require(address(wallet) != address(0), "wallet created on first donation");
        uint256 gross = wallet.totalRevenue();
        uint256 fee = (gross * feeBps) / 10_000;
        require(usdc.balanceOf(treasury) - treasuryBefore == fee, "streaming fee to the treasury");
        require(usdc.balanceOf(address(wallet)) == gross - fee, "the rest in the wallet");

        vm.startBroadcast(k.owner);
        wallet.setSubscriptionPricing(PRICE, 30 days);
        vm.stopBroadcast();

        quote = router.quoteTokenToUSDC(WETH, SUBSCRIPTION);
        require((quote * 99) / 100 >= wallet.subscriptionCost(30 days), "the amount covers 30 days");
        vm.startBroadcast(k.deployer);
        router.subscribeWithNativeToken{value: SUBSCRIPTION}(k.ownerAddr, 30 days, (quote * 99) / 100, block.timestamp + 30 minutes);
        vm.stopBroadcast();
        require(wallet.isSubscribed(k.deployerAddr), "subscribed");

        uint256 balance = usdc.balanceOf(address(wallet));
        uint256 streamerBefore = usdc.balanceOf(k.ownerAddr);
        vm.startBroadcast(k.owner);
        wallet.withdrawRevenue(balance);
        vm.stopBroadcast();
        require(usdc.balanceOf(k.ownerAddr) - streamerBefore == balance, "streamer withdrew everything");
        console.log("  streaming gross / withdrawn (USDC, 6 dec):", wallet.totalRevenue(), balance);
    }
}

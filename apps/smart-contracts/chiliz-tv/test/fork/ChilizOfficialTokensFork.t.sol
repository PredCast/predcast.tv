// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test, console2} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import {PariMatchFactory}    from "../../src/pari/PariMatchFactory.sol";
import {PariMatchBase}       from "../../src/pari/PariMatchBase.sol";
import {FootballPariMatch}   from "../../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../../src/pari/BasketballPariMatch.sol";
import {NetworkRouter}       from "../../src/swap/NetworkRouter.sol";

/**
 * @title Official Chiliz token list through the audited router (fork)
 * @notice https://docs.chiliz.com/quick-start/token-contract-addresses lists one
 *         18-decimals contract per ticker on Chiliz Chain. They are not the
 *         0-decimals CAP-20 tested in ChilizKayenE2EFork, and most of their
 *         Kayen pools hold almost nothing.
 *
 *         Through anvil:
 *           CHILIZ_RPC_URL=http://127.0.0.1:8545 BASE_RPC_URL=http://127.0.0.1:8547 \
 *             forge test --match-path "test/fork/ChilizOfficialTokensFork.t.sol" -vv
 */
contract ChilizOfficialTokensForkTest is Test {
    struct Token {
        string symbol;
        address token;
    }

    address constant USDC            = 0xa37936F56249965d407E39347528a1A91eB1cbef;
    address constant WCHZ            = 0x677F7e16C7Dd57be1D4C8aD1244883214953DC47;
    address constant KAYEN_ROUTER    = 0x1918EbB39492C8b98865c5E53219c3f1AE79e76F;
    address constant WRAPPER_FACTORY = 0xAEdcF2bf41891777c5F638A098bbdE1eDBa7B264;

    address constant OFFICIAL_PSG   = 0xFe1d4A935df7A4A52F835f6104C97AF9D72217f2;
    address constant OFFICIAL_SPAIN = 0x7A224b67aAA360e48402AAb4Ff12D89eEF9b4cF8;
    address constant OFFICIAL_DOJO  = 0xb66D72efc5fD77A8F9Dc2E7c0f14304828956644;

    bytes32 constant WINNER = keccak256("WINNER");

    address governance = makeAddr("governanceSafe");
    address matchAdmin = makeAddr("matchAdmin");
    address oracle     = makeAddr("oracle");
    address alice      = makeAddr("alice");

    PariMatchFactory  factory;
    NetworkRouter     router;
    FootballPariMatch m;

    function setUp() public {
        vm.createSelectFork(vm.envOr("CHILIZ_RPC_URL", string("https://rpc.chiliz.com")));
        assertEq(block.chainid, 88888, "not a Chiliz mainnet fork");

        factory = new PariMatchFactory(
            address(new FootballPariMatch()), address(new BasketballPariMatch()), governance
        );
        router = new NetworkRouter(KAYEN_ROUTER, KAYEN_ROUTER, USDC, WCHZ, governance, 500);
        factory.setWiring(USDC, governance, address(router));
        router.setMatchFactory(address(factory));
        router.setWrapperFactory(WRAPPER_FACTORY);

        m = FootballPariMatch(payable(factory.createFootballMatch("Official FC vs Kayen United", matchAdmin, oracle)));
        vm.startPrank(matchAdmin);
        m.addMarketWithLine(WINNER, 0);
        m.openMarket(0);
        vm.stopPrank();
    }

    function _official() internal pure returns (Token[] memory t) {
        t = new Token[](82);
        t[0] = Token("PEPPER", 0x60F397acBCfB8f4e3234C659A3E10867e6fA6b67);
        t[1] = Token("ACM", 0x062F6004FD0BF204D272Ff115E5b84F7A01489D1);
        t[2] = Token("AFC", 0x76088F3eD5dC655De9295D93868ec1EeC654A615);
        t[3] = Token("ALA", 0x3B60F483fe311FC063b50A67BF327F96B76696E6);
        t[4] = Token("ALL", 0x109b738569A04eA31CA06B47aF06CfdDa87ADF48);
        t[5] = Token("AM", 0xf0D5De46729f4E2F28c27a98E15Ef18dF951Ec44);
        t[6] = Token("APL", 0x0B00E360BEE5557D0D9A548030AA8f7182daF56f);
        t[7] = Token("ARG", 0x4394886B1eec08Fe88681462914702dC99D97Eb7);
        t[8] = Token("ASM", 0x57F3D2382025cF5d6c3B126dcE0360D9Cf3AfF49);
        t[9] = Token("ASR", 0x0Ac7bf9783CA1dcd86A39B5a2607160D29256EB0);
        t[10] = Token("ATLAS", 0xc1A2b6950786383114828FCF816199b6d5f4960A);
        t[11] = Token("ATM", 0x7da0eB973D982FFcA095E80437F5e37459a95C67);
        t[12] = Token("AVL", 0x4F3a607bB2717683108865fc785BadFa90094431);
        t[13] = Token("BAHIA", 0xc75037B67Ade9364F451D49bfAE776619a292181);
        t[14] = Token("BAR", 0x1589248b4B61ed472cc21CA1F2114d93ab6910D5);
        t[15] = Token("BELG", 0x6c4C9DFE8C940b51B68d00C6D76dE756B252f328);
        t[16] = Token("BENFICA", 0xF4c653b74929953B29B966aBA99b681Fb5ab69cF);
        t[17] = Token("BFC", 0xD77de9fcE56F371e347217D57394f1Fa07F02d64);
        t[18] = Token("BUFC", 0xafb78165c62744bd21B4DDef48c11A93D395dAa2);
        t[19] = Token("CAI", 0x99F7b1f8d445b6CBD231017820DE372e2c5f9a27);
        t[20] = Token("CHVS", 0x3624BA092480fb0bDB5ec50EbaC699BdFa561416);
        t[21] = Token("CITY", 0x7Bd6242D775fAEf1d50B2aA18C2FBF329BDDF295);
        t[22] = Token("CPFC", 0x58613484D9683d52899e13d42BB3fb9eEB0749da);
        t[23] = Token("DAVIS", 0x97B79Dd60A1211A9612f98194591F4483FF83cE3);
        t[24] = Token("DOJO", 0xb66D72efc5fD77A8F9Dc2E7c0f14304828956644);
        t[25] = Token("DZG", 0x03bE2eA82839FBD8b6ab16aDdEba3FE4C88bB43F);
        t[26] = Token("EFC", 0xa84E55C2464563441cb4114372DF8D5aca49Fc83);
        t[27] = Token("ENDCEX", 0x4CF8426c1D90a505dcb8D96c4F295494a548f4a2);
        t[28] = Token("FLU", 0x9840dC03032f4F35d7DBdc8dB832aCFAF6Ff3e77);
        t[29] = Token("FOR", 0x078B3C0Ad7Ea92EfD14Af146bf4171E80cE41e1C);
        t[30] = Token("GAL", 0x770da1e5dDB22f3Ccc2482493BD9B10A7A8A38Ae);
        t[31] = Token("GALO", 0x558Cc7Ac99793B10c1C142a1C7e5AdF6657DeA9c);
        t[32] = Token("GFK", 0x72b30f41D5163A5082f9461f0B8346789639e063);
        t[33] = Token("GOZ", 0x6ba1FB0dAdAEB34ea24EB31d416805abE8921448);
        t[34] = Token("HASHTAG", 0x3c1487C5036105338396055d74EeE505a9F6A2f3);
        t[35] = Token("IBFK", 0x7B69003C404B0579F257c16E2664b4Eb4c7b2acf);
        t[36] = Token("INTER", 0x1b3385A26214057bB7e27c173ee2D14201752e73);
        t[37] = Token("ITA", 0x90111A53D94efe28F34562b53F04F471522d57b3);
        t[38] = Token("JDT", 0x9aF2bD7003f043124AA13A21a2460996F7Ba9a3B);
        t[39] = Token("JUV", 0xeAf368DAdC22524deF47E8A1C26bFC17AC16E6F5);
        t[40] = Token("LEG", 0xFd8A11532c5Ca9bec64ec86e4E5ed78089CD443f);
        t[41] = Token("LEV", 0x084Ba7f44Cd799dECDe593A4045170f014c29845);
        t[42] = Token("LUFC", 0xE3ECD48f7653e6da693B544d50caB0BCdCd35C13);
        t[43] = Token("MENGO", 0xBfF8FaBb04f6494fe393EB7416A698869569A310);
        t[44] = Token("MFC", 0x580edA966a8129C3c01D149871B47feFcC599D28);
        t[45] = Token("MIBR", 0x8CAf9018Aa56f7Db55bB353005C7aa0FBfb1736b);
        t[46] = Token("NAP", 0x90593E9602b38A0D5b63d9f34AC3560798cEE7d4);
        t[47] = Token("NAVI", 0x02728748392F1875682940681F4C936Fc683A68e);
        t[48] = Token("OG", 0xb3f2E39Acc68F98229B2587361a8cE30aCDf0442);
        t[49] = Token("PERSIB", 0xDD15623d107c639aF0C5127AFFA26d3f20327EC8);
        t[50] = Token("PERSIJA", 0xdc061856766d4991724307b9b0EA217fF8F3bbEE);
        t[51] = Token("PFL", 0x3444F5436A3C02F3a3dB8f2436b02BC1EEa950d6);
        t[52] = Token("POR", 0x013F2407c6eF765F1199f8818B805121F269F5b8);
        t[53] = Token("PSG", 0xFe1d4A935df7A4A52F835f6104C97AF9D72217f2);
        t[54] = Token("QUINS", 0x110A0fC65a0f78840f4b4A04A42e8c285E424553);
        t[55] = Token("RACING", 0x02300475d1EdD5b2E88EFdeBD3fFb549110D8Aa6);
        t[56] = Token("ROUSH", 0xAe0E559cfB64191e376317895f1d643df22d8dD7);
        t[57] = Token("RSO", 0x53838837f258f8Ef337C8b4CEb60a89190EcBa8B);
        t[58] = Token("SACI", 0x4c360BE766dD95c973bE30c4130E7b4B762113E0);
        t[59] = Token("SAFA", 0xf81Aa505Df80278Fc4cF2B050086f678D48bDdCE);
        t[60] = Token("SAM", 0xf78E9Ce916a7D6b3d4FaCbA95b9e9b8BbA5df609);
        t[61] = Token("SAN", 0x3BA1eB0FF58537d8b77E8446273295fC432439A9);
        t[62] = Token("SARRIES", 0x72B1FCA1008BE96C4fdE2539379c1778A76c4fCa);
        t[63] = Token("SAUBER", 0xE64c9D1471cFb5e7b03c998AC8137b441c60AF6D);
        t[64] = Token("SCCP", 0x25fb4ff916faFb88d78918c54C1d14B57586046b);
        t[65] = Token("SEVILLA", 0xA584cca6a5C46ead6FF8EF3beB8FAC76364c36Cb);
        t[66] = Token("SFA", 0xfaB24366503Eb0fa8CB8FB7d1311159FD4283657);
        t[67] = Token("SFP", 0x04aa2d5c46691f05D30b9E65a9E09C8ea383c7B0);
        t[68] = Token("SHARKS", 0x0cb13408921F87E3A3D011b03935A81A1542bDFa);
        t[69] = Token("SPAIN", 0x7A224b67aAA360e48402AAb4Ff12D89eEF9b4cF8);
        t[70] = Token("SPFC", 0x6345c0ECcA1B9007a9043CB5da8150aE07adD498);
        t[71] = Token("SPURS", 0xd699ACD21011c20381E5138A430bb0d7b6E9BC7F);
        t[72] = Token("STV", 0x71Bc882c60b9EfDf85D0E1A28Fc86f0BD822132F);
        t[73] = Token("TH", 0x0b5De9e1303F3FB4F67D1ACA1503DDB28Bf59834);
        t[74] = Token("TIGERS", 0xc430fFb62961Ff910181eDcAE34aE9Fc418a15cE);
        t[75] = Token("TRA", 0xEff432433Dd57AdFA37004af00DB148F9407e7bD);
        t[76] = Token("UCH", 0xFe050a08699a2557bCc0A8E6C2805eBA55D61065);
        t[77] = Token("UFC", 0xC9f723625e80a81cBa2CAd3e6871D3bdf2a7ECC7);
        t[78] = Token("VASCO", 0xD5f1B2454db115967bfAc73bFEa21Da5e2543c8E);
        t[79] = Token("VCF", 0x83d7D1df01C698b4379077aF4bCEB2D4AF113BfF);
        t[80] = Token("VERDAO", 0xb46357d8Ed050D35D3a24154c39d7236dAE86187);
        t[81] = Token("YBO", 0x8c4d631A673bE24F244E4f0645BE6928d0083d4e);
    }

    function _bet(address token, uint256 amount, uint256 min) internal {
        deal(token, alice, amount);
        vm.startPrank(alice);
        IERC20(token).approve(address(router), amount);
        router.placeBetWithToken(token, amount, address(m), 0, 0, min, block.timestamp + 1 hours);
        vm.stopPrank();
    }

    function _checkBet(address token) internal {
        uint256 amount = 1 ether;
        uint256 quote = router.quoteTokenToUSDC(token, amount);
        assertGe(quote, m.MIN_STAKE(), "quote is below the minimum stake");

        uint256 before = IERC20(USDC).balanceOf(address(m));
        _bet(token, amount, (quote * 98) / 100);

        assertEq(m.getUserStake(0, alice, 0), quote, "stake differs from the quote");
        assertEq(IERC20(USDC).balanceOf(address(m)) - before, quote, "match is not the escrow");
        assertEq(IERC20(token).balanceOf(address(router)), 0, "dust left in the router");
    }

    /// @dev Every official address is an 18-decimals token and routes raw, hubbed on WCHZ.
    function test_Official_EveryTokenRoutesRawOnWCHZ() public view {
        Token[] memory t = _official();
        uint256 bettable;
        for (uint256 i; i < t.length; i++) {
            assertGt(t[i].token.code.length, 0, t[i].symbol);
            assertEq(IERC20Metadata(t[i].token).decimals(), 18, t[i].symbol);

            (address swapToken,, address[] memory path, uint256 out) = router.routeFor(t[i].token, 1 ether);
            assertEq(swapToken, t[i].token, t[i].symbol);
            assertEq(path.length, 3, t[i].symbol);
            assertEq(path[1], WCHZ, t[i].symbol);
            assertEq(path[2], USDC, t[i].symbol);
            if (out >= m.MIN_STAKE()) bettable++;
        }
        console2.log("official tokens:", t.length);
        console2.log("1 token reaches the minimum stake:", bettable);
    }

    function test_Official_BetWithSPAIN() public {
        _checkBet(OFFICIAL_SPAIN);
    }

    function test_Official_BetWithDOJO() public {
        _checkBet(OFFICIAL_DOJO);
    }

    /// @dev Official PSG has about 0.44 WCHZ in its pool: no amount can reach MIN_STAKE.
    function test_Official_PSGPoolIsTooThinToBet() public {
        uint256 amount = 1_000 ether;
        uint256 quote = router.quoteTokenToUSDC(OFFICIAL_PSG, amount);
        assertGt(quote, 0, "route is priced");
        assertLt(quote, m.MIN_STAKE(), "pool should be too thin");

        deal(OFFICIAL_PSG, alice, amount);
        vm.startPrank(alice);
        IERC20(OFFICIAL_PSG).approve(address(router), amount);
        vm.expectRevert(abi.encodeWithSelector(PariMatchBase.StakeBelowMinimum.selector, quote, m.MIN_STAKE()));
        router.placeBetWithToken(OFFICIAL_PSG, amount, address(m), 0, 0, (quote * 98) / 100, block.timestamp + 1 hours);
        vm.stopPrank();
    }

    /// @dev The docs reuse six addresses for different tickers on Chiliz and Base.
    function test_Official_SameAddressIsAnotherTokenOnBase() public {
        address[6] memory a = [
            0xDD15623d107c639aF0C5127AFFA26d3f20327EC8,
            0x580edA966a8129C3c01D149871B47feFcC599D28,
            0x53838837f258f8Ef337C8b4CEb60a89190EcBa8B,
            0xb46357d8Ed050D35D3a24154c39d7236dAE86187,
            0x110A0fC65a0f78840f4b4A04A42e8c285E424553,
            0x02300475d1EdD5b2E88EFdeBD3fFb549110D8Aa6
        ];
        string[6] memory onChiliz = ["PERSIB", "MFC", "RSO", "VERDAO", "QUINS", "RACING"];
        string[6] memory onBase = ["PSG", "AFC", "ASR", "ATM", "BAR", "CITY"];

        for (uint256 i; i < 6; i++) {
            assertEq(IERC20Metadata(a[i]).symbol(), onChiliz[i]);
        }
        vm.createSelectFork(vm.envOr("BASE_RPC_URL", string("https://mainnet.base.org")));
        for (uint256 i; i < 6; i++) {
            assertEq(IERC20Metadata(a[i]).symbol(), onBase[i]);
        }
    }
}

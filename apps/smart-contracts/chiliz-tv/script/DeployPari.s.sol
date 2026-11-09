// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Script, console} from "forge-std/Script.sol";

import {PariMatchFactory}    from "../src/pari/PariMatchFactory.sol";
import {FootballPariMatch}   from "../src/pari/FootballPariMatch.sol";
import {BasketballPariMatch} from "../src/pari/BasketballPariMatch.sol";
import {NetworkRouter}       from "../src/swap/NetworkRouter.sol";

/**
 * @title DeployPari
 * @notice Deploys ONLY the pari-mutuel betting system (PariMatchFactory +
 *         NetworkRouter + one sample match). No streaming.
 *
 * ⚠ Streaming is intentionally not wired. The swap router's `donateWith*` /
 *   `subscribeWith*` entrypoints WILL revert with `StreamFactoryNotSet` until
 *   a StreamWalletFactory is deployed and registered via
 *   `swapRouter.setStreamWalletFactory(...)`. If you want both modules in a
 *   single run, use DeployAll.s.sol instead.
 *
 * Required environment variables:
 *   OWNER_ADDRESS         — multi-sig that receives admin roles on matches
 *   ORACLE_ADDRESS        — resolver (backend oracle key)
 *   FEE_RECIPIENT         — address that receives protocol fees
 *   USDC_ADDRESS          — USDC on target chain
 *   KAYEN_MASTER_ROUTER   — Kayen MasterRouterV2 (CHZ → USDC path)
 *   KAYEN_ROUTER          — Kayen standard router (ERC20 → USDC path)
 *   WCHZ_ADDRESS          — Wrapped CHZ
 *   PLATFORM_FEE_BPS      — Platform swap fee (e.g. 500 = 5%)
 *
 * Optional:
 *   SAMPLE_MATCH_NAME     — Human-readable name for the sample match
 *                            (default: "Barcelona vs Real Madrid")
 *   SKIP_SAMPLE_MATCH     — When "true", does not create a sample match.
 *   TRANSFER_OWNERSHIP    — When "true", hands Ownable.owner of the factory
 *                            and the router to FEE_RECIPIENT at the end.
 *                            Default false for testnet iteration.
 *
 * USAGE:
 *   forge script script/DeployPari.s.sol \
 *     --rpc-url $RPC_URL --broadcast --verify -vvvv
 *
 * The signer comes from forge's --private-key / --account flag, NOT from a
 * DEPLOYER_PRIVATE_KEY env var (avoids leaking keys via /proc/<pid>/environ).
 */
contract DeployPari is Script {

    PariMatchFactory public factory;
    NetworkRouter public router;

    address public deployer;
    address public owner_;       // match admin (multisig)
    address public oracle;       // resolver / oracle
    address public feeRecip;     // protocol fee recipient (also Safe for ownership transfer)
    address public usdcAddr;
    address public masterRouter;
    address public tokenRouter;
    address public wchz;
    uint16  public platformFeeBps;
    bool    public transferOwnership;
    address public upgradeAdmin;
    bool    public skipSampleMatch;
    string  public sampleMatchName;

    function run() external {
        deployer = msg.sender;
        _loadConfig();

        vm.startBroadcast();

        _printHeader();
        _deployFactory();
        _deployRouter();
        _wire();

        address sampleMatch = address(0);
        if (!skipSampleMatch) {
            sampleMatch = _createSampleMatch();
        }

        if (transferOwnership) {
            _transferOwnershipToSafe();
        }

        _printSummary(sampleMatch);
        _printPostDeploymentSteps();

        vm.stopBroadcast();
    }

    // ──────────────────────────────────────────────────────────────────────

    function _loadConfig() internal {
        owner_         = vm.envAddress("OWNER_ADDRESS");
        oracle         = vm.envAddress("ORACLE_ADDRESS");
        feeRecip       = vm.envAddress("FEE_RECIPIENT");
        usdcAddr       = vm.envAddress("USDC_ADDRESS");
        masterRouter   = vm.envAddress("KAYEN_MASTER_ROUTER");
        tokenRouter    = vm.envAddress("KAYEN_ROUTER");
        wchz           = vm.envAddress("WCHZ_ADDRESS");
        platformFeeBps = uint16(vm.envUint("PLATFORM_FEE_BPS"));

        require(owner_         != address(0), "OWNER_ADDRESS required");
        require(oracle         != address(0), "ORACLE_ADDRESS required");
        require(feeRecip       != address(0), "FEE_RECIPIENT required");
        require(usdcAddr       != address(0), "USDC_ADDRESS required");
        require(masterRouter   != address(0), "KAYEN_MASTER_ROUTER required");
        require(tokenRouter    != address(0), "KAYEN_ROUTER required");
        require(wchz           != address(0), "WCHZ_ADDRESS required");
        // Distinctness is preferred but not required. On Chiliz Spicy testnet
        // only one usable Kayen-fork router is deployed at present, so the
        // operator pins both env vars to the same address. We warn instead of
        // hard-failing; mainnet operators should double-check.
        if (masterRouter == tokenRouter) {
            console.log("WARNING: KAYEN_MASTER_ROUTER == KAYEN_ROUTER");
            console.log("  Documented as distinct contracts; only same on Spicy testnet by design.");
            console.log("  Verify before broadcasting to mainnet.");
        }

        transferOwnership = _envBoolOr("TRANSFER_OWNERSHIP", !_isTestChain());
        skipSampleMatch   = _envBoolOr("SKIP_SAMPLE_MATCH", false);

        // H-01: the oracle must be a dedicated key (the factory enforces it
        // too; failing here is clearer than a revert mid-broadcast).
        require(oracle != owner_ && oracle != msg.sender, "ORACLE_ADDRESS must differ from OWNER_ADDRESS and the deployer");
        // Owner of the match beacons (the only key able to change match code).
        try vm.envAddress("UPGRADE_ADMIN") returns (address v) { upgradeAdmin = v; } catch { upgradeAdmin = feeRecip; }
        // H-04: on a real network the receiving Safe must exist on THIS chain.
        if (!_isTestChain()) {
            require(feeRecip.code.length > 0, "FEE_RECIPIENT has no code on this chain");
            require(upgradeAdmin.code.length > 0, "UPGRADE_ADMIN has no code on this chain");
        }

        try vm.envString("SAMPLE_MATCH_NAME") returns (string memory v) {
            sampleMatchName = v;
        } catch {
            sampleMatchName = "Barcelona vs Real Madrid";
        }
    }

    function _deployFactory() internal {
        // Implementations are deployed separately (initcode size, see
        // PariMatchFactory constructor).
        factory = new PariMatchFactory(
            address(new FootballPariMatch()),
            address(new BasketballPariMatch()),
            upgradeAdmin
        );
        console.log("PariMatchFactory  :", address(factory));
        console.log("  Beacon owner    :", upgradeAdmin);
        console.log("  FootballImpl    :", factory.footballImplementation());
        console.log("  BasketballImpl  :", factory.basketballImplementation());
    }

    function _deployRouter() internal {
        router = new NetworkRouter(
            masterRouter, tokenRouter, usdcAddr, wchz, feeRecip, platformFeeBps
        );
        console.log("NetworkRouter     :", address(router));
    }

    function _wire() internal {
        // Order matters: setWiring tells the factory which router to grant
        // SWAP_ROUTER_ROLE on each new match. Must happen before any
        // createXMatch call (otherwise the factory reverts with
        // WiringNotConfigured).
        factory.setWiring(usdcAddr, feeRecip, address(router));
        console.log("factory.setWiring        -> usdc / feeRecip / router");

        // Ops key that keeps creating matches once the Safe owns the factory
        // (TRANSFER_OWNERSHIP defaults to true outside test chains).
        address operator;
        try vm.envAddress("MATCH_OPERATOR") returns (address v) { operator = v; } catch { operator = msg.sender; }
        factory.setMatchOperator(operator);
        console.log("factory.setMatchOperator ->", operator);

        // Router will allow placeBet* only for addresses returned by
        // factory.isMatch(addr).
        router.setMatchFactory(address(factory));
        console.log("router.setMatchFactory   ->", address(factory));
    }

    function _createSampleMatch() internal returns (address proxy) {
        proxy = factory.createFootballMatch(sampleMatchName, owner_, oracle);
        console.log("Sample FootballMatch :", proxy);
        console.log("  name        :", sampleMatchName);
        console.log("  match owner :", owner_);
        console.log("  oracle      :", oracle);
    }

    function _transferOwnershipToSafe() internal {
        console.log("Transferring top-level ownership to:", feeRecip);
        // Ownable2Step: the Safe must call acceptOwnership() on both.
        factory.transferOwnership(feeRecip);
        router.transferOwnership(feeRecip);
        console.log("  factory.transferOwnership -> Safe (pending acceptOwnership)");
        console.log("  router.transferOwnership  -> Safe (pending acceptOwnership)");
    }

    // ──────────────────────────────────────────────────────────────────────

    function _printHeader() internal view {
        console.log("==============================================");
        console.log("CHILIZTV PARI-MUTUEL DEPLOY (PARI ONLY)");
        console.log("==============================================");
        console.log("Deployer        :", deployer);
        console.log("Match owner     :", owner_);
        console.log("Oracle          :", oracle);
        console.log("Fee recipient   :", feeRecip);
        console.log("USDC            :", usdcAddr);
        console.log("WCHZ            :", wchz);
        console.log("Platform fee    :", platformFeeBps, "bps");
        console.log("Sample match    :", skipSampleMatch ? "SKIPPED" : sampleMatchName);
        console.log("Transfer owner  :", transferOwnership ? "yes" : "no");
        console.log("==============================================");
        console.log("");
    }

    function _printSummary(address sampleMatch) internal view {
        console.log("==============================================");
        console.log("DEPLOYMENT SUMMARY");
        console.log("==============================================");
        console.log("PariMatchFactory  :", address(factory));
        console.log("NetworkRouter     :", address(router));
        if (sampleMatch != address(0)) {
            console.log("Sample match      :", sampleMatch);
        }
        console.log("Owner of factory  :", transferOwnership ? feeRecip : deployer);
        console.log("Owner of router   :", transferOwnership ? feeRecip : deployer);
        console.log("==============================================");
    }

    function _printPostDeploymentSteps() internal pure {
        console.log("");
        console.log("POST-DEPLOY NOTES:");
        console.log("==================");
        console.log("- Streaming entrypoints (donate*, subscribe*) WILL REVERT until a");
        console.log("  StreamWalletFactory is deployed and registered with");
        console.log("  router.setStreamWalletFactory(...). Use DeployAll.s.sol if you");
        console.log("  want the full platform in a single run.");
        console.log("- New matches inherit roles atomically from the factory: SWAP_ROUTER_ROLE");
        console.log("  to the router, RESOLVER_ROLE to the oracle, admin roles to the match owner.");
        console.log("- If you redeploy the router later, EXISTING matches still hold");
        console.log("  SWAP_ROUTER_ROLE for the OLD router. Their owners must call");
        console.log("  revokeRole+grantRole on each match. See RedeploySwapRouter.s.sol.");
        console.log("==============================================");
    }

    function _isTestChain() internal view returns (bool) {
        return block.chainid == 88882 || block.chainid == 84532 || block.chainid == 31337;
    }

    function _envBoolOr(string memory key, bool defaultVal)
        internal view returns (bool)
    {
        try vm.envBool(key) returns (bool v) { return v; }
        catch { return defaultVal; }
    }
}

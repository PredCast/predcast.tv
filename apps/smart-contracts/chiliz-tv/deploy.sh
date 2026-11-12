#!/bin/bash
#
# ChilizTV Deployment Script (Chiliz Chain + Base)
#
# All configuration is loaded from .env (see .env.example).
#
# Usage:
#   ./deploy.sh --network chilizTestnet --all     # full platform (PariMatchFactory + StreamWalletFactory + NetworkRouter, fully wired)
#   ./deploy.sh --network chilizTestnet --pari    # PariMatchFactory + router + sample match (no streaming)
#   ./deploy.sh --network chilizTestnet --stream  # StreamWalletFactory only
#   ./deploy.sh --network chilizTestnet --swap          # NetworkRouter only (wire it post-deploy)
#   ./deploy.sh --network chilizTestnet --redeploy-swap      # NetworkRouter redeploy + auto-wire to existing factories
#   ./deploy.sh --network chilizTestnet --upgrade-leaderboard # LeaderboardRewards V2 (UUPS upgradeToAndCall + initializeV2)
#   ./deploy.sh --network chilizMainnet  --all
#   ./deploy.sh --network baseSepolia    --all     # Base Sepolia (84532), see .env.baseSepolia.example
#
#   ./deploy.sh --network baseMainnet    --all     # Base (8453), see .env.baseMainnet.example
#
# On Base, WETH stands in for WCHZ and native ETH for CHZ ("*WithNativeToken"
# entrypoints). With both KAYEN_* left empty, --all deploys a
# ConcentratedPoolAdapter (script/config/BaseDexConfig.sol) in place of Kayen.
#
# Add `--dry-run` to simulate via forge without broadcasting — no on-chain tx,
# no deployments/<network>.json update. Useful to preview gas + address layout.
# A dry run always simulates on chain: `--skip-simulation` is dropped from
# FORGE_FLAGS for it, since the simulation is what gives the gas estimate.
#
# Before compiling, the script checks the deployer (address derived from
# PRIVATE_KEY) and its balance and, on mainnets, that SAFE_ADDRESS and
# UPGRADE_ADMIN are contracts on this chain, so a wrong env file fails in
# seconds instead of after the compilation.
#
# Output: each step is timestamped, an elapsed-time line is printed while
# forge runs (Git Bash shows no forge progress bar), and everything is also
# written to deployments/logs/<network>-<type>-<date>.log. The private key is
# never printed. Forge verbosity defaults to -vvv (traces only when something
# fails); set VERBOSITY=-vvvv for the trace of every call.
#
# TRANSFER_OWNERSHIP in your env file: when true, the run starts the
# ownership transfer of the factories, router and adapter to SAFE_ADDRESS.
# Defaults to true on mainnets and false on testnets (see DeployAll).
#
# The --network flag is a safety label only: it picks the mainnet warning
# and is used for output paths (deployments/<network>.json). The actual
# RPC_URL / CHAIN_ID / FORGE_FLAGS come from .env.
#
# NOTE: The legacy LiquidityPool + BettingMatchFactory stack is gone. The
# --match and --pool flags were removed alongside the contract deletions.
# Use --all (or --pari for pari-only) to deploy the new pari-mutuel system.
#

set -e

# ── Colors ───────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# ── Parse arguments ──────────────────────────────────────────────────────────
NETWORK=""
DEPLOY_TYPE=""
DRY_RUN=false

while [[ $# -gt 0 ]]; do
    case "$1" in
        --network)
            NETWORK="$2"; shift 2 ;;
        --all)
            DEPLOY_TYPE="all"; shift ;;
        --pari)
            DEPLOY_TYPE="pari"; shift ;;
        --stream)
            DEPLOY_TYPE="stream"; shift ;;
        --swap)
            DEPLOY_TYPE="swap"; shift ;;
        --redeploy-swap)
            DEPLOY_TYPE="redeploy-swap"; shift ;;
        --upgrade-leaderboard)
            DEPLOY_TYPE="upgrade-leaderboard"; shift ;;
        --dry-run)
            DRY_RUN=true; shift ;;
        --match|--pool)
            echo -e "${RED}'$1' is no longer supported (LiquidityPool + BettingMatchFactory were removed).${NC}"
            echo -e "${RED}  Use --all for the full pari-mutuel platform, or --pari for pari-only.${NC}"
            exit 1 ;;
        *)
            echo -e "${RED}Unknown argument: $1${NC}"
            echo "Usage: ./deploy.sh --network <chilizTestnet|chilizMainnet|baseSepolia|baseMainnet> <--all|--pari|--stream|--swap|--redeploy-swap|--upgrade-leaderboard> [--dry-run]"
            exit 1 ;;
    esac
done

if [ -z "$NETWORK" ] || [ -z "$DEPLOY_TYPE" ]; then
    echo -e "${RED}Missing required arguments.${NC}"
    echo "Usage: ./deploy.sh --network <chilizTestnet|chilizMainnet|baseSepolia|baseMainnet> <--all|--pari|--stream|--swap|--redeploy-swap|--upgrade-leaderboard> [--dry-run]"
    exit 1
fi

# ── Log file + timestamps ────────────────────────────────────────────────────
# Everything printed from here on also goes to the log file, colours removed.
mkdir -p deployments/logs
MODE_TAG=$([ "$DRY_RUN" = true ] && echo "dry-run" || echo "broadcast")
LOG_FILE="deployments/logs/${NETWORK}-${DEPLOY_TYPE}-${MODE_TAG}-$(date +%Y%m%d-%H%M%S).log"
exec > >(tee >(sed -u -E 's/\x1b\[[0-9;]*m//g' >> "$LOG_FILE")) 2>&1
START_SECONDS=$SECONDS

# step "message": timestamped step header with the time elapsed so far.
step() {
    local elapsed=$((SECONDS - START_SECONDS))
    echo -e "${CYAN}[$(date +%H:%M:%S) +$((elapsed / 60))m$((elapsed % 60))s] $*${NC}"
}
step "Log file: $LOG_FILE"

# ── Load .env ────────────────────────────────────────────────────────────────
# Prefer .env.<network> when present, otherwise .env.
ENV_FILE=".env"
if [ -f ".env.${NETWORK}" ]; then
    ENV_FILE=".env.${NETWORK}"
fi

if [ ! -f "$ENV_FILE" ]; then
    echo -e "${RED}Error: $ENV_FILE not found.${NC}"
    echo "Copy .env.example to .env and fill in values."
    exit 1
fi

# set -a exports every variable assigned until `set +a`.
# sed strips a leading UTF-8 BOM and any trailing CR — Windows editors
# routinely add both, which would otherwise break `source`.
set -a
# shellcheck disable=SC1090
source <(sed -e '1s/^\xEF\xBB\xBF//' -e 's/\r$//' "$ENV_FILE")
set +a

# ── Validate required env vars ───────────────────────────────────────────────
REQUIRED="PRIVATE_KEY SAFE_ADDRESS RPC_URL CHAIN_ID"
MISSING=""
for VAR in $REQUIRED; do
    if [ -z "${!VAR}" ]; then
        MISSING="${MISSING}\n  - $VAR"
    fi
done
if [ -n "$MISSING" ]; then
    echo -e "${RED}Missing required env vars in $ENV_FILE:${MISSING}${NC}"
    exit 1
fi

# ── Sanity check: CHAIN_ID matches --network label ───────────────────────────
case "$NETWORK" in
    chilizTestnet)
        EXPECTED_CHAIN_ID=88882 ;;
    chilizMainnet)
        EXPECTED_CHAIN_ID=88888 ;;
    baseSepolia)
        EXPECTED_CHAIN_ID=84532 ;;
    baseMainnet)
        EXPECTED_CHAIN_ID=8453 ;;
    *)
        echo -e "${YELLOW}Warning: unknown --network '$NETWORK' (skipping chain-id sanity check)${NC}"
        EXPECTED_CHAIN_ID="" ;;
esac
if [ -n "$EXPECTED_CHAIN_ID" ] && [ "$CHAIN_ID" != "$EXPECTED_CHAIN_ID" ]; then
    echo -e "${RED}Chain id mismatch:${NC}"
    echo -e "  --network $NETWORK expects CHAIN_ID=$EXPECTED_CHAIN_ID"
    echo -e "  but $ENV_FILE has CHAIN_ID=$CHAIN_ID"
    echo -e "  Fix $ENV_FILE or pass the correct --network."
    echo -e "  For a second network, keep a separate .env.${NETWORK}: it is read instead of .env."
    exit 1
fi

# ── Preflight: RPC, deployer, Safe ───────────────────────────────────────────
# Cheap on-chain checks, so a wrong env file fails in seconds rather than
# after the compilation.
step "Preflight checks on $RPC_URL"
if ! command -v cast &> /dev/null; then
    echo -e "${RED}cast (Foundry) not found in PATH.${NC}"
    exit 1
fi
RPC_CHAIN_ID=$(cast chain-id --rpc-url "$RPC_URL" 2>/dev/null || true)
if [ -z "$RPC_CHAIN_ID" ]; then
    echo -e "${RED}RPC_URL $RPC_URL does not answer.${NC}"
    exit 1
fi
if [ "$RPC_CHAIN_ID" != "$CHAIN_ID" ]; then
    echo -e "${RED}RPC_URL is chain $RPC_CHAIN_ID but $ENV_FILE says CHAIN_ID=$CHAIN_ID.${NC}"
    exit 1
fi

DEPLOYER=$(cast wallet address --private-key "$PRIVATE_KEY" 2>/dev/null || true)
if [ -z "$DEPLOYER" ]; then
    echo -e "${RED}PRIVATE_KEY in $ENV_FILE is not a valid private key.${NC}"
    exit 1
fi
DEPLOYER_WEI=$(cast balance "$DEPLOYER" --rpc-url "$RPC_URL" 2>/dev/null || echo "?")
DEPLOYER_BALANCE=$(cast balance "$DEPLOYER" --rpc-url "$RPC_URL" --ether 2>/dev/null || echo "?")
echo -e "  Deployer (from PRIVATE_KEY): ${YELLOW}$DEPLOYER${NC}, balance ${YELLOW}$DEPLOYER_BALANCE${NC}"
if [ -n "$ADMIN_ADDRESS" ] && [ "${ADMIN_ADDRESS,,}" != "${DEPLOYER,,}" ]; then
    echo -e "  ${YELLOW}Note: ADMIN_ADDRESS ($ADMIN_ADDRESS) is not the address of PRIVATE_KEY.${NC}"
fi
if [ "$DEPLOYER_WEI" = "0" ]; then
    if [ "$DRY_RUN" = true ]; then
        echo -e "  ${YELLOW}The deployer has no funds on this chain: the real deployment would fail.${NC}"
    else
        echo -e "${RED}The deployer $DEPLOYER has no funds on chain $CHAIN_ID. Fund it first.${NC}"
        exit 1
    fi
fi

# Same rule as DeployAll: outside test chains the Safe (and the upgrade admin)
# must be a contract on this chain.
case "$CHAIN_ID" in
    88882|84532|31337) TEST_CHAIN=true ;;
    *)                 TEST_CHAIN=false ;;
esac
has_code() {
    local code
    code=$(cast code "$1" --rpc-url "$RPC_URL" 2>/dev/null || echo "")
    [ -n "$code" ] && [ "$code" != "0x" ]
}
if has_code "$SAFE_ADDRESS"; then
    echo -e "  SAFE_ADDRESS: ${YELLOW}$SAFE_ADDRESS${NC} (contract on this chain)"
else
    echo -e "  SAFE_ADDRESS: ${YELLOW}$SAFE_ADDRESS${NC} (no code on this chain)"
fi
if [ "$TEST_CHAIN" = false ] && [ "$DEPLOY_TYPE" = "all" ]; then
    for VAR in SAFE_ADDRESS UPGRADE_ADMIN; do
        ADDR="${!VAR}"
        [ -z "$ADDR" ] && continue
        if ! has_code "$ADDR"; then
            echo -e "${RED}$VAR $ADDR has no code on chain $CHAIN_ID.${NC}"
            echo -e "${RED}  DeployAll requires the Safe to exist on this chain (it would revert with${NC}"
            echo -e "${RED}  \"$VAR has no code on this chain\"). Create the Safe on this network, or${NC}"
            echo -e "${RED}  check that $ENV_FILE holds this network's addresses.${NC}"
            exit 1
        fi
    done
fi
echo ""

# ── Deploy type → script mapping ─────────────────────────────────────────────
REQUIRES_KAYEN=false
REQUIRES_USDC=false
REQUIRES_FACTORIES=false
REQUIRES_LEADERBOARD_PROXY=false
case "$DEPLOY_TYPE" in
    all)
        SCRIPT="script/DeployAll.s.sol"
        REQUIRES_KAYEN=true
        REQUIRES_USDC=true ;;
    pari)
        SCRIPT="script/DeployPari.s.sol"
        REQUIRES_KAYEN=true
        REQUIRES_USDC=true ;;
    stream)
        SCRIPT="script/DeployStreaming.s.sol"
        REQUIRES_KAYEN=true
        REQUIRES_USDC=true ;;
    swap)
        SCRIPT="script/DeploySwap.s.sol"
        REQUIRES_KAYEN=true
        REQUIRES_USDC=true ;;
    redeploy-swap)
        SCRIPT="script/RedeploySwapRouter.s.sol"
        REQUIRES_KAYEN=true
        REQUIRES_USDC=true
        REQUIRES_FACTORIES=true ;;
    upgrade-leaderboard)
        SCRIPT="script/UpgradeLeaderboard.s.sol"
        REQUIRES_LEADERBOARD_PROXY=true ;;
esac

# ── USDC / Kayen validation ──────────────────────────────────────────────────
if [ "$REQUIRES_USDC" = true ] && [ -z "$USDC_ADDRESS" ]; then
    echo -e "${RED}Missing USDC_ADDRESS in $ENV_FILE${NC}"
    exit 1
fi

if [ "$REQUIRES_KAYEN" = true ]; then
    echo -e "${CYAN}Resolving Kayen DEX addresses...${NC}"
    MISSING=""
    # DeployAll deploys the adapter on Base when both routers are empty.
    if [[ "$NETWORK" != base* ]] || [ "$DEPLOY_TYPE" != "all" ] || [ -n "$KAYEN_MASTER_ROUTER$KAYEN_ROUTER" ]; then
        [ -z "$KAYEN_MASTER_ROUTER" ] && MISSING="${MISSING}\n  - KAYEN_MASTER_ROUTER"
        [ -z "$KAYEN_ROUTER" ]        && MISSING="${MISSING}\n  - KAYEN_ROUTER"
    fi
    [ -z "$WCHZ_ADDRESS" ]        && MISSING="${MISSING}\n  - WCHZ_ADDRESS"
    if [ -n "$MISSING" ]; then
        echo -e "${RED}Missing in $ENV_FILE:${MISSING}${NC}"
        exit 1
    fi
    if [ "${KAYEN_MASTER_ROUTER,,}" = "${KAYEN_ROUTER,,}" ] && [[ "$NETWORK" == chiliz* ]]; then
        echo -e "${YELLOW}WARNING: KAYEN_MASTER_ROUTER == KAYEN_ROUTER.${NC}"
        echo -e "${YELLOW}  Master Router V2 (CHZ-native, Kayen-specific signature) and the basic"
        echo -e "${YELLOW}  Kayen Router (Uniswap V2 fork, standard signature) are documented as"
        echo -e "${YELLOW}  distinct contracts. On Spicy testnet only one usable address exists, so"
        echo -e "${YELLOW}  pinning both to the same router is intentional. On mainnet they MUST be"
        echo -e "${YELLOW}  distinct -- double-check before broadcasting."
        echo -e "${YELLOW}  Docs: https://kayen-protocol.gitbook.io/documentation/references/contracts${NC}"
    fi
    echo -e "  KAYEN_MASTER_ROUTER: ${YELLOW}$KAYEN_MASTER_ROUTER${NC}"
    echo -e "  KAYEN_ROUTER:        ${YELLOW}$KAYEN_ROUTER${NC}"
    echo -e "  WCHZ_ADDRESS:        ${YELLOW}$WCHZ_ADDRESS${NC}"
    echo -e "  USDC_ADDRESS:        ${YELLOW}$USDC_ADDRESS${NC}"
    echo ""
fi

# ── Leaderboard proxy validation (upgrade-leaderboard targets existing proxy) ─
if [ "$REQUIRES_LEADERBOARD_PROXY" = true ]; then
    if [ -z "$LEADERBOARD_PROXY" ]; then
        echo -e "${RED}Missing in $ENV_FILE for --upgrade-leaderboard:${NC}"
        echo -e "${RED}  - LEADERBOARD_PROXY${NC}"
        echo -e "${YELLOW}  Must be the ERC1967 proxy address (NOT the implementation).${NC}"
        echo -e "${YELLOW}  See deployments/${NETWORK}.json - ERC1967Proxy entry.${NC}"
        exit 1
    fi
    echo -e "${CYAN}Upgrading leaderboard proxy...${NC}"
    echo -e "  LEADERBOARD_PROXY: ${YELLOW}$LEADERBOARD_PROXY${NC}"
    echo ""
fi

# ── Existing-factory validation (redeploy-swap rewires existing factories) ───
if [ "$REQUIRES_FACTORIES" = true ]; then
    MISSING=""
    [ -z "$PARI_FACTORY_ADDRESS" ]   && MISSING="${MISSING}\n  - PARI_FACTORY_ADDRESS"
    [ -z "$STREAM_FACTORY_ADDRESS" ] && MISSING="${MISSING}\n  - STREAM_FACTORY_ADDRESS"
    if [ -n "$MISSING" ]; then
        echo -e "${RED}Missing in $ENV_FILE for --redeploy-swap:${MISSING}${NC}"
        echo -e "${YELLOW}  These must point at the EXISTING factories you want to rewire.${NC}"
        echo -e "${YELLOW}  See deployments/${NETWORK}.json - PariMatchFactory + StreamWalletFactory.${NC}"
        exit 1
    fi
    echo -e "${CYAN}Rewiring existing factories...${NC}"
    echo -e "  PARI_FACTORY_ADDRESS:   ${YELLOW}$PARI_FACTORY_ADDRESS${NC}"
    echo -e "  STREAM_FACTORY_ADDRESS: ${YELLOW}$STREAM_FACTORY_ADDRESS${NC}"
    echo ""
fi

# ── Gas-price floor check ────────────────────────────────────────────────────
# Chiliz mainnet's `eth_gasPrice` is ~2,500 gwei (matches block baseFeePerGas)
# and replace-by-fee requires a bump above the floor. Broadcasting below the
# floor produces a tx that sits in the mempool forever and locks the nonce
# until cancelled. Parse --with-gas-price out of FORGE_FLAGS, query the live
# floor, and abort if we'd ship underpriced.
GAS_PRICE_OVERRIDE=$(echo "$FORGE_FLAGS" | grep -oE -- '--with-gas-price[= ]+[0-9]+' | grep -oE '[0-9]+$' || true)
if [ -n "$GAS_PRICE_OVERRIDE" ] && command -v curl &> /dev/null; then
    NETWORK_GAS_HEX=$(curl -fsS -X POST "$RPC_URL" \
        -H "Content-Type: application/json" \
        --data '{"jsonrpc":"2.0","id":1,"method":"eth_gasPrice","params":[]}' \
        2>/dev/null | sed -nE 's/.*"result":"(0x[0-9a-fA-F]+)".*/\1/p')
    if [ -n "$NETWORK_GAS_HEX" ]; then
        NETWORK_GAS=$((NETWORK_GAS_HEX))
        if [ "$GAS_PRICE_OVERRIDE" -lt "$NETWORK_GAS" ]; then
            CFG_GWEI=$((GAS_PRICE_OVERRIDE / 1000000000))
            NET_GWEI=$((NETWORK_GAS / 1000000000))
            echo -e "${RED}╔══════════════════════════════════════════════╗${NC}"
            echo -e "${RED}║          ⚠  GAS PRICE TOO LOW  ⚠            ║${NC}"
            echo -e "${RED}╚══════════════════════════════════════════════╝${NC}"
            echo -e "${RED}FORGE_FLAGS --with-gas-price: ${CFG_GWEI} gwei${NC}"
            echo -e "${RED}Network eth_gasPrice:         ${NET_GWEI} gwei${NC}"
            echo -e "${YELLOW}Broadcasting underpriced would leave the first tx pending forever${NC}"
            echo -e "${YELLOW}and lock nonce ${DEPLOYER}'s sequence until cancelled.${NC}"
            echo -e "${YELLOW}Bump --with-gas-price above ${NET_GWEI} gwei in $ENV_FILE.${NC}"
            exit 1
        fi
    else
        echo -e "${YELLOW}Warning: could not fetch eth_gasPrice from $RPC_URL — skipping gas-price floor check.${NC}"
    fi
fi

# ── Mainnet safety warning ───────────────────────────────────────────────────
if [ "$NETWORK" = "chilizMainnet" ] || [ "$NETWORK" = "baseMainnet" ]; then
    echo -e "${RED}╔══════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║        ⚠  MAINNET DEPLOYMENT WARNING  ⚠     ║${NC}"
    echo -e "${RED}║  Real funds are at risk. Double-check:       ║${NC}"
    echo -e "${RED}║  - All contract addresses are correct        ║${NC}"
    echo -e "${RED}║  - Ownership will transfer to Safe multisig  ║${NC}"
    echo -e "${RED}║  - Contracts are tested on testnet first     ║${NC}"
    echo -e "${RED}╚══════════════════════════════════════════════╝${NC}"
    echo ""
fi

# ── Display summary ──────────────────────────────────────────────────────────
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}ChilizTV Deployment${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "Network:      ${YELLOW}$NETWORK${NC} (Chain ID: $CHAIN_ID)"
echo -e "Deploy Type:  ${YELLOW}$DEPLOY_TYPE${NC}"
[ "$DRY_RUN" = true ] && echo -e "Mode:         ${YELLOW}DRY-RUN (no --broadcast)${NC}"
echo -e "Script:       ${YELLOW}$SCRIPT${NC}"
echo -e "RPC URL:      ${YELLOW}$RPC_URL${NC}"
echo -e "Deployer:     ${YELLOW}$DEPLOYER${NC} ($DEPLOYER_BALANCE)"
echo -e "Safe Address: ${YELLOW}$SAFE_ADDRESS${NC}"
echo -e "Env File:     ${YELLOW}$ENV_FILE${NC}"
[ -n "$FORGE_FLAGS" ] && echo -e "Forge Flags:  ${YELLOW}$FORGE_FLAGS${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# ── Confirm ──────────────────────────────────────────────────────────────────
if [ "$DRY_RUN" = true ]; then
    echo -e "${CYAN}Dry-run mode: skipping confirmation prompt (no broadcast will happen).${NC}"
else
    read -p "Deploy to $NETWORK? (yes/no): " CONFIRM
    if [ "$CONFIRM" != "yes" ]; then
        echo -e "${RED}Deployment cancelled${NC}"
        exit 0
    fi
fi

echo ""
if [ "$DRY_RUN" = true ]; then
    echo -e "${GREEN}Starting forge simulation (dry-run)...${NC}"
else
    echo -e "${GREEN}Starting deployment...${NC}"
fi
echo ""

# ── Prepare output directory ─────────────────────────────────────────────────
DEPLOY_OUT="deployments/${NETWORK}.json"
mkdir -p deployments

# ── Run forge script ─────────────────────────────────────────────────────────
# NOTE: --chain-id intentionally omitted. Forge's NamedChain registry rejects
# Chiliz IDs (88882 / 88888) with "Chain not supported". RPC URL is enough
# to detect the chain, and --legacy signing does not require chain id.
# In --dry-run mode we drop --broadcast; forge runs the script locally
# against a fork of $RPC_URL, simulating every tx without emitting one.
#
# The arguments are an array (no eval), and the private key is passed to
# forge but never printed.
read -ra RAW_FLAGS <<< "$FORGE_FLAGS"
FLAGS=()
for FLAG in "${RAW_FLAGS[@]}"; do
    if [ "$FLAG" = "--skip-simulation" ]; then
        if [ "$DRY_RUN" = true ]; then
            echo -e "${YELLOW}Dry run: ignoring --skip-simulation from FORGE_FLAGS (the on-chain simulation is the point of a dry run).${NC}"
            continue
        fi
        echo -e "${YELLOW}Warning: --skip-simulation in FORGE_FLAGS, transactions are sent without an on-chain simulation first.${NC}"
    fi
    FLAGS+=("$FLAG")
done
[ "$DRY_RUN" != true ] && FLAGS+=("--broadcast")
VERBOSITY="${VERBOSITY:--vvv}"
FORGE_ARGS=(script "$SCRIPT" --rpc-url "$RPC_URL" --slow "${FLAGS[@]}" "$VERBOSITY")

# Runs a command in the background and prints a timestamped line every 20 s
# while it runs: forge shows no progress bar in Git Bash, and the
# compilation alone can take minutes with via_ir.
run_with_heartbeat() {
    "$@" &
    local pid=$! last=$SECONDS status=0
    trap 'kill "$pid" 2>/dev/null; exit 130' INT TERM
    while kill -0 "$pid" 2>/dev/null; do
        sleep 1
        if [ $((SECONDS - last)) -ge 20 ] && kill -0 "$pid" 2>/dev/null; then
            step "... forge is still running (compiling, then executing the script)"
            last=$SECONDS
        fi
    done
    wait "$pid" || status=$?
    trap - INT TERM
    return $status
}

echo -e "${CYAN}forge ${FORGE_ARGS[*]} --private-key ***${NC}"
echo ""
step "forge started: compilation first (about 1-2 min for a deploy script with via_ir), then the script"
FORGE_STATUS=0
run_with_heartbeat forge "${FORGE_ARGS[@]}" --private-key "$PRIVATE_KEY" || FORGE_STATUS=$?
echo ""
if [ "$FORGE_STATUS" -ne 0 ]; then
    step "forge failed (exit $FORGE_STATUS)."
    echo -e "${RED}The reason is on the last 'Error:' line above. Full output: $LOG_FILE${NC}"
    echo -e "${YELLOW}For the trace of every call, run again with VERBOSITY=-vvvv.${NC}"
    exit "$FORGE_STATUS"
fi
step "forge finished"

# In dry-run we never wrote a broadcast file, so skip the address extraction
# and post-deploy guidance — there is nothing to record or follow up on.
if [ "$DRY_RUN" = true ]; then
    echo ""
    echo -e "${GREEN}Dry-run complete. No on-chain transactions were sent.${NC}"
    echo -e "${YELLOW}Re-run without --dry-run to actually deploy.${NC}"
    echo -e "Full output: ${YELLOW}$LOG_FILE${NC}"
    exit 0
fi

# ── Extract deployed addresses from broadcast ────────────────────────────────
BROADCAST_DIR="broadcast/$(basename $SCRIPT)/${CHAIN_ID}"
LATEST_RUN="${BROADCAST_DIR}/run-latest.json"

if [ -f "$LATEST_RUN" ] && command -v jq &> /dev/null; then
    echo ""
    echo -e "${GREEN}Extracting deployed addresses...${NC}"
    jq '{
        network: "'$NETWORK'",
        chainId: '$CHAIN_ID',
        timestamp: (now | todate),
        contracts: [
            .transactions[]
            | select(.transactionType == "CREATE")
            | {
                name: .contractName,
                address: .contractAddress
            }
        ]
    }' "$LATEST_RUN" > "$DEPLOY_OUT"
    echo -e "Saved to: ${YELLOW}$DEPLOY_OUT${NC}"
    echo ""
    jq '.' "$DEPLOY_OUT"
else
    echo -e "${YELLOW}Note: could not extract addresses automatically.${NC}"
    echo "Broadcast file: $LATEST_RUN"
    echo "Check forge output above for deployed addresses."
fi

# ── Post-deployment output ───────────────────────────────────────────────────
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Check deployed addresses in $DEPLOY_OUT (full log: $LOG_FILE)"
echo "2. Verify ownership transferred to Safe"
echo "3. Verify contracts: $EXPLORER_URL"
echo ""

if [ "$DEPLOY_TYPE" = "swap" ]; then
    echo -e "${YELLOW}────────────────────────────────────────${NC}"
    echo -e "${YELLOW}Swap Router Post-Deployment Steps:${NC}"
    echo -e "${YELLOW}────────────────────────────────────────${NC}"
    echo ""
    echo "DeploySwap only deploys the router; you still need to wire it. Run as"
    echo "the owner of the factories + router, in this order:"
    echo ""
    echo "  1) pariFactory.setWiring(USDC, FEE_RECIP, NEW_ROUTER)"
    echo -e "     ${CYAN}cast send <PARI_FACTORY> 'setWiring(address,address,address)' \\${NC}"
    echo -e "     ${CYAN}  $USDC_ADDRESS <FEE_RECIP> <NEW_ROUTER> \\${NC}"
    echo -e "     ${CYAN}  --rpc-url $RPC_URL --private-key \$PRIVATE_KEY${NC}"
    echo ""
    echo "  2) newRouter.setMatchFactory(PARI_FACTORY)"
    echo -e "     ${CYAN}cast send <NEW_ROUTER> 'setMatchFactory(address)' \\${NC}"
    echo -e "     ${CYAN}  <PARI_FACTORY> --rpc-url $RPC_URL --private-key \$PRIVATE_KEY${NC}"
    echo ""
    echo "  3) streamFactory.setSwapRouter(NEW_ROUTER)   # only if streaming is wired"
    echo "  4) newRouter.setStreamWalletFactory(STREAM_FACTORY)   # back-pointer check"
    echo ""
    echo "Future matches created by the factory after step 1 automatically receive"
    echo "SWAP_ROUTER_ROLE on the new router -- no manual cast required."
    echo ""
    echo "EXISTING matches (deployed against a previous router) still hold"
    echo "SWAP_ROUTER_ROLE for the OLD router. Their owners must run:"
    echo -e "     ${CYAN}cast send <MATCH> 'revokeRole(bytes32,address)' \$(cast keccak 'SWAP_ROUTER_ROLE') <OLD_ROUTER>${NC}"
    echo -e "     ${CYAN}cast send <MATCH> 'grantRole(bytes32,address)'  \$(cast keccak 'SWAP_ROUTER_ROLE') <NEW_ROUTER>${NC}"
    echo ""
    echo "RedeploySwapRouter.s.sol prints the per-match commands automatically."
    echo ""
fi

if [ "$DEPLOY_TYPE" = "upgrade-leaderboard" ]; then
    echo -e "${YELLOW}────────────────────────────────────────${NC}"
    echo -e "${YELLOW}Leaderboard V2 - Post-Upgrade Steps:${NC}"
    echo -e "${YELLOW}────────────────────────────────────────${NC}"
    echo ""
    echo "The proxy now points at the V2 implementation and initializeV2()"
    echo "has been called (epochDuration = 30 days, epochStartTime = upgrade tx ts)."
    echo ""
    echo "The proxy address is UNCHANGED. The implementation address is new."
    echo "If your deployments JSON tracks the impl separately, update it from"
    echo "the forge log above."
    echo ""
    echo "Remaining manual steps:"
    echo "  1. Verify on-chain views:"
    echo "       cast call \$LEADERBOARD_PROXY 'currentEpoch()(uint256)' --rpc-url \$RPC_URL"
    echo "       cast call \$LEADERBOARD_PROXY 'epochDuration()(uint64)' --rpc-url \$RPC_URL"
    echo "  2. Restart backend so LeaderboardIndexer picks up the new event shapes"
    echo "     (WinRecorded gained an epochId topic; EpochClosed renamed to EpochAdvanced)."
    echo "  3. Frontend ABIs were regenerated as part of this change set; ensure"
    echo "     the new generated.ts is deployed alongside any production rollout."
    echo ""
fi

if [ "$DEPLOY_TYPE" = "redeploy-swap" ]; then
    echo -e "${YELLOW}────────────────────────────────────────${NC}"
    echo -e "${YELLOW}Router Redeploy - Post-Deployment Steps:${NC}"
    echo -e "${YELLOW}────────────────────────────────────────${NC}"
    echo ""
    echo "RedeploySwapRouter already wired pariFactory.setWiring,"
    echo "newRouter.setMatchFactory, streamFactory.setSwapRouter, and"
    echo "newRouter.setStreamWalletFactory. The forge log above contains"
    echo "the per-match revoke/grant cast commands for every existing match."
    echo ""
    echo "Remaining manual steps:"
    echo "  1. Match admin (SAFE_ADDRESS) runs the printed cast commands"
    echo "     per match to rotate SWAP_ROUTER_ROLE from OLD to NEW router."
    echo "  2. Update env files with the new NetworkRouter address:"
    echo "       apps/frontend/.env       NEXT_PUBLIC_CHILIZ_SWAP_ROUTER_ADDRESS"
    echo "       apps/frontend/.env.example  (same key)"
    echo "       apps/backend/.env        CHILIZ_SWAP_ROUTER_ADDRESS"
    echo "       apps/backend/.env.example   (same key)"
    echo "  3. The NetworkRouter entry in $DEPLOY_OUT is the new address."
    echo "  4. Restart backend so ChilizSwapRouterIndexer re-targets the new addr."
    echo ""
    echo "Known limitation: existing StreamWallets cache the OLD router in their"
    echo "per-wallet swapRouter storage. Donations/subs to those streamers via"
    echo "the new router will revert. New wallets (lazy-deployed by the new"
    echo "router on first donate/sub) get the new router automatically."
    echo ""
fi

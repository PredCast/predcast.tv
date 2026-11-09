#!/usr/bin/env bash
# ==============================================================================
# Production rehearsal on an anvil fork of Chiliz mainnet. Real transactions,
# real Kayen pools, no private key: anvil --auto-impersonate signs for us.
#
#   anvil --fork-url https://rpc.ankr.com/chiliz --port 8545 \
#         --balance 1000000 --auto-impersonate
#   ./script/anvil/chiliz-mainnet-e2e.sh        # from apps/smart-contracts/chiliz-tv
#
# Steps: deploy in production mode, Safe accepts ownership, fund the wallets
# through Kayen swaps, bet with PSG / CHZ / USDC, resolve, claim, then streaming
# and the StreamWallet upgrade planned for the live contracts.
# ==============================================================================
set -euo pipefail

RPC="${RPC:-http://127.0.0.1:8545}"
case "$RPC" in
  http://127.0.0.1:*|http://localhost:*) ;;
  *) echo "Refusing to run against a non-local RPC: $RPC" >&2; exit 1 ;;
esac
[ "$(cast chain-id --rpc-url "$RPC")" = "88888" ] || { echo "Expected a Chiliz mainnet fork" >&2; exit 1; }
cast rpc anvil_nodeInfo --rpc-url "$RPC" >/dev/null || { echo "Not an anvil node" >&2; exit 1; }

# ── Real Chiliz mainnet infrastructure ───────────────────────────────────────
USDC=0xa37936F56249965d407E39347528a1A91eB1cbef
WCHZ=0x677F7e16C7Dd57be1D4C8aD1244883214953DC47
KAYEN=0x1918EbB39492C8b98865c5E53219c3f1AE79e76F
WRAPPERS=0xAEdcF2bf41891777c5F638A098bbdE1eDBa7B264
PSG=0xc2661815C69c2B3924D3dd0c2C1358A1E38A3105
WPSG=0x476eF844B3E8318b3bc887a7db07a1A0FEde5557

# ── Anvil default accounts (public test addresses, local use only) ───────────
DEPLOYER=0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
OPERATOR=0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
ORACLE=0x90F79bf6EB2c4f870365E785982E1f101E93b906
ALICE=0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65
BOB=0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc
CAROL=0x14dC79964da2C08b23698B3D3cc7Ca32193d9955
STREAMER=0x976EA74026E726554dB657fA54763abd0C3a0aa9
# Stand-in for the Safe: production mode requires a contract as SAFE_ADDRESS.
SAFE=0x5AFE00000000000000000000000000000000C0DE

send() { # send <from> <to> <sig> [args...] (extra cast flags through $VALUE)
  local from=$1 to=$2; shift 2
  cast send --unlocked --from "$from" ${VALUE:+--value "$VALUE"} --rpc-url "$RPC" "$to" "$@" >/dev/null
}
call() { cast call --rpc-url "$RPC" "$@" | awk 'NR==1{print $1}'; }
usdc() { call "$USDC" 'balanceOf(address)(uint256)' "$1"; }
fmt()  { awk -v v="$1" 'BEGIN{printf "%.6f USDC", v/1e6}'; }
ok()   { printf '  [ok] %s\n' "$*"; }
fail() { printf '  [FAIL] %s\n' "$*" >&2; exit 1; }
deadline() { echo $(( $(cast block latest --field timestamp --rpc-url "$RPC") + 3600 )); }
min98() { awk -v q="$1" 'BEGIN{printf "%.0f", q*98/100}'; }

echo "== 1. Deploy the audited stack (production mode, chain 88888)"
cast rpc anvil_setCode "$SAFE" 0x00 --rpc-url "$RPC" >/dev/null
cast rpc anvil_setBalance "$SAFE" 0x21E19E0C9BAB2400000 --rpc-url "$RPC" >/dev/null
LOG=$(mktemp)
SAFE_ADDRESS=$SAFE KAYEN_MASTER_ROUTER=$KAYEN KAYEN_ROUTER=$KAYEN WCHZ_ADDRESS=$WCHZ USDC_ADDRESS=$USDC \
WRAPPER_FACTORY=$WRAPPERS MATCH_OPERATOR=$OPERATOR TRANSFER_OWNERSHIP=true ETHERSCAN_API_KEY=unused \
  forge script script/DeployAll.s.sol --rpc-url "$RPC" --broadcast --unlocked --sender "$DEPLOYER" \
  --legacy --with-gas-price 3000000000000 --slow -v >"$LOG" 2>&1 || { tail -n 30 "$LOG"; fail "DeployAll"; }
addr() { grep -m1 -E "^ *$1 *:" "$LOG" | grep -oE '0x[0-9a-fA-F]{40}'; }
FACTORY=$(addr PariMatchFactory); STREAMS=$(addr StreamWalletFactory); ROUTER=$(addr NetworkRouter); BOARD=$(addr LeaderboardRewards)
ok "PariMatchFactory    $FACTORY"
ok "StreamWalletFactory $STREAMS"
ok "NetworkRouter       $ROUTER"
ok "LeaderboardRewards  $BOARD"

echo "== 2. The Safe accepts ownership (Ownable2Step)"
for c in "$FACTORY" "$STREAMS" "$ROUTER"; do send "$SAFE" "$c" 'acceptOwnership()'; done
[ "$(call "$FACTORY" 'owner()(address)')" = "$(cast to-check-sum-address $SAFE)" ] && ok "factory owned by the Safe" || fail "factory owner"

echo "== 3. The operator key creates a match, the deployer cannot"
if cast send --unlocked --from "$DEPLOYER" --rpc-url "$RPC" "$FACTORY" 'createFootballMatch(string,address,address)' X "$OPERATOR" "$ORACLE" >/dev/null 2>&1; then
  fail "the deployer can still create matches"
else ok "deployer rejected"; fi
send "$OPERATOR" "$FACTORY" 'createFootballMatch(string,address,address)' "Anvil FC vs Kayen United" "$OPERATOR" "$ORACLE"
MATCH=$(cast logs --rpc-url "$RPC" --from-block latest --to-block latest --address "$FACTORY" --json | grep -oE '"topics":\["0x[0-9a-f]{64}","0x[0-9a-f]{64}"' | head -1 | grep -oE '0x[0-9a-f]{64}"$' | tr -d '"' | sed 's/^0x000000000000000000000000/0x/')
MATCH=$(cast to-check-sum-address "$MATCH")
WINNER=$(cast keccak WINNER)
send "$OPERATOR" "$MATCH" 'addMarketWithLine(bytes32,int16)' "$WINNER" 0
send "$OPERATOR" "$MATCH" 'openMarket(uint256)' 0
ok "match $MATCH, market 0 open"

echo "== 4. Fund the wallets with real Kayen swaps"
D=$(deadline)
VALUE=500ether send "$ALICE" "$KAYEN" 'swapExactETHForTokens(uint256,address[],address,uint256)' 1 "[$WCHZ,$WPSG]" "$ALICE" "$D"
W=$(call "$WPSG" 'balanceOf(address)(uint256)' "$ALICE")
UNITS=$(awk -v w="$W" 'BEGIN{printf "%.0f", int(w/1e18)}')
send "$ALICE" "$WPSG" 'approve(address,uint256)' "$WRAPPERS" "$W"
send "$ALICE" "$WRAPPERS" 'unwrap(address,address,uint256)' "$ALICE" "$WPSG" "${UNITS}000000000000000000"
ok "alice holds $(call "$PSG" 'balanceOf(address)(uint256)' "$ALICE") PSG (0 decimals)"
VALUE=200ether send "$CAROL" "$KAYEN" 'swapExactETHForTokens(uint256,address[],address,uint256)' 1 "[$WCHZ,$USDC]" "$CAROL" "$D"
ok "carol holds $(fmt "$(usdc "$CAROL")")"

echo "== 5. Three bets, three payment types"
Q=$(call "$ROUTER" 'quoteTokenToUSDC(address,uint256)(uint256)' "$PSG" 5)
send "$ALICE" "$PSG" 'approve(address,uint256)' "$ROUTER" 5
send "$ALICE" "$ROUTER" 'placeBetWithToken(address,uint256,address,uint256,uint64,uint256,uint256)' "$PSG" 5 "$MATCH" 0 0 "$(min98 "$Q")" "$D"
ok "alice: 5 PSG on outcome 0, stake $(fmt "$(call "$MATCH" 'getUserStake(uint256,address,uint64)(uint256)' 0 "$ALICE" 0)")"
Q=$(call "$ROUTER" 'quoteTokenToUSDC(address,uint256)(uint256)' "$WCHZ" 300000000000000000000)
VALUE=300ether send "$BOB" "$ROUTER" 'placeBetWithCHZ(address,uint256,uint64,uint256,uint256)' "$MATCH" 0 2 "$(min98 "$Q")" "$D"
ok "bob: 300 CHZ on outcome 2, stake $(fmt "$(call "$MATCH" 'getUserStake(uint256,address,uint64)(uint256)' 0 "$BOB" 2)")"
send "$CAROL" "$USDC" 'approve(address,uint256)' "$ROUTER" 1000000
send "$CAROL" "$ROUTER" 'placeBetWithUSDC(address,uint256,uint64,uint256)' "$MATCH" 0 0 1000000
ok "carol: 1 USDC on outcome 0"

echo "== 6. Slippage guard on a real transaction"
if VALUE=10ether send "$BOB" "$ROUTER" 'placeBetWithCHZ(address,uint256,uint64,uint256,uint256)' "$MATCH" 0 2 0 "$D" 2>/dev/null; then
  fail "amountOutMin = 0 was accepted"
else ok "amountOutMin = 0 rejected"; fi

echo "== 7. Close, resolve (oracle only), claim"
send "$OPERATOR" "$MATCH" 'closeMarket(uint256)' 0
if cast send --unlocked --from "$OPERATOR" --rpc-url "$RPC" "$MATCH" 'resolveMarket(uint256,uint64)' 0 0 >/dev/null 2>&1; then
  fail "the ops key resolved a market"
else ok "ops key cannot resolve"; fi
send "$ORACLE" "$MATCH" 'resolveMarket(uint256,uint64)' 0 0
POOL=$(call "$MATCH" 'getTotalPool(uint256)(uint256)' 0)
A0=$(usdc "$ALICE"); C0=$(usdc "$CAROL")
send "$ALICE" "$MATCH" 'claim(uint256)' 0
send "$CAROL" "$MATCH" 'claim(uint256)' 0
ok "pool $(fmt "$POOL")"
ok "alice claimed $(fmt $(( $(usdc "$ALICE") - A0 )))"
ok "carol claimed $(fmt $(( $(usdc "$CAROL") - C0 )))"
ok "Safe received $(fmt "$(usdc "$SAFE")") in fees, leaderboard holds $(fmt "$(usdc "$BOARD")")"
[ "$(usdc "$MATCH")" -le 2 ] && ok "escrow emptied ($(usdc "$MATCH") wei of dust)" || fail "escrow still holds $(usdc "$MATCH")"

echo "== 8. Streaming"
send "$ALICE" "$PSG" 'approve(address,uint256)' "$ROUTER" 2
Q=$(call "$ROUTER" 'quoteTokenToUSDC(address,uint256)(uint256)' "$PSG" 2)
send "$ALICE" "$ROUTER" 'donateWithToken(address,uint256,address,string,uint256,uint256)' "$PSG" 2 "$STREAMER" "allez" "$(min98 "$Q")" "$D"
WALLET=$(call "$STREAMS" 'getWallet(address)(address)' "$STREAMER")
ok "alice donated 2 PSG, wallet $WALLET"
send "$STREAMER" "$WALLET" 'setSubscriptionPricing(uint256,uint64)' 1000000 2592000
Q=$(call "$ROUTER" 'quoteTokenToUSDC(address,uint256)(uint256)' "$WCHZ" 200000000000000000000)
VALUE=200ether send "$BOB" "$ROUTER" 'subscribeWithCHZ(address,uint256,uint256,uint256)' "$STREAMER" 2592000 "$(min98 "$Q")" "$D"
[ "$(call "$WALLET" 'isSubscribed(address)(bool)' "$BOB")" = "true" ] && ok "bob subscribed" || fail "bob not subscribed"
AVAIL=$(call "$WALLET" 'availableBalance()(uint256)')
send "$STREAMER" "$WALLET" 'withdrawRevenue(uint256)' "$AVAIL"
ok "streamer withdrew $(fmt "$(usdc "$STREAMER")")"

echo "== 9. Rehearse the live StreamWallet upgrade (audit M-04)"
LIVE_OWNER=0xdaE0c2e9C16E8eC5fc9CBE04808AE549bb80E387
LIVE_STREAMS=0x0Ffa30b48ADc0b2B773DC01422D249aEE135a4Bb
LIVE_ROUTER=0x72befD1186f24Cba64266995cD627B79C799292a
LIVE_STREAMER=0x0a5A9A0D53De4CBd8AD8a1cC28B563C5d6aD2a9f
LIVE_WALLET=0x94B477536C84E32942DA6354657551b111dadD6c
if VALUE=100ether send "$BOB" "$LIVE_ROUTER" 'donateWithCHZ(address,string,uint256,uint256)' "$LIVE_STREAMER" "before" 1 "$D" 2>/dev/null; then
  fail "the live wallet already accepts the router"
else ok "before: donation through the live router reverts"; fi
cast rpc anvil_setBalance "$LIVE_OWNER" 0x21E19E0C9BAB2400000 --rpc-url "$RPC" >/dev/null
FACTORY_ADDRESS=$LIVE_STREAMS STREAMER_WALLETS=$LIVE_STREAMER ETHERSCAN_API_KEY=unused \
  forge script script/UpgradeStreaming.s.sol --rpc-url "$RPC" --broadcast --unlocked --sender "$LIVE_OWNER" \
  --legacy --with-gas-price 3000000000000 --slow -v >"$LOG" 2>&1 || { tail -n 30 "$LOG"; fail "UpgradeStreaming"; }
VALUE=100ether send "$BOB" "$LIVE_ROUTER" 'donateWithCHZ(address,string,uint256,uint256)' "$LIVE_STREAMER" "after" 1 "$D"
ok "after: donation through the live router lands, wallet holds $(fmt "$(usdc "$LIVE_WALLET")")"

rm -f "$LOG"
echo "== ALL STEPS PASSED =="

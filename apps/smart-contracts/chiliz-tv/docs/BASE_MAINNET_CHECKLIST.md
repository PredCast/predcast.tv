# Base mainnet: checklist before real funds

Run this list top to bottom. Every broadcast to Base mainnet is done by a person holding the keys, never by a script left unattended. The Base Sepolia run comes first (`.env.baseSepolia`, same commands with `--network baseSepolia`).

## 1. Decisions to take first

| Topic | Why it matters | Where |
|---|---|---|
| External audit | No human audit covers the current code. | Section 7 |
| DEX pools | **Decided 2026-11-11: keep the Aero pools.** They come from the Aero Slipstream V3 factory `0x9CB2…7a76` (Basescan "Dromos: CL Factory"), which holds the Base liquidity since the Aerodrome and Velodrome merger. Still to do: find the address in Aero's official contract list. | `docs/TEST_ADDRESSES.md`, Base section |
| Streaming fee cap | **Decided 2026-11-10: no lower cap.** `NetworkRouter.setPlatformFeeBps` accepts up to 100 %, only the router owner (the Safe) can move it, and it stays at 5 % by default. | `src/swap/NetworkRouter.sol` |
| Timelock | `TIMELOCK_DELAY=0` gives the Safe instant control over match code (beacons). A delay gives users time to leave before an upgrade. | `.env.baseMainnet` |

## 2. Keys and Safe

1. **Safe.** Create a Safe on Base (the Safe from another chain has no code here). `DeployAll` refuses a `SAFE_ADDRESS` or `UPGRADE_ADMIN` without code off test chains.
2. **Deployer.** Use a fresh key, used only for the deployment. Never reuse a key that was ever committed, shared or used on a test machine.
3. **Match operator** (`MATCH_OPERATOR`). This is the backend hot key that creates matches once the Safe owns the factory.
4. **Oracle.** Use a separate key, held only by the resolver worker (`RESOLVER_PRIVATE_KEY` in the backend). The factory refuses an oracle equal to the match owner, the factory owner or the operator.
5. **Treasury.** It is the Safe: `SAFE_ADDRESS` receives the betting and streaming fees.

## 3. `.env.baseMainnet`

```bash
cp .env.baseMainnet.example .env.baseMainnet
```

Fill in:
- `PRIVATE_KEY` (deployer) and `SAFE_ADDRESS`;
- `UPGRADE_ADMIN` (default: the Safe) and `MATCH_OPERATOR`;
- `TRANSFER_OWNERSHIP=true` and `TIMELOCK_DELAY`;
- `ETHERSCAN_API_KEY` if you add `--verify` to `FORGE_FLAGS`.

Leave both `KAYEN_*` empty, so `--all` deploys the pool adapter. The file is gitignored: never commit it.

## 4. Rehearse on a local fork

Start a fork of Base mainnet:

```bash
anvil --fork-url https://base-rpc.publicnode.com --port 8547 --auto-impersonate
```

Then run, in order:

1. `forge script script/DeployAll.s.sol --rpc-url http://127.0.0.1:8547 --private-key <anvil key> --broadcast`. Use a stand-in Safe on the fork: `cast rpc anvil_setCode <safe> 0x00`.
2. On the fork, impersonate the Safe and call `acceptOwnership()` on the factory, the streaming factory, the router and the adapter.
3. `forge script script/SmokeTestBase.s.sol --rpc-url http://127.0.0.1:8547 --broadcast --evm-version cancun --out out-cancun --cache-path cache-cancun`, with three anvil keys.

On the fork, add `--with-gas-price 20000000` to both scripts (section 8).

The rehearsal of 2026-11-10 is recorded in section 8.

## 5. Deploy

```bash
./deploy.sh --network baseMainnet --all --dry-run
```

```bash
./deploy.sh --network baseMainnet --all
```

`deploy.sh` writes `deployments/baseMainnet.json`.

## 6. After the deployment

1. **From the Safe:** `acceptOwnership()` on `PariMatchFactory`, `StreamWalletFactory`, `NetworkRouter` and `ConcentratedPoolAdapter`.
2. **Read back with `cast`:**
   - each contract's `owner()`;
   - `factory.swapRouter()`, `factory.leaderboardRewards()`, `factory.matchOperator()`;
   - `router.streamWalletFactory()`, `router.bettingMatchFactory()`, `router.platformFeeBps()`;
   - `adapter.getRoute(token, USDC)` for each token;
   - the leaderboard's `DEFAULT_ADMIN_ROLE` holder (the Safe only).
3. **First bets.** Run `SmokeTestBase` with real keys and a few cents of ETH:

   ```bash
   forge script script/SmokeTestBase.s.sol --rpc-url https://mainnet.base.org --broadcast --slow --evm-version cancun --out out-cancun --cache-path cache-cancun
   ```

   Run it yourself; it swaps real ETH. It needs `OWNER_PRIVATE_KEY`, `ORACLE_PRIVATE_KEY` and `PARI_FACTORY_ADDRESS` next to `PRIVATE_KEY` (the match operator).
4. **Backend and frontend:** `artifacts:sync` (the router ABI uses the `*WithNativeToken` names), the new addresses, and `RESOLVER_PRIVATE_KEY` on the worker.

## 7. External audit

- **Scope:** `src/` (about 2,800 nSLOC). Start with `src/swap/` and `src/pari/PariMatchBase.sol`.
- **Material to hand over:** `docs/PARI_MUTUEL.md`, `docs/CALL_FLOWS.md`, the invariant suite (`test/invariant/`), and the static-analysis triage.
- **Hold the mainnet launch** until the findings are fixed.

## 8. Rehearsal record

**2026-11-10, local anvil forks, no real transaction.**

| Step | Base Sepolia fork | Base mainnet fork |
|---|---|---|
| `DeployAll` | 17 transactions, 22.1 M gas | 23.0 M gas, `TRANSFER_OWNERSHIP=true` |
| Safe `acceptOwnership` | not needed (deployer keeps ownership) | done on all four contracts; the leaderboard's only `DEFAULT_ADMIN_ROLE` holder is the Safe |
| `SmokeTestBase` | passed, 4.1 M gas | passed, 5.0 M gas |
| Stakes / payout | 0.293 + 0.147 USDC staked, 0.431 USDC paid (2 % fee) | 0.408 + 0.204 USDC staked, 0.599 USDC paid |
| Streaming | 0.293 USDC gross, 0.279 USDC withdrawn (5 % fee) | 0.408 USDC gross, 0.387 USDC withdrawn |

**Cost.** At 0.006 gwei (Base mainnet, 2026-11-10), the deployment costs about 0.00014 ETH of L2 gas, plus the L1 data fee.

**Fork-only flags:**
- On an anvil fork of Base mainnet, `forge script` needs `--with-gas-price` because the fork does not answer the EIP-1559 fee query.
- Any script that quotes or swaps through the Aero pools needs `--evm-version cancun`, because their swap hook uses Cancun opcodes. Without it, the local simulation sees the quote as 0. The real chain is not affected. On mainnet, run the smoke test with `--evm-version cancun --out out-cancun --cache-path cache-cancun`.

**Aero pools: the fee comes from a hook.** Each Aero pool reads its fee from a swap hook (`getPoolSwapHook`). The hook takes the swapper and the swap parameters, so its owner can change the fee for any swap. The adapter's quote replays the fee the hook returns for an empty swap. If the hook charges more on a real swap, the swap reverts on `amountOutMin`: funds are safe, the payment fails.

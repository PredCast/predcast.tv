# Integration tests — local Anvil + Supabase

The L4 layer of the testing strategy runs real txs against a local EVM
(Anvil, fork of Spicy by default) and real SQL against a local Supabase
instance. **No CI integration in this lot** — these suites run locally via
`pnpm test:integration`.

## Prerequisites — one-time install

| Tool | Why | Install |
|---|---|---|
| **Foundry** (forge + anvil) | Spawn local EVM, deploy contracts | `curl -L https://foundry.paradigm.xyz | bash && foundryup` |
| **Supabase CLI** | Stand up local Postgres with the prod schema | macOS: `brew install supabase/tap/supabase` · others: see [docs](https://supabase.com/docs/guides/cli) |
| **psql** | Apply migrations | macOS: `brew install libpq && brew link --force libpq` · Linux: `apt install postgresql-client` |
| **pnpm 10.28.1** | Workspace runner | `corepack enable && corepack prepare pnpm@10.28.1 --activate` |

Verify everything is on the PATH:

```bash
forge --version && anvil --version && supabase --version && psql --version
```

## Run the suite

```bash
# 1. Start Supabase local (one-off, leave it running between suites)
supabase start

# 2. Run the integration suite
cd apps/backend
pnpm test:integration

# 3. When you are done iterating
supabase stop
```

The harness:
1. runs `_health-check.ts` first — if any tool is missing, every test is
   marked `skip` and the suite reports a clear install hint.
2. spawns Anvil on port 8545 (default), forked from Spicy public RPC. Override
   the fork target with `ANVIL_FORK_URL=...` or set `ANVIL_FORK_URL=""` to
   spin a vanilla local chain (faster, no Spicy state).
3. resolves the local Supabase DB URL via `SUPABASE_DB_URL` env, then falls
   back to parsing `supabase status -o env`.
4. applies every migration `001_*.sql` → `015_*.sql` via `pnpm db:migrate`
   (which shells out to `psql`).
5. exposes a `MockClock` the tests can `advanceBy*` to drive time-dependent
   code paths (job ticks, kickoff buffer, expiry checks).

## Targeting one suite

```bash
pnpm test:integration --grep "no-live-betting"
```

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `Integration prerequisites missing: anvil — Install Foundry: ...` | Foundry not on PATH | `foundryup` then re-open the shell |
| `Anvil at http://127.0.0.1:8545 did not respond within 10000ms` | Port already taken (e.g. another Anvil), or fork RPC is slow | `lsof -iTCP:8545` to find the squatter, kill it. Or set `ANVIL_FORK_URL=""` to skip the fork. |
| `SUPABASE_DB_URL ... could not resolve it. Run \`supabase start\` first.` | Local Supabase down | `supabase start` |
| `pnpm db:migrate failed` | `psql` missing or DB URL wrong | `psql --version` to check, then `supabase status` to fetch the right URL |
| Tests pass but `it.todo` count > real assertions | Suite scaffolding only — see Lot 4 in [.claude/plans/1-contexte-les-smart-rustling-goose.md](../.claude/plans/1-contexte-les-smart-rustling-goose.md) | Wire up the deploy harness inside `_setup.ts` (search for `TODO(integration-deploy)`) |

## What lives where

```
apps/backend/
├── vitest.integration.config.ts         60s timeout, retry once, single-fork
├── scripts/run-migrations.ts            psql shell-out — picks up DATABASE_URL
└── src/testing/integration/
    ├── _health-check.ts                 forge + anvil + supabase + psql probe
    ├── _setup.ts                        spawn anvil → migrate → return ctx
    ├── no-live-betting.integration.test.ts
    ├── resolve-finished-match.integration.test.ts
    └── cancel-flow.integration.test.ts
```

## Adding a new integration test

1. Drop a new `<name>.integration.test.ts` under `src/testing/integration/`.
2. `describe.skipIf(!runHealthCheck().ok)('integration · <name>', () => { … })` — keeps the suite green on a dev machine without Foundry/Supabase.
3. In `beforeAll`, call `setupIntegrationEnv()` and remember to `teardownIntegrationEnv()` in `afterAll`.
4. To get a fresh Anvil state between tests, use `anvil_snapshot` / `anvil_revert` against `ctx.anvilRpcUrl` (raw `eth_*` RPC calls).
5. To get a clean DB between tests, `DELETE FROM matches WHERE api_football_id >= 999000` (or expand to other fixture-owned tables as the suite grows).

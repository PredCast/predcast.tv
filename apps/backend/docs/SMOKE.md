# Match scenarios — index

The `match:scenario` CLI exposes reproducible, scriptable fixtures backed by
`src/testing/scenarios/`. Each scenario is idempotent and writes to the
fixture ID range `999000-999999` so `pnpm match:reset` can clean it up
atomically.

## Quick start

```bash
pnpm match:scenario list                       # list available scenarios
pnpm match:scenario run halftime               # creates 1 match in HT + deploys contract
pnpm match:scenario run halftime --no-deploy   # DB only (2s vs 90s)
pnpm match:reset                               # DELETE FROM matches WHERE api_football_id >= 999000
```

## Available scenarios

### `upcoming-saturday`
**Intent**: discover-grid happy path with 4 upcoming matches across 4 leagues.
**Expected outcome**: 4 NS rows in `matches`, kickoff `+60` → `+105` min from `clock.now()`. Each match's odds carry `{winner, goalsTotal, bothScore}`.
**Cleanup**: `pnpm match:reset`.

### `kickoff-buffer-edge`
**Intent**: NS at T-90s — triggers `KICKOFF_BUFFER` in `BettablePolicy` (default buffer = 120s).
**Expected outcome**: 1 NS row whose `match_date` is 90s in the future. `isBettable(match, clock.now(), { kickoffBufferSec: 120 })` returns `{ ok: false, reason: 'KICKOFF_BUFFER' }`.
**Cleanup**: `pnpm match:reset`.

### `halftime`
**Intent**: verify the "Halftime · Betting closed" UI pill and the L2 layer of the no-live-betting plan.
**Expected outcome**: 1 row with `status = 'HT'`, score 1-0, kickoff -50 min. Front renders pill differentiated from generic "Live · Betting closed".
**Cleanup**: `pnpm match:reset`.

### `cancel-flow`
**Intent**: match marked `CANC`. Used to verify `cancelOpenMarketsForMatch` lifts the bet-refund path for pre-match bettors.
**Expected outcome**: 1 row with `status = 'CANC'`. The next `CloseLiveMarketsJob` tick should call `cancelOpenMarketsForMatch` (not `closeOpenMarketsForMatch`).
**Cleanup**: `pnpm match:reset`.

### `no-live-betting-full`
**Intent**: composite scenario that rejoue les checks du `SMOKE_no_live_betting.md` (HT + kickoff buffer + cancel).
**Expected outcome**: 3 rows in DB (one per sub-scenario). Combined `matchesCreated = 3`, `contractsDeployed` depends on `--no-deploy`.
**Cleanup**: `pnpm match:reset`.

## Authoring a new scenario

1. Create `src/testing/scenarios/<name>.scenario.ts` exporting a `MatchScenario` (see [types.ts](src/testing/scenarios/types.ts)).
2. Build the `Match` via `matchFixture.*` from [src/testing/fixtures/match.fixtures.ts](src/testing/fixtures/match.fixtures.ts) — never hand-craft a `Match.create` payload.
3. Call `persistAndMaybeDeploy(match, ctx, warnings)` to honor the `--no-deploy` flag.
4. Register in [registry.ts](src/testing/scenarios/registry.ts).
5. Add an entry in this SMOKE.md describing intent / expected outcome / cleanup.

## Bet labels per market — smoke

Validates the `selectionToBetLabel` wiring (Lot 1+2 of the bet-label-mismatch
plan). Goal : place one bet per market type and confirm the chat + dashboard
display the right label, not "Victoire PSG" everywhere.

### Steps

1. Reset + scenario :
   ```bash
   pnpm match:reset
   pnpm match:scenario run upcoming-saturday
   ```
   → 4 matches deployed, each with 3 markets open (WINNER, GOALS_TOTAL, BOTH_SCORE).

2. Pick the first contract address from the logs (`PSG vs Marseille`, e.g.
   `0x3916a2f36cb462dccb971f945cc5a9cd932acecf`). Export :
   ```bash
   export MATCH=0x3916a2f36cb462dccb971f945cc5a9cd932acecf
   export ROUTER=0x735526e4b16a95df7b2772f1dea4433dbd9c650b
   export USER_PK=...
   ```

3. Approve USDC for the router + place three bets via `cast` :
   ```bash
   cast send $USDC "approve(address,uint256)" $ROUTER 1000000 \
       --private-key $USER_PK --rpc-url https://spicy-rpc.chiliz.com

   # WINNER market (marketId=0), Home selection (PSG)
   cast send $ROUTER "placeBetWithUsdc(address,uint256,uint64,uint256)" \
       $MATCH 0 0 100000 --private-key $USER_PK --rpc-url https://spicy-rpc.chiliz.com

   # GOALS_TOTAL market (marketId=1), Under selection (0)
   cast send $ROUTER "placeBetWithUsdc(address,uint256,uint64,uint256)" \
       $MATCH 1 0 100000 --private-key $USER_PK --rpc-url https://spicy-rpc.chiliz.com

   # BOTH_SCORE market (marketId=2), Yes selection (1)
   cast send $ROUTER "placeBetWithUsdc(address,uint256,uint64,uint256)" \
       $MATCH 2 1 100000 --private-key $USER_PK --rpc-url https://spicy-rpc.chiliz.com
   ```

4. After the indexer ticks (a few seconds), inspect `chat_messages` in
   Supabase :
   ```sql
   SELECT message, system_type, stream_id
   FROM chat_messages
   WHERE match_id = 999000
   ORDER BY created_at DESC
   LIMIT 3;
   ```
   Expected rows :
   - `🎯 New prediction: 0.10 USDC on PSG`         · `bet` · NULL
   - `🎯 New prediction: 0.10 USDC on Under 2.5`   · `bet` · NULL
   - `🎯 New prediction: 0.10 USDC on Yes`         · `bet` · NULL

5. `stream_id IS NULL` confirms the bet-notification routing invariant
   (the `ChatMessage` entity throws if it were ever set).

6. Inspect `predictions` — only the WINNER bet must produce a row :
   ```sql
   SELECT prediction_value, predicted_team, transaction_hash
   FROM predictions
   WHERE match_id = 999000;
   ```
   Expected : 1 row (`predictionValue='home', predictedTeam='PSG'`). GOALS_TOTAL
   and BOTH_SCORE are silently skipped (see Lot 2 of the bet-label-mismatch plan).

7. Inspect `market_events` payload — `line` should be populated for every
   FootballMatch market :
   ```sql
   SELECT payload->>'marketType', payload->>'line', payload->>'maxSelections'
   FROM market_events
   WHERE contract_address = lower($MATCH) AND event_name = 'MarketCreated';
   ```
   Expected : 3 rows, GOALS_TOTAL row has `line = 25`.

8. Frontend : open `/dashboard` connected as the bettor. The "My Bets" rows
   should read `PSG`, `Under 2.5`, `Yes` (not `Home` / `Selection #0`).
   Activity feed should render the same strings.

### Backfill smoke (optional)

Simulate a missed `readFootballMarket` :
```sql
UPDATE market_events
SET payload = payload - 'line'
WHERE contract_address = lower($MATCH)
  AND event_name = 'MarketCreated';
```
Wait for `BackfillMarketLinesJob` to tick (≤ 1h, env override
`BACKFILL_LINES_JOB_INTERVAL_MS` for faster testing). The job should patch
`payload.line` back to its on-chain value.

## Conventions

- Fixture IDs are reserved to the `999000-999999` range. Production matches keep their API-Football IDs (well below).
- Scenarios must be idempotent: a second invocation should not duplicate rows (auto IDs via `nextTestMatchId`).
- Composition via `await otherScenario.apply(ctx)`. No `Promise.all` — the nonce manager on the admin wallet serialises tx ordering already, but the composition runs sequentially to keep error traces readable.
- For time-dependent assertions (e.g. "after the close-live-markets job ticks"), use the L4 integration suite where `MockClock.advanceBy*` is available. The CLI runs against `SystemClock` and cannot fast-forward real wall-clock.

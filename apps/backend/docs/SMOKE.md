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

### `live-first-half`

**Intent**: verify the generic "Live · Betting closed" state (in-game, not halftime) on `/live/[id]` and in the Discover grid.

**Expected outcome**: 1 row with `status = '1H'`, score 0-0, kickoff -20 min. `isBettable` returns `{ ok: false, reason: 'LIVE' }`. With the backend running, the next `CloseLiveMarketsJob` tick moves the Open markets to `Closed`.

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

### `fan-token-derby`
**Intent**: fan-token charts under the stream with both tokens + the cross pair. Real API-Football team IDs (PSG 85, OM 81, see [team.fixtures.ts](src/testing/fixtures/team.fixtures.ts)).
**Expected outcome**: 3 rows: PSG vs OM `NS` (kickoff +3h), `1H` (kickoff -20 min) and `2H` (kickoff -80 min, HT stamped at +47 min, 2nd half at +62 min). `/live/<id>` shows the `PSG/USDC`, `OM/USDC` and `PSG/OM` tabs; the `1H` match draws the kick-off marker, the `2H` match draws kick-off, HT and 2nd-half markers on 24H (HT and 2nd half on 1H).
**Cleanup**: `pnpm match:reset`.

### `single-fan-token`
**Intent**: only one side has a fan token.
**Expected outcome**: 1 row, PSG (85) vs Lens (116) `NS` (kickoff +4h). A single `PSG/USDC` tab, no cross pair.
**Cleanup**: `pnpm match:reset`.

### `no-fan-token`
**Intent**: no fan token on either side.
**Expected outcome**: 1 row, Lille (79) vs Rennes (94) `NS` (kickoff +5h). The chart block is not rendered at all (no placeholder).
**Cleanup**: `pnpm match:reset`.

### `admin-deploy-flow`
**Intent**: manual deployment from the admin (Task 3). Real API-Football team IDs.
**Expected outcome**: without contracts (`--no-deploy`), 4 rows, all undeployed: PSG vs OM (+1d), Lille vs Rennes (+2d), PSG vs Lens (+3d), OM vs Lille (+4d); the first two are meant to be deployed from the admin Markets page ("To deploy" tab). With contracts, PSG vs Lens is deployed + published (on Discover) and OM vs Lille deployed + hidden (admin "Deployed" tab, not on Discover, `/live/<id>` shows "Match not available").
**Cleanup**: `pnpm match:reset`.

## Match visibility (migration 041) — smoke

Only deployed + published matches exist for app users. Run after `pnpm dev:supabase:migrate`.

1. **RLS**: `pg_policies` on `matches` has a single SELECT policy, `matches_anon_select`, filtering on `published_at` and `betting_contract_address`:
   `psql … -c "select policyname, cmd, qual from pg_policies where tablename='matches'"`.
2. **Anon cannot read a hidden match** (anon key from `apps/frontend/.env`):
   `curl "$SUPABASE_URL/rest/v1/matches?select=api_football_id&api_football_id=eq.<hidden id>" -H "apikey: $ANON" -H "Authorization: Bearer $ANON"` → `[]`; the same query on a published match returns its row.
3. **Anon cannot touch the queue**: `GET /rest/v1/match_admin_operations` and `POST /rest/v1/rpc/claim_match_admin_operation` with the anon key → `42501 permission denied`.
4. **App API**: `GET /matches/<hidden id>` → 404; `GET /matches/browse` lists no match without a contract.
5. **Bets stay**: for a wallet with a bet on a hidden match, `GET /admin/players/<wallet>` (same bets query as the dashboard) still returns the bet with its match metadata.

### Admin deployment checklist
1. Admin Markets → "To deploy": search a team, open Deploy, pick Chiliz, confirm. The dialog shows queued → deploy tx → markets opening → done (8 markets, 9 on knockout).
2. Double-click Deploy (or two tabs): one operation, the other request gets 409; the factory `getAllMatches()` grows by one.
3. Discover shows the match right away (no TTL wait); a bet goes through from `/live/<id>`.
4. Unpublish → "Hide only": gone from Discover, `/live/<id>` → "Match not available", the bet still visible and claimable in the dashboard.
5. On another match, Unpublish → "Hide and cancel the markets" with a reason: every market turns Cancelled on-chain; stakers can `claimRefund`.
6. Interrupted deploy: a contract recorded without markets (no opening date, not published) shows "Retry setup"; it seeds + opens the markets and publishes. A second retry opens 0 markets.

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
- Scenarios can be stacked: the runner skips fixture IDs already present in `matches` before applying a scenario, so successive `run` invocations allocate fresh IDs instead of colliding on 999000 (auto IDs via `nextTestMatchId`).
- Composition via `await otherScenario.apply(ctx)`. No `Promise.all` — the nonce manager on the admin wallet serialises tx ordering already, but the composition runs sequentially to keep error traces readable.
- For time-dependent assertions (e.g. "after the close-live-markets job ticks"), use the L4 integration suite where `MockClock.advanceBy*` is available. The CLI runs against `SystemClock` and cannot fast-forward real wall-clock.

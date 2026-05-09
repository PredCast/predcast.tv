-- Migration 011: blockchain indexer tables (Lot 1 of the smart-contract integration plan).
--
-- Adds the persistence layer for the new indexers (BettingMatchFactory,
-- BettingMatchEvent, LiquidityPool, ChilizSwapRouter, StreamWallet) and
-- backfills the legacy tables (predictions, donations, subscriptions,
-- stream_wallets) with a `log_index` column so the new dedup key
-- (tx_hash, log_index) can be used uniformly.
--
-- Idempotency: composite uniqueness on (tx_hash, log_index) for every
-- indexer-managed table. Existing rows keep log_index = NULL — we use a
-- partial unique index so the legacy uniqueness on tx_hash alone is
-- preserved for those rows.

BEGIN;

-- ─── 1. Indexer checkpoints ─────────────────────────────────────────────────
-- Persisted per-indexer cursor. Each indexer reads its own row, runs a
-- batch, then writes back the new last_block. Replaces the previous
-- in-memory `currentBlock - 100` heuristic.
CREATE TABLE IF NOT EXISTS indexer_checkpoints (
    indexer_name    text PRIMARY KEY,
    contract_address text,
    last_block      bigint NOT NULL DEFAULT 0,
    updated_at      timestamptz NOT NULL DEFAULT now()
);

-- ─── 2. Bets (on-chain bookkeeping) ─────────────────────────────────────────
-- One row per BetPlaced event. Status transitions: PENDING -> WON/LOST/REFUNDED.
-- Distinct from the `predictions` table (which is also fed by the API direct
-- prediction flow). The two are joined via tx_hash when both rows exist.
CREATE TABLE IF NOT EXISTS bets (
    tx_hash          text NOT NULL,
    log_index        integer NOT NULL,
    contract_address text NOT NULL,
    market_id        bigint NOT NULL,
    bet_index        bigint NOT NULL,
    user_address     text NOT NULL,
    selection        bigint NOT NULL,
    net_stake        numeric(78, 0) NOT NULL,
    gross_stake      numeric(78, 0),
    odds_x10000      integer NOT NULL,
    odds_index       integer,
    status           text NOT NULL DEFAULT 'PENDING'
        CHECK (status IN ('PENDING', 'WON', 'LOST', 'REFUNDED')),
    payout           numeric(78, 0),
    refund_amount    numeric(78, 0),
    block_number     bigint NOT NULL,
    block_timestamp  timestamptz NOT NULL,
    placed_at        timestamptz NOT NULL DEFAULT now(),
    resolved_at      timestamptz,
    claimed_at       timestamptz,
    refunded_at      timestamptz,
    PRIMARY KEY (tx_hash, log_index)
);
CREATE INDEX IF NOT EXISTS idx_bets_user        ON bets (lower(user_address));
CREATE INDEX IF NOT EXISTS idx_bets_contract    ON bets (lower(contract_address));
CREATE INDEX IF NOT EXISTS idx_bets_market      ON bets (lower(contract_address), market_id);
CREATE INDEX IF NOT EXISTS idx_bets_status      ON bets (status);
CREATE INDEX IF NOT EXISTS idx_bets_block       ON bets (block_number);

-- ─── 3. Pool events (audit log + APY source) ────────────────────────────────
-- Generic key/value bucket for every event emitted by LiquidityPool and
-- ChilizSwapRouter. Used by the APY job and by the LP position panel.
CREATE TABLE IF NOT EXISTS pool_events (
    tx_hash         text NOT NULL,
    log_index       integer NOT NULL,
    contract_address text NOT NULL,
    event_name      text NOT NULL,
    block_number    bigint NOT NULL,
    block_timestamp timestamptz NOT NULL,
    payload         jsonb NOT NULL DEFAULT '{}'::jsonb,
    PRIMARY KEY (tx_hash, log_index)
);
CREATE INDEX IF NOT EXISTS idx_pool_events_event ON pool_events (event_name);
CREATE INDEX IF NOT EXISTS idx_pool_events_contract ON pool_events (lower(contract_address));
CREATE INDEX IF NOT EXISTS idx_pool_events_block ON pool_events (block_number);

-- ─── 4. Market events (per-match audit) ─────────────────────────────────────
-- Captures MarketCreated, MarketStateChanged, OddsUpdated, MarketResolved,
-- MarketCancelled. Drives the on-chain market-state snapshot the front uses.
CREATE TABLE IF NOT EXISTS market_events (
    tx_hash         text NOT NULL,
    log_index       integer NOT NULL,
    contract_address text NOT NULL,
    market_id       bigint,
    event_name      text NOT NULL,
    block_number    bigint NOT NULL,
    block_timestamp timestamptz NOT NULL,
    payload         jsonb NOT NULL DEFAULT '{}'::jsonb,
    PRIMARY KEY (tx_hash, log_index)
);
CREATE INDEX IF NOT EXISTS idx_market_events_contract_market ON market_events (lower(contract_address), market_id);
CREATE INDEX IF NOT EXISTS idx_market_events_event ON market_events (event_name);

-- ─── 5. LP positions (derived view of holders) ──────────────────────────────
-- Maintained by the LiquidityPoolIndexer from Deposit/Withdraw events.
-- cost_basis is tracked here so the front can show unrealized gain without
-- a per-render contract read. last_deposit_at drives the cooldown UI.
CREATE TABLE IF NOT EXISTS lp_positions (
    holder           text PRIMARY KEY,
    shares           numeric(78, 0) NOT NULL DEFAULT 0,
    cost_basis       numeric(78, 0) NOT NULL DEFAULT 0,
    last_deposit_at  timestamptz,
    updated_at       timestamptz NOT NULL DEFAULT now()
);

-- ─── 6. Wiring alerts (post-MatchCreated validation) ────────────────────────
-- Populated by BettingMatchFactoryIndexer when a freshly-created match is
-- missing one of the required wiring steps (setUSDCToken, setLiquidityPool,
-- pool.authorizeMatch, grantRole(SWAP_ROUTER_ROLE, …), etc.).
CREATE TABLE IF NOT EXISTS wiring_alerts (
    match_address   text PRIMARY KEY,
    missing_steps   jsonb NOT NULL,
    detected_at     timestamptz NOT NULL DEFAULT now(),
    resolved_at     timestamptz
);

-- ─── 7. Backfill log_index on legacy tables ─────────────────────────────────
-- Adds a nullable log_index. The dedup key on new rows becomes
-- (transaction_hash, log_index); existing rows keep their tx-only uniqueness.

ALTER TABLE predictions   ADD COLUMN IF NOT EXISTS log_index integer;
ALTER TABLE donations     ADD COLUMN IF NOT EXISTS log_index integer;
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS log_index integer;
ALTER TABLE stream_wallets ADD COLUMN IF NOT EXISTS log_index integer;

-- Composite uniqueness for new rows. Partial — applies only when log_index
-- is set, so legacy rows (log_index NULL) keep their tx_hash-only contract.
CREATE UNIQUE INDEX IF NOT EXISTS uq_predictions_tx_log
    ON predictions (transaction_hash, log_index)
    WHERE log_index IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS uq_donations_tx_log
    ON donations (transaction_hash, log_index)
    WHERE log_index IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS uq_subscriptions_tx_log
    ON subscriptions (transaction_hash, log_index)
    WHERE log_index IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS uq_stream_wallets_tx_log
    ON stream_wallets (transaction_hash, log_index)
    WHERE log_index IS NOT NULL;

COMMIT;

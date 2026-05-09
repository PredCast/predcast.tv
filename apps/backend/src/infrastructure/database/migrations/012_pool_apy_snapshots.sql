-- Migration 012: APY snapshots for the LP pool.
-- Driven by the ComputeApyJob (15 min). The frontend reads the most recent
-- row via GET /api/pool/apy and renders it on the PoolPanel.
--
-- APY methodology (mirrors Lot 3 plan):
--   APY_brut = ((pps_end / pps_start) − 1) × (365 / window_days)
-- where pps = totalAssets() / totalSupply() at the matching block boundaries.
-- `noisy` is set to TRUE when the window contains a Deposit/Withdraw whose
-- shares delta exceeds 5% of supply — a flag for the UI to show a tooltip.

BEGIN;

CREATE TABLE IF NOT EXISTS pool_apy_snapshots (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    window_label    text NOT NULL CHECK (window_label IN ('7d', '30d')),
    pps_start       numeric(78, 0) NOT NULL,
    pps_end         numeric(78, 0) NOT NULL,
    apy_bps         integer NOT NULL,
    apy_post_fee_bps integer,
    period_days     integer NOT NULL,
    noisy           boolean NOT NULL DEFAULT false,
    block_start     bigint NOT NULL,
    block_end       bigint NOT NULL,
    computed_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_pool_apy_snapshots_window_computed
    ON pool_apy_snapshots (window_label, computed_at DESC);

COMMIT;

-- 042 — Admin jobs page (state + run history + manual runs) and dashboard aggregates.
--
-- job_state: one row per job, upserted after every tick (counters included).
-- job_runs:  manual runs, failures, and scheduled runs of jobs ticking every minute or slower.
--            Scheduled skipped_lock ticks are only counted in job_state. Purged after 14 days by
--            the PurgeJobRuns job. Neither table joins the realtime publication.

BEGIN;

-- ─── job_state ──────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS job_state (
    job_name              TEXT        PRIMARY KEY,
    last_status           TEXT        CHECK (last_status IN ('succeeded', 'failed')),
    last_started_at       TIMESTAMPTZ,
    last_finished_at      TIMESTAMPTZ,
    last_duration_ms      INTEGER,
    last_error            TEXT,
    last_success_at       TIMESTAMPTZ,
    consecutive_failures  INTEGER     NOT NULL DEFAULT 0,
    runs_total            BIGINT      NOT NULL DEFAULT 0,
    failures_total        BIGINT      NOT NULL DEFAULT 0,
    skipped_lock_total    BIGINT      NOT NULL DEFAULT 0,
    updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE job_state ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON job_state FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON job_state TO service_role;

-- A skipped tick (lock held by another worker) only bumps its counter: the last run stays the
-- one that actually executed.
CREATE OR REPLACE FUNCTION record_job_tick(
    p_job_name     TEXT,
    p_status       TEXT,
    p_started_at   TIMESTAMPTZ,
    p_finished_at  TIMESTAMPTZ,
    p_duration_ms  INTEGER,
    p_error        TEXT
)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    IF p_status NOT IN ('succeeded', 'failed', 'skipped_lock') THEN
        RAISE EXCEPTION 'record_job_tick: unknown status %', p_status;
    END IF;

    IF p_status = 'skipped_lock' THEN
        INSERT INTO job_state (job_name, skipped_lock_total, updated_at)
        VALUES (p_job_name, 1, p_finished_at)
        ON CONFLICT (job_name) DO UPDATE
           SET skipped_lock_total = job_state.skipped_lock_total + 1,
               updated_at         = p_finished_at;
        RETURN;
    END IF;

    INSERT INTO job_state AS s (
        job_name, last_status, last_started_at, last_finished_at, last_duration_ms, last_error,
        last_success_at, consecutive_failures, runs_total, failures_total, updated_at
    )
    VALUES (
        p_job_name, p_status, p_started_at, p_finished_at, p_duration_ms, p_error,
        CASE WHEN p_status = 'succeeded' THEN p_finished_at END,
        CASE WHEN p_status = 'failed' THEN 1 ELSE 0 END,
        1,
        CASE WHEN p_status = 'failed' THEN 1 ELSE 0 END,
        p_finished_at
    )
    ON CONFLICT (job_name) DO UPDATE
       SET last_status          = EXCLUDED.last_status,
           last_started_at      = EXCLUDED.last_started_at,
           last_finished_at     = EXCLUDED.last_finished_at,
           last_duration_ms     = EXCLUDED.last_duration_ms,
           last_error           = EXCLUDED.last_error,
           last_success_at      = COALESCE(EXCLUDED.last_success_at, s.last_success_at),
           consecutive_failures = CASE WHEN p_status = 'failed' THEN s.consecutive_failures + 1 ELSE 0 END,
           runs_total           = s.runs_total + 1,
           failures_total       = s.failures_total + EXCLUDED.failures_total,
           updated_at           = EXCLUDED.updated_at;
END;
$$;

REVOKE ALL ON FUNCTION record_job_tick(TEXT, TEXT, TIMESTAMPTZ, TIMESTAMPTZ, INTEGER, TEXT) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION record_job_tick(TEXT, TEXT, TIMESTAMPTZ, TIMESTAMPTZ, INTEGER, TEXT) TO service_role;

-- ─── job_runs ───────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS job_runs (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    job_name      TEXT        NOT NULL,
    trigger       TEXT        NOT NULL CHECK (trigger IN ('schedule', 'manual')),
    status        TEXT        NOT NULL
                              CHECK (status IN ('pending', 'running', 'succeeded', 'failed', 'skipped_lock')),
    requested_by  TEXT,
    requested_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    started_at    TIMESTAMPTZ,
    finished_at   TIMESTAMPTZ,
    duration_ms   INTEGER,
    error         TEXT,
    CONSTRAINT job_runs_manual_has_requester CHECK ((trigger = 'manual') = (requested_by IS NOT NULL)),
    CONSTRAINT job_runs_scheduled_is_final
        CHECK (trigger = 'manual' OR status IN ('succeeded', 'failed', 'skipped_lock'))
);

-- At most one active manual run per job: a double click gets a unique violation (409).
CREATE UNIQUE INDEX IF NOT EXISTS job_runs_one_active_manual
    ON job_runs (job_name)
 WHERE trigger = 'manual' AND status IN ('pending', 'running');

-- Per-job history and cooldown checks.
CREATE INDEX IF NOT EXISTS job_runs_job_requested_idx ON job_runs (job_name, requested_at DESC);

-- Worker polling of manual requests.
CREATE INDEX IF NOT EXISTS job_runs_pending_manual_idx
    ON job_runs (requested_at)
 WHERE trigger = 'manual' AND status = 'pending';

-- Purge.
CREATE INDEX IF NOT EXISTS job_runs_requested_idx ON job_runs (requested_at);

ALTER TABLE job_runs ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON job_runs FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON job_runs TO service_role;

-- Fails abandoned manual runs, then claims the oldest pending one. Abandoned means 'running' since
-- before p_stale_before (dead worker: never re-run, a job is not assumed idempotent) or 'pending'
-- since before p_pending_before (no worker up): either would otherwise hold the one-active index
-- and block every later Run now. FOR UPDATE SKIP LOCKED makes two workers take different rows;
-- times come from the caller's clock.
CREATE OR REPLACE FUNCTION claim_job_run(
    p_now            TIMESTAMPTZ,
    p_stale_before   TIMESTAMPTZ,
    p_pending_before TIMESTAMPTZ
)
RETURNS SETOF job_runs
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE job_runs
       SET status      = 'failed',
           finished_at = p_now,
           error       = 'Worker stopped before the run finished'
     WHERE trigger = 'manual'
       AND status = 'running'
       AND started_at < p_stale_before;

    UPDATE job_runs
       SET status      = 'failed',
           finished_at = p_now,
           error       = 'No worker picked up the run'
     WHERE trigger = 'manual'
       AND status = 'pending'
       AND requested_at < p_pending_before;

    RETURN QUERY
    UPDATE job_runs AS r
       SET status     = 'running',
           started_at = p_now
     WHERE r.id = (
            SELECT id
              FROM job_runs
             WHERE trigger = 'manual' AND status = 'pending'
             ORDER BY requested_at
             LIMIT 1
               FOR UPDATE SKIP LOCKED
           )
    RETURNING r.*;
END;
$$;

REVOKE ALL ON FUNCTION claim_job_run(TIMESTAMPTZ, TIMESTAMPTZ, TIMESTAMPTZ) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION claim_job_run(TIMESTAMPTZ, TIMESTAMPTZ, TIMESTAMPTZ) TO service_role;

-- ─── Dashboard: KPIs ────────────────────────────────────────────────────────
-- Amounts are raw USDC (6 dp) as text. Series: 8 buckets of 3 h over the last 24 h (oldest
-- first), and 7 daily buckets for deployments. Report / ban history is time-derived.
-- `fees` sums MarketResolved.fee, the GROSS fee (leaderboard share + company share).

CREATE OR REPLACE FUNCTION admin_dashboard_kpis(p_now TIMESTAMPTZ)
RETURNS JSONB
LANGUAGE sql
STABLE
AS $$
    WITH
    win AS (
        SELECT p_now - INTERVAL '24 hours' AS d1,
               p_now - INTERVAL '48 hours' AS d2,
               p_now - INTERVAL '7 days'   AS w1,
               p_now - INTERVAL '14 days'  AS w2,
               p_now - INTERVAL '30 days'  AS m1,
               p_now - INTERVAL '60 days'  AS m2
    ),
    buckets AS (
        SELECT i, p_now - (8 - i) * INTERVAL '3 hours' AS b_start, p_now - (7 - i) * INTERVAL '3 hours' AS b_end
          FROM generate_series(0, 7) AS i
    ),
    days AS (
        SELECT i, p_now - (7 - i) * INTERVAL '1 day' AS b_start, p_now - (6 - i) * INTERVAL '1 day' AS b_end
          FROM generate_series(0, 6) AS i
    ),
    bets48 AS (
        SELECT block_timestamp, lower(user_address) AS wallet, stake_amount
          FROM bets, win
         WHERE block_timestamp >= win.d2 AND block_timestamp < p_now
    ),
    fees48 AS (
        SELECT e.block_timestamp, (e.payload->>'fee')::NUMERIC AS fee
          FROM market_events e, win
         WHERE e.event_name = 'MarketResolved'
           AND e.block_timestamp >= win.d2 AND e.block_timestamp < p_now
    ),
    pools AS (
        SELECT m.match_date, COALESCE(SUM(b.stake_amount), 0) AS pool
          FROM matches m
          JOIN win ON TRUE
          -- Indexers store addresses lowercased: the raw column keeps idx_bets_contract usable.
          LEFT JOIN bets b ON b.contract_address = lower(m.betting_contract_address)
         WHERE m.betting_contract_address IS NOT NULL
           AND m.match_date >= win.m2 AND m.match_date < p_now
         GROUP BY m.id, m.match_date
    )
    SELECT jsonb_build_object(
        'volume', jsonb_build_object(
            'current',  (SELECT COALESCE(SUM(stake_amount), 0)::TEXT FROM bets48, win WHERE block_timestamp >= win.d1),
            'previous', (SELECT COALESCE(SUM(stake_amount), 0)::TEXT FROM bets48, win WHERE block_timestamp < win.d1),
            'series',   (SELECT jsonb_agg(v ORDER BY i) FROM (
                            SELECT bk.i, COALESCE(SUM(b.stake_amount), 0)::TEXT AS v
                              FROM buckets bk LEFT JOIN bets48 b
                                ON b.block_timestamp >= bk.b_start AND b.block_timestamp < bk.b_end
                             GROUP BY bk.i) s)
        ),
        'bettors', jsonb_build_object(
            'current',  (SELECT COUNT(DISTINCT wallet) FROM bets48, win WHERE block_timestamp >= win.d1),
            'previous', (SELECT COUNT(DISTINCT wallet) FROM bets48, win WHERE block_timestamp < win.d1),
            'series',   (SELECT jsonb_agg(v ORDER BY i) FROM (
                            SELECT bk.i, COUNT(DISTINCT b.wallet) AS v
                              FROM buckets bk LEFT JOIN bets48 b
                                ON b.block_timestamp >= bk.b_start AND b.block_timestamp < bk.b_end
                             GROUP BY bk.i) s)
        ),
        'fees', jsonb_build_object(
            'current',  (SELECT COALESCE(SUM(fee), 0)::TEXT FROM fees48, win WHERE block_timestamp >= win.d1),
            'previous', (SELECT COALESCE(SUM(fee), 0)::TEXT FROM fees48, win WHERE block_timestamp < win.d1),
            'series',   (SELECT jsonb_agg(v ORDER BY i) FROM (
                            SELECT bk.i, COALESCE(SUM(f.fee), 0)::TEXT AS v
                              FROM buckets bk LEFT JOIN fees48 f
                                ON f.block_timestamp >= bk.b_start AND f.block_timestamp < bk.b_end
                             GROUP BY bk.i) s)
        ),
        'deployments', jsonb_build_object(
            'current',  (SELECT COUNT(*) FROM matches, win WHERE betting_opened_at >= win.w1 AND betting_opened_at < p_now),
            'previous', (SELECT COUNT(*) FROM matches, win WHERE betting_opened_at >= win.w2 AND betting_opened_at < win.w1),
            'series',   (SELECT jsonb_agg(v ORDER BY i) FROM (
                            SELECT d.i, COUNT(m.id) AS v
                              FROM days d LEFT JOIN matches m
                                ON m.betting_opened_at >= d.b_start AND m.betting_opened_at < d.b_end
                             GROUP BY d.i) s)
        ),
        'avgPool', jsonb_build_object(
            'current',  (SELECT COALESCE(ROUND(AVG(pool)), 0)::TEXT FROM pools, win WHERE match_date >= win.m1),
            'previous', (SELECT COALESCE(ROUND(AVG(pool)), 0)::TEXT FROM pools, win WHERE match_date < win.m1),
            'events',   (SELECT COUNT(*) FROM pools, win WHERE match_date >= win.m1)
        ),
        'openReports', jsonb_build_object(
            'current',      (SELECT COUNT(*) FROM reports WHERE status = 'open'),
            'highSeverity', (SELECT COUNT(*) FROM reports WHERE status = 'open' AND severity >= 4),
            'previous',     (SELECT COUNT(*) FROM reports r, win
                              WHERE r.created_at <= win.d1
                                AND (r.status = 'open' OR (r.reviewed_at IS NOT NULL AND r.reviewed_at > win.d1))),
            'series',       (SELECT jsonb_agg(v ORDER BY i) FROM (
                                SELECT bk.i, COUNT(r.id) AS v
                                  FROM buckets bk LEFT JOIN reports r
                                    ON r.created_at <= bk.b_end
                                   AND (r.status = 'open' OR (r.reviewed_at IS NOT NULL AND r.reviewed_at > bk.b_end))
                                 GROUP BY bk.i) s)
        ),
        'activeBans', jsonb_build_object(
            'current',   (SELECT COUNT(*) FROM bans WHERE status = 'active' AND (expires_at IS NULL OR expires_at > p_now)),
            'permanent', (SELECT COUNT(*) FROM bans WHERE status = 'active' AND expires_at IS NULL),
            'previous',  (SELECT COUNT(*) FROM bans b, win
                           WHERE b.starts_at <= win.d1
                             AND (b.expires_at IS NULL OR b.expires_at > win.d1)
                             AND (b.ended_at IS NULL OR b.ended_at > win.d1)),
            'series',    (SELECT jsonb_agg(v ORDER BY i) FROM (
                             SELECT bk.i, COUNT(b.id) AS v
                               FROM buckets bk LEFT JOIN bans b
                                 ON b.starts_at <= bk.b_end
                                AND (b.expires_at IS NULL OR b.expires_at > bk.b_end)
                                AND (b.ended_at IS NULL OR b.ended_at > bk.b_end)
                              GROUP BY bk.i) s)
        )
    );
$$;

REVOKE ALL ON FUNCTION admin_dashboard_kpis(TIMESTAMPTZ) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION admin_dashboard_kpis(TIMESTAMPTZ) TO service_role;

-- ─── Dashboard: market states of given contracts ────────────────────────────
-- From indexed events only (no RPC): type and line from MarketCreated, state from the latest
-- MarketStateChanged (0 = Inactive when none yet).

CREATE OR REPLACE FUNCTION admin_live_markets(p_contracts TEXT[])
RETURNS TABLE (
    contract_address TEXT,
    market_id        BIGINT,
    market_type      TEXT,
    line             INTEGER,
    state            INTEGER
)
LANGUAGE sql
STABLE
AS $$
    SELECT lower(c.contract_address),
           c.market_id,
           c.payload->>'marketType',
           (c.payload->>'line')::INTEGER,
           COALESCE((
               SELECT (s.payload->>'newState')::INTEGER
                 FROM market_events s
                WHERE lower(s.contract_address) = lower(c.contract_address)
                  AND s.market_id = c.market_id
                  AND s.event_name = 'MarketStateChanged'
                ORDER BY s.block_number DESC, s.log_index DESC
                LIMIT 1
           ), 0)
      FROM market_events c
     WHERE c.event_name = 'MarketCreated'
       AND lower(c.contract_address) = ANY (SELECT lower(x) FROM unnest(p_contracts) AS x)
     ORDER BY lower(c.contract_address), c.market_id;
$$;

REVOKE ALL ON FUNCTION admin_live_markets(TEXT[]) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION admin_live_markets(TEXT[]) TO service_role;

COMMIT;

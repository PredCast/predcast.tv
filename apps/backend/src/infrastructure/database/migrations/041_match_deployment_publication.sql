-- Migration 041 — Matches are deployed by hand from the admin, not by the sync.
--
-- (1) matches: the chain the betting contract lives on, when its markets opened, and whether
--     app users can see the match (published_at NOT NULL + a contract).
-- (2) RLS: anon / authenticated only read visible matches. Every permissive SELECT / ALL policy
--     is dropped first: permissive policies OR together, so a leftover USING (true) would keep
--     everything readable. The backend reads with the service role and is not filtered.
-- (3) match_admin_operations: queue of admin deploy / retry-setup / cancel-markets operations,
--     processed by a worker job. At most one active operation per match; claims are atomic.
--
-- Backfill: every match that already has a contract stays published (published_at = created_at).
-- betting_chain_id and betting_opened_at stay NULL on existing rows: the backend reads NULL as
-- the chain of the current NETWORK, and the app falls back to kickoff - 7 days for the opening.

BEGIN;

-- (1) matches -------------------------------------------------------------------------------

ALTER TABLE matches
    ADD COLUMN IF NOT EXISTS betting_chain_id  INTEGER,
    ADD COLUMN IF NOT EXISTS betting_opened_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS published_at      TIMESTAMPTZ;

UPDATE matches
   SET published_at = created_at
 WHERE betting_contract_address IS NOT NULL
   AND published_at IS NULL;

CREATE INDEX IF NOT EXISTS matches_visible_kickoff_idx
    ON matches (match_date)
 WHERE published_at IS NOT NULL AND betting_contract_address IS NOT NULL;

-- (2) RLS -----------------------------------------------------------------------------------

DO $$
DECLARE p record;
BEGIN
    FOR p IN
        SELECT policyname
          FROM pg_policies
         WHERE schemaname = 'public'
           AND tablename  = 'matches'
           AND permissive = 'PERMISSIVE'
           AND cmd IN ('SELECT', 'ALL')
    LOOP
        EXECUTE format('DROP POLICY %I ON public.matches', p.policyname);
    END LOOP;
END$$;

CREATE POLICY matches_anon_select ON matches
    FOR SELECT TO anon, authenticated
    USING (published_at IS NOT NULL AND betting_contract_address IS NOT NULL);

-- (3) admin operation queue ----------------------------------------------------------------

CREATE TABLE IF NOT EXISTS match_admin_operations (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    match_id      INTEGER     NOT NULL REFERENCES matches (api_football_id) ON DELETE CASCADE,
    kind          TEXT        NOT NULL CHECK (kind IN ('deploy', 'retry_setup', 'cancel_markets')),
    status        TEXT        NOT NULL DEFAULT 'pending'
                              CHECK (status IN ('pending', 'running', 'succeeded', 'failed')),
    chain_id      INTEGER     NOT NULL,
    -- Inputs (e.g. the cancellation reason).
    params        JSONB       NOT NULL DEFAULT '{}'::jsonb,
    -- Steps reached so far (deploy tx hash, contract address, seeding). Written before waiting on
    -- each receipt so a resumed run never sends a transaction twice.
    progress      JSONB       NOT NULL DEFAULT '{}'::jsonb,
    error         TEXT,
    requested_by  TEXT        NOT NULL,
    attempts      INTEGER     NOT NULL DEFAULT 0,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
    started_at    TIMESTAMPTZ,
    heartbeat_at  TIMESTAMPTZ,
    finished_at   TIMESTAMPTZ
);

-- Double click / two admins: a second active operation on the same match fails on insert.
CREATE UNIQUE INDEX IF NOT EXISTS match_admin_operations_one_active
    ON match_admin_operations (match_id)
 WHERE status IN ('pending', 'running');

-- Worker polling.
CREATE INDEX IF NOT EXISTS match_admin_operations_status_created_idx
    ON match_admin_operations (status, created_at);

-- Latest operation per match (admin list).
CREATE INDEX IF NOT EXISTS match_admin_operations_match_created_idx
    ON match_admin_operations (match_id, created_at DESC);

ALTER TABLE match_admin_operations ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON match_admin_operations FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON match_admin_operations TO service_role;

-- Claims the oldest pending operation, or a running one whose heartbeat is older than
-- p_stale_before (its worker died: the run resumes from `progress`). FOR UPDATE SKIP LOCKED makes
-- two concurrent workers take different rows; times come from the caller's clock.
CREATE OR REPLACE FUNCTION claim_match_admin_operation(p_now TIMESTAMPTZ, p_stale_before TIMESTAMPTZ)
RETURNS SETOF match_admin_operations
LANGUAGE sql
AS $$
    UPDATE match_admin_operations AS op
       SET status       = 'running',
           started_at   = COALESCE(op.started_at, p_now),
           heartbeat_at = p_now,
           attempts     = op.attempts + 1
     WHERE op.id = (
            SELECT id
              FROM match_admin_operations
             WHERE status = 'pending'
                OR (status = 'running' AND heartbeat_at < p_stale_before)
             ORDER BY created_at
             LIMIT 1
               FOR UPDATE SKIP LOCKED
           )
    RETURNING op.*;
$$;

REVOKE ALL ON FUNCTION claim_match_admin_operation(TIMESTAMPTZ, TIMESTAMPTZ) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION claim_match_admin_operation(TIMESTAMPTZ, TIMESTAMPTZ) TO service_role;

COMMIT;

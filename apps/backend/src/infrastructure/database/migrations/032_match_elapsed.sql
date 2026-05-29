-- Migration 032 — In-game minute snapshot from API-Football.
--
-- Persisted as SMALLINT (0-127 is plenty: max realistic value is ~120 for
-- ET + injury time). NULLABLE because pre-match rows never receive a value,
-- and because legacy rows pre-migration have no source data.
--
-- IMPORTANT: writers MUST NEVER overwrite a non-null value with NULL. The
-- API returns elapsed = null during HT pauses and after FT — preserving the
-- previous minute lets the UI render a coherent counter instead of flashing
-- back to 0 during the break. Enforcement lives in SyncLiveMatchesUseCase
-- (cf. Match.setElapsed, which silently no-ops on null input).
--
-- Range check is permissive: 200 covers any realistic max. We don't reject
-- 0 because API-Football emits elapsed=0 at the exact kick-off moment.

BEGIN;

ALTER TABLE matches
    ADD COLUMN IF NOT EXISTS elapsed_minutes SMALLINT;

ALTER TABLE matches
    ADD CONSTRAINT matches_elapsed_minutes_check
        CHECK (elapsed_minutes IS NULL OR (elapsed_minutes >= 0 AND elapsed_minutes <= 200));

COMMIT;

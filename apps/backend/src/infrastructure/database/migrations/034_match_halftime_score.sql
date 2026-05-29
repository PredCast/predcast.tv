-- Migration 034 — Persist halftime score (home/away goals at 45').
--
-- Required to resolve the HALFTIME market early (at HT/2H), not at FT. The
-- SyncLiveMatchesUseCase writes these when API-Football reports them, and
-- they're forwarded to `resolveByScore.htHomeGoals/htAwayGoals` on the
-- contract.
--
-- Both columns NULLABLE: pre-match rows have no value, and the API only
-- emits the field once kickoff has passed. Writers MUST be monotone (never
-- overwrite a non-null value with null) so the value survives the HT pause
-- when API-Football clears the field. Enforcement is in
-- Match.setHalftimeScore (silently no-ops on null input), mirroring the
-- pattern already used for `elapsed_minutes` in migration 032.
--
-- CHECK bounds [0, 50] are intentionally permissive: realistic HT max is
-- ~10, but the upstream occasionally surfaces post-extra-time values in
-- non-football modes. 50 is a safety bound, not a domain rule.
--
-- `ADD CONSTRAINT` has no `IF NOT EXISTS` in Postgres ≤16, so we wrap the
-- constraint creation in a DO block that swallows `duplicate_object` —
-- makes the migration idempotent under partial re-runs.

BEGIN;

ALTER TABLE matches
    ADD COLUMN IF NOT EXISTS ht_home_score SMALLINT,
    ADD COLUMN IF NOT EXISTS ht_away_score SMALLINT;

DO $$
BEGIN
    ALTER TABLE matches
        ADD CONSTRAINT matches_ht_home_score_check
            CHECK (ht_home_score IS NULL OR (ht_home_score >= 0 AND ht_home_score <= 50));
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$
BEGIN
    ALTER TABLE matches
        ADD CONSTRAINT matches_ht_away_score_check
            CHECK (ht_away_score IS NULL OR (ht_away_score >= 0 AND ht_away_score <= 50));
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

COMMIT;

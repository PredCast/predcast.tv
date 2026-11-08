-- Migration 040 — When each phase of a match actually started.
--
-- first/second_half_started_at come from API-Football `fixture.periods`
-- (exact, provider-side). halftime_started_at has no upstream field: it is
-- stamped by the sync when the status first turns `HT` (±1 poll interval).
-- Used to place the kick-off / HT / 2nd-half markers on the fan-token charts.
--
-- NULLABLE: pre-match rows, legacy rows, and matches whose HT transition was
-- never observed. Writers are monotone (never overwrite a value with NULL),
-- enforced by Match.recordPhaseTimes.

BEGIN;

ALTER TABLE matches
    ADD COLUMN IF NOT EXISTS first_half_started_at  TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS halftime_started_at    TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS second_half_started_at TIMESTAMPTZ;

COMMIT;

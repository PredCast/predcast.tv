-- Migration 033 — Expose api_football_id to Supabase Realtime UPDATE events.
--
-- Without this, REPLICA IDENTITY DEFAULT publishes only the PK (matches.id,
-- a UUID), so a frontend subscription filtered on `api_football_id=eq.X`
-- never receives events — the column isn't in the WAL row.
--
-- USING INDEX picks the existing unique index `matches_api_football_id_key`
-- (auto-created by the UNIQUE constraint in migration 000). This exposes
-- both the PK *and* api_football_id to subscribers without doubling the WAL
-- size like REPLICA IDENTITY FULL would.
--
-- Why not FULL: matches has ~15 columns and high-frequency UPDATEs during
-- live windows (1 UPDATE per match per 30s tick). FULL would 2-3x the WAL
-- bytes for zero gain — we don't diff old/new on the client, we only
-- invalidate the React Query cache key on any UPDATE.

BEGIN;

ALTER TABLE matches REPLICA IDENTITY USING INDEX matches_api_football_id_key;

COMMIT;

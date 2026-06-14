-- 039_rls_lockdown.sql
-- RLS / grants remediation. Closes the blanket anon/authenticated CRUD opened
-- by migration 027 (GRANT ... ON ALL TABLES TO anon, authenticated + ALTER
-- DEFAULT PRIVILEGES). Two mechanisms, in order:
--   (1) REVOKE the dangerous write grants + reset default privileges so future
--       tables no longer auto-grant write to anon.
--   (2) ENABLE RLS on every rls-off table with least-privilege policies.
-- service_role bypasses RLS, so the backend / indexers are unaffected.
--
-- Realtime: bets, market_events, matches, live_streams, chat_messages,
-- chat_connected_users are subscribed by the anon client and KEEP a SELECT
-- policy. Enabling RLS on a published table WITHOUT a SELECT policy silently
-- breaks Realtime for it (CHANNEL_ERROR only).
--
-- Chat writes (send / join / leave) are routed through the backend API
-- (service_role); the frontend no longer writes chat tables with the anon key.
--
-- Idempotent: DROP POLICY IF EXISTS before CREATE, IF EXISTS guards. Re-runnable.

BEGIN;

-- =====================================================================
-- (1) Revoke the blanket write grants from 027 + reset default privileges.
-- SELECT is left in place here and removed per-table below for the locked set,
-- so we never yank SELECT from the six realtime tables before re-granting it.
-- =====================================================================
REVOKE INSERT, UPDATE, DELETE ON ALL TABLES    IN SCHEMA public FROM anon, authenticated;
REVOKE USAGE, SELECT, UPDATE  ON ALL SEQUENCES IN SCHEMA public FROM anon, authenticated;

-- Reset the 027 default privileges (must mirror its GRANT signatures to cancel).
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    REVOKE SELECT, INSERT, UPDATE, DELETE ON TABLES FROM anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    REVOKE USAGE, SELECT, UPDATE ON SEQUENCES FROM anon, authenticated;

-- =====================================================================
-- (2) Group 1 — client reads (realtime / select): RLS on, SELECT-only for anon.
-- =====================================================================
ALTER TABLE bets ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS bets_anon_select ON bets;
CREATE POLICY bets_anon_select ON bets FOR SELECT TO anon, authenticated USING (true);
GRANT SELECT ON bets TO anon, authenticated;

ALTER TABLE market_events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS market_events_anon_select ON market_events;
CREATE POLICY market_events_anon_select ON market_events FOR SELECT TO anon, authenticated USING (true);
GRANT SELECT ON market_events TO anon, authenticated;

ALTER TABLE live_streams ENABLE ROW LEVEL SECURITY;            -- was RLS off, no policy
DROP POLICY IF EXISTS live_streams_anon_select ON live_streams;
CREATE POLICY live_streams_anon_select ON live_streams FOR SELECT TO anon, authenticated USING (true);
GRANT SELECT ON live_streams TO anon, authenticated;

-- matches: drop the permissive FOR ALL (write) policy + the read, recreate SELECT only.
DROP POLICY IF EXISTS "Allow insert/update access to matches" ON matches;
DROP POLICY IF EXISTS "Allow read access to matches" ON matches;
CREATE POLICY matches_anon_select ON matches FOR SELECT TO anon, authenticated USING (true);
GRANT SELECT ON matches TO anon, authenticated;

-- chat_messages: drop insert + update (sends go through the backend), keep read.
DROP POLICY IF EXISTS "Allow insert access to chat messages" ON chat_messages;
DROP POLICY IF EXISTS "Allow update access to chat messages" ON chat_messages;
DROP POLICY IF EXISTS "Allow read access to chat messages" ON chat_messages;
CREATE POLICY chat_messages_anon_select ON chat_messages FOR SELECT TO anon, authenticated USING (true);
GRANT SELECT ON chat_messages TO anon, authenticated;

-- chat_connected_users: drop write (join/leave go through the backend), keep read.
DROP POLICY IF EXISTS "Allow insert/update access to connected users" ON chat_connected_users;
DROP POLICY IF EXISTS "Allow read access to connected users" ON chat_connected_users;
CREATE POLICY chat_connected_users_anon_select ON chat_connected_users FOR SELECT TO anon, authenticated USING (true);
GRANT SELECT ON chat_connected_users TO anon, authenticated;

-- =====================================================================
-- (3) Group 2 — service-role only. RLS on, revoke anon/authenticated entirely.
-- =====================================================================
-- rls-off tables with no policies (anon read via the raw 027 grant only).
DO $$
DECLARE t text;
BEGIN
    FOREACH t IN ARRAY ARRAY[
        'users','leaderboard_scores','leaderboard_cycle_scores','leaderboard_epochs',
        'leaderboard_claims','indexer_checkpoints','wiring_alerts','viewer_sessions','predictions'
    ] LOOP
        IF EXISTS (SELECT 1 FROM information_schema.tables
                   WHERE table_schema='public' AND table_name=t) THEN
            EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);
            EXECUTE format('REVOKE ALL ON %I FROM anon, authenticated', t);
        END IF;
    END LOOP;
END$$;

-- rls-on tables that carried permissive public policies (000/003/015): drop + revoke.
DROP POLICY IF EXISTS "Anyone can view donations"   ON donations;
DROP POLICY IF EXISTS "Anyone can insert donations" ON donations;
REVOKE ALL ON donations FROM anon, authenticated, public;

DROP POLICY IF EXISTS "Anyone can view subscriptions"   ON subscriptions;
DROP POLICY IF EXISTS "Anyone can insert subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Anyone can update subscriptions" ON subscriptions;
REVOKE ALL ON subscriptions FROM anon, authenticated, public;

DROP POLICY IF EXISTS "Anyone can view stream wallets"   ON stream_wallets;
DROP POLICY IF EXISTS "Anyone can insert stream wallets" ON stream_wallets;
REVOKE ALL ON stream_wallets FROM anon, authenticated, public;

DROP POLICY IF EXISTS "Anyone can view follows" ON streamer_follows;
DROP POLICY IF EXISTS "Anyone can follow"       ON streamer_follows;
DROP POLICY IF EXISTS "Anyone can unfollow"     ON streamer_follows;
REVOKE ALL ON streamer_follows FROM anon, authenticated, public;

-- token_prices served by the backend (/api/prices), no direct browser read.
DROP POLICY IF EXISTS "token_prices read" ON token_prices;
REVOKE ALL ON token_prices FROM anon, authenticated, public;

-- =====================================================================
-- (4) Views — granted to anon by 027 and run with the owner's rights by
-- default, so they BYPASS the base-table RLS above. Revoke anon/authenticated.
-- =====================================================================
DO $$
DECLARE v text;
BEGIN
    FOREACH v IN ARRAY ARRAY[
        'active_matches','match_stats','pending_settlement_predictions','user_prediction_stats'
    ] LOOP
        IF EXISTS (SELECT 1 FROM information_schema.views
                   WHERE table_schema='public' AND table_name=v) THEN
            EXECUTE format('REVOKE ALL ON %I FROM anon, authenticated', v);
        END IF;
    END LOOP;
END$$;

-- =====================================================================
-- (5) service_role keeps full sequence access (BIGSERIAL inserts).
-- =====================================================================
GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public TO service_role;

COMMIT;

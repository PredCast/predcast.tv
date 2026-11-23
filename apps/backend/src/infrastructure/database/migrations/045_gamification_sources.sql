-- 045 — Gamification XP sources (step 04): authenticated watch minutes and the scan indexes of the
-- chain processor. Rules stay in packages/domain/src/gamification; the function only makes one
-- watch minute atomic (unique per account and minute, daily counters, progress) under the same
-- per-account lock as gamification_credit.

BEGIN;

-- One counted watch minute. A second tab or match in the same minute is a no-op (PK). Returns the
-- daily counters so the caller credits 1 XP per 10 minutes; `watch_minutes` progress is capped at
-- p_progress_cap per Paris day and a league joins `leagues` when its daily counter reaches
-- p_league_minutes.
CREATE OR REPLACE FUNCTION gamification_record_watch_minute(
    p_account_id      UUID,
    p_minute          TIMESTAMPTZ,
    p_day             DATE,
    p_match_id        INTEGER,
    p_stream_id       UUID,
    p_league_id       INTEGER,
    p_progress_cap    INTEGER,
    p_league_minutes  INTEGER
)
RETURNS TABLE (inserted BOOLEAN, minutes_today INTEGER, league_minutes_today INTEGER,
               total_watch_minutes BIGINT, progress_moved BOOLEAN, league_added BOOLEAN)
LANGUAGE plpgsql
AS $$
DECLARE
    v_minutes INTEGER;
    v_league  INTEGER;
    v_moved   BOOLEAN := false;
    v_added   BOOLEAN := false;
    v_total   BIGINT;
BEGIN
    INSERT INTO gamification_profiles (account_id) VALUES (p_account_id) ON CONFLICT DO NOTHING;
    PERFORM 1 FROM gamification_profiles g WHERE g.account_id = p_account_id FOR UPDATE;

    INSERT INTO gamification_watch_minutes (account_id, minute, match_id, stream_id, league_id)
    VALUES (p_account_id, p_minute, p_match_id, p_stream_id, p_league_id)
    ON CONFLICT (account_id, minute) DO NOTHING;
    IF NOT FOUND THEN
        SELECT COALESCE(MAX(c.value), 0) INTO v_minutes FROM gamification_daily_counters c
         WHERE c.account_id = p_account_id AND c.day = p_day AND c.bucket = 'minutes:watch';
        RETURN QUERY SELECT false, v_minutes, NULL::INTEGER, NULL::BIGINT, false, false;
        RETURN;
    END IF;

    INSERT INTO gamification_daily_counters AS c (account_id, day, bucket, value)
    VALUES (p_account_id, p_day, 'minutes:watch', 1)
    ON CONFLICT (account_id, day, bucket) DO UPDATE SET value = c.value + 1
    RETURNING c.value INTO v_minutes;

    IF p_league_id IS NOT NULL THEN
        INSERT INTO gamification_daily_counters AS c (account_id, day, bucket, value)
        VALUES (p_account_id, p_day, 'minutes:league:' || p_league_id, 1)
        ON CONFLICT (account_id, day, bucket) DO UPDATE SET value = c.value + 1
        RETURNING c.value INTO v_league;
        IF v_league = p_league_minutes THEN
            INSERT INTO gamification_progress (account_id, metric) VALUES (p_account_id, 'leagues') ON CONFLICT DO NOTHING;
            UPDATE gamification_progress pr
               SET items = array_append(pr.items, p_league_id::TEXT), value = pr.value + 1, updated_at = now()
             WHERE pr.account_id = p_account_id AND pr.metric = 'leagues'
               AND NOT (p_league_id::TEXT = ANY (pr.items));
            v_added := FOUND;
        END IF;
    END IF;

    INSERT INTO gamification_daily_counters (account_id, day, bucket)
    VALUES (p_account_id, p_day, 'progress:watch_minutes') ON CONFLICT DO NOTHING;
    UPDATE gamification_daily_counters c SET value = c.value + 1
     WHERE c.account_id = p_account_id AND c.day = p_day AND c.bucket = 'progress:watch_minutes'
       AND c.value < p_progress_cap;
    v_moved := FOUND;

    INSERT INTO gamification_progress (account_id, metric) VALUES (p_account_id, 'watch_minutes') ON CONFLICT DO NOTHING;
    IF v_moved THEN
        UPDATE gamification_progress pr SET value = pr.value + 1, updated_at = now()
         WHERE pr.account_id = p_account_id AND pr.metric = 'watch_minutes'
        RETURNING pr.value INTO v_total;
    ELSE
        SELECT pr.value INTO v_total FROM gamification_progress pr
         WHERE pr.account_id = p_account_id AND pr.metric = 'watch_minutes';
    END IF;

    RETURN QUERY SELECT true, v_minutes, v_league, v_total, v_moved, v_added;
END;
$$;

REVOKE ALL ON FUNCTION gamification_record_watch_minute(UUID, TIMESTAMPTZ, DATE, INTEGER, UUID, INTEGER, INTEGER, INTEGER) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION gamification_record_watch_minute(UUID, TIMESTAMPTZ, DATE, INTEGER, UUID, INTEGER, INTEGER, INTEGER) TO service_role;

-- ─── Scan indexes of the chain processor and the purge ───────────────────────

CREATE INDEX IF NOT EXISTS idx_market_events_settlements
    ON market_events (block_number, log_index) WHERE event_name IN ('MarketResolved', 'MarketCancelled');
CREATE INDEX IF NOT EXISTS idx_subscriptions_created_at ON subscriptions (created_at);
CREATE INDEX IF NOT EXISTS idx_chat_messages_removed_at ON chat_messages (removed_at) WHERE removed_at IS NOT NULL;
-- Last credited chat row of an account (duplicate and interval checks).
CREATE INDEX IF NOT EXISTS idx_gami_ledger_account_source ON gamification_ledger (account_id, source, id DESC);
CREATE INDEX IF NOT EXISTS idx_gami_notif_seen ON gamification_notifications (seen_at) WHERE seen_at IS NOT NULL;

COMMIT;

-- PostgREST caches the schema: expose the new function to supabase.rpc() right away.
NOTIFY pgrst, 'reload schema';

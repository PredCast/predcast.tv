-- 047 — Gamification streamer sources (step 05): counted stream minutes and `stop_stream`
-- moderation. Rules stay in packages/domain/src/gamification; the functions only make one stream
-- minute and one moderation atomic under the same per-account lock as gamification_credit
-- (profile row first, then the session row).

BEGIN;

-- Stream minutes that moved the `stream_minutes` progress (removed again by `stop_stream`), and
-- the time the minutes of an ended session were all processed (the session leaves the job's scan).
ALTER TABLE gamification_stream_sessions
    ADD COLUMN IF NOT EXISTS progress_minutes   INTEGER     NOT NULL DEFAULT 0 CHECK (progress_minutes >= 0),
    ADD COLUMN IF NOT EXISTS minutes_settled_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_gami_sessions_unsettled
    ON gamification_stream_sessions (went_live_at) WHERE minutes_settled_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_report_actions_stop_stream
    ON report_actions (triggered_at) WHERE kind = 'stop_stream' AND affected_stream_id IS NOT NULL;

-- One counted stream minute. Refused on a moderated session; a replayed minute is a no-op (PK).
-- `counted_minutes` is the rank of the minute in its session, so a replay retries the same XP
-- tranche. `stream_minutes` progress is capped at p_progress_cap per Paris day.
CREATE OR REPLACE FUNCTION gamification_record_stream_minute(
    p_stream_id        UUID,
    p_minute           TIMESTAMPTZ,
    p_day              DATE,
    p_viewer_accounts  SMALLINT,
    p_exempt           BOOLEAN,
    p_progress_cap     INTEGER
)
RETURNS TABLE (inserted BOOLEAN, counted_minutes INTEGER, progress_moved BOOLEAN, total_stream_minutes BIGINT)
LANGUAGE plpgsql
AS $$
DECLARE
    v_account   UUID;
    v_moderated TIMESTAMPTZ;
    v_rank      INTEGER;
    v_moved     BOOLEAN := false;
    v_total     BIGINT;
BEGIN
    SELECT s.account_id INTO v_account FROM gamification_stream_sessions s WHERE s.stream_id = p_stream_id;
    IF NOT FOUND OR v_account IS NULL THEN
        RAISE EXCEPTION 'stream session % missing or without account', p_stream_id;
    END IF;

    INSERT INTO gamification_profiles (account_id) VALUES (v_account) ON CONFLICT DO NOTHING;
    PERFORM 1 FROM gamification_profiles g WHERE g.account_id = v_account FOR UPDATE;
    SELECT s.moderated_at INTO v_moderated FROM gamification_stream_sessions s
     WHERE s.stream_id = p_stream_id FOR UPDATE;
    IF v_moderated IS NOT NULL THEN
        RETURN QUERY SELECT false, 0, false, NULL::BIGINT;
        RETURN;
    END IF;

    INSERT INTO gamification_stream_minutes (stream_id, minute, viewer_accounts, exempt)
    VALUES (p_stream_id, p_minute, p_viewer_accounts, p_exempt)
    ON CONFLICT (stream_id, minute) DO NOTHING;
    IF NOT FOUND THEN
        SELECT count(*)::INTEGER INTO v_rank FROM gamification_stream_minutes m
         WHERE m.stream_id = p_stream_id AND m.minute <= p_minute;
        RETURN QUERY SELECT false, v_rank, false, NULL::BIGINT;
        RETURN;
    END IF;

    SELECT count(*)::INTEGER INTO v_rank FROM gamification_stream_minutes m
     WHERE m.stream_id = p_stream_id AND m.minute <= p_minute;

    INSERT INTO gamification_daily_counters (account_id, day, bucket)
    VALUES (v_account, p_day, 'progress:stream_minutes') ON CONFLICT DO NOTHING;
    UPDATE gamification_daily_counters c SET value = c.value + 1
     WHERE c.account_id = v_account AND c.day = p_day AND c.bucket = 'progress:stream_minutes'
       AND c.value < p_progress_cap;
    v_moved := FOUND;

    UPDATE gamification_stream_sessions s
       SET counted_minutes = s.counted_minutes + 1,
           progress_minutes = s.progress_minutes + CASE WHEN v_moved THEN 1 ELSE 0 END
     WHERE s.stream_id = p_stream_id;

    INSERT INTO gamification_progress (account_id, metric) VALUES (v_account, 'stream_minutes') ON CONFLICT DO NOTHING;
    IF v_moved THEN
        UPDATE gamification_progress pr SET value = pr.value + 1, updated_at = now()
         WHERE pr.account_id = v_account AND pr.metric = 'stream_minutes'
        RETURNING pr.value INTO v_total;
    ELSE
        SELECT pr.value INTO v_total FROM gamification_progress pr
         WHERE pr.account_id = v_account AND pr.metric = 'stream_minutes';
    END IF;

    RETURN QUERY SELECT true, v_rank, v_moved, v_total;
END;
$$;

-- `stop_stream`: sets moderated_at once and removes the session's minutes from `stream_minutes`.
-- The `stream_time` ledger rows are reversed by the caller (gamification_reverse).
CREATE OR REPLACE FUNCTION gamification_moderate_stream_session(p_stream_id UUID, p_at TIMESTAMPTZ)
RETURNS TABLE (moderated BOOLEAN, minutes_removed INTEGER)
LANGUAGE plpgsql
AS $$
DECLARE
    v_account UUID;
    v_row     gamification_stream_sessions%ROWTYPE;
BEGIN
    SELECT s.account_id INTO v_account FROM gamification_stream_sessions s WHERE s.stream_id = p_stream_id;
    IF NOT FOUND THEN RETURN QUERY SELECT false, 0; RETURN; END IF;
    IF v_account IS NOT NULL THEN
        PERFORM 1 FROM gamification_profiles g WHERE g.account_id = v_account FOR UPDATE;
    END IF;
    SELECT * INTO v_row FROM gamification_stream_sessions s WHERE s.stream_id = p_stream_id FOR UPDATE;
    IF v_row.moderated_at IS NOT NULL THEN RETURN QUERY SELECT false, 0; RETURN; END IF;

    UPDATE gamification_stream_sessions s SET moderated_at = p_at WHERE s.stream_id = p_stream_id;
    IF v_account IS NOT NULL AND v_row.progress_minutes > 0 THEN
        UPDATE gamification_progress pr
           SET value = GREATEST(pr.value - v_row.progress_minutes, 0), updated_at = now()
         WHERE pr.account_id = v_account AND pr.metric = 'stream_minutes';
    END IF;
    RETURN QUERY SELECT true, v_row.progress_minutes;
END;
$$;

REVOKE ALL ON FUNCTION gamification_record_stream_minute(UUID, TIMESTAMPTZ, DATE, SMALLINT, BOOLEAN, INTEGER) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_moderate_stream_session(UUID, TIMESTAMPTZ) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION gamification_record_stream_minute(UUID, TIMESTAMPTZ, DATE, SMALLINT, BOOLEAN, INTEGER) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_moderate_stream_session(UUID, TIMESTAMPTZ) TO service_role;

COMMIT;

-- PostgREST caches the schema: expose the new functions to supabase.rpc() right away.
NOTIFY pgrst, 'reload schema';

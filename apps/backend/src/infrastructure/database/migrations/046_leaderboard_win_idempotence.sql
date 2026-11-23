-- 046 — Idempotent `WinRecorded` indexing (D6).
--
-- The indexer used to add each event's `delta` to the cycle and lifetime scores: a rewound or
-- re-scanned range counted the same events twice. `WinRecorded.newEpochScore` is the on-chain
-- epoch score after the event, so the cycle score is now SET from the latest event seen (chain
-- position kept on the row) and the lifetime score is recomputed as the sum of the cycle scores.
-- Replaying any range, in any order, converges to the on-chain values; replaying from the
-- LeaderboardRewards deploy block also repairs rows inflated by past double counts.
-- The increment_* functions stay for the code still running during the rollout.

BEGIN;

ALTER TABLE leaderboard_cycle_scores
    ADD COLUMN IF NOT EXISTS last_block     BIGINT,
    ADD COLUMN IF NOT EXISTS last_log_index INTEGER;

CREATE INDEX IF NOT EXISTS idx_leaderboard_cycle_scores_user
    ON leaderboard_cycle_scores (user_address);

-- Returns true when the event moved the cycle score (false: same or older chain position).
CREATE OR REPLACE FUNCTION record_leaderboard_win(
    p_cycle_id        BIGINT,
    p_user_address    TEXT,
    p_new_epoch_score NUMERIC,
    p_block           BIGINT,
    p_log_index       INTEGER
)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
DECLARE
    v_applied BOOLEAN;
BEGIN
    INSERT INTO leaderboard_cycle_scores AS s
           (cycle_id, user_address, score, updated_at, last_block, last_log_index)
    VALUES (p_cycle_id, p_user_address, p_new_epoch_score, NOW(), p_block, p_log_index)
    ON CONFLICT (cycle_id, user_address) DO UPDATE
       SET score = EXCLUDED.score,
           last_block = EXCLUDED.last_block,
           last_log_index = EXCLUDED.last_log_index,
           updated_at = NOW()
     WHERE s.last_block IS NULL
        OR (EXCLUDED.last_block, EXCLUDED.last_log_index) > (s.last_block, s.last_log_index);
    v_applied := FOUND;

    INSERT INTO leaderboard_scores AS l (user_address, total_score, updated_at)
    SELECT p_user_address, COALESCE(SUM(c.score), 0), NOW()
      FROM leaderboard_cycle_scores c
     WHERE c.user_address = p_user_address
    ON CONFLICT (user_address) DO UPDATE
       SET total_score = EXCLUDED.total_score,
           updated_at = NOW()
     WHERE l.total_score IS DISTINCT FROM EXCLUDED.total_score;

    RETURN v_applied;
END;
$$;

REVOKE ALL ON FUNCTION record_leaderboard_win(BIGINT, TEXT, NUMERIC, BIGINT, INTEGER) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION record_leaderboard_win(BIGINT, TEXT, NUMERIC, BIGINT, INTEGER) TO service_role;

COMMIT;

-- PostgREST caches the schema: expose the new function to supabase.rpc() right away.
NOTIFY pgrst, 'reload schema';

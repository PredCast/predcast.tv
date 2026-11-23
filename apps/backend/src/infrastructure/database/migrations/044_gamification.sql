-- 044 — Off-chain gamification: XP ledger, levels, daily streak, achievements, double XP.
--
-- Rules live in packages/domain/src/gamification (catalog + pure policies). The database only
-- enforces idempotency (ref_key), per-account serialisation, daily caps, the frozen double-XP
-- perimeter and the append-only ledger. Invariant: xp_total = SUM(ledger.xp) per account
-- (negative rows are clamped so the total never goes below 0). No table joins the realtime
-- publication; everything goes through the API with the service role.

BEGIN;

-- ─── Double XP events (created before the ledger, which references them) ──────

CREATE TABLE IF NOT EXISTS gamification_double_xp_events (
    id                   UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    name                 TEXT         NOT NULL CHECK (char_length(name) BETWEEN 3 AND 80),
    -- (1, 2] by steps of 0.25 (doubleXpPolicy).
    multiplier           NUMERIC(3,2) NOT NULL CHECK (multiplier > 1 AND multiplier <= 2 AND (multiplier * 4) = floor(multiplier * 4)),
    -- Frozen legal perimeter: widening it to bet sources requires a migration on purpose.
    sources              TEXT[]       NOT NULL
                         CHECK (cardinality(sources) >= 1
                                AND sources <@ ARRAY['check_in','watch','chat_message','stream_time']::TEXT[]),
    starts_at            TIMESTAMPTZ  NOT NULL,
    ends_at              TIMESTAMPTZ  NOT NULL,
    created_by_wallet    TEXT         NOT NULL CHECK (created_by_wallet = lower(created_by_wallet)),
    created_at           TIMESTAMPTZ  NOT NULL DEFAULT now(),
    cancelled_at         TIMESTAMPTZ,
    cancelled_by_wallet  TEXT         CHECK (cancelled_by_wallet = lower(cancelled_by_wallet)),
    CONSTRAINT dxp_window CHECK (ends_at > starts_at AND ends_at - starts_at <= INTERVAL '72 hours'),
    -- Range types have native GiST support: no btree_gist needed.
    CONSTRAINT dxp_no_overlap EXCLUDE USING gist (tstzrange(starts_at, ends_at, '[)') WITH &&)
        WHERE (cancelled_at IS NULL)
);
CREATE INDEX IF NOT EXISTS idx_gami_dxp_starts ON gamification_double_xp_events (starts_at);

-- ─── Profiles ────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_profiles (
    account_id         UUID        PRIMARY KEY REFERENCES accounts(id),
    xp_total           BIGINT      NOT NULL DEFAULT 0 CHECK (xp_total >= 0),
    level              SMALLINT    NOT NULL DEFAULT 1 CHECK (level BETWEEN 1 AND 60),
    -- Highest level ever reached: titles, frames and showcase slots follow it (§3.1 rule 8).
    level_peak         SMALLINT    NOT NULL DEFAULT 1 CHECK (level_peak BETWEEN 1 AND 60),
    streak_current     INTEGER     NOT NULL DEFAULT 0 CHECK (streak_current >= 0),
    streak_best        INTEGER     NOT NULL DEFAULT 0 CHECK (streak_best >= streak_current),
    streak_last_day    DATE,
    streak_freezes     SMALLINT    NOT NULL DEFAULT 0 CHECK (streak_freezes BETWEEN 0 AND 2),
    selected_title_id  TEXT,
    selected_frame_id  TEXT,
    showcase           TEXT[]      NOT NULL DEFAULT '{}' CHECK (cardinality(showcase) <= 3),
    suspended_at       TIMESTAMPTZ,
    suspended_reason   TEXT,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT gami_profiles_peak_above_level CHECK (level_peak >= level)
);

-- ─── Ledger (append-only) ────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_ledger (
    id                  BIGSERIAL    PRIMARY KEY,
    account_id          UUID         NOT NULL REFERENCES accounts(id),
    -- Union TS in packages/domain (GamificationSource) — no SQL enum.
    source              TEXT         NOT NULL,
    ref_key             TEXT         NOT NULL UNIQUE,
    day                 DATE         NOT NULL,           -- Europe/Paris day of occurred_at
    occurred_at         TIMESTAMPTZ  NOT NULL,
    requested_xp        INTEGER      NOT NULL,           -- before the daily cap
    base_xp             INTEGER      NOT NULL,           -- after the cap, before the multiplier
    multiplier          NUMERIC(3,2) NOT NULL DEFAULT 1.00,
    xp                  INTEGER      NOT NULL,           -- credited; negative on reversals and adjustments
    double_xp_event_id  UUID         REFERENCES gamification_double_xp_events(id),
    reverses_id         BIGINT       REFERENCES gamification_ledger(id),
    reason              TEXT,        -- LedgerReason (packages/domain)
    metadata            JSONB        NOT NULL DEFAULT '{}'::jsonb,
    created_at          TIMESTAMPTZ  NOT NULL DEFAULT now(),
    -- The domain computes `day` with parisDayOf; a mismatch means a caller bug. Reversals keep the original day.
    CONSTRAINT gami_ledger_paris_day CHECK (reverses_id IS NOT NULL OR day = (occurred_at AT TIME ZONE 'Europe/Paris')::date)
);
CREATE INDEX IF NOT EXISTS idx_gami_ledger_account     ON gamification_ledger (account_id, id DESC);
CREATE INDEX IF NOT EXISTS idx_gami_ledger_account_day ON gamification_ledger (account_id, day, source);
CREATE UNIQUE INDEX IF NOT EXISTS idx_gami_ledger_one_reversal
    ON gamification_ledger (reverses_id) WHERE reverses_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_gami_ledger_market
    ON gamification_ledger ((metadata->>'marketKey')) WHERE source = 'bet_volume';
CREATE INDEX IF NOT EXISTS idx_gami_ledger_stream
    ON gamification_ledger ((metadata->>'streamId')) WHERE source = 'stream_time';

CREATE OR REPLACE FUNCTION gamification_ledger_immutable() RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE EXCEPTION 'gamification_ledger is append-only';
END;
$$;

DROP TRIGGER IF EXISTS trg_gamification_ledger_immutable ON gamification_ledger;
CREATE TRIGGER trg_gamification_ledger_immutable
    BEFORE UPDATE OR DELETE ON gamification_ledger
    FOR EACH ROW EXECUTE FUNCTION gamification_ledger_immutable();

DROP TRIGGER IF EXISTS trg_gamification_ledger_no_truncate ON gamification_ledger;
CREATE TRIGGER trg_gamification_ledger_no_truncate
    BEFORE TRUNCATE ON gamification_ledger
    FOR EACH STATEMENT EXECUTE FUNCTION gamification_ledger_immutable();

-- ─── Counters and progress ───────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_daily_counters (
    account_id  UUID    NOT NULL REFERENCES accounts(id),
    day         DATE    NOT NULL,
    bucket      TEXT    NOT NULL,     -- 'xp:<source>' | 'progress:<metric>' | 'minutes:watch' | 'minutes:league:<id>'
    value       INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (account_id, day, bucket)
);
CREATE INDEX IF NOT EXISTS idx_gami_daily_day ON gamification_daily_counters (day);

CREATE TABLE IF NOT EXISTS gamification_progress (
    account_id  UUID        NOT NULL REFERENCES accounts(id),
    metric      TEXT        NOT NULL, -- ProgressMetric (packages/domain)
    value       BIGINT      NOT NULL DEFAULT 0 CHECK (value >= 0),
    items       TEXT[]      NOT NULL DEFAULT '{}',   -- distinct sets; value = cardinality for set metrics
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (account_id, metric)
);

CREATE TABLE IF NOT EXISTS gamification_achievements (
    account_id      UUID        NOT NULL REFERENCES accounts(id),
    achievement_id  TEXT        NOT NULL,
    tier            SMALLINT    NOT NULL CHECK (tier BETWEEN 1 AND 8),
    unlocked_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    context         JSONB       NOT NULL DEFAULT '{}'::jsonb,   -- e.g. {"cycleId": 7, "rank": 1}
    PRIMARY KEY (account_id, achievement_id, tier)
);
CREATE INDEX IF NOT EXISTS idx_gami_ach_tier ON gamification_achievements (achievement_id, tier);

-- ─── Watching and streaming ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_watch_minutes (
    account_id  UUID        NOT NULL REFERENCES accounts(id),
    minute      TIMESTAMPTZ NOT NULL CHECK (minute = date_trunc('minute', minute)),
    match_id    INTEGER     NOT NULL,     -- matches.api_football_id, no FK (24 h match purge)
    stream_id   UUID,                     -- live_streams.id, no FK (7-day stream purge)
    league_id   INTEGER,
    PRIMARY KEY (account_id, minute)
);
CREATE INDEX IF NOT EXISTS idx_gami_watch_stream ON gamification_watch_minutes (stream_id, minute) WHERE stream_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_gami_watch_minute ON gamification_watch_minutes (minute);

CREATE TABLE IF NOT EXISTS gamification_stream_sessions (
    stream_id             UUID        PRIMARY KEY,                 -- live_streams.id, no FK
    account_id            UUID        REFERENCES accounts(id),     -- NULL when the wallet has no account
    streamer_wallet       TEXT        NOT NULL CHECK (streamer_wallet = lower(streamer_wallet)),
    match_id              INTEGER     NOT NULL,
    went_live_at          TIMESTAMPTZ NOT NULL,
    ended_at              TIMESTAMPTZ,
    counted_minutes       INTEGER     NOT NULL DEFAULT 0 CHECK (counted_minutes >= 0),
    last_processed_minute TIMESTAMPTZ,
    moderated_at          TIMESTAMPTZ,
    created_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_gami_sessions_open    ON gamification_stream_sessions (went_live_at) WHERE ended_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_gami_sessions_account ON gamification_stream_sessions (account_id, went_live_at DESC);

CREATE TABLE IF NOT EXISTS gamification_stream_minutes (
    stream_id        UUID        NOT NULL REFERENCES gamification_stream_sessions(stream_id),
    minute           TIMESTAMPTZ NOT NULL,
    viewer_accounts  SMALLINT    NOT NULL,          -- audit only; no peak-viewer feature in the MVP
    exempt           BOOLEAN     NOT NULL DEFAULT false,
    PRIMARY KEY (stream_id, minute)
);

-- ─── Leaderboard snapshots ───────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_cycle_ranks (
    cycle_id    BIGINT        NOT NULL,           -- leaderboard_epochs.epoch_id (not unique there: tx_hash is the PK)
    wallet      TEXT          NOT NULL CHECK (wallet = lower(wallet)),
    account_id  UUID          REFERENCES accounts(id),
    rank        INTEGER       NOT NULL CHECK (rank BETWEEN 1 AND 100),
    score       NUMERIC(78,0) NOT NULL,
    frozen_at   TIMESTAMPTZ   NOT NULL DEFAULT now(),
    PRIMARY KEY (cycle_id, wallet)
);
CREATE INDEX IF NOT EXISTS idx_gami_cycle_account ON gamification_cycle_ranks (account_id, cycle_id DESC);

-- ─── Notifications, cursors ──────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS gamification_notifications (
    id          BIGSERIAL   PRIMARY KEY,
    account_id  UUID        NOT NULL REFERENCES accounts(id),
    kind        TEXT        NOT NULL,   -- level_up | achievement | streak_freeze_used | streak_freeze_earned
    payload     JSONB       NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    seen_at     TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_gami_notif_unseen ON gamification_notifications (account_id, id DESC) WHERE seen_at IS NULL;

CREATE TABLE IF NOT EXISTS gamification_cursors (
    name        TEXT        PRIMARY KEY,   -- bets | settlements | support | chat_removals | stream_moderation | cycles
    position    JSONB       NOT NULL,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─── Functions ───────────────────────────────────────────────────────────────

-- Exact integer inverse of XP(L) = 50·L·(L−1), capped at 60 (levelCurve.levelOf).
CREATE OR REPLACE FUNCTION gamification_level_of(p_xp BIGINT)
RETURNS SMALLINT
LANGUAGE sql
IMMUTABLE
AS $$
    SELECT COALESCE(MAX(l), 1)::SMALLINT
      FROM generate_series(1, 60) AS l
     WHERE 50::BIGINT * l * (l - 1) <= GREATEST(p_xp, 0);
$$;

-- One credit, atomically: idempotency, per-account lock, daily cap, multiplier, progress, level.
-- p_progress: [{"metric":"chat_messages","delta":1,"dailyCap":50}, {"metric":"market_kinds","item":"WINNER:0"}]
-- Only `admin_adjustment` may carry a negative XP; it is clamped so xp_total stays >= 0.
CREATE OR REPLACE FUNCTION gamification_credit(
    p_account_id    UUID,
    p_source        TEXT,
    p_ref_key       TEXT,
    p_day           DATE,
    p_occurred_at   TIMESTAMPTZ,
    p_requested_xp  INTEGER,
    p_daily_cap     INTEGER,      -- NULL = no cap
    p_multiplier    NUMERIC,      -- 1.00 when no event applies
    p_double_xp_id  UUID,
    p_reason        TEXT,         -- non-NULL forces 0 XP (banned, suspended, hedge…)
    p_metadata      JSONB,
    p_progress      JSONB
)
RETURNS TABLE (inserted BOOLEAN, ledger_id BIGINT, credited_xp INTEGER, new_total BIGINT,
               old_level SMALLINT, new_level SMALLINT, old_level_peak SMALLINT)
LANGUAGE plpgsql
AS $$
DECLARE
    v_old    SMALLINT;
    v_peak   SMALLINT;
    v_cur    BIGINT;
    v_used   INTEGER;
    v_base   INTEGER;
    v_reason TEXT    := p_reason;
    v_mult   NUMERIC := COALESCE(p_multiplier, 1);
    v_xp     INTEGER;
    v_id     BIGINT;
    v_total  BIGINT;
    v_p      JSONB;
    v_delta  BIGINT;
BEGIN
    INSERT INTO gamification_profiles (account_id) VALUES (p_account_id) ON CONFLICT DO NOTHING;
    -- Serialises every credit of one account: caps and level stay exact under concurrency.
    SELECT g.level, g.level_peak, g.xp_total INTO v_old, v_peak, v_cur
      FROM gamification_profiles g WHERE g.account_id = p_account_id FOR UPDATE;

    IF EXISTS (SELECT 1 FROM gamification_ledger l WHERE l.ref_key = p_ref_key) THEN
        RETURN QUERY SELECT false, NULL::BIGINT, 0, v_cur, v_old, v_old, v_peak;
        RETURN;
    END IF;

    IF p_source = 'admin_adjustment' THEN
        v_base := p_requested_xp;
    ELSE
        v_base := GREATEST(p_requested_xp, 0);
    END IF;

    IF v_reason IS NOT NULL THEN
        v_base := 0;
    ELSIF p_daily_cap IS NOT NULL THEN
        INSERT INTO gamification_daily_counters (account_id, day, bucket)
        VALUES (p_account_id, p_day, 'xp:' || p_source) ON CONFLICT DO NOTHING;
        SELECT c.value INTO v_used FROM gamification_daily_counters c
         WHERE c.account_id = p_account_id AND c.day = p_day AND c.bucket = 'xp:' || p_source;
        v_base := LEAST(v_base, GREATEST(p_daily_cap - v_used, 0));
        IF v_base < p_requested_xp THEN v_reason := 'daily_cap'; END IF;
        UPDATE gamification_daily_counters c SET value = c.value + v_base
         WHERE c.account_id = p_account_id AND c.day = p_day AND c.bucket = 'xp:' || p_source;
    END IF;

    v_xp := FLOOR(v_base * v_mult);
    IF v_xp < 0 AND v_cur + v_xp < 0 THEN
        v_xp := -v_cur::INTEGER;
        v_base := v_xp;
    END IF;

    INSERT INTO gamification_ledger (account_id, source, ref_key, day, occurred_at, requested_xp,
                                     base_xp, multiplier, xp, double_xp_event_id, reason, metadata)
    VALUES (p_account_id, p_source, p_ref_key, p_day, p_occurred_at, p_requested_xp, v_base,
            v_mult, v_xp, CASE WHEN v_mult > 1 THEN p_double_xp_id END,
            v_reason, COALESCE(p_metadata, '{}'::jsonb))
    RETURNING id INTO v_id;

    -- Progress moves only together with the idempotent ledger insert.
    FOR v_p IN SELECT * FROM jsonb_array_elements(COALESCE(p_progress, '[]'::jsonb)) LOOP
        INSERT INTO gamification_progress (account_id, metric)
        VALUES (p_account_id, v_p->>'metric') ON CONFLICT DO NOTHING;
        IF v_p ? 'item' THEN
            UPDATE gamification_progress pr
               SET items = array_append(pr.items, v_p->>'item'), value = pr.value + 1, updated_at = now()
             WHERE pr.account_id = p_account_id AND pr.metric = v_p->>'metric'
               AND NOT ((v_p->>'item') = ANY (pr.items));
        ELSE
            v_delta := (v_p->>'delta')::BIGINT;
            IF v_p ? 'dailyCap' THEN
                INSERT INTO gamification_daily_counters (account_id, day, bucket)
                VALUES (p_account_id, p_day, 'progress:' || (v_p->>'metric')) ON CONFLICT DO NOTHING;
                SELECT c.value INTO v_used FROM gamification_daily_counters c
                 WHERE c.account_id = p_account_id AND c.day = p_day AND c.bucket = 'progress:' || (v_p->>'metric');
                v_delta := LEAST(v_delta, GREATEST((v_p->>'dailyCap')::INTEGER - v_used, 0));
                UPDATE gamification_daily_counters c SET value = c.value + v_delta
                 WHERE c.account_id = p_account_id AND c.day = p_day AND c.bucket = 'progress:' || (v_p->>'metric');
            END IF;
            UPDATE gamification_progress pr SET value = GREATEST(pr.value + v_delta, 0), updated_at = now()
             WHERE pr.account_id = p_account_id AND pr.metric = v_p->>'metric';
        END IF;
    END LOOP;

    UPDATE gamification_profiles AS g
       SET xp_total = g.xp_total + v_xp,
           level = gamification_level_of(g.xp_total + v_xp),
           level_peak = GREATEST(g.level_peak, gamification_level_of(g.xp_total + v_xp)),
           updated_at = now()
     WHERE g.account_id = p_account_id
    RETURNING g.xp_total INTO v_total;

    RETURN QUERY SELECT true, v_id, v_xp, v_total, v_old, gamification_level_of(v_total), v_peak;
END;
$$;

-- Reversal: a new negative row (`rev:` || ref_key); progress deltas in metadata.progressUndo are
-- subtracted. The level may drop; level_peak never does.
CREATE OR REPLACE FUNCTION gamification_reverse(p_ref_key TEXT, p_reason TEXT, p_occurred_at TIMESTAMPTZ)
RETURNS TABLE (reversed BOOLEAN, reversed_xp INTEGER, new_total BIGINT)
LANGUAGE plpgsql
AS $$
DECLARE
    v_row   gamification_ledger%ROWTYPE;
    v_cur   BIGINT;
    v_xp    INTEGER;
    v_total BIGINT;
    v_p     JSONB;
BEGIN
    SELECT * INTO v_row FROM gamification_ledger l WHERE l.ref_key = p_ref_key AND l.reverses_id IS NULL;
    IF NOT FOUND THEN RETURN QUERY SELECT false, 0, NULL::BIGINT; RETURN; END IF;
    SELECT g.xp_total INTO v_cur FROM gamification_profiles g WHERE g.account_id = v_row.account_id FOR UPDATE;

    v_xp := -v_row.xp;
    IF v_cur + v_xp < 0 THEN v_xp := -v_cur::INTEGER; END IF;

    INSERT INTO gamification_ledger (account_id, source, ref_key, day, occurred_at, requested_xp,
                                     base_xp, multiplier, xp, reverses_id, reason, metadata)
    VALUES (v_row.account_id, v_row.source, 'rev:' || p_ref_key, v_row.day, p_occurred_at, 0,
            -v_row.base_xp, v_row.multiplier, v_xp, v_row.id, p_reason, v_row.metadata)
    ON CONFLICT (ref_key) DO NOTHING;
    IF NOT FOUND THEN RETURN QUERY SELECT false, 0, NULL::BIGINT; RETURN; END IF;

    FOR v_p IN SELECT * FROM jsonb_array_elements(COALESCE(v_row.metadata->'progressUndo', '[]'::jsonb)) LOOP
        UPDATE gamification_progress pr
           SET value = GREATEST(pr.value - (v_p->>'delta')::BIGINT, 0), updated_at = now()
         WHERE pr.account_id = v_row.account_id AND pr.metric = v_p->>'metric';
    END LOOP;

    UPDATE gamification_profiles AS g
       SET xp_total = g.xp_total + v_xp,
           level = gamification_level_of(g.xp_total + v_xp),
           updated_at = now()
     WHERE g.account_id = v_row.account_id
    RETURNING g.xp_total INTO v_total;

    RETURN QUERY SELECT true, v_xp, v_total;
END;
$$;

-- Check-in: compare-and-set on the streak (state computed by applyCheckIn), then credit.
-- Two tabs racing: the second sees streak_last_day already moved and returns applied = false.
CREATE OR REPLACE FUNCTION gamification_check_in(
    p_account_id     UUID,
    p_day            DATE,
    p_now            TIMESTAMPTZ,
    p_expected_last  DATE,
    p_streak_current INTEGER,
    p_streak_best    INTEGER,
    p_streak_freezes SMALLINT,
    p_xp             INTEGER,
    p_multiplier     NUMERIC,
    p_double_xp_id   UUID
)
RETURNS TABLE (applied BOOLEAN, credited_xp INTEGER, new_total BIGINT, old_level SMALLINT,
               new_level SMALLINT, old_level_peak SMALLINT)
LANGUAGE plpgsql
AS $$
DECLARE r RECORD;
BEGIN
    INSERT INTO gamification_profiles (account_id) VALUES (p_account_id) ON CONFLICT DO NOTHING;
    UPDATE gamification_profiles g
       SET streak_current = p_streak_current, streak_best = p_streak_best,
           streak_freezes = p_streak_freezes, streak_last_day = p_day, updated_at = p_now
     WHERE g.account_id = p_account_id
       AND g.streak_last_day IS NOT DISTINCT FROM p_expected_last
       AND (g.streak_last_day IS NULL OR g.streak_last_day < p_day);
    IF NOT FOUND THEN
        RETURN QUERY SELECT false, 0, NULL::BIGINT, NULL::SMALLINT, NULL::SMALLINT, NULL::SMALLINT;
        RETURN;
    END IF;

    SELECT * INTO r FROM gamification_credit(p_account_id, 'check_in',
        'check_in:' || p_account_id || ':' || p_day, p_day, p_now, p_xp, 100, p_multiplier, p_double_xp_id,
        NULL, jsonb_build_object('streak', p_streak_current), '[]'::jsonb);
    IF NOT r.inserted THEN
        RAISE EXCEPTION 'check-in % already in the ledger while the streak moved', p_day;
    END IF;
    RETURN QUERY SELECT true, r.credited_xp, r.new_total, r.old_level, r.new_level, r.old_level_peak;
END;
$$;

-- Recomputes xp_total and level from the ledger (CLI gamification:rebuild-profiles). Returns the
-- drifting profiles; with p_apply they are fixed. level_peak only goes up. Idempotent.
CREATE OR REPLACE FUNCTION gamification_rebuild_profiles(p_apply BOOLEAN)
RETURNS TABLE (drift_account_id UUID, stored_total BIGINT, ledger_total BIGINT,
               stored_level SMALLINT, ledger_level SMALLINT)
LANGUAGE plpgsql
AS $$
DECLARE
    r       RECORD;
    v_total BIGINT;
    v_level SMALLINT;
BEGIN
    FOR r IN SELECT g.account_id AS aid, g.xp_total AS stored, g.level AS lvl
               FROM gamification_profiles g ORDER BY g.account_id FOR UPDATE LOOP
        SELECT GREATEST(COALESCE(SUM(l.xp), 0), 0) INTO v_total
          FROM gamification_ledger l WHERE l.account_id = r.aid;
        v_level := gamification_level_of(v_total);
        IF v_total <> r.stored OR v_level <> r.lvl THEN
            IF p_apply THEN
                UPDATE gamification_profiles g
                   SET xp_total = v_total, level = v_level,
                       level_peak = GREATEST(g.level_peak, v_level), updated_at = now()
                 WHERE g.account_id = r.aid;
            END IF;
            drift_account_id := r.aid;
            stored_total := r.stored;
            ledger_total := v_total;
            stored_level := r.lvl;
            ledger_level := v_level;
            RETURN NEXT;
        END IF;
    END LOOP;
END;
$$;

-- ─── RLS / grants ────────────────────────────────────────────────────────────

DO $$
DECLARE t TEXT;
BEGIN
    FOREACH t IN ARRAY ARRAY[
        'gamification_double_xp_events','gamification_profiles','gamification_ledger',
        'gamification_daily_counters','gamification_progress','gamification_achievements',
        'gamification_watch_minutes','gamification_stream_sessions','gamification_stream_minutes',
        'gamification_cycle_ranks','gamification_notifications','gamification_cursors'
    ] LOOP
        EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);
        -- Default privileges also hand TRUNCATE / REFERENCES / TRIGGER out: start from nothing.
        EXECUTE format('REVOKE ALL ON %I FROM PUBLIC, anon, authenticated, service_role', t);
        EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON %I TO service_role', t);
    END LOOP;
END$$;
-- The ledger stays append-only even for service_role (the trigger also blocks the owner).
REVOKE UPDATE, DELETE ON gamification_ledger FROM service_role;
REVOKE ALL ON SEQUENCE gamification_ledger_id_seq, gamification_notifications_id_seq FROM PUBLIC, anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE gamification_ledger_id_seq, gamification_notifications_id_seq TO service_role;

REVOKE ALL ON FUNCTION gamification_ledger_immutable() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_level_of(BIGINT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_credit(UUID, TEXT, TEXT, DATE, TIMESTAMPTZ, INTEGER, INTEGER, NUMERIC, UUID, TEXT, JSONB, JSONB) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_reverse(TEXT, TEXT, TIMESTAMPTZ) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_check_in(UUID, DATE, TIMESTAMPTZ, DATE, INTEGER, INTEGER, SMALLINT, INTEGER, NUMERIC, UUID) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION gamification_rebuild_profiles(BOOLEAN) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION gamification_level_of(BIGINT) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_credit(UUID, TEXT, TEXT, DATE, TIMESTAMPTZ, INTEGER, INTEGER, NUMERIC, UUID, TEXT, JSONB, JSONB) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_reverse(TEXT, TEXT, TIMESTAMPTZ) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_check_in(UUID, DATE, TIMESTAMPTZ, DATE, INTEGER, INTEGER, SMALLINT, INTEGER, NUMERIC, UUID) TO service_role;
GRANT EXECUTE ON FUNCTION gamification_rebuild_profiles(BOOLEAN) TO service_role;

COMMIT;

-- PostgREST caches the schema: expose the new functions to supabase.rpc() right away.
NOTIFY pgrst, 'reload schema';

import { spawn, spawnSync } from 'child_process';
import { randomUUID } from 'crypto';
import { afterAll, describe, expect, it } from 'vitest';

import { resolveSupabaseDbUrl } from './_setup';

/**
 * SQL behaviour of migration 044 (gamification). Single-session cases run in a rolled-back
 * transaction; concurrency cases need committed rows and separate connections, so they use
 * throwaway accounts removed in afterAll (the ledger trigger is bypassed with
 * session_replication_role, which only a superuser can set).
 */
function databaseUrl(): string | null {
    try {
        return resolveSupabaseDbUrl();
    } catch {
        return null;
    }
}

const dbUrl = databaseUrl();
const migrated =
    dbUrl !== null &&
    spawnSync('psql', [dbUrl, '-At', '-c', "SELECT to_regclass('public.gamification_ledger') IS NOT NULL"], {
        stdio: 'pipe',
    }).stdout?.toString().trim() === 't';

function psql(sql: string): string[] {
    const r = spawnSync('psql', [dbUrl as string, '-v', 'ON_ERROR_STOP=1', '-At', '-q'], { input: sql, stdio: 'pipe' });
    if (r.status !== 0) throw new Error(r.stderr.toString());
    return r.stdout.toString().split('\n').filter((line) => line.length > 0);
}

function inRolledBackTx(body: string): string[] {
    return psql(`BEGIN;\n${body}\nROLLBACK;\n`);
}

function psqlAsync(sql: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const child = spawn('psql', [dbUrl as string, '-v', 'ON_ERROR_STOP=1', '-At', '-q']);
        let out = '';
        let err = '';
        child.stdout.on('data', (d: Buffer) => (out += d.toString()));
        child.stderr.on('data', (d: Buffer) => (err += d.toString()));
        child.on('close', (code) => {
            if (code !== 0) reject(new Error(err));
            else resolve(out.split('\n').filter((line) => line.length > 0));
        });
        child.stdin.end(sql);
    });
}

const createdAccounts: string[] = [];

function createAccount(): string {
    const [id] = psql(`INSERT INTO accounts (dynamic_user_id) VALUES ('it-gami-${randomUUID()}') RETURNING id;`);
    createdAccounts.push(id);
    return id;
}

/** Account inserted inside the current transaction (rolled back with it). */
const TX_ACCOUNT = `INSERT INTO accounts (id, dynamic_user_id) VALUES ('00000000-0000-4000-8000-000000000044', 'it-gami-tx');`;
const TX_ID = `'00000000-0000-4000-8000-000000000044'::uuid`;

function credit(account: string, source: string, refKey: string, xp: number, cap: string, extra = `NULL, '{}'::jsonb, '[]'::jsonb`): string {
    return `SELECT inserted || '|' || credited_xp || '|' || new_total || '|' || new_level
              FROM gamification_credit(${account}, '${source}', '${refKey}', '2026-11-23', '2026-11-23T10:00:00Z',
                                       ${xp}, ${cap}, 1, NULL, ${extra});`;
}

afterAll(() => {
    if (!migrated || createdAccounts.length === 0) return;
    const ids = createdAccounts.map((id) => `'${id}'`).join(',');
    psql(`
        SET session_replication_role = replica;
        DELETE FROM gamification_ledger WHERE account_id IN (${ids});
        DELETE FROM gamification_daily_counters WHERE account_id IN (${ids});
        DELETE FROM gamification_progress WHERE account_id IN (${ids});
        DELETE FROM gamification_profiles WHERE account_id IN (${ids});
        DELETE FROM accounts WHERE id IN (${ids});
    `);
});

describe.skipIf(!migrated)('integration · gamification SQL (migration 044)', () => {
    it('refuses UPDATE and DELETE on the ledger, even for the owner, and for service_role by grant', () => {
        const out = inRolledBackTx(`
            ${TX_ACCOUNT}
            ${credit(TX_ID, 'check_in', 'it:append-only', 50, '100')}
            DO $$ BEGIN UPDATE gamification_ledger SET xp = 999 WHERE ref_key = 'it:append-only';
                 RAISE NOTICE 'updated'; EXCEPTION WHEN raise_exception THEN RAISE NOTICE 'x'; END $$;
            SELECT xp FROM gamification_ledger WHERE ref_key = 'it:append-only';
            DO $$ BEGIN DELETE FROM gamification_ledger WHERE ref_key = 'it:append-only';
                 EXCEPTION WHEN raise_exception THEN NULL; END $$;
            SELECT count(*) FROM gamification_ledger WHERE ref_key = 'it:append-only';
            SELECT has_table_privilege('service_role', 'gamification_ledger', 'UPDATE')
                || '|' || has_table_privilege('service_role', 'gamification_ledger', 'DELETE')
                || '|' || has_table_privilege('service_role', 'gamification_ledger', 'TRUNCATE')
                || '|' || has_table_privilege('anon', 'gamification_ledger', 'SELECT');
        `);
        expect(out).toEqual(['true|50|50|1', '50', '1', 'false|false|false|false']);
    });

    it('credits a ref_key once and rejects a raw duplicate insert', () => {
        const out = inRolledBackTx(`
            ${TX_ACCOUNT}
            ${credit(TX_ID, 'follow', 'it:dup', 5, '15')}
            ${credit(TX_ID, 'follow', 'it:dup', 5, '15')}
            DO $$ BEGIN
                INSERT INTO gamification_ledger (account_id, source, ref_key, day, occurred_at, requested_xp, base_xp, xp)
                VALUES ('00000000-0000-4000-8000-000000000044', 'follow', 'it:dup', '2026-11-23', '2026-11-23T10:00:00Z', 5, 5, 5);
            EXCEPTION WHEN unique_violation THEN RAISE NOTICE 'dup'; END $$;
            SELECT count(*) || '|' || sum(xp) FROM gamification_ledger WHERE account_id = ${TX_ID};
        `);
        expect(out).toEqual(['true|5|5|1', 'false|0|5|1', '1|5']);
    });

    it('caps on base XP, then multiplies; zero-XP rows keep the reason', () => {
        const out = inRolledBackTx(`
            ${TX_ACCOUNT}
            SELECT credited_xp FROM gamification_credit(${TX_ID}, 'chat_message', 'it:c1', '2026-11-23', '2026-11-23T10:00:00Z', 4, 5, 2, NULL, NULL, '{}', '[]');
            SELECT credited_xp FROM gamification_credit(${TX_ID}, 'chat_message', 'it:c2', '2026-11-23', '2026-11-23T10:00:00Z', 4, 5, 2, NULL, NULL, '{}', '[]');
            SELECT credited_xp FROM gamification_credit(${TX_ID}, 'chat_message', 'it:c3', '2026-11-23', '2026-11-23T10:00:00Z', 1, 5, 2, NULL, NULL, '{}', '[]');
            SELECT credited_xp FROM gamification_credit(${TX_ID}, 'chat_message', 'it:c4', '2026-11-23', '2026-11-23T10:00:00Z', 1, 5, 1, NULL, 'banned', '{}', '[]');
            SELECT string_agg(base_xp || ':' || xp || ':' || coalesce(reason, '-'), ',' ORDER BY id)
              FROM gamification_ledger WHERE account_id = ${TX_ID};
        `);
        expect(out).toEqual(['8', '2', '0', '0', '4:8:-,1:2:daily_cap,0:0:daily_cap,0:0:banned']);
    });

    it('rejects a non-Paris day and a double XP event on bet sources or overlapping another', () => {
        const out = inRolledBackTx(`
            ${TX_ACCOUNT}
            DO $$ BEGIN
                PERFORM gamification_credit('00000000-0000-4000-8000-000000000044', 'follow', 'it:day', '2026-11-24',
                    '2026-11-23T22:30:00Z', 5, NULL, 1, NULL, NULL, '{}', '[]');
                RAISE NOTICE 'accepted';
            EXCEPTION WHEN check_violation THEN RAISE NOTICE 'refused'; END $$;
            SELECT count(*) FROM gamification_ledger WHERE ref_key = 'it:day';
            DO $$ BEGIN
                INSERT INTO gamification_double_xp_events (name, multiplier, sources, starts_at, ends_at, created_by_wallet)
                VALUES ('Bets', 2, ARRAY['bet_volume'], '2027-01-01T00:00:00Z', '2027-01-02T00:00:00Z', '0xabc');
            EXCEPTION WHEN check_violation THEN RAISE NOTICE 'refused'; END $$;
            INSERT INTO gamification_double_xp_events (name, multiplier, sources, starts_at, ends_at, created_by_wallet)
            VALUES ('First', 2, ARRAY['check_in'], '2027-01-01T00:00:00Z', '2027-01-02T00:00:00Z', '0xabc');
            DO $$ BEGIN
                INSERT INTO gamification_double_xp_events (name, multiplier, sources, starts_at, ends_at, created_by_wallet)
                VALUES ('Overlap', 1.5, ARRAY['watch'], '2027-01-01T23:00:00Z', '2027-01-03T00:00:00Z', '0xabc');
            EXCEPTION WHEN exclusion_violation THEN RAISE NOTICE 'refused'; END $$;
            INSERT INTO gamification_double_xp_events (name, multiplier, sources, starts_at, ends_at, created_by_wallet)
            VALUES ('Adjacent', 1.25, ARRAY['watch'], '2027-01-02T00:00:00Z', '2027-01-03T00:00:00Z', '0xabc');
            SELECT count(*) FROM gamification_double_xp_events WHERE starts_at >= '2027-01-01';
        `);
        // 2026-11-23T22:30Z is 23:30 in Paris (UTC+1): still the 23rd, so day 24 is refused.
        expect(out).toEqual(['0', '2']);
    });

    it('reverses once, lowers the level but never the peak, and the rebuild finds no drift', () => {
        const out = inRolledBackTx(`
            ${TX_ACCOUNT}
            ${credit(TX_ID, 'bet_volume', 'it:vol', 150, '1000', `NULL, '{"progressUndo":[{"metric":"bet_volume_usdc","delta":150}]}'::jsonb, '[{"metric":"bet_volume_usdc","delta":150}]'::jsonb`)}
            SELECT reversed || '|' || reversed_xp || '|' || new_total FROM gamification_reverse('it:vol', 'market_cancelled', '2026-11-23T12:00:00Z');
            SELECT reversed FROM gamification_reverse('it:vol', 'market_cancelled', '2026-11-23T12:00:00Z');
            SELECT xp_total || '|' || level || '|' || level_peak FROM gamification_profiles WHERE account_id = ${TX_ID};
            SELECT value FROM gamification_progress WHERE account_id = ${TX_ID} AND metric = 'bet_volume_usdc';
            SELECT count(*) FROM gamification_rebuild_profiles(false) WHERE drift_account_id = ${TX_ID};
        `);
        expect(out).toEqual(['true|150|150|2', 'true|-150|0', 'f', '0|1|2', '0', '0']);
    });

    it('clamps a negative admin adjustment at zero and the rebuild repairs a tampered total', () => {
        const out = inRolledBackTx(`
            ${TX_ACCOUNT}
            ${credit(TX_ID, 'admin_adjustment', 'it:adm1', 30, 'NULL')}
            ${credit(TX_ID, 'admin_adjustment', 'it:adm2', -100, 'NULL')}
            UPDATE gamification_profiles SET xp_total = 777 WHERE account_id = ${TX_ID};
            SELECT stored_total || '|' || ledger_total FROM gamification_rebuild_profiles(true) WHERE drift_account_id = ${TX_ID};
            SELECT count(*) FROM gamification_rebuild_profiles(true) WHERE drift_account_id = ${TX_ID};
            SELECT xp_total FROM gamification_profiles WHERE account_id = ${TX_ID};
        `);
        expect(out).toEqual(['true|30|30|1', 'true|-30|0|1', '777|0', '0', '0']);
    });

    it('keeps the daily cap exact under 20 concurrent credits', async () => {
        const account = createAccount();
        const calls = Array.from({ length: 20 }, (_, i) =>
            psqlAsync(
                `SELECT credited_xp FROM gamification_credit('${account}', 'chat_message', 'it:chat:${account}:${i}', '2026-11-23',
                  '2026-11-23T10:00:00Z', 1, 5, 1, NULL, NULL, '{}', '[{"metric":"chat_messages","delta":1,"dailyCap":50}]');`,
            ),
        );
        const credited = (await Promise.all(calls)).map(([xp]) => Number(xp));
        expect(credited.reduce((a, b) => a + b, 0)).toBe(5);
        const [summary] = psql(`
            SELECT count(*) || '|' || sum(xp) || '|' || count(*) FILTER (WHERE reason = 'daily_cap')
                || '|' || (SELECT xp_total FROM gamification_profiles WHERE account_id = '${account}')
                || '|' || (SELECT value FROM gamification_daily_counters WHERE account_id = '${account}' AND bucket = 'xp:chat_message')
                || '|' || (SELECT value FROM gamification_progress WHERE account_id = '${account}' AND metric = 'chat_messages')
              FROM gamification_ledger WHERE account_id = '${account}';
        `);
        expect(summary).toBe('20|5|15|5|5|20');
    });

    it('counts two (and five) simultaneous check-ins once', async () => {
        const account = createAccount();
        const call = (): Promise<string[]> =>
            psqlAsync(
                `SELECT applied FROM gamification_check_in('${account}', '2026-11-23', '2026-11-23T10:00:00Z', NULL,
                  1, 1, 0::smallint, 50, 1, NULL);`,
            );
        const applied = (await Promise.all([call(), call(), call(), call(), call()])).map(([a]) => a);
        expect(applied.filter((a) => a === 't')).toHaveLength(1);
        const [summary] = psql(`
            SELECT count(*) || '|' || sum(xp) || '|' || min(ref_key)
                || '|' || (SELECT streak_current || ':' || streak_last_day FROM gamification_profiles WHERE account_id = '${account}')
              FROM gamification_ledger WHERE account_id = '${account}';
        `);
        expect(summary).toBe(`1|50|check_in:${account}:2026-11-23|1:2026-11-23`);
    });
});

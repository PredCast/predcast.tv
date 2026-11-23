import { spawnSync } from 'child_process';
import { describe, expect, it } from 'vitest';

import { resolveSupabaseDbUrl } from './_setup';

/**
 * SQL behaviour of migration 045 (`gamification_record_watch_minute`). Every case runs in a
 * rolled-back transaction. Run this file alone: other integration suites reset the schema.
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
    spawnSync('psql', [dbUrl, '-At', '-c', "SELECT to_regproc('public.gamification_record_watch_minute') IS NOT NULL"], {
        stdio: 'pipe',
    }).stdout?.toString().trim() === 't';

function inRolledBackTx(body: string): string[] {
    const r = spawnSync('psql', [dbUrl as string, '-v', 'ON_ERROR_STOP=1', '-At', '-q'], {
        input: `BEGIN;\n${body}\nROLLBACK;\n`,
        stdio: 'pipe',
    });
    if (r.status !== 0) throw new Error(r.stderr.toString());
    return r.stdout.toString().split('\n').filter((line) => line.length > 0);
}

const ACCOUNT = `'00000000-0000-4000-8000-000000000045'::uuid`;
const SETUP = `INSERT INTO accounts (id, dynamic_user_id) VALUES (${ACCOUNT}, 'it-gami-watch');`;

/** One heartbeat at `minute` (minutes after 10:00 UTC), league 61, progress cap `cap`. */
function minute(offset: number, cap = 240, league = 'NULL::INTEGER'): string {
    const at = `('2026-11-23T10:00:00Z'::timestamptz + interval '${offset} minutes')`;
    return `SELECT inserted || '|' || minutes_today || '|' || COALESCE(league_minutes_today::text, '-') || '|'
                   || COALESCE(total_watch_minutes::text, '-') || '|' || progress_moved || '|' || league_added
              FROM gamification_record_watch_minute(${ACCOUNT}, ${at}, '2026-11-23', 999001, NULL, ${league}, ${cap}, 10);`;
}

describe.skipIf(!migrated)('gamification_record_watch_minute (migration 045)', () => {
    it('counts one minute per account and minute, whatever the tabs', () => {
        const out = inRolledBackTx(`${SETUP}\n${minute(0)}\n${minute(0)}\n${minute(1)}`);
        expect(out).toEqual(['true|1|-|1|true|false', 'false|1|-|-|false|false', 'true|2|-|2|true|false']);
    });

    it('adds the league at its 10th daily minute, once', () => {
        const beats = Array.from({ length: 11 }, (_, i) => minute(i, 240, '61')).join('\n');
        const out = inRolledBackTx(`${SETUP}\n${beats}\nSELECT items::text FROM gamification_progress WHERE account_id = ${ACCOUNT} AND metric = 'leagues';`);
        expect(out[9]).toBe('true|10|10|10|true|true');
        expect(out[10]).toBe('true|11|11|11|true|false');
        expect(out[11]).toBe('{61}');
    });

    it('caps the daily watch_minutes progress while minutes keep counting', () => {
        const out = inRolledBackTx(`${SETUP}\n${minute(0, 2)}\n${minute(1, 2)}\n${minute(2, 2)}`);
        expect(out).toEqual(['true|1|-|1|true|false', 'true|2|-|2|true|false', 'true|3|-|2|false|false']);
    });
});

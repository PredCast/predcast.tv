import { spawnSync } from 'child_process';
import { describe, expect, it } from 'vitest';

import { resolveSupabaseDbUrl } from './_setup';

/**
 * SQL behaviour of migration 047 (`gamification_record_stream_minute`,
 * `gamification_moderate_stream_session`). Every case runs in a rolled-back transaction.
 * Run this file alone: other integration suites reset the schema.
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
    spawnSync('psql', [dbUrl, '-At', '-c', "SELECT to_regproc('public.gamification_record_stream_minute') IS NOT NULL"], {
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

const ACCOUNT = `'00000000-0000-4000-8000-000000000047'::uuid`;
const STREAM = `'00000000-0000-4000-8000-0000000005a7'::uuid`;
const SETUP = `INSERT INTO accounts (id, dynamic_user_id) VALUES (${ACCOUNT}, 'it-gami-streams');
INSERT INTO gamification_stream_sessions (stream_id, account_id, streamer_wallet, match_id, went_live_at)
VALUES (${STREAM}, ${ACCOUNT}, '0x${'a'.repeat(40)}', 999501, '2026-11-23T10:00:00Z');`;

function minute(offset: number, cap = 360): string {
    const at = `('2026-11-23T10:00:00Z'::timestamptz + interval '${offset} minutes')`;
    return `SELECT inserted || '|' || counted_minutes || '|' || progress_moved || '|' || COALESCE(total_stream_minutes::text, '-')
              FROM gamification_record_stream_minute(${STREAM}, ${at}, '2026-11-23', 1::smallint, false, ${cap});`;
}

const SESSION = `SELECT counted_minutes || '|' || progress_minutes FROM gamification_stream_sessions WHERE stream_id = ${STREAM};`;
const PROGRESS = `SELECT value FROM gamification_progress WHERE account_id = ${ACCOUNT} AND metric = 'stream_minutes';`;
const MODERATE = `SELECT moderated || '|' || minutes_removed FROM gamification_moderate_stream_session(${STREAM}, now());`;

describe.skipIf(!migrated)('gamification stream minutes (migration 047)', () => {
    it('records a minute once and returns its rank in the session on replay', () => {
        const out = inRolledBackTx(`${SETUP}\n${minute(0)}\n${minute(1)}\n${minute(0)}\n${SESSION}`);
        expect(out).toEqual(['true|1|true|1', 'true|2|true|2', 'false|1|false|-', '2|2']);
    });

    it('caps the daily stream_minutes progress while minutes keep counting', () => {
        const out = inRolledBackTx(`${SETUP}\n${minute(0, 2)}\n${minute(1, 2)}\n${minute(2, 2)}\n${SESSION}`);
        expect(out).toEqual(['true|1|true|1', 'true|2|true|2', 'true|3|false|2', '3|2']);
    });

    it('stop_stream removes the session progress once and refuses later minutes', () => {
        const out = inRolledBackTx(`${SETUP}\n${minute(0)}\n${minute(1)}\n${MODERATE}\n${MODERATE}\n${PROGRESS}\n${minute(2)}\n${SESSION}`);
        expect(out).toEqual(['true|1|true|1', 'true|2|true|2', 'true|2', 'false|0', '0', 'false|0|false|-', '2|2']);
    });
});

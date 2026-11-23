import { spawnSync } from 'child_process';
import { describe, expect, it } from 'vitest';

import { resolveSupabaseDbUrl } from './_setup';

/**
 * SQL behaviour of migration 046 (`record_leaderboard_win`, D6): a rewound indexer replays
 * WinRecorded events without double counting. Every case runs in a rolled-back transaction.
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
    spawnSync('psql', [dbUrl, '-At', '-c', "SELECT to_regproc('public.record_leaderboard_win') IS NOT NULL"], {
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

const ALICE = `'0x00000000000000000000000000000000000a11ce'`;
const BOB = `'0x0000000000000000000000000000000000000b0b'`;
const CYCLE_A = 999_001;
const CYCLE_B = 999_002;

const winSql = (cycle: number, user: string, newScore: number, block: number, logIndex: number) =>
    `SELECT record_leaderboard_win(${cycle}, ${user}, ${newScore}, ${block}, ${logIndex});`;

/** Chain order of the WinRecorded events of the scenario. */
const EVENTS = [
    winSql(CYCLE_A, ALICE, 40, 100, 0),
    winSql(CYCLE_A, BOB, 25, 100, 1),
    winSql(CYCLE_A, ALICE, 50, 150, 4),
    winSql(CYCLE_B, ALICE, 7, 220, 2),
    winSql(CYCLE_A, BOB, 30, 230, 0),
];

const SCORES = `
SELECT cycle_id || '|' || user_address || '|' || score FROM leaderboard_cycle_scores
 WHERE cycle_id IN (${CYCLE_A}, ${CYCLE_B}) ORDER BY cycle_id, user_address COLLATE "C";
SELECT 'life|' || user_address || '|' || total_score FROM leaderboard_scores
 WHERE user_address IN (${ALICE}, ${BOB}) ORDER BY user_address COLLATE "C";`;

const EXPECTED = [
    `${CYCLE_A}|0x0000000000000000000000000000000000000b0b|30`,
    `${CYCLE_A}|0x00000000000000000000000000000000000a11ce|50`,
    `${CYCLE_B}|0x00000000000000000000000000000000000a11ce|7`,
    'life|0x0000000000000000000000000000000000000b0b|30',
    'life|0x00000000000000000000000000000000000a11ce|57',
];

const CLEAN = `DELETE FROM leaderboard_cycle_scores WHERE user_address IN (${ALICE}, ${BOB});
DELETE FROM leaderboard_scores WHERE user_address IN (${ALICE}, ${BOB});`;

describe.skipIf(!migrated)('record_leaderboard_win (migration 046, D6)', () => {
    it('stores the on-chain epoch score and the lifetime sum', () => {
        const out = inRolledBackTx(`${CLEAN}\n${EVENTS.join('\n')}\n${SCORES}`);
        expect(out.slice(0, 5)).toEqual(['t', 't', 't', 't', 't']);
        expect(out.slice(5)).toEqual(EXPECTED);
    });

    it('rewind: replaying every event (twice) changes nothing', () => {
        const out = inRolledBackTx(`${CLEAN}\n${EVENTS.join('\n')}\n${EVENTS.join('\n')}\n${EVENTS.join('\n')}\n${SCORES}`);
        expect(out.slice(5, 15)).toEqual(Array(10).fill('f'));
        expect(out.slice(15)).toEqual(EXPECTED);
    });

    it('converges when an older range is replayed after a newer one', () => {
        const reversed = [...EVENTS].reverse().join('\n');
        const out = inRolledBackTx(`${CLEAN}\n${reversed}\n${SCORES}`);
        expect(out.slice(5)).toEqual(EXPECTED);
    });

    it('repairs a row inflated by the former delta increments once its events are replayed', () => {
        const legacy = `
INSERT INTO leaderboard_cycle_scores (cycle_id, user_address, score) VALUES (${CYCLE_A}, ${ALICE}, 100);
INSERT INTO leaderboard_scores (user_address, total_score) VALUES (${ALICE}, 114);`;
        const out = inRolledBackTx(`${CLEAN}\n${legacy}\n${EVENTS.join('\n')}\n${SCORES}`);
        expect(out.slice(5)).toEqual(EXPECTED);
    });
});

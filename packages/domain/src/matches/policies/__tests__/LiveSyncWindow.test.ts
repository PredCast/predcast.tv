import { describe, expect, it } from 'vitest';

import { LIVE_SYNC_LEAD_MS, LIVE_SYNC_TAIL_MS, liveSyncKickoffRange } from '../LiveSyncWindow';

describe('liveSyncKickoffRange', () => {
    const now = new Date('2026-11-07T20:00:00Z');

    it('covers kickoffs from 3 h ago to 5 min ahead', () => {
        const { from, to } = liveSyncKickoffRange(now);
        expect(from.toISOString()).toBe('2026-11-07T17:00:00.000Z');
        expect(to.toISOString()).toBe('2026-11-07T20:05:00.000Z');
    });

    it('keeps the constants the range is built from', () => {
        expect(LIVE_SYNC_LEAD_MS).toBe(300_000);
        expect(LIVE_SYNC_TAIL_MS).toBe(10_800_000);
    });
});

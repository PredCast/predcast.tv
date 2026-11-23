import { describe, expect, it } from 'vitest';

import type { StreamSession } from '../entities/StreamSession';
import { isCycleCounted, rankCycle } from '../policies/cycleSnapshotPolicy';
import {
    isSessionOpenAt,
    isSessionSettled,
    sessionClosing,
    streamMinutesToProcess,
    streamProcessingCutoff,
    streamsToOpen,
} from '../policies/streamSessionPolicy';

const at = (hhmmss: string) => new Date(`2027-01-10T${hhmmss}.000Z`);

const session: StreamSession = {
    streamId: 's1', accountId: 'acc', streamerWallet: '0xabc', matchId: 999001,
    wentLiveAt: at('12:00:20'), endedAt: null, countedMinutes: 0, lastProcessedMinute: null,
    moderatedAt: null, minutesSettledAt: null,
};

describe('stream session reconciliation (§3.3 stream_time, D4)', () => {
    it('opens a session for each live stream without one', () => {
        expect(streamsToOpen([{ streamId: 's1' }, { streamId: 's2' }], new Set(['s1']))).toEqual(['s2']);
    });

    it('closes at the stream end, now when the row is gone, never before went_live_at', () => {
        const now = at('13:00:00');
        expect(sessionClosing(session, { streamId: 's1', live: true, endedAt: null }, now)).toBeNull();
        expect(sessionClosing(session, { streamId: 's1', live: false, endedAt: at('12:40:00') }, now))
            .toEqual({ streamId: 's1', endedAt: at('12:40:00') });
        expect(sessionClosing(session, null, now)).toEqual({ streamId: 's1', endedAt: now });
        expect(sessionClosing(session, { streamId: 's1', live: false, endedAt: at('11:00:00') }, now))
            .toEqual({ streamId: 's1', endedAt: session.wentLiveAt });
        expect(sessionClosing({ ...session, endedAt: at('12:30:00') }, null, now)).toBeNull();
    });
});

describe('stream minutes to process', () => {
    it('waits two minutes for the heartbeats', () => {
        expect(streamProcessingCutoff(at('12:05:30'))).toEqual(at('12:03:00'));
        expect(streamMinutesToProcess(session, at('12:05:30'), 240)).toEqual([at('12:01:00'), at('12:02:00'), at('12:03:00')]);
    });

    it('resumes after the last processed minute and stops before the end', () => {
        const ended = { ...session, lastProcessedMinute: at('12:02:00'), endedAt: at('12:04:30') };
        expect(streamMinutesToProcess(ended, at('13:00:00'), 240)).toEqual([at('12:03:00'), at('12:04:00')]);
        expect(isSessionSettled(ended, at('12:03:00'))).toBe(false);
        expect(isSessionSettled(ended, at('12:04:00'))).toBe(true);
    });

    it('bounds a catch-up and treats [went_live_at, ended_at) as open', () => {
        expect(streamMinutesToProcess(session, at('20:00:00'), 5)).toHaveLength(5);
        const ended = { ...session, endedAt: at('12:05:00') };
        expect(isSessionOpenAt(ended, at('12:04:00'))).toBe(true);
        expect(isSessionOpenAt(ended, at('12:05:00'))).toBe(false);
        expect(isSessionOpenAt(ended, at('12:00:00'))).toBe(false);
    });

    it('settles at once a session ended before its first full minute', () => {
        expect(isSessionSettled({ ...session, endedAt: at('12:00:50') }, null)).toBe(true);
        expect(isSessionSettled(session, at('12:30:00'))).toBe(false);
    });
});

describe('cycle snapshot (§8.3, D15)', () => {
    it('keeps score > 0, sorts by score then wallet, ranks from 1', () => {
        const ranked = rankCycle([
            { wallet: '0xB', score: BigInt(10) },
            { wallet: '0xa', score: BigInt(10) },
            { wallet: '0xc', score: BigInt(30) },
            { wallet: '0xd', score: BigInt(0) },
        ]);
        expect(ranked).toEqual([
            { wallet: '0xc', score: BigInt(30), rank: 1 },
            { wallet: '0xa', score: BigInt(10), rank: 2 },
            { wallet: '0xb', score: BigInt(10), rank: 3 },
        ]);
    });

    it('cuts to the top 100', () => {
        const scores = Array.from({ length: 150 }, (_, i) => ({ wallet: `0x${i.toString(16).padStart(4, '0')}`, score: BigInt(1000 - i) }));
        const ranked = rankCycle(scores);
        expect(ranked).toHaveLength(100);
        expect(ranked[99]).toMatchObject({ rank: 100, score: BigInt(901) });
    });

    it('counts only cycles closed at or after the launch', () => {
        const launch = at('12:00:00');
        expect(isCycleCounted(at('11:59:59'), launch)).toBe(false);
        expect(isCycleCounted(launch, launch)).toBe(true);
    });
});

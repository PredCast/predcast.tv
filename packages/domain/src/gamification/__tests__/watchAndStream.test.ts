import { describe, expect, it } from 'vitest';

import { StreamStatus } from '../../streams/entities/Stream';
import { evaluateStreamMinute, streamXpForSessionCount, type StreamMinuteInput } from '../policies/streamMinutePolicy';
import {
    evaluateWatchHeartbeat,
    leagueQualifiesAt,
    reachesOnboardingWatch,
    watchMinuteOf,
    watchXpForCounter,
    type WatchHeartbeat,
} from '../policies/watchPolicy';

const base: WatchHeartbeat = { accountId: 'viewer', eligibility: 'eligible', matchId: 7, matchStatus: 'NS', stream: null };
const liveStream = { status: StreamStatus.LIVE, matchId: 7, streamerAccountId: 'streamer' };

describe('evaluateWatchHeartbeat', () => {
    it('counts an in-play match, half-time included', () => {
        expect(evaluateWatchHeartbeat({ ...base, matchStatus: '1H' })).toEqual({ counted: true });
        expect(evaluateWatchHeartbeat({ ...base, matchStatus: 'HT' })).toEqual({ counted: true });
    });

    it('CA12 — a match not started without a live stream is not_live', () => {
        expect(evaluateWatchHeartbeat(base)).toEqual({ counted: false, reason: 'not_live' });
        expect(evaluateWatchHeartbeat({ ...base, matchStatus: 'FT' })).toEqual({ counted: false, reason: 'not_live' });
        expect(evaluateWatchHeartbeat({ ...base, matchStatus: 'PST' })).toEqual({ counted: false, reason: 'not_live' });
    });

    it('counts a live stream of this match before kick-off', () => {
        expect(evaluateWatchHeartbeat({ ...base, stream: liveStream })).toEqual({ counted: true });
        expect(evaluateWatchHeartbeat({ ...base, stream: { ...liveStream, status: StreamStatus.ENDED } }))
            .toEqual({ counted: false, reason: 'not_live' });
        expect(evaluateWatchHeartbeat({ ...base, stream: { ...liveStream, matchId: 8 } }))
            .toEqual({ counted: false, reason: 'not_live' });
    });

    it('refuses the viewer own stream and banned or suspended accounts (CA20)', () => {
        const own = { ...liveStream, streamerAccountId: 'viewer' };
        expect(evaluateWatchHeartbeat({ ...base, matchStatus: '2H', stream: own })).toEqual({ counted: false, reason: 'own_stream' });
        expect(evaluateWatchHeartbeat({ ...base, matchStatus: '2H', eligibility: 'banned' })).toEqual({ counted: false, reason: 'banned' });
        expect(evaluateWatchHeartbeat({ ...base, matchStatus: '2H', eligibility: 'suspended' }))
            .toEqual({ counted: false, reason: 'suspended' });
    });

    it('truncates to the minute', () => {
        expect(watchMinuteOf(new Date('2027-01-10T12:34:56.789Z')).toISOString()).toBe('2027-01-10T12:34:00.000Z');
    });
});

describe('watch XP and progress (CA12)', () => {
    it('credits 1 XP per 10 minutes up to 100 minutes, nothing at 110', () => {
        const credited = Array.from({ length: 120 }, (_, i) => watchXpForCounter(i + 1)).filter((c) => c.credit);
        expect(credited).toHaveLength(10);
        expect(watchXpForCounter(100)).toEqual({ credit: true, tranche: 10 });
        expect(watchXpForCounter(110)).toEqual({ credit: false });
        expect(watchXpForCounter(9)).toEqual({ credit: false });
    });

    it('adds a league at its 10th minute of the day and the onboarding step at 5 minutes', () => {
        expect([9, 10, 11].map(leagueQualifiesAt)).toEqual([false, true, false]);
        expect([4, 5].map(reachesOnboardingWatch)).toEqual([false, true]);
    });
});

describe('evaluateStreamMinute', () => {
    const minute = new Date('2027-01-10T20:00:00Z');
    const oldViewer = { accountId: 'v1', accountCreatedAt: new Date('2027-01-01T00:00:00Z'), banned: false };
    const input: StreamMinuteInput = {
        minute,
        sessionOpen: true,
        streamerAccountId: 'streamer',
        streamerEligibility: 'eligible',
        lifetimeCountedMinutes: 120,
        viewers: [],
    };

    it('exempts the first 60 lifetime minutes from the viewer rule', () => {
        expect(evaluateStreamMinute({ ...input, lifetimeCountedMinutes: 59 })).toEqual({ counted: true, exempt: true, viewerAccounts: 0 });
        expect(evaluateStreamMinute({ ...input, lifetimeCountedMinutes: 60 })).toEqual({ counted: false, reason: 'no_eligible_viewer' });
    });

    it('CA13 — counts with an eligible viewer of another account', () => {
        expect(evaluateStreamMinute({ ...input, viewers: [oldViewer] })).toEqual({ counted: true, exempt: false, viewerAccounts: 1 });
    });

    it('needs a viewer account created more than 24 h before the minute, not banned, not the streamer', () => {
        const young = { accountId: 'v2', accountCreatedAt: new Date('2027-01-09T20:00:00Z'), banned: false };
        const banned = { ...oldViewer, accountId: 'v3', banned: true };
        const self = { ...oldViewer, accountId: 'streamer' };
        expect(evaluateStreamMinute({ ...input, viewers: [young, banned, self] }))
            .toEqual({ counted: false, reason: 'no_eligible_viewer' });
        const justOld = { ...young, accountCreatedAt: new Date('2027-01-09T19:59:59Z') };
        expect(evaluateStreamMinute({ ...input, viewers: [justOld] })).toMatchObject({ counted: true });
    });

    it('refuses a closed session, a streamer without account and a banned or suspended streamer', () => {
        expect(evaluateStreamMinute({ ...input, sessionOpen: false })).toEqual({ counted: false, reason: 'session_closed' });
        expect(evaluateStreamMinute({ ...input, streamerAccountId: null })).toEqual({ counted: false, reason: 'no_account' });
        expect(evaluateStreamMinute({ ...input, streamerEligibility: 'banned', viewers: [oldViewer] }))
            .toEqual({ counted: false, reason: 'banned' });
        expect(evaluateStreamMinute({ ...input, streamerEligibility: 'suspended', lifetimeCountedMinutes: 0 }))
            .toEqual({ counted: false, reason: 'suspended' });
    });

    it('CA13 — 1 XP every 6th counted minute of the session: 10 XP per hour', () => {
        const credits = Array.from({ length: 60 }, (_, i) => streamXpForSessionCount(i + 1)).filter((c) => c.credit);
        expect(credits).toHaveLength(10);
        expect(streamXpForSessionCount(12)).toEqual({ credit: true, tranche: 2 });
        expect(streamXpForSessionCount(0)).toEqual({ credit: false });
    });
});

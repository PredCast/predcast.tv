import { describe, expect, it } from 'vitest';

import type { StreamViewer } from '@chiliztv/domain/gamification/policies/streamMinutePolicy';

import { accountFixture, GAMI_NOW, linkedWalletFixture } from '../../../../../testing/fixtures/gamification.fixtures';
import { buildStreamsHarness, type StreamsHarness } from '../../../../../testing/gamification/streamsHarness';

const STREAM = '00000000-0000-4000-8000-0000000005a1';
const MATCH = 999_501;
const minute = (offset: number) => new Date(GAMI_NOW.getTime() + offset * 60_000);
const oldViewer: StreamViewer = { accountId: 'viewer-old', accountCreatedAt: new Date('2026-01-01T00:00:00Z'), banned: false };

function setup(options: Parameters<typeof buildStreamsHarness>[0] = {}) {
    const h = buildStreamsHarness(options);
    const streamer = accountFixture();
    const wallet = linkedWalletFixture(streamer);
    h.addAccount(streamer, [wallet]);
    h.addStream({ id: STREAM, matchId: MATCH, streamerId: streamer.dynamicUserId, streamerWallet: wallet.walletAddress });
    return { h, streamerId: streamer.id, wallet: wallet.walletAddress };
}

/** A previous session of the streamer that already used up the 60-minute exemption. */
async function exhaustExemption(h: StreamsHarness, streamerId: string, wallet: string): Promise<void> {
    await h.sessions.open({ streamId: 'previous', accountId: streamerId, streamerWallet: wallet, matchId: MATCH, wentLiveAt: minute(-500) });
    const previous = h.sessions.sessions.get('previous');
    if (previous) h.sessions.sessions.set('previous', { ...previous, countedMinutes: 60, endedAt: minute(-400), minutesSettledAt: minute(-400) });
}

const xpOf = (h: StreamsHarness) => h.rowsOf('stream_time').reduce((sum, r) => sum + r.xp, 0);
const streamMinutes = async (h: StreamsHarness, accountId: string) =>
    (await h.store.progress.getSnapshot(accountId)).stream_minutes?.value ?? 0;

describe('GamificationStreamMinutes — sessions (D4)', () => {
    it('opens a session for a live stream and closes it at the stream end', async () => {
        const { h, streamerId } = setup();
        await h.streamMinutes.execute();
        expect(h.sessions.sessions.get(STREAM)).toMatchObject({ accountId: streamerId, wentLiveAt: GAMI_NOW, endedAt: null });

        await h.runMinutes(5);
        h.endStream(STREAM);
        await h.runMinutes(3);
        expect(h.sessions.sessions.get(STREAM)?.endedAt).toEqual(minute(5));
        expect(h.sessions.sessions.get(STREAM)?.minutesSettledAt).not.toBeNull();
    });

    it('writes sessions with the flag off but counts nothing, now or later', async () => {
        const { h, streamerId } = setup({ launch: { enabled: false } });
        await h.streamMinutes.execute();
        await h.runMinutes(10);
        const session = h.sessions.sessions.get(STREAM);
        expect(session?.accountId).toBe(streamerId);
        expect(session?.countedMinutes).toBe(0);
        expect(session?.lastProcessedMinute).toEqual(minute(8));
        expect(h.rowsOf('stream_time')).toHaveLength(0);
    });
});

describe('GamificationStreamMinutes — counted minutes (CA13)', () => {
    it('counts the first 60 lifetime minutes without viewer, then nothing without an eligible viewer', async () => {
        const { h, streamerId } = setup();
        await h.streamMinutes.execute();
        await h.runMinutes(72);
        expect(h.sessions.sessions.get(STREAM)?.countedMinutes).toBe(60);
        expect(xpOf(h)).toBe(10);
        expect(await streamMinutes(h, streamerId)).toBe(60);
        expect(h.store.achievements.filter((a) => a.accountId === streamerId).map((a) => `${a.achievementId}:${a.tier}`))
            .toContain('streamer_hours:1');
    });

    it('needs a viewer of another account, older than 24 h and not banned', async () => {
        const { h, streamerId, wallet } = setup();
        await exhaustExemption(h, streamerId, wallet);
        await h.streamMinutes.execute();
        const young: StreamViewer = { ...oldViewer, accountId: 'viewer-young', accountCreatedAt: minute(-23 * 60) };
        const banned: StreamViewer = { ...oldViewer, accountId: 'viewer-banned', banned: true };
        const self: StreamViewer = { ...oldViewer, accountId: streamerId };
        for (let m = 0; m < 6; m++) h.watchAt(STREAM, minute(m), [young, banned, self]);
        for (let m = 6; m < 12; m++) h.watchAt(STREAM, minute(m), [oldViewer]);
        await h.runMinutes(14);
        expect(h.sessions.sessions.get(STREAM)?.countedMinutes).toBe(6);
        expect(h.rowsOf('stream_time').map((r) => r.refKey)).toEqual([`stream_time:${STREAM}:1`]);
    });

    it('gives 10 XP per hour with an eligible viewer and 40 XP per Paris day at most', async () => {
        const { h, streamerId, wallet } = setup();
        await exhaustExemption(h, streamerId, wallet);
        await h.streamMinutes.execute();
        for (let m = 0; m < 300; m++) h.watchAt(STREAM, minute(m), [oldViewer]);
        await h.runMinutes(62);
        expect(xpOf(h)).toBe(10);
        h.clock.advanceByMin(240);
        await h.streamMinutes.execute();
        expect(h.sessions.sessions.get(STREAM)?.countedMinutes).toBe(300);
        expect(xpOf(h)).toBe(40);
        expect(h.rowsOf('stream_time').filter((r) => r.reason === 'daily_cap')).toHaveLength(10);
        expect(await streamMinutes(h, streamerId)).toBe(300);
    });

    it('counts nothing for a banned streamer', async () => {
        const { h, wallet } = setup();
        h.ban(wallet);
        await h.streamMinutes.execute();
        await h.runMinutes(20);
        expect(h.sessions.sessions.get(STREAM)?.countedMinutes).toBe(0);
        expect(h.rowsOf('stream_time')).toHaveLength(0);
    });

    it('replays processed minutes without a second row', async () => {
        const { h } = setup();
        await h.streamMinutes.execute();
        await h.runMinutes(20);
        const rows = h.store.rows.length;
        const session = h.sessions.sessions.get(STREAM);
        if (session) h.sessions.sessions.set(STREAM, { ...session, lastProcessedMinute: null });
        await h.streamMinutes.execute();
        expect(h.store.rows.length).toBe(rows);
        expect(h.sessions.sessions.get(STREAM)?.countedMinutes).toBe(19);
    });
});

describe('stop_stream moderation (CA13)', () => {
    it('reverses the session credits and its minutes, once, and stops counting', async () => {
        const { h, streamerId } = setup();
        await h.streamMinutes.execute();
        await h.runMinutes(32);
        expect(xpOf(h)).toBe(5);
        const before = h.store.profile(streamerId).xpTotal;

        h.source.stops.push({ actionId: 'action-1', streamId: STREAM, triggeredAt: h.clock.now() });
        await h.chain.execute();
        await h.chain.execute();

        expect(xpOf(h)).toBe(0);
        expect(h.rowsOf('stream_time').filter((r) => r.reason === 'stream_stopped')).toHaveLength(5);
        expect(h.store.profile(streamerId).xpTotal).toBe(before - 5);
        expect(await streamMinutes(h, streamerId)).toBe(0);
        expect(h.sessions.sessions.get(STREAM)?.moderatedAt).not.toBeNull();

        await h.runMinutes(10);
        expect(h.sessions.sessions.get(STREAM)?.countedMinutes).toBe(31);
        expect(xpOf(h)).toBe(0);
    });
});

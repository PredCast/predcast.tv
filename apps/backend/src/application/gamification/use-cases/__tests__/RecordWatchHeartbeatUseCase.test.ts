import { describe, expect, it } from 'vitest';

import { StreamStatus } from '@chiliztv/domain/streams/entities/Stream';

import {
    accountFixture,
    FIXTURE_CONTRACT,
    GAMI_LAUNCH_AT,
    GAMI_NOW,
    linkedWalletFixture,
} from '../../../../testing/fixtures/gamification.fixtures';
import { matchFixture } from '../../../../testing/fixtures/match.fixtures';
import { buildSourcesHarness } from '../../../../testing/gamification/sourcesHarness';

const visible = { bettingContractAddress: FIXTURE_CONTRACT, publishedAt: GAMI_LAUNCH_AT };

function setup(options: Parameters<typeof buildSourcesHarness>[0] = {}) {
    const h = buildSourcesHarness(options);
    const account = accountFixture();
    const wallet = linkedWalletFixture(account);
    h.addAccount(account, [wallet]);
    const live = matchFixture.firstHalf(visible);
    const upcoming = matchFixture.upcoming(visible);
    h.addMatch(live);
    h.addMatch(upcoming);
    return { h, account, accountId: account.id, wallet: wallet.walletAddress, liveId: live.getId(), upcomingId: upcoming.getId() };
}

describe('RecordWatchHeartbeatUseCase', () => {
    it('CA12 — two tabs count one minute; 100 minutes give 10 XP, the 110th none', async () => {
        const { h, accountId, liveId } = setup();
        const first = await h.watch.execute({ accountId, matchId: liveId, streamId: null });
        const secondTab = await h.watch.execute({ accountId, matchId: liveId, streamId: null });
        expect(first).toEqual({ counted: true, minutesToday: 1, xp: 0 });
        expect(secondTab).toEqual({ counted: false, reason: 'already_counted' });

        for (let minute = 2; minute <= 110; minute++) {
            h.clock.advanceByMin(1);
            await h.watch.execute({ accountId, matchId: liveId, streamId: null });
        }
        const watchRows = h.rowsOf('watch');
        expect(watchRows).toHaveLength(10);
        expect(watchRows.reduce((sum, r) => sum + r.xp, 0)).toBe(10);
        expect(watchRows.map((r) => r.refKey)).toContain(`watch:${accountId}:2027-03-01:10`);
        const snapshot = await h.store.progress.getSnapshot(accountId);
        expect(snapshot.watch_minutes?.value).toBe(110);
        expect(snapshot.leagues?.items).toEqual(['135']);
    });

    it('CA12 — a match not started without a live stream is not_live; a live stream of it counts', async () => {
        const { h, accountId, upcomingId } = setup();
        expect(await h.watch.execute({ accountId, matchId: upcomingId, streamId: null })).toEqual({ counted: false, reason: 'not_live' });

        h.addStream({ id: '11111111-1111-4111-8111-111111111111', matchId: upcomingId, streamerId: 'dyn-other', streamerWallet: '0x' + '9'.repeat(40) });
        const counted = await h.watch.execute({ accountId, matchId: upcomingId, streamId: '11111111-1111-4111-8111-111111111111' });
        expect(counted).toMatchObject({ counted: true, minutesToday: 1 });

        h.addStream({ id: '22222222-2222-4222-8222-222222222222', matchId: upcomingId, streamerId: 'dyn-x', status: StreamStatus.ENDED });
        h.clock.advanceByMin(1);
        expect(await h.watch.execute({ accountId, matchId: upcomingId, streamId: '22222222-2222-4222-8222-222222222222' }))
            .toEqual({ counted: false, reason: 'not_live' });
    });

    it('never counts one\'s own stream, by Dynamic id or by linked wallet', async () => {
        const { h, account, accountId, wallet, upcomingId } = setup();
        h.addStream({ id: '33333333-3333-4333-8333-333333333333', matchId: upcomingId, streamerId: account.dynamicUserId });
        h.addStream({ id: '44444444-4444-4444-8444-444444444444', matchId: upcomingId, streamerId: 'dyn-legacy', streamerWallet: wallet });
        for (const streamId of ['33333333-3333-4333-8333-333333333333', '44444444-4444-4444-8444-444444444444']) {
            expect(await h.watch.execute({ accountId, matchId: upcomingId, streamId })).toEqual({ counted: false, reason: 'own_stream' });
        }
    });

    it('credits the watch first step at 5 minutes, once', async () => {
        const { h, accountId, liveId } = setup();
        for (let minute = 1; minute <= 12; minute++) {
            await h.watch.execute({ accountId, matchId: liveId, streamId: null });
            h.clock.advanceByMin(1);
        }
        const steps = h.rowsOf('onboarding_step');
        expect(steps.map((r) => r.refKey)).toEqual([`onboarding:${accountId}:watch`]);
        expect(steps[0].xp).toBe(5);
    });

    it('CA19 — nothing is counted while disabled or before the launch', async () => {
        const disabled = setup({ launch: { enabled: false } });
        expect(await disabled.h.watch.execute({ accountId: disabled.accountId, matchId: disabled.liveId, streamId: null }))
            .toEqual({ counted: false, reason: 'disabled' });
        const early = setup({ launch: { launchAt: new Date(GAMI_NOW.getTime() + 3_600_000) } });
        expect(await early.h.watch.execute({ accountId: early.accountId, matchId: early.liveId, streamId: null }))
            .toEqual({ counted: false, reason: 'not_launched' });
        expect(early.h.watchMinutes.minutes.size).toBe(0);
    });

    it('CA20 — a ban on any linked wallet counts no minute', async () => {
        const { h, accountId, wallet, liveId } = setup();
        h.ban(wallet);
        expect(await h.watch.execute({ accountId, matchId: liveId, streamId: null })).toEqual({ counted: false, reason: 'banned' });
        expect(h.watchMinutes.minutes.size).toBe(0);
    });

    it('rejects a heartbeat loop past 4 calls per minute', async () => {
        const { h, accountId, liveId } = setup();
        for (let i = 0; i < 4; i++) await h.watch.execute({ accountId, matchId: liveId, streamId: null });
        expect(await h.watch.execute({ accountId, matchId: liveId, streamId: null })).toEqual({ counted: false, reason: 'rate_limited' });
    });
});

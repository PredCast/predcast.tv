import { describe, expect, it } from 'vitest';

import { ownedFrames } from '@chiliztv/domain/gamification/policies/cosmetics';

import { GamificationCycleSnapshotJob } from '../../../../../infrastructure/scheduling/jobs/GamificationCycleSnapshotJob';
import { accountFixture, GAMI_LAUNCH_AT, GAMI_NOW, linkedWalletFixture } from '../../../../../testing/fixtures/gamification.fixtures';
import { buildStreamsHarness, type StreamsHarness } from '../../../../../testing/gamification/streamsHarness';

const hoursAgo = (h: number) => new Date(GAMI_NOW.getTime() - h * 3_600_000);

function setup() {
    const h = buildStreamsHarness();
    const accounts = ['a', 'b', 'c'].map((name) => {
        const account = accountFixture();
        const wallet = linkedWalletFixture(account);
        h.addAccount(account, [wallet]);
        return { name, id: account.id, wallet: wallet.walletAddress };
    });
    const [a, b, c] = accounts;
    return { h, a, b, c };
}

function closeCycle(h: StreamsHarness, cycleId: number, closedAt: Date, scores: ReadonlyArray<[string, number]>): void {
    h.cycles.closed.push({ cycleId, closedAt });
    h.cycles.scores.set(cycleId, scores.map(([wallet, score]) => ({ wallet, score: BigInt(score) })));
}

const tiersOf = (h: StreamsHarness, accountId: string) =>
    h.store.achievements.filter((x) => x.accountId === accountId && x.achievementId === 'leaderboard').map((x) => x.tier).sort();
const leaderboardXp = (h: StreamsHarness, accountId: string) =>
    h.rowsOf('achievement').filter((r) => r.accountId === accountId && r.metadata.achievementId === 'leaderboard')
        .reduce((sum, r) => sum + r.xp, 0);

async function framesOf(h: StreamsHarness, accountId: string) {
    const [best, crown, unlocked] = await Promise.all([
        h.store.cycleRanks.findBestRankForAccount(accountId),
        h.store.cycleRanks.findCrownHolder(),
        h.store.progress.listAchievements(accountId),
    ]);
    return ownedFrames({
        level: 1, peakLevel: 1, unlocked,
        bestCycleRank: best?.rank ?? null, isCrownHolder: crown?.accountId === accountId,
    });
}

describe('SnapshotCycleRanksUseCase (G11, CA21)', () => {
    it('freezes the top of a cycle closed after the launch, skips the older one and zero scores', async () => {
        const { h, a, b, c } = setup();
        closeCycle(h, 6, new Date(GAMI_LAUNCH_AT.getTime() - 1), [[a.wallet, 500]]);
        closeCycle(h, 7, hoursAgo(1), [[b.wallet, 40], [a.wallet, 90], [c.wallet, 0]]);
        const report = await h.snapshot.execute();
        expect(report).toMatchObject({ status: 'done', cycles: [7], ranks: 2 });
        expect(h.store.cycleRankRows.map((r) => [r.cycleId, r.accountId, r.rank])).toEqual([[7, a.id, 1], [7, b.id, 2]]);
        expect(tiersOf(h, a.id)).toEqual([1, 2, 3, 4, 5]);
        expect(leaderboardXp(h, a.id)).toBe(10 + 25 + 50 + 100 + 200);
        expect(h.store.achievements.find((x) => x.accountId === a.id && x.tier === 5)?.context).toEqual({ cycleId: 7, rank: 1 });
        expect(await framesOf(h, a.id)).toEqual(expect.arrayContaining(['frame.podium.gold', 'frame.crown']));
        expect(await framesOf(h, b.id)).toEqual(expect.arrayContaining(['frame.podium.silver']));
    });

    it('a replayed snapshot (cursor reset) writes no row and pays no XP twice', async () => {
        const { h, a } = setup();
        closeCycle(h, 7, hoursAgo(1), [[a.wallet, 90]]);
        await h.snapshot.execute();
        const rows = h.store.rows.length;
        h.cursors.positions.delete('cycles');
        await h.snapshot.execute();
        expect(h.store.cycleRankRows).toHaveLength(1);
        expect(h.store.rows.length).toBe(rows);
    });

    it('hands the Crown to the next cycle winner and pays tier XP once for life', async () => {
        const { h, a, b } = setup();
        closeCycle(h, 7, hoursAgo(3), [[a.wallet, 90], [b.wallet, 10]]);
        await h.snapshot.execute();
        closeCycle(h, 8, hoursAgo(2), [[b.wallet, 70], [a.wallet, 20]]);
        await h.snapshot.execute();
        expect((await h.store.cycleRanks.findCrownHolder())?.accountId).toBe(b.id);
        expect(await framesOf(h, a.id)).not.toContain('frame.crown');
        expect(await framesOf(h, a.id)).toContain('frame.podium.gold');

        closeCycle(h, 9, hoursAgo(1), [[a.wallet, 30]]);
        await h.snapshot.execute();
        expect((await h.store.cycleRanks.findCrownHolder())?.accountId).toBe(a.id);
        expect(h.rowsOf('achievement').filter((r) => r.refKey === `achievement:${a.id}:leaderboard:5`)).toHaveLength(1);
        expect(leaderboardXp(h, a.id)).toBe(385);
        expect(leaderboardXp(h, b.id)).toBe(385);
    });

    it('an empty cycle ends the Crown', async () => {
        const { h, a } = setup();
        closeCycle(h, 7, hoursAgo(2), [[a.wallet, 90]]);
        closeCycle(h, 8, hoursAgo(1), []);
        await h.snapshot.execute();
        expect(await h.store.cycleRanks.findCrownHolder()).toEqual({ cycleId: 8, accountId: null });
    });

    it('a banned account or a wallet linked after the close keeps the rank but earns nothing', async () => {
        const { h, a, b } = setup();
        h.ban(a.wallet);
        const late = accountFixture();
        const lateWallet = linkedWalletFixture(late, { linkedAt: GAMI_NOW });
        h.addAccount(late, [lateWallet]);
        closeCycle(h, 7, hoursAgo(1), [[a.wallet, 90], [lateWallet.walletAddress, 50], [b.wallet, 10]]);
        await h.snapshot.execute();
        expect(h.store.cycleRankRows.map((r) => [r.rank, r.accountId])).toEqual([[1, null], [2, null], [3, b.id]]);
        expect(tiersOf(h, a.id)).toEqual([]);
        expect((await h.store.cycleRanks.findCrownHolder())?.accountId).toBeNull();
        expect(tiersOf(h, b.id)).toEqual([1, 2, 3, 4]);
    });

    it('CA21 — an epoch indexed a minute ago is frozen by the next hourly run, not at the 30-day boundary', async () => {
        const { h, a } = setup();
        expect(new GamificationCycleSnapshotJob(h.snapshot).getSchedule()).toBe('15 * * * *');
        closeCycle(h, 7, new Date(GAMI_NOW.getTime() - 60_000), [[a.wallet, 90]]);
        expect(await h.snapshot.execute()).toMatchObject({ status: 'done', cycles: [7] });
    });

    it('does nothing with the flag off', async () => {
        const off = buildStreamsHarness({ launch: { enabled: false } });
        off.cycles.closed.push({ cycleId: 7, closedAt: hoursAgo(1) });
        expect(await off.snapshot.execute()).toEqual({ status: 'skipped', reason: 'disabled' });
    });
});

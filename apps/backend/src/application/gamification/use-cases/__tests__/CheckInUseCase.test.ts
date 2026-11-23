import { describe, expect, it } from 'vitest';

import {
    accountFixture,
    doubleXpEventFixture,
    GAMI_LAUNCH_AT,
    linkedWalletFixture,
    streakFixture,
} from '../../../../testing/fixtures/gamification.fixtures';
import { buildGamificationHarness, type GamificationHarness } from '../../../../testing/gamification/gamificationHarness';

const DAY_MS = 86_400_000;

function setup(options: Parameters<typeof buildGamificationHarness>[0] = {}) {
    const h = buildGamificationHarness(options);
    const account = accountFixture();
    const wallet = linkedWalletFixture(account);
    h.addAccount(account, [wallet]);
    return { h, accountId: account.id, wallet: wallet.walletAddress };
}

/** Check-in at an exact instant (each call lands in a fresh rate-limit window). */
async function checkInAt(h: GamificationHarness, accountId: string, iso: string) {
    h.clock.set(new Date(iso));
    return h.checkIn.execute(accountId);
}

describe('CheckInUseCase', () => {
    it('CA2 · first check-in of the Paris day earns 50 XP, the second is refused without changing totals', async () => {
        const { h, accountId } = setup();
        const first = await h.checkIn.execute(accountId);
        expect(first).toEqual({
            credited: true, day: '2027-03-01', xp: 50, multiplier: 1, streak: 1,
            freezeUsed: 0, freezeEarned: false, level: 1, leveledUp: false,
        });
        h.advanceMinutes(5);
        expect(await h.checkIn.execute(accountId)).toEqual({ credited: false, day: '2027-03-01', reason: 'already_checked_in' });
        expect(h.store.rows).toHaveLength(1);
        expect(h.store.profile(accountId).xpTotal).toBe(50);
    });

    it('CA2 · two simultaneous calls create a single ledger row (compare-and-set)', async () => {
        const { h, accountId } = setup();
        h.rateLimit.open = true;
        const results = await Promise.all([h.checkIn.execute(accountId), h.checkIn.execute(accountId)]);
        expect(results.filter((r) => r.credited)).toHaveLength(1);
        expect(results.find((r) => !r.credited)).toMatchObject({ reason: 'already_checked_in' });
        expect(h.store.rows.map((r) => r.refKey)).toEqual([`check_in:${accountId}:2027-03-01`]);
        expect(h.store.profile(accountId)).toMatchObject({ xpTotal: 50, streak: { current: 1, lastDay: '2027-03-01' } });
    });

    it('processes one call per minute and account, whatever RATE_LIMIT_DISABLED says', async () => {
        const { h, accountId } = setup();
        await h.checkIn.execute(accountId);
        h.clock.advanceBySec(30);
        expect(await h.checkIn.execute(accountId)).toMatchObject({ credited: false, reason: 'rate_limited' });
        h.clock.advanceBySec(31);
        expect(await h.checkIn.execute(accountId)).toMatchObject({ credited: false, reason: 'already_checked_in' });
    });

    it('CA3 · day 11 and 12 earn 100 XP; a freeze on day 7 and 14, none past the stock of 2 on day 21', async () => {
        const { h, accountId } = setup();
        const results = [];
        for (let d = 0; d < 21; d++) {
            results.push(await checkInAt(h, accountId, new Date(Date.parse('2027-03-01T09:00:00Z') + d * DAY_MS).toISOString()));
        }
        const xp = results.map((r) => (r.credited ? r.xp : null));
        expect(xp.slice(0, 12)).toEqual([50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 100]);
        const earned = results.flatMap((r, i) => (r.credited && r.freezeEarned ? [i + 1] : []));
        expect(earned).toEqual([7, 14]);
        expect(h.store.profile(accountId).streak).toEqual({ current: 21, best: 21, lastDay: '2027-03-21', freezes: 2 });
        const kinds = h.store.notificationRows.map((n) => n.payload.kind);
        expect(kinds.filter((k) => k === 'streak_freeze_earned')).toHaveLength(2);
        expect(kinds).not.toContain('streak_freeze_used');
    });

    it('CA4 · one missed day with one freeze keeps the streak and consumes the freeze (notified)', async () => {
        const { h, accountId } = setup();
        h.store.setProfile(accountId, { streak: streakFixture({ current: 12, lastDay: '2027-02-27', freezes: 1 }) });
        const r = await h.checkIn.execute(accountId);
        expect(r).toMatchObject({ credited: true, streak: 13, freezeUsed: 1, xp: 100 });
        expect(h.store.profile(accountId).streak.freezes).toBe(0);
        expect(h.store.notificationRows.map((n) => n.payload)).toContainEqual({ kind: 'streak_freeze_used', freezesUsed: 1 });
    });

    it('CA4 · two missed days with one freeze restart the streak and keep the freeze', async () => {
        const { h, accountId } = setup();
        h.store.setProfile(accountId, { streak: streakFixture({ current: 12, lastDay: '2027-02-26', freezes: 1 }) });
        const r = await h.checkIn.execute(accountId);
        expect(r).toMatchObject({ credited: true, streak: 1, freezeUsed: 0, xp: 50 });
        expect(h.store.profile(accountId).streak).toEqual({ current: 1, best: 12, lastDay: '2027-03-01', freezes: 1 });
        expect(h.store.notificationRows.map((n) => n.payload.kind)).not.toContain('streak_freeze_used');
    });

    it.each([
        ['midnight', ['2027-03-01T22:59:00Z', '2027-03-01T23:01:00Z'], ['2027-03-01', '2027-03-02']],
        ['spring DST (28/03/2027)', ['2027-03-27T22:59:00Z', '2027-03-27T23:01:00Z', '2027-03-28T21:59:00Z', '2027-03-28T22:01:00Z'],
            ['2027-03-27', '2027-03-28', '2027-03-28', '2027-03-29']],
        ['autumn DST (31/10/2027)', ['2027-10-30T21:59:00Z', '2027-10-30T22:01:00Z', '2027-10-31T22:59:00Z', '2027-10-31T23:01:00Z'],
            ['2027-10-30', '2027-10-31', '2027-10-31', '2027-11-01']],
    ])('CA5 · 23:59 then 00:01 Paris are two days around %s', async (_label, instants, days) => {
        const { h, accountId } = setup();
        const results = [];
        for (const iso of instants) results.push(await checkInAt(h, accountId, iso));
        expect(results.map((r) => r.day)).toEqual(days);
        const credited = results.filter((r) => r.credited);
        expect(credited).toHaveLength(new Set(days).size);
        expect(h.store.profile(accountId).streak.current).toBe(new Set(days).size);
    });

    it('applies the double XP multiplier after the cap: day 11 at ×2 earns 200 XP', async () => {
        const { h, accountId } = setup();
        h.store.setProfile(accountId, { streak: streakFixture({ current: 10, lastDay: '2027-02-28' }) });
        const event = doubleXpEventFixture();
        h.store.events = [event];
        const r = await h.checkIn.execute(accountId);
        expect(r).toMatchObject({ credited: true, xp: 200, multiplier: 2, streak: 11 });
        expect(h.store.rows[0]).toMatchObject({ baseXp: 100, xp: 200, doubleXpEventId: event.id });
    });

    it('CA17 · a level-up notifies once; a drop and a re-climb to the same level notify nothing', async () => {
        const { h, accountId } = setup();
        await checkInAt(h, accountId, '2027-03-01T09:00:00Z');
        const second = await checkInAt(h, accountId, '2027-03-02T09:00:00Z');
        expect(second).toMatchObject({ credited: true, level: 2, leveledUp: true });
        const levelUps = () => h.store.notificationRows.filter((n) => n.payload.kind === 'level_up');
        expect(levelUps().map((n) => n.payload)).toEqual([{ kind: 'level_up', level: 2 }]);

        await h.adjustXp.execute({
            actorWallet: '0x' + 'ad'.repeat(20), actorRole: 'admin', accountId, xp: -60, note: 'drop test',
            adjustmentId: '00000000-0000-4000-8000-000000000001',
        });
        expect(h.store.profile(accountId)).toMatchObject({ level: 1, levelPeak: 2 });
        const third = await checkInAt(h, accountId, '2027-03-03T09:00:00Z');
        expect(third).toMatchObject({ credited: true, level: 2, leveledUp: false });
        expect(levelUps()).toHaveLength(1);
    });

    it('CA19 · nothing before GAMIFICATION_LAUNCH_AT, nothing when the flag is off', async () => {
        const early = setup({ now: new Date(GAMI_LAUNCH_AT.getTime() - 60_000) });
        expect(await early.h.checkIn.execute(early.accountId)).toMatchObject({ credited: false, reason: 'not_launched' });
        const unset = setup({ launch: { launchAt: null } });
        expect(await unset.h.checkIn.execute(unset.accountId)).toMatchObject({ credited: false, reason: 'not_launched' });
        const off = setup({ launch: { enabled: false } });
        expect(await off.h.checkIn.execute(off.accountId)).toMatchObject({ credited: false, reason: 'disabled' });
        expect([...early.h.store.rows, ...unset.h.store.rows, ...off.h.store.rows]).toHaveLength(0);
    });

    it('CA20 · a ban on any linked wallet refuses the check-in and leaves the streak alone', async () => {
        const { h, accountId, wallet } = setup();
        h.store.setProfile(accountId, { streak: streakFixture({ current: 4, lastDay: '2027-02-28' }) });
        h.ban(wallet);
        expect(await h.checkIn.execute(accountId)).toMatchObject({ credited: false, reason: 'banned' });
        expect(h.store.rows).toHaveLength(0);
        expect(h.store.profile(accountId).streak).toMatchObject({ current: 4, lastDay: '2027-02-28' });

        h.unban(wallet);
        h.store.setProfile(accountId, { suspendedAt: h.clock.now(), suspendedReason: 'review' });
        h.advanceMinutes(2);
        expect(await h.checkIn.execute(accountId)).toMatchObject({ credited: false, reason: 'suspended' });
    });

    it('unlocks the Daily streak tier on day 3 and credits its XP', async () => {
        const { h, accountId } = setup();
        for (const iso of ['2027-03-01T09:00:00Z', '2027-03-02T09:00:00Z', '2027-03-03T09:00:00Z']) {
            await checkInAt(h, accountId, iso);
        }
        expect(h.store.achievements.map((a) => `${a.achievementId}:${a.tier}`)).toEqual(['daily_streak:1']);
        expect(h.store.rows.map((r) => `${r.source}:${r.xp}`)).toEqual(['check_in:50', 'check_in:55', 'check_in:60', 'achievement:10']);
        expect(h.store.profile(accountId).xpTotal).toBe(h.store.sumXp(accountId));
    });
});

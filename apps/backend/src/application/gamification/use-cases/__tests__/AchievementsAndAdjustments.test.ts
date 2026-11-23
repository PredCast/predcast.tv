import { describe, expect, it } from 'vitest';

import { accountFixture, GAMI_LAUNCH_AT, linkedWalletFixture } from '../../../../testing/fixtures/gamification.fixtures';
import { buildGamificationHarness } from '../../../../testing/gamification/gamificationHarness';

const ADMIN = { actorWallet: '0x' + 'ad'.repeat(20), actorRole: 'super_admin' };
const DAY_MS = 86_400_000;

function setup(options: Parameters<typeof buildGamificationHarness>[0] = {}) {
    const h = buildGamificationHarness(options);
    const account = accountFixture();
    const wallet = linkedWalletFixture(account);
    h.addAccount(account, [wallet]);
    return { h, accountId: account.id, wallet: wallet.walletAddress };
}

const adjustment = (n: number) => `00000000-0000-4000-9000-${n.toString().padStart(12, '0')}`;

describe('EvaluateAchievementsUseCase', () => {
    it('unlocks several tiers at once, notifies each and credits their XP once', async () => {
        const { h, accountId } = setup();
        h.store.progressMap.set(accountId, new Map([['chat_messages', { value: 600, items: [] }]]));
        const unlocked = await h.evaluate.execute(accountId, h.clock.now());
        expect(unlocked.map((u) => `${u.achievementId}:${u.tier}:${u.xp}`)).toEqual(['chatter:1:10', 'chatter:2:25', 'chatter:3:50']);
        expect(h.store.notificationRows.filter((n) => n.payload.kind === 'achievement')).toHaveLength(3);
        expect(h.store.profile(accountId).xpTotal).toBe(85);
        expect(await h.evaluate.execute(accountId, h.clock.now())).toEqual([]);
        expect(h.store.rows).toHaveLength(3);
    });

    it('re-evaluates Founder after a level-up caused by tier XP', async () => {
        const { h, accountId } = setup();
        await h.adjustXp.execute({ ...ADMIN, accountId, xp: 950, note: 'seed', adjustmentId: adjustment(1) });
        expect(h.store.profile(accountId).level).toBe(4);
        h.store.progressMap.set(accountId, new Map([['chat_messages', { value: 600, items: [] }]]));
        const unlocked = await h.evaluate.execute(accountId, h.clock.now());
        expect(unlocked.map((u) => u.achievementId)).toEqual(['chatter', 'chatter', 'chatter', 'founder']);
        expect(h.store.profile(accountId).level).toBe(5);
    });

    it('does not grant Founder after the 60-day window', async () => {
        const { h, accountId } = setup({ now: new Date(GAMI_LAUNCH_AT.getTime() + 61 * DAY_MS) });
        await h.adjustXp.execute({ ...ADMIN, accountId, xp: 1000, note: 'late', adjustmentId: adjustment(2) });
        expect(await h.evaluate.execute(accountId, h.clock.now())).toEqual([]);
    });
});

describe('AdjustXpUseCase', () => {
    it('writes an audited admin_adjustment, ignores bans and is idempotent on the adjustment id', async () => {
        const { h, accountId, wallet } = setup();
        h.ban(wallet);
        const cmd = { ...ADMIN, accountId, xp: 120, note: 'compensation', adjustmentId: adjustment(3) };
        expect(await h.adjustXp.execute(cmd)).toMatchObject({ status: 'credited', xp: 120, newLevel: 2 });
        expect(await h.adjustXp.execute(cmd)).toMatchObject({ status: 'duplicate' });
        expect(h.store.rows).toEqual([expect.objectContaining({ source: 'admin_adjustment', refKey: `admin:${adjustment(3)}`, xp: 120 })]);
        expect(h.audits).toEqual([
            expect.objectContaining({ action: 'gamification.xp.adjust', targetType: 'account', targetId: accountId }),
        ]);
    });

    it('clamps a negative adjustment so the total never goes below zero', async () => {
        const { h, accountId } = setup();
        await h.adjustXp.execute({ ...ADMIN, accountId, xp: 30, note: 'seed', adjustmentId: adjustment(4) });
        expect(await h.adjustXp.execute({ ...ADMIN, accountId, xp: -100, note: 'fix', adjustmentId: adjustment(5) })).toMatchObject({ xp: -30 });
        expect(h.store.profile(accountId).xpTotal).toBe(0);
    });

    it('rejects a zero, fractional or oversized amount, a missing note and an unknown account', async () => {
        const { h, accountId } = setup();
        const base = { ...ADMIN, accountId, note: 'ok note', adjustmentId: adjustment(6) };
        for (const xp of [0, 1.5, 100_001]) await expect(h.adjustXp.execute({ ...base, xp })).rejects.toThrow(/non-zero integer/);
        await expect(h.adjustXp.execute({ ...base, xp: 5, note: ' ' })).rejects.toThrow(/note/);
        await expect(h.adjustXp.execute({ ...base, xp: 5, accountId: adjustment(99) })).rejects.toThrow(/not found/i);
    });
});

describe('RebuildProfilesUseCase', () => {
    it('finds no drift after credits, repairs a tampered total and is idempotent', async () => {
        const { h, accountId } = setup();
        await h.adjustXp.execute({ ...ADMIN, accountId, xp: 50, note: 'seed', adjustmentId: adjustment(7) });
        await h.adjustXp.execute({ ...ADMIN, accountId, xp: 200, note: 'seed', adjustmentId: adjustment(8) });
        expect(await h.rebuild.execute(true)).toEqual([]);

        h.store.setProfile(accountId, { xpTotal: 9999, level: 14, levelPeak: 14 });
        expect(await h.rebuild.execute(false)).toEqual([
            { accountId, storedTotal: 9999, ledgerTotal: 250, storedLevel: 14, ledgerLevel: 2 },
        ]);
        expect(h.store.profile(accountId).xpTotal).toBe(9999);
        await h.rebuild.execute(true);
        expect(h.store.profile(accountId)).toMatchObject({ xpTotal: 250, level: 2, levelPeak: 14 });
        expect(await h.rebuild.execute(true)).toEqual([]);
    });
});

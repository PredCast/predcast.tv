import { describe, expect, it } from 'vitest';

import type { UnlockedAchievement } from '@chiliztv/domain/gamification/entities/Progress';
import { xpForLevel } from '@chiliztv/domain/gamification/policies/levelCurve';
import { ProfileBadgesBodySchema } from '@chiliztv/shared';

import { accountFixture, doubleXpEventFixture, GAMI_NOW, linkedWalletFixture, streakFixture } from '../../../../testing/fixtures/gamification.fixtures';
import { buildGamificationReadHarness, type GamificationReadHarness } from '../../../../testing/gamification/gamificationReadHarness';
import { gamificationCacheKeys } from '../../cache/gamificationCacheKeys';

const WALLET_A = '0x' + 'a1'.repeat(20);
const WALLET_A2 = '0x' + 'a2'.repeat(20);
const WALLET_B = '0x' + 'b1'.repeat(20);
const STRANGER = '0x' + 'c1'.repeat(20);

const unlock = (accountId: string, achievementId: UnlockedAchievement['achievementId'], tier: number): UnlockedAchievement => ({
    accountId, achievementId, tier, unlockedAt: GAMI_NOW, context: {},
});

/** Captain 27 with two wallets, a Bet Volume tier and public tiers; a level-9 player with no account link to WALLET_B's second wallet. */
function seed(h: GamificationReadHarness) {
    const captain = accountFixture({ primaryWallet: WALLET_A });
    h.addAccount(captain, [
        linkedWalletFixture(captain, { walletAddress: WALLET_A }),
        linkedWalletFixture(captain, { walletAddress: WALLET_A2 }),
    ], 'VALOU_92');
    h.store.setProfile(captain.id, {
        xpTotal: xpForLevel(27) + 1320, level: 27, levelPeak: 27,
        streak: streakFixture({ current: 61, best: 88, lastDay: '2027-03-01', freezes: 1 }),
    });
    h.store.achievements.push(
        unlock(captain.id, 'versatility', 4), unlock(captain.id, 'spectator', 3), unlock(captain.id, 'bet_volume', 3),
        unlock(captain.id, 'daily_streak', 2),
    );
    h.store.progressMap.set(captain.id, new Map([['bet_volume_usdc', { value: 1200, items: [] }]]));

    const starter = accountFixture({ primaryWallet: WALLET_B });
    h.addAccount(starter, [linkedWalletFixture(starter, { walletAddress: WALLET_B })], 'NINO_FC');
    h.store.setProfile(starter.id, { xpTotal: xpForLevel(9) + 300, level: 9, levelPeak: 9 });
    h.store.achievements.push(unlock(starter.id, 'winning_bets', 2), unlock(starter.id, 'bet_volume', 1));
    return { captain, starter };
}

describe('POST /gamification/cards/badges', () => {
    it('answers one batch from one source load, then from the cache', async () => {
        const h = buildGamificationReadHarness();
        seed(h);
        const first = await h.badges.execute({ wallets: [WALLET_A, WALLET_B.toUpperCase().replace('0X', '0x'), STRANGER], ip: '1.1.1.1' });
        expect(Object.keys(first.badges).sort()).toEqual([WALLET_A, WALLET_B].sort());
        expect(first.badges[WALLET_A]).toMatchObject({ level: 27, rankTier: 'captain', frameId: 'frame.rank.captain' });
        expect(first.badges[WALLET_B]).toMatchObject({ level: 9, rankTier: 'starter' });
        expect(h.loads).toHaveLength(1);

        const second = await h.badges.execute({ wallets: [WALLET_A, WALLET_B, STRANGER], ip: '1.1.1.1' });
        expect(second).toEqual(first);
        expect(h.loads).toHaveLength(1);
    });

    it('limits each IP to 60 calls a minute', async () => {
        const h = buildGamificationReadHarness();
        seed(h);
        for (let i = 0; i < 60; i++) await h.badges.execute({ wallets: [WALLET_A], ip: '2.2.2.2' });
        await expect(h.badges.execute({ wallets: [WALLET_A], ip: '2.2.2.2' })).rejects.toMatchObject({ statusCode: 429 });
        await expect(h.badges.execute({ wallets: [WALLET_A], ip: '3.3.3.3' })).resolves.toBeDefined();
    });

    it('accepts at most 100 wallets', () => {
        const wallets = Array.from({ length: 101 }, (_, i) => '0x' + i.toString(16).padStart(40, '0'));
        expect(ProfileBadgesBodySchema.safeParse({ wallets }).success).toBe(false);
        expect(ProfileBadgesBodySchema.safeParse({ wallets: wallets.slice(0, 100) }).success).toBe(true);
    });

    it('says nothing while the flag is off or before launch', async () => {
        const off = buildGamificationReadHarness({ launch: { enabled: false } });
        seed(off);
        expect(await off.badges.execute({ wallets: [WALLET_A], ip: 'x' })).toEqual({ badges: {} });
        const early = buildGamificationReadHarness({ launch: { launchAt: new Date(GAMI_NOW.getTime() + 60_000) } });
        seed(early);
        expect(await early.badges.execute({ wallets: [WALLET_A], ip: 'x' })).toEqual({ badges: {} });
        await expect(early.card.execute(WALLET_A)).rejects.toMatchObject({ statusCode: 404 });
        expect(await early.doubleXp.execute()).toBeNull();
    });
});

describe('GET /gamification/cards/:wallet and /profiles/:wallet', () => {
    it('returns the hover card, 404 for a wallet without account', async () => {
        const h = buildGamificationReadHarness();
        seed(h);
        const card = await h.card.execute(WALLET_A.toUpperCase().replace('0X', '0x'));
        expect(card).toMatchObject({
            wallet: WALLET_A, displayName: 'VALOU_92', level: 27, showcaseSlots: 3,
            streak: { current: 61, best: 88, alive: true },
            xp: { total: xpForLevel(27) + 1320, levelStart: xpForLevel(27), nextLevelAt: xpForLevel(28) },
        });
        expect(card.showcase.map((s) => s.achievementId)).not.toContain('bet_volume');
        await expect(h.card.execute(STRANGER)).rejects.toMatchObject({ statusCode: 404 });
    });

    it('lists public achievements only and never the other wallets of the account', async () => {
        const h = buildGamificationReadHarness();
        seed(h);
        const profile = await h.profile.execute(WALLET_A);
        expect(profile.achievements.map((a) => a.achievementId)).toEqual(['daily_streak', 'versatility', 'spectator']);
        const json = JSON.stringify(profile);
        expect(json).not.toContain(WALLET_A2);
        expect(json).not.toContain('bet_volume');
    });
});

describe('GET /gamification/me', () => {
    it('adds private progress, freezes, today XP and unseen notifications', async () => {
        const h = buildGamificationReadHarness();
        const { captain } = seed(h);
        h.setTodayXp(captain.id, { check_in: 100, bet_volume: 40 });
        await h.store.notifications.create(captain.id, { kind: 'level_up', level: 27 }, GAMI_NOW);
        const me = await h.me.execute(captain.id, WALLET_A);
        expect(me.checkedInToday).toBe(true);
        expect(me.streakFreezes).toBe(1);
        expect(me.todayXpBySource).toEqual({ check_in: 100, bet_volume: 40 });
        expect(me.achievements.find((a) => a.achievementId === 'bet_volume')).toMatchObject({
            unlockedTier: 3, current: 1200, visibility: 'private',
        });
        expect(me.ownedTitleIds).toEqual(expect.arrayContaining(['encyclopedia', 'kop', 'regular']));
        expect(me.ownedFrameIds).toContain('frame.rank.captain');
        expect(me.unseenNotifications).toHaveLength(1);
    });

    it('acks notifications and refreshes the cached owner view', async () => {
        const h = buildGamificationReadHarness();
        const { captain } = seed(h);
        const n = await h.store.notifications.create(captain.id, { kind: 'level_up', level: 27 }, GAMI_NOW);
        expect((await h.me.execute(captain.id, WALLET_A)).unseenNotifications).toHaveLength(1);
        expect(await h.ack.execute(captain.id, [n.id, 999])).toEqual({ acked: 1 });
        expect((await h.me.execute(captain.id, WALLET_A)).unseenNotifications).toHaveLength(0);
    });

    it('carries the running double XP event', async () => {
        const h = buildGamificationReadHarness();
        const { captain } = seed(h);
        h.store.events = [doubleXpEventFixture()];
        expect((await h.me.execute(captain.id, WALLET_A)).activeDoubleXp).toMatchObject({ multiplier: 2, isActive: true });
        expect(await h.doubleXp.execute()).toMatchObject({ isActive: true, sources: ['check_in', 'watch', 'chat_message', 'stream_time'] });
    });
});

describe('PUT /gamification/me/cosmetics (CA16)', () => {
    it('refuses a title not owned with a typed 422', async () => {
        const h = buildGamificationReadHarness();
        const { captain } = seed(h);
        await expect(h.cosmetics.execute(captain.id, WALLET_A, { titleId: 'goleador', frameId: null, showcase: [] }))
            .rejects.toMatchObject({ statusCode: 422, code: 'COSMETIC_NOT_OWNED' });
    });

    it('refuses 3 showcase tiles at level 9 and a Bet Volume tile', async () => {
        const h = buildGamificationReadHarness();
        const { starter } = seed(h);
        h.store.achievements.push(unlock(starter.id, 'chatter', 1), unlock(starter.id, 'spectator', 1));
        await expect(h.cosmetics.execute(starter.id, WALLET_B, {
            titleId: null, frameId: null, showcase: ['winning_bets:2', 'chatter:1', 'spectator:1'],
        })).rejects.toMatchObject({ statusCode: 422, code: 'SHOWCASE_TOO_LONG' });
        await expect(h.cosmetics.execute(starter.id, WALLET_B, { titleId: null, frameId: null, showcase: ['bet_volume:1'] }))
            .rejects.toMatchObject({ statusCode: 422, code: 'COSMETIC_NOT_OWNED', details: { code: 'SHOWCASE_PRIVATE' } });
    });

    it('stores a valid selection and invalidates the card and badges of every linked wallet', async () => {
        const h = buildGamificationReadHarness();
        const { captain } = seed(h);
        expect((await h.card.execute(WALLET_A)).titleId).toBeNull();
        await h.badges.execute({ wallets: [WALLET_A2], ip: 'y' });

        const me = await h.cosmetics.execute(captain.id, WALLET_A, {
            titleId: 'encyclopedia', frameId: 'frame.rank.starter', showcase: ['spectator:3'],
        });
        expect(me).toMatchObject({ titleId: 'encyclopedia', frameId: 'frame.rank.starter' });
        expect(h.cache.deletedKeys).toEqual(expect.arrayContaining([
            gamificationCacheKeys.card(WALLET_A), gamificationCacheKeys.badge(WALLET_A2), gamificationCacheKeys.me(captain.id),
        ]));
        const card = await h.card.execute(WALLET_A);
        expect(card.titleId).toBe('encyclopedia');
        expect(card.showcase).toEqual([{ achievementId: 'spectator', tier: 3, context: null }]);
    });
});

describe('Crown', () => {
    it('shows the Crown frame and tag only while the account holds it', async () => {
        const h = buildGamificationReadHarness();
        const { captain } = seed(h);
        h.store.bestRank = 1;
        h.store.achievements.push(unlock(captain.id, 'leaderboard', 5));
        h.store.setProfile(captain.id, { selectedFrameId: 'frame.crown', selectedTitleId: 'cycle_champion' });
        h.setCrown(captain.id);
        const crowned = await h.card.execute(WALLET_A);
        expect(crowned).toMatchObject({ frameId: 'frame.crown', titleId: 'cycle_champion', titleCycleId: 1 });
        expect(crowned.tags).toContain('crown');
    });
});

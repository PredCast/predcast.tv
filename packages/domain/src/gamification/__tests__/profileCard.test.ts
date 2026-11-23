import { describe, expect, it } from 'vitest';

import type { GamificationProfile } from '../entities/GamificationProfile';
import type { UnlockedAchievement } from '../entities/Progress';
import { announcedDoubleXp } from '../policies/doubleXpAnnouncement';
import type { DoubleXpWindow } from '../policies/doubleXpPolicy';
import { xpForLevel } from '../policies/levelCurve';
import {
    buildProfileBadge,
    buildProfileCard,
    emptyProfile,
    publicAchievements,
    type ReadModelContext,
} from '../policies/profileCard';
import type { CardSource } from '../repositories/IGamificationReadRepository';

const NOW = new Date('2027-03-01T09:00:00.000Z');
const ACCOUNT = 'acc-1';

const unlock = (achievementId: UnlockedAchievement['achievementId'], tier: number, context = {}): UnlockedAchievement => ({
    accountId: ACCOUNT, achievementId, tier, unlockedAt: new Date('2027-02-10T10:00:00.000Z'), context,
});

const profile = (overrides: Partial<GamificationProfile> = {}): GamificationProfile => ({
    ...emptyProfile(ACCOUNT, NOW),
    xpTotal: xpForLevel(27) + 1320,
    level: 27,
    levelPeak: 27,
    streak: { current: 61, best: 88, lastDay: '2027-03-01', freezes: 1 },
    ...overrides,
});

const source = (overrides: Partial<CardSource> = {}): CardSource => ({
    wallet: '0x' + 'a'.repeat(40),
    accountId: ACCOUNT,
    accountCreatedAt: new Date('2026-12-01T00:00:00.000Z'),
    displayName: 'VALOU_92',
    avatarUrl: null,
    profile: null,
    unlocked: [],
    bestCycleRank: null,
    lastWonCycleId: null,
    streamMinutes: 0,
    ...overrides,
});

const ctx: ReadModelContext = { now: NOW, crownAccountId: null };

describe('profile card read model', () => {
    it('reads the mockup Captain card: XP bar, streak, rank frame, showcase from the best public tiers', () => {
        const src = source({ unlocked: [unlock('versatility', 4), unlock('spectator', 3), unlock('bet_volume', 6)] });
        const card = buildProfileCard(src, profile(), ctx);
        expect(card.rankTier).toBe('captain');
        expect(card.frameId).toBe('frame.rank.captain');
        expect(card.xp).toEqual({ total: xpForLevel(27) + 1320, levelStart: xpForLevel(27), nextLevelAt: xpForLevel(28) });
        expect(card.streak).toEqual({ current: 61, best: 88, alive: true });
        expect(card.showcaseSlots).toBe(3);
        expect(card.showcase.map((s) => s.achievementId)).toEqual(['versatility', 'spectator']);
        expect(card.streamedHours).toBeNull();
        expect(card.tags).toEqual([]);
    });

    it('never shows Bet Volume, even when stored in the showcase', () => {
        const src = source({ unlocked: [unlock('bet_volume', 2), unlock('chatter', 1)] });
        const card = buildProfileCard(src, profile({ showcase: ['bet_volume:2'] }), ctx);
        expect(card.showcase.map((s) => s.achievementId)).toEqual(['chatter']);
        expect(publicAchievements(src.unlocked).map((a) => a.achievementId)).toEqual(['chatter']);
    });

    it('drops a title that is no longer owned and keeps an owned one', () => {
        const src = source({ unlocked: [unlock('versatility', 4)] });
        expect(buildProfileBadge(src, profile({ selectedTitleId: 'encyclopedia' }), ctx).titleId).toBe('encyclopedia');
        expect(buildProfileBadge(src, profile({ selectedTitleId: 'goleador' }), ctx).titleId).toBeNull();
    });

    it('wears the Crown with its tag and the cycle of the champion title', () => {
        const src = source({
            unlocked: [unlock('leaderboard', 5, { cycleId: 31 })],
            bestCycleRank: 1,
            lastWonCycleId: 31,
        });
        const p = profile({ level: 52, levelPeak: 52, xpTotal: xpForLevel(52), selectedFrameId: 'frame.crown', selectedTitleId: 'cycle_champion' });
        const crowned = buildProfileCard(src, p, { now: NOW, crownAccountId: ACCOUNT });
        expect(crowned.frameId).toBe('frame.crown');
        expect(crowned.tags).toContain('crown');
        expect(crowned.titleCycleId).toBe(31);
        expect(crowned.showcase[0]).toEqual({ achievementId: 'leaderboard', tier: 5, context: { cycleId: 31 } });

        const expired = buildProfileBadge(src, p, ctx);
        expect(expired.frameId).toBe('frame.rank.legend');
        expect(expired.tags).not.toContain('crown');
    });

    it('tags new accounts for 14 days, streamers with whole streamed hours, founders', () => {
        const fresh = source({ accountCreatedAt: new Date('2027-02-20T00:00:00.000Z'), streamMinutes: 9150, unlocked: [unlock('founder', 1)] });
        const card = buildProfileCard(fresh, profile(), ctx);
        expect(card.tags).toEqual(['new', 'streamer', 'founder']);
        expect(card.streamedHours).toBe(152);
    });

    it('reads level 60 as max level and a broken streak as dead', () => {
        const p = profile({ level: 60, levelPeak: 60, xpTotal: 181_450, streak: { current: 9, best: 40, lastDay: '2027-02-20', freezes: 0 } });
        const card = buildProfileCard(source(), p, ctx);
        expect(card.xp.nextLevelAt).toBeNull();
        expect(card.rankTier).toBe('icon');
        expect(card.streak).toEqual({ current: 0, best: 40, alive: false });
    });
});

describe('double XP announcement', () => {
    const window = (start: string, hours: number, cancelledAt: Date | null = null): DoubleXpWindow => ({
        id: start, multiplier: 2, sources: ['check_in'], startsAt: new Date(start),
        endsAt: new Date(new Date(start).getTime() + hours * 3_600_000), cancelledAt,
    });

    it('prefers the running event, then the next one within 7 days', () => {
        const running = window('2027-03-01T08:00:00.000Z', 24);
        const soon = window('2027-03-05T08:00:00.000Z', 24);
        expect(announcedDoubleXp([soon, running], NOW)).toEqual({ event: running, isActive: true });
        expect(announcedDoubleXp([soon], NOW)).toEqual({ event: soon, isActive: false });
    });

    it('ignores cancelled events and events beyond the horizon', () => {
        const cancelled = window('2027-03-01T08:00:00.000Z', 24, new Date('2027-03-01T08:30:00.000Z'));
        const far = window('2027-03-20T08:00:00.000Z', 24);
        expect(announcedDoubleXp([cancelled, far], NOW)).toBeNull();
    });
});

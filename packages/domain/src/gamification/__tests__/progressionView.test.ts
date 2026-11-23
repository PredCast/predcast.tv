import { describe, expect, it } from 'vitest';

import { closestNextTiers, progressToNextTier, type FamilyProgress } from '../policies/progressionView';

const fam = (achievementId: string, current: number | null, nextThreshold: number | null, unlockedTier = 1): FamilyProgress => ({
    achievementId,
    unlockedTier,
    current,
    nextThreshold,
});

describe('progressToNextTier', () => {
    it('is the counter over the next threshold, capped at 1', () => {
        expect(progressToNextTier(fam('chatter', 412, 500))).toBeCloseTo(0.824);
        expect(progressToNextTier(fam('chatter', 600, 500))).toBe(1);
    });

    it('reads the leaderboard as a rank to climb', () => {
        expect(progressToNextTier(fam('leaderboard', 4, 3))).toBe(0.75);
        expect(progressToNextTier(fam('leaderboard', null, 100))).toBeNull();
    });

    it('is null for complete families and founder', () => {
        expect(progressToNextTier(fam('versatility', 9, null))).toBeNull();
        expect(progressToNextTier(fam('founder', null, null))).toBeNull();
    });
});

describe('closestNextTiers', () => {
    it('keeps the 3 families closest to their next tier', () => {
        const list = [
            fam('daily_streak', 88, 100),
            fam('winning_bets', 62, 150),
            fam('versatility', 9, null),
            fam('leaderboard', 4, 3),
            fam('spectator', 107, 150),
            fam('chatter', 412, 500),
        ];
        expect(closestNextTiers(list).map((p) => p.achievementId)).toEqual(['daily_streak', 'chatter', 'leaderboard']);
    });

    it('breaks ties in catalog order', () => {
        const list = [fam('globetrotter', 1, 2), fam('supporter', 1, 2)];
        expect(closestNextTiers(list, 1).map((p) => p.achievementId)).toEqual(['globetrotter']);
    });
});

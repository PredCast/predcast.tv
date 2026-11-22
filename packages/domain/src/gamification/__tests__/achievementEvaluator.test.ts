import { describe, expect, it } from 'vitest';

import { fullMarketCatalogSize } from '../catalog/achievements';
import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import {
    EMPTY_COUNTERS,
    describeAchievementProgress,
    evaluateAchievements,
    type AchievementCounters,
} from '../policies/achievementEvaluator';

const LAUNCH = new Date('2027-01-01T00:00:00Z');
const counters = (overrides: Partial<AchievementCounters>): AchievementCounters => ({ ...EMPTY_COUNTERS, ...overrides });
const ids = (unlocks: ReadonlyArray<{ achievementId: string; tier: number }>) => unlocks.map((u) => `${u.achievementId}:${u.tier}`);

describe('evaluateAchievements', () => {
    it('unlocks several tiers of one family at once', () => {
        const unlocks = evaluateAchievements(counters({ chatMessages: 600 }), [], null);
        expect(unlocks).toEqual([
            { achievementId: 'chatter', tier: 1, xp: 10, titleId: null, frameId: null },
            { achievementId: 'chatter', tier: 2, xp: 25, titleId: null, frameId: null },
            { achievementId: 'chatter', tier: 3, xp: 50, titleId: 'cheerleader', frameId: null },
        ]);
    });

    it('skips tiers already unlocked', () => {
        const unlocked = [{ achievementId: 'chatter' as const, tier: 1 }, { achievementId: 'chatter' as const, tier: 2 }];
        expect(ids(evaluateAchievements(counters({ chatMessages: 600 }), unlocked, null))).toEqual(['chatter:3']);
    });

    it('sets the Versatility full-catalog tier from the seeded markets', () => {
        const full = fullMarketCatalogSize();
        expect(ids(evaluateAchievements(counters({ marketKinds: full - 1 }), [], null)))
            .toEqual(['versatility:1', 'versatility:2', 'versatility:3']);
        expect(ids(evaluateAchievements(counters({ marketKinds: full }), [], null))).toContain('versatility:4');
    });

    it('compares hour families on whole hours of counted minutes', () => {
        expect(evaluateAchievements(counters({ watchMinutes: 59 }), [], null)).toEqual([]);
        expect(ids(evaluateAchievements(counters({ watchMinutes: 600, streamMinutes: 600 }), [], null)))
            .toEqual(['spectator:1', 'spectator:2', 'streamer_hours:1', 'streamer_hours:2']);
    });

    it('maps the best cycle rank to the leaderboard tiers', () => {
        expect(ids(evaluateAchievements(counters({ bestCycleRank: 3 }), [], null)))
            .toEqual(['leaderboard:1', 'leaderboard:2', 'leaderboard:3', 'leaderboard:4']);
        expect(ids(evaluateAchievements(counters({ bestCycleRank: 1 }), [], null))).toContain('leaderboard:5');
        expect(ids(evaluateAchievements(counters({ bestCycleRank: 101 }), [], null))).toEqual([]);
    });

    it('unlocks first_steps at 5 of the 6 steps', () => {
        expect(evaluateAchievements(counters({ firstSteps: 4 }), [], null)).toEqual([]);
        expect(evaluateAchievements(counters({ firstSteps: 5 }), [], null)).toEqual([
            { achievementId: 'first_steps', tier: 1, xp: 25, titleId: 'new_recruit', frameId: null },
        ]);
    });

    it('unlocks Founder at level 5 inside the 60-day window only, for 0 XP', () => {
        const inside = { level: 5, at: new Date('2027-02-15T00:00:00Z'), launchAt: LAUNCH };
        expect(evaluateAchievements(EMPTY_COUNTERS, [], inside)).toEqual([
            { achievementId: 'founder', tier: 1, xp: 0, titleId: 'founder', frameId: 'frame.founder' },
        ]);
        expect(evaluateAchievements(EMPTY_COUNTERS, [], { ...inside, level: 4 })).toEqual([]);
        expect(evaluateAchievements(EMPTY_COUNTERS, [], { ...inside, at: new Date('2027-03-02T00:00:00Z') })).toEqual([]);
    });
});

describe('evaluateAchievements — legal switches', () => {
    const all = counters({ betsWon: 10, betVolumeUsdc: 300, supportActions: 5, streakBest: 7, bestCycleRank: 10 });
    const run = (switches: LegalSwitches) => evaluateAchievements(all, [], null, switches);

    it('evaluates every family by default', () => {
        expect(ids(run(LEGAL_SWITCHES))).toEqual([
            'daily_streak:1', 'daily_streak:2', 'winning_bets:1', 'winning_bets:2', 'bet_volume:1', 'bet_volume:2',
            'leaderboard:1', 'leaderboard:2', 'leaderboard:3', 'supporter:1', 'supporter:2',
        ]);
    });

    it('drops Bet Volume outside the volume mode', () => {
        expect(ids(run({ ...LEGAL_SWITCHES, betVolume: 'per_market' }))).not.toContain('bet_volume:1');
        expect(ids(run({ ...LEGAL_SWITCHES, betVolume: 'disabled' }))).not.toContain('bet_volume:1');
    });

    it('cosmetic-only wins keep titles but zero winning-bet and leaderboard XP', () => {
        const unlocks = run({ ...LEGAL_SWITCHES, betWon: 'cosmetic_only' });
        const striker = unlocks.find((u) => u.achievementId === 'winning_bets' && u.tier === 2);
        expect(striker).toMatchObject({ xp: 0, titleId: 'striker' });
        expect(unlocks.filter((u) => u.achievementId === 'leaderboard').every((u) => u.xp === 0)).toBe(true);
        expect(unlocks.find((u) => u.achievementId === 'supporter')?.xp).toBe(10);
    });

    it('drops the families of disabled sources', () => {
        expect(ids(run({ ...LEGAL_SWITCHES, betWon: 'disabled' }))).not.toContain('winning_bets:1');
        expect(ids(run({ ...LEGAL_SWITCHES, support: 'disabled' }))).not.toContain('supporter:1');
        expect(ids(run({ ...LEGAL_SWITCHES, streak: 'disabled' }))).not.toContain('daily_streak:1');
    });
});

describe('describeAchievementProgress', () => {
    it('reports current value, next threshold and visibility', () => {
        const progress = describeAchievementProgress(
            counters({ watchMinutes: 150, betVolumeUsdc: 80 }),
            [{ achievementId: 'spectator', tier: 1 }],
        );
        expect(progress.find((p) => p.achievementId === 'spectator'))
            .toEqual({ achievementId: 'spectator', unlockedTier: 1, current: 2, nextThreshold: 10, visibility: 'public' });
        expect(progress.find((p) => p.achievementId === 'bet_volume'))
            .toEqual({ achievementId: 'bet_volume', unlockedTier: 0, current: 80, nextThreshold: 50, visibility: 'private' });
        expect(progress.find((p) => p.achievementId === 'leaderboard')?.current).toBeNull();
        expect(progress).toHaveLength(13);
    });

    it('hides the families removed by a switch', () => {
        const progress = describeAchievementProgress(EMPTY_COUNTERS, [], { ...LEGAL_SWITCHES, betVolume: 'per_market' });
        expect(progress.map((p) => p.achievementId)).not.toContain('bet_volume');
    });
});

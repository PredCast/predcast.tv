import { describe, expect, it } from 'vitest';

import { countersFromProgress } from '../policies/achievementCounters';
import { EMPTY_COUNTERS, evaluateAchievements } from '../policies/achievementEvaluator';

describe('countersFromProgress', () => {
    it('defaults missing metrics to 0 and keeps the streak and rank given', () => {
        expect(countersFromProgress({}, 0, null)).toEqual(EMPTY_COUNTERS);
        const counters = countersFromProgress(
            { chat_messages: { value: 12, items: [] }, market_kinds: { value: 2, items: ['WINNER:0', 'BOTH_SCORE:0'] } },
            7,
            3,
        );
        expect(counters).toEqual({ ...EMPTY_COUNTERS, chatMessages: 12, marketKinds: 2, streakBest: 7, bestCycleRank: 3 });
    });

    it('feeds the evaluator: a 7-day best streak unlocks Daily streak tiers', () => {
        const unlocks = evaluateAchievements(countersFromProgress({}, 7, null), [], null);
        expect(unlocks.every((u) => u.achievementId === 'daily_streak')).toBe(true);
        expect(unlocks.length).toBeGreaterThan(0);
    });
});

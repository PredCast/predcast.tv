import type { ProgressMetric } from '../catalog/sources';
import type { ProgressSnapshot } from '../entities/Progress';
import type { AchievementCounters } from './achievementEvaluator';

/** Counters of the evaluator from the stored progress, the best streak and the best cycle rank. */
export function countersFromProgress(
    snapshot: ProgressSnapshot,
    streakBest: number,
    bestCycleRank: number | null,
): AchievementCounters {
    const value = (metric: ProgressMetric): number => snapshot[metric]?.value ?? 0;
    return {
        firstSteps: value('first_steps'),
        streakBest,
        betsWon: value('bets_won'),
        betVolumeUsdc: value('bet_volume_usdc'),
        marketKinds: value('market_kinds'),
        leagues: value('leagues'),
        bestCycleRank,
        watchMinutes: value('watch_minutes'),
        chatMessages: value('chat_messages'),
        streamersFollowed: value('streamers_followed'),
        supportActions: value('support_actions'),
        streamMinutes: value('stream_minutes'),
    };
}

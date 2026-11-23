import type { AchievementId } from '../catalog/achievements';
import type { ProgressMetric } from '../catalog/sources';

export interface ProgressValue {
    readonly value: number;
    /** Distinct items of a set metric (market kinds, leagues, streamers, first steps). */
    readonly items: ReadonlyArray<string>;
}

export type ProgressSnapshot = Readonly<Partial<Record<ProgressMetric, ProgressValue>>>;

/** A row of `gamification_achievements`; never removed. */
export interface UnlockedAchievement {
    readonly accountId: string;
    readonly achievementId: AchievementId;
    readonly tier: number;
    readonly unlockedAt: Date;
    /** e.g. `{ cycleId: 7, rank: 1 }` for leaderboard tiers. */
    readonly context: Readonly<Record<string, string | number>>;
}

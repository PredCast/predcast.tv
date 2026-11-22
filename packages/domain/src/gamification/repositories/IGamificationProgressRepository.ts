import type { AchievementId } from '../catalog/achievements';
import type { ProgressSnapshot, UnlockedAchievement } from '../entities/Progress';
import type { ParisDay } from '../policies/parisDay';

export interface AchievementUnlockWrite {
    readonly accountId: string;
    readonly achievementId: AchievementId;
    readonly tier: number;
    readonly unlockedAt: Date;
    readonly context: Readonly<Record<string, string | number>>;
}

/** `gamification_progress`, `gamification_daily_counters` and `gamification_achievements`. */
export interface IGamificationProgressRepository {
    getSnapshot(accountId: string): Promise<ProgressSnapshot>;
    /** Value of a daily bucket (`xp:<source>`, `progress:<metric>`, `minutes:watch`…), 0 when absent. */
    getDailyCounter(accountId: string, day: ParisDay, bucket: string): Promise<number>;
    listAchievements(accountId: string): Promise<ReadonlyArray<UnlockedAchievement>>;
    /** `ON CONFLICT DO NOTHING`: false when the tier was already unlocked. */
    unlockAchievement(write: AchievementUnlockWrite): Promise<boolean>;
}

import type { StreakState } from '../policies/streakPolicy';

/** Current state of `gamification_profiles` (written by the SQL credit functions). */
export interface GamificationProfile {
    readonly accountId: string;
    readonly xpTotal: number;
    readonly level: number;
    /** Highest level ever reached (titles, frames, showcase slots); never decreases. */
    readonly levelPeak: number;
    readonly streak: StreakState;
    readonly selectedTitleId: string | null;
    readonly selectedFrameId: string | null;
    readonly showcase: ReadonlyArray<string>;
    readonly suspendedAt: Date | null;
    readonly suspendedReason: string | null;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

import { CHECK_IN_BASE_XP, CHECK_IN_MAX_XP, CHECK_IN_STREAK_STEP_XP } from '../catalog/constants';

/** Check-in XP for streak day `streak` (after the check-in): min(100, 50 + 5 × (s − 1)). */
export function checkInXp(streak: number): number {
    const s = Math.max(1, Math.floor(streak));
    return Math.min(CHECK_IN_MAX_XP, CHECK_IN_BASE_XP + CHECK_IN_STREAK_STEP_XP * (s - 1));
}

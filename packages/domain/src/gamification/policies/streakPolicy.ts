import { CHECK_IN_BASE_XP, STREAK_FREEZE_EVERY_DAYS, STREAK_MAX_FREEZES } from '../catalog/constants';
import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import { checkInXp } from './checkInXp';
import { daysBetween, weeksBetween, type ParisDay } from './parisDay';

export interface StreakState {
    readonly current: number;
    readonly best: number;
    readonly lastDay: ParisDay | null;
    readonly freezes: number;
}

export const EMPTY_STREAK: StreakState = { current: 0, best: 0, lastDay: null, freezes: 0 };

export type CheckInOutcome =
    | { readonly applied: false; readonly reason: 'already_checked_in' | 'day_before_last' }
    | {
          readonly applied: true;
          readonly state: StreakState;
          /** Freezes consumed to bridge missed days (notification `streak_freeze_used`). */
          readonly freezeUsed: number;
          readonly freezeEarned: boolean;
          /** Base check-in XP, before any double XP multiplier. */
          readonly xp: number;
      };

/** Applies the first check-in of Paris day `day` (§3.5). Pure: the caller persists with compare-and-set. */
export function applyCheckIn(
    state: StreakState,
    day: ParisDay,
    switches: LegalSwitches = LEGAL_SWITCHES,
): CheckInOutcome {
    if (state.lastDay !== null) {
        const gap = daysBetween(state.lastDay, day);
        if (gap === 0) return { applied: false, reason: 'already_checked_in' };
        if (gap < 0) return { applied: false, reason: 'day_before_last' };
    }
    if (switches.streak === 'disabled') {
        return applied({ ...state, current: 0, lastDay: day }, 0, false, CHECK_IN_BASE_XP);
    }
    if (switches.streak === 'weekly') return applyWeekly(state, day);
    return applyDaily(state, day);
}

function applied(state: StreakState, freezeUsed: number, freezeEarned: boolean, xp: number): CheckInOutcome {
    return { applied: true, state, freezeUsed, freezeEarned, xp };
}

function applyDaily(state: StreakState, day: ParisDay): CheckInOutcome {
    let current = 1;
    let freezes = state.freezes;
    let freezeUsed = 0;
    if (state.lastDay !== null) {
        const missed = daysBetween(state.lastDay, day) - 1;
        if (missed === 0) {
            current = state.current + 1;
        } else if (missed <= freezes) {
            freezes -= missed;
            freezeUsed = missed;
            current = state.current + 1;
        }
    }
    let freezeEarned = false;
    if (current % STREAK_FREEZE_EVERY_DAYS === 0 && freezes < STREAK_MAX_FREEZES) {
        freezes += 1;
        freezeEarned = true;
    }
    const next: StreakState = { current, best: Math.max(state.best, current), lastDay: day, freezes };
    return applied(next, freezeUsed, freezeEarned, checkInXp(current));
}

/** Safer variant (§13.2): consecutive Paris ISO weeks with a check-in; no freeze is used or earned. */
function applyWeekly(state: StreakState, day: ParisDay): CheckInOutcome {
    let current = 1;
    if (state.lastDay !== null) {
        const weeks = weeksBetween(state.lastDay, day);
        if (weeks === 0) current = Math.max(1, state.current);
        else if (weeks === 1) current = state.current + 1;
    }
    const next: StreakState = { ...state, current, best: Math.max(state.best, current), lastDay: day };
    return applied(next, 0, false, checkInXp(current));
}

export interface EffectiveStreak {
    readonly value: number;
    readonly alive: boolean;
    /** Alive only thanks to stocked freezes (consumed at the next check-in). */
    readonly protectedByFreeze: boolean;
    readonly best: number;
}

/** Streak shown to others on `today`, without any job (§3.5). */
export function effectiveStreak(
    state: StreakState,
    today: ParisDay,
    switches: LegalSwitches = LEGAL_SWITCHES,
): EffectiveStreak {
    const dead: EffectiveStreak = { value: 0, alive: false, protectedByFreeze: false, best: state.best };
    if (state.lastDay === null || state.current === 0 || switches.streak === 'disabled') return dead;
    if (switches.streak === 'weekly') {
        return weeksBetween(state.lastDay, today) <= 1
            ? { value: state.current, alive: true, protectedByFreeze: false, best: state.best }
            : dead;
    }
    const gap = daysBetween(state.lastDay, today);
    if (gap <= 1) return { value: state.current, alive: true, protectedByFreeze: false, best: state.best };
    if (gap - 1 <= state.freezes) return { value: state.current, alive: true, protectedByFreeze: true, best: state.best };
    return dead;
}

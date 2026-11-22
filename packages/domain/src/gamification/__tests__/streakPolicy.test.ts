import { describe, expect, it } from 'vitest';

import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import { addDays } from '../policies/parisDay';
import { EMPTY_STREAK, applyCheckIn, effectiveStreak, type StreakState } from '../policies/streakPolicy';

const D1 = '2027-01-04';
const WEEKLY: LegalSwitches = { ...LEGAL_SWITCHES, streak: 'weekly' };
const DISABLED: LegalSwitches = { ...LEGAL_SWITCHES, streak: 'disabled' };

function checkIn(state: StreakState, day: string, switches: LegalSwitches = LEGAL_SWITCHES) {
    const outcome = applyCheckIn(state, day, switches);
    if (!outcome.applied) throw new Error(`not applied: ${outcome.reason}`);
    return outcome;
}

/** Checks in on `days` consecutive days from D1 and returns every outcome. */
function consecutive(days: number) {
    const outcomes = [];
    let state = EMPTY_STREAK;
    for (let i = 0; i < days; i++) {
        const outcome = checkIn(state, addDays(D1, i));
        outcomes.push(outcome);
        state = outcome.state;
    }
    return outcomes;
}

describe('applyCheckIn — §3.5 examples', () => {
    it('days 1 to 10 give 50..95 XP, day 11 and after 100 XP (CA3)', () => {
        const xp = consecutive(12).map((o) => o.xp);
        expect(xp).toEqual([50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 100]);
    });

    it('earns a freeze on day 7 and 14, none on day 21 with a full stock (CA3)', () => {
        const outcomes = consecutive(21);
        const earnedOn = outcomes.flatMap((o, i) => (o.freezeEarned ? [i + 1] : []));
        expect(earnedOn).toEqual([7, 14]);
        expect(outcomes[6].state.freezes).toBe(1);
        expect(outcomes[13].state.freezes).toBe(2);
        expect(outcomes[20].state.freezes).toBe(2);
    });

    it('streak 12, 1 missed day, 1 freeze → streak 13, 0 freeze (CA4)', () => {
        const state: StreakState = { current: 12, best: 12, lastDay: D1, freezes: 1 };
        const outcome = checkIn(state, addDays(D1, 2));
        expect(outcome.state).toEqual({ current: 13, best: 13, lastDay: addDays(D1, 2), freezes: 0 });
        expect(outcome.freezeUsed).toBe(1);
        expect(outcome.xp).toBe(100);
    });

    it('streak 12, 2 missed days, 1 freeze → streak 1, freeze kept (CA4)', () => {
        const state: StreakState = { current: 12, best: 12, lastDay: D1, freezes: 1 };
        const outcome = checkIn(state, addDays(D1, 3));
        expect(outcome.state).toEqual({ current: 1, best: 12, lastDay: addDays(D1, 3), freezes: 1 });
        expect(outcome.freezeUsed).toBe(0);
        expect(outcome.xp).toBe(50);
    });

    it('uses two freezes for two missed days', () => {
        const state: StreakState = { current: 20, best: 20, lastDay: D1, freezes: 2 };
        const outcome = checkIn(state, addDays(D1, 3));
        expect(outcome.state).toMatchObject({ current: 21, freezes: 1 });
        expect(outcome.freezeUsed).toBe(2);
        // Day 21 is a multiple of 7 and the stock is no longer full.
        expect(outcome.freezeEarned).toBe(true);
    });

    it('can consume and earn a freeze on the same check-in', () => {
        const state: StreakState = { current: 13, best: 13, lastDay: D1, freezes: 1 };
        const outcome = checkIn(state, addDays(D1, 2));
        expect(outcome).toMatchObject({ freezeUsed: 1, freezeEarned: true, state: { current: 14, freezes: 1 } });
    });

    it('counts a day only once and refuses a day before the last one', () => {
        const state: StreakState = { current: 3, best: 3, lastDay: D1, freezes: 0 };
        expect(applyCheckIn(state, D1)).toEqual({ applied: false, reason: 'already_checked_in' });
        expect(applyCheckIn(state, addDays(D1, -1))).toEqual({ applied: false, reason: 'day_before_last' });
    });

    it('starts at 1 on the first check-in and keeps the best streak', () => {
        expect(checkIn(EMPTY_STREAK, D1).state).toEqual({ current: 1, best: 1, lastDay: D1, freezes: 0 });
        const broken = checkIn({ current: 40, best: 40, lastDay: D1, freezes: 0 }, addDays(D1, 5));
        expect(broken.state).toMatchObject({ current: 1, best: 40 });
    });
});

describe('effectiveStreak', () => {
    const state: StreakState = { current: 9, best: 15, lastDay: D1, freezes: 1 };

    it('is alive the same day and the day after', () => {
        expect(effectiveStreak(state, D1)).toEqual({ value: 9, alive: true, protectedByFreeze: false, best: 15 });
        expect(effectiveStreak(state, addDays(D1, 1)).value).toBe(9);
    });

    it('is protected while missed days fit in the stock', () => {
        expect(effectiveStreak(state, addDays(D1, 2))).toEqual({ value: 9, alive: true, protectedByFreeze: true, best: 15 });
    });

    it('falls to 0 beyond the stock, best kept', () => {
        expect(effectiveStreak(state, addDays(D1, 3))).toEqual({ value: 0, alive: false, protectedByFreeze: false, best: 15 });
        expect(effectiveStreak(EMPTY_STREAK, D1).value).toBe(0);
    });
});

describe('weekly streak (safer variant)', () => {
    const monday = '2027-01-04';

    it('counts consecutive Paris weeks and credits every check-in day', () => {
        let state = EMPTY_STREAK;
        const days = [monday, '2027-01-06', '2027-01-11', '2027-01-17', '2027-01-20'];
        const streaks = days.map((day) => {
            const outcome = checkIn(state, day, WEEKLY);
            state = outcome.state;
            return [outcome.state.current, outcome.xp];
        });
        expect(streaks).toEqual([[1, 50], [1, 50], [2, 55], [2, 55], [3, 60]]);
    });

    it('resets after a missed week, never using or earning freezes', () => {
        const state: StreakState = { current: 7, best: 7, lastDay: monday, freezes: 1 };
        const outcome = checkIn(state, '2027-01-18', WEEKLY);
        expect(outcome).toMatchObject({ freezeUsed: 0, freezeEarned: false, state: { current: 1, best: 7, freezes: 1 } });
        expect(checkIn({ ...state, current: 6 }, '2027-01-11', WEEKLY).freezeEarned).toBe(false);
    });

    it('stays alive until the end of the following week', () => {
        const state: StreakState = { current: 4, best: 4, lastDay: monday, freezes: 0 };
        expect(effectiveStreak(state, '2027-01-17', WEEKLY).alive).toBe(true);
        expect(effectiveStreak(state, '2027-01-18', WEEKLY).alive).toBe(false);
    });
});

describe('disabled streak', () => {
    it('credits the base check-in XP once a day and never builds a streak', () => {
        const first = checkIn(EMPTY_STREAK, D1, DISABLED);
        const second = checkIn(first.state, addDays(D1, 1), DISABLED);
        expect([first.xp, second.xp]).toEqual([50, 50]);
        expect(second.state).toEqual({ current: 0, best: 0, lastDay: addDays(D1, 1), freezes: 0 });
        expect(applyCheckIn(second.state, addDays(D1, 1), DISABLED)).toMatchObject({ applied: false });
        expect(effectiveStreak({ current: 5, best: 5, lastDay: D1, freezes: 0 }, D1, DISABLED).alive).toBe(false);
    });
});

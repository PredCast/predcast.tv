import type { DayPlan, SimulatedProfile } from './progressionSimulator';

const SATURDAY = 5;
const SUNDAY = 6;
const isWeekend = (weekday: number) => weekday === SATURDAY || weekday === SUNDAY;

const IDLE: DayPlan = {
    checkIn: false,
    bets: [],
    watchMinutes: 0,
    chatMessages: 0,
    follows: 0,
    donations: 0,
    profileSteps: [],
    marketKinds: 0,
    leagues: 0,
};

export const checkInOnly: SimulatedProfile = {
    name: 'check-in only',
    plan: () => ({ ...IDLE, checkIn: true }),
};

/** One new market kind a week, one new competition every 2 weeks (§6.2). */
const marketKindsOn = (day: number) => Math.min(9, Math.ceil(day / 7));
const leaguesOn = (day: number) => 1 + Math.floor((day - 1) / 14);

/**
 * Daily bettor (§6.2): 90 min and 5 messages on Saturday and Sunday, 5 follows spread over the
 * first month (days 1, 7, 13, 19, 25), one donation every 30 days from day 1, username and avatar
 * on day 1.
 */
function dailyBettor(name: string, bets: ReadonlyArray<number>): SimulatedProfile {
    return {
        name,
        plan: (day, weekday) => ({
            checkIn: true,
            bets,
            watchMinutes: isWeekend(weekday) ? 90 : 0,
            chatMessages: isWeekend(weekday) ? 5 : 0,
            follows: day <= 25 && (day - 1) % 6 === 0 ? 1 : 0,
            donations: (day - 1) % 30 === 0 ? 1 : 0,
            profileSteps: day === 1 ? ['username', 'avatar'] : [],
            marketKinds: marketKindsOn(day),
            leagues: leaguesOn(day),
        }),
    };
}

export const daily10 = dailyBettor('daily 10 USDC', [10]);
export const daily50 = dailyBettor('daily 50 USDC', [25, 25]);

/**
 * Weekend player (§6.2): Saturday and Sunday only — check-in, 2 markets at 25 USDC, 90 min,
 * 5 messages; one follow each Saturday of the first month; one donation on the first Saturday of
 * each 30-day block. Username, avatar, new market kinds and competitions are not listed for this
 * profile in §6.2 but are needed to reproduce the §6.3 USDC column: they follow the daily profiles,
 * profile steps on the first Saturday.
 */
export const weekend: SimulatedProfile = {
    name: 'weekend 100 USDC/week',
    plan: (day, weekday) => {
        const progress = { marketKinds: marketKindsOn(day), leagues: leaguesOn(day) };
        if (!isWeekend(weekday)) return { ...IDLE, ...progress };
        return {
            checkIn: true,
            bets: [25, 25],
            watchMinutes: 90,
            chatMessages: 5,
            follows: weekday === SATURDAY && day <= 28 ? 1 : 0,
            donations: weekday === SATURDAY && (day - 1) % 30 < 7 ? 1 : 0,
            profileSteps: day === 6 ? ['username', 'avatar'] : [],
            ...progress,
        };
    },
};

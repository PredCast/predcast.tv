import { dailyCapFor, type GamificationSource, type OnboardingStep } from '../../catalog/sources';
import {
    EMPTY_COUNTERS,
    evaluateAchievements,
    type AchievementCounters,
    type UnlockedTier,
} from '../../policies/achievementEvaluator';
import { computeCreditedXp } from '../../policies/doubleXpPolicy';
import { levelOf } from '../../policies/levelCurve';
import { addDays } from '../../policies/parisDay';
import { EMPTY_STREAK, applyCheckIn, type StreakState } from '../../policies/streakPolicy';
import { watchXpForCounter } from '../../policies/watchPolicy';
import { betWonXp } from '../../policies/winPolicy';
import { volumeDelta } from '../../policies/volumeCredit';

/** Day 1 of every simulation is a Monday (§6.1). */
export const SIMULATION_START = '2027-01-04';

export interface DayPlan {
    readonly checkIn: boolean;
    /** Stake in whole USDC of each distinct market played that day. */
    readonly bets: ReadonlyArray<number>;
    readonly watchMinutes: number;
    readonly chatMessages: number;
    readonly follows: number;
    readonly donations: number;
    readonly profileSteps: ReadonlyArray<OnboardingStep>;
    /** Cumulative distinct market kinds and competitions after the day. */
    readonly marketKinds: number;
    readonly leagues: number;
}

export interface SimulatedProfile {
    readonly name: string;
    /** `day` is 1-based; weekday 0 = Monday … 6 = Sunday. */
    plan(day: number, weekday: number): DayPlan;
}

export interface SimulationResult {
    /** First day (1-based) each level is reached. */
    readonly levelDay: ReadonlyMap<number, number>;
    /** Cumulative USDC staked at the end of each such day. */
    readonly stakedAtLevel: ReadonlyMap<number, number>;
}

/** Bresenham spread of a 45 % win rate over the markets played. */
function isWin(marketIndex: number): boolean {
    return Math.floor((marketIndex * 45) / 100) > Math.floor(((marketIndex - 1) * 45) / 100);
}

/** `base` = check-in + volume only; `final` = every source plus achievements (§6.1). */
export function simulate(
    profile: SimulatedProfile,
    mode: 'base' | 'final',
    levels: ReadonlyArray<number>,
    maxDays: number,
): SimulationResult {
    let xp = 0;
    let staked = 0;
    let markets = 0;
    let streak: StreakState = EMPTY_STREAK;
    let counters: AchievementCounters = EMPTY_COUNTERS;
    const unlocked: UnlockedTier[] = [];
    const steps = new Set<OnboardingStep>();
    const levelDay = new Map<number, number>();
    const stakedAtLevel = new Map<number, number>();
    const final = mode === 'final';

    for (let day = 1; day <= maxDays && levelDay.size < levels.length; day++) {
        const plan = profile.plan(day, (day - 1) % 7);
        const used = new Map<GamificationSource, number>();
        const credit = (source: GamificationSource, requestedXp: number) => {
            const credited = computeCreditedXp({
                requestedXp,
                usedToday: used.get(source) ?? 0,
                dailyCap: dailyCapFor(source),
                multiplier: 1,
            });
            used.set(source, (used.get(source) ?? 0) + credited.baseXp);
            xp += credited.xp;
        };
        const step = (name: OnboardingStep) => {
            if (!final || steps.has(name)) return;
            steps.add(name);
            credit('onboarding_step', 5);
        };

        if (plan.checkIn) {
            const outcome = applyCheckIn(streak, addDays(SIMULATION_START, day - 1));
            if (outcome.applied) {
                streak = outcome.state;
                credit('check_in', outcome.xp);
                if (streak.current >= 3) step('streak3');
            }
        }
        for (const stake of plan.bets) {
            const bet = { outcome: 0, stakeRaw: BigInt(stake) * BigInt(1_000_000), decimals: 6, blockNumber: day, logIndex: 0 };
            const volume = volumeDelta([bet], bet);
            if (!volume.qualifying) continue;
            staked += stake;
            markets += 1;
            credit('bet_volume', volume.requestedXp);
            counters = { ...counters, betVolumeUsdc: counters.betVolumeUsdc + volume.deltaUsdc };
            if (final && isWin(markets)) {
                credit('bet_won', betWonXp());
                counters = { ...counters, betsWon: counters.betsWon + 1 };
            }
        }
        if (final) {
            for (let minute = 1; minute <= plan.watchMinutes; minute++) {
                if (watchXpForCounter(minute).credit) credit('watch', 1);
            }
            for (let i = 0; i < plan.chatMessages; i++) credit('chat_message', 1);
            for (let i = 0; i < plan.follows; i++) credit('follow', 5);
            for (let i = 0; i < plan.donations; i++) credit('support', 5);
            plan.profileSteps.forEach(step);
            if (plan.watchMinutes >= 5) step('watch');
            if (plan.chatMessages > 0) step('chat');
            if (plan.follows > 0) step('follow');

            counters = {
                ...counters,
                firstSteps: steps.size,
                streakBest: streak.best,
                marketKinds: plan.marketKinds,
                leagues: plan.leagues,
                watchMinutes: counters.watchMinutes + Math.min(plan.watchMinutes, 240),
                chatMessages: counters.chatMessages + Math.min(plan.chatMessages, 50),
                streamersFollowed: counters.streamersFollowed + plan.follows,
                supportActions: counters.supportActions + plan.donations,
            };
            for (const unlock of evaluateAchievements(counters, unlocked, null)) {
                unlocked.push(unlock);
                xp += unlock.xp;
            }
        }

        for (const level of levels) {
            if (!levelDay.has(level) && levelOf(xp) >= level) {
                levelDay.set(level, day);
                stakedAtLevel.set(level, staked);
            }
        }
    }
    return { levelDay, stakedAtLevel };
}

import { BET_VOLUME_PER_MARKET_DAILY_CAP } from './constants';
import { LEGAL_SWITCHES, type LegalSwitches } from './legalSwitches';

export const GAMIFICATION_SOURCES = [
    'check_in',
    'bet_volume',
    'bet_won',
    'watch',
    'chat_message',
    'follow',
    'support',
    'stream_time',
    'onboarding_step',
    'achievement',
    'admin_adjustment',
] as const;

export type GamificationSource = (typeof GAMIFICATION_SOURCES)[number];

/** Frozen legal perimeter of double XP (mirrored by a SQL CHECK and the admin DTO). */
export const DOUBLE_XP_ELIGIBLE = ['check_in', 'watch', 'chat_message', 'stream_time'] as const;
export type DoubleXpSource = (typeof DOUBLE_XP_ELIGIBLE)[number];

export function isDoubleXpEligible(source: string): source is DoubleXpSource {
    return (DOUBLE_XP_ELIGIBLE as ReadonlyArray<string>).includes(source);
}

export interface SourceRule {
    /** Fixed XP of one credit; null when computed (check-in curve, volume, achievements, admin). */
    readonly xp: number | null;
    /** Daily cap on base XP (Paris day); null = no cap. */
    readonly dailyCapXp: number | null;
    readonly legalReview: boolean;
}

/** Base values of §3.2. */
export const SOURCE_RULES: Readonly<Record<GamificationSource, SourceRule>> = {
    check_in: { xp: null, dailyCapXp: 100, legalReview: false },
    bet_volume: { xp: null, dailyCapXp: 1000, legalReview: true },
    bet_won: { xp: 5, dailyCapXp: 25, legalReview: true },
    watch: { xp: 1, dailyCapXp: 10, legalReview: false },
    chat_message: { xp: 1, dailyCapXp: 5, legalReview: false },
    follow: { xp: 5, dailyCapXp: 15, legalReview: false },
    support: { xp: 5, dailyCapXp: 10, legalReview: true },
    stream_time: { xp: 1, dailyCapXp: 40, legalReview: false },
    onboarding_step: { xp: 5, dailyCapXp: null, legalReview: false },
    achievement: { xp: null, dailyCapXp: null, legalReview: false },
    admin_adjustment: { xp: null, dailyCapXp: null, legalReview: false },
};

/** Daily cap after the legal switches (the per-market volume variant has its own cap). */
export function dailyCapFor(source: GamificationSource, switches: LegalSwitches = LEGAL_SWITCHES): number | null {
    if (source === 'bet_volume' && switches.betVolume === 'per_market') return BET_VOLUME_PER_MARKET_DAILY_CAP;
    return SOURCE_RULES[source].dailyCapXp;
}

/** False when a legal switch turns the source off entirely: nothing is credited, no progress. */
export function isSourceEnabled(source: GamificationSource, switches: LegalSwitches = LEGAL_SWITCHES): boolean {
    switch (source) {
        case 'bet_volume': return switches.betVolume !== 'disabled';
        case 'bet_won': return switches.betWon !== 'disabled';
        case 'support': return switches.support !== 'disabled';
        default: return true;
    }
}

export const ONBOARDING_STEPS = ['username', 'avatar', 'watch', 'chat', 'follow', 'streak3'] as const;
export type OnboardingStep = (typeof ONBOARDING_STEPS)[number];

/** `reason` of a ledger row; non-null means the row was capped, zeroed or is a reversal. */
export type LedgerReason =
    | 'daily_cap'
    | 'hedge'
    | 'repeat_market'
    | 'banned'
    | 'suspended'
    | 'market_cancelled'
    | 'message_removed'
    | 'stream_stopped';

/** Progress metrics of `gamification_progress`. Set metrics store distinct `items`. */
export type ProgressMetric =
    | 'bets_won'
    | 'bet_volume_usdc'
    | 'market_kinds'
    | 'leagues'
    | 'watch_minutes'
    | 'chat_messages'
    | 'streamers_followed'
    | 'support_actions'
    | 'stream_minutes'
    | 'first_steps';

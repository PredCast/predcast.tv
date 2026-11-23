import {
    ACHIEVEMENTS,
    type AchievementDefinition,
    type AchievementId,
    type AchievementTier,
} from '../catalog/achievements';
import { FOUNDER_LEVEL } from '../catalog/constants';
import type { FrameId } from '../catalog/frames';
import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import type { TitleId } from '../catalog/titles';
import { isWithinFounderWindow } from './launchPolicy';

/** Snapshot of `gamification_progress` + profile, in raw units (minutes, whole USDC). */
export interface AchievementCounters {
    readonly firstSteps: number;
    readonly streakBest: number;
    readonly betsWon: number;
    readonly betVolumeUsdc: number;
    readonly marketKinds: number;
    readonly leagues: number;
    /** Best rank of the account's wallets in a closed cycle since launch (score > 0); null if none. */
    readonly bestCycleRank: number | null;
    readonly watchMinutes: number;
    readonly chatMessages: number;
    readonly streamersFollowed: number;
    readonly supportActions: number;
    readonly streamMinutes: number;
}

export const EMPTY_COUNTERS: AchievementCounters = {
    firstSteps: 0, streakBest: 0, betsWon: 0, betVolumeUsdc: 0, marketKinds: 0, leagues: 0,
    bestCycleRank: null, watchMinutes: 0, chatMessages: 0, streamersFollowed: 0, supportActions: 0, streamMinutes: 0,
};

/** Level reached and when, for `founder` (re-evaluated after each level-up). */
export interface FounderContext {
    readonly level: number;
    readonly at: Date;
    readonly launchAt: Date;
}

export interface UnlockedTier {
    readonly achievementId: AchievementId;
    readonly tier: number;
}

export interface TierUnlock extends UnlockedTier {
    readonly xp: number;
    readonly titleId: TitleId | null;
    readonly frameId: FrameId | null;
}

type CountedId = Exclude<AchievementId, 'leaderboard' | 'founder'>;

const VALUE_OF: Readonly<Record<CountedId, (c: AchievementCounters) => number>> = {
    first_steps: (c) => c.firstSteps,
    daily_streak: (c) => c.streakBest,
    winning_bets: (c) => c.betsWon,
    bet_volume: (c) => c.betVolumeUsdc,
    versatility: (c) => c.marketKinds,
    globetrotter: (c) => c.leagues,
    spectator: (c) => Math.floor(c.watchMinutes / 60),
    chatter: (c) => c.chatMessages,
    streamers_followed: (c) => c.streamersFollowed,
    supporter: (c) => c.supportActions,
    streamer_hours: (c) => Math.floor(c.streamMinutes / 60),
};

/** False when a legal switch removes the achievement (never evaluated, never shown). */
export function isAchievementEnabled(id: AchievementId, switches: LegalSwitches = LEGAL_SWITCHES): boolean {
    switch (id) {
        case 'bet_volume': return switches.betVolume === 'volume';
        case 'winning_bets': return switches.betWon !== 'disabled';
        case 'supporter': return switches.support !== 'disabled';
        case 'daily_streak': return switches.streak !== 'disabled';
        default: return true;
    }
}

/** Tier XP after the switches: winning bets and leaderboard become cosmetic-only together (§13.4). */
export function achievementTierXp(
    id: AchievementId,
    tier: AchievementTier,
    switches: LegalSwitches = LEGAL_SWITCHES,
): number {
    if ((id === 'winning_bets' || id === 'leaderboard') && switches.betWon !== 'xp') return 0;
    return tier.xp;
}

function reached(
    def: AchievementDefinition,
    tier: AchievementTier,
    counters: AchievementCounters,
    founder: FounderContext | null,
): boolean {
    if (def.id === 'leaderboard') return counters.bestCycleRank !== null && counters.bestCycleRank <= tier.threshold;
    if (def.id === 'founder') {
        return founder !== null && founder.level >= FOUNDER_LEVEL && isWithinFounderWindow(founder.launchAt, founder.at);
    }
    return VALUE_OF[def.id](counters) >= tier.threshold;
}

/** Every tier newly reached, several per family at once if needed, catalog order then tier order. */
export function evaluateAchievements(
    counters: AchievementCounters,
    unlocked: ReadonlyArray<UnlockedTier>,
    founder: FounderContext | null,
    switches: LegalSwitches = LEGAL_SWITCHES,
): ReadonlyArray<TierUnlock> {
    const owned = new Set(unlocked.map((u) => `${u.achievementId}:${u.tier}`));
    const unlocks: TierUnlock[] = [];
    for (const def of ACHIEVEMENTS) {
        if (!isAchievementEnabled(def.id, switches)) continue;
        for (const tier of def.tiers) {
            if (owned.has(`${def.id}:${tier.tier}`) || !reached(def, tier, counters, founder)) continue;
            unlocks.push({
                achievementId: def.id,
                tier: tier.tier,
                xp: achievementTierXp(def.id, tier, switches),
                titleId: tier.titleId,
                frameId: tier.frameId,
            });
        }
    }
    return unlocks;
}

export interface AchievementProgress {
    readonly achievementId: AchievementId;
    readonly unlockedTier: number;
    /** Counter in threshold units (hours for spectator / streamer_hours, rank for leaderboard). */
    readonly current: number | null;
    readonly nextThreshold: number | null;
    readonly visibility: 'public' | 'private';
}

/** Owner view of every enabled family (dashboard). */
export function describeAchievementProgress(
    counters: AchievementCounters,
    unlocked: ReadonlyArray<UnlockedTier>,
    switches: LegalSwitches = LEGAL_SWITCHES,
): ReadonlyArray<AchievementProgress> {
    return ACHIEVEMENTS.filter((def) => isAchievementEnabled(def.id, switches)).map((def) => {
        const unlockedTier = Math.max(0, ...unlocked.filter((u) => u.achievementId === def.id).map((u) => u.tier));
        const next = def.tiers.find((t) => t.tier > unlockedTier);
        let current: number | null;
        if (def.id === 'leaderboard') current = counters.bestCycleRank;
        else if (def.id === 'founder') current = null;
        else current = VALUE_OF[def.id](counters);
        return {
            achievementId: def.id,
            unlockedTier,
            current,
            nextThreshold: next?.threshold ?? null,
            visibility: def.visibility,
        };
    });
}

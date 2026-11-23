import { getDefaultFootballMarkets, type DefaultMarketSpec } from '../../markets/DefaultMarkets';
import type { FrameId } from './frames';
import { marketKindOf } from './refKeys';
import type { TitleId } from './titles';

export const ACHIEVEMENT_IDS = [
    'first_steps',
    'daily_streak',
    'winning_bets',
    'bet_volume',
    'versatility',
    'globetrotter',
    'leaderboard',
    'spectator',
    'chatter',
    'streamers_followed',
    'supporter',
    'streamer_hours',
    'founder',
] as const;

export type AchievementId = (typeof ACHIEVEMENT_IDS)[number];

/** `hours` thresholds compare against minutes / 60; `rank` thresholds are "rank ≤ threshold". */
export type AchievementUnit = 'steps' | 'days' | 'count' | 'usdc' | 'kinds' | 'leagues' | 'rank' | 'hours' | 'flag';

export type TileColor = 'bronze' | 'silver' | 'gold' | 'red' | 'legend' | 'icon';

export interface AchievementTier {
    readonly tier: number;
    readonly threshold: number;
    readonly xp: number;
    readonly titleId: TitleId | null;
    /** Leaderboard IV (podium colour) is resolved by `cosmetics`; Crown is time-bound. */
    readonly frameId: FrameId | null;
}

export interface AchievementDefinition {
    readonly id: AchievementId;
    readonly unit: AchievementUnit;
    readonly tiers: ReadonlyArray<AchievementTier>;
    /** `private`: owner only — never on the card, the public profile nor in the showcase. */
    readonly visibility: 'public' | 'private';
    readonly legalReview: boolean;
    readonly translationKey: string;
}

/** Standard XP by tier I..VIII (§5). */
export const STANDARD_TIER_XP: ReadonlyArray<number> = [10, 25, 50, 100, 200, 350, 500, 750];
export const BET_VOLUME_TIER_XP = 10;

/** Distinct `{marketType}:{line}` kinds of the full (knockout) seeding — Versatility tier IV. */
export function fullMarketCatalogSize(
    markets: ReadonlyArray<DefaultMarketSpec> = getDefaultFootballMarkets({ isKnockout: true }),
): number {
    return new Set(markets.map((m) => marketKindOf(m.marketTypeName, m.line))).size;
}

type TierReward = readonly [titleId?: TitleId | null, frameId?: FrameId | null];

function tiers(
    thresholds: ReadonlyArray<number>,
    rewards: Readonly<Record<number, TierReward>> = {},
    xpOf: (index: number) => number = (i) => STANDARD_TIER_XP[i],
): ReadonlyArray<AchievementTier> {
    return thresholds.map((threshold, i) => {
        const [titleId = null, frameId = null] = rewards[i + 1] ?? [];
        return { tier: i + 1, threshold, xp: xpOf(i), titleId, frameId };
    });
}

function achievement(
    id: AchievementId,
    unit: AchievementUnit,
    tierList: ReadonlyArray<AchievementTier>,
    opts: { visibility?: 'public' | 'private'; legalReview?: boolean } = {},
): AchievementDefinition {
    return {
        id,
        unit,
        tiers: tierList,
        visibility: opts.visibility ?? 'public',
        legalReview: opts.legalReview ?? false,
        translationKey: `gamification.achievement.${id}`,
    };
}

/** §5 — 13 families. Order = display order and `defaultShowcase` tie-break. */
export const ACHIEVEMENTS: ReadonlyArray<AchievementDefinition> = [
    achievement('first_steps', 'steps', tiers([5], { 1: ['new_recruit'] }, () => 25)),
    achievement('daily_streak', 'days', tiers([3, 7, 14, 30, 60, 100, 200, 365], {
        2: ['regular'], 4: ['faithful'], 6: ['unbreakable'], 8: ['full_season'],
    })),
    achievement('winning_bets', 'count', tiers([1, 10, 50, 150, 500, 1000, 2500], {
        2: ['striker'], 3: ['finisher'], 4: ['fox_in_the_box'], 5: ['goleador'],
        6: ['winning_machine'], 7: ['prediction_legend'],
    }), { legalReview: true }),
    achievement('bet_volume', 'usdc', tiers([50, 250, 1000, 5000, 25000, 100000], {}, () => BET_VOLUME_TIER_XP), {
        visibility: 'private', legalReview: true,
    }),
    achievement('versatility', 'kinds', tiers([3, 5, 7, fullMarketCatalogSize()], {
        1: ['curious'], 2: ['versatile'], 3: ['swiss_army_knife'], 4: ['encyclopedia'],
    }), { legalReview: true }),
    achievement('globetrotter', 'leagues', tiers([2, 5, 10, 20], {
        2: ['traveller'], 3: ['globetrotter'], 4: ['citizen_of_the_world'],
    })),
    achievement('leaderboard', 'rank', tiers([100, 50, 10, 3, 1], {
        3: ['contender'], 4: ['podium'], 5: ['cycle_champion', 'frame.crown'],
    }), { legalReview: true }),
    achievement('spectator', 'hours', tiers([1, 10, 50, 150, 500, 1000], {
        1: ['spectator'], 2: ['in_the_stands'], 3: ['kop'], 4: ['ultra'], 5: ['season_ticket'], 6: ['club_memory'],
    })),
    achievement('chatter', 'count', tiers([10, 100, 500, 2000, 10000], {
        3: ['cheerleader'], 4: ['voice_of_the_kop'], 5: ['stadium_announcer'],
    })),
    achievement('streamers_followed', 'count', tiers([1, 5, 20], { 3: ['studio_regular'] })),
    achievement('supporter', 'count', tiers([1, 5, 20, 50], { 3: ['patron'], 4: ['benefactor'] }), {
        legalReview: true,
    }),
    achievement('streamer_hours', 'hours', tiers([1, 10, 50, 150, 300, 1000], {
        1: ['mic_on'],
        2: ['pundit', 'frame.antenna.bronze'],
        3: ['commentator', 'frame.antenna.silver'],
        4: ['voice_of_the_match', 'frame.antenna.red'],
        5: ['live_legend', 'frame.antenna.legend'],
        6: ['monument', 'frame.antenna.icon'],
    })),
    achievement('founder', 'flag', tiers([1], { 1: ['founder', 'frame.founder'] }, () => 0)),
];

export function achievementById(id: string): AchievementDefinition | undefined {
    return ACHIEVEMENTS.find((a) => a.id === id);
}

/** Tile colour by tier (§5): I bronze … V legend, VI and above icon. */
export function tileColorOf(tier: number): TileColor {
    const colors: ReadonlyArray<TileColor> = ['bronze', 'silver', 'gold', 'red', 'legend'];
    return colors[tier - 1] ?? 'icon';
}

export function tierTranslationKey(id: AchievementId, tier: number): string {
    return `gamification.achievement.${id}.tier.${tier}`;
}

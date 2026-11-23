import { MAX_LEVEL } from './constants';

export const RANK_TIERS = ['rookie', 'starter', 'seasoned', 'captain', 'international', 'legend', 'icon'] as const;
export type RankTier = (typeof RANK_TIERS)[number];

export interface RankDefinition {
    readonly tier: RankTier;
    readonly minLevel: number;
    readonly maxLevel: number;
    /** Level pill background; a gradient is given as its ordered colour stops. */
    readonly pillColors: ReadonlyArray<string>;
    /** Null when §4.2 leaves the text colour to the renderer. */
    readonly pillTextColor: string | null;
    readonly frameId: `frame.rank.${RankTier}`;
    readonly translationKey: string;
}

const rank = (
    tier: RankTier,
    minLevel: number,
    maxLevel: number,
    pillColors: ReadonlyArray<string>,
    pillTextColor: string | null,
): RankDefinition => ({
    tier,
    minLevel,
    maxLevel,
    pillColors,
    pillTextColor,
    frameId: `frame.rank.${tier}`,
    translationKey: `gamification.rank.${tier}`,
});

/** §4.2 — ordered by level. */
export const RANKS: ReadonlyArray<RankDefinition> = [
    rank('rookie', 1, 4, ['#3A3A3A'], 'rgba(255,255,255,0.65)'),
    rank('starter', 5, 14, ['#C8794B'], null),
    rank('seasoned', 15, 24, ['#D8D8DC'], null),
    rank('captain', 25, 34, ['#F5C518'], null),
    rank('international', 35, 44, ['#E8001D'], '#FF1737'),
    rank('legend', 45, 59, ['#E8001D', '#F5C518'], null),
    rank('icon', MAX_LEVEL, MAX_LEVEL, ['#FFFFFF'], null),
];

export function rankOf(level: number): RankDefinition {
    const found = RANKS.find((r) => level >= r.minLevel && level <= r.maxLevel);
    if (found) return found;
    return level < 1 ? RANKS[0] : RANKS[RANKS.length - 1];
}

/** Ranks reached at `level`, lowest first — their frames are all owned (§4.2). */
export function ranksReachedAt(level: number): ReadonlyArray<RankDefinition> {
    return RANKS.filter((r) => r.minLevel <= level);
}

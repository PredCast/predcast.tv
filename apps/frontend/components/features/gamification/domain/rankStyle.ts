import { rankOf, RANKS, type RankTier } from '@chiliztv/domain/gamification/catalog/ranks';

export interface RankStyle {
    readonly tier: RankTier;
    /** Level chip border (§4.2). */
    readonly chip: string;
    readonly chipText: string;
    /** Chat pill background; Legend reads on a red → gold wash (mockup 04). */
    readonly pillBackground: string | null;
    /** Card accent: title, XP bar. */
    readonly accent: string;
    /** Card header tint (radial wash). */
    readonly tint: string;
    readonly bar: string;
}

const CARD_TOKENS: Readonly<Record<RankTier, Pick<RankStyle, 'accent' | 'tint'>>> = {
    rookie: { accent: 'rgba(255,255,255,0.65)', tint: 'rgba(255,255,255,0.05)' },
    starter: { accent: '#C8794B', tint: 'rgba(200,121,75,0.14)' },
    seasoned: { accent: '#D8D8DC', tint: 'rgba(216,216,220,0.10)' },
    captain: { accent: '#F5C518', tint: 'rgba(245,197,24,0.14)' },
    international: { accent: '#FF1737', tint: 'rgba(232,0,29,0.16)' },
    legend: { accent: '#F5C518', tint: 'rgba(232,0,29,0.18)' },
    icon: { accent: '#FFFFFF', tint: 'rgba(245,197,24,0.16)' },
};

/** Streamer cards take the red accent whatever the rank (mockup 04, `tier-streamer`). */
export const STREAMER_CARD_TOKENS = { accent: '#FF1737', tint: 'rgba(232,0,29,0.16)' } as const;

const GRADIENT_BAR = 'linear-gradient(90deg, #E8001D, #F5C518)';

function styleOf(tier: RankTier): RankStyle {
    const rank = RANKS.find((r) => r.tier === tier) ?? RANKS[0];
    const chip = rank.pillColors[rank.pillColors.length - 1];
    const gradient = rank.pillColors.length > 1;
    const card = CARD_TOKENS[tier];
    return {
        tier,
        chip,
        chipText: rank.pillTextColor ?? chip,
        pillBackground: gradient ? 'linear-gradient(90deg, rgba(232,0,29,0.35), rgba(245,197,24,0.3))' : null,
        accent: card.accent,
        tint: card.tint,
        bar: tier === 'legend' || tier === 'icon' ? GRADIENT_BAR : card.accent,
    };
}

export function rankStyleOf(tier: RankTier): RankStyle {
    return styleOf(tier);
}

/** The level chip always follows the rank of the level, whatever frame is worn (§4.2). */
export function rankStyleForLevel(level: number): RankStyle {
    return styleOf(rankOf(level).tier);
}

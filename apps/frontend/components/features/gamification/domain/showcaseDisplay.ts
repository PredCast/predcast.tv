import { achievementById, tileColorOf, type TileColor } from '@chiliztv/domain/gamification/catalog/achievements';
import type { ShowcaseItemDto } from '@chiliztv/shared';

import { achievementLabel, romanTier, titleLabel } from './labels';

export type AchievementIconKey =
    | 'steps' | 'calendar' | 'check' | 'grid' | 'globe' | 'trophy' | 'crown' | 'eye' | 'chat' | 'heart' | 'gift' | 'mic' | 'flag';

export interface TilePalette {
    readonly fg: string;
    readonly background: string;
    readonly border: string;
}

/** Tier colour code of §5 (I bronze … V legend, VI+ icon), tokens from mockup 04. */
export const TILE_PALETTES: Readonly<Record<TileColor, TilePalette>> = {
    bronze: { fg: '#C8794B', background: 'rgba(200,121,75,0.10)', border: 'rgba(200,121,75,0.38)' },
    silver: { fg: '#D8D8DC', background: 'rgba(216,216,220,0.06)', border: 'rgba(216,216,220,0.34)' },
    gold: { fg: '#F5C518', background: 'rgba(245,197,24,0.07)', border: 'rgba(245,197,24,0.40)' },
    red: { fg: '#FF1737', background: 'rgba(232,0,29,0.08)', border: 'rgba(232,0,29,0.42)' },
    legend: { fg: '#F5C518', background: 'linear-gradient(160deg, rgba(232,0,29,0.14), rgba(245,197,24,0.08))', border: 'rgba(245,197,24,0.45)' },
    icon: { fg: '#FFFFFF', background: 'linear-gradient(160deg, rgba(232,0,29,0.16), rgba(245,197,24,0.12))', border: 'rgba(255,255,255,0.5)' },
};

const ICONS: Readonly<Record<string, AchievementIconKey>> = {
    first_steps: 'steps',
    daily_streak: 'calendar',
    winning_bets: 'check',
    versatility: 'grid',
    globetrotter: 'globe',
    leaderboard: 'trophy',
    spectator: 'eye',
    chatter: 'chat',
    streamers_followed: 'heart',
    supporter: 'gift',
    streamer_hours: 'mic',
    founder: 'flag',
};

export interface ShowcaseTileView {
    readonly key: string;
    readonly name: string;
    readonly detail: string | null;
    readonly icon: AchievementIconKey;
    readonly palette: TilePalette;
}

/** Families with a single tier read without a numeral ("First Steps", "Founder"). */
function tileName(achievementId: string, tier: number): string {
    const single = (achievementById(achievementId)?.tiers.length ?? 0) <= 1;
    return single ? achievementLabel(achievementId) : `${achievementLabel(achievementId)} ${romanTier(tier)}`;
}

/** Secondary line: tier title, with the threshold for hour and win families; rank and cycle for the leaderboard. */
function tileDetail(item: ShowcaseItemDto): string | null {
    const def = achievementById(item.achievementId);
    const tier = def?.tiers.find((t) => t.tier === item.tier);
    if (!def || !tier) return null;
    const cycle = item.context?.cycleId;
    if (def.id === 'leaderboard') {
        const place = tier.threshold === 1 ? '#1' : `Top ${tier.threshold}`;
        return cycle !== undefined ? `${place} · Cycle ${cycle}` : place;
    }
    const title = tier.titleId ? titleLabel(tier.titleId) : null;
    const unit = def.unit === 'hours' ? `${tier.threshold.toLocaleString('en-US')} h`
        : def.id === 'winning_bets' ? `${tier.threshold.toLocaleString('en-US')} wins`
            : null;
    if (title && unit) return `${title} · ${unit}`;
    return title ?? unit;
}

export function showcaseTileOf(item: ShowcaseItemDto): ShowcaseTileView {
    const crownTier = item.achievementId === 'leaderboard' && item.tier === 5;
    return {
        key: `${item.achievementId}:${item.tier}`,
        name: tileName(item.achievementId, item.tier),
        detail: tileDetail(item),
        icon: crownTier ? 'crown' : ICONS[item.achievementId] ?? 'trophy',
        palette: TILE_PALETTES[tileColorOf(item.tier)],
    };
}

/** "Showcase · 1 slot", "Showcase · 2 slots", plain "Showcase" at 3 (mockup 04). */
export function showcaseHeading(slots: number): string {
    return slots >= 3 ? 'Showcase' : `Showcase · ${slots} ${slots === 1 ? 'slot' : 'slots'}`;
}

import { achievementById, tileColorOf } from '@chiliztv/domain/gamification/catalog/achievements';
import { FOUNDER_LEVEL, FOUNDER_WINDOW_DAYS } from '@chiliztv/domain/gamification/catalog/constants';
import { progressToNextTier } from '@chiliztv/domain/gamification/policies/progressionView';
import type { AchievementProgressDto } from '@chiliztv/shared';

import { achievementLabel, romanTier, sourceLabel, titleLabel } from './labels';
import { showcaseTileOf, TILE_PALETTES, type AchievementIconKey, type TilePalette } from './showcaseDisplay';

export interface AchievementProgressView {
    readonly key: string;
    /** "Winning Bets III", or the family name before the first tier. */
    readonly name: string;
    readonly icon: AchievementIconKey;
    readonly palette: TilePalette;
    readonly unlocked: boolean;
    /** "62 / 150 wins". */
    readonly progress: string;
    /** 0–100. */
    readonly percent: number;
    /** "Next: IV · Fox in the Box"; null when complete. */
    readonly next: string | null;
    /** "Winning Bets IV · Fox in the Box" (next-tier list). */
    readonly goal: string;
    readonly isPrivate: boolean;
}

const LOCKED: TilePalette = { fg: 'rgba(255,255,255,0.45)', background: '#111', border: '#1E1E1E' };

const UNITS: Readonly<Record<string, string>> = {
    first_steps: 'steps',
    daily_streak: 'days',
    winning_bets: 'wins',
    bet_volume: 'USDC',
    versatility: 'market types',
    globetrotter: 'competitions',
    spectator: 'h watched',
    chatter: 'messages',
    streamers_followed: 'streamers',
    supporter: 'support actions',
    streamer_hours: 'h streamed',
};

const fmt = (n: number): string => n.toLocaleString('en-US');
const place = (threshold: number): string => (threshold === 1 ? '#1' : `Top ${threshold}`);

function progressText(p: AchievementProgressDto): string {
    if (p.achievementId === 'leaderboard') return p.current === null ? 'Not ranked in a closed cycle yet' : `Best rank #${fmt(p.current)}`;
    if (p.achievementId === 'founder') {
        return p.unlockedTier > 0 ? 'Unlocked' : `Level ${FOUNDER_LEVEL} within ${FOUNDER_WINDOW_DAYS} days of launch`;
    }
    const unit = UNITS[p.achievementId] ?? '';
    const current = fmt(p.current ?? 0);
    return p.nextThreshold === null ? `${current} ${unit}` : `${current} / ${fmt(p.nextThreshold)} ${unit}`;
}

/** Next tier as "IV · Fox in the Box"; null when complete or single-tier. */
function nextTier(p: AchievementProgressDto): string | null {
    const def = achievementById(p.achievementId);
    const next = def?.tiers.find((t) => t.tier === p.unlockedTier + 1);
    if (!def || !next || def.tiers.length === 1) return null;
    const goal = def.id === 'leaderboard' ? ` · ${place(next.threshold)}` : '';
    const reward = next.titleId ? ` · ${titleLabel(next.titleId)}` : '';
    return `${romanTier(next.tier)}${goal}${reward}`;
}

/** Owner tile of one family (dashboard), private families included. */
export function achievementProgressView(p: AchievementProgressDto): AchievementProgressView {
    const unlocked = p.unlockedTier > 0;
    const tile = showcaseTileOf({ achievementId: p.achievementId, tier: Math.max(1, p.unlockedTier), context: null });
    const ratio = progressToNextTier(p);
    const next = nextTier(p);
    return {
        key: p.achievementId,
        name: unlocked ? tile.name : achievementLabel(p.achievementId),
        icon: tile.icon,
        palette: unlocked ? TILE_PALETTES[tileColorOf(p.unlockedTier)] : LOCKED,
        unlocked,
        progress: progressText(p),
        percent: p.nextThreshold === null ? (unlocked ? 100 : 0) : Math.round((ratio ?? 0) * 100),
        next: next && `Next: ${next}`,
        goal: next ? `${achievementLabel(p.achievementId)} ${next}` : achievementLabel(p.achievementId),
        isPrivate: p.visibility === 'private',
    };
}

export interface TodayXpRow {
    readonly source: string;
    readonly label: string;
    readonly xp: number;
}

/** Today's XP by source, largest first, zero rows dropped. */
export function todayXpRows(bySource: Readonly<Record<string, number>>): ReadonlyArray<TodayXpRow> {
    return Object.entries(bySource)
        .filter(([, xp]) => xp !== 0)
        .map(([source, xp]) => ({ source, label: sourceLabel(source), xp }))
        .sort((a, b) => b.xp - a.xp);
}

import { achievementById } from '@chiliztv/domain/gamification/catalog/achievements';
import { CHECK_IN_MAX_XP, SHOWCASE_SLOT_LEVELS, STREAK_FREEZE_EVERY_DAYS, STREAK_MAX_FREEZES } from '@chiliztv/domain/gamification/catalog/constants';
import { rankOf } from '@chiliztv/domain/gamification/catalog/ranks';
import { LEVEL_TITLES } from '@chiliztv/domain/gamification/catalog/titles';
import { achievementTierXp } from '@chiliztv/domain/gamification/policies/achievementEvaluator';
import type { NotificationToast, XpGainToast } from '@chiliztv/domain/gamification/policies/notificationToasts';
import type { CheckInResultDto } from '@chiliztv/shared';

import { rankLabel, sourceLabel, titleLabel } from './labels';
import { rankStyleForLevel } from './rankStyle';
import { showcaseTileOf, type AchievementIconKey } from './showcaseDisplay';

export type ToastIconKey = AchievementIconKey | 'up' | 'snow' | 'flame' | 'zap';

/** Sonner card of mockup 04 (`.toast`): icon, mono kicker, display title, light description. */
export interface ToastView {
    readonly icon: ToastIconKey;
    readonly color: string;
    readonly kicker: string;
    readonly title: string;
    readonly description: string | null;
}

/** Owner state the copy reads (streak, freezes) at the time the toast is shown. */
export interface ToastContext {
    readonly streak: number;
    readonly freezes: number;
}

const SILVER = '#D8D8DC';
const RED = '#E8001D';
const plural = (n: number, one: string, many = `${one}s`): string => `${n} ${n === 1 ? one : many}`;

function levelUpView(level: number): ToastView {
    const rank = rankOf(level);
    const style = rankStyleForLevel(level);
    const newRank = rank.minLevel === level;
    const unlocks: string[] = [];
    if (newRank) unlocks.push('New frame unlocked. Pick it in Progression.');
    if (SHOWCASE_SLOT_LEVELS.includes(level) && level > 1) unlocks.push('New showcase slot unlocked.');
    const title = LEVEL_TITLES.find((t) => t.level === level);
    if (title) unlocks.push(`New title: ${titleLabel(title.titleId)}.`);
    return {
        icon: 'up',
        color: style.chipText === 'rgba(255,255,255,0.65)' ? SILVER : style.chip,
        kicker: 'Level up',
        title: newRank ? `Level ${level} · ${rankLabel(rank.tier)} rank` : `Level ${level}`,
        description: unlocks.length > 0 ? unlocks.join(' ') : null,
    };
}

function achievementView(achievementId: string, tier: number): ToastView {
    const def = achievementById(achievementId);
    const tierDef = def?.tiers.find((t) => t.tier === tier);
    const tile = showcaseTileOf({ achievementId, tier, context: null });
    const parts: string[] = [];
    if (tierDef?.titleId) parts.push(`New title: ${titleLabel(tierDef.titleId)}.`);
    if (tierDef?.frameId) parts.push('New frame unlocked.');
    const xp = def && tierDef ? achievementTierXp(def.id, tierDef) : 0;
    if (xp > 0) parts.push(`+${xp.toLocaleString('en-US')} XP.`);
    if (def?.visibility === 'private') parts.push('Only visible to you.');
    return {
        icon: tile.icon,
        color: tile.palette.fg,
        kicker: 'Achievement unlocked',
        title: tile.name,
        description: parts.length > 0 ? parts.join(' ') : null,
    };
}

export function notificationToastView(toast: NotificationToast, ctx: ToastContext): ToastView {
    switch (toast.kind) {
        case 'level_up':
            return levelUpView(toast.level);
        case 'achievement':
            return achievementView(toast.achievementId, toast.tier);
        case 'streak_freeze_used':
            return {
                icon: 'snow',
                color: SILVER,
                kicker: 'Streak freeze used',
                title: `Streak kept · ${plural(ctx.streak, 'day')}`,
                description: `A freeze covered the ${toast.freezesUsed > 1 ? `${toast.freezesUsed} days` : 'day'} you missed. ${plural(ctx.freezes, 'freeze')} left; you earn one every ${STREAK_FREEZE_EVERY_DAYS} days.`,
            };
        case 'streak_freeze_earned':
            return {
                icon: 'snow',
                color: SILVER,
                kicker: 'Streak freeze earned',
                title: `${toast.freezes} of ${STREAK_MAX_FREEZES} freezes`,
                description: `A freeze protects one missed day. You earn one every ${STREAK_FREEZE_EVERY_DAYS} days of streak.`,
            };
    }
}

/** "+25 XP · Bet volume": the day's volume XP gained since the last refresh, in one toast. */
export function xpGainToastView(gain: XpGainToast): ToastView {
    return {
        icon: 'zap',
        color: RED,
        kicker: 'XP earned',
        title: `+${gain.xp.toLocaleString('en-US')} XP · ${sourceLabel(gain.source)}`,
        description: 'Counted on bets of 5 USDC or more, up to 1,000 XP a day.',
    };
}

/** "+65 XP · Day 4"; null when nothing is shown (refusal, flag off, not launched). */
export function checkInToastView(result: CheckInResultDto): ToastView | null {
    if (!result.credited) return null;
    const boosted = result.multiplier > 1 ? ` · ×${result.multiplier}` : '';
    return {
        icon: 'flame',
        color: RED,
        kicker: 'Daily check-in',
        title: result.streak > 0 ? `+${result.xp} XP · Day ${result.streak}${boosted}` : `+${result.xp} XP${boosted}`,
        description: result.xp >= CHECK_IN_MAX_XP * result.multiplier
            ? `Top daily rate reached: ${CHECK_IN_MAX_XP} XP a day.`
            : `Your streak keeps growing up to ${CHECK_IN_MAX_XP} XP a day from day 11.`,
    };
}

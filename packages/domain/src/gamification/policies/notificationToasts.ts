import { achievementById, type AchievementId } from '../catalog/achievements';
import { MAX_LEVEL, STREAK_MAX_FREEZES } from '../catalog/constants';
import type { GamificationNotificationPayload } from '../entities/GamificationNotification';

/** Notification as carried by `GET /gamification/me` (payload untyped on the wire). */
export interface WireNotification {
    readonly id: number;
    readonly kind: string;
    readonly payload: Readonly<Record<string, unknown>>;
}

export type NotificationToast = { readonly notificationId: number } & GamificationNotificationPayload;

export interface ToastPlan {
    /** One per notification never shown before, oldest first. */
    readonly toasts: ReadonlyArray<NotificationToast>;
    /** Every unseen id, malformed or already shown included: the server keeps them until acked. */
    readonly ackIds: ReadonlyArray<number>;
}

const isInt = (v: unknown, min: number, max: number): v is number =>
    typeof v === 'number' && Number.isInteger(v) && v >= min && v <= max;

/** Typed payload, or null when the wire payload does not match its kind. */
export function parseNotificationPayload(n: WireNotification): GamificationNotificationPayload | null {
    const p = n.payload;
    switch (n.kind) {
        case 'level_up':
            return isInt(p.level, 2, MAX_LEVEL) ? { kind: 'level_up', level: p.level } : null;
        case 'achievement': {
            const def = typeof p.achievementId === 'string' ? achievementById(p.achievementId) : undefined;
            if (!def || !isInt(p.tier, 1, def.tiers.length)) return null;
            return { kind: 'achievement', achievementId: def.id as AchievementId, tier: p.tier };
        }
        case 'streak_freeze_used':
            return isInt(p.freezesUsed, 1, STREAK_MAX_FREEZES) ? { kind: 'streak_freeze_used', freezesUsed: p.freezesUsed } : null;
        case 'streak_freeze_earned':
            return isInt(p.freezes, 1, STREAK_MAX_FREEZES) ? { kind: 'streak_freeze_earned', freezes: p.freezes } : null;
        default:
            return null;
    }
}

/**
 * Toasts for the unseen notifications (CA17): exactly one per notification, none for an id
 * already shown (`handled`). A level drop never creates a notification; a level-up overtaken by
 * a reversal (`level` above `currentLevel`) is acknowledged without a toast.
 */
export function planNotificationToasts(
    unseen: ReadonlyArray<WireNotification>,
    handled: ReadonlySet<number>,
    currentLevel: number,
): ToastPlan {
    const distinct = [...unseen]
        .filter((n, i, all) => all.findIndex((m) => m.id === n.id) === i)
        .sort((a, b) => a.id - b.id);
    const toasts: NotificationToast[] = [];
    for (const n of distinct) {
        if (handled.has(n.id)) continue;
        const payload = parseNotificationPayload(n);
        if (!payload || (payload.kind === 'level_up' && payload.level > currentLevel)) continue;
        toasts.push({ notificationId: n.id, ...payload });
    }
    return { toasts, ackIds: distinct.map((n) => n.id) };
}

/** Sources whose XP of the day is toasted as one aggregated line ("+25 XP · Bet volume"). */
export const AGGREGATED_XP_TOAST_SOURCES = ['bet_volume'] as const;
export type AggregatedXpSource = (typeof AGGREGATED_XP_TOAST_SOURCES)[number];

/** Gains below this are not toasted (+1 XP never shows a toast). */
export const MIN_TOASTED_XP_GAIN = 2;

export interface XpGainToast {
    readonly source: AggregatedXpSource;
    readonly xp: number;
}

/**
 * XP gained since the previous owner snapshot of today's XP by source. The first snapshot
 * (`previous` null) is a baseline; decreases (reversal, new Paris day) show nothing.
 */
export function xpGainToasts(
    previous: Readonly<Record<string, number>> | null,
    next: Readonly<Record<string, number>>,
): ReadonlyArray<XpGainToast> {
    if (previous === null) return [];
    const gains: XpGainToast[] = [];
    for (const source of AGGREGATED_XP_TOAST_SOURCES) {
        const xp = (next[source] ?? 0) - (previous[source] ?? 0);
        if (xp >= MIN_TOASTED_XP_GAIN) gains.push({ source, xp });
    }
    return gains;
}

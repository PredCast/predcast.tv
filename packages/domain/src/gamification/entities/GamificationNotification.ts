import type { AchievementId } from '../catalog/achievements';

export type GamificationNotificationPayload =
    | { readonly kind: 'level_up'; readonly level: number }
    | { readonly kind: 'achievement'; readonly achievementId: AchievementId; readonly tier: number }
    | { readonly kind: 'streak_freeze_used'; readonly freezesUsed: number }
    | { readonly kind: 'streak_freeze_earned'; readonly freezes: number };

export type GamificationNotificationKind = GamificationNotificationPayload['kind'];

/** In-app notification; a level drop never creates one. */
export interface GamificationNotification {
    readonly id: number;
    readonly accountId: string;
    readonly payload: GamificationNotificationPayload;
    readonly createdAt: Date;
    readonly seenAt: Date | null;
}

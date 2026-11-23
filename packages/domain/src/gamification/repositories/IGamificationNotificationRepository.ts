import type { GamificationNotification, GamificationNotificationPayload } from '../entities/GamificationNotification';

/** `gamification_notifications` (in-app only). */
export interface IGamificationNotificationRepository {
    create(accountId: string, payload: GamificationNotificationPayload, at: Date): Promise<GamificationNotification>;
    /** Latest unseen first. */
    listUnseen(accountId: string, limit: number): Promise<ReadonlyArray<GamificationNotification>>;
    /** Marks the account's notifications seen; returns the number updated. */
    markSeen(accountId: string, ids: ReadonlyArray<number>, at: Date): Promise<number>;
    purgeSeenBefore(cutoff: Date): Promise<number>;
}

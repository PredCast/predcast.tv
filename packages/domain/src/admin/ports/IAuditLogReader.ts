import type { ActivityScope } from '../dashboard/ActivityScopePolicy';

/** Read side of the append-only audit_log — dashboard activity feed. */

export interface AuditLogEntry {
    readonly id: number;
    /** Namespaced action, e.g. 'moderation.ban.lift'. */
    readonly action: string;
    readonly targetType: string;
    readonly targetId: string;
    readonly actorWallet: string;
    /** Role snapshot at action time. */
    readonly actorRole: string;
    readonly createdAt: Date;
}

export interface IAuditLogReader {
    findRecent(limit: number, scope?: ActivityScope): Promise<AuditLogEntry[]>;
}

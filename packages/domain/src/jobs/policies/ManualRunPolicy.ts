import type { AdminRole } from '../../admin/types';
import { isAllowed } from '../../admin/policies/AdminRolePolicy';
import type { JobCategory } from '../types';

/** Minimum gap between two manual requests of the same job. */
export const MANUAL_RUN_COOLDOWN_MS = 60_000;
/** A request no worker claimed within this delay is failed (it would block the job's Run now). */
export const MANUAL_RUN_PENDING_TIMEOUT_MS = 10 * 60_000;
/** A claimed run still `running` after this delay is failed: its worker died. Must exceed every lock TTL. */
export const MANUAL_RUN_STALE_AFTER_MS = 30 * 60_000;

/** Safe jobs: admin and up. Jobs that sign transactions or spend a quota: super_admin only. */
export function canRunManually(role: AdminRole, category: JobCategory): boolean {
    return category === 'safe' ? isAllowed(role, ['admin']) : isAllowed(role, ['super_admin']);
}

export function requiresConfirmation(category: JobCategory): boolean {
    return category !== 'safe';
}

/** Ms left before a new request is accepted; 0 when allowed. */
export function cooldownRemainingMs(lastRequestedAt: Date | null, now: Date): number {
    if (!lastRequestedAt) return 0;
    return Math.max(0, lastRequestedAt.getTime() + MANUAL_RUN_COOLDOWN_MS - now.getTime());
}

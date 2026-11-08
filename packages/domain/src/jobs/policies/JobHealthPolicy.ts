import type { JobDescriptor, JobState } from '../types';
import { cadenceMs, nextRunAt } from './JobSchedulePolicy';

export type JobHealth = 'ok' | 'failing' | 'late' | 'never_ran';

/** Grace before a missed tick reads as late: two periods (at least a minute) plus the lock TTL. */
function lateAfterMs(job: JobDescriptor): number {
    return 2 * Math.max(cadenceMs(job.schedule), 60_000) + job.lockTtlSeconds * 1_000;
}

/**
 * failing: the last real run failed. late: no tick reported long after the expected one (workers
 * down or stuck). never_ran: no row yet (fresh deploy).
 */
export function jobHealth(job: JobDescriptor, state: JobState | null, now: Date): JobHealth {
    if (!state || (state.lastFinishedAt === null && state.skippedLockTotal === 0)) return 'never_ran';
    if (state.lastStatus === 'failed') return 'failing';
    const reference = state.lastFinishedAt ?? state.lastStartedAt;
    if (!reference) return 'never_ran';
    const expected = job.schedule.kind === 'cron' ? nextRunAt(job.schedule, null, reference) : nextRunAt(job.schedule, state, now);
    if (expected && now.getTime() - expected.getTime() > lateAfterMs(job)) return 'late';
    return 'ok';
}

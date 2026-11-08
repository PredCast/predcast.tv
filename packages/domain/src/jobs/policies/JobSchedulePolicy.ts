import type { JobSchedule, JobState, JobTickStatus } from '../types';
import { cronCadenceMs, nextCronRun } from './cron';

/** Scheduled successes of jobs ticking faster than this stay out of job_runs (job_state only). */
export const MIN_RECORDED_CADENCE_MS = 60_000;

export function cadenceMs(schedule: JobSchedule): number {
    return schedule.kind === 'cron' ? cronCadenceMs(schedule.expression) : schedule.everyMs;
}

/** Failures always; successes of jobs ticking every minute or slower; skipped ticks never. */
export function shouldRecordScheduledRun(schedule: JobSchedule, status: JobTickStatus): boolean {
    if (status === 'failed') return true;
    if (status === 'skipped_lock') return false;
    return cadenceMs(schedule) >= MIN_RECORDED_CADENCE_MS;
}

/**
 * Expected next tick. Cron: from the expression. Interval: last start + period. Self-rescheduled:
 * last finish + period. Null while the job has never reported a run.
 */
export function nextRunAt(schedule: JobSchedule, state: JobState | null, now: Date): Date | null {
    if (schedule.kind === 'cron') return nextCronRun(schedule.expression, now);
    const anchor = schedule.kind === 'interval' ? state?.lastStartedAt : state?.lastFinishedAt;
    return anchor ? new Date(anchor.getTime() + schedule.everyMs) : null;
}

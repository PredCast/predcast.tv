/** What a manual run can affect: `on_chain` sends transactions, `quota` spends a paid / rate-limited API. */
export type JobCategory = 'safe' | 'on_chain' | 'quota';

export type JobSchedule =
    | { readonly kind: 'cron'; readonly expression: string }
    | { readonly kind: 'interval'; readonly everyMs: number }
    /** Next tick armed when the previous one finishes (no overlap). */
    | { readonly kind: 'self_rescheduled'; readonly everyMs: number };

export interface JobDescriptor {
    readonly name: string;
    readonly description: string;
    readonly category: JobCategory;
    readonly schedule: JobSchedule;
    readonly lockTtlSeconds: number;
}

export type JobTrigger = 'schedule' | 'manual';
export type JobRunStatus = 'pending' | 'running' | 'succeeded' | 'failed' | 'skipped_lock';
export type JobTickStatus = 'succeeded' | 'failed' | 'skipped_lock';

export interface JobRun {
    readonly id: string;
    readonly jobName: string;
    readonly trigger: JobTrigger;
    readonly status: JobRunStatus;
    readonly requestedBy: string | null;
    readonly requestedAt: Date;
    readonly startedAt: Date | null;
    readonly finishedAt: Date | null;
    readonly durationMs: number | null;
    readonly error: string | null;
}

export interface JobTick {
    readonly jobName: string;
    readonly status: JobTickStatus;
    readonly startedAt: Date;
    readonly finishedAt: Date;
    readonly durationMs: number;
    readonly error: string | null;
}

/** Latest outcome and counters of one job, across workers. */
export interface JobState {
    readonly jobName: string;
    readonly lastStatus: 'succeeded' | 'failed' | null;
    readonly lastStartedAt: Date | null;
    readonly lastFinishedAt: Date | null;
    readonly lastDurationMs: number | null;
    readonly lastError: string | null;
    readonly lastSuccessAt: Date | null;
    readonly consecutiveFailures: number;
    readonly runsTotal: number;
    readonly failuresTotal: number;
    readonly skippedLockTotal: number;
}

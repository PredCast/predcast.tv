import type { JobRun, JobTick } from '../types';

export interface ManualRunRequest {
    readonly jobName: string;
    readonly requestedBy: string;
    readonly requestedAt: Date;
}

export interface ClaimWindow {
    readonly now: Date;
    /** Claimed runs started before this are failed (dead worker). */
    readonly staleBefore: Date;
    /** Requests still pending since before this are failed (no worker up). */
    readonly pendingBefore: Date;
}

export interface RunOutcome {
    readonly status: 'succeeded' | 'failed' | 'skipped_lock';
    readonly finishedAt: Date;
    readonly durationMs: number;
    readonly error: string | null;
}

export type ManualRequestResult =
    | { readonly ok: true; readonly run: JobRun }
    | { readonly ok: false; readonly reason: 'ACTIVE_RUN_EXISTS' };

export interface IJobRunRepository {
    requestManual(request: ManualRunRequest): Promise<ManualRequestResult>;
    claimNextManual(window: ClaimWindow): Promise<JobRun | null>;
    finish(runId: string, outcome: RunOutcome): Promise<void>;
    recordScheduled(tick: JobTick): Promise<void>;
    findById(runId: string): Promise<JobRun | null>;
    /** Newest first. */
    listRecent(filter: { readonly jobName?: string; readonly limit: number }): Promise<ReadonlyArray<JobRun>>;
    lastManualRequestAt(jobName: string): Promise<Date | null>;
    /** Returns the number of deleted rows. */
    purgeBefore(cutoff: Date): Promise<number>;
}

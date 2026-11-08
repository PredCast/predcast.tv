import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILockService } from '@chiliztv/domain/shared/ports/ILockService';
import type { IJobStateRepository } from '@chiliztv/domain/jobs/repositories/IJobStateRepository';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';
import type { JobTick, JobTrigger } from '@chiliztv/domain/jobs/types';
import { shouldRecordScheduledRun } from '@chiliztv/domain/jobs/policies/JobSchedulePolicy';

import { logger } from '../logging/logger';
import type { RegisteredJob } from './JobRegistry';

/**
 * The one path every run takes — scheduled tick or manual Run now: distributed lock (a second
 * worker skips), timing, then job_state (+ job_runs for scheduled runs worth keeping).
 */
@injectable()
export class JobExecutor {
    constructor(
        @inject(TOKENS.ILockService) private readonly locks: ILockService,
        @inject(TOKENS.IJobStateRepository) private readonly states: IJobStateRepository,
        @inject(TOKENS.IJobRunRepository) private readonly runs: IJobRunRepository,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(job: RegisteredJob, trigger: JobTrigger): Promise<JobTick> {
        const startedAt = this.clock.now();
        let status: JobTick['status'];
        let error: string | null = null;
        try {
            const result = await this.locks.withLock({
                key: job.lock.key,
                ttlSeconds: job.lock.ttlSeconds,
                onAcquired: job.run,
                onContention: 'skip',
            });
            status = result.ran ? 'succeeded' : 'skipped_lock';
        } catch (err) {
            status = 'failed';
            error = err instanceof Error ? err.message : String(err);
        }
        const finishedAt = this.clock.now();
        const tick: JobTick = {
            jobName: job.name,
            status,
            startedAt,
            finishedAt,
            durationMs: finishedAt.getTime() - startedAt.getTime(),
            error,
        };
        if (status === 'skipped_lock') {
            logger.debug(`Job ${job.name}: lock taken by another instance, skipping this tick`);
        }
        await this.record(job, trigger, tick);
        return tick;
    }

    /** Best effort: a Supabase hiccup must not fail or stall the job itself. */
    private async record(job: RegisteredJob, trigger: JobTrigger, tick: JobTick): Promise<void> {
        try {
            await this.states.recordTick(tick);
            if (trigger === 'schedule' && shouldRecordScheduledRun(job.schedule, tick.status)) {
                await this.runs.recordScheduled(tick);
            }
        } catch (err) {
            logger.warn('Job run not recorded', {
                job: job.name,
                status: tick.status,
                error: err instanceof Error ? err.message : String(err),
            });
        }
    }
}

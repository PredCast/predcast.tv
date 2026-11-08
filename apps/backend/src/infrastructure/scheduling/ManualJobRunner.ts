import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';
import type { IJobRunSignal } from '@chiliztv/domain/jobs/ports/IJobRunSignal';
import { MANUAL_RUN_PENDING_TIMEOUT_MS, MANUAL_RUN_STALE_AFTER_MS } from '@chiliztv/domain/jobs/policies/ManualRunPolicy';

import { logger } from '../logging/logger';
import { JobExecutor } from './JobExecutor';
import { JobRegistry } from './JobRegistry';

/** Polling fallback: Run now still works when the Redis signal is lost or Redis is down. */
const POLL_INTERVAL_MS = 5_000;

/** Worker side of Run now: claims manual requests and runs them through the same executor. */
@injectable()
export class ManualJobRunner {
    private timer: NodeJS.Timeout | null = null;
    private unsubscribe: (() => void) | null = null;
    private draining = false;
    private wakeRequested = false;
    private stopped = false;

    constructor(
        private readonly registry: JobRegistry,
        private readonly executor: JobExecutor,
        @inject(TOKENS.IJobRunRepository) private readonly runs: IJobRunRepository,
        @inject(TOKENS.IJobRunSignal) private readonly signal: IJobRunSignal,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    start(): void {
        this.unsubscribe = this.signal.subscribe(() => this.wake());
        this.timer = setInterval(() => this.wake(), POLL_INTERVAL_MS);
        this.wake();
    }

    stop(): void {
        this.stopped = true;
        if (this.timer) clearInterval(this.timer);
        this.unsubscribe?.();
    }

    private wake(): void {
        if (this.draining) {
            this.wakeRequested = true;
            return;
        }
        void this.drain();
    }

    /** One claim at a time per process; loops while requests are waiting. */
    private async drain(): Promise<void> {
        this.draining = true;
        try {
            do {
                this.wakeRequested = false;
                while (!this.stopped && (await this.runNext())) {
                    // keep claiming
                }
            } while (this.wakeRequested && !this.stopped);
        } catch (error) {
            logger.error('Manual job runner failed', { error: error instanceof Error ? error.message : 'Unknown error' });
        } finally {
            this.draining = false;
        }
    }

    private async runNext(): Promise<boolean> {
        const now = this.clock.now();
        const run = await this.runs.claimNextManual({
            now,
            staleBefore: new Date(now.getTime() - MANUAL_RUN_STALE_AFTER_MS),
            pendingBefore: new Date(now.getTime() - MANUAL_RUN_PENDING_TIMEOUT_MS),
        });
        if (!run) return false;

        const job = this.registry.find(run.jobName);
        if (!job) {
            await this.runs.finish(run.id, { status: 'failed', finishedAt: this.clock.now(), durationMs: 0, error: `Unknown job ${run.jobName}` });
            return true;
        }
        logger.info('Manual job run started', { job: job.name, runId: run.id, requestedBy: run.requestedBy });
        const tick = await this.executor.execute(job, 'manual');
        await this.runs.finish(run.id, {
            status: tick.status,
            finishedAt: tick.finishedAt,
            durationMs: tick.durationMs,
            error: tick.error,
        });
        logger.info('Manual job run finished', { job: job.name, runId: run.id, status: tick.status, durationMs: tick.durationMs });
        return true;
    }
}

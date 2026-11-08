import { injectable } from 'tsyringe';
import cron from 'node-cron';

import { logger } from '../logging/logger';
import { JobExecutor } from './JobExecutor';
import { JobRegistry, type RegisteredJob } from './JobRegistry';
import { ManualJobRunner } from './ManualJobRunner';

/**
 * Starts every job of the registry on its schedule, plus the manual-run consumer. Each tick goes
 * through JobExecutor (distributed lock, so a second worker instance silently skips).
 */
@injectable()
export class JobScheduler {
    private cronTasks: cron.ScheduledTask[] = [];
    private intervals: NodeJS.Timeout[] = [];
    /** Self-rescheduled timeouts (NOT setInterval). Tracked so `stop()` can cancel pending wake-ups. */
    private timeouts: NodeJS.Timeout[] = [];
    private stopped = false;

    constructor(
        private readonly registry: JobRegistry,
        private readonly executor: JobExecutor,
        private readonly manualRunner: ManualJobRunner,
    ) {}

    start(): void {
        logger.info('Starting job scheduler');
        for (const job of this.registry.registered()) {
            switch (job.schedule.kind) {
                case 'cron':
                    this.startCronJob(job, job.schedule.expression);
                    break;
                case 'interval':
                    this.startIntervalJob(job, job.schedule.everyMs);
                    break;
                case 'self_rescheduled':
                    this.startSelfRescheduledJob(job, job.schedule.everyMs);
                    break;
            }
        }
        this.manualRunner.start();
        logger.info('Job scheduler started successfully', { jobs: this.registry.registered().length });
    }

    stop(): void {
        logger.info('Stopping job scheduler');
        this.stopped = true;
        this.manualRunner.stop();
        this.cronTasks.forEach(task => task.stop());
        this.cronTasks = [];
        this.intervals.forEach(interval => clearInterval(interval));
        this.intervals = [];
        this.timeouts.forEach(timeout => clearTimeout(timeout));
        this.timeouts = [];
        logger.info('Job scheduler stopped');
    }

    /** The executor never throws (failures are recorded); this only guards the timer callbacks. */
    private tick(job: RegisteredJob): Promise<void> {
        return this.executor.execute(job, 'schedule').then(
            () => undefined,
            (error: unknown) => {
                logger.error(`Job ${job.name} tick crashed`, { error: error instanceof Error ? error.message : 'Unknown error' });
            },
        );
    }

    private startCronJob(job: RegisteredJob, expression: string): void {
        logger.info(`Starting cron job: ${job.name}`, { schedule: expression, lockKey: job.lock.key });
        const task = cron.schedule(expression, () => this.tick(job), { scheduled: true, timezone: 'UTC' });
        this.cronTasks.push(task);
        logger.info(`Executing initial run for: ${job.name}`);
        void this.tick(job);
    }

    /**
     * The next tick is armed ONLY after the current one finishes, so a slow tick can never overlap
     * with itself. Effective period = tick duration + intervalMs.
     */
    private startSelfRescheduledJob(job: RegisteredJob, intervalMs: number): void {
        logger.info(`Starting self-rescheduled job: ${job.name}`, { intervalMs, lockKey: job.lock.key });
        const loop = async (): Promise<void> => {
            await this.tick(job);
            if (this.stopped) return;
            this.timeouts.push(setTimeout(() => { void loop(); }, intervalMs));
        };
        void loop();
    }

    private startIntervalJob(job: RegisteredJob, intervalMs: number): void {
        logger.info(`Starting interval job: ${job.name}`, { intervalMinutes: intervalMs / 1000 / 60, lockKey: job.lock.key });
        void this.tick(job);
        this.intervals.push(setInterval(() => { void this.tick(job); }, intervalMs));
    }
}

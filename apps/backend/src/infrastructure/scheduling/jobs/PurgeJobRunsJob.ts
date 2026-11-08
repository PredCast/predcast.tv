import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { IJobRunRepository } from '@chiliztv/domain/jobs/repositories/IJobRunRepository';

import { logger } from '../../logging/logger';

const RETENTION_MS = 14 * 24 * 60 * 60 * 1000;

/** Daily retention of job_runs (14 days); active manual runs are kept. */
@injectable()
export class PurgeJobRunsJob {
    private readonly schedule = '17 4 * * *';

    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IJobRunRepository) private readonly runs: IJobRunRepository,
    ) {}

    getSchedule(): string {
        return this.schedule;
    }

    async execute(): Promise<void> {
        const cutoff = new Date(this.clock.now().getTime() - RETENTION_MS);
        try {
            const deleted = await this.runs.purgeBefore(cutoff);
            logger.info('PurgeJobRunsJob completed', { deleted, cutoff: cutoff.toISOString() });
        } catch (error) {
            logger.error('PurgeJobRunsJob failed', { error: error instanceof Error ? error.message : 'Unknown error' });
            throw error;
        }
    }
}

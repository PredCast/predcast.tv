import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { container } from '../../config/di-container';
import { CleanupOldStreamsUseCase } from '../../../application/streams/use-cases/CleanupOldStreamsUseCase';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

/**
 * Cleanup Streams Job
 * Runs every hour to clean up ended streams older than 24 hours
 */
@injectable()
export class CleanupStreamsJob {
    private readonly schedule = '0 * * * *'; // Every hour

    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    getSchedule(): string {
        return this.schedule;
    }

    async execute(): Promise<void> {
        try {
            logger.info('Starting stream cleanup job');
            const startTime = this.clock.now().getTime();

            const cleanupUseCase = container.resolve(CleanupOldStreamsUseCase);
            const result = await cleanupUseCase.execute();

            const duration = this.clock.now().getTime() - startTime;

            if (result.success) {
                logger.info('Stream cleanup completed', {
                    duration,
                    deletedCount: result.deletedCount
                });
            } else {
                logger.error('Stream cleanup failed', { error: result.error });
            }
        } catch (error) {
            logger.error('Stream cleanup job failed', {
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
}

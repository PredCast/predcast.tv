import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { container } from '../../config/di-container';
import { SyncMatchesUseCase } from '../../../application/matches/use-cases/SyncMatchesUseCase';
import { ResolveFinishedMatchesUseCase } from '../../../application/matches/use-cases/ResolveFinishedMatchesUseCase';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

/**
 * Sync Matches Job
 * Runs every 10 minutes to sync matches from API-Football
 * and resolve finished matches on-chain
 */
@injectable()
export class SyncMatchesJob {
    private readonly schedule = '*/10 * * * *'; // Every 10 minutes

    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    getSchedule(): string {
        return this.schedule;
    }

    async execute(): Promise<void> {
        try {
            logger.info('Starting match synchronization job');
            const startTime = this.clock.now().getTime();

            const syncUseCase = container.resolve(SyncMatchesUseCase);
            const result = await syncUseCase.execute();

            const duration = this.clock.now().getTime() - startTime;

            logger.info('Match synchronization completed', {
                duration,
                matchesFetched: result.matchesFetched,
                matchesStored: result.matchesStored,
                contractsDeployed: result.contractsDeployed
            });

            // Resolve on-chain markets for finished matches right after sync
            try {
                const resolveUseCase = container.resolve(ResolveFinishedMatchesUseCase);
                const resolveResult = await resolveUseCase.execute();

                if (resolveResult.matchesProcessed > 0 || resolveResult.marketsResolved > 0) {
                    logger.info('Markets resolved after sync', {
                        matchesProcessed: resolveResult.matchesProcessed,
                        marketsResolved: resolveResult.marketsResolved
                    });
                }
            } catch (resolveError) {
                logger.error('Failed to resolve markets after sync', {
                    error: resolveError instanceof Error ? resolveError.message : 'Unknown error'
                });
            }
        } catch (error) {
            logger.error('Match synchronization job failed', {
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
}

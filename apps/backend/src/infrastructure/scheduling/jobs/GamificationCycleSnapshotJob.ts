import { injectable } from 'tsyringe';

import { SnapshotCycleRanksUseCase } from '../../../application/gamification/use-cases/cycles/SnapshotCycleRanksUseCase';
import { logger } from '../../logging/logger';

/** Hourly freeze of the closed leaderboard cycles (top 100) and their Leaderboard tiers. */
@injectable()
export class GamificationCycleSnapshotJob {
    private readonly schedule = '15 * * * *';

    constructor(private readonly snapshot: SnapshotCycleRanksUseCase) {}

    getSchedule(): string {
        return this.schedule;
    }

    async execute(): Promise<void> {
        try {
            const report = await this.snapshot.execute();
            if (report.status === 'skipped') {
                logger.debug('GamificationCycleSnapshotJob skipped', { reason: report.reason });
                return;
            }
            logger.info('GamificationCycleSnapshotJob completed', { ...report });
        } catch (error) {
            logger.error('GamificationCycleSnapshotJob failed', {
                error: error instanceof Error ? error.message : String(error),
            });
            throw error;
        }
    }
}

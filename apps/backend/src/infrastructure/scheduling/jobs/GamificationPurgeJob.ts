import { injectable } from 'tsyringe';

import { PurgeGamificationDataUseCase } from '../../../application/gamification/use-cases/PurgeGamificationDataUseCase';
import { logger } from '../../logging/logger';

/** Daily retention of gamification minutes, counters and seen notifications (§7.3). */
@injectable()
export class GamificationPurgeJob {
    private readonly schedule = '30 3 * * *';

    constructor(private readonly purge: PurgeGamificationDataUseCase) {}

    getSchedule(): string {
        return this.schedule;
    }

    async execute(): Promise<void> {
        try {
            const report = await this.purge.execute();
            if (report.status === 'skipped') {
                logger.debug('GamificationPurgeJob skipped', { reason: report.reason });
                return;
            }
            logger.info('GamificationPurgeJob completed', { ...report });
        } catch (error) {
            logger.error('GamificationPurgeJob failed', {
                error: error instanceof Error ? error.message : String(error),
            });
            throw error;
        }
    }
}

import { injectable } from 'tsyringe';

import { ProcessStreamMinutesUseCase } from '../../../application/gamification/use-cases/streams/ProcessStreamMinutesUseCase';
import { logger } from '../../logging/logger';

const INTERVAL_MS = 60_000;

/** Stream sessions (always, D4) and counted stream minutes (behind the flag). */
@injectable()
export class GamificationStreamMinutesJob {
    constructor(private readonly processMinutes: ProcessStreamMinutesUseCase) {}

    getIntervalMs(): number {
        return INTERVAL_MS;
    }

    async execute(): Promise<void> {
        try {
            const report = await this.processMinutes.execute();
            const changed = report.opened + report.closed + report.minutesCounted > 0;
            if (changed) logger.info('GamificationStreamMinutesJob completed', { ...report });
            else logger.debug('GamificationStreamMinutesJob completed', { ...report });
        } catch (error) {
            logger.error('GamificationStreamMinutesJob failed', {
                error: error instanceof Error ? error.message : String(error),
            });
            throw error;
        }
    }
}

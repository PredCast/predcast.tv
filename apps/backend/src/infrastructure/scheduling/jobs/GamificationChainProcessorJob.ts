import { injectable } from 'tsyringe';

import { ProcessGamificationChainUseCase } from '../../../application/gamification/use-cases/chain/ProcessGamificationChainUseCase';
import { logger } from '../../logging/logger';

const INTERVAL_MS = 60_000;

/** Off-chain XP from indexed bets, settlements, donations and moderation; exits at once when the gamification is closed. */
@injectable()
export class GamificationChainProcessorJob {
    constructor(private readonly processChain: ProcessGamificationChainUseCase) {}

    getIntervalMs(): number {
        return INTERVAL_MS;
    }

    async execute(): Promise<void> {
        try {
            const report = await this.processChain.execute();
            if (report.status === 'skipped') {
                logger.debug('GamificationChainProcessorJob skipped', { reason: report.reason });
                return;
            }
            logger.info('GamificationChainProcessorJob completed', { ...report });
        } catch (error) {
            logger.error('GamificationChainProcessorJob failed', {
                error: error instanceof Error ? error.message : String(error),
            });
            throw error;
        }
    }
}

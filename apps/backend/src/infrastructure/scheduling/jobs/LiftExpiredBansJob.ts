import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';

import { container } from '../../config/di-container';
import { LiftExpiredBansUseCase } from '../../../application/reporting/use-cases/LiftExpiredBansUseCase';
import { logger } from '../../logging/logger';

const DEFAULT_INTERVAL_MS = 60_000;

/**
 * Hygiene interval job — flips expired bans + broadcasts `lifted`.
 * Enforcement never depends on it (expiry is time-derived everywhere).
 */
@injectable()
export class LiftExpiredBansJob {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    getIntervalMs(): number {
        return DEFAULT_INTERVAL_MS;
    }

    async execute(): Promise<void> {
        const t0 = this.clock.now().getTime();
        try {
            const useCase = container.resolve(LiftExpiredBansUseCase);
            const { expired } = await useCase.execute();
            const ms = this.clock.now().getTime() - t0;
            if (expired > 0) {
                logger.info('LiftExpiredBansJob completed', { expired, ms });
            } else {
                logger.debug('LiftExpiredBansJob idle tick', { ms });
            }
        } catch (error) {
            logger.error('LiftExpiredBansJob failed', {
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
}

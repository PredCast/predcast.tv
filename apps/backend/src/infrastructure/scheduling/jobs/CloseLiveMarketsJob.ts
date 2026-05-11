import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { container } from '../../config/di-container';
import { CloseLiveMatchesMarketsUseCase } from '../../../application/matches/use-cases/CloseLiveMatchesMarketsUseCase';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

/**
 * Toutes les 60s, scanne les matches actifs et ferme on-chain les markets
 * `Open` des matches devenus non-bettables (in-play, kickoff buffer atteint,
 * postponed, cancelled). Couche 1 du defense-in-depth no-live-betting.
 */
@injectable()
export class CloseLiveMarketsJob {
    private readonly intervalMs: number = readIntervalFromEnv();

    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    getIntervalMs(): number {
        return this.intervalMs;
    }

    async execute(): Promise<void> {
        const t0 = this.clock.now().getTime();
        try {
            const useCase = container.resolve(CloseLiveMatchesMarketsUseCase);
            const result = await useCase.execute();
            const ms = this.clock.now().getTime() - t0;
            if (result.closed > 0 || result.cancelled > 0 || result.errors > 0) {
                logger.info('CloseLiveMarketsJob completed', { ...result, ms });
            } else {
                logger.debug('CloseLiveMarketsJob idle tick', { ...result, ms });
            }
        } catch (error) {
            logger.error('CloseLiveMarketsJob failed', {
                error: error instanceof Error ? error.message : 'Unknown error',
                ms: this.clock.now().getTime() - t0,
            });
        }
    }
}

function readIntervalFromEnv(): number {
    const raw = process.env.CLOSE_LIVE_JOB_INTERVAL_MS;
    if (!raw) return 60_000;
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 10_000) return 60_000;
    return n;
}

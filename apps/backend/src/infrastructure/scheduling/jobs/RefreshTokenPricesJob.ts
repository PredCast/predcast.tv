import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { container } from '../../config/di-container';
import { RefreshTokenPricesUseCase } from '../../../application/prices/use-cases/RefreshTokenPricesUseCase';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

const DEFAULT_INTERVAL_MS = 5 * 60 * 1000;
const MIN_INTERVAL_MS = 60_000;

/** Interval job — refreshes the `token_prices` cache from external feeds. */
@injectable()
export class RefreshTokenPricesJob {
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
            const useCase = container.resolve(RefreshTokenPricesUseCase);
            const result = await useCase.execute();
            const ms = this.clock.now().getTime() - t0;
            if (result.refreshed > 0 || result.errors > 0) {
                logger.info('RefreshTokenPricesJob completed', { ...result, ms });
            } else {
                logger.debug('RefreshTokenPricesJob idle tick', { ...result, ms });
            }
        } catch (error) {
            logger.error('RefreshTokenPricesJob failed', {
                error: error instanceof Error ? error.message : 'Unknown error',
                ms: this.clock.now().getTime() - t0,
            });
        }
    }
}

function readIntervalFromEnv(): number {
    const raw = process.env.PRICE_FEED_JOB_INTERVAL_MS;
    if (!raw) return DEFAULT_INTERVAL_MS;
    const n = Number(raw);
    if (!Number.isFinite(n) || n < MIN_INTERVAL_MS) return DEFAULT_INTERVAL_MS;
    return n;
}

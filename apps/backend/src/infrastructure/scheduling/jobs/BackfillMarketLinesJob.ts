import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { container } from '../../config/di-container';
import { BackfillMarketLinesUseCase } from '../../../application/blockchain-indexing/use-cases/BackfillMarketLinesUseCase';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

const DEFAULT_INTERVAL_MS = 60 * 60 * 1000; // 1h
const MIN_INTERVAL_MS = 5 * 60 * 1000;       // 5min

/** Hourly job — re-reads `getFootballMarket` for `market_events` rows missing `line`. */
@injectable()
export class BackfillMarketLinesJob {
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
            const useCase = container.resolve(BackfillMarketLinesUseCase);
            const result = await useCase.execute();
            const ms = this.clock.now().getTime() - t0;
            if (result.patched > 0 || result.skipped > 0) {
                logger.info('BackfillMarketLinesJob completed', { ...result, ms });
            } else {
                logger.debug('BackfillMarketLinesJob idle tick', { ...result, ms });
            }
        } catch (error) {
            logger.error('BackfillMarketLinesJob failed', {
                error: error instanceof Error ? error.message : 'Unknown error',
                ms: this.clock.now().getTime() - t0,
            });
        }
    }
}

function readIntervalFromEnv(): number {
    const raw = process.env.BACKFILL_LINES_JOB_INTERVAL_MS;
    if (!raw) return DEFAULT_INTERVAL_MS;
    const n = Number(raw);
    if (!Number.isFinite(n) || n < MIN_INTERVAL_MS) return DEFAULT_INTERVAL_MS;
    return n;
}

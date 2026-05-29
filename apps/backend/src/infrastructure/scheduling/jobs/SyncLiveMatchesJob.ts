import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { container } from '../../config/di-container';
import { SyncLiveMatchesUseCase } from '../../../application/matches/use-cases/SyncLiveMatchesUseCase';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

const DEFAULT_INTERVAL_MS = 30_000;

/**
 * High-frequency live-score sync (default cadence: 30s).
 *
 * The scheduler runs this with a self-rescheduling setTimeout (see
 * JobScheduler.startSelfRescheduledJob) — NOT setInterval — so a slow tick
 * (Supabase lag, API-Football latency) never causes the next tick to start
 * before the previous one finishes. setInterval would let two ticks overlap
 * and double-hit the distributed lock + the upstream API.
 */
@injectable()
export class SyncLiveMatchesJob {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    getIntervalMs(): number {
        const raw = process.env.SYNC_LIVE_JOB_INTERVAL_MS;
        if (!raw) return DEFAULT_INTERVAL_MS;
        const n = Number(raw);
        if (!Number.isFinite(n) || n < 10_000) return DEFAULT_INTERVAL_MS;
        return n;
    }

    async execute(): Promise<void> {
        try {
            const startedAt = this.clock.now().getTime();
            const useCase = container.resolve(SyncLiveMatchesUseCase);
            const result = await useCase.execute();
            const duration = this.clock.now().getTime() - startedAt;

            if (result.matchesUpdated > 0) {
                logger.info('SyncLiveMatchesJob: live snapshot applied', {
                    duration,
                    matchesFetched: result.matchesFetched,
                    matchesUpdated: result.matchesUpdated,
                });
            } else {
                logger.debug('SyncLiveMatchesJob: idle tick', {
                    duration,
                    matchesFetched: result.matchesFetched,
                });
            }
        } catch (error) {
            logger.error('SyncLiveMatchesJob failed', {
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}

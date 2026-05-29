import { inject, injectable } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { container } from '../../config/di-container';
import { ResolveHalftimeMarketUseCase } from '../../../application/matches/use-cases/ResolveHalftimeMarketUseCase';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

const DEFAULT_INTERVAL_MS = 60_000;

/**
 * Cold-path backup for {@link ResolveHalftimeMarketUseCase}. The hot path
 * lives inside `SyncLiveMatchesJob` (event-driven when the HT score is
 * newly learnt). This cron is the safety net for cases where the
 * event-driven trigger missed — worker restart between detection and
 * dispatch, lock contention, etc. — and also owns the 15-min void path
 * via `executeAll` walking every live match.
 *
 * Scheduled via `JobScheduler.startSelfRescheduledJob` (setTimeout
 * recursive, NOT setInterval) so a slow tick never overlaps with itself.
 */
@injectable()
export class ResolveHalftimeMarketsJob {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    getIntervalMs(): number {
        const raw = process.env.RESOLVE_HALFTIME_JOB_INTERVAL_MS;
        if (!raw) return DEFAULT_INTERVAL_MS;
        const n = Number(raw);
        if (!Number.isFinite(n) || n < 10_000) return DEFAULT_INTERVAL_MS;
        return n;
    }

    async execute(): Promise<void> {
        try {
            const startedAt = this.clock.now().getTime();
            const useCase = container.resolve(ResolveHalftimeMarketUseCase);
            const result = await useCase.executeAll();
            const duration = this.clock.now().getTime() - startedAt;

            if (result.resolved > 0 || result.voided > 0) {
                logger.info('ResolveHalftimeMarketsJob: cycle applied', {
                    duration,
                    scanned: result.scanned,
                    resolved: result.resolved,
                    voided: result.voided,
                });
            } else {
                logger.debug('ResolveHalftimeMarketsJob: idle tick', {
                    duration,
                    scanned: result.scanned,
                });
            }
        } catch (error) {
            logger.error('ResolveHalftimeMarketsJob failed', {
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
}

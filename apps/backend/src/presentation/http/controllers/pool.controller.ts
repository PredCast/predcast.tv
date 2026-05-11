import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { GetLatestApyUseCase } from '../../../application/pool/use-cases/GetLatestApyUseCase';
import { PoolApySnapshot } from '@chiliztv/domain/blockchain-indexing/entities/PoolApySnapshot';

function serialize(snapshot: PoolApySnapshot | null): Record<string, unknown> | null {
    if (!snapshot) return null;
    return {
        windowLabel: snapshot.windowLabel,
        apyBps: snapshot.apyBps,
        apyPostFeeBps: snapshot.apyPostFeeBps,
        periodDays: snapshot.periodDays,
        noisy: snapshot.noisy,
        ppsStart: snapshot.ppsStart.toString(),
        ppsEnd: snapshot.ppsEnd.toString(),
        blockStart: snapshot.blockStart.toString(),
        blockEnd: snapshot.blockEnd.toString(),
        computedAt: snapshot.computedAt.toISOString(),
    };
}

@injectable()
export class PoolController {
    constructor(
        @inject(GetLatestApyUseCase)
        private readonly getLatestApyUseCase: GetLatestApyUseCase,
        @inject(TOKENS.IClock)
        private readonly clock: IClock,
    ) {}

    async getApy(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.getLatestApyUseCase.execute();
            // 5-minute browser cache — the job recomputes every 15 min, so this
            // is well below the freshness floor.
            res.set('Cache-Control', 'public, max-age=300');
            res.json({
                success: true,
                apy7d: serialize(result.apy7d),
                apy30d: serialize(result.apy30d),
                timestamp: this.clock.now().getTime(),
            });
        } catch (error) {
            next(error);
        }
    }
}

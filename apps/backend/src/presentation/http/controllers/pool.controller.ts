import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';
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
                timestamp: Date.now(),
            });
        } catch (error) {
            next(error);
        }
    }
}

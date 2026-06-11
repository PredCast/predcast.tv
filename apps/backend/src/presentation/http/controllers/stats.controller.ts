import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';
import { GetPlatformStatsUseCase } from '../../../application/stats/use-cases/GetPlatformStatsUseCase';

@injectable()
export class StatsController {
    constructor(
        @inject(GetPlatformStatsUseCase)
        private readonly getPlatformStatsUseCase: GetPlatformStatsUseCase,
    ) {}

    async getPlatform(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const stats = await this.getPlatformStatsUseCase.execute();
            // Aligned with the 5-minute Redis TTL on the aggregate.
            res.set('Cache-Control', 'public, max-age=300');
            res.json(stats);
        } catch (error) {
            next(error);
        }
    }
}

import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';
import { GetTokenPricesUseCase } from '../../../application/prices/use-cases/GetTokenPricesUseCase';
import { TokenPrice } from '@chiliztv/domain/prices/entities/TokenPrice';

function serialize(price: TokenPrice): Record<string, unknown> {
    return {
        symbol: price.symbol,
        priceUsd: price.priceUsd,
        change24hPct: price.change24hPct,
        source: price.source,
        fetchedAt: price.fetchedAt.toISOString(),
    };
}

@injectable()
export class PricesController {
    constructor(
        @inject(GetTokenPricesUseCase)
        private readonly getTokenPricesUseCase: GetTokenPricesUseCase,
    ) {}

    async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const prices = await this.getTokenPricesUseCase.execute();
            const updatedAt = prices.reduce<Date | null>(
                (max, p) => (max === null || p.fetchedAt > max ? p.fetchedAt : max),
                null,
            );
            // 1-minute edge/browser cache — job refreshes every 5 min, so this
            // is well below the freshness floor.
            res.set('Cache-Control', 'public, max-age=60');
            res.json({
                prices: prices.map(serialize),
                updatedAt: (updatedAt ?? new Date(0)).toISOString(),
            });
        } catch (error) {
            next(error);
        }
    }

    async getBySymbol(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const symbol = req.params.symbol;
            if (!symbol) {
                res.status(400).json({ error: 'symbol is required' });
                return;
            }
            const price = await this.getTokenPricesUseCase.executeBySymbol(symbol);
            if (!price) {
                res.status(404).json({ error: 'Unknown or unpriced symbol', symbol: symbol.toUpperCase() });
                return;
            }
            res.set('Cache-Control', 'public, max-age=60');
            res.json(serialize(price));
        } catch (error) {
            next(error);
        }
    }
}

import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';
import { GetTokenPricesUseCase } from '../../../application/prices/use-cases/GetTokenPricesUseCase';
import { GetTokenPriceHistoryUseCase } from '../../../application/prices/use-cases/GetTokenPriceHistoryUseCase';
import {
    getCatalogEntry,
    PriceHistoryQuerySchema,
    PriceHistoryRangeSchema,
    type PriceHistoryDto,
} from '@chiliztv/shared';
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
        @inject(GetTokenPriceHistoryUseCase)
        private readonly getTokenPriceHistoryUseCase: GetTokenPriceHistoryUseCase,
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

    async getHistory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const query = PriceHistoryQuerySchema.safeParse(req.query);
            const symbol = req.params.symbol?.toUpperCase();
            if (!query.success || !symbol) {
                res.status(400).json({ error: 'Invalid range', allowed: PriceHistoryRangeSchema.options });
                return;
            }
            if (!getCatalogEntry(symbol)) {
                res.status(404).json({ error: 'Unknown symbol', symbol });
                return;
            }
            const history = await this.getTokenPriceHistoryUseCase.execute({ symbol, range: query.data.range });
            const body: PriceHistoryDto = {
                symbol: history.symbol,
                quote: 'USD',
                range: history.range,
                source: history.source,
                stale: history.stale,
                updatedAt: history.updatedAt.toISOString(),
                points: history.points,
            };
            // Matches the shortest backend TTL so browsers and edges never outlive the cache.
            res.set('Cache-Control', 'public, max-age=60');
            res.json(body);
        } catch (error) {
            next(error);
        }
    }
}

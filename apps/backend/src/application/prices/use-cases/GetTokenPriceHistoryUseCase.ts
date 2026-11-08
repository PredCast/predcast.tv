import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import { PRICE_HISTORY_FEEDS_TOKEN, type IPriceHistoryFeed } from '@chiliztv/domain/prices/ports/IPriceHistoryFeed';
import { PriceHistoryUnavailableError } from '@chiliztv/domain/prices/errors/PriceHistoryUnavailableError';
import {
    sliceHistory,
    windowForRange,
    type PriceHistoryRange,
    type PriceHistoryWindow,
    type PricePoint,
} from '@chiliztv/domain/prices/priceHistory';
import { CHAIN_IDS } from '@chiliztv/shared';

/** Cache TTL per upstream series: the 1-day series feeds the live-sensitive 1H / 24H ranges. */
const SERIES_TTL_SECONDS: Record<PriceHistoryWindow, number> = { '1d': 300, '7d': 1_800 };
/** Last good copy served (flagged stale) when the upstream fails. */
const LAST_GOOD_TTL_SECONDS = 24 * 60 * 60;

interface CachedSeries {
    readonly points: PricePoint[];
    readonly fetchedAt: string;
}

export interface GetTokenPriceHistoryInput {
    readonly symbol: string;
    readonly range: PriceHistoryRange;
    /** Settlement chain the price is read for; every chain maps to the market feed for now. */
    readonly chainId?: number;
}

export interface TokenPriceHistory {
    readonly symbol: string;
    readonly range: PriceHistoryRange;
    readonly source: string;
    readonly stale: boolean;
    readonly updatedAt: Date;
    readonly points: PricePoint[];
}

/**
 * On-demand price history: the upstream is only called when someone asks, at most once per
 * series and TTL per instance (cache single-flight), with a stale fallback on failure.
 */
@injectable()
export class GetTokenPriceHistoryUseCase {
    constructor(
        @inject(PRICE_HISTORY_FEEDS_TOKEN) private readonly feeds: ReadonlyArray<IPriceHistoryFeed>,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
    ) {}

    async execute({ symbol, range, chainId = CHAIN_IDS.chilizMainnet }: GetTokenPriceHistoryInput): Promise<TokenPriceHistory> {
        const sym = symbol.toUpperCase();
        const feed = this.feeds.find((f) => f.supports(sym, chainId));
        if (!feed) throw new NotFoundError('Price history', sym);

        const window = windowForRange(range);
        const key = `prices:history:v1:${feed.source}:${sym}:${window}`;
        const lastGoodKey = `prices:history:last:v1:${feed.source}:${sym}:${window}`;

        try {
            const series = await this.cache.getOrLoad<CachedSeries>({
                key,
                ttlSeconds: SERIES_TTL_SECONDS[window],
                loader: async () => {
                    const value: CachedSeries = {
                        points: await feed.fetchHistory(sym, window),
                        fetchedAt: this.clock.now().toISOString(),
                    };
                    await this.cache.set(lastGoodKey, value, LAST_GOOD_TTL_SECONDS);
                    return value;
                },
            });
            if (series) return this.toHistory(sym, range, feed.source, series, false);
        } catch (err) {
            if (!(err instanceof PriceHistoryUnavailableError)) throw err;
            this.logger.warn('Price history upstream failed, trying last good copy', { symbol: sym, window, error: err.message });
        }

        const lastGood = await this.cache.get<CachedSeries>(lastGoodKey);
        if (lastGood.hit) return this.toHistory(sym, range, feed.source, lastGood.value, true);
        throw new PriceHistoryUnavailableError(sym, 'upstream_error');
    }

    private toHistory(symbol: string, range: PriceHistoryRange, source: string, series: CachedSeries, stale: boolean): TokenPriceHistory {
        return {
            symbol,
            range,
            source,
            stale,
            updatedAt: new Date(series.fetchedAt),
            points: sliceHistory(series.points, range, this.clock.now()),
        };
    }
}

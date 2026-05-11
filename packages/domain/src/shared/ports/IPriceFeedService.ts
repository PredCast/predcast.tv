import type { PriceSource } from '../../prices/entities/TokenPrice';

export interface PriceQuote {
    symbol: string;
    priceUsd: number;
    change24hPct: number | null;
    source: PriceSource;
}

/**
 * External price source port. Adapters register under the DI token
 * `PRICE_FEEDS_TOKEN` as an ordered array; the first one to `supports(symbol)`
 * wins.
 */
export interface IPriceFeedService {
    readonly source: PriceSource;
    supports(symbol: string): boolean;
    /**
     * Batch fetch. Implementations must swallow their own HTTP/parse errors
     * and return a (possibly empty) subset — never throw. One down feed
     * must not block the others when the use case calls them in parallel.
     */
    fetchPrices(symbols: ReadonlyArray<string>): Promise<ReadonlyArray<PriceQuote>>;
}

export const PRICE_FEEDS_TOKEN = 'PRICE_FEEDS' as const;

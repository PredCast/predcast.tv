import type { PricePoint, PriceHistoryWindow } from '../priceHistory';

/**
 * Historical price source. Adapters register under `PRICE_HISTORY_FEEDS_TOKEN` as an
 * ordered array; the first one that `supports(symbol, chainId)` serves the request, so a
 * DEX or per-chain source can later take precedence over the aggregated market feed.
 */
export interface IPriceHistoryFeed {
    readonly source: string;
    supports(symbol: string, chainId: number): boolean;
    /** Throws `PriceHistoryUnavailableError` when the upstream fails or rate-limits. */
    fetchHistory(symbol: string, window: PriceHistoryWindow): Promise<PricePoint[]>;
}

export const PRICE_HISTORY_FEEDS_TOKEN = 'PRICE_HISTORY_FEEDS' as const;

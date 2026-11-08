import { inject, injectable } from 'tsyringe';
import axios from 'axios';
import { IPriceFeedService, PriceQuote } from '@chiliztv/domain/shared/ports/IPriceFeedService';
import { getCatalogEntry } from '@chiliztv/shared';
import { logger } from '../../logging/logger';
import { CoinGeckoHttpClient } from '../coingecko/CoinGeckoHttpClient';

interface CoinGeckoPriceMap {
    [coingeckoId: string]: {
        usd?: number;
        usd_24h_change?: number;
    };
}

@injectable()
export class CoinGeckoPriceFeed implements IPriceFeedService {
    readonly source = 'coingecko' as const;

    constructor(@inject(CoinGeckoHttpClient) private readonly client: CoinGeckoHttpClient) {}

    supports(symbol: string): boolean {
        return getCatalogEntry(symbol) !== undefined;
    }

    async fetchPrices(symbols: ReadonlyArray<string>): Promise<ReadonlyArray<PriceQuote>> {
        // Several symbols can share one CoinGecko id (wrapped/legacy variants
        // of the same fan token) — dedupe for the request, then emit one
        // quote per requested symbol so every variant gets priced.
        const ids = [...new Set(
            symbols
                .map((s) => getCatalogEntry(s)?.coingeckoId)
                .filter((id): id is string => typeof id === 'string'),
        )];
        if (ids.length === 0) return [];

        try {
            const data = await this.client.get<CoinGeckoPriceMap>('/simple/price', '/simple/price', {
                ids: ids.join(','),
                vs_currencies: 'usd',
                include_24hr_change: 'true',
            });

            const quotes: PriceQuote[] = [];
            const seen = new Set<string>();
            for (const s of symbols) {
                const entry = getCatalogEntry(s);
                if (!entry || seen.has(entry.symbol)) continue;
                const payload = data[entry.coingeckoId];
                if (!payload || typeof payload.usd !== 'number' || payload.usd < 0) continue;
                seen.add(entry.symbol);
                quotes.push({
                    symbol: entry.symbol,
                    priceUsd: payload.usd,
                    change24hPct: typeof payload.usd_24h_change === 'number' ? payload.usd_24h_change : null,
                    source: this.source,
                });
            }
            return quotes;
        } catch (err) {
            const status = axios.isAxiosError(err) ? err.response?.status : undefined;
            if (status === 429) {
                logger.warn('CoinGecko rate-limited, skipping tick', { idsCount: ids.length });
            } else {
                logger.error('CoinGecko fetch failed', {
                    status,
                    error: err instanceof Error ? err.message : String(err),
                });
            }
            return [];
        }
    }
}

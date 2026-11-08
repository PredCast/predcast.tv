import { inject, injectable } from 'tsyringe';
import axios from 'axios';

import type { IPriceHistoryFeed } from '@chiliztv/domain/prices/ports/IPriceHistoryFeed';
import type { PricePoint, PriceHistoryWindow } from '@chiliztv/domain/prices/priceHistory';
import { PriceHistoryUnavailableError } from '@chiliztv/domain/prices/errors/PriceHistoryUnavailableError';
import { getCatalogEntry } from '@chiliztv/shared';

import { CoinGeckoHttpClient } from '../coingecko/CoinGeckoHttpClient';

interface MarketChartResponse {
    prices: Array<[number, number]>;
}

const DAYS: Record<PriceHistoryWindow, number> = { '1d': 1, '7d': 7 };

/**
 * Aggregated market price (USD) from CoinGecko `market_chart`: 5-minute points over 1 day,
 * hourly over 7 days. Chain-agnostic, so it serves every chain until a DEX feed takes over.
 */
@injectable()
export class CoinGeckoPriceHistoryFeed implements IPriceHistoryFeed {
    readonly source = 'coingecko';

    constructor(@inject(CoinGeckoHttpClient) private readonly client: CoinGeckoHttpClient) {}

    supports(symbol: string, _chainId: number): boolean {
        return getCatalogEntry(symbol) !== undefined;
    }

    async fetchHistory(symbol: string, window: PriceHistoryWindow): Promise<PricePoint[]> {
        const entry = getCatalogEntry(symbol);
        if (!entry) throw new PriceHistoryUnavailableError(symbol, 'upstream_error');
        try {
            const data = await this.client.get<MarketChartResponse>(
                '/coins/:id/market_chart',
                `/coins/${entry.coingeckoId}/market_chart`,
                { vs_currency: 'usd', days: DAYS[window] },
            );
            return data.prices
                .filter(([t, p]) => Number.isFinite(t) && Number.isFinite(p) && p >= 0)
                .map(([t, p]) => ({ t: Math.trunc(t), p }));
        } catch (err) {
            if (err instanceof PriceHistoryUnavailableError) throw err;
            const rateLimited = axios.isAxiosError(err) && err.response?.status === 429;
            throw new PriceHistoryUnavailableError(entry.symbol, rateLimited ? 'rate_limited' : 'upstream_error');
        }
    }
}

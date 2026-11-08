import { apiClient } from '../client';
import type { PriceHistoryDto, PriceHistoryRangeDto, PriceQuoteDto, PricesResponseDto } from '@chiliztv/shared';

/**
 * Backend-cached token prices. Replaces direct CoinGecko calls from the
 * browser — the backend job refreshes the spot cache every 10 min (Pyth + CoinGecko).
 *   GET /prices                         — full snapshot for the token catalog
 *   GET /prices/:symbol                 — single token (404 when unknown)
 *   GET /prices/:symbol/history?range=  — USD market history, cached on demand
 */
export const pricesApi = {
    getAll: (): Promise<PricesResponseDto> =>
        apiClient.get<PricesResponseDto>('/prices'),

    getBySymbol: (symbol: string): Promise<PriceQuoteDto> =>
        apiClient.get<PriceQuoteDto>(`/prices/${symbol.toUpperCase()}`),

    getHistory: (symbol: string, range: PriceHistoryRangeDto): Promise<PriceHistoryDto> =>
        apiClient.get<PriceHistoryDto>(`/prices/${encodeURIComponent(symbol.toUpperCase())}/history?range=${range}`),
};

export type { PriceHistoryDto, PriceHistoryRangeDto, PriceQuoteDto, PricesResponseDto };

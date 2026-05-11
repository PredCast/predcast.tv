import { apiClient } from '../client';
import type { PriceQuoteDto, PricesResponseDto } from '@chiliztv/shared';

/**
 * Backend-cached token prices. Replaces direct CoinGecko calls from the
 * browser — the backend job refreshes the cache every 5 min (Pyth + CoinGecko).
 *   GET /prices            — full snapshot for the 26-token catalog
 *   GET /prices/:symbol    — single token (404 when unknown)
 */
export const pricesApi = {
    getAll: (): Promise<PricesResponseDto> =>
        apiClient.get<PricesResponseDto>('/prices'),

    getBySymbol: (symbol: string): Promise<PriceQuoteDto> =>
        apiClient.get<PriceQuoteDto>(`/prices/${symbol.toUpperCase()}`),
};

export type { PriceQuoteDto, PricesResponseDto };

'use client';

import { useQuery } from '@tanstack/react-query';
import { pricesApi, type PriceQuoteDto, type PricesResponseDto } from '@/lib/api/endpoints';

const STALE_MS = 60_000;
const REFETCH_MS = 60_000;

/** Full token-price snapshot. The backend job refreshes every 5 min. */
export function usePrices() {
    return useQuery<PricesResponseDto>({
        queryKey: ['prices'],
        queryFn: () => pricesApi.getAll(),
        staleTime: STALE_MS,
        refetchInterval: REFETCH_MS,
        refetchOnWindowFocus: false,
    });
}

/** Single-symbol shortcut; reuses the batch query when present in cache. */
export function usePrice(symbol: string | undefined | null) {
    const upper = symbol ? symbol.toUpperCase() : null;
    return useQuery<PriceQuoteDto | null>({
        queryKey: ['prices', upper],
        queryFn: async () => {
            if (!upper) return null;
            try {
                return await pricesApi.getBySymbol(upper);
            } catch {
                return null;
            }
        },
        enabled: !!upper,
        staleTime: STALE_MS,
        refetchInterval: REFETCH_MS,
        refetchOnWindowFocus: false,
    });
}

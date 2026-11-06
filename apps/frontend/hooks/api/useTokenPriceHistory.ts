'use client';

import { useQuery } from '@tanstack/react-query';

import { pricesApi, type PriceHistoryDto, type PriceHistoryRangeDto } from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/query/keys';

/** Mirrors the backend series TTL: 5 min for the 1-day series (1H / 24H), 30 min for 7D. */
const FRESHNESS_MS: Record<PriceHistoryRangeDto, number> = {
    '1h': 5 * 60_000,
    '24h': 5 * 60_000,
    '7d': 30 * 60_000,
};

interface Options {
    /** Keep polling (match live or upcoming); finished matches load once. */
    readonly live: boolean;
    readonly enabled?: boolean;
}

/** USD market history of a fan token from the backend cache (never from CoinGecko directly). */
export function useTokenPriceHistory(symbol: string | null, range: PriceHistoryRangeDto, { live, enabled = true }: Options) {
    return useQuery<PriceHistoryDto>({
        queryKey: queryKeys.prices.history(symbol ?? '', range),
        queryFn: () => pricesApi.getHistory(symbol as string, range),
        enabled: enabled && !!symbol,
        staleTime: FRESHNESS_MS[range],
        refetchInterval: live ? FRESHNESS_MS[range] : false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
    });
}

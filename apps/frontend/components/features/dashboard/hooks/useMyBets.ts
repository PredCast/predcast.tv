'use client';

import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';
import type { BetFilter, MyBetsResponse } from '../domain/bets';

interface FetchArgs {
    readonly user: string;
    readonly filter?: BetFilter;
    readonly limit?: number;
    readonly offset?: number;
}

async function fetchUserBets({ user, filter, limit = 5, offset = 0 }: FetchArgs): Promise<MyBetsResponse> {
    const params = new URLSearchParams({ user, limit: String(limit), offset: String(offset) });
    if (filter && filter !== 'all') params.set('filter', filter);
    return apiClient.get<MyBetsResponse>(`/bets?${params.toString()}`);
}

export interface UseMyBetsOptions {
    readonly user: string | undefined;
    readonly filter?: BetFilter;
    /** Default page size = 5 — matches the dashboard pagination default. */
    readonly limit?: number;
    readonly offset?: number;
}

/**
 * On-chain bets feed. 30s polling, refetch on focus. `keepPreviousData`
 * holds the previous page while the next page is in flight — avoids the
 * skeleton flash on `Next` / `pageSize` clicks.
 */
export function useMyBets(options: UseMyBetsOptions) {
    const { user, filter, limit, offset } = options;

    return useQuery<MyBetsResponse, Error>({
        queryKey: ['my-bets', user?.toLowerCase(), filter ?? 'all', limit ?? 5, offset ?? 0],
        queryFn: () => fetchUserBets({ user: user as string, filter, limit, offset }),
        enabled: !!user,
        staleTime: 15_000,
        refetchInterval: 30_000,
        refetchOnWindowFocus: true,
        placeholderData: keepPreviousData,
    });
}

/** Refetch every cached `my-bets` query (used after a claim tx). */
export function useInvalidateMyBets(): () => void {
    const qc = useQueryClient();
    return () => {
        qc.invalidateQueries({ queryKey: ['my-bets'] });
    };
}

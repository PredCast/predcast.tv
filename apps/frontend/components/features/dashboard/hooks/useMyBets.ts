'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';
import type { MyBet, MyBetsResponse, BetFilter, BetStatus } from '../domain/bets';

interface FetchArgs {
    readonly user: string;
    readonly status?: BetStatus;
    readonly limit?: number;
    readonly offset?: number;
}

const FILTER_TO_STATUS: Partial<Record<BetFilter, BetStatus>> = {
    pending: 'PENDING',
    won:     'WON',
    lost:    'LOST',
    // claimable / refundable / all are derived client-side.
};

/** Hits `GET /bets` via the shared axios client (auto-injects the JWT). */
async function fetchUserBets({ user, status, limit = 50, offset = 0 }: FetchArgs): Promise<MyBetsResponse> {
    const params = new URLSearchParams({ user, limit: String(limit), offset: String(offset) });
    if (status) params.set('status', status);
    return apiClient.get<MyBetsResponse>(`/bets?${params.toString()}`);
}

export interface UseMyBetsOptions {
    readonly user: string | undefined;
    readonly filter?: BetFilter;
    readonly limit?: number;
    readonly offset?: number;
}

/**
 * On-chain bets feed. 30s polling, refetch on focus. Server-side filter for
 * `pending|won|lost`; `claimable|refundable|all` are filtered client-side
 * because they're derived from `claimedAt` / `refundedAt`.
 */
export function useMyBets(options: UseMyBetsOptions) {
    const { user, filter, limit, offset } = options;
    const status = filter ? FILTER_TO_STATUS[filter] : undefined;

    return useQuery<MyBetsResponse, Error>({
        queryKey: ['my-bets', user?.toLowerCase(), status ?? 'all', limit ?? 50, offset ?? 0],
        queryFn: () => fetchUserBets({ user: user as string, status, limit, offset }),
        enabled: !!user,
        staleTime: 15_000,
        refetchInterval: 30_000,
        refetchOnWindowFocus: true,
    });
}

/** Refetch every cached `my-bets` query (used after a claim tx). */
export function useInvalidateMyBets(): () => void {
    const qc = useQueryClient();
    return () => {
        qc.invalidateQueries({ queryKey: ['my-bets'] });
    };
}

/**
 * Optimistic stamp of `claimedAt` / `refundedAt` on a single bet so the UI
 * flips before the indexer catches up. Reverted on next refetch if wrong.
 */
export function useStampLocalClaimed(): (txHash: `0x${string}`, logIndex: number) => void {
    const qc = useQueryClient();
    return (txHash, logIndex) => {
        qc.setQueriesData<MyBetsResponse>({ queryKey: ['my-bets'] }, (old) => {
            if (!old) return old;
            const stamped = new Date().toISOString();
            const next = old.bets.map((b: MyBet) => {
                if (b.txHash === txHash && b.logIndex === logIndex) {
                    return b.status === 'REFUNDED'
                        ? { ...b, refundedAt: stamped }
                        : { ...b, claimedAt: stamped };
                }
                return b;
            });
            return { ...old, bets: next };
        });
    };
}

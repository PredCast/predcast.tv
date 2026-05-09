'use client';

import { useQuery } from '@tanstack/react-query';

export type ApyWindow = '7d' | '30d';

export interface ApySnapshotView {
    readonly windowLabel: ApyWindow;
    readonly apyBps: number;
    readonly apyPostFeeBps: number | null;
    readonly periodDays: number;
    readonly noisy: boolean;
    readonly computedAt: string;
}

export interface ApyResponse {
    readonly success: boolean;
    readonly apy7d: ApySnapshotView | null;
    readonly apy30d: ApySnapshotView | null;
    readonly timestamp: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

async function fetchApy(): Promise<ApyResponse> {
    const res = await fetch(`${API_URL}/pool/apy`, {
        headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
        throw new Error(`APY endpoint returned ${res.status}`);
    }
    return res.json() as Promise<ApyResponse>;
}

/**
 * React Query wrapper around `/pool/apy`. The backend endpoint sets a 5-minute
 * Cache-Control header and the indexer recomputes every 15 min, so a 60s
 * staleTime + a 5-minute refetchInterval keeps the panel fresh without
 * spamming the API.
 */
export function useApyFromBackend() {
    return useQuery<ApyResponse, Error>({
        queryKey: ['pool', 'apy'],
        queryFn: fetchApy,
        staleTime: 60_000,
        refetchInterval: 5 * 60_000,
        refetchOnWindowFocus: false,
    });
}

/** "12.34%", or "—" while the value is missing or compute history insufficient. */
export function formatApy(snapshot: ApySnapshotView | null | undefined): string {
    if (!snapshot) return '—';
    return `${(snapshot.apyBps / 100).toFixed(2)}%`;
}

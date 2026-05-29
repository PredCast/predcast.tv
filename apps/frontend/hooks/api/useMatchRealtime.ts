'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/keys';
import { supabase } from '@/lib/supabase';

/**
 * Subscribe to UPDATE events on a single `matches` row (filtered by
 * `api_football_id`). Each event invalidates the corresponding React Query
 * detail cache so the page rerenders within ~1-2s of the backend write.
 *
 * Pattern mirrors {@link useMarketPools} — random channel topic per mount
 * defeats supabase-js v2's topic-based dedup, which would otherwise have
 * StrictMode return the previous (already-subscribed) channel and crash on
 * `.on()`.
 *
 * The migration 033 `REPLICA IDENTITY USING INDEX` is required for the
 * `api_football_id=eq.X` filter to receive events — DEFAULT mode only
 * publishes the PK (uuid) and the filter silently matches nothing.
 */
export function useMatchRealtime(matchId: number | string | undefined): void {
    const qc = useQueryClient();

    useEffect(() => {
        if (matchId === undefined || matchId === '' || matchId === null) return;
        const topic = `match_${matchId}_${Math.random().toString(36).slice(2, 10)}`;
        const channel = supabase
            .channel(topic)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'matches',
                    filter: `api_football_id=eq.${matchId}`,
                },
                () => {
                    void qc.invalidateQueries({ queryKey: queryKeys.matches.detail(matchId) });
                },
            )
            .subscribe();
        return () => {
            supabase.removeChannel(channel);
        };
    }, [matchId, qc]);
}

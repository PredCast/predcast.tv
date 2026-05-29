'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query/keys';
import { supabase } from '@/lib/supabase';

/**
 * Coarse subscription on ALL `matches` UPDATE events — one channel per tab,
 * not per match. On each event, invalidates the list query keys so any open
 * `/browse` or `/live` route picks up the new score within ~1-2s.
 *
 * One channel < 200 free-tier limit, regardless of how many matches the user
 * is watching. Channel reuse is multiplexed by supabase-js v2 — every tab
 * eats exactly one connection slot.
 */
export function useLiveMatchesRealtime(): void {
    const qc = useQueryClient();

    useEffect(() => {
        const topic = `matches_list_${Math.random().toString(36).slice(2, 10)}`;
        const channel = supabase
            .channel(topic)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'matches',
                },
                () => {
                    // Invalidate every list-shaped match key + the discover
                    // browse cache. The `lists()` prefix covers `/matches`
                    // + the generic `useMatches` lists; `live()` /
                    // `upcoming()` are siblings; `browse.all` powers the
                    // `/browse` discover page. Detail-key invalidation
                    // happens via `useMatchRealtime` per page.
                    void qc.invalidateQueries({ queryKey: queryKeys.matches.lists() });
                    void qc.invalidateQueries({ queryKey: queryKeys.matches.live() });
                    void qc.invalidateQueries({ queryKey: queryKeys.matches.upcoming() });
                    void qc.invalidateQueries({ queryKey: queryKeys.browse.all });
                },
            )
            .subscribe();
        return () => {
            supabase.removeChannel(channel);
        };
    }, [qc]);
}

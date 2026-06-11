'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { BanDto } from '@chiliztv/shared';

import { supabase } from '@/lib/supabase';
import { queryKeys } from '@/lib/query/keys';

interface BannedPayload {
  expiresAt: string | null;
  escalationIndex: number;
}

/**
 * Single Realtime subscription on `bans:{wallet}` — instant kick on `banned`,
 * cache refresh on `lifted`. Purely cosmetic: enforcement is server-side and
 * `useMyBan` refetches on focus as the fallback when a broadcast is missed.
 */
export function BanRealtimeProvider() {
  const { primaryWallet } = useDynamicContext();
  const queryClient = useQueryClient();
  const router = useRouter();

  const wallet = primaryWallet?.address?.toLowerCase();

  useEffect(() => {
    if (!wallet) return;

    const channel = supabase
      .channel(`bans:${wallet}`)
      .on('broadcast', { event: 'banned' }, ({ payload }) => {
        const data = payload as BannedPayload;
        // Placeholder id/startsAt — the next `useMyBan` refetch swaps in the
        // authoritative row; the UI only reads status/expiresAt.
        const ban: BanDto = {
          id: 'realtime',
          status: 'active',
          startsAt: new Date().toISOString(),
          expiresAt: data.expiresAt ?? null,
          escalationIndex: data.escalationIndex,
        };
        queryClient.setQueryData(queryKeys.bans.me(), { success: true, ban });
        queryClient.invalidateQueries({ queryKey: queryKeys.bans.me() });
        toast.error('Your account has been restricted', {
          description: data.expiresAt
            ? `Live access suspended until ${new Date(data.expiresAt).toLocaleString()}`
            : 'Live access suspended.',
        });
        router.push('/dashboard');
      })
      .on('broadcast', { event: 'lifted' }, () => {
        queryClient.invalidateQueries({ queryKey: queryKeys.bans.me() });
        toast.success('Your account restriction was lifted');
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [wallet, queryClient, router]);

  return null;
}

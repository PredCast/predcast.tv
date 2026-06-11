'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import type { BanDto } from '@chiliztv/shared';

import { bansApi } from '@/lib/api/endpoints/bans';
import { queryKeys } from '@/lib/query/keys';
import { useAuth } from '@/providers/auth-provider';

/**
 * Active ban of the connected wallet. `refetchOnWindowFocus` is the fallback
 * of the Realtime kick — the server enforces the ban regardless, this only
 * drives the banner/gating UI.
 */
export function useMyBan() {
  const { isAuthenticated } = useAuth();
  return useQuery<{ success: boolean; ban: BanDto | null }>({
    queryKey: queryKeys.bans.me(),
    queryFn: () => bansApi.me(),
    enabled: isAuthenticated,
    staleTime: 30_000,
    refetchOnWindowFocus: true,
  });
}

/** Imperative cache write used by the Realtime `banned`/`lifted` events. */
export function useSetMyBan() {
  const queryClient = useQueryClient();
  return (ban: BanDto | null) => {
    queryClient.setQueryData(queryKeys.bans.me(), { success: true, ban });
  };
}

'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AdminAdjustXpBody } from '@chiliztv/shared';

import { gamificationApi } from '@/lib/api/endpoints/gamification';
import { queryKeys } from '@/lib/query/keys';

/** Player block (admin+); `enabled` lets lower roles skip a call the backend would refuse. */
export function useAccountGamification(wallet: string, enabled = true) {
  return useQuery({
    queryKey: queryKeys.gamification.account(wallet),
    queryFn: () => gamificationApi.getAccount(wallet),
    select: (res) => res.data,
    staleTime: 15_000,
    enabled: enabled && wallet.length > 0,
  });
}

function useAccountMutation<T, R>(wallet: string, fn: (input: T) => Promise<R>) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: queryKeys.gamification.account(wallet) });
    },
  });
}

export function useSuspendGamification(wallet: string) {
  return useAccountMutation(wallet, ({ suspend, reason }: { suspend: boolean; reason: string }) =>
    suspend ? gamificationApi.suspend(wallet, reason) : gamificationApi.unsuspend(wallet, reason),
  );
}

export function useAdjustXp(wallet: string) {
  return useAccountMutation(wallet, (body: AdminAdjustXpBody) => gamificationApi.adjustXp(wallet, body));
}

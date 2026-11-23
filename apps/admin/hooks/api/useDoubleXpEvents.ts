'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AdminCreateDoubleXpBody } from '@chiliztv/shared';

import { gamificationApi } from '@/lib/api/endpoints/gamification';
import { queryKeys } from '@/lib/query/keys';

export const DOUBLE_XP_PAGE = 50;

/** Admin list; the backend reads the database directly (no cache), mutations refresh it. */
export function useDoubleXpEvents() {
  return useQuery({
    queryKey: queryKeys.gamification.doubleXp(DOUBLE_XP_PAGE),
    queryFn: () => gamificationApi.listDoubleXp(DOUBLE_XP_PAGE),
    select: (res) => res.data,
    staleTime: 30_000,
  });
}

export function useCreateDoubleXp() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: AdminCreateDoubleXpBody) => gamificationApi.createDoubleXp(body),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: queryKeys.gamification.all });
    },
  });
}

export function useCancelDoubleXp() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, note }: { id: string; note: string }) => gamificationApi.cancelDoubleXp(id, note),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: queryKeys.gamification.all });
    },
  });
}

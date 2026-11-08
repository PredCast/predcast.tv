'use client';

import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { UnpublishMatchBody } from '@chiliztv/shared';

import { marketsApi, type MatchListParams } from '@/lib/api/endpoints/markets';
import { queryKeys } from '@/lib/query/keys';

/** Server-side search of the Markets page; keeps the previous page on screen while the next loads. */
export function useAdminMatches(params: MatchListParams) {
  return useQuery({
    queryKey: queryKeys.markets.list(params),
    queryFn: () => marketsApi.list(params),
    select: (res) => res.data,
    placeholderData: keepPreviousData,
    staleTime: 15_000,
  });
}

/** Every mutation here changes the list, the overview, the dashboard and possibly the signer balance. */
function useInvalidateMarkets() {
  const qc = useQueryClient();
  return () => {
    void qc.invalidateQueries({ queryKey: queryKeys.markets.all });
    void qc.invalidateQueries({ queryKey: queryKeys.overview });
    void qc.invalidateQueries({ queryKey: queryKeys.dashboard.all });
  };
}

export function useDeployMatch() {
  const invalidate = useInvalidateMarkets();
  return useMutation({
    mutationFn: ({ matchId, chainId }: { matchId: number; chainId: number }) => marketsApi.deploy(matchId, chainId),
    onSuccess: invalidate,
  });
}

export function useRetryMarketsSetup() {
  const invalidate = useInvalidateMarkets();
  return useMutation({ mutationFn: (matchId: number) => marketsApi.retrySetup(matchId), onSuccess: invalidate });
}

export function usePublishMatch() {
  const invalidate = useInvalidateMarkets();
  return useMutation({ mutationFn: (matchId: number) => marketsApi.publish(matchId), onSuccess: invalidate });
}

export function useUnpublishMatch() {
  const invalidate = useInvalidateMarkets();
  return useMutation({
    mutationFn: ({ matchId, body }: { matchId: number; body: UnpublishMatchBody }) => marketsApi.unpublish(matchId, body),
    onSuccess: invalidate,
  });
}

export function useCloseMatchMarkets() {
  const invalidate = useInvalidateMarkets();
  return useMutation({ mutationFn: (matchId: number) => marketsApi.closeMarkets(matchId), onSuccess: invalidate });
}

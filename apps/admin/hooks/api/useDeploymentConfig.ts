'use client';

import { useQuery } from '@tanstack/react-query';

import { marketsApi } from '@/lib/api/endpoints/markets';
import { queryKeys } from '@/lib/query/keys';

/** Chains, signer balance and market lineup; the backend caches it 15 s. */
export function useDeploymentConfig() {
  return useQuery({
    queryKey: queryKeys.markets.deploymentConfig,
    queryFn: () => marketsApi.deploymentConfig(),
    select: (res) => res.data,
    staleTime: 15_000,
    refetchInterval: 60_000,
  });
}

'use client';

import { useQuery } from '@tanstack/react-query';

import { jobsApi } from '@/lib/api/endpoints/jobs';
import { queryKeys } from '@/lib/query/keys';

export function useIndexers() {
  return useQuery({
    queryKey: queryKeys.jobs.indexers,
    queryFn: () => jobsApi.indexers(),
    select: (res) => res.data,
    staleTime: 15_000,
    refetchInterval: 15_000,
    refetchIntervalInBackground: false,
  });
}

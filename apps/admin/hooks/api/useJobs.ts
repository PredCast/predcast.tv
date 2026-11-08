'use client';

import { useQuery } from '@tanstack/react-query';

import { jobsApi } from '@/lib/api/endpoints/jobs';
import { queryKeys } from '@/lib/query/keys';

/** 10 s refresh while the tab is visible (backend cache 5 s); never in the background. */
export function useJobs({ enabled = true }: { enabled?: boolean } = {}) {
  return useQuery({
    queryKey: queryKeys.jobs.list,
    queryFn: () => jobsApi.list(),
    select: (res) => res.data,
    enabled,
    staleTime: 5_000,
    refetchInterval: 10_000,
    refetchIntervalInBackground: false,
  });
}

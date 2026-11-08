'use client';

import { useQuery } from '@tanstack/react-query';

import { jobsApi } from '@/lib/api/endpoints/jobs';
import { queryKeys } from '@/lib/query/keys';

/** History of an expanded job row. */
export function useJobRuns(name: string, enabled: boolean) {
  return useQuery({
    queryKey: queryKeys.jobs.runs(name),
    queryFn: () => jobsApi.runs(name),
    select: (res) => res.data,
    enabled,
    staleTime: 5_000,
    refetchInterval: enabled ? 10_000 : false,
    refetchIntervalInBackground: false,
  });
}

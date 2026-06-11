import { useQuery } from '@tanstack/react-query';

import { statsApi } from '@/lib/api/stats';

/** Aligned with the backend's 5-minute cache on /stats/platform. */
const STALE_TIME_MS = 300_000;

export function usePlatformStats() {
  return useQuery({
    queryKey: ['stats', 'platform'],
    queryFn: statsApi.getPlatform,
    staleTime: STALE_TIME_MS,
    retry: 1,
  });
}

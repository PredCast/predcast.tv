import { useQuery } from '@tanstack/react-query';
import { browseApi } from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/query/keys';
import { useLiveMatchesRealtime } from './useLiveMatchesRealtime';

// Public read — Realtime push + 60s fallback poll for dropped channels.
// `useLiveMatchesRealtime` invalidates `browse.all` on every matches UPDATE,
// so the discover ticker reacts without an extra channel.
export function useBrowseMatches() {
  useLiveMatchesRealtime();

  return useQuery({
    queryKey: queryKeys.browse.all,
    queryFn: browseApi.getMatches,
    staleTime: 30_000,
    refetchInterval: 60_000,
    refetchIntervalInBackground: false,
  });
}
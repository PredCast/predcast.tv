import { useQuery } from '@tanstack/react-query';
import { matchesApi } from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/query/keys';
import { Match } from '@/types/api.types';
import { useAuth } from '@/hooks/useAuth';
import { LIVE_STATUSES } from '@chiliztv/domain/matches/policies/BettablePolicy';
import { useMatchRealtime } from './useMatchRealtime';
import { useLiveMatchesRealtime } from './useLiveMatchesRealtime';

const LIVE_STATUS_SET: ReadonlySet<string> = new Set(LIVE_STATUSES);
/**
 * Live-tab polling cadence. Kept as a safety net even with Realtime — a
 * dropped Supabase channel (rare but observed in mobile background tabs)
 * would otherwise silently stop updating. 60s is conservative; the Realtime
 * push should beat this every time when the channel is alive.
 */
const LIVE_REFETCH_MS = 60_000;

/**
 * @notice Hook to fetch all matches
 * @return Query result with matches data
 */
export function useMatches() {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: queryKeys.matches.lists(),
    queryFn: matchesApi.getAll,
    enabled: isAuthenticated,
  });
}

/**
 * @notice Hook to fetch single match by ID
 * @param id Match ID
 * @return Query result with match data
 */
export function useMatch(id: number | string) {
  const { isAuthenticated } = useAuth();

  // Realtime push: invalidate this detail key whenever the row updates.
  // Polling below remains as a safety net (channel can drop on mobile bg).
  useMatchRealtime(id);

  return useQuery<Match>({
    queryKey: queryKeys.matches.detail(id),
    queryFn: () => matchesApi.getById(id),
    enabled: !!id && isAuthenticated,
    // Push handles freshness; this is the fallback when the Supabase channel
    // is missing or temporarily disconnected. Live matches refetch once a
    // minute; pre-match (NS/TBD) and post-match (FT/...) don't poll at all.
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      if (status && LIVE_STATUS_SET.has(status)) return LIVE_REFETCH_MS;
      return false;
    },
    refetchIntervalInBackground: false,
  });
}

/**
 * @notice Hook to fetch live matches
 * @return Query result with live matches data
 */
export function useLiveMatches() {
  const { isAuthenticated } = useAuth();

  // Coarse Realtime — any matches UPDATE invalidates the live list. The 60s
  // refetch below survives a dropped channel.
  useLiveMatchesRealtime();

  return useQuery({
    queryKey: queryKeys.matches.live(),
    queryFn: matchesApi.getLive,
    refetchInterval: LIVE_REFETCH_MS,
    refetchIntervalInBackground: false,
    enabled: isAuthenticated,
  });
}

/**
 * @notice Hook to fetch upcoming matches
 * @return Query result with upcoming matches data
 */
export function useUpcomingMatches() {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: queryKeys.matches.upcoming(),
    queryFn: matchesApi.getUpcoming,
    enabled: isAuthenticated,
  });
}

/**
 * @notice Hook to fetch matches by league
 * @param league League name
 * @return Query result with league matches data
 */
export function useMatchesByLeague(league: string) {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: queryKeys.matches.byLeague(league),
    queryFn: () => matchesApi.getByLeague(league),
    enabled: !!league && isAuthenticated,
  });
}

/**
 * @notice Hook to fetch match statistics summary
 * @return Query result with match stats
 */
export function useMatchStats() {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: queryKeys.matches.stats(),
    queryFn: matchesApi.getStats,
    enabled: isAuthenticated,
  });
}

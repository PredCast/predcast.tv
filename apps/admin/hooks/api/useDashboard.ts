'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { dashboardApi } from '@/lib/api/endpoints/dashboard';
import { queryKeys, type DashboardCard } from '@/lib/query/keys';

/** Live cards refresh every 15–30 s while the tab is visible; the others on mount / focus only. */
const LIVE_REFRESH_MS: Partial<Record<DashboardCard, number>> = {
  kpis: 30_000,
  live: 15_000,
  alerts: 15_000,
  operations: 15_000,
  health: 30_000,
  moderation: 30_000,
};

function useCard<T>(card: DashboardCard, fetcher: () => Promise<{ data: T }>, enabled = true) {
  return useQuery({
    queryKey: queryKeys.dashboard.card(card),
    queryFn: fetcher,
    select: (res) => res.data,
    enabled,
    staleTime: 10_000,
    refetchInterval: LIVE_REFRESH_MS[card] ?? false,
    refetchIntervalInBackground: false,
    retry: 1,
  });
}

export const useDashboardKpis = () => useCard('kpis', dashboardApi.kpis);
export const useDashboardLive = () => useCard('live', dashboardApi.live);
export const useDashboardEvents = () => useCard('events', dashboardApi.events);
export const useDashboardAlerts = () => useCard('alerts', dashboardApi.alerts);
export const useDashboardActivity = () => useCard('activity', dashboardApi.activity);
export const useDashboardHealth = (enabled: boolean) => useCard('health', dashboardApi.health, enabled);
export const useDashboardModeration = (enabled: boolean) => useCard('moderation', dashboardApi.moderation, enabled);
export const useDashboardSuggestions = (enabled: boolean) => useCard('suggestions', dashboardApi.suggestions, enabled);
export const useDashboardOperations = (enabled: boolean) => useCard('operations', dashboardApi.operations, enabled);

export function useCancelOperation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (operationId: string) => dashboardApi.cancelOperation(operationId),
    onSettled: () => qc.invalidateQueries({ queryKey: queryKeys.dashboard.all }),
  });
}

/** Header refresh: every dashboard card at once. */
export function useRefreshDashboard() {
  const qc = useQueryClient();
  return () => qc.invalidateQueries({ queryKey: queryKeys.dashboard.all });
}

import type {
  DashboardActivityDto,
  DashboardAlertsDto,
  DashboardEventsDto,
  DashboardHealthDto,
  DashboardKpisDto,
  DashboardLiveDto,
  DashboardModerationDto,
  DashboardOperationsDto,
  DashboardSuggestionsDto,
} from '@chiliztv/shared';

import { apiClient } from '../client';

type Envelope<T> = { success: boolean; data: T };
const get = <T>(card: string) => () => apiClient.get<Envelope<T>>(`/admin/dashboard/${card}`);

/** One call per dashboard card; fields outside the caller's role come back null. */
export const dashboardApi = {
  kpis: get<DashboardKpisDto>('kpis'),
  live: get<DashboardLiveDto>('live'),
  events: get<DashboardEventsDto>('events'),
  suggestions: get<DashboardSuggestionsDto>('suggestions'),
  operations: get<DashboardOperationsDto>('operations'),
  health: get<DashboardHealthDto>('health'),
  alerts: get<DashboardAlertsDto>('alerts'),
  moderation: get<DashboardModerationDto>('moderation'),
  activity: get<DashboardActivityDto>('activity'),
  cancelOperation: (operationId: string) =>
    apiClient.post<Envelope<{ operationId: string; status: 'cancelled' }>>(`/admin/match-operations/${operationId}/cancel`),
};

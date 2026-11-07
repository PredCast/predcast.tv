import type {
  AdminMatchListQuery,
  AdminMatchPageDto,
  DeploymentConfigDto,
  MatchOperationDto,
  UnpublishMatchBody,
} from '@chiliztv/shared';

import { apiClient } from '../client';

interface Envelope<T> {
  success: boolean;
  data: T;
}

/** Filters the Markets page sends; every field is optional on the wire (booleans go out as "true" / "false"). */
export type MatchListParams = Partial<AdminMatchListQuery>;

function qs(params: MatchListParams): string {
  const entries = Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== '');
  if (entries.length === 0) return '';
  return '?' + entries.map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`).join('&');
}

/** Deploy / publish workflow. `:id` is the API-Football id of the match. */
export const marketsApi = {
  list: (params: MatchListParams) => apiClient.get<Envelope<AdminMatchPageDto>>(`/admin/matches${qs(params)}`),
  deploymentConfig: () => apiClient.get<Envelope<DeploymentConfigDto>>('/admin/deployment-config'),
  operation: (operationId: string) => apiClient.get<Envelope<MatchOperationDto>>(`/admin/match-operations/${operationId}`),
  deploy: (matchId: number, chainId: number) =>
    apiClient.post<Envelope<MatchOperationDto>>(`/admin/matches/${matchId}/deploy`, { chainId }),
  retrySetup: (matchId: number) => apiClient.post<Envelope<MatchOperationDto>>(`/admin/matches/${matchId}/retry-setup`),
  publish: (matchId: number) => apiClient.post<Envelope<{ publishedAt: string }>>(`/admin/matches/${matchId}/publish`),
  unpublish: (matchId: number, body: UnpublishMatchBody) =>
    apiClient.post<Envelope<{ cancelOperation: MatchOperationDto | null }>>(`/admin/matches/${matchId}/unpublish`, body),
  closeMarkets: (matchId: number) =>
    apiClient.post<Envelope<{ closed: number; skipped: number }>>(`/admin/matches/${matchId}/close-markets`),
};

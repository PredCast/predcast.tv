import type { AdminMatchRowDto, MatchOperationDto } from '@chiliztv/shared';

/** Why the Deploy button is disabled, keyed by `canDeployMatch` reason codes. */
export const DEPLOY_BLOCKED_LABELS: Record<string, string> = {
  ALREADY_DEPLOYED: 'Already deployed',
  OPERATION_IN_PROGRESS: 'An operation is running',
  LIVE: 'Match in play',
  KICKOFF_BUFFER: 'Kicks off in less than 2 min',
  FINISHED: 'Match finished',
  BLOCKED: 'Postponed or cancelled',
  UNKNOWN_STATUS: 'Unknown status',
};

export const OPERATION_LABELS: Record<MatchOperationDto['kind'], string> = {
  deploy: 'Deploy',
  retry_setup: 'Markets setup',
  cancel_markets: 'Cancel markets',
};

export type Publication = 'not_deployed' | 'published' | 'hidden';

export function publicationOf(row: Pick<AdminMatchRowDto, 'bettingContractAddress' | 'publishedAt'>): Publication {
  if (!row.bettingContractAddress) return 'not_deployed';
  return row.publishedAt ? 'published' : 'hidden';
}

export function isOperationActive(op: MatchOperationDto | null | undefined): boolean {
  return op?.status === 'pending' || op?.status === 'running';
}

/** Error message of an axios call to the backend envelope. */
export function apiErrorMessage(err: unknown): string {
  const data = (err as { response?: { data?: { error?: { message?: string } } } }).response?.data;
  return data?.error?.message ?? (err instanceof Error ? err.message : 'Request failed');
}

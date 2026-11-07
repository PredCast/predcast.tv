import type { MatchListParams } from '@/lib/api/endpoints/markets';

export type MarketsTab = 'to_deploy' | 'deployed';
export type DeployedStatus = 'all' | 'upcoming' | 'live' | 'finished';
export type PublicationFilter = 'all' | 'published' | 'hidden';

export interface MarketsFilters {
  readonly search: string;
  /** `YYYY-MM-DD` from the date inputs; empty when unset. */
  readonly fromDate: string;
  readonly toDate: string;
  readonly status: DeployedStatus;
  readonly publication: PublicationFilter;
  readonly offset: number;
}

export const PAGE_SIZE = 25;

export const EMPTY_FILTERS: MarketsFilters = { search: '', fromDate: '', toDate: '', status: 'all', publication: 'all', offset: 0 };

const startOfDay = (d: string) => new Date(`${d}T00:00:00`).toISOString();
const endOfDay = (d: string) => new Date(`${d}T23:59:59`).toISOString();

/**
 * "To deploy": upcoming, undeployed matches from now on (or the picked day), soonest first.
 * "Deployed": every deployed match, latest kickoff first, with status and publication filters.
 */
export function listParamsFor(tab: MarketsTab, f: MarketsFilters, now: Date): MatchListParams {
  const common: MatchListParams = {
    search: f.search.trim() || undefined,
    to: f.toDate ? endOfDay(f.toDate) : undefined,
    limit: PAGE_SIZE,
    offset: f.offset,
  };
  if (tab === 'to_deploy') {
    return {
      ...common,
      deployed: false,
      status: 'upcoming',
      from: f.fromDate ? startOfDay(f.fromDate) : now.toISOString(),
      sort: 'kickoff_asc',
    };
  }
  return {
    ...common,
    deployed: true,
    status: f.status === 'all' ? undefined : f.status,
    published: f.publication === 'all' ? undefined : f.publication === 'published',
    from: f.fromDate ? startOfDay(f.fromDate) : undefined,
    sort: 'kickoff_desc',
  };
}

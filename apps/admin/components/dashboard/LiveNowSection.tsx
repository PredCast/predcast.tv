'use client';

import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { compactCount } from '@/lib/dashboard/liveMarkets';
import { fmtHourMinute, fmtSpan } from '@/lib/ui/time';
import { useNow } from '@/hooks/useNow';
import { useDashboardLive } from '@/hooks/api/useDashboard';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardLink } from '@/components/common/CardLink';
import { EmptyState } from '@/components/common/EmptyState';
import { Skeleton } from '@/components/common/Skeleton';

import { LiveMatchCard } from './LiveMatchCard';

export function LiveNowSection({ showMarketsLink }: Readonly<{ showMarketsLink: boolean }>) {
  const { data, isLoading, error, refetch, isFetching } = useDashboardLive();
  const now = useNow();

  const lastSync = data?.feed.lastSuccessAt ? new Date(data.feed.lastSuccessAt) : null;
  const stale = data?.feed.stale && data.matches.length > 0;
  const staleLabel = stale && now ? (lastSync ? `Feed stale · ${fmtSpan(now.getTime() - lastSync.getTime())}` : 'Feed never synced') : null;
  const streams = data?.matches.reduce((s, m) => s + m.streams.count, 0) ?? 0;
  const viewers = data?.matches.reduce((s, m) => s + m.streams.viewers, 0) ?? 0;

  return (
    <section aria-label="Live now" className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="font-display text-[26px] font-extrabold uppercase leading-7 text-white">Live now</h2>
        {data && data.matches.length > 0 && (
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-meta">
            {data.matches.length} matches · {streams} streams · {compactCount(viewers)} viewers
          </span>
        )}
        {stale && (
          <span className="inline-flex h-6 items-center gap-1.5 rounded-badge border border-warning/45 px-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-warning">
            ▲ Scores stale{lastSync ? ` · last sync ${fmtHourMinute(lastSync)}` : ''}
          </span>
        )}
        {showMarketsLink && (
          <span className="ml-auto">
            <CardLink href="/markets">All markets</CardLink>
          </span>
        )}
      </div>
      {isLoading && (
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
      )}
      {error && !data && (
        <Card tone="danger">
          <CardError title="Couldn't load live matches" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
        </Card>
      )}
      {data && data.matches.length === 0 && (
        <EmptyState framed icon="video" title="No match in play" hint="Deployed matches appear here at kickoff." py="py-10" />
      )}
      {data && data.matches.length > 0 && (
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {data.matches.map((m) => (
            <LiveMatchCard key={m.apiFootballId} match={m} feedStale={staleLabel} />
          ))}
        </div>
      )}
    </section>
  );
}

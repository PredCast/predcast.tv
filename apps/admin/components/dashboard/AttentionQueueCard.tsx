'use client';

import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { useNow } from '@/hooks/useNow';
import { useDashboardModeration } from '@/hooks/api/useDashboard';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { CardLink } from '@/components/common/CardLink';
import { Icon } from '@/components/common/Icon';
import { Skeleton } from '@/components/common/Skeleton';

import { ActiveBanRow } from './ActiveBanRow';
import { QueueReportRow } from './QueueReportRow';

const SUB_HEAD = 'px-4 pb-1.5 pt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-meta';

/** Open reports by severity and the latest active bans (admin and moderator). */
export function AttentionQueueCard() {
  const { data, isLoading, error, refetch, isFetching } = useDashboardModeration(true);
  const now = useNow();

  return (
    <Card as="section" label="Moderation" className="flex flex-col">
      <CardHead title="Moderation" icon="flag" count={data ? `${data.openTotal} open` : undefined} right={<CardLink href="/moderation">Open queue</CardLink>} />
      {isLoading && <Skeleton className="m-4 h-56" />}
      {error && !data && (
        <CardError title="Couldn't load moderation" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && (
        <>
          <div className={SUB_HEAD}>Needs attention · by severity</div>
          {data.reports.length === 0 ? (
            <p className="flex items-center gap-2.5 border-b border-line-subtle px-4 py-4 text-[14px] text-fg-body">
              <Icon n="shieldCheck" s={16} className="text-positive" />
              Queue is clear. New reports land here, sorted by severity.
            </p>
          ) : (
            data.reports.map((r) => <QueueReportRow key={r.id} report={r} now={now} />)
          )}
          <div className={SUB_HEAD}>Active bans · {data.activeTotal}</div>
          {data.bans.length === 0 ? (
            <p className="px-4 pb-4 pt-1 text-[14px] text-fg-body">No active ban.</p>
          ) : (
            data.bans.map((b) => <ActiveBanRow key={b.id} ban={b} />)
          )}
        </>
      )}
    </Card>
  );
}

'use client';

import { useAdminSession } from '@/providers/AdminSessionProvider';
import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { upstreamTiles } from '@/lib/dashboard/upstreams';
import { isAllowedForNav } from '@/lib/rbac';
import { useNow } from '@/hooks/useNow';
import { useDashboardHealth } from '@/hooks/api/useDashboard';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { CardLink } from '@/components/common/CardLink';
import { Skeleton } from '@/components/common/Skeleton';
import { THead } from '@/components/common/THead';

import { HEALTH_JOB_COLUMNS, HealthJobRow } from './HealthJobRow';
import { UpstreamTile } from './UpstreamTile';

const SHOWN = 8;
const RANK = { failing: 0, late: 1, never_ran: 2, ok: 3 } as const;

/** Upstream APIs and the jobs that need attention first (admin and moderator). */
export function SystemHealthCard() {
  const { role } = useAdminSession();
  const { data, isLoading, error, refetch, isFetching } = useDashboardHealth(true);
  const now = useNow();
  const healthy = data?.jobs.filter((j) => j.health === 'ok').length ?? 0;
  const jobs = data ? [...data.jobs].sort((a, b) => RANK[a.health] - RANK[b.health]).slice(0, SHOWN) : [];

  return (
    <Card as="section" label="System health" className="flex flex-col">
      <CardHead
        title="System health"
        right={
          <>
            {data && (
              <Badge tone={healthy === data.jobs.length ? 'positive' : 'warning'}>
                {healthy}/{data.jobs.length} healthy
              </Badge>
            )}
            {isAllowedForNav(role, ['admin']) && <CardLink href="/jobs">All jobs</CardLink>}
          </>
        }
      />
      {isLoading && <Skeleton className="m-4 h-56" />}
      {error && !data && (
        <CardError title="Couldn't load system health" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && (
        <>
          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
            {upstreamTiles(data, now).map((t) => (
              <UpstreamTile key={t.name} {...t} />
            ))}
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[420px]">
              <THead cols={HEALTH_JOB_COLUMNS}>
                <span>Job</span>
                <span>Every</span>
                <span>Last run</span>
                <span className="text-right">Next</span>
              </THead>
              {jobs.map((j) => (
                <HealthJobRow key={j.name} job={j} now={now} />
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

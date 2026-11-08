'use client';

import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { useDashboardActivity } from '@/hooks/api/useDashboard';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { EmptyState } from '@/components/common/EmptyState';
import { Skeleton } from '@/components/common/Skeleton';
import { THead } from '@/components/common/THead';

import { ACTIVITY_COLUMNS, ActivityRow } from './ActivityRow';

const SCOPES = { all: 'All actors', moderation: 'Moderation', finance: 'Finance & events' } as const;

/** Latest audit entries in the viewer's scope. */
export function ActivityFeedCard() {
  const { data, isLoading, error, refetch, isFetching } = useDashboardActivity();
  return (
    <Card as="section" label="Activity">
      <CardHead title="Activity" meta={`Audit log${data ? ` · ${SCOPES[data.scope]}` : ''}`} />
      {isLoading && <Skeleton className="m-4 h-40" />}
      {error && !data && (
        <CardError title="Couldn't load activity" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && data.entries.length === 0 && <EmptyState icon="file" title="No activity yet" hint="Admin actions appear here as they happen." py="py-10" />}
      {data && data.entries.length > 0 && (
        <div className="overflow-x-auto">
          <div className="min-w-[720px]">
            <THead cols={ACTIVITY_COLUMNS}>
              <span>Time</span>
              <span>Who</span>
              <span>Action</span>
              <span>Target</span>
              <span className="text-right">Ref</span>
            </THead>
            {data.entries.map((e) => (
              <ActivityRow key={e.id} entry={e} />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

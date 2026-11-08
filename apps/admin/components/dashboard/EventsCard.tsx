'use client';

import { useState } from 'react';

import type { AdminMatchRowDto } from '@chiliztv/shared';

import { useAdminSession } from '@/providers/AdminSessionProvider';
import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { isAllowedForNav } from '@/lib/rbac';
import { useDashboardEvents } from '@/hooks/api/useDashboard';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { CardLink } from '@/components/common/CardLink';
import { EmptyState } from '@/components/common/EmptyState';
import { Skeleton } from '@/components/common/Skeleton';
import { THead } from '@/components/common/THead';
import { UnpublishDialog } from '@/components/markets/UnpublishDialog';

import { EventRow } from './EventRow';

export function EventsCard() {
  const { role } = useAdminSession();
  const { data, isLoading, error, refetch, isFetching } = useDashboardEvents();
  const [hiding, setHiding] = useState<AdminMatchRowDto | null>(null);

  const showMoney = role !== 'moderator';
  const showActions = isAllowedForNav(role, ['admin']);
  const cols = ['64px', 'minmax(0,1fr)', '128px', ...(showMoney ? ['72px', '48px'] : []), ...(showActions ? ['96px'] : [])].join(' ');

  return (
    <Card as="section" label="Upcoming events" className="flex flex-col">
      <CardHead
        title="Upcoming events"
        icon="calendar"
        count={data?.total}
        meta="Deployed · next 7 days"
        right={showActions && <CardLink href="/markets">All events</CardLink>}
      />
      {isLoading && <Skeleton className="m-4 h-56" />}
      {error && !data && (
        <CardError title="Couldn't load events" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && data.events.length === 0 && (
        <EmptyState
          icon="calendar"
          title="No event in the next 7 days"
          hint={showActions ? 'Deploy a match from the suggestions to create the next event. Players only see published events.' : undefined}
          py="py-14"
        />
      )}
      {data && data.events.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <div className={showMoney ? 'min-w-[620px]' : 'min-w-[460px]'}>
              <THead cols={cols}>
                <span>Kickoff</span>
                <span>Match</span>
                <span>Status</span>
                {showMoney && (
                  <>
                    <span className="text-right">Pool</span>
                    <span className="text-right">Bets</span>
                  </>
                )}
                {showActions && <span className="text-right">Action</span>}
              </THead>
              {data.events.map((e) => (
                <EventRow key={e.apiFootballId} event={e} cols={cols} showMoney={showMoney} onHide={setHiding} />
              ))}
            </div>
          </div>
          <div className="mt-auto border-t border-line-subtle px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta">
            Showing {data.events.length} of {data.total} · sorted by kickoff
          </div>
        </>
      )}
      <UnpublishDialog match={hiding} onClose={() => setHiding(null)} />
    </Card>
  );
}

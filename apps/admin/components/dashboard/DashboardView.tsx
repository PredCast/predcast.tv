'use client';

import { useIsFetching, useQueryClient } from '@tanstack/react-query';

import { useAdminSession } from '@/providers/AdminSessionProvider';
import { kpiPersona } from '@/lib/dashboard/kpiTiles';
import { queryKeys } from '@/lib/query/keys';

import { ActivityFeedCard } from './ActivityFeedCard';
import { AlertsPanel } from './AlertsPanel';
import { AttentionQueueCard } from './AttentionQueueCard';
import { DashboardHeader } from './DashboardHeader';
import { DeployWalletCard } from './DeployWalletCard';
import { EventsCard } from './EventsCard';
import { KpiRow } from './KpiRow';
import { LiveNowSection } from './LiveNowSection';
import { OperationsCard } from './OperationsCard';
import { SuggestionsCard } from './SuggestionsCard';
import { SystemHealthCard } from './SystemHealthCard';

/** Section order per persona (design: Main / Moderator / Finance boards). */
const ORDER = {
  admin: ['live', 'events', 'ops', 'health', 'activity'],
  moderator: ['health', 'live', 'events', 'activity'],
  finance: ['events', 'live', 'activity'],
} as const;

export function DashboardView() {
  const { role } = useAdminSession();
  const persona = kpiPersona(role);
  const qc = useQueryClient();
  useIsFetching({ queryKey: queryKeys.dashboard.all });
  const updatedAt = Math.max(0, ...qc.getQueryCache().findAll({ queryKey: queryKeys.dashboard.all }).map((q) => q.state.dataUpdatedAt));

  const sections = {
    live: <LiveNowSection key="live" showMarketsLink={persona === 'admin'} />,
    events:
      persona === 'admin' ? (
        <div key="events" className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <EventsCard />
          <SuggestionsCard />
        </div>
      ) : (
        <EventsCard key="events" />
      ),
    ops: (
      <div key="ops" className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <OperationsCard />
        <DeployWalletCard />
      </div>
    ),
    health: (
      <div key="health" className="grid grid-cols-1 gap-3 xl:grid-cols-2">
        <SystemHealthCard />
        <AttentionQueueCard />
      </div>
    ),
    activity: <ActivityFeedCard key="activity" />,
  };

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader updatedAt={updatedAt} />
      <AlertsPanel />
      <KpiRow />
      {ORDER[persona].map((s) => sections[s])}
    </div>
  );
}

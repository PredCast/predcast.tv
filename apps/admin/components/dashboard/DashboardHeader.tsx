'use client';

import { useIsFetching } from '@tanstack/react-query';

import { useAdminSession } from '@/providers/AdminSessionProvider';
import { environmentDisplay } from '@/lib/ui/environment';
import { fmtClock } from '@/lib/ui/time';
import { queryKeys } from '@/lib/query/keys';
import { useNow } from '@/hooks/useNow';
import { useRefreshDashboard } from '@/hooks/api/useDashboard';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { PageHeader } from '@/components/layout/PageHeader';

import { SystemStatusPill } from './SystemStatusPill';

export function DashboardHeader({ updatedAt }: Readonly<{ updatedAt: number }>) {
  const { environment } = useAdminSession();
  const env = environmentDisplay(environment);
  const now = useNow();
  const refresh = useRefreshDashboard();
  const fetching = useIsFetching({ queryKey: queryKeys.dashboard.all }) > 0;

  const date = now
    ? now.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })
    : '';
  const meta = [date, now && fmtClock(now).slice(0, 5), 'Auto-refresh 15s', updatedAt > 0 && `Updated ${fmtClock(new Date(updatedAt))}`]
    .filter(Boolean)
    .join(' · ');

  return (
    <PageHeader
      eyebrow="Overview"
      title="Match day"
      meta={meta}
      right={
        <>
          <span className={`inline-flex h-8 items-center rounded-control border px-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] ${env.chip}`}>
            {env.tier}
          </span>
          <span className="inline-flex h-8 items-center gap-2 rounded-control border border-line px-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-strong">
            <Icon n="link" s={14} />
            {env.network}
          </span>
          <SystemStatusPill />
          <Button aria-label="Refresh now" className="w-8 px-0" onClick={() => void refresh()}>
            <Icon n="refresh" s={14} className={fetching ? 'pc-spin' : ''} />
          </Button>
        </>
      }
    />
  );
}

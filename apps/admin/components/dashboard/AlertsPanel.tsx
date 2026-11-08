'use client';

import { useAdminSession } from '@/providers/AdminSessionProvider';
import { alertDisplay } from '@/lib/dashboard/alertDisplay';
import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { isAllowedForNav } from '@/lib/rbac';
import { useNow } from '@/hooks/useNow';
import { useMutedWarnings } from '@/hooks/useMutedWarnings';
import { useDashboardAlerts } from '@/hooks/api/useDashboard';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';

import { AlertRow } from './AlertRow';

/** "Needs action now" — hidden when nothing is wrong (critical alerts ignore the mute). */
export function AlertsPanel() {
  const { role } = useAdminSession();
  const { data, error, refetch, isFetching } = useDashboardAlerts();
  const now = useNow();
  const { muted, toggle } = useMutedWarnings(now);

  if (error && !data) {
    return (
      <Card tone="danger">
        <CardError title="Couldn't load alerts" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      </Card>
    );
  }
  if (!data || data.alerts.length === 0 || !now) return null;

  const critical = data.alerts.filter((a) => a.level === 'critical');
  const warnings = data.alerts.filter((a) => a.level === 'warning');
  const shown = muted ? critical : data.alerts;
  const canSeeJobs = isAllowedForNav(role, ['admin']);
  const summary = [critical.length > 0 && `${critical.length} critical`, warnings.length > 0 && `${warnings.length} warning${warnings.length > 1 ? 's' : ''}`]
    .filter(Boolean)
    .join(' · ');

  return (
    <Card as="section" label="Active alerts" tone={critical.length > 0 ? 'danger' : 'warning'}>
      <CardHead
        title="Needs action now"
        icon="alertTriangle"
        count={summary}
        meta={muted && warnings.length > 0 ? `${warnings.length} muted` : undefined}
        right={
          warnings.length > 0 && (
            <Button size="sm" icon="bellOff" onClick={toggle} aria-pressed={muted}>
              {muted ? 'Unmute warnings' : 'Mute warnings 1h'}
            </Button>
          )
        }
      />
      {shown.length > 0 && (
        <div className="grid grid-cols-1 xl:grid-cols-2 [&>*:nth-last-child(-n+1)]:border-b-0 xl:[&>*:nth-last-child(-n+2)]:border-b-0">
          {shown.map((a) => (
            <AlertRow key={`${a.kind}:${a.subject}`} alert={a} display={alertDisplay(a, now, canSeeJobs)} />
          ))}
        </div>
      )}
    </Card>
  );
}

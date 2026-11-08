'use client';

import { useDashboardAlerts } from '@/hooks/api/useDashboard';
import { Icon } from '@/components/common/Icon';
import { Skeleton } from '@/components/common/Skeleton';

const TONES = {
  incident: { label: 'Incident', cls: 'border-accent/55 bg-accent/8 text-accent-text' },
  degraded: { label: 'Degraded', cls: 'border-warning/45 bg-warning/6 text-warning' },
  normal: { label: 'All systems normal', cls: 'border-positive/40 bg-positive/6 text-positive' },
} as const;

/** INCIDENT / DEGRADED / ALL SYSTEMS NORMAL, from the alerts the viewer can see. */
export function SystemStatusPill() {
  const { data, isLoading, isError } = useDashboardAlerts();
  if (isLoading) return <Skeleton className="h-8 w-56" />;
  if (isError || !data) return null;
  const critical = data.alerts.filter((a) => a.level === 'critical').length;
  const warnings = data.alerts.length - critical;
  const tone = critical > 0 ? TONES.incident : warnings > 0 ? TONES.degraded : TONES.normal;
  const parts = [critical > 0 && `${critical} critical`, warnings > 0 && `${warnings} warning${warnings > 1 ? 's' : ''}`].filter(Boolean);
  return (
    <div role="status" className={`inline-flex h-8 items-center gap-2.5 rounded-control border px-3 font-mono text-[11px] uppercase ${tone.cls}`}>
      <Icon n="activity" s={14} />
      <span className="font-bold tracking-[0.16em]">{tone.label}</span>
      {parts.length > 0 && <span className="tracking-[0.08em] text-fg-body">{parts.join(' · ')}</span>}
    </div>
  );
}

'use client';

import { useAdminSession } from '@/providers/AdminSessionProvider';
import { kpiLabels, kpiTiles } from '@/lib/dashboard/kpiTiles';
import { useDashboardKpis } from '@/hooks/api/useDashboard';
import { StatTile } from '@/components/common/StatTile';

export function KpiRow() {
  const { role } = useAdminSession();
  const { data, isLoading, error, refetch } = useDashboardKpis();
  const grid = 'grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3';

  if (!data) {
    const state = isLoading ? 'loading' : error ? 'error' : 'loading';
    return (
      <section aria-label="Key figures" className={grid}>
        {kpiLabels(role).map((label) => (
          <StatTile key={label} label={label} state={state} onRetry={() => void refetch()} />
        ))}
      </section>
    );
  }

  return (
    <section aria-label="Key figures" className={grid}>
      {kpiTiles(data, role).map((t) => (
        <StatTile
          key={t.key}
          label={t.label}
          value={t.value}
          unit={t.unit}
          delta={t.delta}
          caption={t.caption}
          series={t.series}
          live={t.live}
          hint={t.hint}
        />
      ))}
    </section>
  );
}

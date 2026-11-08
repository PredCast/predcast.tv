'use client';

import { needsAttention } from '@/lib/jobs/jobsView';
import { useJobs } from '@/hooks/api/useJobs';
import { Badge } from '@/components/common/Badge';

/** "13/16 HEALTHY" — jobs not failing and not late. */
export function JobsHealthPill() {
  const { data } = useJobs();
  if (!data) return null;
  const attention = data.jobs.filter(needsAttention).length;
  const healthy = data.jobs.length - attention;
  return (
    <Badge tone={attention > 0 ? 'warning' : 'positive'} glyph={attention > 0 ? '▲' : '✓'} className="h-8 rounded-control px-3 text-[11px] tracking-[0.16em]">
      <span role="status">
        {healthy}/{data.jobs.length} healthy
      </span>
    </Badge>
  );
}

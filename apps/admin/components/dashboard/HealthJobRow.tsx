import type { DashboardHealthDto } from '@chiliztv/shared';

import { fmtClock, fmtDuration, fmtNextRun, fmtSpan } from '@/lib/ui/time';
import { TRow } from '@/components/common/TRow';
import { JobHealthBadge } from '@/components/jobs/JobHealthBadge';

export const HEALTH_JOB_COLUMNS = 'minmax(0,1fr) 48px minmax(0,1.3fr) 64px';

export function HealthJobRow({ job, now }: Readonly<{ job: DashboardHealthDto['jobs'][number]; now: Date | null }>) {
  const last = job.lastFinishedAt ? new Date(job.lastFinishedAt) : null;
  return (
    <TRow cols={HEALTH_JOB_COLUMNS} density="compact" critical={job.health === 'failing'} accent={job.health === 'late' ? '#F5C518' : undefined}>
      <span className="truncate font-mono text-[12px] text-white">{job.name}</span>
      <span className="font-mono text-[11px] text-fg-body">{fmtSpan(job.cadenceMs)}</span>
      <span className="flex min-w-0 items-center gap-2 font-mono text-[11px] text-fg-body">
        <JobHealthBadge health={job.health} />
        {last && <span>{fmtClock(last)}</span>}
        {job.lastDurationMs !== null && <span className="text-fg-meta">· {fmtDuration(job.lastDurationMs)}</span>}
      </span>
      <span className="text-right font-mono text-[11px] text-fg-body">{job.nextRunAt && now ? fmtNextRun(new Date(job.nextRunAt), now) : '—'}</span>
    </TRow>
  );
}

import type { AdminJobDto } from '@chiliztv/shared';

import { fmtClock, fmtDuration } from '@/lib/ui/time';

import { JobHealthBadge } from './JobHealthBadge';

/** "✓ OK 14:15:02 · 0.4s" (design: System health jobs table). */
export function LastRunCell({ job }: Readonly<{ job: AdminJobDto }>) {
  const finished = job.last?.finishedAt ? new Date(job.last.finishedAt) : null;
  return (
    <div className="flex min-w-0 items-center gap-2 font-mono text-[11px] text-fg-body">
      <JobHealthBadge health={job.health} />
      {finished && <span>{fmtClock(finished)}</span>}
      {job.last?.durationMs != null && <span className="text-fg-meta">· {fmtDuration(job.last.durationMs)}</span>}
    </div>
  );
}

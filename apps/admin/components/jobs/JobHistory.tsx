'use client';

import { fmtClock, fmtDuration } from '@/lib/ui/time';
import { operatorName } from '@/lib/ui/operator';
import { useJobRuns } from '@/hooks/api/useJobRuns';
import { Skeleton } from '@/components/common/Skeleton';

import { JobRunStatusBadge } from './JobRunStatusBadge';

const COLS = '84px 120px 140px 72px minmax(0,1fr)';

/** Recent recorded runs: manual runs, failures, and runs of jobs ticking every minute or slower. */
export function JobHistory({ jobName }: Readonly<{ jobName: string }>) {
  const { data: runs, isLoading, isError } = useJobRuns(jobName, true);

  return (
    <div className="mt-4">
      <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-meta">Recent runs</div>
      {isLoading && <Skeleton className="h-16 w-full" />}
      {isError && <p className="text-[13px] text-accent-text">Couldn&apos;t load the history.</p>}
      {runs && runs.length === 0 && (
        <p className="text-[13px] text-fg-body">No recorded run yet. Fast jobs only keep their failures and manual runs.</p>
      )}
      {runs && runs.length > 0 && (
        <div className="overflow-x-auto rounded-control border border-line-subtle">
          <div className="min-w-[620px]">
            {runs.map((run) => (
              <div
                key={run.id}
                className="grid min-h-9 items-center gap-3 border-b border-line-subtle px-3 font-mono text-[11px] text-fg-body last:border-b-0"
                style={{ gridTemplateColumns: COLS }}
              >
                <span>{fmtClock(new Date(run.startedAt ?? run.requestedAt))}</span>
                <JobRunStatusBadge status={run.status} />
                <span className="truncate" title={run.requestedBy ?? undefined}>
                  {run.trigger === 'manual' && run.requestedBy ? `Manual · ${operatorName(run.requestedBy, run.requestedByLabel)}` : 'Scheduled'}
                </span>
                <span>{run.durationMs != null ? fmtDuration(run.durationMs) : '—'}</span>
                <span className="truncate text-accent-text" title={run.error ?? undefined}>
                  {run.error ?? ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

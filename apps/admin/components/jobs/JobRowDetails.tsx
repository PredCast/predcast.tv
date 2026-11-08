'use client';

import type { AdminJobDto } from '@chiliztv/shared';

import { fmtSpan } from '@/lib/ui/time';

import { JobFact } from './JobFact';
import { JobHistory } from './JobHistory';

function scheduleText(job: AdminJobDto): string {
  if (job.schedule.kind === 'cron') return `cron ${job.schedule.expression} (UTC)`;
  const every = fmtSpan(job.schedule.everyMs);
  return job.schedule.kind === 'interval' ? `every ${every}` : `${every} after each run`;
}

export function JobRowDetails({ id, job }: Readonly<{ id: string; job: AdminJobDto }>) {
  return (
    <div id={id} className="border-b border-line-subtle bg-card-2 px-4 py-4 pl-11">
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        <JobFact label="Schedule" value={scheduleText(job)} />
        <JobFact label="Lock TTL" value={fmtSpan(job.lockTtlSeconds * 1000)} />
        <JobFact label="Runs" value={String(job.counters.runs)} />
        <JobFact label="Failures" value={`${job.counters.failures} (${job.counters.consecutiveFailures} in a row)`} />
        <JobFact label="Skipped · locked" value={String(job.counters.skippedLock)} />
        <JobFact label="Last success" value={job.last?.successAt ? new Date(job.last.successAt).toLocaleString('en-GB') : '—'} />
      </div>
      {job.last?.status === 'failed' && job.last.error && (
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-control border border-accent/40 bg-accent/5 px-3 py-2 font-mono text-[11px] text-accent-text">
          {job.last.error}
        </pre>
      )}
      <JobHistory jobName={job.name} />
    </div>
  );
}

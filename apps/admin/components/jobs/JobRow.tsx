'use client';

import { useState } from 'react';

import type { AdminJobDto } from '@chiliztv/shared';

import { fmtNextRun, fmtSpan } from '@/lib/ui/time';
import { useRunOutcomeToast } from '@/hooks/useRunOutcomeToast';
import { Icon } from '@/components/common/Icon';
import { TRow } from '@/components/common/TRow';

import { JOBS_COLUMNS } from './jobsColumns';
import { JobCategoryBadge } from './JobCategoryBadge';
import { JobRowDetails } from './JobRowDetails';
import { LastRunCell } from './LastRunCell';
import { RunNowButton } from './RunNowButton';

export function JobRow({ job, now }: Readonly<{ job: AdminJobDto; now: Date | null }>) {
  const [open, setOpen] = useState(false);
  const [watchedRunId, setWatchedRunId] = useState<string | null>(null);
  useRunOutcomeToast(watchedRunId);
  const detailsId = `job-${job.name}-details`;
  const next = job.nextRunAt ? new Date(job.nextRunAt) : null;

  return (
    <>
      <TRow cols={JOBS_COLUMNS} density="compact" critical={job.health === 'failing'} accent={job.health === 'late' ? '#F5C518' : undefined}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={detailsId}
          aria-label={`${open ? 'Hide' : 'Show'} ${job.name} details`}
          className="grid h-5 w-5 place-items-center rounded-badge text-fg-body hover:text-white"
        >
          <Icon n="chevronRight" s={12} className={`transition-transform ${open ? 'rotate-90' : ''}`} />
        </button>
        <div className="min-w-0">
          <div className="truncate font-mono text-[12px] text-white">{job.name}</div>
          <div className="truncate text-[12px] text-fg-meta">{job.description}</div>
        </div>
        <JobCategoryBadge category={job.category} />
        <span className="font-mono text-[12px] text-fg-body">{fmtSpan(job.cadenceMs)}</span>
        <LastRunCell job={job} />
        <span className="font-mono text-[12px] text-fg-body">{next && now ? fmtNextRun(next, now) : '—'}</span>
        <div className="flex justify-end">
          <RunNowButton job={job} onQueued={setWatchedRunId} />
        </div>
      </TRow>
      {open && <JobRowDetails id={detailsId} job={job} />}
    </>
  );
}

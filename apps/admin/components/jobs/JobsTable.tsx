'use client';

import type { AdminJobDto } from '@chiliztv/shared';

import { useNow } from '@/hooks/useNow';
import { Card } from '@/components/common/Card';
import { CardHead } from '@/components/common/CardHead';
import { EmptyState } from '@/components/common/EmptyState';
import { THead } from '@/components/common/THead';

import { JOBS_COLUMNS } from './jobsColumns';
import { JobRow } from './JobRow';

export function JobsTable({ jobs, total, meta }: Readonly<{ jobs: ReadonlyArray<AdminJobDto>; total: number; meta: React.ReactNode }>) {
  const now = useNow();
  return (
    <Card as="section" label="Scheduled jobs">
      <CardHead title="Scheduled jobs" icon="clock" count={total} meta={meta} />
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <THead cols={JOBS_COLUMNS}>
            <span />
            <span>Job</span>
            <span>Category</span>
            <span>Every</span>
            <span>Last run</span>
            <span>Next</span>
            <span className="text-right">Action</span>
          </THead>
          {jobs.length === 0 ? (
            <EmptyState icon="search" title="No job matches" hint="Clear the filters or the search to see every job." py="py-10" />
          ) : (
            jobs.map((job) => <JobRow key={job.name} job={job} now={now} />)
          )}
        </div>
      </div>
    </Card>
  );
}

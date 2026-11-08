'use client';

import { useMemo, useState } from 'react';

import { countBy, visibleJobs, type JobsFilter } from '@/lib/jobs/jobsView';
import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { fmtClock } from '@/lib/ui/time';
import { useJobs } from '@/hooks/api/useJobs';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';

import { IndexersCard } from './IndexersCard';
import { JobsTable } from './JobsTable';
import { JobsTableSkeleton } from './JobsTableSkeleton';
import { JobsToolbar } from './JobsToolbar';

const INITIAL_FILTER: JobsFilter = { category: 'all', health: 'all', query: '' };

export function JobsView() {
  const { data, isLoading, error, refetch, isFetching, dataUpdatedAt } = useJobs();
  const [filter, setFilter] = useState<JobsFilter>(INITIAL_FILTER);

  const jobs = useMemo(() => (data ? visibleJobs(data.jobs, filter) : []), [data, filter]);
  const counts = useMemo(() => countBy(data?.jobs ?? []), [data]);

  return (
    <div className="mt-6 flex flex-col gap-5">
      <JobsToolbar filter={filter} counts={counts} onChange={setFilter} />
      {isLoading && <JobsTableSkeleton />}
      {error && !data && (
        <Card>
          <CardError title="Couldn't load jobs" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
        </Card>
      )}
      {data && (
        <JobsTable
          jobs={jobs}
          total={data.jobs.length}
          meta={`Auto-refresh 10s · updated ${fmtClock(new Date(dataUpdatedAt))}${error ? ' · last refresh failed' : ''}`}
        />
      )}
      <IndexersCard />
    </div>
  );
}

'use client';

import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { jobsApi } from '@/lib/api/endpoints/jobs';
import { queryKeys } from '@/lib/query/keys';

const POLL_MS = 2_000;
const isActive = (status: string | undefined) => status === 'pending' || status === 'running';

/** Polls a manual run until it ends, then refreshes the jobs table and that job's history. */
export function useJobRun(runId: string | null) {
  const qc = useQueryClient();
  const query = useQuery({
    queryKey: queryKeys.jobs.run(runId ?? ''),
    queryFn: () => jobsApi.run(runId ?? ''),
    select: (res) => res.data,
    enabled: runId !== null,
    refetchInterval: (q) => (isActive(q.state.data?.data.status) ? POLL_MS : false),
  });

  const status = query.data?.status;
  const jobName = query.data?.jobName;
  useEffect(() => {
    if (!status || isActive(status) || !jobName) return;
    void qc.invalidateQueries({ queryKey: queryKeys.jobs.list });
    void qc.invalidateQueries({ queryKey: queryKeys.jobs.runs(jobName) });
  }, [status, jobName, qc]);

  return query;
}

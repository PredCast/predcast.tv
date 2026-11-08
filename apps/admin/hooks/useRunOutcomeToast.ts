'use client';

import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { fmtDuration } from '@/lib/ui/time';
import { useJobRun } from '@/hooks/api/useJobRun';

/** Follows a run queued from this page and reports its outcome once. */
export function useRunOutcomeToast(runId: string | null) {
  const { data: run } = useJobRun(runId);
  const reported = useRef<string | null>(null);

  useEffect(() => {
    if (!run || reported.current === run.id) return;
    if (run.status === 'pending' || run.status === 'running') return;
    reported.current = run.id;
    const took = run.durationMs != null ? ` in ${fmtDuration(run.durationMs)}` : '';
    if (run.status === 'succeeded') toast.success(`${run.jobName} finished${took}`);
    else if (run.status === 'skipped_lock') toast(`${run.jobName} skipped`, { description: 'Another worker was already running it.' });
    else toast.error(`${run.jobName} failed`, { description: run.error ?? undefined, duration: Infinity });
  }, [run]);

  return run;
}

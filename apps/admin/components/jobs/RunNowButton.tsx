'use client';

import { toast } from 'sonner';

import type { AdminJobDto } from '@chiliztv/shared';

import { runBlockedReason } from '@/lib/jobs/jobsView';
import { apiErrorMessage } from '@/lib/api/errors';
import { useRunJob } from '@/hooks/api/useRunJob';
import { Button } from '@/components/common/Button';
import { TwoStepButton } from '@/components/common/TwoStepButton';

/** Safe jobs: one click. On-chain / quota jobs: two-step confirm, sent with confirm: true. */
export function RunNowButton({ job, onQueued }: Readonly<{ job: AdminJobDto; onQueued: (runId: string) => void }>) {
  const run = useRunJob();
  const blocked = runBlockedReason(job);

  if (blocked) {
    return (
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta" title={blocked}>
        {blocked}
      </span>
    );
  }

  const fire = () =>
    run.mutate(
      { name: job.name, confirm: job.requiresConfirmation },
      {
        onSuccess: (res) => {
          toast.success(`${job.name} queued`, { description: 'A worker picks it up within a few seconds.' });
          onQueued(res.data.runId);
        },
        onError: (err) => toast.error(apiErrorMessage(err)),
      },
    );

  return job.requiresConfirmation ? (
    <TwoStepButton label="Run now" confirmLabel="Run" icon="play" size="xs" busy={run.isPending} onConfirm={fire} />
  ) : (
    <Button size="xs" icon="play" busy={run.isPending} onClick={fire}>
      Run now
    </Button>
  );
}

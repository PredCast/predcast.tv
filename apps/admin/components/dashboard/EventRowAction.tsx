'use client';

import { toast } from 'sonner';

import type { AdminMatchRowDto, EventVisibilityDto } from '@chiliztv/shared';

import { apiErrorMessage } from '@/lib/api/errors';
import { usePublishMatch, useRetryMarketsSetup } from '@/hooks/api/useAdminMatches';
import { Button } from '@/components/common/Button';
import { TwoStepButton } from '@/components/common/TwoStepButton';

/** Hide (opens the unpublish dialog) / Publish / Retry setup, same rules as the Markets page. */
export function EventRowAction({
  row,
  visibility,
  onHide,
}: Readonly<{ row: AdminMatchRowDto; visibility: EventVisibilityDto; onHide: (row: AdminMatchRowDto) => void }>) {
  const publish = usePublishMatch();
  const retry = useRetryMarketsSetup();
  const notify = (ok: string) => ({ onSuccess: () => toast.success(ok), onError: (err: unknown) => toast.error(apiErrorMessage(err)) });

  switch (visibility) {
    case 'deploying':
      return <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta">In progress</span>;
    case 'setup_failed':
      return (
        <TwoStepButton
          label="Retry"
          confirmLabel="Retry"
          size="xs"
          busy={retry.isPending}
          onConfirm={() => retry.mutate(row.apiFootballId, notify('Markets setup queued'))}
        />
      );
    case 'hidden':
      return (
        <Button size="xs" busy={publish.isPending} onClick={() => publish.mutate(row.apiFootballId, notify('Match published'))}>
          Publish
        </Button>
      );
    case 'published':
      return (
        <Button size="xs" onClick={() => onHide(row)}>
          Hide
        </Button>
      );
  }
}

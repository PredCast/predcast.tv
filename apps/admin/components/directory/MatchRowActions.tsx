'use client';

import { toast } from 'sonner';
import type { AdminMatchRowDto } from '@chiliztv/shared';

import { useCloseMatchMarkets, usePublishMatch, useRetryMarketsSetup } from '@/hooks/api/useAdminMatches';
import { DEPLOY_BLOCKED_LABELS, isOperationActive, publicationOf } from '@/lib/markets/labels';
import { apiErrorMessage } from '@/lib/api/errors';
import { buttonClass } from '@/lib/ui/buttonClass';
import { ConfirmActionButton } from '@/components/common/ConfirmActionButton';
import { OperationBadge } from '@/components/markets/OperationBadge';

const FINISHED = new Set(['FT', 'AET', 'PEN', 'CANC', 'ABD', 'AWD', 'WO']);
const primary = buttonClass('primary', 'xs');
const secondary = buttonClass('ghost', 'xs');

interface MatchRowActionsProps {
  readonly match: AdminMatchRowDto;
  readonly onDeploy: (match: AdminMatchRowDto) => void;
  readonly onUnpublish: (match: AdminMatchRowDto) => void;
}

export function MatchRowActions({ match, onDeploy, onUnpublish }: Readonly<MatchRowActionsProps>) {
  const publish = usePublishMatch();
  const retry = useRetryMarketsSetup();
  const close = useCloseMatchMarkets();
  const id = match.apiFootballId;
  const busy = isOperationActive(match.latestOperation);
  const finished = FINISHED.has(match.status);
  const publication = publicationOf(match);
  const notify = (ok: string) => ({ onSuccess: () => toast.success(ok), onError: (err: unknown) => toast.error(apiErrorMessage(err)) });

  if (busy) return <OperationBadge operation={match.latestOperation} />;

  if (publication === 'not_deployed') {
    const blocked = match.deployBlockedReason;
    return blocked ? (
      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-fg-meta">{DEPLOY_BLOCKED_LABELS[blocked] ?? blocked}</span>
    ) : (
      <button type="button" className={primary} onClick={() => onDeploy(match)}>
        Deploy
      </button>
    );
  }

  // A deploy interrupted before the markets opened leaves a contract never opened nor published;
  // legacy matches (published by migration 041, no opening date) are complete.
  const setupIncomplete =
    match.latestOperation?.status === 'failed' || (!match.bettingOpenedAt && !match.publishedAt);
  return (
    <span className="flex flex-wrap justify-end gap-1.5">
      {setupIncomplete && !finished && (
        <ConfirmActionButton
          label="Retry setup"
          confirmLabel="Confirm retry?"
          pending={retry.isPending}
          onConfirm={() => retry.mutate(id, notify('Markets setup queued'))}
        />
      )}
      {publication === 'hidden' ? (
        <ConfirmActionButton
          label="Publish"
          confirmLabel="Confirm publish?"
          pending={publish.isPending}
          onConfirm={() => publish.mutate(id, notify('Match published in the app'))}
        />
      ) : (
        <button type="button" className={secondary} onClick={() => onUnpublish(match)}>
          Unpublish
        </button>
      )}
      {!finished && (
        <ConfirmActionButton
          label="Close markets"
          confirmLabel="Confirm close?"
          pending={close.isPending}
          danger
          onConfirm={() => close.mutate(id, notify('Markets closed'))}
        />
      )}
    </span>
  );
}

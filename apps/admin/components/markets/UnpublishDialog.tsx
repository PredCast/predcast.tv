'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import type { AdminMatchRowDto } from '@chiliztv/shared';

import { useUnpublishMatch } from '@/hooks/api/useAdminMatches';
import { useDeploymentConfig } from '@/hooks/api/useDeploymentConfig';
import { fmtUsdcRaw } from '@/lib/format/amounts';
import { apiErrorMessage } from '@/lib/api/errors';
import { ConfirmActionButton } from '@/components/common/ConfirmActionButton';
import { Modal } from '@/components/common/Modal';
import { OperationProgress } from './OperationProgress';

interface UnpublishDialogProps {
  readonly match: AdminMatchRowDto | null;
  readonly onClose: () => void;
}

type Mode = 'hide' | 'cancel';
const MIN_REASON = 3;

/** Hide only, or hide and cancel the open markets (refunds). Bets stay claimable either way. */
export function UnpublishDialog({ match, onClose }: Readonly<UnpublishDialogProps>) {
  const unpublish = useUnpublishMatch();
  const { data: config } = useDeploymentConfig();
  const [mode, setMode] = useState<Mode>('hide');
  const [reason, setReason] = useState('');
  const [cancelOperationId, setCancelOperationId] = useState<string | null>(null);

  const close = () => {
    setMode('hide');
    setReason('');
    setCancelOperationId(null);
    onClose();
  };
  if (!match) return null;

  const hasStakes = match.totalStaked !== '0';
  const chain = config?.chains.find((c) => c.chainId === match.bettingChainId) ?? config?.chains[0];
  const submit = () =>
    unpublish.mutate(
      { matchId: match.apiFootballId, body: mode === 'cancel' ? { cancelMarkets: true, reason: reason.trim() } : { cancelMarkets: false } },
      {
        onSuccess: (res) => {
          toast.success(`${match.homeTeamName} vs ${match.awayTeamName} hidden from the app`);
          if (res.data.cancelOperation) setCancelOperationId(res.data.cancelOperation.id);
          else close();
        },
        onError: (err) => toast.error(apiErrorMessage(err)),
      },
    );

  const choice = (value: Mode, title: string, hint: string) => (
    <label className={`flex cursor-pointer gap-3 rounded-md border px-3 py-2.5 ${mode === value ? 'border-accent bg-accent/10' : 'border-line'}`}>
      <input type="radio" name="unpublish-mode" checked={mode === value} onChange={() => setMode(value)} className="mt-0.5 accent-accent" />
      <span>
        <span className="block text-[13px] font-bold text-white">{title}</span>
        <span className="block text-[12px] text-fg-body">{hint}</span>
      </span>
    </label>
  );

  return (
    <Modal open eyebrow="Unpublish" title={`${match.homeTeamName} vs ${match.awayTeamName}`} dismissible={!unpublish.isPending} onClose={close}>
      {cancelOperationId ? (
        <OperationProgress operationId={cancelOperationId} chain={chain} onRetry={() => undefined} retrying />
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-[12px] text-fg-body">
            Pool: <span className="font-bold text-white">{hasStakes ? fmtUsdcRaw(match.totalStaked) : '0'} USDC</span> across{' '}
            <span className="font-bold text-white">{match.betCount}</span> bet{match.betCount === 1 ? '' : 's'}. The match leaves
            Discover and its live page; bets stay visible and claimable in the dashboard.
          </p>
          {choice('hide', 'Hide only', 'Markets keep running and settle normally.')}
          {choice('cancel', 'Hide and cancel the markets', 'Every open market is cancelled on-chain: stakers claim a full refund.')}
          {mode === 'cancel' && (
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Reason, shown on-chain (e.g. Event cancelled)"
              aria-label="Cancellation reason"
              maxLength={200}
              rows={2}
              className="rounded-md border border-line bg-page px-3 py-2 text-[12px] text-white placeholder:text-fg-meta focus:border-accent focus:outline-none"
            />
          )}
          <div className="flex justify-end">
            {mode === 'hide' ? (
              <ConfirmActionButton label="Hide match" confirmLabel="Confirm hide?" pending={unpublish.isPending} onConfirm={submit} />
            ) : reason.trim().length < MIN_REASON ? (
              <button
                type="button"
                disabled
                className="font-mono rounded-md border border-line px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-fg-meta"
              >
                Add a reason to cancel
              </button>
            ) : (
              <ConfirmActionButton
                label="Hide and cancel markets"
                confirmLabel={`Cancel ${hasStakes ? fmtUsdcRaw(match.totalStaked) + ' USDC' : 'all markets'}?`}
                pending={unpublish.isPending}
                danger
                onConfirm={submit}
              />
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}

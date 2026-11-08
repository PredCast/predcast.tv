'use client';

import { toast } from 'sonner';

import type { BettingChainDto, DashboardOperationDto } from '@chiliztv/shared';

import { apiErrorMessage } from '@/lib/api/errors';
import { OPERATION_LABELS } from '@/lib/markets/labels';
import { explorerTxUrl, weiToChz } from '@/lib/markets/chain';
import { operatorName } from '@/lib/ui/operator';
import { buttonClass } from '@/lib/ui/buttonClass';
import { fmtHourMinute } from '@/lib/ui/time';
import { useCancelOperation } from '@/hooks/api/useDashboard';
import { useRetryMarketsSetup } from '@/hooks/api/useAdminMatches';
import { Button } from '@/components/common/Button';
import { Icon, type IconName } from '@/components/common/Icon';
import { TwoStepButton } from '@/components/common/TwoStepButton';

const STATUS: Record<DashboardOperationDto['status'], { icon: IconName; text: string; label: string }> = {
  running: { icon: 'loader', text: 'text-accent-text', label: 'Running' },
  pending: { icon: 'clock', text: 'text-fg-body', label: 'Queued' },
  failed: { icon: 'alertOctagon', text: 'text-accent-text', label: 'Failed' },
  succeeded: { icon: 'check', text: 'text-positive', label: 'Done' },
  cancelled: { icon: 'x', text: 'text-fg-meta', label: 'Cancelled' },
};

/** What the operation did or is doing, from its recorded progress. */
function stepText(op: DashboardOperationDto): string {
  if (op.status === 'failed' || op.status === 'cancelled') return op.error ?? 'Failed';
  if (op.kind === 'cancel_markets') return op.marketsCancelled !== null ? `${op.marketsCancelled} markets cancelled` : 'Cancelling markets';
  const parts = [
    op.contractAddress ? 'contract deployed' : op.deployTxHash ? 'deploy tx sent' : op.kind === 'deploy' ? 'waiting for the signer' : null,
    op.marketsOpened !== null ? `${op.marketsOpened} markets opened` : null,
    op.gasWei ? `${weiToChz(op.gasWei)} CHZ gas` : null,
  ].filter(Boolean);
  return parts.join(' · ') || 'Queued';
}

export function OperationRow({ op, chain }: Readonly<{ op: DashboardOperationDto; chain: BettingChainDto | null }>) {
  const cancel = useCancelOperation();
  const retry = useRetryMarketsSetup();
  const s = STATUS[op.status];
  const failed = op.status === 'failed';
  const txUrl = chain && op.deployTxHash ? explorerTxUrl(chain, op.deployTxHash) : null;

  return (
    <div className={`flex min-h-[60px] items-center gap-3 border-b border-line-subtle px-4 py-2.5 last:border-b-0 ${failed ? 'bg-accent/5 shadow-[inset_2px_0_0_#E8001D]' : ''}`}>
      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${failed ? 'border-accent/55' : 'border-line'} ${s.text}`}>
        <Icon n={s.icon} s={14} className={op.status === 'running' ? 'pc-spin' : ''} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${s.text}`}>{s.label}</span>
          <span className="truncate text-[14px] font-medium text-white">{OPERATION_LABELS[op.kind]}</span>
          <span className="truncate text-[13px] text-fg-body">
            {op.matchLabel}
            {op.league ? ` · ${op.league}` : ''}
          </span>
        </div>
        <p className={`truncate font-mono text-[11px] ${failed ? 'text-accent-text' : 'text-fg-meta'}`} title={stepText(op)}>
          {stepText(op)}
        </p>
      </div>
      <div className="hidden shrink-0 text-right font-mono text-[10px] uppercase leading-4 tracking-[0.12em] text-fg-meta sm:block">
        #{op.matchId}
        <br />
        {fmtHourMinute(new Date(op.createdAt))} · {operatorName(op.requestedBy, op.requestedByLabel)}
      </div>
      {op.status === 'pending' && (
        <Button
          size="sm"
          busy={cancel.isPending}
          onClick={() => cancel.mutate(op.id, { onSuccess: () => toast.success('Operation cancelled'), onError: (e) => toast.error(apiErrorMessage(e)) })}
        >
          Cancel
        </Button>
      )}
      {failed && op.kind !== 'cancel_markets' && op.contractAddress && (
        <TwoStepButton
          label="Retry"
          confirmLabel="Retry setup"
          busy={retry.isPending}
          onConfirm={() => retry.mutate(op.matchId, { onSuccess: () => toast.success('Markets setup queued'), onError: (e) => toast.error(apiErrorMessage(e)) })}
        />
      )}
      {txUrl && op.status !== 'pending' && !failed && (
        <a href={txUrl} target="_blank" rel="noreferrer" className={buttonClass('ghost', 'sm')} aria-label={`Deploy transaction of ${op.matchLabel}`}>
          Tx <Icon n="externalLink" s={12} />
        </a>
      )}
    </div>
  );
}

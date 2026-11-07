'use client';

import type { BettingChainDto, MatchOperationDto } from '@chiliztv/shared';

import { useMatchOperation } from '@/hooks/api/useMatchOperation';
import { appLiveUrl, explorerAddressUrl, explorerTxUrl } from '@/lib/markets/chain';
import { OPERATION_LABELS } from '@/lib/markets/labels';
import { Icon } from '@/components/common/Icon';
import { LiveDot } from '@/components/common/LiveDot';

interface OperationProgressProps {
  readonly operationId: string;
  readonly chain: BettingChainDto | undefined;
  readonly onRetry: (failed: MatchOperationDto) => void;
  readonly retrying: boolean;
}

const link = 'font-mono-ctv inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF1737] hover:underline';

function step(op: MatchOperationDto): string {
  if (op.status === 'pending') return 'Queued, the worker picks it up within seconds…';
  if (op.kind === 'cancel_markets') return 'Cancelling the open markets…';
  if (op.contractAddress) return 'Contract deployed. Seeding and opening the markets…';
  if (op.deployTxHash) return 'Deploy transaction sent, waiting for the receipt…';
  return 'Sending the deploy transaction…';
}

/** Live state of a queued operation: progress, then the explorer / app links, or the error and Retry. */
export function OperationProgress({ operationId, chain, onRetry, retrying }: Readonly<OperationProgressProps>) {
  const { data: op } = useMatchOperation(operationId);
  if (!op) return <p className="text-[12px] text-white/55">Loading the operation…</p>;

  if (op.status === 'pending' || op.status === 'running') {
    return (
      <div role="status" className="flex items-center gap-2.5 rounded-md border border-[#F5C518]/30 bg-[#F5C518]/5 px-3 py-2.5">
        <LiveDot s={5} />
        <span className="text-[12px] text-white/80">{step(op)}</span>
      </div>
    );
  }

  if (op.status === 'failed') {
    return (
      <div role="alert" className="rounded-md border border-[#E8001D]/40 bg-[#E8001D]/10 px-3 py-2.5">
        <div className="font-mono-ctv flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF1737]">
          <Icon n="alertCircle" s={12} /> {OPERATION_LABELS[op.kind]} failed
        </div>
        <p className="mt-1.5 break-words text-[12px] text-white/75">{op.error ?? 'Unknown error'}</p>
        <button
          type="button"
          disabled={retrying}
          onClick={() => onRetry(op)}
          className="font-mono-ctv mt-2.5 rounded-md border border-[#E8001D] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#E8001D]/15 disabled:opacity-50"
        >
          {op.contractAddress ? 'Retry markets setup' : 'Retry'}
        </button>
      </div>
    );
  }

  const live = appLiveUrl(op.matchId);
  return (
    <div role="status" className="rounded-md border border-[#2dd4a4]/40 bg-[#2dd4a4]/10 px-3 py-2.5">
      <div className="font-mono-ctv flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2dd4a4]">
        <Icon n="check" s={12} /> {OPERATION_LABELS[op.kind]} done
        {op.marketsOpened !== null && ` · ${op.marketsOpened} markets opened`}
        {op.marketsCancelled !== null && ` · ${op.marketsCancelled} markets cancelled`}
      </div>
      <div className="mt-2 flex flex-wrap gap-4">
        {chain && op.contractAddress && (
          <a className={link} href={explorerAddressUrl(chain, op.contractAddress)} target="_blank" rel="noreferrer">
            Contract on explorer ↗
          </a>
        )}
        {chain && op.deployTxHash && (
          <a className={link} href={explorerTxUrl(chain, op.deployTxHash)} target="_blank" rel="noreferrer">
            Deploy tx ↗
          </a>
        )}
        {live && (
          <a className={link} href={live} target="_blank" rel="noreferrer">
            Open in the app ↗
          </a>
        )}
      </div>
    </div>
  );
}

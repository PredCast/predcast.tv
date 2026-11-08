'use client';

import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { explorerAddressUrl, weiToChz } from '@/lib/markets/chain';
import { shortWallet } from '@/lib/ui/operator';
import { buttonClass } from '@/lib/ui/buttonClass';
import { useDashboardOperations } from '@/hooks/api/useDashboard';
import { useDeploymentConfig } from '@/hooks/api/useDeploymentConfig';
import { Badge } from '@/components/common/Badge';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { CopyButton } from '@/components/common/CopyButton';
import { Icon } from '@/components/common/Icon';
import { Skeleton } from '@/components/common/Skeleton';

import { WalletFigure } from './WalletFigure';

/** Signer balance against the alert threshold, deploys it still covers and the gas really spent. */
export function DeployWalletCard() {
  const { data: config, isLoading, error, refetch, isFetching } = useDeploymentConfig();
  const { data: ops } = useDashboardOperations(true);

  if (isLoading) return <Skeleton className="h-64 rounded-card" />;
  if (error || !config) {
    return (
      <Card tone="danger">
        <CardHead title="Deploy wallet" icon="wallet" />
        <CardError title="Couldn't read the signer" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      </Card>
    );
  }

  const { signer } = config;
  const chain = config.chains[0];
  const balance = BigInt(signer.balanceWei);
  const threshold = BigInt(signer.lowBalanceThresholdWei);
  const cost = BigInt(signer.estimatedDeployCostWei);
  // The bar spans twice the alert threshold so the marker sits mid-way.
  const scale = threshold * BigInt(2);
  const fill = scale > BigInt(0) ? Math.min(100, Number((balance * BigInt(100)) / scale)) : 0;
  const avgCost = ops && ops.spent7d.deployments > 0 ? BigInt(ops.spent7d.gasWei) / BigInt(ops.spent7d.deployments) : null;

  return (
    <Card as="section" label="Deploy wallet" tone={signer.lowBalance ? 'warning' : 'default'}>
      <CardHead
        title="Deploy wallet"
        icon="wallet"
        right={signer.lowBalance ? <Badge tone="warning" glyph="▲">Low</Badge> : <Badge tone="positive" glyph="✓">Healthy</Badge>}
      />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 font-mono text-[12px] text-fg-body">
          {shortWallet(signer.address)}
          <CopyButton value={signer.address} label="Copy signer address" />
          {chain && (
            <a href={explorerAddressUrl(chain, signer.address)} target="_blank" rel="noreferrer" className={`${buttonClass('ghost', 'xs')} ml-auto`}>
              Explorer <Icon n="externalLink" s={11} />
            </a>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className={`font-display text-[48px] font-extrabold leading-[48px] ${signer.lowBalance ? 'text-warning' : 'text-white'}`}>
            {weiToChz(signer.balanceWei)}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-meta">{chain?.nativeSymbol ?? 'CHZ'}</span>
        </div>
        <div>
          <div className="relative h-1.5 rounded-full bg-elevated" aria-hidden="true">
            <div className={`h-full rounded-full ${signer.lowBalance ? 'bg-warning' : 'bg-positive'}`} style={{ width: `${fill}%` }} />
            <span className="absolute -top-1 left-1/2 h-3.5 w-px bg-fg-body" />
          </div>
          <div className="mt-1.5 flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">
            <span>0</span>
            <span>Alert at {weiToChz(signer.lowBalanceThresholdWei)}</span>
            <span />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <WalletFigure value={cost > BigInt(0) ? `≈${(balance / cost).toString()}` : '—'} label="Deploys left" />
          <WalletFigure value={avgCost !== null ? weiToChz(avgCost.toString()) : weiToChz(cost.toString())} label={avgCost !== null ? 'CHZ / deploy · avg' : 'CHZ / deploy · est.'} />
          <WalletFigure value={ops ? weiToChz(ops.spent7d.gasWei) : '—'} label="Spent · 7d" />
        </div>
      </div>
    </Card>
  );
}

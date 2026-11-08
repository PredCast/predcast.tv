'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import type { AdminMatchRowDto, MatchOperationDto } from '@chiliztv/shared';

import { useDeployMatch, useRetryMarketsSetup } from '@/hooks/api/useAdminMatches';
import { useDeploymentConfig } from '@/hooks/api/useDeploymentConfig';
import { weiToChz } from '@/lib/markets/chain';
import { apiErrorMessage } from '@/lib/api/errors';
import { Modal } from '@/components/common/Modal';
import { TeamLabel } from '@/components/directory/TeamLabel';
import { MarketLineup } from './MarketLineup';
import { NetworkSelector } from './NetworkSelector';
import { OperationProgress } from './OperationProgress';

interface DeployDialogProps {
  readonly match: AdminMatchRowDto | null;
  readonly onClose: () => void;
}

const label = 'font-mono-ctv text-[9px] font-bold uppercase tracking-[0.14em] text-white/45';

/** Recap → network → markets → confirm, then follows the queued operation until it ends. */
export function DeployDialog({ match, onClose }: Readonly<DeployDialogProps>) {
  const { data: config } = useDeploymentConfig();
  const deploy = useDeployMatch();
  const retry = useRetryMarketsSetup();
  const [chainId, setChainId] = useState<number | null>(null);
  const [operationId, setOperationId] = useState<string | null>(null);

  const close = () => {
    setOperationId(null);
    setChainId(null);
    onClose();
  };
  if (!match) return null;

  const selectedChainId = chainId ?? config?.chains[0]?.chainId ?? null;
  const chain = config?.chains.find((c) => c.chainId === selectedChainId);
  const start = (id: number) =>
    deploy.mutate(
      { matchId: match.apiFootballId, chainId: id },
      { onSuccess: (res) => setOperationId(res.data.id), onError: (err) => toast.error(apiErrorMessage(err)) },
    );
  const onRetry = (failed: MatchOperationDto) => {
    if (!failed.contractAddress) return selectedChainId && start(selectedChainId);
    retry.mutate(match.apiFootballId, {
      onSuccess: (res) => setOperationId(res.data.id),
      onError: (err) => toast.error(apiErrorMessage(err)),
    });
  };

  return (
    <Modal open eyebrow="Deploy betting contract" title="Deploy match" dismissible={!deploy.isPending} onClose={close}>
      <div className="flex flex-col gap-4">
        <div className="rounded-md border border-[#1E1E1E] bg-[#0A0A0A] px-3 py-2.5">
          <div className="flex items-center gap-2 text-[14px] font-bold text-white">
            <TeamLabel name={match.homeTeamName} logo={match.homeTeamLogo} />
            <span className="text-white/30">vs</span>
            <TeamLabel name={match.awayTeamName} logo={match.awayTeamLogo} />
          </div>
          <div className="font-mono-ctv mt-1 text-[10px] uppercase tracking-[0.1em] text-white/45">
            {match.leagueName} · {new Date(match.matchDate).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
            {match.isKnockout ? ' · knockout' : ''}
          </div>
        </div>

        {operationId ? (
          <OperationProgress operationId={operationId} chain={chain} onRetry={onRetry} retrying={deploy.isPending || retry.isPending} />
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <span className={label}>Network</span>
              {config && selectedChainId !== null && (
                <NetworkSelector chains={config.chains} value={selectedChainId} onChange={setChainId} />
              )}
            </div>
            {config && <MarketLineup lineup={config.marketLineup} isKnockout={match.isKnockout} />}
            {config && (
              <p className="text-[12px] text-white/55">
                Estimated cost ~{weiToChz(config.signer.estimatedDeployCostWei)} {chain?.nativeSymbol ?? 'CHZ'} (deploy + seed + open), paid
                by the signer ({weiToChz(config.signer.balanceWei)} available). The match is published in the app once the markets are open.
              </p>
            )}
            <div className="flex justify-end gap-2">
              <button type="button" onClick={close} className="font-mono-ctv rounded-md border border-[#2A2A2A] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65 hover:text-white">
                Cancel
              </button>
              <button
                type="button"
                disabled={!selectedChainId || deploy.isPending}
                onClick={() => selectedChainId && start(selectedChainId)}
                className="font-mono-ctv rounded-md bg-[#E8001D] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:opacity-50"
              >
                {deploy.isPending ? 'Queueing…' : `Deploy on ${chain?.name ?? '…'}`}
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

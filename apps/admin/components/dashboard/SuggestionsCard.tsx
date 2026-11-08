'use client';

import { useState } from 'react';

import type { AdminMatchRowDto } from '@chiliztv/shared';

import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { weiToChz } from '@/lib/markets/chain';
import { useDashboardSuggestions } from '@/hooks/api/useDashboard';
import { useDeploymentConfig } from '@/hooks/api/useDeploymentConfig';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { EmptyState } from '@/components/common/EmptyState';
import { Skeleton } from '@/components/common/Skeleton';
import { DeployDialog } from '@/components/markets/DeployDialog';

import { SuggestionRow } from './SuggestionRow';

/** Deployable matches of the next 7 days with a fan-token team (admin). */
export function SuggestionsCard() {
  const { data, isLoading, error, refetch, isFetching } = useDashboardSuggestions(true);
  const { data: config } = useDeploymentConfig();
  const [deploying, setDeploying] = useState<AdminMatchRowDto | null>(null);

  const cost = config ? BigInt(config.signer.estimatedDeployCostWei) : null;
  const covers = config && cost && cost > BigInt(0) ? (BigInt(config.signer.balanceWei) / cost).toString() : null;

  return (
    <Card as="section" label="Suggested to deploy" className="flex flex-col">
      <CardHead title="Suggested to deploy" icon="rocket" count={data?.suggestions.length} meta="Fan-token teams" />
      {isLoading && <Skeleton className="m-4 h-56" />}
      {error && !data && (
        <CardError title="Couldn't load suggestions" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && data.suggestions.length === 0 && (
        <EmptyState icon="rocket" title="Nothing to suggest" hint="No deployable fan-token match in the next 7 days." py="py-14" />
      )}
      {data && data.suggestions.length > 0 && (
        <div>
          {data.suggestions.map((s) => (
            <SuggestionRow key={s.apiFootballId} suggestion={s} onDeploy={setDeploying} />
          ))}
        </div>
      )}
      {cost !== null && (
        <div className="mt-auto border-t border-line-subtle px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-meta">
          ≈ {weiToChz(cost.toString())} CHZ per deploy (est.){covers !== null && ` · wallet covers ≈ ${covers}`}
        </div>
      )}
      <DeployDialog match={deploying} onClose={() => setDeploying(null)} />
    </Card>
  );
}

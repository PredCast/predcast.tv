'use client';

import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { useDashboardOperations } from '@/hooks/api/useDashboard';
import { useDeploymentConfig } from '@/hooks/api/useDeploymentConfig';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { CardLink } from '@/components/common/CardLink';
import { Icon } from '@/components/common/Icon';
import { Skeleton } from '@/components/common/Skeleton';

import { OperationRow } from './OperationRow';

/** Deploy / setup / cancel operations of the last 24 h, active first (admin). */
export function OperationsCard() {
  const { data, isLoading, error, refetch, isFetching } = useDashboardOperations(true);
  const { data: config } = useDeploymentConfig();
  const chain = config?.chains[0] ?? null;
  const active = data?.operations.filter((o) => o.status === 'pending' || o.status === 'running').length ?? 0;
  const failed = data?.operations.filter((o) => o.status === 'failed').length ?? 0;

  return (
    <Card as="section" label="Operations" className="flex flex-col">
      <CardHead
        title="Operations"
        count={data ? `${active} active${failed ? ` · ${failed} failed` : ''}` : undefined}
        right={<CardLink href="/markets">History</CardLink>}
      />
      {isLoading && <Skeleton className="m-4 h-40" />}
      {error && !data && (
        <CardError title="Couldn't load operations" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && data.operations.length === 0 && (
        <p className="flex items-center gap-2.5 px-4 py-5 text-[14px] text-fg-body">
          <Icon n="check" s={16} className="text-positive" />
          No operation in the last 24 hours. Deploys you start appear here with their progress.
        </p>
      )}
      {data && data.operations.length > 0 && data.operations.map((op) => <OperationRow key={op.id} op={op} chain={chain} />)}
    </Card>
  );
}

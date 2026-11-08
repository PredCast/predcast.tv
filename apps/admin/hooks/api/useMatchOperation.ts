'use client';

import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { marketsApi } from '@/lib/api/endpoints/markets';
import { queryKeys } from '@/lib/query/keys';

const POLL_MS = 2_500;
const isActive = (status: string | undefined) => status === 'pending' || status === 'running';

/** Polls a queued deploy / retry / cancel until it ends, then refreshes the list and the balance. */
export function useMatchOperation(operationId: string | null) {
  const qc = useQueryClient();
  const query = useQuery({
    queryKey: queryKeys.markets.operation(operationId ?? ''),
    queryFn: () => marketsApi.operation(operationId ?? ''),
    select: (res) => res.data,
    enabled: operationId !== null,
    refetchInterval: (q) => (isActive(q.state.data?.data.status) ? POLL_MS : false),
  });

  const status = query.data?.status;
  useEffect(() => {
    if (status === 'succeeded' || status === 'failed') {
      void qc.invalidateQueries({ queryKey: queryKeys.markets.all });
      void qc.invalidateQueries({ queryKey: queryKeys.overview });
    }
  }, [status, qc]);

  return query;
}

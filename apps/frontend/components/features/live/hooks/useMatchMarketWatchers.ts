"use client";

import { useQueryClient } from "@tanstack/react-query";
import type { Address } from "viem";

import {
  usePariMatchBaseWatchMarketCancelled,
  usePariMatchBaseWatchMarketResolved,
  usePariMatchBaseWatchMarketStateChanged,
  usePariMatchBaseWatchPositionTaken,
} from "@/lib/contracts/generated";
import { queryKeys } from "@/lib/query/keys";
import { useMarketPoolsRealtime } from "@/hooks/api";

/**
 * On-chain + Realtime invalidation of the pool snapshot. Must be mounted once per
 * page: every extra mount adds 4 log watchers on the throttled Spicy RPC.
 */
export function useMatchMarketWatchers(contractAddress: Address | undefined, chainId: number): void {
  const qc = useQueryClient();
  useMarketPoolsRealtime(contractAddress);

  const invalidatePools = () => {
    if (!contractAddress) return;
    void qc.invalidateQueries({ queryKey: queryKeys.markets.pools(contractAddress.toLowerCase()) });
  };
  const watch = { address: contractAddress, chainId, enabled: !!contractAddress, onLogs: invalidatePools };

  usePariMatchBaseWatchPositionTaken(watch);
  usePariMatchBaseWatchMarketStateChanged(watch);
  usePariMatchBaseWatchMarketResolved(watch);
  usePariMatchBaseWatchMarketCancelled(watch);
}

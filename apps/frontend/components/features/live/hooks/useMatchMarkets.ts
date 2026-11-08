"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { sortMarketsByManifest } from "@chiliztv/domain/markets/sortMarketsByManifest";

import { useMarketPoolsQuery } from "@/hooks/api";
import { usePariMatchFactoryReadGetSportType } from "@/lib/contracts/generated";
import { isFootballMatch, type MarketPoolSnapshot } from "@/lib/contracts/markets";
import { chilizConfig } from "@/config/chiliz.config";

export interface MatchMarkets {
  /** Markets in manifest order (marketId 0..N). */
  readonly markets: ReadonlyArray<MarketPoolSnapshot>;
  readonly isLoading: boolean;
  readonly hasSnapshot: boolean;
  /** `true` until the sport type read says otherwise — basketball renders a placeholder. */
  readonly isFootball: boolean;
}

/** Read side of a match's markets. Invalidation lives in `useMatchMarketWatchers`. */
export function useMatchMarkets(contractAddress: Address | undefined): MatchMarkets {
  const { data: sportType } = usePariMatchFactoryReadGetSportType({
    address: chilizConfig.pariMatchFactory,
    args: contractAddress ? [contractAddress] : undefined,
    chainId: chilizConfig.chainId,
    query: { enabled: !!contractAddress },
  });
  const { data: pools, isLoading } = useMarketPoolsQuery(contractAddress);
  const markets = useMemo(() => sortMarketsByManifest(pools?.markets ?? []), [pools?.markets]);

  return {
    markets,
    isLoading,
    hasSnapshot: !!pools,
    isFootball: sportType === undefined ? true : isFootballMatch(sportType),
  };
}

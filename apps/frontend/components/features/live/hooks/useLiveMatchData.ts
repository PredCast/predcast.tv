"use client";

import { useMemo, useState } from "react";
import type { Address } from "viem";
import { useReadContract } from "wagmi";

import { useMatch } from "@/hooks/api";
import {
  usePariMatchFactoryReadGetAllMatches,
  usePariMatchFactoryReadGetSportType,
} from "@/lib/contracts/generated";
import { chilizConfig } from "@/config/chiliz.config";
import type { Match } from "@/types/api.types";

import { buildTestMatch, TEST_MATCH_ID, testMatchKickoffIso } from "../domain/testMatch";

// Minimal slice: the full FootballPariMatch ABI exceeds TS instantiation depth (CLAUDE.md §7.3).
const MATCH_NAME_ABI = [
  { type: "function", stateMutability: "view", name: "matchName", inputs: [], outputs: [{ name: "", type: "string" }] },
] as const;

export interface LiveMatchData {
  readonly match: Match | undefined;
  readonly loading: boolean;
  readonly notFound: boolean;
  readonly isTestMatch: boolean;
}

/** Backend match for real IDs; latest factory proxy for the `/live/999999` test route. */
export function useLiveMatchData(id: string): LiveMatchData {
  const isTestMatch = id === TEST_MATCH_ID;
  const { data: apiMatch, isLoading, error } = useMatch(isTestMatch ? "" : id);

  const { data: allMatches } = usePariMatchFactoryReadGetAllMatches({
    address: chilizConfig.pariMatchFactory,
    chainId: chilizConfig.chainId,
    query: { enabled: isTestMatch },
  });
  const latestProxy = (allMatches as readonly Address[] | undefined)?.at(-1);

  const { data: matchName } = useReadContract({
    abi: MATCH_NAME_ABI,
    functionName: "matchName",
    address: latestProxy,
    chainId: chilizConfig.chainId,
    query: { enabled: isTestMatch && !!latestProxy },
  });
  const { data: sportType } = usePariMatchFactoryReadGetSportType({
    address: chilizConfig.pariMatchFactory,
    chainId: chilizConfig.chainId,
    args: latestProxy ? [latestProxy] : undefined,
    query: { enabled: isTestMatch && !!latestProxy },
  });

  const [kickoffIso] = useState(() => testMatchKickoffIso(new Date()));
  const testMatch = useMemo(
    () =>
      isTestMatch
        ? buildTestMatch({ proxy: latestProxy, matchName, sportType, kickoffIso })
        : undefined,
    [isTestMatch, latestProxy, matchName, sportType, kickoffIso],
  );

  const match = isTestMatch ? testMatch : apiMatch;
  return {
    match,
    loading: isTestMatch ? false : isLoading,
    notFound: (!!error && !isTestMatch) || !match,
    isTestMatch,
  };
}

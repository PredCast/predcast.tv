"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { useMarketPoolsQuery } from "@/hooks/api";
import { useMyBetOnOutcome } from "@/hooks/useMyBetOnOutcome";
import { parimutuelPayoutPreview } from "@/hooks/useParimutuelPayoutPreview";
import { chilizConfig } from "@/config/chiliz.config";
import { usePariMatchBaseReadFeeBps, usePariMatchBaseReadLeaderboardFeeBps } from "@/lib/contracts/generated";

import { DEFAULT_FEE_BPS, DEFAULT_LEADERBOARD_FEE_BPS } from "../../domain/betTicket";

interface PreviewArgs {
  readonly contractAddress: Address;
  readonly marketId: number | undefined;
  readonly outcome: number | null;
  readonly walletAddress: Address | undefined;
  readonly expectedStakeUsdc: bigint;
  readonly enabled: boolean;
}

/** Pool snapshot of the selected market, on-chain fee split and the estimated parimutuel payout. */
export function useTicketPreview({ contractAddress, marketId, outcome, walletAddress, expectedStakeUsdc, enabled }: PreviewArgs) {
  const { data: pools } = useMarketPoolsQuery(contractAddress);
  const snapshot = useMemo(
    () => (marketId === undefined ? undefined : pools?.markets.find((m) => Number(m.marketId) === marketId)),
    [pools, marketId],
  );

  const { existingStake } = useMyBetOnOutcome({
    contractAddress,
    marketId: marketId === undefined ? undefined : BigInt(marketId),
    outcome: outcome === null ? null : BigInt(outcome),
    userAddress: walletAddress,
    enabled,
  });

  const read = { address: contractAddress, chainId: chilizConfig.chainId, query: { enabled: enabled && !!contractAddress } };
  const { data: feeBpsOnchain } = usePariMatchBaseReadFeeBps(read);
  const { data: leaderboardBpsOnchain } = usePariMatchBaseReadLeaderboardFeeBps(read);
  const feeBps = typeof feeBpsOnchain === "number" ? feeBpsOnchain : DEFAULT_FEE_BPS;
  const leaderboardFeeBps = typeof leaderboardBpsOnchain === "number" ? leaderboardBpsOnchain : DEFAULT_LEADERBOARD_FEE_BPS;

  const totalPool = snapshot ? BigInt(snapshot.totalPool) : BigInt(0);
  const rawOutcomePool = snapshot && outcome !== null ? snapshot.outcomePools[outcome] : undefined;
  const outcomePool = rawOutcomePool ? BigInt(rawOutcomePool) : BigInt(0);

  // Mirrors PariMatchBase.sol payout: estimate only, the final pool decides (CLAUDE.md §7.14).
  const payoutRaw =
    outcome === null || expectedStakeUsdc === BigInt(0)
      ? BigInt(0)
      : parimutuelPayoutPreview({ totalPool, outcomePool, existingStake, additionalStake: expectedStakeUsdc, feeBps });

  return { snapshot, feeBps, leaderboardFeeBps, payoutRaw };
}

export type TicketPreview = ReturnType<typeof useTicketPreview>;

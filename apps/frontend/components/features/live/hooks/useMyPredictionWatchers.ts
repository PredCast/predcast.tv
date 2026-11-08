"use client";

import { useQueryClient } from "@tanstack/react-query";
import type { Address } from "viem";

import {
  usePariMatchBaseWatchPositionClaimed,
  usePariMatchBaseWatchPositionTaken,
  usePariMatchBaseWatchStakeRefunded,
} from "@/lib/contracts/generated";
import { chilizConfig } from "@/config/chiliz.config";

/** Refetches My predictions when this wallet takes, claims or refunds a position on the contract. */
export function useMyPredictionWatchers(contractAddress: Address | undefined, walletAddress: string | undefined): void {
  const qc = useQueryClient();
  const watch = {
    address: contractAddress,
    chainId: chilizConfig.chainId,
    args: walletAddress ? { user: walletAddress as Address } : undefined,
    enabled: !!contractAddress && !!walletAddress,
    onLogs: () => void qc.invalidateQueries({ queryKey: ["my-bets"] }),
  };
  usePariMatchBaseWatchPositionClaimed(watch);
  usePariMatchBaseWatchStakeRefunded(watch);
  usePariMatchBaseWatchPositionTaken(watch);
}

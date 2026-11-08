"use client";

import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { useChilizSwapRouter } from "@/hooks/useChilizSwapRouter";

import type { FailureKind } from "../../domain/betTicket";
import { contractErrorMessage } from "../../domain/contractErrorMessage";

/** Snapshot of the bet taken at submit time, used for the optimistic chat banner. */
export interface PendingBet {
  readonly stakeUsdc: number | null;
  readonly label: string;
}

export type TxOutcome =
  | { readonly kind: "idle" }
  | { readonly kind: "success" }
  | { readonly kind: "failure"; readonly failure: FailureKind; readonly reason: string | null };

const MY_BETS_REFETCH_DELAYS_MS = [2000, 4000, 7000, 11000] as const;

/**
 * placeBet write + receipt lifecycle. The success / failure outcome is derived from the
 * wagmi state (no mirrored React state); side effects (toast, chat banner, My Bets refetch)
 * fire once per tx hash.
 */
export function useTicketSubmit(simulationError: Error | null) {
  const qc = useQueryClient();
  const { placeBet, resetBet, betState, routerAddress } = useChilizSwapRouter();
  const { isPending, isConfirming, isSuccess, isReverted, isUserRejected, error, txHash } = betState;
  const pendingBetRef = useRef<PendingBet | null>(null);

  const outcome: TxOutcome = isSuccess
    ? { kind: "success" }
    : isUserRejected
      ? { kind: "failure", failure: "rejected", reason: null }
      : isReverted
        ? { kind: "failure", failure: "reverted", reason: revertReason(simulationError, error) }
        : error
          ? { kind: "failure", failure: "reverted", reason: contractErrorMessage(error) }
          : { kind: "idle" };

  useEffect(() => {
    if (!isSuccess || !txHash) return;
    toast.success("Prediction placed", { description: `${txHash.slice(0, 10)}…${txHash.slice(-8)}` });
    // Local Supabase Realtime sometimes drops the postgres_changes push; useChatRoom dedupes
    // this optimistic banner against the indexer-written row.
    const bet = pendingBetRef.current;
    if (bet && bet.stakeUsdc !== null && bet.label !== "—") {
      window.dispatchEvent(
        new CustomEvent("chiliz:bet-confirmed", {
          detail: { message: `New position: ${bet.stakeUsdc.toFixed(2)} USDC on ${bet.label}`, txHash },
        }),
      );
    }
    const invalidate = () => void qc.invalidateQueries({ queryKey: ["my-bets"] });
    invalidate();
    const handles = MY_BETS_REFETCH_DELAYS_MS.map((ms) => setTimeout(invalidate, ms));
    return () => handles.forEach(clearTimeout);
  }, [isSuccess, txHash, qc]);

  const submit = (params: Parameters<typeof placeBet>[0], bet: PendingBet) => {
    pendingBetRef.current = bet;
    placeBet(params);
  };

  return {
    submit,
    reset: resetBet,
    routerAddress,
    outcome,
    txHash,
    isPending,
    isConfirming,
  };
}

function revertReason(simulationError: Error | null, txError: Error | null): string | null {
  if (simulationError) return contractErrorMessage(simulationError);
  if (txError) return contractErrorMessage(txError);
  return null;
}

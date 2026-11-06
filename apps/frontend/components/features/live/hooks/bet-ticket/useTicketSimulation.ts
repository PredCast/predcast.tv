"use client";

import type { Address } from "viem";

import { chilizConfig } from "@/config/chiliz.config";
import {
  useChilizSwapRouterSimulatePlaceBetWithChz,
  useChilizSwapRouterSimulatePlaceBetWithToken,
  useChilizSwapRouterSimulatePlaceBetWithUsdc,
} from "@/lib/contracts/generated";

import { DEADLINE_MIN, type BetToken } from "../../domain/betTicket";
import { useClientNow } from "../useClientNow";

interface SimulationArgs {
  readonly enabled: boolean;
  readonly routerAddress: Address;
  readonly contractAddress: Address;
  readonly token: BetToken;
  readonly marketId: number | undefined;
  readonly outcome: number | null;
  readonly parsedAmount: bigint;
  readonly amountOutMin: bigint;
  readonly needsApproval: boolean;
  /** Approve tx hash once confirmed — re-keys the simulations so they see the new allowance. */
  readonly approvalKey: string | undefined;
}

/** Pre-flight `simulateContract` of the placeBet path so a revert reason surfaces before signing. */
export function useTicketSimulation(args: SimulationArgs) {
  const { enabled, routerAddress, contractAddress, token, marketId, outcome, parsedAmount, amountOutMin, needsApproval, approvalKey } = args;
  // Coarse clock: a deadline recomputed on every render would change the query key and refire the
  // simulation endlessly; a 5-minute tick keeps it stable yet valid on a long-lived sidebar ticket.
  const now = useClientNow(5 * 60_000);
  const deadline = now ? BigInt(Math.floor(now.getTime() / 1000) + DEADLINE_MIN * 60) : BigInt(0);
  const ready = enabled && !!now && marketId !== undefined && outcome !== null && parsedAmount > BigInt(0);
  const market = BigInt(marketId ?? 0);
  const pick = BigInt(outcome ?? 0);

  const usdc = useChilizSwapRouterSimulatePlaceBetWithUsdc({
    address: routerAddress,
    args: ready && token.kind === "USDC" ? [contractAddress, market, pick, parsedAmount] : undefined,
    chainId: chilizConfig.chainId,
    scopeKey: approvalKey,
    query: { enabled: ready && token.kind === "USDC" },
  });
  const chz = useChilizSwapRouterSimulatePlaceBetWithChz({
    address: routerAddress,
    args: ready && token.kind === "CHZ" ? [contractAddress, market, pick, amountOutMin, deadline] : undefined,
    value: ready && token.kind === "CHZ" ? parsedAmount : undefined,
    chainId: chilizConfig.chainId,
    query: { enabled: ready && token.kind === "CHZ" },
  });
  const erc20 = useChilizSwapRouterSimulatePlaceBetWithToken({
    address: routerAddress,
    args:
      ready && token.kind === "ERC20"
        ? [token.address, parsedAmount, contractAddress, market, pick, amountOutMin, deadline]
        : undefined,
    chainId: chilizConfig.chainId,
    scopeKey: approvalKey,
    query: { enabled: ready && token.kind === "ERC20" && !needsApproval },
  });

  const error = token.kind === "USDC" ? usdc.error : token.kind === "CHZ" ? chz.error : erc20.error;
  // Ignored while an approval is pending: the revert is just the missing allowance.
  return { error: needsApproval ? null : error };
}

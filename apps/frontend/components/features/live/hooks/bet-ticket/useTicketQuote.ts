"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { chilizConfig } from "@/config/chiliz.config";
import { useSwapRouterQuote } from "@/hooks/useSwapRouterQuote";

import type { BetToken } from "../../domain/betTicket";

export type QuoteStatus = "not-needed" | "idle" | "loading" | "ready" | "unavailable";

/** USDC quote, slippage floor and price impact for non-USDC stakes (via `quoteTokenToUSDC` only). */
export function useTicketQuote(token: BetToken, parsedAmount: bigint, decimals: number | undefined, slippageBps: number) {
  const tokenIn: Address | undefined =
    token.kind === "ERC20" ? token.address : token.kind === "CHZ" ? chilizConfig.wchz : undefined;
  const hasAmount = parsedAmount > BigInt(0);
  const { amountOut, error, isLoading } = useSwapRouterQuote(hasAmount ? parsedAmount : undefined, tokenIn);

  // Spot reference = one whole token through the same route.
  const oneUnit = token.kind !== "USDC" && decimals !== undefined ? BigInt(10) ** BigInt(decimals) : BigInt(0);
  const { amountOut: oneUnitQuote } = useSwapRouterQuote(
    oneUnit > BigInt(0) && parsedAmount > oneUnit ? oneUnit : undefined,
    tokenIn,
  );

  const status: QuoteStatus =
    token.kind === "USDC"
      ? "not-needed"
      : !hasAmount
        ? "idle"
        : error
          ? "unavailable"
          : isLoading || amountOut === undefined
            ? "loading"
            : "ready";

  const amountOutMin = useMemo(() => {
    if (token.kind === "USDC" || amountOut === undefined) return BigInt(0);
    return (amountOut * BigInt(10_000 - slippageBps)) / BigInt(10_000);
  }, [token.kind, amountOut, slippageBps]);

  const priceImpactPct = useMemo(() => {
    if (token.kind === "USDC" || amountOut === undefined || !oneUnitQuote || parsedAmount <= oneUnit) return null;
    const realized = Number(amountOut) / Number(parsedAmount);
    const spot = Number(oneUnitQuote) / Number(oneUnit);
    if (!Number.isFinite(realized) || !Number.isFinite(spot) || spot <= 0) return null;
    return Math.max(0, (1 - realized / spot) * 100);
  }, [token.kind, amountOut, oneUnitQuote, parsedAmount, oneUnit]);

  /** USDC the PariMatch contract will receive (post-swap floor on non-USDC paths). */
  const expectedStakeUsdc = token.kind === "USDC" ? parsedAmount : amountOutMin;

  return { status, quotedUsdcOut: amountOut, amountOutMin, priceImpactPct, expectedStakeUsdc };
}

export type TicketQuote = ReturnType<typeof useTicketQuote>;

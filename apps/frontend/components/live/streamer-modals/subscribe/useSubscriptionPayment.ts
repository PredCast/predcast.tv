"use client";

import { useMemo } from "react";
import { formatUnits } from "viem";

import { useSwapRouterQuote } from "@/hooks/useSwapRouterQuote";

import {
  quoteTokenFor,
  tokenAmountForUsdc,
  useStreamerSwapQuote,
  withMarginBps,
  type StreamerTokenKind,
} from "../shared";

/** Headroom over the slippage tolerance for the price impact of the full-size swap. */
const PRICE_IMPACT_BUFFER_BPS = 100;
const MAX_FRACTION_DIGITS = 4;

interface PaymentArgs {
  readonly token: StreamerTokenKind;
  readonly decimals: number | undefined;
  /** `subscriptionCost(duration)` in USDC atomic units; undefined while loading or unpriced. */
  readonly cost: bigint | undefined;
  readonly slippageBps: number;
}

/**
 * Amount to send for a subscription costing `cost` USDC. USDC pays `cost` exactly; swap paths
 * size the input from a one-unit quote plus margin, then require `amountOutMin >= cost`
 * (the router reverts `SubscriptionUnderpaid` below it).
 */
export function useSubscriptionPayment({ token, decimals, cost, slippageBps }: PaymentArgs) {
  const isSwap = token.kind !== "USDC";
  const oneUnit = decimals !== undefined ? BigInt(10) ** BigInt(decimals) : BigInt(0);
  const probe = useSwapRouterQuote(isSwap && oneUnit > BigInt(0) ? oneUnit : undefined, quoteTokenFor(token));
  const probePathMissing =
    isSwap && !probe.isLoading && (probe.error !== null || probe.amountOut === BigInt(0));

  const parsedAmount = useMemo(() => {
    if (cost === undefined || cost === BigInt(0)) return BigInt(0);
    if (!isSwap) return cost;
    if (probe.amountOut === undefined || decimals === undefined) return BigInt(0);
    return tokenAmountForUsdc({
      targetUsdc: withMarginBps(cost, slippageBps + PRICE_IMPACT_BUFFER_BPS),
      unitPriceUsdc: probe.amountOut,
      decimals,
      fractionDigits: token.kind === "CHZ" ? 0 : MAX_FRACTION_DIGITS,
    });
  }, [cost, isSwap, probe.amountOut, decimals, slippageBps, token.kind]);

  const live = useStreamerSwapQuote(token, parsedAmount, slippageBps);
  const quoteBelowCost =
    isSwap && live.quotedUsdcOut !== undefined && cost !== undefined && live.quotedUsdcOut < cost;
  const amountOutMin =
    isSwap && cost !== undefined && live.amountOutMin > BigInt(0) && live.amountOutMin < cost
      ? cost
      : live.amountOutMin;

  const ready =
    parsedAmount > BigInt(0) && (!isSwap || (live.swapReady && !quoteBelowCost && !live.swapPathMissing));

  return {
    parsedAmount,
    tokenAmount: decimals !== undefined ? Number(formatUnits(parsedAmount, decimals)) : 0,
    quotedUsdcOut: live.quotedUsdcOut,
    amountOutMin,
    swapPathMissing: probePathMissing || live.swapPathMissing,
    quoteBelowCost,
    ready,
  };
}

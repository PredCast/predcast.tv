"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { chilizConfig } from "@/config/chiliz.config";
import { useSwapRouterQuote } from "@/hooks/useSwapRouterQuote";

import { slippageFloor } from "./swapMath";
import type { StreamerTokenKind } from "./tokens";

/** Router quote input for a token: WCHZ stands in for the native token, USDC needs none. */
export function quoteTokenFor(token: StreamerTokenKind): Address | undefined {
  if (token.kind === "ERC20") return token.address;
  if (token.kind === "CHZ") return chilizConfig.wrappedNativeToken;
  return undefined;
}

/**
 * Live USDC quote for `amount` of the selected token and the derived `amountOutMin`.
 * `amountOutMin` stays 0 until a priced quote exists; swap submits must be blocked then
 * (the router reverts `SlippageNotSet` on 0).
 */
export function useStreamerSwapQuote(token: StreamerTokenKind, amount: bigint, slippageBps: number) {
  const isSwap = token.kind !== "USDC";
  const { amountOut, error, isLoading } = useSwapRouterQuote(
    isSwap && amount > BigInt(0) ? amount : undefined,
    quoteTokenFor(token),
  );

  const quoted = amountOut !== undefined && amountOut > BigInt(0) ? amountOut : undefined;
  const swapPathMissing =
    isSwap && amount > BigInt(0) && !isLoading && (error !== null || amountOut === BigInt(0));

  const amountOutMin = useMemo(
    () => (isSwap && quoted !== undefined ? slippageFloor(quoted, slippageBps) : BigInt(0)),
    [isSwap, quoted, slippageBps],
  );

  return {
    quotedUsdcOut: quoted,
    amountOutMin,
    swapPathMissing,
    /** True when a swap submit has its non-zero minimum (always true on the USDC path). */
    swapReady: !isSwap || amountOutMin > BigInt(0),
  };
}

'use client';

import type { Address } from 'viem';

import { useNetworkRouterReadQuoteTokenToUsdc } from '@/lib/contracts/generated';
import { chilizConfig } from '@/config/chiliz.config';

const CHAIN_ID: number = chilizConfig.chainId;
const ROUTER_ADDRESS = chilizConfig.networkRouter;

/**
 * USDC quote through `NetworkRouter.quoteTokenToUSDC` — follows the exact
 * route the swap will execute (fan-token wrap included), unlike a hand-built
 * Kayen path which reverts for wrapped tokens. The quote is a *quote*, not a
 * guarantee — slippage tolerance still has to be applied before passing
 * `amountOutMin` to a write call. An unpriced route quotes 0 (no revert).
 *
 * @param amountIn Input amount in `tokenIn`'s atomic units (contract-reported
 *                 decimals — mainnet fan tokens are 0-dp).
 * @param tokenIn  Address of the input token. Pass `WCHZ` for CHZ quotes —
 *                 CHZ swaps through WCHZ 1:1. USDC→USDC quotes are not
 *                 supported (callers should skip quoting and use the input
 *                 directly).
 */
export function useSwapRouterQuote(amountIn: bigint | undefined, tokenIn: Address | undefined) {
    const enabled =
        amountIn !== undefined &&
        amountIn > BigInt(0) &&
        !!tokenIn &&
        // quoteTokenToUSDC reverts when token == USDC (TokenIsUSDC guard).
        tokenIn.toLowerCase() !== chilizConfig.usdc.toLowerCase();

    const { data, isLoading, error } = useNetworkRouterReadQuoteTokenToUsdc({
        address: ROUTER_ADDRESS,
        args: enabled ? [tokenIn, amountIn] : undefined,
        chainId: CHAIN_ID,
        query: { enabled, staleTime: 8_000 },
    });

    return { amountOut: data as bigint | undefined, isLoading, error };
}

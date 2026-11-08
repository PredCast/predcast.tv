"use client";

import { useChains } from "wagmi";
import type { Address } from "viem";

import { chilizConfig } from "@/config/chiliz.config";

export interface BettingChain {
  readonly chainId: number;
  /** Chain display name from the wagmi config (e.g. "Chiliz Spicy Testnet"). */
  readonly name: string;
  readonly pariMatchFactory: Address;
  readonly swapRouter: Address;
  readonly usdc: Address;
  readonly explorerAddressUrl: (address: string) => string | null;
}

/**
 * Network the prediction settles on. Single entry point so a future network picker
 * (Chiliz / Base) only changes this hook; today it always resolves to the Chiliz config.
 */
export function useBettingChain(): BettingChain {
  const chain = useChains().find((c) => c.id === chilizConfig.chainId);
  const explorer = chain?.blockExplorers?.default.url;
  return {
    chainId: chilizConfig.chainId,
    name: chain?.name ?? `Chain ${chilizConfig.chainId}`,
    pariMatchFactory: chilizConfig.pariMatchFactory,
    swapRouter: chilizConfig.chilizSwapRouter,
    usdc: chilizConfig.usdc,
    explorerAddressUrl: (address) => (explorer ? `${explorer}/address/${address}` : null),
  };
}

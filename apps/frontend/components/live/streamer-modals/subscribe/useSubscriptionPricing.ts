"use client";

import { zeroAddress, type Address } from "viem";

import { chilizConfig } from "@/config/chiliz.config";
import {
  useStreamWalletReadSubscriptionCost,
  useStreamWalletReadSubscriptionPeriod,
  useStreamWalletReadSubscriptionPrice,
} from "@/lib/contracts/generated";

// Widened to `number`: narrow chainId literals blow the generated hooks' TS depth limit.
const CHAIN_ID: number = chilizConfig.chainId;

export type SubscriptionPricing =
  | { readonly status: "loading" }
  /** No wallet yet, or the streamer never called `setSubscriptionPricing`: subscribing reverts. */
  | { readonly status: "unpriced" }
  | {
      readonly status: "priced";
      /** USDC (atomic) for one `period`. */
      readonly price: bigint;
      /** Seconds bought by `price`. */
      readonly period: bigint;
      /** `subscriptionCost(duration)`: USDC (atomic) the router requires, fee included. */
      readonly cost: bigint | undefined;
    };

/**
 * Streamer-set subscription price read from their StreamWallet.
 * `streamWallet` is the factory's `getWallet` result: undefined while loading, zero when none exists.
 */
export function useSubscriptionPricing(streamWallet: Address | undefined, duration: bigint): SubscriptionPricing {
  const hasWallet = !!streamWallet && streamWallet !== zeroAddress;

  const { data: price, isLoading: priceLoading } = useStreamWalletReadSubscriptionPrice({
    address: hasWallet ? streamWallet : undefined,
    chainId: CHAIN_ID,
    query: { enabled: hasWallet },
  });
  const { data: period } = useStreamWalletReadSubscriptionPeriod({
    address: hasWallet ? streamWallet : undefined,
    chainId: CHAIN_ID,
    query: { enabled: hasWallet },
  });
  // `subscriptionCost` reverts `SubscriptionPriceNotSet` while the price is 0.
  const priced = price !== undefined && price > BigInt(0);
  const { data: cost } = useStreamWalletReadSubscriptionCost({
    address: hasWallet ? streamWallet : undefined,
    args: [duration],
    chainId: CHAIN_ID,
    query: { enabled: hasWallet && priced && duration > BigInt(0) },
  });

  if (streamWallet === undefined) return { status: "loading" };
  if (!hasWallet) return { status: "unpriced" };
  if (priceLoading || price === undefined) return { status: "loading" };
  if (!priced) return { status: "unpriced" };
  if (period === undefined) return { status: "loading" };
  if (BigInt(period) === BigInt(0)) return { status: "unpriced" };
  return { status: "priced", price, period: BigInt(period), cost };
}

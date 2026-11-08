"use client";

import { encodeFunctionData, parseEther, type Address } from "viem";
import { useEstimateGas, useGasPrice } from "wagmi";

import { gasReserveWei } from "@chiliztv/domain/betting/stakePresets";

import { chilizConfig } from "@/config/chiliz.config";
import { chilizSwapRouterAbi } from "@/lib/contracts/generated";

const GAS_MARGIN_BPS = 15_000;
const GAS_RESERVE_FLOOR_WEI = parseEther("1");

interface GasReserveArgs {
  readonly enabled: boolean;
  readonly wallet: Address | undefined;
  readonly contractAddress: Address;
  readonly marketId: number;
  readonly outcome: number | null;
  /** Probe value for the estimate: half the balance keeps the swap above the stake minimum. */
  readonly probeValue: bigint;
}

/** CHZ kept aside by the 100% preset: estimateGas × gasPrice × 1.5, never below 1 CHZ. */
export function useChzGasReserve({ enabled, wallet, contractAddress, marketId, outcome, probeValue }: GasReserveArgs): bigint {
  const active = enabled && !!wallet && probeValue > BigInt(0);
  const { data: gasPrice } = useGasPrice({ chainId: chilizConfig.chainId, query: { enabled: active } });
  const { data: gasLimit } = useEstimateGas({
    account: wallet,
    chainId: chilizConfig.chainId,
    to: chilizConfig.chilizSwapRouter,
    value: probeValue,
    data: encodeFunctionData({
      abi: chilizSwapRouterAbi,
      functionName: "placeBetWithCHZ",
      // amountOutMin 0 + far deadline: only the gas profile matters here.
      args: [contractAddress, BigInt(marketId), BigInt(outcome ?? 0), BigInt(0), BigInt(2) ** BigInt(40)],
    }),
    query: { enabled: active, retry: false, staleTime: 60_000 },
  });
  return gasReserveWei(gasLimit, gasPrice, GAS_MARGIN_BPS, GAS_RESERVE_FLOOR_WEI);
}

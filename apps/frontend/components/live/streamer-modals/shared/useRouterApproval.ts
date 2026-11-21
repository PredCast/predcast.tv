"use client";

import { useEffect } from "react";
import { erc20Abi, maxUint256, type Address } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

import { chilizConfig } from "@/config/chiliz.config";

import { erc20AddressFor, type StreamerTokenKind } from "./tokens";

/** ERC20 allowance on the router for the selected token, plus the approve write. */
export function useRouterApproval(
  tokenKind: StreamerTokenKind,
  owner: Address | undefined,
  routerAddress: Address,
  amount: bigint,
) {
  const erc20Address = erc20AddressFor(tokenKind);

  const { data: allowance, refetch } = useReadContract({
    abi: erc20Abi,
    address: erc20Address,
    functionName: "allowance",
    args: owner && erc20Address ? [owner, routerAddress] : undefined,
    chainId: chilizConfig.chainId,
    query: { enabled: !!erc20Address && !!owner },
  });
  const needsApproval =
    !!erc20Address && amount > BigInt(0) && (allowance ?? BigInt(0)) < amount;

  const { writeContract, data: approveTxHash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: approveTxHash });

  useEffect(() => {
    if (isSuccess) void refetch();
  }, [isSuccess, refetch]);

  const approve = () => {
    if (!erc20Address) return;
    writeContract({
      abi: erc20Abi,
      address: erc20Address,
      functionName: "approve",
      args: [routerAddress, maxUint256],
    });
  };

  return {
    needsApproval,
    approve,
    isApprovePending: isPending,
    isApproveConfirming: isConfirming,
    approveError: error,
  };
}

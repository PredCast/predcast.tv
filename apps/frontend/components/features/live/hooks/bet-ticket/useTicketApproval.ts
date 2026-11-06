"use client";

import { erc20Abi, maxUint256, type Address } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";

import { chilizConfig } from "@/config/chiliz.config";

/** ERC20 allowance towards the swap router. CHZ is native and never needs one. */
export function useTicketApproval(
  erc20Address: Address | undefined,
  walletAddress: Address | undefined,
  routerAddress: Address,
  parsedAmount: bigint,
) {
  const { writeContract, data: approveTxHash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: approveTxHash });
  /** Changes once an approve tx confirms; used as wagmi `scopeKey` so dependent reads re-run. */
  const approvalKey = isSuccess ? approveTxHash : undefined;

  const { data: allowanceData } = useReadContract({
    abi: erc20Abi,
    address: erc20Address,
    functionName: "allowance",
    args: walletAddress && erc20Address ? [walletAddress, routerAddress] : undefined,
    chainId: chilizConfig.chainId,
    scopeKey: approvalKey,
    query: { enabled: !!walletAddress && !!erc20Address },
  });
  const allowance = (allowanceData as bigint | undefined) ?? BigInt(0);

  const approve = () => {
    if (!erc20Address) return;
    writeContract({ abi: erc20Abi, address: erc20Address, functionName: "approve", args: [routerAddress, maxUint256] });
  };

  return {
    needsApproval: !!erc20Address && parsedAmount > BigInt(0) && allowance < parsedAmount,
    approve,
    approvalKey,
    isApproving: isPending || isConfirming,
    approveError: error,
  };
}

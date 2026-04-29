"use client";

import { useEffect, useMemo, useState } from "react";
import { erc20Abi, formatUnits, parseUnits, type Address } from "viem";
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { ArrowDownUp, Loader2, Wallet, X } from "lucide-react";
import { useLiquidityPool } from "@/hooks/useLiquidityPool";
import { useLiquidityPoolReadAsset } from "@/lib/contracts/generated";
import { chilizConfig } from "@/config/chiliz.config";

interface PoolDepositDialogProps {
  open: boolean;
  onClose: () => void;
}

type Mode = "deposit" | "withdraw";

const USDC_DECIMALS = 6;
const SHARE_DECIMALS = 18;

function formatUsdc(value: bigint | undefined, fractionDigits = 2): string {
  if (value === undefined) return "—";
  const n = Number(formatUnits(value, USDC_DECIMALS));
  return n.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

function formatShares(value: bigint | undefined): string {
  if (value === undefined) return "—";
  const n = Number(formatUnits(value, SHARE_DECIMALS));
  return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
}

export function PoolDepositDialog({ open, onClose }: PoolDepositDialogProps) {
  const poolAddress = chilizConfig.liquidityPool;
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const userAddress = primaryWallet?.address as Address | undefined;

  const [mode, setMode] = useState<Mode>("deposit");
  const [amount, setAmount] = useState("");

  const parsedAmount = useMemo(() => {
    if (!amount) return undefined;
    try {
      return parseUnits(amount, USDC_DECIMALS);
    } catch {
      return undefined;
    }
  }, [amount]);

  const { data: assetAddress } = useLiquidityPoolReadAsset({ address: poolAddress });
  const usdcAddress = assetAddress as Address | undefined;

  const {
    stats,
    sharesOf,
    previewDeposit,
    previewWithdraw,
    convertToAssets,
    deposit,
    withdraw,
    depositState,
    withdrawState,
    refetchStats,
  } = useLiquidityPool(poolAddress, userAddress, parsedAmount);

  const userShares = sharesOf(userAddress ?? "0x0000000000000000000000000000000000000000");
  const userAssets = convertToAssets(BigInt(0));
  const previewSharesForDeposit = previewDeposit(BigInt(0));
  const previewSharesForWithdraw = previewWithdraw(BigInt(0));

  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    abi: erc20Abi,
    address: usdcAddress,
    functionName: "allowance",
    args: userAddress && usdcAddress ? [userAddress, poolAddress] : undefined,
    query: { enabled: !!userAddress && !!usdcAddress },
  });

  const { data: usdcBalance, refetch: refetchBalance } = useReadContract({
    abi: erc20Abi,
    address: usdcAddress,
    functionName: "balanceOf",
    args: userAddress ? [userAddress] : undefined,
    query: { enabled: !!userAddress && !!usdcAddress },
  });

  const {
    writeContract: writeApprove,
    data: approveHash,
    isPending: approvePending,
    error: approveError,
    reset: resetApprove,
  } = useWriteContract();
  const { isLoading: approveConfirming, isSuccess: approveSuccess } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  useEffect(() => {
    if (approveSuccess) {
      refetchAllowance();
      resetApprove();
    }
  }, [approveSuccess, refetchAllowance, resetApprove]);

  useEffect(() => {
    if (depositState.isSuccess || withdrawState.isSuccess) {
      refetchAllowance();
      refetchBalance();
      refetchStats();
      setAmount("");
    }
  }, [depositState.isSuccess, withdrawState.isSuccess, refetchAllowance, refetchBalance, refetchStats]);

  useEffect(() => {
    if (!open) {
      setAmount("");
    }
  }, [open]);

  if (!open) return null;

  const needsApproval =
    mode === "deposit" &&
    parsedAmount !== undefined &&
    (allowance as bigint | undefined) !== undefined &&
    (allowance as bigint) < parsedAmount;

  const insufficientBalance =
    mode === "deposit" &&
    parsedAmount !== undefined &&
    (usdcBalance as bigint | undefined) !== undefined &&
    (usdcBalance as bigint) < parsedAmount;

  const insufficientShares =
    mode === "withdraw" &&
    parsedAmount !== undefined &&
    userAssets !== undefined &&
    userAssets < parsedAmount;

  const txPending =
    approvePending ||
    approveConfirming ||
    depositState.isPending ||
    depositState.isConfirming ||
    withdrawState.isPending ||
    withdrawState.isConfirming;

  const handleApprove = () => {
    if (!usdcAddress || parsedAmount === undefined) return;
    writeApprove({
      abi: erc20Abi,
      address: usdcAddress,
      functionName: "approve",
      args: [poolAddress, parsedAmount],
    });
  };

  const handleSubmit = () => {
    if (!userAddress || parsedAmount === undefined) return;
    if (mode === "deposit") {
      deposit(parsedAmount, userAddress);
    } else {
      withdraw(parsedAmount, userAddress, userAddress);
    }
  };

  const handleMax = () => {
    if (mode === "deposit") {
      if (usdcBalance !== undefined) {
        setAmount(formatUnits(usdcBalance as bigint, USDC_DECIMALS));
      }
    } else {
      if (userAssets !== undefined) {
        setAmount(formatUnits(userAssets, USDC_DECIMALS));
      }
    }
  };

  const previewLabel =
    mode === "deposit" ? "You receive (shares)" : "Shares burned";
  const previewValue =
    mode === "deposit"
      ? formatShares(previewSharesForDeposit)
      : formatShares(previewSharesForWithdraw);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg overflow-hidden"
        style={{ background: "#0F0F0F", border: "1px solid #2A2A2A" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[2px]" style={{ background: "linear-gradient(90deg, #E8001D 0%, transparent 60%)" }} />

        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #1E1E1E" }}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-5 rounded-full" style={{ background: "#E8001D" }} />
            <h3
              className="text-[16px] font-bold uppercase tracking-[0.06em]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}
            >
              Liquidity Pool
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded transition-colors"
            style={{ color: "#888" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1E1E1E")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <X size={14} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-0 rounded-md overflow-hidden" style={{ background: "#0A0A0A", border: "1px solid #1E1E1E" }}>
            {(["deposit", "withdraw"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  background: mode === m ? "#1A1A1A" : "transparent",
                  color: mode === m ? "#fff" : "#666",
                }}
              >
                {m}
              </button>
            ))}
          </div>

          {!userAddress ? (
            <div
              className="rounded-md p-5 flex flex-col items-center text-center gap-3"
              style={{ background: "#0A0A0A", border: "1px solid #1E1E1E" }}
            >
              <Wallet size={20} style={{ color: "#666" }} />
              <p className="text-[12px]" style={{ color: "#888" }}>
                Connect your wallet to deposit or withdraw.
              </p>
              <button
                onClick={() => setShowAuthFlow(true)}
                className="mt-1 px-4 py-2 rounded text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ background: "#E8001D", color: "#fff" }}
              >
                Connect Wallet
              </button>
            </div>
          ) : (
            <>
              <div
                className="rounded-md p-4"
                style={{ background: "#0A0A0A", border: "1px solid #1E1E1E" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "#666" }}>
                    {mode === "deposit" ? "Deposit" : "Withdraw"} (USDC)
                  </span>
                  <button
                    onClick={handleMax}
                    className="text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded"
                    style={{ background: "rgba(232,0,29,0.1)", color: "#E8001D" }}
                  >
                    Max
                  </button>
                </div>
                <input
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => {
                    const v = e.target.value.replace(/[^0-9.]/g, "");
                    setAmount(v);
                  }}
                  placeholder="0.00"
                  className="w-full bg-transparent outline-none font-mono text-[24px] font-bold"
                  style={{ color: "#fff", fontFamily: "'JetBrains Mono', monospace" }}
                />
                <div className="flex items-center justify-between mt-2 text-[11px]" style={{ color: "#555" }}>
                  <span>
                    {mode === "deposit" ? "Wallet" : "Your stake"}:{" "}
                    <span className="font-mono" style={{ color: "#888" }}>
                      {mode === "deposit"
                        ? `${formatUsdc(usdcBalance as bigint | undefined)} USDC`
                        : `${formatUsdc(userAssets)} USDC`}
                    </span>
                  </span>
                  <span>
                    Shares:{" "}
                    <span className="font-mono" style={{ color: "#888" }}>
                      {formatShares(userShares)}
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowDownUp size={14} style={{ color: "#444" }} />
              </div>

              <div
                className="rounded-md p-4 flex items-center justify-between"
                style={{ background: "#0A0A0A", border: "1px solid #1E1E1E" }}
              >
                <span className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "#666" }}>
                  {previewLabel}
                </span>
                <span className="font-mono text-[14px] font-bold" style={{ color: "#fff" }}>
                  {previewValue}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center pt-2" style={{ borderTop: "1px solid #1A1A1A" }}>
                <Stat label="TVL" value={`$${formatUsdc(stats.totalAssets, 0)}`} />
                <Stat
                  label="Util."
                  value={
                    stats.utilization !== undefined
                      ? `${(Number(stats.utilization) / 1e16).toFixed(1)}%`
                      : "—"
                  }
                />
                <Stat
                  label="Fee"
                  value={
                    stats.protocolFeeBps !== undefined
                      ? `${(stats.protocolFeeBps / 100).toFixed(2)}%`
                      : "—"
                  }
                />
              </div>

              {(approveError || depositState.error || withdrawState.error) && (
                <div
                  className="rounded-md p-3 text-[11px]"
                  style={{ background: "rgba(232,0,29,0.08)", border: "1px solid rgba(232,0,29,0.25)", color: "#F88" }}
                >
                  {(approveError || depositState.error || withdrawState.error)?.message?.slice(0, 200)}
                </div>
              )}

              {needsApproval && !insufficientBalance ? (
                <button
                  onClick={handleApprove}
                  disabled={txPending || parsedAmount === undefined}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded text-[12px] font-bold uppercase tracking-[0.08em] transition-all"
                  style={{
                    background: txPending ? "#3A3A3A" : "#E8001D",
                    color: "#fff",
                    cursor: txPending ? "not-allowed" : "pointer",
                  }}
                >
                  {approvePending || approveConfirming ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Approving USDC…
                    </>
                  ) : (
                    "Approve USDC"
                  )}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={
                    txPending ||
                    parsedAmount === undefined ||
                    parsedAmount === BigInt(0) ||
                    insufficientBalance ||
                    insufficientShares ||
                    stats.isPaused === true
                  }
                  className="w-full flex items-center justify-center gap-2 py-3 rounded text-[12px] font-bold uppercase tracking-[0.08em] transition-all"
                  style={{
                    background:
                      txPending || insufficientBalance || insufficientShares || stats.isPaused
                        ? "#3A3A3A"
                        : "#E8001D",
                    color: "#fff",
                    cursor: txPending ? "not-allowed" : "pointer",
                  }}
                >
                  {txPending ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      {mode === "deposit" ? "Depositing…" : "Withdrawing…"}
                    </>
                  ) : stats.isPaused ? (
                    "Pool Paused"
                  ) : insufficientBalance ? (
                    "Insufficient USDC"
                  ) : insufficientShares ? (
                    "Insufficient Stake"
                  ) : mode === "deposit" ? (
                    "Deposit"
                  ) : (
                    "Withdraw"
                  )}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="text-[9px] uppercase tracking-[0.1em] mb-1"
        style={{ color: "#555" }}
      >
        {label}
      </div>
      <div
        className="font-mono text-[12px] font-bold"
        style={{ color: "#ccc", fontFamily: "'JetBrains Mono', monospace" }}
      >
        {value}
      </div>
    </div>
  );
}

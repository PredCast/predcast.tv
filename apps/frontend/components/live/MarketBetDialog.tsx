"use client";

import { useEffect, useMemo, useState } from "react";
import { type Address } from "viem";
import { useBalance } from "wagmi";
import { TrendingUp, ExternalLink, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBettingMatch } from "@/hooks/useBettingMatch";
import { useLiquidityPoolReadAsset } from "@/lib/contracts/generated";
import { chilizConfig } from "@/config/chiliz.config";
import type { MarketSelection } from "./MatchMarketsList";
import { BET_TOKEN_SYMBOL, formatBetAmount } from "./utils/betToken";

interface MarketBetDialogProps {
  open: boolean;
  onClose: () => void;
  contractAddress: Address;
  walletAddress?: string;
  selection: MarketSelection | null;
  homeTeam?: string;
  awayTeam?: string;
}

interface Outcome {
  selection: number;
  label: string;
  hint?: string;
}

const PERCENTS = [25, 50, 75, 100] as const;
const MIN_BET = 1;

function getOutcomes(
  marketTypeKey: string,
  line: number,
  homeTeam?: string,
  awayTeam?: string,
): Outcome[] {
  switch (marketTypeKey) {
    case "winner":
    case "halftime":
      return [
        { selection: 0, label: homeTeam ?? "Home", hint: "Home win" },
        { selection: 1, label: "Draw", hint: "Tie" },
        { selection: 2, label: awayTeam ?? "Away", hint: "Away win" },
      ];
    case "goalstotal": {
      const ln = (line / 10).toFixed(1);
      return [
        { selection: 0, label: `Over ${ln}`, hint: "More goals" },
        { selection: 1, label: `Under ${ln}`, hint: "Fewer goals" },
      ];
    }
    case "bothscore":
      return [
        { selection: 0, label: "Yes", hint: "Both teams score" },
        { selection: 1, label: "No", hint: "At least one shut out" },
      ];
    case "firstscorer":
      return [
        { selection: 0, label: homeTeam ?? "Home", hint: "Scores first" },
        { selection: 1, label: awayTeam ?? "Away", hint: "Scores first" },
        { selection: 2, label: "No Goal", hint: "0-0 at full time" },
      ];
    default:
      return [];
  }
}

export function MarketBetDialog({
  open,
  onClose,
  contractAddress,
  walletAddress,
  selection,
  homeTeam,
  awayTeam,
}: MarketBetDialogProps) {
  const [selectedOutcome, setSelectedOutcome] = useState<number | null>(null);
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const outcomes = useMemo(
    () => (selection ? getOutcomes(selection.marketTypeKey, selection.line, homeTeam, awayTeam) : []),
    [selection, homeTeam, awayTeam],
  );

  const { data: betTokenAddress } = useLiquidityPoolReadAsset({
    address: chilizConfig.liquidityPool,
  });

  const { data: balanceData } = useBalance({
    address: walletAddress as `0x${string}` | undefined,
    token: betTokenAddress as `0x${string}` | undefined,
    query: { enabled: !!walletAddress && !!betTokenAddress },
  });
  const balance = balanceData ? Number(balanceData.formatted) : 0;

  const { placeBet, betState } = useBettingMatch(
    contractAddress,
    walletAddress as `0x${string}`,
    selection?.marketId ?? 0,
  );
  const { isPending, isConfirming, isSuccess, txHash, error: txError } = betState;
  const isLoading = isPending || isConfirming;
  const isMarketOpen = selection?.state === 1;

  // Reset form when dialog closes or market changes
  useEffect(() => {
    if (!open) {
      setSelectedOutcome(null);
      setAmount("");
      setErrorMessage(null);
    }
  }, [open, selection?.marketId]);

  useEffect(() => {
    if (txError) {
      setErrorMessage(txError.message ?? "Transaction failed");
    }
  }, [txError]);

  if (!selection) return null;

  const numericAmount = Number(amount);
  const isValidAmount = !Number.isNaN(numericAmount) && numericAmount >= MIN_BET;
  const canSubmit =
    selectedOutcome !== null && isValidAmount && isMarketOpen && !isLoading && !!walletAddress;

  const handleSubmit = () => {
    if (!canSubmit || selectedOutcome === null) return;
    setErrorMessage(null);
    try {
      placeBet(selection.marketId, selectedOutcome, amount);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Unknown error");
    }
  };

  const setPercent = (pct: number) => {
    if (balance <= 0) return;
    const value = (balance * pct) / 100;
    setAmount(value.toFixed(4));
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="sm:max-w-[460px] p-0 gap-0 rounded-lg overflow-hidden"
        style={{ background: "#0F0F0F", color: "#fff", border: "1px solid #2A2A2A" }}
      >
        {/* Red top accent */}
        <div
          className="h-[2px] w-full"
          style={{ background: "linear-gradient(90deg, #E8001D 0%, transparent 60%)" }}
        />

        {/* Header */}
        <DialogHeader className="p-0">
          <div
            className="px-5 py-4 flex items-center gap-2"
            style={{ borderBottom: "1px solid #2A2A2A" }}
          >
            <TrendingUp size={14} style={{ color: "#E8001D" }} />
            <DialogTitle
              className="text-[14px] font-bold tracking-[0.1em] uppercase"
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {selection.marketLabel}
            </DialogTitle>
            <div className="flex-1" />
            <span
              className="text-[10px] font-semibold tracking-[0.08em] uppercase mr-6"
              style={{ color: "#888", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Pool {formatBetAmount(selection.totalPool)} {BET_TOKEN_SYMBOL}
            </span>
          </div>
        </DialogHeader>

        {/* Body */}
        {isSuccess ? (
          <div className="px-5 py-8 flex flex-col items-center gap-3">
            <CheckCircle2 size={36} style={{ color: "#00C853" }} />
            <p
              className="text-[14px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Bet placed
            </p>
            {txHash && (
              <a
                href={`https://scan.chiliz.com/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px]"
                style={{ color: "#E8001D", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {txHash.slice(0, 10)}…{txHash.slice(-8)}
                <ExternalLink size={11} />
              </a>
            )}
            <button
              onClick={onClose}
              className="mt-2 px-4 h-9 rounded text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-150"
              style={{
                background: "#E8001D",
                color: "#fff",
                fontFamily: "'Barlow', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#B0001A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#E8001D";
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="px-5 py-5 space-y-5">
            {/* Outcomes */}
            <div className="space-y-2">
              <div
                className="text-[10px] font-semibold tracking-[0.1em] uppercase"
                style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}
              >
                Pick an outcome
              </div>
              {outcomes.length === 0 ? (
                <div
                  className="text-[12px] py-3 px-3 rounded"
                  style={{
                    background: "#1E1E1E",
                    color: "#888",
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  This market has multiple outcomes — a future detail view will let you pick a specific score.
                </div>
              ) : (
                <div
                  className="grid gap-2"
                  style={{ gridTemplateColumns: `repeat(${outcomes.length}, minmax(0, 1fr))` }}
                >
                  {outcomes.map((o) => {
                    const isSelected = selectedOutcome === o.selection;
                    return (
                      <button
                        key={o.selection}
                        onClick={() => setSelectedOutcome(o.selection)}
                        disabled={!isMarketOpen}
                        className="flex flex-col items-center gap-1 px-2 py-3 rounded transition-colors duration-150"
                        style={{
                          background: isSelected ? "rgba(232,0,29,0.12)" : "#1E1E1E",
                          border: `1px solid ${isSelected ? "#E8001D" : "#2A2A2A"}`,
                          color: isSelected ? "#fff" : "#ccc",
                          cursor: isMarketOpen ? "pointer" : "not-allowed",
                          opacity: isMarketOpen ? 1 : 0.5,
                        }}
                      >
                        <span
                          className="text-[13px] font-bold uppercase truncate w-full text-center"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {o.label}
                        </span>
                        {o.hint && (
                          <span
                            className="text-[10px]"
                            style={{ color: "#666", fontFamily: "'Barlow', sans-serif" }}
                          >
                            {o.hint}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <div
                className="flex items-center justify-between text-[10px] font-semibold tracking-[0.1em] uppercase"
                style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}
              >
                <span>Amount ({BET_TOKEN_SYMBOL})</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Balance {balance.toFixed(2)}
                </span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                min={MIN_BET}
                step="0.01"
                className="w-full px-4 py-3 rounded text-center font-bold focus:outline-none"
                style={{
                  background: "#1E1E1E",
                  border: "1px solid #2A2A2A",
                  color: "#fff",
                  fontSize: "20px",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              />
              <div className="grid grid-cols-4 gap-2">
                {PERCENTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPercent(p)}
                    disabled={balance <= 0}
                    className="py-1.5 rounded text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-150"
                    style={{
                      background: "#1E1E1E",
                      border: "1px solid #2A2A2A",
                      color: balance > 0 ? "#fff" : "#555",
                      cursor: balance > 0 ? "pointer" : "not-allowed",
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
                    {p === 100 ? "Max" : `${p}%`}
                  </button>
                ))}
              </div>
              <p
                className="text-[10px] text-center"
                style={{ color: "#555", fontFamily: "'Barlow', sans-serif" }}
              >
                Min bet {MIN_BET} {BET_TOKEN_SYMBOL}
              </p>
            </div>

            {!isMarketOpen && (
              <div
                className="px-3 py-2 rounded text-[11px] text-center"
                style={{
                  background: "rgba(245,197,24,0.08)",
                  border: "1px solid rgba(245,197,24,0.3)",
                  color: "#F5C518",
                  fontFamily: "'Barlow', sans-serif",
                }}
              >
                Market is not currently open for bets.
              </div>
            )}

            {errorMessage && (
              <div
                className="px-3 py-2 rounded text-[11px]"
                style={{
                  background: "rgba(232,0,29,0.08)",
                  border: "1px solid rgba(232,0,29,0.3)",
                  color: "#E8001D",
                  fontFamily: "'Barlow', sans-serif",
                }}
              >
                {errorMessage}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full py-3 rounded text-[12px] font-bold tracking-[0.1em] uppercase transition-colors duration-150"
              style={{
                background: canSubmit ? "#E8001D" : "#1E1E1E",
                border: `1px solid ${canSubmit ? "#E8001D" : "#2A2A2A"}`,
                color: canSubmit ? "#fff" : "#666",
                cursor: canSubmit ? "pointer" : "not-allowed",
                fontFamily: "'Barlow', sans-serif",
              }}
              onMouseEnter={(e) => {
                if (!canSubmit) return;
                (e.currentTarget as HTMLButtonElement).style.background = "#B0001A";
              }}
              onMouseLeave={(e) => {
                if (!canSubmit) return;
                (e.currentTarget as HTMLButtonElement).style.background = "#E8001D";
              }}
            >
              {isPending
                ? "Confirm in wallet…"
                : isConfirming
                  ? "Placing bet…"
                  : !walletAddress
                    ? "Connect wallet"
                    : "Place bet"}
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

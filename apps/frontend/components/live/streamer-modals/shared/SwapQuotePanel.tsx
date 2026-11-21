"use client";

import { formatUnits } from "viem";

const SLIPPAGE_OPTIONS_BPS = [10, 50, 100] as const;

interface SwapQuotePanelProps {
  /** Shows the "FanX quote" row when provided. */
  quotedUsdcOut?: bigint;
  showQuote?: boolean;
  amountOutMin: bigint;
  usdcDecimals: number | undefined;
  slippageBps: number;
  onSlippageChange: (bps: number) => void;
}

function formatUsdc(value: bigint | undefined, decimals: number | undefined): string {
  if (value === undefined || value === BigInt(0) || decimals === undefined) return "—";
  const n = Number(formatUnits(value, decimals));
  return `${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDC`;
}

/** Swap quote, minimum received and slippage picker for the non-USDC payment paths. */
export function SwapQuotePanel({
  quotedUsdcOut,
  showQuote = false,
  amountOutMin,
  usdcDecimals,
  slippageBps,
  onSlippageChange,
}: SwapQuotePanelProps) {
  return (
    <div className="mt-4 rounded-xl border border-[#1F1F1F] bg-[#0a0a0a] px-4 py-3">
      {showQuote && (
        <div className="mb-1 flex items-center justify-between text-[11px]">
          <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
            FanX quote
          </span>
          <span className="font-mono-ctv font-bold tabular-nums text-white">
            {formatUsdc(quotedUsdcOut, usdcDecimals)}
          </span>
        </div>
      )}
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
          Min received
        </span>
        <span className="font-mono-ctv tabular-nums text-white/65">
          {formatUsdc(amountOutMin, usdcDecimals)}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="font-mono-ctv text-[10px] uppercase tracking-[0.16em] text-white/45">
          Slippage
        </span>
        {SLIPPAGE_OPTIONS_BPS.map((bps) => (
          <button
            key={bps}
            type="button"
            onClick={() => onSlippageChange(bps)}
            className="font-mono-ctv rounded border px-2 py-0.5 text-[10px] font-bold tabular-nums transition-colors"
            style={{
              borderColor: slippageBps === bps ? "#E8001D" : "#262626",
              background: slippageBps === bps ? "rgba(232,0,29,0.10)" : "transparent",
              color: slippageBps === bps ? "#fff" : "rgba(255,255,255,0.55)",
            }}
          >
            {(bps / 100).toFixed(2)}%
          </button>
        ))}
      </div>
    </div>
  );
}

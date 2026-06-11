"use client";

import { usePlatformStats } from "@/hooks/usePlatformStats";
import { formatUsdcCompact } from "@/lib/format/usdc";

// 33 fan tokens (fanTokenAssets.ts) + USDC + CHZ
const TOKEN_COUNT = 35;

const PLACEHOLDER = "—";

export function StatsStrip() {
  const { data } = usePlatformStats();

  const stats = [
    {
      label: "Volume staked",
      value: formatUsdcCompact(data?.volumeStakedUsdc) ?? PLACEHOLDER,
      delta: "Live on Chiliz mainnet",
      live: true,
    },
    {
      label: "Markets resolved",
      value: data ? String(data.marketsResolved) : PLACEHOLDER,
      delta: "Settled on-chain",
      live: false,
    },
    {
      label: "Leaderboard prizes",
      value: formatUsdcCompact(data?.leaderboardPrizePoolUsdc) ?? PLACEHOLDER,
      delta: "Funded by every market",
      live: false,
    },
    {
      label: "Tokens supported",
      value: String(TOKEN_COUNT),
      delta: "+ Chiliz Chain",
      live: true,
    },
  ];

  return (
    <div
      className="relative z-[4] grid grid-cols-2 border-y border-[#1E1E1E] lg:grid-cols-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(232,0,29,0.04), transparent 50%, rgba(232,0,29,0.04))",
      }}
    >
      {stats.map(({ label, value, delta, live }, i) => (
        <div
          key={label}
          className="relative px-9 py-8"
          style={{
            borderRight:
              i < stats.length - 1 ? "1px solid #1E1E1E" : undefined,
            borderTop: i >= 2 ? "1px solid #1E1E1E" : undefined,
          }}
        >
          <div className="font-mono-ctv mb-2.5 text-[10px] uppercase tracking-[0.18em] text-white/45">
            {label}
          </div>
          <div className="font-display text-[44px] font-extrabold leading-none tracking-[-0.01em]">
            {value}
          </div>
          <div className={`font-mono-ctv mt-1.5 text-[11px] font-semibold ${live ? "text-[#2dd4a4]" : "text-white/45"}`}>
            {delta}
          </div>
          <span
            aria-hidden
            className="absolute bottom-0 left-9 h-0.5 w-6 bg-[#E8001D]"
          />
        </div>
      ))}
    </div>
  );
}

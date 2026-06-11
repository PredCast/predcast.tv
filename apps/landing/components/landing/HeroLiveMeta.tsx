"use client";

import { usePlatformStats } from "@/hooks/usePlatformStats";
import { formatUsdcCompact } from "@/lib/format/usdc";

const PLACEHOLDER = "—";

/** Live platform counters under the hero copy — dims to a dash while loading. */
export function HeroLiveMeta() {
  const { data } = usePlatformStats();

  const meta = [
    { label: "Matches covered", value: data ? String(data.totalMatches) : null },
    { label: "Live right now", value: data ? String(data.liveMatches) : null },
    { label: "Volume staked", value: formatUsdcCompact(data?.volumeStakedUsdc) },
    { label: "Markets resolved", value: data ? String(data.marketsResolved) : null },
  ];

  return (
    <div className="flex flex-wrap gap-8">
      {meta.map(({ label, value }) => (
        <div key={label}>
          <div className="font-mono-ctv mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/45">
            {label}
          </div>
          <div
            className={`font-display text-[28px] font-bold leading-none ${
              value !== null ? "text-white" : "text-white/25"
            }`}
          >
            {value ?? PLACEHOLDER}
          </div>
        </div>
      ))}
    </div>
  );
}

import { formatUnits } from "viem";

import { leadingOutcome, outcomeSharesBps } from "@chiliztv/domain/markets/poolShares";

import type { MarketOutcome, MarketPoolSnapshot } from "@/lib/contracts/markets";

interface OutcomeSegmentsProps {
  readonly outcomes: ReadonlyArray<MarketOutcome>;
  readonly snapshot: MarketPoolSnapshot;
  readonly selected: number | null;
  readonly usdcDecimals: number;
  readonly disabled: boolean;
  readonly onSelect: (outcome: number) => void;
}

export function OutcomeSegments({ outcomes, snapshot, selected, usdcDecimals, disabled, onSelect }: OutcomeSegmentsProps) {
  const pools = snapshot.outcomePools.map((p) => BigInt(p));
  const shares = outcomeSharesBps(pools);
  const lead = leadingOutcome(pools);

  return (
    <div
      role="radiogroup"
      aria-label="Outcome"
      className="grid gap-1.5"
      style={{ gridTemplateColumns: `repeat(${outcomes.length}, minmax(0, 1fr))` }}
    >
      {outcomes.map((o) => {
        const active = o.selection === selected;
        const isLead = o.selection === lead;
        const pool = pools[o.selection] ?? BigInt(0);
        return (
          <button
            key={o.selection}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={disabled}
            onClick={() => onSelect(o.selection)}
            className={`relative flex min-w-0 flex-col items-center gap-1 rounded-lg border px-2 pb-2 pt-2.5 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:cursor-not-allowed disabled:opacity-50 ${
              active ? "border-[#E8001D] bg-[rgba(232,0,29,0.12)]" : "border-[#2A2A2A] bg-[#141414] hover:border-[#3A3A3A]"
            }`}
          >
            {isLead && (
              <span className="font-mono-ctv absolute -top-2 right-1.5 rounded bg-[#E8001D] px-1 py-px text-[8px] font-bold uppercase tracking-[0.14em] text-white">
                Top
              </span>
            )}
            <span className="font-display w-full truncate text-[12px] font-extrabold uppercase leading-none text-white">
              {o.label}
            </span>
            <span className={`font-display text-[20px] font-extrabold leading-none ${active || isLead ? "text-[#E8001D]" : "text-white"}`}>
              {Math.round((shares[o.selection] ?? 0) / 100)}%
            </span>
            <span className="font-mono-ctv text-[10px] tabular-nums text-white/45">
              ${Number(formatUnits(pool, usdcDecimals)).toLocaleString("en-US", { maximumFractionDigits: 2 })}
            </span>
          </button>
        );
      })}
    </div>
  );
}

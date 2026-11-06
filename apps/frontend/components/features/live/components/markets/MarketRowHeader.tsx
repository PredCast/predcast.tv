import { HalftimeDelayBadge } from "@/components/shared/HalftimeDelayBadge";
import { BET_TOKEN_SYMBOL, formatBetAmount } from "@/components/live/utils/betToken";

import type { MarketRowView } from "../../domain/marketView";
import { marketIconFor } from "./marketIcons";

interface MarketRowHeaderProps {
  readonly view: MarketRowView;
  readonly assetDecimals: number | undefined;
}

export function MarketRowHeader({ view, assetDecimals }: MarketRowHeaderProps) {
  const Icon = marketIconFor(view.spec?.key);
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
        style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
      >
        <Icon size={14} style={{ color: "#fff" }} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-display truncate text-[16px] font-extrabold uppercase tracking-tight text-white">
            {view.label}
          </span>
          {view.lineLabel && (
            <span className="font-mono-ctv rounded-sm border border-[#1E1E1E] bg-[#141414] px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-white/65">
              O/U {view.lineLabel}
            </span>
          )}
          <HalftimeDelayBadge delayed={view.halftimeDelayed} />
        </div>
        <div className="font-mono-ctv mt-1 truncate text-[10px] uppercase tracking-[0.16em] text-white/45">
          {view.hint}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1">
        <span
          className="font-mono-ctv rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]"
          style={{
            background: `${view.pillColor}1a`,
            color: view.pillColor,
            border: `1px solid ${view.pillColor}33`,
          }}
        >
          {view.pillLabel}
        </span>
        <span className="font-mono-ctv text-[10px] tabular-nums text-white/45">
          Pool {formatBetAmount(view.totalPool, assetDecimals)} {BET_TOKEN_SYMBOL}
        </span>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";

import type { PriceChange } from "@chiliztv/domain/prices/chartMath";
import type { PriceHistoryRangeDto } from "@chiliztv/shared";

import { RANGE_LABELS, type ChartStyle } from "../../domain/fanTokenCharts";
import { ChartRangeSelector } from "./ChartRangeSelector";
import { ChartStyleToggle } from "./ChartStyleToggle";

interface FanTokenChartHeaderProps {
  readonly priceLabel: string | null;
  readonly unit: string;
  readonly change: PriceChange | null;
  readonly range: PriceHistoryRangeDto;
  readonly onRangeChange: (range: PriceHistoryRangeDto) => void;
  readonly sourceLabel: string;
  readonly updatedLabel: string | null;
  readonly stale: boolean;
  /** Line / Candles toggle; omitted where candles do not apply (1H, cross pair). */
  readonly chartStyle?: { readonly value: ChartStyle; readonly onChange: (style: ChartStyle) => void };
  /** Reserved for the Buy / Sell actions of the active token; empty today. */
  readonly actions?: ReactNode;
}

export function FanTokenChartHeader({
  priceLabel,
  unit,
  change,
  range,
  onRangeChange,
  sourceLabel,
  updatedLabel,
  stale,
  chartStyle,
  actions,
}: FanTokenChartHeaderProps) {
  const up = change?.pct !== null && change?.pct !== undefined && change.pct >= 0;
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-mono-ctv text-[22px] font-bold tabular-nums text-white">{priceLabel ?? "—"}</span>
          <span className="font-mono-ctv text-[10px] uppercase tracking-[0.14em] text-white/45">{unit}</span>
          {change?.pct != null && (
            <span className={`font-mono-ctv text-[12px] font-bold tabular-nums ${up ? "text-[#2dd4a4]" : "text-[#E8001D]"}`}>
              {up ? "+" : ""}
              {change.pct.toFixed(2)}% · {RANGE_LABELS[range]}
            </span>
          )}
        </div>
        <div className="font-mono-ctv mt-1 flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/40">
          <span>{sourceLabel}</span>
          {updatedLabel && <span>· Updated {updatedLabel}</span>}
          {stale && (
            <span className="rounded border border-[#F5C518]/40 px-1.5 py-px text-[#F5C518]" title="The price source is unreachable; showing the last known data.">
              Stale
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {chartStyle && <ChartStyleToggle value={chartStyle.value} onChange={chartStyle.onChange} />}
        <ChartRangeSelector value={range} onChange={onRangeChange} />
        {actions}
      </div>
    </div>
  );
}

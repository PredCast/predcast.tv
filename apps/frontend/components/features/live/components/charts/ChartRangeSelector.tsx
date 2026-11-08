import type { PriceHistoryRangeDto } from "@chiliztv/shared";

import { CHART_RANGES, RANGE_LABELS } from "../../domain/fanTokenCharts";

interface ChartRangeSelectorProps {
  readonly value: PriceHistoryRangeDto;
  readonly onChange: (range: PriceHistoryRangeDto) => void;
}

export function ChartRangeSelector({ value, onChange }: ChartRangeSelectorProps) {
  return (
    <div role="radiogroup" aria-label="Chart range" className="flex rounded-md border border-[#1E1E1E] p-0.5">
      {CHART_RANGES.map((range) => {
        const active = range === value;
        return (
          <button
            key={range}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(range)}
            className={`font-mono-ctv rounded px-2 py-1 text-[10px] font-bold tracking-[0.12em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
              active ? "bg-[#1A1A1A] text-white" : "text-white/45 hover:text-white"
            }`}
          >
            {RANGE_LABELS[range]}
          </button>
        );
      })}
    </div>
  );
}

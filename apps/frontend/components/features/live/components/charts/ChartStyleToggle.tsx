import type { ChartStyle } from "../../domain/fanTokenCharts";

const OPTIONS: ReadonlyArray<{ readonly value: ChartStyle; readonly label: string }> = [
  { value: "line", label: "Line" },
  { value: "candles", label: "Candles" },
];

interface ChartStyleToggleProps {
  readonly value: ChartStyle;
  readonly onChange: (style: ChartStyle) => void;
}

export function ChartStyleToggle({ value, onChange }: ChartStyleToggleProps) {
  return (
    <div role="radiogroup" aria-label="Chart style" className="flex rounded-md border border-[#1E1E1E] p-0.5">
      {OPTIONS.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={`font-mono-ctv rounded px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
              active ? "bg-[#1A1A1A] text-white" : "text-white/45 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

import type { FanTokenChartTab } from "../../domain/fanTokenCharts";

interface FanTokenChartTabsProps {
  readonly tabs: ReadonlyArray<FanTokenChartTab>;
  readonly activeId: string;
  readonly onSelect: (id: string) => void;
}

export function FanTokenChartTabs({ tabs, activeId, onSelect }: FanTokenChartTabsProps) {
  return (
    <div role="tablist" aria-label="Fan-token charts" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1">
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`chart-tab-${tab.id}`}
            aria-selected={active}
            aria-controls="fan-token-chart-panel"
            onClick={() => onSelect(tab.id)}
            className={`font-mono-ctv shrink-0 rounded-md border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
              active
                ? "border-[#E8001D] bg-[rgba(232,0,29,0.10)] text-white"
                : "border-[#1E1E1E] text-white/55 hover:border-[#3A3A3A] hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

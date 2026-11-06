import type { MarketPoolSnapshot } from "@/lib/contracts/markets";

import { marketChipLabel } from "../../domain/selectedMarket";

interface MarketSelectorProps {
  readonly markets: ReadonlyArray<MarketPoolSnapshot>;
  readonly selectedId: number | undefined;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly onSelect: (marketId: number) => void;
}

export function MarketSelector({ markets, selectedId, homeTeam, awayTeam, onSelect }: MarketSelectorProps) {
  return (
    <div role="radiogroup" aria-label="Market" className="flex flex-wrap gap-1.5">
      {markets.map((m) => {
        const id = Number(m.marketId);
        const active = id === selectedId;
        return (
          <button
            key={m.marketId}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(id)}
            className={`font-mono-ctv rounded-md border px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] ${
              active
                ? "border-[#E8001D] bg-[rgba(232,0,29,0.10)] text-white"
                : "border-[#1E1E1E] text-white/55 hover:border-[#3A3A3A] hover:text-white"
            }`}
          >
            {marketChipLabel(m, homeTeam, awayTeam)}
          </button>
        );
      })}
    </div>
  );
}

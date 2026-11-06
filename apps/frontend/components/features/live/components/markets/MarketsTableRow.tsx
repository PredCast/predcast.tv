import { leadingOutcome, outcomeSharesBps } from "@chiliztv/domain/markets/poolShares";

import { HalftimeDelayBadge } from "@/components/shared/HalftimeDelayBadge";
import { BET_TOKEN_SYMBOL, formatBetAmount } from "@/components/live/utils/betToken";
import type { MarketPoolSnapshot } from "@/lib/contracts/markets";

import type { MarketRowView } from "../../domain/marketView";

interface MarketsTableRowProps {
  readonly snapshot: MarketPoolSnapshot;
  readonly view: MarketRowView;
  readonly chipLabel: string;
  readonly selected: boolean;
  readonly assetDecimals: number;
  readonly onSelect: (outcome?: number) => void;
}

export function MarketsTableRow({ snapshot, view, chipLabel, selected, assetDecimals, onSelect }: MarketsTableRowProps) {
  const pools = snapshot.outcomePools.map((p) => BigInt(p));
  const lead = leadingOutcome(pools);
  const leadOutcome = view.outcomes.find((o) => o.selection === lead);
  const leadShare = lead >= 0 ? Math.round((outcomeSharesBps(pools)[lead] ?? 0) / 100) : 0;

  return (
    <li
      className={`grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 border-t border-[#1E1E1E] px-1 py-2 first:border-t-0 ${
        selected ? "bg-[rgba(232,0,29,0.06)]" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect()}
        aria-pressed={selected}
        className="flex min-w-0 items-center gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
      >
        <span className="font-display truncate text-[13px] font-extrabold uppercase text-white">{chipLabel}</span>
        <span
          className="font-mono-ctv shrink-0 rounded-sm px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.12em]"
          style={{ color: view.pillColor, background: `${view.pillColor}1a`, border: `1px solid ${view.pillColor}33` }}
        >
          {view.pillLabel}
        </span>
        <HalftimeDelayBadge delayed={view.halftimeDelayed} />
      </button>
      <span className="font-mono-ctv text-right text-[11px] tabular-nums text-white/65">
        {formatBetAmount(view.totalPool, assetDecimals)} {BET_TOKEN_SYMBOL}
      </span>
      {leadOutcome ? (
        <button
          type="button"
          onClick={() => onSelect(lead)}
          disabled={!view.canBet}
          aria-label={`Predict ${leadOutcome.label}`}
          className="col-span-2 flex items-center gap-2 text-left text-[11px] text-white/55 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:hover:text-white/55"
        >
          <span className="font-mono-ctv rounded bg-[#E8001D] px-1 text-[8px] font-bold uppercase text-white">Top</span>
          <span className="truncate">{leadOutcome.label}</span>
          <span className="font-mono-ctv ml-auto tabular-nums text-[#E8001D]">{leadShare}%</span>
        </button>
      ) : (
        <span className="font-mono-ctv col-span-2 text-[10px] uppercase tracking-[0.14em] text-white/35">No stake yet</span>
      )}
    </li>
  );
}

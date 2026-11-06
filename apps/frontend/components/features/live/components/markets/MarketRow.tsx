import { usePoolDecimals } from "@/hooks/usePoolDecimals";
import type { MarketPoolSnapshot } from "@/lib/contracts/markets";

import { buildMarketRowView, toMarketSelection } from "../../domain/marketView";
import type { MarketSelection, MatchBettableContext } from "../../domain/types";
import { MarketOutcomeCell } from "./MarketOutcomeCell";
import { MarketPolicyNotice } from "./MarketPolicyNotice";
import { MarketPoolBar } from "./MarketPoolBar";
import { MarketRowHeader } from "./MarketRowHeader";

interface MarketRowProps {
  readonly snapshot: MarketPoolSnapshot;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match?: MatchBettableContext;
  readonly now: Date | null;
  readonly onBet: (selection: MarketSelection) => void;
}

export function MarketRow({ snapshot, homeTeam, awayTeam, match, now, onBet }: MarketRowProps) {
  const { assetDecimals } = usePoolDecimals();
  const view = buildMarketRowView({ snapshot, homeTeam, awayTeam, match, now });
  if (!view) return null;

  return (
    <div className="px-4 py-4" style={{ borderTop: view.marketId > 0 ? "1px solid #1E1E1E" : "none" }}>
      <MarketRowHeader view={view} assetDecimals={assetDecimals} />

      {view.hasLiquidity && view.outcomes.length > 0 && (
        <MarketPoolBar outcomePools={snapshot.outcomePools} totalPool={view.totalPool} />
      )}

      {view.policyMessage && <MarketPolicyNotice message={view.policyMessage} />}

      {view.outcomes.length > 0 && (
        <div
          className="mt-3 grid gap-2"
          style={{ gridTemplateColumns: `repeat(${view.outcomes.length}, minmax(0, 1fr))` }}
        >
          {view.outcomes.map((o) => {
            const raw = snapshot.outcomePools[o.selection];
            return (
              <MarketOutcomeCell
                key={o.selection}
                label={o.label}
                probBps={snapshot.impliedProbBps[o.selection] ?? 0}
                outcomePool={raw ? BigInt(raw) : BigInt(0)}
                assetDecimals={assetDecimals}
                hasLiquidity={view.hasLiquidity}
                isLead={view.hasLiquidity && o.selection === view.leadIdx}
                canBet={view.canBet}
                onClick={() => view.canBet && onBet(toMarketSelection(view, snapshot, o.selection))}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

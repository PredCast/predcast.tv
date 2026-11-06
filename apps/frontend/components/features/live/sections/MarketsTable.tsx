"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { FreshPoolHero } from "@/components/live/FreshPoolHero";
import { UnsupportedSportPanel } from "@/components/live/UnsupportedSportPanel";
import { usePoolDecimals } from "@/hooks/usePoolDecimals";

import { MarketsEmptyState } from "../components/markets/MarketsEmptyState";
import { MarketsSkeletonRow } from "../components/markets/MarketsSkeletonRow";
import { MarketsTableRow } from "../components/markets/MarketsTableRow";
import { freshPoolStatus } from "../domain/freshPool";
import { buildMarketRowView } from "../domain/marketView";
import { marketChipLabel, resolveSelectedMarket, ticketMarkets } from "../domain/selectedMarket";
import type { MatchBettableContext } from "../domain/types";
import { useBetSelection } from "../hooks/useBetSelection";
import { useClientNow } from "../hooks/useClientNow";
import { useMatchMarkets } from "../hooks/useMatchMarkets";

interface MarketsTableProps {
  readonly contractAddress?: Address;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match?: MatchBettableContext;
  readonly onPicked?: () => void;
}

/** One compact line per market; a click loads it (and optionally its leading outcome) in the ticket. */
export function MarketsTable({ contractAddress, homeTeam, awayTeam, match, onPicked }: MarketsTableProps) {
  const now = useClientNow();
  const { assetDecimals } = usePoolDecimals();
  const { markets, isLoading, hasSnapshot, isFootball } = useMatchMarkets(contractAddress);
  const { marketId, selectMarket } = useBetSelection();
  const rows = useMemo(() => ticketMarkets(markets), [markets]);
  const selectedId = resolveSelectedMarket(rows, marketId)?.marketId;

  if (!contractAddress) return <MarketsEmptyState message="No prediction contract attached to this match." />;
  if (!isFootball) return <UnsupportedSportPanel />;
  if (isLoading && !hasSnapshot) return <MarketsSkeletonRow first />;
  if (rows.length === 0) return <MarketsEmptyState message="No markets opened yet on this match." />;

  const { allFresh, openCount } = freshPoolStatus(markets);
  return (
    <>
    {allFresh && <FreshPoolHero marketsOpen={openCount} stacked />}
    <ul aria-label="Markets">
      {rows.map((snapshot) => {
        const view = buildMarketRowView({ snapshot, homeTeam, awayTeam, match, now });
        if (!view) return null;
        return (
          <MarketsTableRow
            key={snapshot.marketId}
            snapshot={snapshot}
            view={view}
            chipLabel={marketChipLabel(snapshot, homeTeam, awayTeam)}
            selected={snapshot.marketId === selectedId}
            assetDecimals={assetDecimals}
            onSelect={(outcome) => {
              selectMarket(view.marketId, outcome);
              onPicked?.();
            }}
          />
        );
      })}
    </ul>
    </>
  );
}

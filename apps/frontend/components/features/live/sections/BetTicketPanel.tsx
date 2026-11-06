"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { UnsupportedSportPanel } from "@/components/live/UnsupportedSportPanel";

import { BetTicketForm } from "../components/ticket/BetTicketForm";
import { MarketSelector } from "../components/ticket/MarketSelector";
import { MarketsEmptyState } from "../components/markets/MarketsEmptyState";
import { MarketsSkeletonRow } from "../components/markets/MarketsSkeletonRow";
import { SidebarCard } from "../components/SidebarCard";
import { buildMarketRowView } from "../domain/marketView";
import { resolveSelectedMarket, ticketMarkets } from "../domain/selectedMarket";
import type { MatchBettableContext } from "../domain/types";
import { useBetSelection } from "../hooks/useBetSelection";
import { useClientNow } from "../hooks/useClientNow";
import { useMatchMarkets } from "../hooks/useMatchMarkets";

interface BetTicketPanelProps {
  readonly contractAddress?: Address;
  readonly walletAddress?: string;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match?: MatchBettableContext;
}

/** Predict card: market selector + inline ticket, without any modal. */
export function BetTicketPanel({ contractAddress, walletAddress, homeTeam, awayTeam, match }: BetTicketPanelProps) {
  const now = useClientNow();
  const { markets, isLoading, hasSnapshot, isFootball } = useMatchMarkets(contractAddress);
  const { marketId, requestedOutcome, selectMarket } = useBetSelection();
  const selectable = useMemo(() => ticketMarkets(markets), [markets]);
  const selected = resolveSelectedMarket(selectable, marketId);
  const view = selected ? buildMarketRowView({ snapshot: selected, homeTeam, awayTeam, match, now }) : null;

  const body = (() => {
    if (!contractAddress) return <MarketsEmptyState message="No prediction contract attached to this match." />;
    if (!isFootball) return <UnsupportedSportPanel />;
    if (isLoading && !hasSnapshot) return <MarketsSkeletonRow first />;
    if (!selected || !view) return <MarketsEmptyState message="No markets opened yet on this match." />;
    return (
      <div className="flex flex-col gap-3">
        <MarketSelector
          markets={selectable}
          selectedId={Number(selected.marketId)}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          onSelect={(id) => selectMarket(id)}
        />
        <BetTicketForm
          key={`${selected.marketId}-${requestedOutcome?.nonce ?? 0}`}
          contractAddress={contractAddress}
          walletAddress={walletAddress}
          snapshot={selected}
          view={view}
          defaultOutcome={requestedOutcome?.outcome}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          match={match}
          now={now}
        />
      </div>
    );
  })();

  return (
    <SidebarCard
      eyebrow="Predict"
      aside={<span className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/35">Pari-mutuel · USDC</span>}
    >
      {body}
    </SidebarCard>
  );
}

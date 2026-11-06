"use client";

import { useState } from "react";
import type { Address } from "viem";

import { MarketBetDialog } from "@/components/live/MarketBetDialog";
import { FreshPoolHero } from "@/components/live/FreshPoolHero";
import { UnsupportedSportPanel } from "@/components/live/UnsupportedSportPanel";

import { DoubleChanceGroupHeading } from "../components/markets/DoubleChanceGroupHeading";
import { MarketRow } from "../components/markets/MarketRow";
import { MarketsEmptyState } from "../components/markets/MarketsEmptyState";
import { MarketsSkeletonRow } from "../components/markets/MarketsSkeletonRow";
import { groupMarkets } from "../domain/marketGroups";
import type { MarketSelection, MatchBettableContext } from "../domain/types";
import { useClientNow } from "../hooks/useClientNow";
import { useMatchMarkets } from "../hooks/useMatchMarkets";

interface MatchMarketsListProps {
  readonly contractAddress?: Address;
  readonly walletAddress?: string;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly homeLogo?: string | null;
  readonly awayLogo?: string | null;
  readonly match?: MatchBettableContext;
}

export function MatchMarketsList({
  contractAddress,
  walletAddress,
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
  match,
}: MatchMarketsListProps) {
  const [activeMarket, setActiveMarket] = useState<MarketSelection | null>(null);
  const now = useClientNow();
  const { markets, isLoading, hasSnapshot, isFootball } = useMatchMarkets(contractAddress);

  if (!contractAddress) return <MarketsEmptyState message="No prediction contract attached to this match." />;
  if (!isFootball) return <UnsupportedSportPanel />;
  if (isLoading && !hasSnapshot) {
    return (
      <div>
        <MarketsSkeletonRow first />
        <MarketsSkeletonRow />
      </div>
    );
  }
  if (markets.length === 0) return <MarketsEmptyState message="No markets opened yet on this match." />;

  const groups = groupMarkets(markets);
  const rowProps = { homeTeam, awayTeam, match, now, onBet: setActiveMarket };

  return (
    <>
      <div>
        {groups.allFresh && <FreshPoolHero marketsOpen={groups.openCount} />}
        {groups.main.map((snapshot) => (
          <MarketRow key={snapshot.marketId} snapshot={snapshot} {...rowProps} />
        ))}
        {groups.doubleChance.length > 0 && (
          <div className="mt-3 border-t border-[#1E1E1E] pt-3">
            <DoubleChanceGroupHeading />
            {groups.doubleChance.map((snapshot) => (
              <MarketRow key={snapshot.marketId} snapshot={snapshot} {...rowProps} />
            ))}
          </div>
        )}
      </div>

      <MarketBetDialog
        open={!!activeMarket}
        onClose={() => setActiveMarket(null)}
        contractAddress={contractAddress}
        walletAddress={walletAddress}
        selection={activeMarket}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        homeLogo={homeLogo}
        awayLogo={awayLogo}
        match={match}
        now={now}
      />
    </>
  );
}

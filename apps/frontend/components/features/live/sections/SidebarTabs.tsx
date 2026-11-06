"use client";

import { useState } from "react";
import type { Address } from "viem";

import { useMyBetsOnMatch } from "@/components/features/dashboard/hooks/useMyBetsOnMatch";

import { TabButton } from "../components/TabButton";
import type { MatchBettableContext } from "../domain/types";
import { MarketsTable } from "./MarketsTable";
import { MyPredictionsPanel } from "./MyPredictionsPanel";

type Tab = "markets" | "mybets";

interface SidebarTabsProps {
  readonly contractAddress?: Address;
  readonly walletAddress?: string;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match?: MatchBettableContext;
  /** Called after a market row is picked (mobile opens the bet sheet). */
  readonly onMarketPicked?: () => void;
}

export function SidebarTabs({ contractAddress, walletAddress, homeTeam, awayTeam, match, onMarketPicked }: SidebarTabsProps) {
  const [tab, setTab] = useState<Tab>("markets");
  const { bets } = useMyBetsOnMatch({ user: walletAddress, contractAddress });

  return (
    <section className="rounded-xl border border-[#1E1E1E] bg-[#111]">
      <div className="flex items-center gap-2 border-b border-[#1E1E1E] p-3">
        <TabButton active={tab === "markets"} onClick={() => setTab("markets")}>
          Markets
        </TabButton>
        <TabButton active={tab === "mybets"} onClick={() => setTab("mybets")} badge={bets.length}>
          My predictions
        </TabButton>
      </div>
      <div className="p-3">
        {tab === "markets" ? (
          <MarketsTable
            contractAddress={contractAddress}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            match={match}
            onPicked={onMarketPicked}
          />
        ) : (
          <MyPredictionsPanel
            contractAddress={contractAddress}
            walletAddress={walletAddress}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            onPickMarket={() => setTab("markets")}
          />
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import type { Address } from "viem";

import { useMyBetsOnMatch } from "@/components/features/dashboard/hooks/useMyBetsOnMatch";
import { MyBetsOnMatch } from "@/components/live/MyBetsOnMatch";

import { TabButton } from "../components/TabButton";
import type { MatchBettableContext } from "../domain/types";
import { MatchMarketsList } from "./MatchMarketsList";

type Tab = "markets" | "mybets";

interface AboutLiveTabsProps {
  readonly bettingContractAddress?: Address;
  readonly walletAddress?: string;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly homeLogo?: string | null;
  readonly awayLogo?: string | null;
  readonly match?: MatchBettableContext;
}

export function AboutLiveTabs({
  bettingContractAddress,
  walletAddress,
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
  match,
}: AboutLiveTabsProps) {
  const [tab, setTab] = useState<Tab>("markets");
  const { bets } = useMyBetsOnMatch({ user: walletAddress, contractAddress: bettingContractAddress });
  const myBetsCount = bets.length;

  return (
    <div className="rounded-xl border border-[#1E1E1E] bg-[#111]">
      <div className="flex items-center gap-2 border-b border-[#1E1E1E] p-3">
        <TabButton active={tab === "markets"} onClick={() => setTab("markets")}>
          Markets
        </TabButton>
        <TabButton active={tab === "mybets"} onClick={() => setTab("mybets")} badge={myBetsCount}>
          My predictions
        </TabButton>
        <span className="font-mono-ctv ml-auto text-[10px] uppercase tracking-[0.16em] text-white/35">
          {tab === "markets" ? "Settled on Chiliz" : `${myBetsCount} positions`}
        </span>
      </div>

      {tab === "markets" ? (
        <MatchMarketsList
          contractAddress={bettingContractAddress}
          walletAddress={walletAddress}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          homeLogo={homeLogo}
          awayLogo={awayLogo}
          match={match}
        />
      ) : (
        <MyBetsOnMatch
          contractAddress={bettingContractAddress}
          walletAddress={walletAddress}
          onPickMarket={() => setTab("markets")}
        />
      )}
    </div>
  );
}

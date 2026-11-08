"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { totalStaked } from "@chiliztv/domain/markets/poolShares";

import { BET_TOKEN_SYMBOL, formatBetAmount } from "@/components/live/utils/betToken";
import { usePoolDecimals } from "@/hooks/usePoolDecimals";
import { getMarketSpec, MarketState } from "@/lib/contracts/markets";

import { OutcomeDistribution } from "../components/pool/OutcomeDistribution";
import { SidebarCard } from "../components/SidebarCard";
import { marketChipLabel, resolveSelectedMarket, ticketMarkets } from "../domain/selectedMarket";
import { useBetSelection } from "../hooks/useBetSelection";
import { useMatchMarkets } from "../hooks/useMatchMarkets";

interface PoolStatsProps {
  readonly contractAddress?: Address;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
}

export function PoolStats({ contractAddress, homeTeam, awayTeam }: PoolStatsProps) {
  const { assetDecimals } = usePoolDecimals();
  const { markets } = useMatchMarkets(contractAddress);
  const { marketId } = useBetSelection();
  const selectable = useMemo(() => ticketMarkets(markets), [markets]);
  const selected = resolveSelectedMarket(selectable, marketId);
  if (!contractAddress || markets.length === 0) return null;

  const matchPool = totalStaked(markets.map((m) => BigInt(m.totalPool)));
  const openCount = markets.filter((m) => m.state === MarketState.Open).length;
  const spec = selected ? getMarketSpec(selected.marketType) : null;

  return (
    <SidebarCard eyebrow="Pool stats">
      <dl className="grid grid-cols-2 gap-3">
        <div>
          <dt className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/45">Match pool</dt>
          <dd className="font-display text-[22px] font-extrabold text-white">
            {formatBetAmount(matchPool, assetDecimals)} <span className="text-[12px] text-white/45">{BET_TOKEN_SYMBOL}</span>
          </dd>
        </div>
        <div>
          <dt className="font-mono-ctv text-[9px] uppercase tracking-[0.16em] text-white/45">Open markets</dt>
          <dd className="font-display text-[22px] font-extrabold text-white">
            {openCount}
            <span className="text-[12px] text-white/45"> / {markets.length}</span>
          </dd>
        </div>
      </dl>
      {selected && spec && (
        <div className="mt-3 border-t border-[#1E1E1E] pt-3">
          <div className="font-mono-ctv mb-2 text-[9px] uppercase tracking-[0.16em] text-white/45">
            {marketChipLabel(selected, homeTeam, awayTeam)} · pool split
          </div>
          <OutcomeDistribution
            outcomes={spec.getOutcomes(selected.line, homeTeam, awayTeam)}
            outcomePools={selected.outcomePools}
          />
        </div>
      )}
    </SidebarCard>
  );
}

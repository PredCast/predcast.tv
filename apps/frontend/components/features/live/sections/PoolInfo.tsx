"use client";

import { useMemo } from "react";
import type { Address } from "viem";

import { MarketState, stateAccent, stateLabel } from "@/lib/contracts/markets";

import { BettingWindowProgress } from "../components/pool/BettingWindowProgress";
import { ContractAddressRow } from "../components/pool/ContractAddressRow";
import { InfoLabel } from "../components/pool/InfoLabel";
import { SidebarCard } from "../components/SidebarCard";
import { resolveSelectedMarket, ticketMarkets } from "../domain/selectedMarket";
import { useBetSelection } from "../hooks/useBetSelection";
import { useBettingChain } from "../hooks/useBettingChain";
import { useClientNow } from "../hooks/useClientNow";
import { useMatchMarkets } from "../hooks/useMatchMarkets";

interface PoolInfoProps {
  readonly contractAddress?: Address;
  readonly kickoffAt: string;
  readonly openedAt: string | null;
}

export function PoolInfo({ contractAddress, kickoffAt, openedAt }: PoolInfoProps) {
  const chain = useBettingChain();
  const now = useClientNow(30_000);
  const { markets } = useMatchMarkets(contractAddress);
  const { marketId } = useBetSelection();
  const selected = resolveSelectedMarket(useMemo(() => ticketMarkets(markets), [markets]), marketId);
  if (!contractAddress) return null;

  return (
    <SidebarCard eyebrow="Pool information">
      <dl className="flex flex-col gap-3">
        <div>
          <InfoLabel>Contract</InfoLabel>
          <dd>
            <ContractAddressRow address={contractAddress} explorerUrl={chain.explorerAddressUrl(contractAddress)} />
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <InfoLabel>Settlement</InfoLabel>
            <dd className="text-[12px] text-white">{chain.name}</dd>
          </div>
          {selected && (
            <div>
              <InfoLabel>Market state</InfoLabel>
              <dd className="font-mono-ctv text-[11px] font-bold uppercase" style={{ color: stateAccent(selected.state) }}>
                {stateLabel(selected.state)}
              </dd>
            </div>
          )}
        </div>
      </dl>
      <div className="mt-3">
        <BettingWindowProgress
          kickoffAt={kickoffAt}
          openedAt={openedAt}
          now={now}
          marketClosed={!!selected && selected.state !== MarketState.Open}
        />
      </div>
    </SidebarCard>
  );
}

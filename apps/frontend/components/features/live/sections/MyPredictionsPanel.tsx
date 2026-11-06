"use client";

import { useMemo } from "react";
import { formatUnits, type Address } from "viem";

import { useMyBetsOnMatch } from "@/components/features/dashboard/hooks/useMyBetsOnMatch";
import { useLocallyClaimed } from "@/components/features/dashboard/hooks/useLocallyClaimed";
import { computeBetCounts, isClaimableNow } from "@/components/features/dashboard/domain/bets";
import { useMarketPoolsQuery } from "@/hooks/api";
import { usePoolDecimals } from "@/hooks/usePoolDecimals";
import { chilizConfig } from "@/config/chiliz.config";
import { usePariMatchBaseReadFeeBps } from "@/lib/contracts/generated";

import { MyPredictionCard } from "../components/predictions/MyPredictionCard";
import { PredictionsEmpty } from "../components/predictions/PredictionsEmpty";
import { PredictionsSummary } from "../components/predictions/PredictionsSummary";
import { MarketsEmptyState } from "../components/markets/MarketsEmptyState";
import { MarketsSkeletonRow } from "../components/markets/MarketsSkeletonRow";
import { DEFAULT_FEE_BPS } from "../domain/betTicket";
import { buildPredictionView } from "../domain/predictionView";
import { useMyPredictionWatchers } from "../hooks/useMyPredictionWatchers";

interface MyPredictionsPanelProps {
  readonly contractAddress?: Address;
  readonly walletAddress?: string;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly onPickMarket?: () => void;
}

const usd = (raw: bigint, decimals: number) =>
  `$${Number(formatUnits(raw, decimals)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** The viewer's positions on this match as cards, newest first, with claim / refund inline. */
export function MyPredictionsPanel({ contractAddress, walletAddress, homeTeam, awayTeam, onPickMarket }: MyPredictionsPanelProps) {
  const { assetDecimals } = usePoolDecimals();
  const { bets, isLoading, isError } = useMyBetsOnMatch({ user: walletAddress, contractAddress });
  const { map: claimedOverlay } = useLocallyClaimed();
  const { data: pools } = useMarketPoolsQuery(contractAddress);
  const { data: feeBpsOnchain } = usePariMatchBaseReadFeeBps({
    address: contractAddress,
    chainId: chilizConfig.chainId,
    query: { enabled: !!contractAddress && bets.length > 0 },
  });
  useMyPredictionWatchers(contractAddress, walletAddress);

  const feeBps = typeof feeBpsOnchain === "number" ? feeBpsOnchain : DEFAULT_FEE_BPS;
  const cards = useMemo(
    () =>
      bets.map((bet) => ({
        bet,
        view: buildPredictionView(
          bet,
          pools?.markets.find((m) => m.marketId === bet.marketId),
          feeBps,
          homeTeam,
          awayTeam,
        ),
      })),
    [bets, pools, feeBps, homeTeam, awayTeam],
  );
  const counts = useMemo(() => computeBetCounts(bets, claimedOverlay), [bets, claimedOverlay]);

  if (!walletAddress) return <MarketsEmptyState message="Connect your wallet to see your predictions on this match." />;
  if (isLoading && bets.length === 0) return <MarketsSkeletonRow first />;
  if (bets.length === 0) return <PredictionsEmpty onPickMarket={onPickMarket} />;

  const staked = cards.reduce((sum, c) => sum + c.view.stakeRaw, BigInt(0));
  // Locally-claimed rows stay "claimable" for the indexer until it catches up; they are excluded.
  const toClaim = cards.reduce(
    (sum, c) => (c.view.payout.kind === "claimable" && isClaimableNow(c.bet, claimedOverlay) ? sum + c.view.payout.amountRaw : sum),
    BigInt(0),
  );

  return (
    <div className="flex flex-col gap-3">
      {isError && (
        <p role="status" className="rounded-md border border-[#F5C518]/30 bg-[rgba(245,197,24,0.08)] px-3 py-2 text-[11px] text-[#F5C518]">
          Indexing service unavailable — showing the most recent cached data.
        </p>
      )}
      <PredictionsSummary
        count={bets.length}
        stakedLabel={usd(staked, assetDecimals)}
        claimableCount={counts.claimable}
        claimableLabel={usd(toClaim, assetDecimals)}
      />
      <ul className="flex flex-col gap-2">
        {cards.map(({ bet, view }) => (
          <li key={`${bet.txHash}:${bet.logIndex}`}>
            <MyPredictionCard bet={bet} view={view} usdcDecimals={assetDecimals} />
          </li>
        ))}
      </ul>
    </div>
  );
}

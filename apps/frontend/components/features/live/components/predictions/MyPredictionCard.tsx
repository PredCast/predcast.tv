"use client";

import { formatUnits } from "viem";
import { ExternalLink, Loader2 } from "lucide-react";

import type { MyBet } from "@/components/features/dashboard/domain/bets";
import { timeAgo } from "@/components/features/dashboard/domain/formatters";
import { StatusPill } from "@/components/features/dashboard/components/StatusPill";
import { useBetClaim } from "@/components/features/dashboard/hooks/useBetClaim";
import { WinCardRowButton } from "@/components/features/win-card/components/WinCardRowButton";
import { txExplorerUrl } from "@/lib/explorer";

import type { PredictionView } from "../../domain/predictionView";
import { PredictionStat } from "./PredictionStat";

interface MyPredictionCardProps {
  readonly bet: MyBet;
  readonly view: PredictionView;
  readonly usdcDecimals: number;
}

const usd = (raw: bigint, decimals: number) =>
  `$${Number(formatUnits(raw, decimals)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** One position on the current match: what was picked, at which share, and what it pays. */
export function MyPredictionCard({ bet, view, usdcDecimals }: MyPredictionCardProps) {
  const { claimable, refundable, claim, isTxPending, isResolving, locallyHandled, showClaimedPill, showRefundedPill } =
    useBetClaim(bet);
  const { payout } = view;
  const actionable = claimable || refundable;
  const pill = showClaimedPill || (locallyHandled && bet.status === "WON")
    ? "claimed"
    : showRefundedPill || (locallyHandled && bet.status === "REFUNDED")
      ? "refunded"
      : actionable && claimable
        ? "claimable"
        : isResolving
          ? "resolving"
          : (bet.status.toLowerCase() as "pending" | "won" | "lost" | "refunded");

  const payoutStat =
    payout.kind === "lost"
      ? { label: "Payout", value: "$0.00", tone: "muted" as const }
      : payout.kind === "paid"
        ? { label: "Paid out", value: usd(payout.amountRaw, usdcDecimals), tone: "green" as const }
        : payout.kind === "refund"
          ? { label: "Refund", value: usd(payout.amountRaw, usdcDecimals), tone: "default" as const }
          : payout.kind === "claimable"
            ? { label: "To claim", value: usd(payout.amountRaw, usdcDecimals), tone: "green" as const }
            : { label: "If it wins", value: `≈ ${usd(payout.amountRaw, usdcDecimals)}`, tone: "green" as const, hint: "Moves with the pool" };

  return (
    <article
      className={`rounded-lg border p-3 ${
        actionable ? "border-[#2dd4a4]/40 bg-[rgba(45,212,164,0.05)]" : "border-[#1E1E1E] bg-[#0d0d0d]"
      } ${bet.status === "LOST" ? "opacity-70" : ""}`}
    >
      <header className="flex items-center gap-2">
        <span className="font-mono-ctv rounded border border-[#2A2A2A] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/65">
          {view.marketLabel}
        </span>
        <StatusPill status={pill} />
        <span className="font-mono-ctv ml-auto text-[9px] uppercase tracking-[0.14em] text-white/35">
          {timeAgo(new Date(bet.placedAt).getTime())}
        </span>
      </header>

      <div className="font-display mt-2 truncate text-[20px] font-extrabold uppercase leading-tight text-white" title={view.selectionLabel}>
        {view.selectionLabel}
      </div>

      <dl className="mt-2 grid grid-cols-3 gap-2">
        <PredictionStat label="Stake" value={usd(view.stakeRaw, usdcDecimals)} />
        <PredictionStat
          label="Entry share"
          value={view.entrySharePct === null ? "n/a" : `${view.entrySharePct.toFixed(1)}%`}
          hint="Of the pool after your stake"
        />
        <PredictionStat {...payoutStat} />
      </dl>

      <footer className="mt-3 flex items-center gap-2">
        {actionable && (
          <button
            type="button"
            onClick={claim}
            disabled={isTxPending}
            className="font-mono-ctv inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-[#E8001D] px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-[#FF1737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D] disabled:cursor-not-allowed disabled:bg-[#3A3A3A]"
          >
            {isTxPending && <Loader2 size={12} className="animate-spin motion-reduce:animate-none" aria-hidden />}
            {isTxPending ? "Confirming…" : refundable ? `Refund ${usd(view.stakeRaw, usdcDecimals)}` : `Claim ${payoutStat.value}`}
          </button>
        )}
        {bet.status === "WON" && <WinCardRowButton walletAddress={bet.userAddress} contractAddress={bet.contractAddress} />}
        <a
          href={txExplorerUrl(bet.txHash)}
          target="_blank"
          rel="noreferrer"
          aria-label="View prediction transaction"
          className="font-mono-ctv ml-auto inline-flex items-center gap-1 rounded p-1 text-[9px] uppercase tracking-[0.14em] text-white/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8001D]"
        >
          Tx <ExternalLink size={11} aria-hidden />
        </a>
      </footer>
    </article>
  );
}

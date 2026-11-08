"use client";

import { useState, type ReactNode } from "react";
import type { Address } from "viem";

import { presetAmountRaw, toInputAmount, type StakePresetPct } from "@chiliztv/domain/betting/stakePresets";

import type { MarketPoolSnapshot } from "@/lib/contracts/markets";

import { tokenLabel } from "../../domain/betTicket";
import { toMarketSelection, type MarketRowView } from "../../domain/marketView";
import type { MatchBettableContext } from "../../domain/types";
import { useBetTicket } from "../../hooks/bet-ticket/useBetTicket";
import { useChzGasReserve } from "../../hooks/bet-ticket/useChzGasReserve";
import { tokenFromOption, type TicketTokenOption } from "../../hooks/bet-ticket/useTicketToken";
import { BetSummary } from "./BetSummary";
import { BetTicketCta } from "./BetTicketCta";
import { BetTicketTxStatus } from "./BetTicketTxStatus";
import { OutcomeSegments } from "./OutcomeSegments";
import { StakeInput } from "./StakeInput";
import { StakePresets } from "./StakePresets";
import { TokenSelectModal } from "./TokenSelectModal";

interface BetTicketFormProps {
  readonly contractAddress: Address;
  readonly walletAddress?: string;
  readonly snapshot: MarketPoolSnapshot;
  readonly view: MarketRowView;
  readonly defaultOutcome?: number;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match?: MatchBettableContext;
  readonly now: Date | null;
  /** Reserved for the settlement-network picker (multichain); nothing renders today. */
  readonly networkSlot?: ReactNode;
}

/** Inline ticket for one market; remounted (`key`) on market change so state starts clean. */
export function BetTicketForm(props: BetTicketFormProps) {
  const { contractAddress, walletAddress, snapshot, view, defaultOutcome, homeTeam, awayTeam, match, now, networkSlot } = props;
  const selection = toMarketSelection(view, snapshot, defaultOutcome);
  const ticket = useBetTicket({ contractAddress, walletAddress, selection, homeTeam, awayTeam, match, now });
  const { state, dispatch, token, quote, preview, tx } = ticket;
  const [pickerOpen, setPickerOpen] = useState(false);

  const gasReserve = useChzGasReserve({
    enabled: state.token.kind === "CHZ",
    wallet: walletAddress as Address | undefined,
    contractAddress,
    marketId: selection.marketId,
    outcome: state.outcome,
    probeValue: (token.balanceRaw ?? BigInt(0)) / BigInt(2),
  });

  const locked = !ticket.verdict.ok || !ticket.marketOpen || tx.outcome.kind !== "idle";
  const setAmount = (amount: string) => dispatch({ type: "setAmount", amount });
  const onPreset = (pct: StakePresetPct) => {
    if (token.balanceRaw === undefined || token.decimals === undefined) return;
    const reserve = state.token.kind === "CHZ" ? gasReserve : BigInt(0);
    setAmount(toInputAmount(presetAmountRaw(token.balanceRaw, pct, reserve), token.decimals));
  };

  return (
    <div className="relative flex flex-col gap-3">
      <OutcomeSegments
        outcomes={view.outcomes}
        snapshot={snapshot}
        selected={state.outcome}
        usdcDecimals={token.usdcDecimals}
        disabled={locked}
        onSelect={(outcome) => dispatch({ type: "selectOutcome", outcome })}
      />
      {networkSlot}
      <StakeInput
        amount={state.amount}
        token={token.current}
        disabled={locked}
        onAmountChange={setAmount}
        onOpenTokenPicker={() => setPickerOpen(true)}
      />
      <div className="flex items-center justify-between">
        <span className="font-mono-ctv text-[10px] uppercase tracking-[0.14em] text-white/45">
          Bal · {token.balance.toLocaleString("en-US", { maximumFractionDigits: 4 })} {tokenLabel(state.token)}
        </span>
      </div>
      <StakePresets
        disabled={locked || !walletAddress}
        showQuickAmounts={state.token.kind === "USDC"}
        onPreset={onPreset}
        onQuickAmount={(n) => setAmount(String(n))}
      />
      <BetSummary
        stakeUsdcRaw={quote.expectedStakeUsdc}
        payoutUsdcRaw={preview.payoutRaw}
        usdcDecimals={token.usdcDecimals}
        feeBps={preview.feeBps}
        leaderboardFeeBps={preview.leaderboardFeeBps}
        priceImpactPct={quote.priceImpactPct}
        isSwap={state.token.kind !== "USDC"}
      />
      {ticket.banner && ticket.cta.kind !== "connect" && (
        <p role="alert" className="text-[11px] leading-snug text-[#F5C518]">
          {ticket.banner}
        </p>
      )}
      <BetTicketTxStatus outcome={tx.outcome} txHash={tx.txHash} onNewPrediction={ticket.restart} onRetry={ticket.retry} />
      {tx.outcome.kind === "idle" && (
        <BetTicketCta cta={ticket.cta} tokenSymbol={tokenLabel(state.token)} policyMessage={ticket.policyMessage} onSubmit={ticket.submit} />
      )}
      <TokenSelectModal
        open={pickerOpen}
        tokens={token.options}
        onClose={() => setPickerOpen(false)}
        onPick={(option) => {
          const next = tokenFromOption(option as TicketTokenOption);
          if (!next) return;
          dispatch({ type: "setToken", token: next });
          setPickerOpen(false);
        }}
      />
    </div>
  );
}

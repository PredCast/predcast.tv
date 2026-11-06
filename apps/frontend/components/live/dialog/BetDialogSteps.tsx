import { formatUnits } from "viem";

import type { BetTicket } from "@/components/features/live/hooks/bet-ticket/useBetTicket";
import { tokenFromOption, type TicketTokenOption } from "@/components/features/live/hooks/bet-ticket/useTicketToken";
import { formatUsd, stepTitleFor } from "@/components/features/live/domain/betDialogFlow";
import { PRICE_IMPACT_WARN_PCT, SLIPPAGE_PRESETS_BPS, tokenLabel } from "@/components/features/live/domain/betTicket";
import type { MarketSelection } from "@/components/features/live/domain/types";
import type { MarketSpec } from "@/lib/contracts/markets";

import { BetFailureStep } from "./BetFailureStep";
import { BetReviewStep } from "./BetReviewStep";
import { BetSelectionStep } from "./BetSelectionStep";
import { BetStakeStep } from "./BetStakeStep";
import { BetSuccessStep } from "./BetSuccessStep";

interface BetDialogStepsProps {
  readonly ticket: BetTicket;
  readonly spec: MarketSpec;
  readonly selection: MarketSelection;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly homeLogo?: string | null;
  readonly awayLogo?: string | null;
  readonly networkLabel: string;
  readonly onClose: () => void;
}

export function BetDialogSteps({
  ticket,
  spec,
  selection,
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
  networkLabel,
  onClose,
}: BetDialogStepsProps) {
  const { state, dispatch, step, token, quote, preview } = ticket;
  const snapshot = preview.snapshot;
  const hasPool = !!snapshot && BigInt(snapshot.totalPool) > BigInt(0);
  const probBySelection = new Map<number, number>(hasPool ? snapshot.impliedProbBps.map((bps, i) => [i, bps]) : []);
  const poolBySelection = new Map<number, bigint>(snapshot ? snapshot.outcomePools.map((raw, i) => [i, BigInt(raw)]) : []);
  const payoutUsdc = preview.payoutRaw > BigInt(0) ? Number(formatUnits(preview.payoutRaw, token.usdcDecimals)) : null;
  const quotedUsdc = quote.quotedUsdcOut !== undefined ? Number(formatUnits(quote.quotedUsdcOut, token.usdcDecimals)) : null;
  const stakeLabel = `${state.amount || "0"} ${tokenLabel(state.token)}`;

  if (step === "pick") {
    return (
      <BetSelectionStep
        marketKey={spec.key}
        marketLabel={spec.label}
        stepTitle={stepTitleFor(spec.key)}
        helper={spec.hint}
        outcomes={spec.getOutcomes(selection.line, homeTeam, awayTeam)}
        selectedSelection={state.outcome}
        onSelect={(outcome) => dispatch({ type: "selectOutcome", outcome })}
        state={selection.state}
        line={selection.line}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        impliedProbBpsBySelection={probBySelection}
        outcomePoolsBySelection={poolBySelection}
        usdcDecimals={token.usdcDecimals}
      />
    );
  }
  if (step === "stake") {
    return (
      <BetStakeStep
        token={token.current}
        tokens={token.options}
        amount={state.amount}
        onAmountChange={(amount) => dispatch({ type: "setAmount", amount })}
        onTokenChange={(option) => {
          const next = tokenFromOption(option as TicketTokenOption);
          if (next) dispatch({ type: "setToken", token: next });
        }}
        slippageBps={state.slippageBps}
        onSlippageChange={(bps) => dispatch({ type: "setSlippage", bps })}
        slippagePresetsBps={SLIPPAGE_PRESETS_BPS}
        selectionLabel={ticket.selectionLabel}
        insufficient={token.insufficientBalance}
        quotedUsdcAmount={quotedUsdc}
        priceImpactPct={quote.priceImpactPct !== null && quote.priceImpactPct >= PRICE_IMPACT_WARN_PCT ? quote.priceImpactPct : null}
      />
    );
  }
  if (step === "review") {
    return (
      <BetReviewStep
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        homeLogo={homeLogo}
        awayLogo={awayLogo}
        leagueLabel={networkLabel}
        marketBadge={spec.key.toUpperCase()}
        marketLabel={spec.label}
        selectionLabel={ticket.selectionLabel}
        stakeLabel={stakeLabel}
        stakeUsdcEquiv={ticket.stakeUsdcEquiv !== null ? `${formatUsd(ticket.stakeUsdcEquiv)} USDC` : null}
        slippageBps={state.token.kind !== "USDC" ? state.slippageBps : null}
        netPayoutUsdc={payoutUsdc}
        feeBps={preview.feeBps}
      />
    );
  }
  if (step === "success") {
    return (
      <BetSuccessStep
        txHash={ticket.tx.txHash}
        selectionLabel={ticket.selectionLabel}
        stakeLabel={stakeLabel}
        oddsDecimal={null}
        netPayoutLabel={payoutUsdc !== null ? formatUsd(payoutUsdc) : null}
        onAnother={ticket.restart}
        onClose={onClose}
      />
    );
  }
  const failure = ticket.tx.outcome.kind === "failure" ? ticket.tx.outcome : null;
  return (
    <BetFailureStep
      kind={failure?.failure ?? "unknown"}
      txHash={ticket.tx.txHash}
      reason={failure?.reason ?? null}
      onRetry={ticket.retry}
      onClose={onClose}
    />
  );
}

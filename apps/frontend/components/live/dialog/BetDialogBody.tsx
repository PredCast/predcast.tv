"use client";

import type { Address } from "viem";

import { useBetTicket } from "@/components/features/live/hooks/bet-ticket/useBetTicket";
import { previousStep, stepIndexOf } from "@/components/features/live/domain/betDialogFlow";
import { tokenLabel } from "@/components/features/live/domain/betTicket";
import { isActionableCta } from "@/components/features/live/domain/ticketCta";
import type { MarketSelection, MatchBettableContext } from "@/components/features/live/domain/types";
import { NetworkGuard } from "@/components/web3/NetworkGuard";
import type { MarketSpec } from "@/lib/contracts/markets";

import { BetDialogHeader } from "./BetDialogHeader";
import { BetDialogSteps } from "./BetDialogSteps";
import { BetPolicyClosedPanel } from "./BetPolicyClosedPanel";
import { DialogFooter } from "./DialogFooter";
import { ErrorBanner } from "./ErrorBanner";
import { BET_DIALOG_STEPS, StepIndicator } from "./StepIndicator";

interface BetDialogBodyProps {
  readonly contractAddress: Address;
  readonly walletAddress?: string;
  readonly selection: MarketSelection;
  readonly spec: MarketSpec;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly homeLogo?: string | null;
  readonly awayLogo?: string | null;
  readonly match?: MatchBettableContext;
  readonly now: Date | null;
  readonly networkLabel: string;
  readonly onClose: () => void;
}

const NEXT_LABELS = { pick: "Continue →", stake: "Review →" } as const;

/** Wizard view over `useBetTicket`; mounted with `key={marketId}` so each market starts fresh. */
export function BetDialogBody(props: BetDialogBodyProps) {
  const { selection, spec, homeTeam, awayTeam, onClose } = props;
  const ticket = useBetTicket(props);
  const { state, step, token, quote, approval, tx, dispatch } = ticket;
  const editing = step === "pick" || step === "stake" || step === "review";
  const policyBlocked = !ticket.verdict.ok;

  const stakeReady =
    token.isValidAmount &&
    !token.insufficientBalance &&
    !token.usdcZeroBalance &&
    quote.status !== "loading" &&
    quote.status !== "unavailable" &&
    !ticket.belowMinimum;
  const nextDisabled =
    policyBlocked ||
    (step === "pick" && (state.outcome === null || !ticket.marketOpen)) ||
    (step === "stake" && !stakeReady) ||
    (step === "review" && !isActionableCta(ticket.cta));
  const submitting = approval.isApproving || tx.isPending || tx.isConfirming;

  const onNext = () => {
    if (policyBlocked) return onClose();
    if (step === "pick") dispatch({ type: "goto", step: "stake" });
    else if (step === "stake") dispatch({ type: "goto", step: "review" });
    else if (step === "review") ticket.submit();
  };
  const back = editing ? previousStep(step) : null;
  const reviewLabel = approval.needsApproval ? `Approve ${tokenLabel(state.token)}` : "Place prediction";

  return (
    <>
      <div className="sticky top-0 z-[2] border-b border-[#1E1E1E] bg-[#0A0A0A]/95 backdrop-blur">
        <BetDialogHeader
          marketLabel={selection.marketLabel}
          specLabel={spec.label}
          marketId={selection.marketId}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          onClose={onClose}
        />
        <StepIndicator steps={BET_DIALOG_STEPS} activeIdx={stepIndexOf(step)} />
        <ErrorBanner msg={ticket.banner} onDismiss={() => ticket.banner && dispatch({ type: "dismissBanner", text: ticket.banner })} />
      </div>

      <div className="flex-1 overflow-y-auto px-7 py-6">
        <NetworkGuard />
        {editing && policyBlocked ? (
          <BetPolicyClosedPanel message={ticket.policyMessage} />
        ) : (
          <BetDialogSteps ticket={ticket} {...props} />
        )}
      </div>

      {editing && (
        <div className="sticky bottom-0 z-[2] border-t border-[#1E1E1E] bg-[#0A0A0A]/95 px-7 py-5 backdrop-blur">
          <DialogFooter
            onBack={back ? () => dispatch({ type: "goto", step: back }) : undefined}
            onNext={onNext}
            nextLabel={step === "review" ? reviewLabel : NEXT_LABELS[step]}
            nextDisabled={nextDisabled}
            submitting={step === "review" && submitting}
          />
          {step === "review" && submitting && (
            <div className="font-mono-ctv mt-3 text-center text-[10px] uppercase tracking-[0.16em] text-white/40">
              {approval.isApproving
                ? `Approving ${tokenLabel(state.token)}…`
                : tx.isPending
                  ? "Confirm in wallet…"
                  : "Placing prediction…"}
            </div>
          )}
        </div>
      )}
    </>
  );
}

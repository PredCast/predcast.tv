"use client";

import { formatUnits } from "viem";

import type { BettableResult } from "@chiliztv/domain/matches/policies/BettablePolicy";

import { chilizConfig } from "@/config/chiliz.config";
import { useRequireChain } from "@/hooks/useRequireChain";

import { MIN_STAKE_USDC_RAW, tokenLabel, type TicketState } from "../../domain/betTicket";
import { contractErrorMessage } from "../../domain/contractErrorMessage";
import { ticketBanner } from "../../domain/ticketBanner";
import { resolveTicketCta } from "../../domain/ticketCta";
import type { TicketQuote } from "./useTicketQuote";
import type { TicketToken } from "./useTicketToken";

interface GuardsArgs {
  readonly state: TicketState;
  readonly walletConnected: boolean;
  readonly verdict: BettableResult;
  readonly marketOpen: boolean;
  readonly settlement: "resolved" | "cancelled" | null;
  readonly token: TicketToken;
  readonly quote: TicketQuote;
  readonly approval: { readonly needsApproval: boolean; readonly isApproving: boolean; readonly approveError: Error | null };
  readonly simulationError: Error | null;
  readonly txInFlight: boolean;
}

/** Everything that can block a prediction, as a CTA code plus the banner hint. */
export function useTicketGuards(a: GuardsArgs) {
  const { isWrongChain } = useRequireChain();
  const belowMinimum = a.quote.expectedStakeUsdc > BigInt(0) && a.quote.expectedStakeUsdc < MIN_STAKE_USDC_RAW;

  const cta = resolveTicketCta({
    walletConnected: a.walletConnected,
    wrongNetwork: isWrongChain,
    policyBlock: a.verdict.ok ? null : a.verdict.reason,
    marketOpen: a.marketOpen,
    settlement: a.settlement,
    outcomeSelected: a.state.outcome !== null,
    amountValid: a.token.isValidAmount,
    insufficientBalance: a.token.insufficientBalance || a.token.usdcZeroBalance,
    quoteStatus: a.quote.status,
    belowMinimum,
    simulationFailed: !!a.simulationError,
    approving: a.approval.isApproving,
    txInFlight: a.txInFlight,
    needsApproval: a.approval.needsApproval,
  });

  const banner = ticketBanner({
    submitError: a.state.submitError,
    approveError: a.approval.approveError ? contractErrorMessage(a.approval.approveError) : null,
    simulationError: a.simulationError ? contractErrorMessage(a.simulationError) : null,
    tokenSymbol: tokenLabel(a.state.token),
    isUsdc: a.state.token.kind === "USDC",
    amount: a.state.amount,
    belowMinimum,
    expectedUsdcLabel: Number(formatUnits(a.quote.expectedStakeUsdc, a.token.usdcDecimals)).toFixed(2),
    quoteStatus: a.quote.status,
    usdcZeroBalance: a.token.usdcZeroBalance,
    usdcAddressShort: `${chilizConfig.usdc.slice(0, 8)}…${chilizConfig.usdc.slice(-6)}`,
    amountEntered: a.state.amount !== "",
  });

  return {
    cta,
    belowMinimum,
    banner: banner && banner !== a.state.dismissedBanner ? banner : null,
  };
}

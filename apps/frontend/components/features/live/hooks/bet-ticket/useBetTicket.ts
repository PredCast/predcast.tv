"use client";

import { useReducer } from "react";
import { formatUnits, type Address } from "viem";

import { DEFAULT_KICKOFF_BUFFER_SEC, isBettable } from "@chiliztv/domain/matches/policies/BettablePolicy";

import { chilizConfig } from "@/config/chiliz.config";
import { fmtSelectionByMarket, MarketState } from "@/lib/contracts/markets";

import { DEADLINE_MIN, initialTicketState, swapTokenArg, ticketReducer, type TicketStep } from "../../domain/betTicket";
import { contractErrorMessage } from "../../domain/contractErrorMessage";
import { policyMessageFor } from "../../domain/policyMessage";
import { isActionableCta } from "../../domain/ticketCta";
import type { MarketSelection, MatchBettableContext } from "../../domain/types";
import { useTicketApproval } from "./useTicketApproval";
import { useTicketGuards } from "./useTicketGuards";
import { useTicketPreview } from "./useTicketPreview";
import { useTicketQuote } from "./useTicketQuote";
import { useTicketSimulation } from "./useTicketSimulation";
import { useTicketSubmit } from "./useTicketSubmit";
import { useTicketToken } from "./useTicketToken";

export interface BetTicketArgs {
  readonly contractAddress: Address;
  readonly walletAddress?: string;
  readonly selection: MarketSelection;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match?: MatchBettableContext;
  readonly now: Date | null;
}

/**
 * Single implementation of the parimutuel bet flow (pick → stake → review → submit →
 * success / failure), shared by the desktop sidebar ticket, the mobile sheet and the dialog.
 * Consumers remount it (React `key`) when the market changes to start from a clean state.
 */
export function useBetTicket({ contractAddress, walletAddress, selection, homeTeam, awayTeam, match, now }: BetTicketArgs) {
  const [state, dispatch] = useReducer(ticketReducer, selection.defaultSelection, initialTicketState);
  const wallet = walletAddress as Address | undefined;
  const marketOpen = selection.state === MarketState.Open;

  const token = useTicketToken(state.token, state.amount, wallet, true);
  const quote = useTicketQuote(state.token, token.parsedAmount, token.decimals, state.slippageBps);
  const approval = useTicketApproval(token.erc20Address, wallet, chilizConfig.chilizSwapRouter, token.parsedAmount);
  const simulation = useTicketSimulation({
    enabled: !!wallet && marketOpen,
    routerAddress: chilizConfig.chilizSwapRouter,
    contractAddress,
    token: state.token,
    marketId: selection.marketId,
    outcome: state.outcome,
    parsedAmount: token.parsedAmount,
    amountOutMin: quote.amountOutMin,
    needsApproval: approval.needsApproval,
    approvalKey: approval.approvalKey,
  });
  const tx = useTicketSubmit(simulation.error);
  const preview = useTicketPreview({
    contractAddress,
    marketId: selection.marketId,
    outcome: state.outcome,
    walletAddress: wallet,
    expectedStakeUsdc: quote.expectedStakeUsdc,
    enabled: tx.outcome.kind === "idle",
  });

  const verdict = match && now ? isBettable(match, now, { kickoffBufferSec: DEFAULT_KICKOFF_BUFFER_SEC }) : { ok: true as const };
  const guards = useTicketGuards({
    state,
    walletConnected: !!wallet,
    verdict,
    marketOpen,
    token,
    quote,
    approval,
    simulationError: simulation.error,
    txInFlight: tx.isPending || tx.isConfirming,
  });

  const step: TicketStep = tx.outcome.kind === "idle" ? state.step : tx.outcome.kind;
  const selectionLabel = fmtSelectionByMarket(state.outcome ?? -1, selection.marketTypeHash, selection.line, homeTeam, awayTeam);
  const stakeUsdcEquiv =
    state.token.kind === "USDC"
      ? token.isValidAmount ? token.numericAmount : null
      : quote.quotedUsdcOut !== undefined ? Number(formatUnits(quote.quotedUsdcOut, token.usdcDecimals)) : null;

  const submit = () => {
    if (!isActionableCta(guards.cta) || state.outcome === null) return;
    dispatch({ type: "clearSubmitError" });
    try {
      if (approval.needsApproval) return approval.approve();
      tx.submit(
        {
          token: swapTokenArg(state.token),
          matchAddress: contractAddress,
          marketId: BigInt(selection.marketId),
          selection: BigInt(state.outcome),
          amount: token.parsedAmount,
          amountOutMin: quote.amountOutMin,
          deadline: BigInt(Math.floor(Date.now() / 1000) + DEADLINE_MIN * 60),
        },
        { stakeUsdc: stakeUsdcEquiv, label: selectionLabel },
      );
    } catch (err) {
      dispatch({ type: "submitFailed", message: contractErrorMessage(err) });
    }
  };

  return {
    state,
    dispatch,
    step,
    token,
    quote,
    approval,
    preview,
    tx,
    ...guards,
    verdict,
    policyMessage: !verdict.ok && match && now ? policyMessageFor(verdict, match.kickoffAt, now) : "",
    marketOpen,
    selectionLabel,
    stakeUsdcEquiv,
    submit,
    /** Fresh pick after a success. */
    restart: () => {
      tx.reset();
      dispatch({ type: "restart" });
    },
    /** Back to review after a failed tx. */
    retry: () => {
      tx.reset();
      dispatch({ type: "goto", step: "review" });
    },
  };
}

export type BetTicket = ReturnType<typeof useBetTicket>;

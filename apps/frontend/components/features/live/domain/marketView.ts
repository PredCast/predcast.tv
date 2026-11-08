import { isBettable, DEFAULT_KICKOFF_BUFFER_SEC } from "@chiliztv/domain/matches/policies/BettablePolicy";

import {
  getMarketSpec,
  isHiddenMarket,
  MarketState,
  stateAccent,
  stateLabel,
  type MarketOutcome,
  type MarketPoolSnapshot,
  type MarketSpec,
} from "@/lib/contracts/markets";

import { isHalftimeDelayed } from "./halftimeDelay";
import { policyMessageFor } from "./policyMessage";
import type { MarketSelection, MatchBettableContext } from "./types";

const GOLD = "#F5C518";

export interface MarketRowView {
  readonly marketId: number;
  readonly spec: MarketSpec | null;
  readonly label: string;
  readonly hint: string;
  readonly lineLabel: string | null;
  readonly isOpen: boolean;
  readonly canBet: boolean;
  /** Policy copy when the market is Open + bettable type but the match blocks predictions. */
  readonly policyMessage: string;
  readonly pillLabel: string;
  readonly pillColor: string;
  readonly totalPool: bigint;
  readonly hasLiquidity: boolean;
  readonly outcomes: ReadonlyArray<MarketOutcome>;
  /** Selection index of the crowd favourite, -1 when the pool is empty. */
  readonly leadIdx: number;
  readonly halftimeDelayed: boolean;
}

interface BuildArgs {
  readonly snapshot: MarketPoolSnapshot;
  readonly homeTeam?: string;
  readonly awayTeam?: string;
  readonly match?: MatchBettableContext;
  readonly now: Date | null;
}

/** Presentation model of one market row; `null` for legacy markets hidden from the UI. */
export function buildMarketRowView({ snapshot, homeTeam, awayTeam, match, now }: BuildArgs): MarketRowView | null {
  const marketTypeHash = snapshot.marketType as `0x${string}`;
  if (isHiddenMarket(marketTypeHash)) return null;

  const spec = getMarketSpec(marketTypeHash) ?? null;
  const totalPool = BigInt(snapshot.totalPool);
  const isOpen = snapshot.state === MarketState.Open;
  const verdict = match && now ? isBettable(match, now, { kickoffBufferSec: DEFAULT_KICKOFF_BUFFER_SEC }) : { ok: true as const };
  const policyMessage = match && now && isOpen && spec?.supportsBetting ? policyMessageFor(verdict, match.kickoffAt, now) : "";
  const hasLiquidity = totalPool > BigInt(0);
  const outcomes = spec ? spec.getOutcomes(snapshot.line, homeTeam, awayTeam) : [];
  const isFresh = isOpen && !hasLiquidity;

  return {
    marketId: Number(snapshot.marketId),
    spec,
    label: spec?.label ?? "Unknown market",
    hint: spec?.hint ?? "",
    lineLabel: spec?.hasLine && snapshot.line > 0 ? (snapshot.line / 10).toFixed(1) : null,
    isOpen,
    canBet: isOpen && verdict.ok && !!spec?.supportsBetting,
    policyMessage,
    pillLabel: isFresh ? "Fresh" : stateLabel(snapshot.state),
    pillColor: isFresh ? GOLD : stateAccent(snapshot.state),
    totalPool,
    hasLiquidity,
    outcomes,
    leadIdx: hasLiquidity ? leadingSelection(outcomes, snapshot.impliedProbBps) : -1,
    halftimeDelayed: isHalftimeDelayed(spec?.key, isOpen, match),
  };
}

function leadingSelection(outcomes: ReadonlyArray<MarketOutcome>, probBps: ReadonlyArray<number>): number {
  if (outcomes.length === 0) return -1;
  return outcomes.reduce(
    (best, o) => ((probBps[o.selection] ?? 0) > (probBps[best] ?? 0) ? o.selection : best),
    outcomes[0].selection,
  );
}

/** Selection payload sent to the bet flow when a cell is clicked. */
export function toMarketSelection(view: MarketRowView, snapshot: MarketPoolSnapshot, outcome?: number): MarketSelection {
  return {
    marketId: view.marketId,
    marketLabel: view.label,
    marketTypeHash: snapshot.marketType as `0x${string}`,
    line: snapshot.line,
    state: snapshot.state,
    totalPool: view.totalPool,
    maxOutcome: snapshot.maxOutcome,
    defaultSelection: outcome,
  };
}

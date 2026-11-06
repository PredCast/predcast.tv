import type { Address } from "viem";

export type BetToken =
  | { kind: "USDC" }
  | { kind: "CHZ" }
  | { kind: "ERC20"; address: Address; symbol: string; name: string };

/** Wizard steps; `success` / `failure` are derived from the tx state and override the stored step. */
export type TicketStep = "pick" | "stake" | "review" | "success" | "failure";
export type EditableStep = Exclude<TicketStep, "success" | "failure">;
export type FailureKind = "rejected" | "reverted" | "unknown";

/** Swap deadline. Wallets that cannot estimate gas on Spicy make signing slow, hence the wide window. */
export const DEADLINE_MIN = 60;
export const DEFAULT_SLIPPAGE_BPS = 50;
export const SLIPPAGE_PRESETS_BPS = [10, 50, 100] as const;
/** Kayen fan-token pools are thin; above this price impact the ticket warns. */
export const PRICE_IMPACT_WARN_PCT = 3;
/** Read-failure fallback only; the live value is `feeBps()` on the PariMatch proxy (`PariMatchBase.sol:317`). */
export const DEFAULT_FEE_BPS = 200;
/** Fallback for `leaderboardFeeBps()` (carved out of the fee, not added on top). */
export const DEFAULT_LEADERBOARD_FEE_BPS = 100;
/** `PariMatchBase.MIN_STAKE` = 0.01 USDC at 6 dp; pre-checked to avoid a `StakeBelowMinimum` revert. */
export const MIN_STAKE_USDC_RAW = BigInt(10_000);
const NATIVE_DECIMALS = 18;

export interface TicketState {
  readonly step: EditableStep;
  readonly outcome: number | null;
  readonly amount: string;
  readonly token: BetToken;
  readonly slippageBps: number;
  /** Error raised synchronously by `submit()` (wallet / encoding), shown in the banner. */
  readonly submitError: string | null;
  /** Banner text the user dismissed; the banner stays hidden until its text changes. */
  readonly dismissedBanner: string | null;
}

export type TicketAction =
  | { type: "selectOutcome"; outcome: number | null }
  | { type: "setAmount"; amount: string }
  | { type: "setToken"; token: BetToken }
  | { type: "setSlippage"; bps: number }
  | { type: "goto"; step: EditableStep }
  | { type: "submitFailed"; message: string }
  | { type: "clearSubmitError" }
  | { type: "dismissBanner"; text: string }
  | { type: "restart" };

export function initialTicketState(defaultOutcome?: number): TicketState {
  return {
    step: defaultOutcome === undefined ? "pick" : "stake",
    outcome: defaultOutcome ?? null,
    amount: "",
    token: { kind: "USDC" },
    slippageBps: DEFAULT_SLIPPAGE_BPS,
    submitError: null,
    dismissedBanner: null,
  };
}

export function ticketReducer(state: TicketState, action: TicketAction): TicketState {
  switch (action.type) {
    case "selectOutcome":
      return { ...state, outcome: action.outcome };
    case "setAmount":
      return { ...state, amount: action.amount };
    case "setToken":
      return { ...state, token: action.token, amount: "" };
    case "setSlippage":
      return { ...state, slippageBps: action.bps };
    case "goto":
      return { ...state, step: action.step };
    case "submitFailed":
      return { ...state, submitError: action.message };
    case "clearSubmitError":
      return { ...state, submitError: null };
    case "dismissBanner":
      return { ...state, dismissedBanner: action.text, submitError: null };
    case "restart":
      return { ...initialTicketState(), token: state.token, slippageBps: state.slippageBps };
  }
}

export function tokenLabel(token: BetToken): string {
  if (token.kind === "ERC20") return token.symbol;
  return token.kind;
}

/** ERC20 decimals are deliberately absent: they must come from the contract (mainnet fan tokens are 0-dp). */
export function fixedTokenDecimals(token: BetToken, usdcDecimals: number | undefined): number | undefined {
  if (token.kind === "USDC") return usdcDecimals;
  if (token.kind === "CHZ") return NATIVE_DECIMALS;
  return undefined;
}

export function swapTokenArg(token: BetToken): "USDC" | "CHZ" | Address {
  return token.kind === "ERC20" ? token.address : token.kind;
}

/**
 * Domain port over the on-chain betting workflow. The current implementation
 * (`ViemBlockchainService`) wraps PariMatchFactory + FootballPariMatch /
 * BasketballPariMatch and ChilizSwapRouter via viem.
 */

export interface DeployContractResult {
  contractAddress: string;
}

export interface CloseMarketsResult {
  /** Markets closed on this tick (state == Open before). */
  closed: number;
  /** Markets skipped because already non-Open (Closed/Resolved/Cancelled/Suspended). */
  skipped: number;
}

export interface CancelMarketsResult {
  /** Markets transitioned to Cancelled on this tick (unlocks `claimRefund`). */
  cancelled: number;
  /** Markets skipped (already Resolved/Cancelled). */
  skipped: number;
}

export interface FootballScoreInput {
  homeGoals: number;
  awayGoals: number;
  /**
   * Optional. HALFTIME / FIRST_SCORER markets are no longer seeded on new
   * proxies — API-Football basic endpoint doesn't expose HT goals reliably and
   * FIRST_SCORER needs a paid endpoint. Adapters default missing fields to 0;
   * legacy contracts still seeded with those markets rely on PariMatchBase
   * void protection to refund stakers.
   */
  htHomeGoals?: number;
  htAwayGoals?: number;
  firstScorerId?: number;
}

/**
 * Mirrors PariMatchBase MarketState enum (Solidity uint8). Kept here so
 * application code can compare without importing infrastructure ABIs.
 */
export enum MarketState {
  Inactive = 0,
  Open = 1,
  Suspended = 2,
  Closed = 3,
  Resolved = 4,
  Cancelled = 5,
}

export interface IBlockchainService {
  deployBettingContract(matchName: string, ownerAddress: string, oracleAddress?: string): Promise<DeployContractResult>;
  /** Seed and open the canonical 8-market lineup on a freshly-deployed proxy. */
  setupDefaultMarkets(contractAddress: string): Promise<void>;
  /** Resolve every closeable market via `resolveByScore`. Returns count transitioned to Resolved. */
  resolveMarketsByScore(contractAddress: string, score: FootballScoreInput): Promise<number>;
  /**
   * Calls `resolveByScore` WITHOUT pre-closing Open markets. Only markets
   * already in `Closed` state at call time will resolve — the others stay
   * untouched. Critical for the HALFTIME early-resolution path: callers
   * close marketId=1 manually first, then this method resolves only that
   * one without sweeping the other 7 Open markets.
   *
   * Returns count of markets that transitioned to `Resolved` (excludes
   * `Cancelled` via void protection — caller should diff getMarketState
   * to count those).
   */
  resolveAlreadyClosedMarkets(contractAddress: string, score: FootballScoreInput): Promise<number>;
  /** Close every Open market on the contract via `closeMarketsBatch` (1 tx, idempotent). */
  closeOpenMarketsForMatch(contractAddress: string): Promise<CloseMarketsResult>;
  /**
   * Close a caller-specified subset of markets via `closeMarketsBatch`.
   * Used by the HALFTIME early-resolution path which closes ONLY marketId=1
   * so the other 7 markets stay Open. Idempotent.
   */
  closeMarketsByIds(contractAddress: string, marketIds: ReadonlyArray<bigint>): Promise<CloseMarketsResult>;
  /** Cancel every non-terminal market via `cancelMarket(id, reason)` (N tx). Reserved for CANC/ABD statuses. */
  cancelOpenMarketsForMatch(contractAddress: string, reason: string): Promise<CancelMarketsResult>;
  /**
   * Cancel a single market — unlocks `claimRefund` for stakers. Used by the
   * HALFTIME void path when API-Football fails to produce a halftime score
   * 15 min into the 2H. Returns `cancelled: 1` on success, `0` if the market
   * was already in a terminal state.
   */
  cancelMarket(contractAddress: string, marketId: bigint, reason: string): Promise<CancelMarketsResult>;
  /**
   * Read the on-chain state of a single market. Returns null when the
   * marketId is out of range (`getMarketCore` reverts with InvalidMarketId).
   * Cheap (~30ms RPC) — used as a pre-flight guard to avoid wasted txs.
   */
  getMarketState(contractAddress: string, marketId: bigint): Promise<MarketState | null>;
  getAdminAddress(): string;
}

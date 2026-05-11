import { ExtendedOdds } from './IFootballApiService';

export interface DeployContractResult {
  contractAddress: string;
}

export interface CloseMarketsResult {
  /** Markets fermés sur ce tick (state == Open avant). */
  closed: number;
  /** Markets ignorés parce que déjà non-Open (Closed/Resolved/Cancelled/Suspended). */
  skipped: number;
}

export interface CancelMarketsResult {
  /** Markets passés à `Cancelled` sur ce tick (ouvre `claimRefund`). */
  cancelled: number;
  /** Markets ignorés (déjà Resolved/Cancelled). */
  skipped: number;
}

export interface FootballMarketView {
  /** Solidity-side marketType string ('WINNER' | 'GOALS_TOTAL' | ...). */
  marketType: string;
  /** Goals-tenths (25 → 2.5). Always 0 for markets without a numeric line. */
  line: number;
  /** Max valid `selection` value for this market — informational, not enforced here. */
  maxSelections: number;
}

export interface IBlockchainService {
  deployBettingContract(matchName: string, ownerAddress: string, oracleAddress?: string): Promise<DeployContractResult>;
  setupMarkets(contractAddress: string, odds: ExtendedOdds): Promise<void>;
  resolveMarkets(contractAddress: string, homeScore: number, awayScore: number): Promise<number>;
  syncOdds(contractAddress: string, odds: ExtendedOdds): Promise<void>;
  /**
   * Ferme tous les markets `Open` du contrat via `closeMarketsBatch` (1 tx).
   * Idempotent — les markets non-Open sont skip par le contrat.
   */
  closeOpenMarketsForMatch(contractAddress: string): Promise<CloseMarketsResult>;
  /**
   * Annule tous les markets non-terminaux du contrat via `cancelMarket(id, reason)`.
   * Single-id côté contrat → N tx par match. Réservé aux statuts CANC/ABD.
   */
  cancelOpenMarketsForMatch(contractAddress: string, reason: string): Promise<CancelMarketsResult>;
  /**
   * Read-only — returns the on-chain `getFootballMarket(marketId)` view so the
   * indexer can enrich `market_events.payload` with `line` (the `MarketCreated`
   * event itself does not include it).
   */
  readFootballMarket(contractAddress: string, marketId: bigint): Promise<FootballMarketView>;
  getAdminAddress(): string;
}

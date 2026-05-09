/**
 * Persistence port for indexer cursors.
 *
 * Each indexer is identified by a stable `name` (e.g. "BettingMatchEvent",
 * "LiquidityPool") and an optional `contractAddress`. The repo guarantees
 * idempotent reads (returns 0 for an unknown indexer) so a fresh start
 * from genesis is the default behaviour — callers decide how far back to
 * actually scan via `INDEXER_DEFAULT_LOOKBACK` etc.
 */
export interface IIndexerCheckpointRepository {
    getLastBlock(indexerName: string): Promise<bigint>;
    setLastBlock(indexerName: string, lastBlock: bigint, contractAddress?: string): Promise<void>;
}

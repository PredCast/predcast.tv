import { MarketEvent } from '../entities/MarketEvent';

/** Cached market metadata captured at `MarketCreated` indexing time. */
export interface MarketContext {
    marketType: string;
    /** Tenths of goals (25 → 2.5). `null` for rows indexed before the enrichment landed. */
    line: number | null;
}

export interface MissingLineRow {
    contractAddress: string;
    marketId: bigint;
}

export interface IMarketEventRepository {
    insertIfAbsent(event: MarketEvent): Promise<boolean>;
    /** Total rows for one event name — drives public platform counters. */
    countByEventName(eventName: string): Promise<number>;
    /** Resolves the `MarketCreated` payload for a market — used to label bets. */
    findMarketContext(contractAddress: string, marketId: bigint): Promise<MarketContext | null>;
    /** Rows where `payload.line` is missing — fed to the backfill job. */
    findCreatedMissingLine(): Promise<ReadonlyArray<MissingLineRow>>;
    /** Patches `payload.line` and `payload.maxSelections` on every `MarketCreated` row for this `(contract, marketId)`. */
    patchLine(contractAddress: string, marketId: bigint, line: number, maxSelections: number): Promise<void>;
    /** Persists a `MarketCreated` row reconstituted from an on-chain read — used when the original event was missed (indexer checkpoint > deploy block). Idempotent. */
    upsertSyntheticMarketCreated(args: {
        contractAddress: string;
        marketId: bigint;
        marketType: string;
        line: number | null;
        maxSelections: number;
        blockNumber: bigint;
    }): Promise<void>;
}

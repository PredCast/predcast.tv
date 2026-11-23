/** A `bets` row (one `PositionTaken`), stake in the token's raw units. */
export interface IndexedBet {
    readonly id: number;
    readonly txHash: string;
    readonly logIndex: number;
    readonly blockNumber: number;
    readonly blockTimestamp: Date;
    /** Lower-cased. */
    readonly contract: string;
    readonly marketId: number;
    /** Lower-cased. */
    readonly wallet: string;
    readonly outcome: number;
    readonly stakeRaw: bigint;
}

/** The match a betting contract belongs to; `bettingChainId` null on legacy rows (D7). */
export interface ContractMatch {
    readonly contract: string;
    readonly matchId: number;
    readonly leagueId: number | null;
    readonly bettingChainId: number | null;
}

export interface ChainPosition {
    readonly block: number;
    readonly logIndex: number;
}

interface SettlementBase extends ChainPosition {
    readonly txHash: string;
    readonly blockTimestamp: Date;
    readonly contract: string;
    readonly marketId: number;
}

/** `MarketResolved` / `MarketCancelled` rows of `market_events`, in chain order. */
export type SettlementEvent =
    | (SettlementBase & { readonly kind: 'resolved'; readonly result: number; readonly resolvedNetPoolRaw: bigint })
    | (SettlementBase & { readonly kind: 'cancelled' });

/** A donation or a subscription (`amount` already in USDC units). */
export interface SupportEvent {
    readonly kind: 'donation' | 'subscription';
    readonly id: string;
    readonly supporterWallet: string;
    readonly streamerWallet: string;
    readonly amountUsdc: number;
    readonly createdAt: Date;
}

export interface RemovedChatMessage {
    readonly messageId: string;
    readonly removedAt: Date;
}

/** Read-only view of the indexed tables the chain processor consumes (`bets`, `market_events`, …). */
export interface IGamificationEventSource {
    /** `bets.id > afterId`, ascending. */
    listBetsAfter(afterId: number, limit: number): Promise<ReadonlyArray<IndexedBet>>;
    /** Every bet of one market, any wallet. */
    listMarketBets(contract: string, marketId: number): Promise<ReadonlyArray<IndexedBet>>;
    findContractMatches(contracts: ReadonlyArray<string>): Promise<ReadonlyArray<ContractMatch>>;
    /** `{ marketType, line }` of the market's `MarketCreated`; null when not indexed. */
    findMarketKind(contract: string, marketId: number): Promise<{ readonly marketType: string; readonly line: number } | null>;
    isMarketCancelled(contract: string, marketId: number): Promise<boolean>;
    /** Settlements strictly after `after`, in chain order. */
    listSettlementsAfter(after: ChainPosition, limit: number): Promise<ReadonlyArray<SettlementEvent>>;
    /** Donations and subscriptions with `created_at > after`, oldest first. */
    listSupportAfter(after: Date, limit: number): Promise<ReadonlyArray<SupportEvent>>;
    /** Chat messages soft-deleted by moderation with `removed_at > after`, oldest first. */
    listChatRemovalsAfter(after: Date, limit: number): Promise<ReadonlyArray<RemovedChatMessage>>;
}

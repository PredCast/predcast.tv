import { Bet, BetUpdate } from '../entities/Bet';
import { BetWithMatchInfo } from '../entities/BetWithMatchInfo';

/**
 * Semantic filter for the my-bets feed. `claimable` / `refundable` are
 * derived (status + a null timestamp); the repo applies the full SQL
 * predicate so `findByUser` and `countByUser` always agree.
 */
export type BetFilter = 'all' | 'pending' | 'won' | 'lost' | 'refunded' | 'claimable' | 'refundable';

/** Counts per `BetFilter` bucket. Drives the My Bets `TabPill` badges. */
export interface BetCounts {
    readonly all: number;
    readonly pending: number;
    readonly won: number;
    readonly lost: number;
    readonly refunded: number;
    readonly claimable: number;
    readonly refundable: number;
}

export interface FindBetsByUserOptions {
    readonly limit: number;
    readonly offset: number;
    readonly filter?: BetFilter;
}

export interface IBetRepository {
    /**
     * Idempotent insert. If a row already exists for `(tx_hash, log_index)`
     * the call is a no-op and resolves with `false`.
     */
    insertIfAbsent(bet: Bet): Promise<boolean>;

    /**
     * Bulk update of every bet on a market once the market resolves.
     * Sets `status = 'WON'` for matching selections and `'LOST'` for the rest.
     */
    settleMarket(
        contractAddress: string,
        marketId: bigint,
        winningSelection: bigint,
        resolvedAt: Date,
    ): Promise<{ won: number; lost: number }>;

    /**
     * Bulk update of every bet on a market once the market is cancelled.
     * Sets `status = 'REFUNDED'` and stamps `refundedAt`.
     */
    cancelMarket(
        contractAddress: string,
        marketId: bigint,
        refundedAt: Date,
    ): Promise<number>;

    /** Marks a single bet as paid (Payout event) or refunded (Refund event). */
    updateByCoordinates(
        contractAddress: string,
        marketId: bigint,
        betIndex: bigint,
        userAddress: string,
        update: BetUpdate,
    ): Promise<boolean>;

    /** Read access for the my-bets API endpoint. */
    findByUser(userAddress: string, options: FindBetsByUserOptions): Promise<Bet[]>;

    /** Count for the given filter — does NOT apply limit/offset. */
    countByUser(userAddress: string, filter?: BetFilter): Promise<number>;

    /** Counts per filter bucket — drives the My Bets `TabPill` badges. */
    countByUserStatuses(userAddress: string): Promise<BetCounts>;

    /**
     * Same filter as `findByUser` but joined with `matches` so the UI can
     * render the row (team names, league, kickoff) without a second
     * round-trip per bet. Bets whose contract is not yet linked to a match
     * row keep `match = null` — we still return them so the user sees the
     * raw on-chain bet rather than a silent gap.
     */
    findByUserWithMatchInfo(userAddress: string, options: FindBetsByUserOptions): Promise<BetWithMatchInfo[]>;

    /**
     * Distinct `contract_address` values currently stored on `bets` rows.
     * Drives the match-retention policy: any match whose
     * `betting_contract_address` is in this set must NOT be deleted by the
     * 24h cleanup, otherwise the bet→match join in `findByUserWithMatchInfo`
     * collapses and the dashboard renders "Unknown match".
     *
     * Returned addresses are lowercased so set lookups stay case-insensitive
     * (matches the existing case-insensitive filter inside this repo).
     */
    listReferencedContractAddresses(): Promise<ReadonlySet<string>>;
}

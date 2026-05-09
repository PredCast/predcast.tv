import { EventCoordinates } from '../value-objects/EventCoordinates';

export type BetStatus = 'PENDING' | 'WON' | 'LOST' | 'REFUNDED';

/**
 * On-chain bookkeeping of a single BetPlaced event.
 *
 * Distinct from the `predictions` aggregate: predictions are the user-visible
 * narrative (status, formatted odds, predicted team) and may be created via
 * the API before any tx is mined; bets are the indexer's authoritative copy
 * of what actually happened on-chain. Joined via `transactionHash`.
 */
export interface Bet {
    readonly coordinates: EventCoordinates;
    readonly contractAddress: string;
    readonly marketId: bigint;
    readonly betIndex: bigint;
    readonly userAddress: string;
    readonly selection: bigint;
    /** Net stake delivered to the pool — amount minus protocol fee (currently 0%). */
    readonly netStake: bigint;
    /** Original USDC amount the user signed for, before any fee. */
    readonly grossStake: bigint | null;
    /** Odds applied at bet time, fixed-point (× 10000). */
    readonly oddsX10000: number;
    /** Position of the odds value inside the contract's odds registry. */
    readonly oddsIndex: number | null;
    readonly status: BetStatus;
    readonly payout: bigint | null;
    readonly refundAmount: bigint | null;
    readonly placedAt: Date;
    readonly resolvedAt: Date | null;
    readonly claimedAt: Date | null;
    readonly refundedAt: Date | null;
}

export interface BetUpdate {
    readonly status?: BetStatus;
    readonly payout?: bigint | null;
    readonly refundAmount?: bigint | null;
    readonly resolvedAt?: Date | null;
    readonly claimedAt?: Date | null;
    readonly refundedAt?: Date | null;
}

import { EventCoordinates } from '../value-objects/EventCoordinates';

/**
 * Audit row for a per-market event emitted by a BettingMatch contract:
 * MarketCreated, MarketStateChanged, OddsUpdated, MarketResolved,
 * MarketCancelled, etc.
 */
export interface MarketEvent {
    readonly coordinates: EventCoordinates;
    readonly contractAddress: string;
    /** Some events (e.g. MatchInitialized) have no marketId. */
    readonly marketId: bigint | null;
    readonly eventName: string;
    readonly payload: Record<string, unknown>;
}

import { EventCoordinates } from '../value-objects/EventCoordinates';

/**
 * Generic audit row for any event emitted by LiquidityPool or
 * ChilizSwapRouter. The shape of `payload` is event-specific; consumers
 * are expected to know the schema for the events they care about (e.g.
 * the APY job reads `MarketSettled.releasedLiability`).
 */
export interface PoolEvent {
    readonly coordinates: EventCoordinates;
    readonly contractAddress: string;
    readonly eventName: string;
    readonly payload: Record<string, unknown>;
}

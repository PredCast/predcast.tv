import type { DoubleXpSource } from '../catalog/sources';
import type { DoubleXpEvent } from '../entities/DoubleXpEvent';

export interface DoubleXpEventCreate {
    readonly name: string;
    readonly multiplier: number;
    readonly sources: ReadonlyArray<DoubleXpSource>;
    readonly startsAt: Date;
    readonly endsAt: Date;
    readonly createdByWallet: string;
    readonly createdAt: Date;
}

/** `gamification_double_xp_events`; the SQL exclusion constraint backs `validateDoubleXpEvent`. */
export interface IDoubleXpEventRepository {
    /** Surfaces an exclusion violation as a ConflictError. */
    create(event: DoubleXpEventCreate): Promise<DoubleXpEvent>;
    /** Null when the event does not exist or is already cancelled. */
    cancel(id: string, byWallet: string, at: Date): Promise<DoubleXpEvent | null>;
    findById(id: string): Promise<DoubleXpEvent | null>;
    /** Events, cancelled included, whose window intersects `[from, to)`. */
    listIntersecting(from: Date, to: Date): Promise<ReadonlyArray<DoubleXpEvent>>;
    /** Admin list, latest start first. */
    listForAdmin(limit: number, beforeStartsAt: Date | null): Promise<ReadonlyArray<DoubleXpEvent>>;
}

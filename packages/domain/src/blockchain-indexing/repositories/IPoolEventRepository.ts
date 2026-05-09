import { PoolEvent } from '../entities/PoolEvent';

export interface IPoolEventRepository {
    insertIfAbsent(event: PoolEvent): Promise<boolean>;
    /**
     * Latest events of a given name for a contract — used by the APY job
     * to validate the delta-NAV against MarketSettled aggregates.
     */
    findRecentByEvent(contractAddress: string, eventName: string, limit: number): Promise<PoolEvent[]>;
}

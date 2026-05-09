import { ApyWindow, PoolApySnapshot } from '../entities/PoolApySnapshot';

export interface IPoolApyRepository {
    save(snapshot: Omit<PoolApySnapshot, 'id' | 'computedAt'>): Promise<PoolApySnapshot>;
    findLatest(window: ApyWindow): Promise<PoolApySnapshot | null>;
}

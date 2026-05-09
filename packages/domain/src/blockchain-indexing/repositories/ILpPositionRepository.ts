import { LpPosition, LpPositionDelta } from '../entities/LpPosition';

export interface ILpPositionRepository {
    /**
     * Atomically applies a delta to a holder's position. Creates a row if the
     * holder is new. Used by the LiquidityPoolIndexer on Deposit/Withdraw.
     */
    applyDelta(delta: LpPositionDelta): Promise<void>;
    findByHolder(holder: string): Promise<LpPosition | null>;
}

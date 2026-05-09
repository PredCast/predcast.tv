import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { ILpPositionRepository } from '@chiliztv/domain/blockchain-indexing/repositories/ILpPositionRepository';
import { LpPosition, LpPositionDelta } from '@chiliztv/domain/blockchain-indexing/entities/LpPosition';
import { logger } from '../../logging/logger';

@injectable()
export class SupabaseLpPositionRepository implements ILpPositionRepository {
    async applyDelta(delta: LpPositionDelta): Promise<void> {
        const holder = delta.holder.toLowerCase();

        // Read-modify-write. Concurrent indexer instances would race here, but
        // we deploy a single indexer per environment — the indexer is the
        // exclusive writer of this table.
        const { data: existing, error: readError } = await supabase
            .from('lp_positions')
            .select('shares, cost_basis, last_deposit_at')
            .eq('holder', holder)
            .maybeSingle();

        if (readError) {
            logger.error('Failed to read lp_position', { holder, error: readError.message });
            throw new Error('Failed to read lp_position');
        }

        const currentShares = existing ? BigInt(existing.shares as string) : BigInt(0);
        const currentBasis = existing ? BigInt(existing.cost_basis as string) : BigInt(0);
        const newShares = currentShares + delta.sharesDelta;
        const newBasis = currentBasis + delta.costBasisDelta;

        const row = {
            holder,
            shares: (newShares < BigInt(0) ? BigInt(0) : newShares).toString(),
            cost_basis: (newBasis < BigInt(0) ? BigInt(0) : newBasis).toString(),
            last_deposit_at: delta.bumpLastDepositAt
                ? delta.bumpLastDepositAt.toISOString()
                : (existing?.last_deposit_at ?? null),
            updated_at: delta.updatedAt.toISOString(),
        };

        const { error } = await supabase
            .from('lp_positions')
            .upsert(row, { onConflict: 'holder' });

        if (error) {
            logger.error('Failed to upsert lp_position', { holder, error: error.message });
            throw new Error('Failed to upsert lp_position');
        }
    }

    async findByHolder(holder: string): Promise<LpPosition | null> {
        const { data, error } = await supabase
            .from('lp_positions')
            .select('*')
            .eq('holder', holder.toLowerCase())
            .maybeSingle();

        if (error) {
            logger.error('Failed to find lp_position', { holder, error: error.message });
            throw new Error('Failed to find lp_position');
        }
        if (!data) return null;
        return {
            holder: data.holder,
            shares: BigInt(data.shares),
            costBasis: BigInt(data.cost_basis),
            lastDepositAt: data.last_deposit_at ? new Date(data.last_deposit_at) : null,
            updatedAt: new Date(data.updated_at),
        };
    }
}

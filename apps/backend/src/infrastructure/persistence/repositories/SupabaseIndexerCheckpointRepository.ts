import { inject, injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type {
    IIndexerCheckpointRepository,
    IndexerCheckpoint,
} from '@chiliztv/domain/blockchain-indexing/repositories/IIndexerCheckpointRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

@injectable()
export class SupabaseIndexerCheckpointRepository implements IIndexerCheckpointRepository {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async listAll(): Promise<ReadonlyArray<IndexerCheckpoint>> {
        const { data, error } = await supabase
            .from('indexer_checkpoints')
            .select('indexer_name, contract_address, last_block, updated_at')
            .order('indexer_name');
        if (error) {
            logger.error('Failed to list indexer checkpoints', { error: error.message });
            throw new Error('Failed to list indexer checkpoints');
        }
        return ((data ?? []) as Array<{ indexer_name: string; contract_address: string | null; last_block: number | string; updated_at: string }>).map(
            (row) => ({
                indexerName: row.indexer_name,
                contractAddress: row.contract_address,
                lastBlock: BigInt(row.last_block),
                updatedAt: new Date(row.updated_at),
            }),
        );
    }

    async getLastBlock(indexerName: string): Promise<bigint> {
        const { data, error } = await supabase
            .from('indexer_checkpoints')
            .select('last_block')
            .eq('indexer_name', indexerName)
            .maybeSingle();

        if (error) {
            logger.error('Failed to read indexer checkpoint', { indexerName, error: error.message });
            throw new Error(`Failed to read checkpoint for ${indexerName}`);
        }

        if (!data) return BigInt(0);
        return BigInt(data.last_block as number | string);
    }

    async setLastBlock(indexerName: string, lastBlock: bigint, contractAddress?: string): Promise<void> {
        const { error } = await supabase
            .from('indexer_checkpoints')
            .upsert(
                {
                    indexer_name: indexerName,
                    contract_address: contractAddress ?? null,
                    last_block: lastBlock.toString(),
                    updated_at: this.clock.now().toISOString(),
                },
                { onConflict: 'indexer_name' },
            );

        if (error) {
            logger.error('Failed to write indexer checkpoint', { indexerName, error: error.message });
            throw new Error(`Failed to write checkpoint for ${indexerName}`);
        }
    }
}

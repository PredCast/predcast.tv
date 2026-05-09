import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { IIndexerCheckpointRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IIndexerCheckpointRepository';
import { logger } from '../../logging/logger';

@injectable()
export class SupabaseIndexerCheckpointRepository implements IIndexerCheckpointRepository {
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
                    updated_at: new Date().toISOString(),
                },
                { onConflict: 'indexer_name' },
            );

        if (error) {
            logger.error('Failed to write indexer checkpoint', { indexerName, error: error.message });
            throw new Error(`Failed to write checkpoint for ${indexerName}`);
        }
    }
}

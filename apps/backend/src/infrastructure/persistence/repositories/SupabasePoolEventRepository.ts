import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { IPoolEventRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IPoolEventRepository';
import { PoolEvent } from '@chiliztv/domain/blockchain-indexing/entities/PoolEvent';
import { logger } from '../../logging/logger';

@injectable()
export class SupabasePoolEventRepository implements IPoolEventRepository {
    async insertIfAbsent(event: PoolEvent): Promise<boolean> {
        const row = {
            tx_hash: event.coordinates.transactionHash.toLowerCase(),
            log_index: event.coordinates.logIndex,
            contract_address: event.contractAddress.toLowerCase(),
            event_name: event.eventName,
            block_number: event.coordinates.blockNumber.toString(),
            block_timestamp: event.coordinates.blockTimestamp.toISOString(),
            payload: event.payload,
        };

        const { error, count } = await supabase
            .from('pool_events')
            .upsert(row, { onConflict: 'tx_hash,log_index', ignoreDuplicates: true, count: 'exact' });

        if (error) {
            logger.error('Failed to insert pool event', { txHash: row.tx_hash, eventName: event.eventName, error: error.message });
            throw new Error('Failed to insert pool event');
        }
        return (count ?? 0) > 0;
    }

    async findRecentByEvent(contractAddress: string, eventName: string, limit: number): Promise<PoolEvent[]> {
        const { data, error } = await supabase
            .from('pool_events')
            .select('*')
            .eq('contract_address', contractAddress.toLowerCase())
            .eq('event_name', eventName)
            .order('block_number', { ascending: false })
            .limit(limit);

        if (error) {
            logger.error('Failed to read pool events', { contractAddress, eventName, error: error.message });
            throw new Error('Failed to read pool events');
        }

        return (data ?? []).map((row: any) => ({
            coordinates: {
                transactionHash: row.tx_hash,
                logIndex: row.log_index,
                blockNumber: BigInt(row.block_number),
                blockTimestamp: new Date(row.block_timestamp),
            },
            contractAddress: row.contract_address,
            eventName: row.event_name,
            payload: row.payload ?? {},
        }));
    }
}

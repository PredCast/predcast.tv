import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { IMarketEventRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IMarketEventRepository';
import { MarketEvent } from '@chiliztv/domain/blockchain-indexing/entities/MarketEvent';
import { logger } from '../../logging/logger';

@injectable()
export class SupabaseMarketEventRepository implements IMarketEventRepository {
    async insertIfAbsent(event: MarketEvent): Promise<boolean> {
        const row = {
            tx_hash: event.coordinates.transactionHash.toLowerCase(),
            log_index: event.coordinates.logIndex,
            contract_address: event.contractAddress.toLowerCase(),
            market_id: event.marketId !== null ? event.marketId.toString() : null,
            event_name: event.eventName,
            block_number: event.coordinates.blockNumber.toString(),
            block_timestamp: event.coordinates.blockTimestamp.toISOString(),
            payload: event.payload,
        };

        const { error, count } = await supabase
            .from('market_events')
            .upsert(row, { onConflict: 'tx_hash,log_index', ignoreDuplicates: true, count: 'exact' });

        if (error) {
            logger.error('Failed to insert market event', { txHash: row.tx_hash, eventName: event.eventName, error: error.message });
            throw new Error('Failed to insert market event');
        }
        return (count ?? 0) > 0;
    }
}

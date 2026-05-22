import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import type {
    IMarketEventRepository,
    MarketContext,
    MissingLineRow,
} from '@chiliztv/domain/blockchain-indexing/repositories/IMarketEventRepository';
import { MarketEvent } from '@chiliztv/domain/blockchain-indexing/entities/MarketEvent';
import { logger } from '../../logging/logger';
import { looksLikeMarketTypeHash, marketTypeNameFromHash } from '../../blockchain/markets/marketTypeNameFromHash';

interface MarketCreatedRow {
    contract_address: string;
    market_id: string;
    payload: { marketType?: unknown; line?: unknown; maxSelections?: unknown } | null;
}

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

    async findMarketContext(contractAddress: string, marketId: bigint): Promise<MarketContext | null> {
        const { data, error } = await supabase
            .from('market_events')
            .select('payload')
            .eq('contract_address', contractAddress.toLowerCase())
            .eq('market_id', marketId.toString())
            .eq('event_name', 'MarketCreated')
            .limit(1)
            .maybeSingle();
        if (error) {
            logger.warn('findMarketContext failed', { contractAddress, marketId: marketId.toString(), error: error.message });
            return null;
        }
        if (!data) return null;
        const payload = (data as { payload: MarketCreatedRow['payload'] }).payload;
        const rawMarketType = typeof payload?.marketType === 'string' ? payload.marketType : null;
        if (!rawMarketType) return null;
        // Back-compat: rows written before the indexer learned to resolve the
        // bytes32 hash to a friendly name still hold the raw 0x… value.
        const marketType = looksLikeMarketTypeHash(rawMarketType)
            ? (marketTypeNameFromHash(rawMarketType) ?? rawMarketType)
            : rawMarketType;
        const line = typeof payload?.line === 'number'
            ? payload.line
            : payload?.line != null && !Number.isNaN(Number(payload.line)) ? Number(payload.line) : null;
        return { marketType, line };
    }

    async findCreatedMissingLine(): Promise<ReadonlyArray<MissingLineRow>> {
        // Two predicates: `payload->>'line'` is the JSON-text projection;
        // PostgREST's `is` filter against `null` matches both missing keys and
        // explicit JSON `null`. Combined with `event_name=MarketCreated` the
        // result is the working set for the backfill job.
        const { data, error } = await supabase
            .from('market_events')
            .select('contract_address, market_id')
            .eq('event_name', 'MarketCreated')
            .is('payload->>line', null);
        if (error) {
            logger.warn('findCreatedMissingLine failed', { error: error.message });
            return [];
        }
        return ((data ?? []) as Array<{ contract_address: string; market_id: string }>)
            .filter((r) => r.market_id != null)
            .map((r) => ({ contractAddress: r.contract_address, marketId: BigInt(r.market_id) }));
    }

    async upsertSyntheticMarketCreated(args: {
        contractAddress: string;
        marketId: bigint;
        marketType: string;
        line: number | null;
        maxSelections: number;
        blockNumber: bigint;
    }): Promise<void> {
        const addr = args.contractAddress.toLowerCase();
        const mid = args.marketId.toString();

        const { data: existing, error: lookupErr } = await supabase
            .from('market_events')
            .select('tx_hash')
            .eq('contract_address', addr)
            .eq('market_id', mid)
            .eq('event_name', 'MarketCreated')
            .limit(1)
            .maybeSingle();
        if (lookupErr) {
            logger.warn('upsertSyntheticMarketCreated: lookup failed', {
                contractAddress: addr, marketId: mid, error: lookupErr.message,
            });
            return;
        }
        if (existing) return;

        // Synthetic tx_hash keyed off (contract, marketId) so we never collide
        // with a real event, and re-runs are no-ops via the unique (tx_hash, log_index).
        const synthTxHash = `0xsynth${addr.slice(2)}${mid.padStart(8, '0')}`.slice(0, 66);
        const row = {
            tx_hash: synthTxHash,
            log_index: 0,
            contract_address: addr,
            market_id: mid,
            event_name: 'MarketCreated',
            block_number: args.blockNumber.toString(),
            block_timestamp: new Date().toISOString(),
            payload: {
                marketType: args.marketType,
                line: args.line,
                maxSelections: args.maxSelections,
                synthesized: true,
                synthesizedAt: new Date().toISOString(),
            },
        };

        const { error } = await supabase
            .from('market_events')
            .upsert(row, { onConflict: 'tx_hash,log_index', ignoreDuplicates: true });
        if (error) {
            logger.warn('upsertSyntheticMarketCreated: insert failed', {
                contractAddress: addr, marketId: mid, error: error.message,
            });
            return;
        }
        logger.info('Synthesized MarketCreated row', {
            contractAddress: addr, marketId: mid, marketType: args.marketType, line: args.line,
        });
    }

    async patchLine(contractAddress: string, marketId: bigint, line: number, maxSelections: number): Promise<void> {
        // Read every MarketCreated row for this market (idempotent: there
        // should be one, but the schema does not enforce it), merge `line` +
        // `maxSelections` into the existing payload, write back.
        const addr = contractAddress.toLowerCase();
        const id = marketId.toString();

        const { data, error } = await supabase
            .from('market_events')
            .select('tx_hash, log_index, payload')
            .eq('contract_address', addr)
            .eq('market_id', id)
            .eq('event_name', 'MarketCreated');
        if (error) {
            logger.warn('patchLine: read failed', { contractAddress: addr, marketId: id, error: error.message });
            return;
        }

        for (const row of (data ?? []) as Array<{ tx_hash: string; log_index: number; payload: Record<string, unknown> | null }>) {
            const merged = { ...(row.payload ?? {}), line, maxSelections };
            const { error: upErr } = await supabase
                .from('market_events')
                .update({ payload: merged })
                .eq('tx_hash', row.tx_hash)
                .eq('log_index', row.log_index);
            if (upErr) {
                logger.warn('patchLine: update failed', { txHash: row.tx_hash, error: upErr.message });
            }
        }
    }
}

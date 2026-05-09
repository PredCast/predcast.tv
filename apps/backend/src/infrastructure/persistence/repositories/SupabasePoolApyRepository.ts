import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { IPoolApyRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IPoolApyRepository';
import { ApyWindow, PoolApySnapshot } from '@chiliztv/domain/blockchain-indexing/entities/PoolApySnapshot';
import { logger } from '../../logging/logger';

interface ApyRow {
    id: string;
    window_label: ApyWindow;
    pps_start: string;
    pps_end: string;
    apy_bps: number;
    apy_post_fee_bps: number | null;
    period_days: number;
    noisy: boolean;
    block_start: number | string;
    block_end: number | string;
    computed_at: string;
}

function toDomain(row: ApyRow): PoolApySnapshot {
    return {
        id: row.id,
        windowLabel: row.window_label,
        ppsStart: BigInt(row.pps_start),
        ppsEnd: BigInt(row.pps_end),
        apyBps: row.apy_bps,
        apyPostFeeBps: row.apy_post_fee_bps,
        periodDays: row.period_days,
        noisy: row.noisy,
        blockStart: BigInt(row.block_start),
        blockEnd: BigInt(row.block_end),
        computedAt: new Date(row.computed_at),
    };
}

@injectable()
export class SupabasePoolApyRepository implements IPoolApyRepository {
    async save(snapshot: Omit<PoolApySnapshot, 'id' | 'computedAt'>): Promise<PoolApySnapshot> {
        const insert = {
            window_label: snapshot.windowLabel,
            pps_start: snapshot.ppsStart.toString(),
            pps_end: snapshot.ppsEnd.toString(),
            apy_bps: snapshot.apyBps,
            apy_post_fee_bps: snapshot.apyPostFeeBps,
            period_days: snapshot.periodDays,
            noisy: snapshot.noisy,
            block_start: snapshot.blockStart.toString(),
            block_end: snapshot.blockEnd.toString(),
        };
        const { data, error } = await supabase
            .from('pool_apy_snapshots')
            .insert(insert)
            .select()
            .single();
        if (error || !data) {
            logger.error('Failed to save APY snapshot', { error: error?.message });
            throw new Error('Failed to save APY snapshot');
        }
        return toDomain(data as ApyRow);
    }

    async findLatest(window: ApyWindow): Promise<PoolApySnapshot | null> {
        const { data, error } = await supabase
            .from('pool_apy_snapshots')
            .select('*')
            .eq('window_label', window)
            .order('computed_at', { ascending: false })
            .limit(1)
            .maybeSingle();
        if (error) {
            logger.error('Failed to read latest APY snapshot', { window, error: error.message });
            throw new Error('Failed to read APY snapshot');
        }
        return data ? toDomain(data as ApyRow) : null;
    }
}

import { inject, injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { IWiringAlertRepository } from '@chiliztv/domain/blockchain-indexing/repositories/IWiringAlertRepository';
import { WiringAlert, WiringStep } from '@chiliztv/domain/blockchain-indexing/entities/WiringAlert';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { logger } from '../../logging/logger';

@injectable()
export class SupabaseWiringAlertRepository implements IWiringAlertRepository {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async upsert(matchAddress: string, missingSteps: ReadonlyArray<WiringStep>): Promise<void> {
        const row = {
            match_address: matchAddress.toLowerCase(),
            missing_steps: missingSteps,
            detected_at: this.clock.now().toISOString(),
            resolved_at: null as string | null,
        };

        const { error } = await supabase
            .from('wiring_alerts')
            .upsert(row, { onConflict: 'match_address' });

        if (error) {
            logger.error('Failed to upsert wiring alert', { matchAddress, error: error.message });
            throw new Error('Failed to upsert wiring alert');
        }
    }

    async markResolved(matchAddress: string, resolvedAt: Date): Promise<void> {
        const { error } = await supabase
            .from('wiring_alerts')
            .update({ resolved_at: resolvedAt.toISOString() })
            .eq('match_address', matchAddress.toLowerCase());
        if (error) {
            logger.error('Failed to resolve wiring alert', { matchAddress, error: error.message });
            throw new Error('Failed to resolve wiring alert');
        }
    }

    async findUnresolved(): Promise<WiringAlert[]> {
        const { data, error } = await supabase
            .from('wiring_alerts')
            .select('*')
            .is('resolved_at', null)
            .order('detected_at', { ascending: false });

        if (error) {
            logger.error('Failed to read unresolved wiring alerts', { error: error.message });
            throw new Error('Failed to read wiring alerts');
        }

        return (data ?? []).map((row: any) => ({
            matchAddress: row.match_address,
            missingSteps: row.missing_steps as ReadonlyArray<WiringStep>,
            detectedAt: new Date(row.detected_at),
            resolvedAt: row.resolved_at ? new Date(row.resolved_at) : null,
        }));
    }
}

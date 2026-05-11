import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../../infrastructure/database/supabase/client';
import { logger } from '../../../infrastructure/logging/logger';

const FIXTURE_ID_FLOOR = 999000;

@injectable()
export class ResetTestDataCommand {
    async execute(): Promise<number> {
        logger.info(`Deleting matches with api_football_id >= ${FIXTURE_ID_FLOOR}`);
        const { error, count } = await supabase
            .from('matches')
            .delete({ count: 'exact' })
            .gte('api_football_id', FIXTURE_ID_FLOOR);
        if (error) {
            logger.error('match:reset failed', { error: error.message });
            return 1;
        }
        logger.info('match:reset completed', { rowsDeleted: count ?? 0 });
        return 0;
    }
}

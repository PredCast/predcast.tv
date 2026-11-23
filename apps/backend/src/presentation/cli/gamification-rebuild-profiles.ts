import 'reflect-metadata';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../../.env.local') });
config({ path: resolve(__dirname, '../../../.env') });

import { setupDependencyInjection, container } from '../../di/container';
setupDependencyInjection();
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { RebuildProfilesUseCase } from '../../application/gamification/use-cases/RebuildProfilesUseCase';
import { waitForRedisReady, type RedisClient } from '../../infrastructure/cache/RedisClient';
import { env } from '../../infrastructure/config/environment';
import { logger } from '../../infrastructure/logging/logger';

/** Usage: pnpm gamification:rebuild-profiles [--dry-run] — xp_total and level recomputed from the ledger (§8.5). */
async function main(): Promise<void> {
    const dryRun = process.argv.slice(2).includes('--dry-run');
    if (env.REDIS_URL && container.isRegistered(TOKENS.RedisClient)) {
        await waitForRedisReady(container.resolve<RedisClient>(TOKENS.RedisClient));
    }
    const drift = await container.resolve(RebuildProfilesUseCase).execute(!dryRun);
    for (const d of drift) {
        logger.info('Profile drift', { ...d, fixed: !dryRun });
    }
    logger.info('gamification:rebuild-profiles done', { drifting: drift.length, dryRun });
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        logger.error('gamification:rebuild-profiles failed', { error: err instanceof Error ? err.message : String(err) });
        process.exit(1);
    });

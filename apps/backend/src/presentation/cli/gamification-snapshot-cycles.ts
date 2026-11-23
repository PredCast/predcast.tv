import 'reflect-metadata';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../../.env.local') });
config({ path: resolve(__dirname, '../../../.env') });

import { setupDependencyInjection, container } from '../../di/container';
setupDependencyInjection();
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { SnapshotCycleRanksUseCase } from '../../application/gamification/use-cases/cycles/SnapshotCycleRanksUseCase';
import { waitForRedisReady, type RedisClient } from '../../infrastructure/cache/RedisClient';
import { env } from '../../infrastructure/config/environment';
import { logger } from '../../infrastructure/logging/logger';

/** Usage: pnpm gamification:snapshot-cycles — freezes the closed leaderboard cycles (reads indexed rows only). */
async function main(): Promise<void> {
    if (env.REDIS_URL && container.isRegistered(TOKENS.RedisClient)) {
        await waitForRedisReady(container.resolve<RedisClient>(TOKENS.RedisClient));
    }
    const report = await container.resolve(SnapshotCycleRanksUseCase).execute();
    logger.info('gamification:snapshot-cycles done', { ...report });
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        logger.error('gamification:snapshot-cycles failed', { error: err instanceof Error ? err.message : String(err) });
        process.exit(1);
    });

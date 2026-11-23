import 'reflect-metadata';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../../.env.local') });
config({ path: resolve(__dirname, '../../../.env') });

import { setupDependencyInjection, container } from '../../di/container';
setupDependencyInjection();
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import { ProcessGamificationChainUseCase } from '../../application/gamification/use-cases/chain/ProcessGamificationChainUseCase';
import { waitForRedisReady, type RedisClient } from '../../infrastructure/cache/RedisClient';
import { env } from '../../infrastructure/config/environment';
import { logger } from '../../infrastructure/logging/logger';

/** Usage: pnpm gamification:process-chain — one run of the chain processor (reads indexed rows, sends no transaction). */
async function main(): Promise<void> {
    if (env.REDIS_URL && container.isRegistered(TOKENS.RedisClient)) {
        await waitForRedisReady(container.resolve<RedisClient>(TOKENS.RedisClient));
    }
    const report = await container.resolve(ProcessGamificationChainUseCase).execute();
    logger.info('gamification:process-chain done', { ...report });
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        logger.error('gamification:process-chain failed', { error: err instanceof Error ? err.message : String(err) });
        process.exit(1);
    });

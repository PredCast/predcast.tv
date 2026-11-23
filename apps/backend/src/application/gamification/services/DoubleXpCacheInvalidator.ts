import { inject, injectable } from 'tsyringe';

import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { gamificationCacheKeys } from '../cache/gamificationCacheKeys';

/** Drops the cached banner event after an admin change; `/me` follows within its 15 s TTL. */
@injectable()
export class DoubleXpCacheInvalidator {
    constructor(
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
    ) {}

    /** Best effort: the key expires on its own 30 s TTL if Redis fails. */
    async invalidate(): Promise<void> {
        try {
            await this.cache.delete(gamificationCacheKeys.doubleXp());
        } catch (error) {
            this.logger.warn('Double XP cache invalidation failed', {
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
}

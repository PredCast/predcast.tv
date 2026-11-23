import { inject, injectable } from 'tsyringe';

import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { gamificationCacheKeys } from '../cache/gamificationCacheKeys';

export interface LevelChange {
    readonly newLevel: number;
    /** `level_peak` before the credit. */
    readonly previousPeak: number;
}

/** Shared tail of every credit: level-up notification, then read-model cache invalidation. */
@injectable()
export class GamificationAfterCredit {
    constructor(
        @inject(TOKENS.IGamificationNotificationRepository)
        private readonly notifications: IGamificationNotificationRepository,
        @inject(TOKENS.IAccountRepository) private readonly accounts: IAccountRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
    ) {}

    /** True when a new level above the peak was reached: one notification, none on a drop or a re-climb. */
    async run(accountId: string, change: LevelChange, at: Date): Promise<boolean> {
        const leveledUp = change.newLevel > change.previousPeak;
        if (leveledUp) {
            await this.notifications.create(accountId, { kind: 'level_up', level: change.newLevel }, at);
        }
        await this.invalidate(accountId);
        return leveledUp;
    }

    /** Best effort: the read models expire on their own TTL if Redis fails. */
    async invalidate(accountId: string): Promise<void> {
        try {
            const links = await this.accounts.findActiveLinksOfAccount(accountId);
            const keys = [
                gamificationCacheKeys.me(accountId),
                ...links.flatMap((l) => [
                    gamificationCacheKeys.card(l.walletAddress),
                    gamificationCacheKeys.badge(l.walletAddress),
                    gamificationCacheKeys.profile(l.walletAddress),
                ]),
            ];
            await Promise.all(keys.map((k) => this.cache.delete(k)));
        } catch (error) {
            this.logger.warn('Gamification cache invalidation failed', {
                accountId,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
}

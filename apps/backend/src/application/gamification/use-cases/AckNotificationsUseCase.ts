import { inject, injectable } from 'tsyringe';

import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AckNotificationsResponse } from '@chiliztv/shared';

import { gamificationCacheKeys } from '../cache/gamificationCacheKeys';

/** POST /gamification/me/notifications/ack — only the account's own notifications are marked seen. */
@injectable()
export class AckNotificationsUseCase {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IGamificationNotificationRepository)
        private readonly notifications: IGamificationNotificationRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
    ) {}

    async execute(accountId: string, ids: ReadonlyArray<number>): Promise<AckNotificationsResponse> {
        const acked = await this.notifications.markSeen(accountId, ids, this.clock.now());
        if (acked > 0) await this.cache.delete(gamificationCacheKeys.me(accountId));
        return { acked };
    }
}

import { inject, injectable } from 'tsyringe';

import { announcedDoubleXp, DOUBLE_XP_ANNOUNCE_DAYS } from '@chiliztv/domain/gamification/policies/doubleXpAnnouncement';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { DoubleXpPublicDto } from '@chiliztv/shared';

import { GAMIFICATION_CACHE_TTL, gamificationCacheKeys } from '../cache/gamificationCacheKeys';
import { toDoubleXpDto } from '../mappers/readModelDtos';

interface CachedDoubleXp {
    readonly event: DoubleXpPublicDto | null;
}

const MS_PER_DAY = 86_400_000;

/** GET /gamification/double-xp/current — running event, else the next within 7 days, else null. */
@injectable()
export class GetCurrentDoubleXpUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IDoubleXpEventRepository) private readonly events: IDoubleXpEventRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
    ) {}

    async execute(): Promise<DoubleXpPublicDto | null> {
        if (!gamificationGate(this.config.launch, this.clock.now()).open) return null;
        const cached = await this.cache.getOrLoad<CachedDoubleXp>({
            key: gamificationCacheKeys.doubleXp(),
            ttlSeconds: GAMIFICATION_CACHE_TTL.doubleXp,
            loader: async () => ({ event: await this.load() }),
        });
        return cached?.event ?? null;
    }

    /** Uncached read, also used by the owner view. */
    async load(): Promise<DoubleXpPublicDto | null> {
        const now = this.clock.now();
        const horizon = new Date(now.getTime() + DOUBLE_XP_ANNOUNCE_DAYS * MS_PER_DAY);
        const announced = announcedDoubleXp(await this.events.listIntersecting(now, horizon), now);
        return announced ? toDoubleXpDto(announced) : null;
    }
}

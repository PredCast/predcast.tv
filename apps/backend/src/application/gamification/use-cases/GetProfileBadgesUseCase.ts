import { inject, injectable } from 'tsyringe';

import { buildProfileBadge } from '@chiliztv/domain/gamification/policies/profileCard';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IRateLimitService } from '@chiliztv/domain/shared/ports/IRateLimitService';
import { TooManyRequestsError } from '@chiliztv/domain/shared/errors/TooManyRequestsError';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { ProfileBadgeDto, ProfileBadgesResponse } from '@chiliztv/shared';

import { GAMIFICATION_CACHE_TTL, gamificationCacheKeys } from '../cache/gamificationCacheKeys';
import { toBadgeDto } from '../mappers/readModelDtos';
import { GamificationReadModels } from '../services/GamificationReadModels';

/** 60 batched calls per minute and IP, independent of the HTTP kill switch (§9.1, D13). */
export const BADGES_RATE_LIMIT = { bucket: 'gamification-badges', limit: 60, windowSeconds: 60 } as const;

/** Cached per wallet; `badge: null` remembers a wallet without account or profile. */
interface CachedBadge {
    readonly badge: ProfileBadgeDto | null;
}

/** POST /gamification/cards/badges: one call per visible chat or leaderboard list. */
@injectable()
export class GetProfileBadgesUseCase {
    constructor(
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IRateLimitService) private readonly rateLimit: IRateLimitService,
        private readonly readModels: GamificationReadModels,
    ) {}

    async execute(input: { readonly wallets: ReadonlyArray<string>; readonly ip: string }): Promise<ProfileBadgesResponse> {
        const decision = await this.rateLimit.check({ ...BADGES_RATE_LIMIT, identifier: input.ip });
        if (!decision.allowed) {
            throw new TooManyRequestsError('Too many badge requests', { retryAfterSeconds: decision.retryAfterSeconds });
        }
        if (!this.readModels.isOpen()) return { badges: {} };

        const wallets = [...new Set(input.wallets.map((w) => w.toLowerCase()))];
        const cached = await this.cache.mget<CachedBadge>(wallets.map(gamificationCacheKeys.badge));
        const badges: Record<string, ProfileBadgeDto> = {};
        const missing: string[] = [];
        for (const wallet of wallets) {
            const hit = cached.get(gamificationCacheKeys.badge(wallet));
            if (!hit) missing.push(wallet);
            else if (hit.badge) badges[wallet] = hit.badge;
        }
        if (missing.length === 0) return { badges };

        const [sources, ctx] = await Promise.all([this.readModels.publicSources(missing), this.readModels.context()]);
        const loaded = new Map(sources.map(({ source, profile }) => [source.wallet, toBadgeDto(buildProfileBadge(source, profile, ctx))]));
        for (const [wallet, badge] of loaded) badges[wallet] = badge;
        await this.cache.mset<CachedBadge>(
            missing.map((wallet) => ({
                key: gamificationCacheKeys.badge(wallet),
                value: { badge: loaded.get(wallet) ?? null },
                ttl: GAMIFICATION_CACHE_TTL.badge,
            })),
        );
        return { badges };
    }
}

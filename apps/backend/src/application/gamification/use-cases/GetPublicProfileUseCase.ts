import { inject, injectable } from 'tsyringe';

import { buildProfileCard, publicAchievements } from '@chiliztv/domain/gamification/policies/profileCard';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { PublicProfileDto } from '@chiliztv/shared';

import { GAMIFICATION_CACHE_TTL, gamificationCacheKeys } from '../cache/gamificationCacheKeys';
import { toCardDto, toPublicAchievementDto } from '../mappers/readModelDtos';
import { GamificationReadModels } from '../services/GamificationReadModels';

interface CachedProfile {
    readonly profile: PublicProfileDto | null;
}

/** GET /gamification/profiles/:wallet — card + public achievements; never the account's other wallets. */
@injectable()
export class GetPublicProfileUseCase {
    constructor(
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        private readonly readModels: GamificationReadModels,
    ) {}

    async execute(walletAddress: string): Promise<PublicProfileDto> {
        const wallet = walletAddress.toLowerCase();
        if (!this.readModels.isOpen()) throw new NotFoundError('Public profile', wallet);
        const cached = await this.cache.getOrLoad<CachedProfile>({
            key: gamificationCacheKeys.profile(wallet),
            ttlSeconds: GAMIFICATION_CACHE_TTL.profile,
            loader: async () => ({ profile: await this.load(wallet) }),
        });
        if (!cached?.profile) throw new NotFoundError('Public profile', wallet);
        return cached.profile;
    }

    private async load(wallet: string): Promise<PublicProfileDto | null> {
        const [sources, ctx] = await Promise.all([this.readModels.publicSources([wallet]), this.readModels.context()]);
        const found = sources[0];
        if (!found) return null;
        return {
            ...toCardDto(buildProfileCard(found.source, found.profile, ctx)),
            achievements: publicAchievements(found.source.unlocked).map(toPublicAchievementDto),
        };
    }
}

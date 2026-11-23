import { inject, injectable } from 'tsyringe';

import { buildProfileCard } from '@chiliztv/domain/gamification/policies/profileCard';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { ProfileCardDto } from '@chiliztv/shared';

import { GAMIFICATION_CACHE_TTL, gamificationCacheKeys } from '../cache/gamificationCacheKeys';
import { toCardDto } from '../mappers/readModelDtos';
import { GamificationReadModels } from '../services/GamificationReadModels';

interface CachedCard {
    readonly card: ProfileCardDto | null;
}

/** GET /gamification/cards/:wallet — hover card, 404 without account, profile or launch. */
@injectable()
export class GetProfileCardUseCase {
    constructor(
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        private readonly readModels: GamificationReadModels,
    ) {}

    async execute(walletAddress: string): Promise<ProfileCardDto> {
        const wallet = walletAddress.toLowerCase();
        if (!this.readModels.isOpen()) throw new NotFoundError('Profile card', wallet);
        const cached = await this.cache.getOrLoad<CachedCard>({
            key: gamificationCacheKeys.card(wallet),
            ttlSeconds: GAMIFICATION_CACHE_TTL.card,
            loader: async () => ({ card: await this.load(wallet) }),
        });
        if (!cached?.card) throw new NotFoundError('Profile card', wallet);
        return cached.card;
    }

    private async load(wallet: string): Promise<ProfileCardDto | null> {
        const [sources, ctx] = await Promise.all([this.readModels.publicSources([wallet]), this.readModels.context()]);
        const found = sources[0];
        return found ? toCardDto(buildProfileCard(found.source, found.profile, ctx)) : null;
    }
}

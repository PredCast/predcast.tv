import { inject, injectable } from 'tsyringe';

import { CosmeticsRejectedError } from '@chiliztv/domain/gamification/errors/CosmeticsRejectedError';
import { validateCosmetics } from '@chiliztv/domain/gamification/policies/cosmetics';
import { cosmeticsContextOf, emptyProfile } from '@chiliztv/domain/gamification/policies/profileCard';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IGamificationReadRepository } from '@chiliztv/domain/gamification/repositories/IGamificationReadRepository';
import { NotFoundError } from '@chiliztv/domain/shared/errors/NotFoundError';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { MyGamificationDto, UpdateCosmeticsBody } from '@chiliztv/shared';

import { GamificationAfterCredit } from '../services/GamificationAfterCredit';
import { GamificationReadModels } from '../services/GamificationReadModels';
import { GetMyGamificationUseCase } from './GetMyGamificationUseCase';

/** PUT /gamification/me/cosmetics — domain `validateCosmetics` or a typed 422 (CA16), then fresh owner view. */
@injectable()
export class UpdateCosmeticsUseCase {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IGamificationReadRepository) private readonly reads: IGamificationReadRepository,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        private readonly readModels: GamificationReadModels,
        private readonly afterCredit: GamificationAfterCredit,
        private readonly getMe: GetMyGamificationUseCase,
    ) {}

    async execute(accountId: string, wallet: string, body: UpdateCosmeticsBody): Promise<MyGamificationDto> {
        if (!this.readModels.isOpen()) throw new NotFoundError('Gamification profile', accountId);
        const [source, ctx] = await Promise.all([
            this.reads.findCardSourceOfAccount(accountId, wallet),
            this.readModels.context(),
        ]);
        if (!source) throw new NotFoundError('Gamification profile', accountId);
        const profile = source.profile ?? emptyProfile(accountId, source.accountCreatedAt);
        const result = validateCosmetics(body, cosmeticsContextOf(profile, source, ctx));
        if (!result.ok) throw new CosmeticsRejectedError(result.error);

        await this.profiles.updateCosmetics(
            accountId,
            { titleId: result.titleId, frameId: result.frameId, showcase: result.showcase },
            this.clock.now(),
        );
        await this.afterCredit.invalidate(accountId);
        return this.getMe.execute(accountId, wallet);
    }
}

import { inject, injectable } from 'tsyringe';

import type {
    IGamificationProfileRepository,
    ProfileDrift,
} from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { GamificationAfterCredit } from '../services/GamificationAfterCredit';

/** §8.5: recomputes xp_total and level from the ledger. Idempotent: a second run finds no drift. */
@injectable()
export class RebuildProfilesUseCase {
    constructor(
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        private readonly afterCredit: GamificationAfterCredit,
    ) {}

    async execute(apply: boolean): Promise<ReadonlyArray<ProfileDrift>> {
        const drift = await this.profiles.rebuildFromLedger(apply);
        if (apply) {
            for (const d of drift) await this.afterCredit.invalidate(d.accountId);
        }
        return drift;
    }
}

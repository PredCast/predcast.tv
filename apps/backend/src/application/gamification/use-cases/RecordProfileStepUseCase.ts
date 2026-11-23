import { inject, injectable } from 'tsyringe';

import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { SOURCE_RULES, type OnboardingStep } from '@chiliztv/domain/gamification/catalog/sources';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { AchievementRefresh } from '../services/AchievementRefresh';
import { CreditXpUseCase, type CreditXpOutcome } from './CreditXpUseCase';

/**
 * First steps (§3.3 `onboarding_step`): 5 XP once per step and `first_steps` progress. Called on a
 * username or an avatar, on the first counted watch minutes, chat message and follow, and at a
 * 3-day streak. Null when the gamification is closed.
 */
@injectable()
export class RecordProfileStepUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        private readonly creditXp: CreditXpUseCase,
        private readonly achievements: AchievementRefresh,
    ) {}

    async execute(accountId: string, step: OnboardingStep, at: Date): Promise<CreditXpOutcome | null> {
        if (!gamificationGate(this.config.launch, at).open) return null;
        const refKey = refKeys.onboarding(accountId, step);
        // Steps are lifetime one-offs: skip the ban checks of a credit that cannot insert.
        if (await this.ledger.findByRefKey(refKey)) return { status: 'duplicate', accountId };

        const outcome = await this.creditXp.execute({
            actor: { kind: 'account', accountId },
            source: 'onboarding_step',
            refKey,
            occurredAt: at,
            requestedXp: SOURCE_RULES.onboarding_step.xp ?? 0,
            metadata: { step },
            progress: [{ metric: 'first_steps', item: step }],
        });
        if (outcome.status === 'credited' && outcome.reason === null) {
            await this.achievements.run(accountId, at, `onboarding:${step}`);
        }
        return outcome;
    }
}

import { inject, injectable } from 'tsyringe';

import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { countersFromProgress } from '@chiliztv/domain/gamification/policies/achievementCounters';
import { evaluateAchievements, type FounderContext } from '@chiliztv/domain/gamification/policies/achievementEvaluator';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IGamificationProgressRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { CreditXpUseCase } from './CreditXpUseCase';

export interface UnlockedTierResult {
    readonly achievementId: string;
    readonly tier: number;
    readonly xp: number;
}

/** Tier XP can level up and open `founder`: a few passes cover any chain of unlocks. */
const MAX_PASSES = 3;

/**
 * Compares the counters to the catalog and unlocks every newly reached tier (several at once):
 * insert `ON CONFLICT DO NOTHING`, notification, then tier XP. `founder` is re-evaluated after
 * a level-up caused by tier XP.
 */
@injectable()
export class EvaluateAchievementsUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        @inject(TOKENS.IGamificationProgressRepository) private readonly progress: IGamificationProgressRepository,
        @inject(TOKENS.ICycleRankRepository) private readonly cycleRanks: ICycleRankRepository,
        @inject(TOKENS.IGamificationNotificationRepository)
        private readonly notifications: IGamificationNotificationRepository,
        private readonly creditXp: CreditXpUseCase,
    ) {}

    async execute(accountId: string, at: Date): Promise<ReadonlyArray<UnlockedTierResult>> {
        const { launch } = this.config;
        if (!gamificationGate(launch, at).open || launch.launchAt === null) return [];

        const unlockedNow: UnlockedTierResult[] = [];
        for (let pass = 0; pass < MAX_PASSES; pass++) {
            const [profile, snapshot, unlocked, best] = await Promise.all([
                this.profiles.findByAccountId(accountId),
                this.progress.getSnapshot(accountId),
                this.progress.listAchievements(accountId),
                this.cycleRanks.findBestRankForAccount(accountId),
            ]);
            const counters = countersFromProgress(snapshot, profile?.streak.best ?? 0, best?.rank ?? null);
            const founder: FounderContext | null = profile ? { level: profile.levelPeak, at, launchAt: launch.launchAt } : null;
            const unlocks = evaluateAchievements(counters, unlocked, founder);
            if (unlocks.length === 0) break;

            let leveledUp = false;
            for (const unlock of unlocks) {
                const inserted = await this.progress.unlockAchievement({
                    accountId,
                    achievementId: unlock.achievementId,
                    tier: unlock.tier,
                    unlockedAt: at,
                    context: {},
                });
                if (!inserted) continue;
                await this.notifications.create(
                    accountId,
                    { kind: 'achievement', achievementId: unlock.achievementId, tier: unlock.tier },
                    at,
                );
                unlockedNow.push({ achievementId: unlock.achievementId, tier: unlock.tier, xp: unlock.xp });
                if (unlock.xp <= 0) continue;
                const credit = await this.creditXp.execute({
                    actor: { kind: 'account', accountId },
                    source: 'achievement',
                    refKey: refKeys.achievement(accountId, unlock.achievementId, unlock.tier),
                    occurredAt: at,
                    requestedXp: unlock.xp,
                    metadata: { achievementId: unlock.achievementId, tier: unlock.tier },
                });
                if (credit.status === 'credited' && credit.leveledUp) leveledUp = true;
            }
            if (!leveledUp) break;
        }
        return unlockedNow;
    }
}

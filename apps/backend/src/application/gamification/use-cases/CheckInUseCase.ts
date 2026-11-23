import { inject, injectable } from 'tsyringe';

import { ONBOARDING_STREAK_DAYS } from '@chiliztv/domain/gamification/catalog/constants';
import { multiplierAt } from '@chiliztv/domain/gamification/policies/doubleXpPolicy';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { parisDayOf } from '@chiliztv/domain/gamification/policies/parisDay';
import { applyCheckIn, EMPTY_STREAK } from '@chiliztv/domain/gamification/policies/streakPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import type { IRateLimitService } from '@chiliztv/domain/shared/ports/IRateLimitService';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { CheckInRefusalReason, CheckInResultDto } from '@chiliztv/shared';

import { IsAccountBannedUseCase } from '../../identity/use-cases/IsAccountBannedUseCase';
import { GamificationAfterCredit } from '../services/GamificationAfterCredit';
import { EvaluateAchievementsUseCase } from './EvaluateAchievementsUseCase';
import { RecordProfileStepUseCase } from './RecordProfileStepUseCase';

/** One processed call per account and minute (§3.3), independent of the HTTP kill switch. */
export const CHECK_IN_RATE_LIMIT = { bucket: 'gamification-check-in', limit: 1, windowSeconds: 60 } as const;

/**
 * Daily check-in (§3.3, §3.4, §3.5): the first call of the Paris day applies the streak with a
 * compare-and-set and credits the XP; later calls answer `already_checked_in`. A banned or
 * suspended account gets nothing and its streak does not move (the day counts as missed).
 */
@injectable()
export class CheckInUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IRateLimitService) private readonly rateLimit: IRateLimitService,
        @inject(TOKENS.IGamificationProfileRepository) private readonly profiles: IGamificationProfileRepository,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        @inject(TOKENS.IDoubleXpEventRepository) private readonly doubleXp: IDoubleXpEventRepository,
        @inject(TOKENS.IGamificationNotificationRepository)
        private readonly notifications: IGamificationNotificationRepository,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
        private readonly isAccountBanned: IsAccountBannedUseCase,
        private readonly afterCredit: GamificationAfterCredit,
        private readonly evaluateAchievements: EvaluateAchievementsUseCase,
        private readonly profileSteps: RecordProfileStepUseCase,
    ) {}

    async execute(accountId: string): Promise<CheckInResultDto> {
        const now = this.clock.now();
        const day = parisDayOf(now);
        const refuse = (reason: CheckInRefusalReason): CheckInResultDto => ({ credited: false, day, reason });

        const gate = gamificationGate(this.config.launch, now);
        if (!gate.open) return refuse(gate.reason);

        const decision = await this.rateLimit.check({ ...CHECK_IN_RATE_LIMIT, identifier: accountId });
        if (!decision.allowed) return refuse('rate_limited');

        if (await this.isAccountBanned.execute(accountId, now)) return refuse('banned');
        const profile = await this.profiles.findByAccountId(accountId);
        if (profile?.suspendedAt) return refuse('suspended');

        const state = profile?.streak ?? EMPTY_STREAK;
        const outcome = applyCheckIn(state, day);
        if (!outcome.applied) return refuse('already_checked_in');

        const events = await this.doubleXp.listIntersecting(now, new Date(now.getTime() + 1));
        const applied = multiplierAt(events, 'check_in', now);
        const write = await this.ledger.checkIn({
            accountId,
            day,
            now,
            expectedLastDay: state.lastDay,
            streak: outcome.state,
            xp: outcome.xp,
            multiplier: applied.multiplier,
            doubleXpEventId: applied.eventId,
        });
        // Another tab won the compare-and-set.
        if (!write.applied) return refuse('already_checked_in');

        if (outcome.freezeUsed > 0) {
            await this.notifications.create(accountId, { kind: 'streak_freeze_used', freezesUsed: outcome.freezeUsed }, now);
        }
        if (outcome.freezeEarned) {
            await this.notifications.create(accountId, { kind: 'streak_freeze_earned', freezes: outcome.state.freezes }, now);
        }
        const leveledUp = await this.afterCredit.run(accountId, write, now);
        if (outcome.state.current >= ONBOARDING_STREAK_DAYS) await this.streakStepSafely(accountId, now);
        await this.evaluateSafely(accountId, now);

        return {
            credited: true,
            day,
            xp: write.creditedXp,
            multiplier: applied.multiplier,
            streak: outcome.state.current,
            freezeUsed: outcome.freezeUsed,
            freezeEarned: outcome.freezeEarned,
            level: write.newLevel,
            leveledUp,
        };
    }

    /** First step `streak3`; once per account, a failure never undoes the committed check-in. */
    private async streakStepSafely(accountId: string, at: Date): Promise<void> {
        try {
            await this.profileSteps.execute(accountId, 'streak3', at);
        } catch (error) {
            this.logger.warn('Streak first step failed', {
                accountId,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }

    /** The check-in is committed: a failed evaluation is retried by the next credit, not surfaced. */
    private async evaluateSafely(accountId: string, at: Date): Promise<void> {
        try {
            await this.evaluateAchievements.execute(accountId, at);
        } catch (error) {
            this.logger.warn('Achievement evaluation after check-in failed', {
                accountId,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
}

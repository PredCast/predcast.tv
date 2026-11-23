import { inject, injectable } from 'tsyringe';

import type { OnboardingStep } from '@chiliztv/domain/gamification/catalog/sources';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILogger } from '@chiliztv/domain/shared/ports/ILogger';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { RecordChatXpUseCase, type ChatXpCommand } from '../use-cases/RecordChatXpUseCase';
import { RecordFollowXpUseCase, type FollowXpCommand } from '../use-cases/RecordFollowXpUseCase';
import { RecordProfileStepUseCase } from '../use-cases/RecordProfileStepUseCase';

/**
 * Synchronous XP hooks of other features (chat send, follow, profile). A gamification failure
 * never fails the host action: it is logged as a warning and the credit is lost (§3.1 rule 9).
 */
@injectable()
export class GamificationActivityRecorder {
    constructor(
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.ILogger) private readonly logger: ILogger,
        private readonly chatXp: RecordChatXpUseCase,
        private readonly followXp: RecordFollowXpUseCase,
        private readonly profileSteps: RecordProfileStepUseCase,
    ) {}

    chatMessageSent(cmd: ChatXpCommand): Promise<void> {
        return this.safely('chat', cmd.accountId, () => this.chatXp.execute(cmd));
    }

    streamerFollowed(cmd: FollowXpCommand): Promise<void> {
        return this.safely('follow', cmd.accountId, () => this.followXp.execute(cmd));
    }

    async profileUpdated(accountId: string, profile: { readonly username: string | null; readonly avatarUrl: string | null }): Promise<void> {
        const steps: OnboardingStep[] = [];
        if (profile.username) steps.push('username');
        if (profile.avatarUrl) steps.push('avatar');
        for (const step of steps) {
            await this.safely(`onboarding:${step}`, accountId, () => this.profileSteps.execute(accountId, step, this.clock.now()));
        }
    }

    private async safely(source: string, accountId: string, run: () => Promise<unknown>): Promise<void> {
        try {
            await run();
        } catch (error) {
            this.logger.warn('Gamification credit failed', {
                source,
                accountId,
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }
}

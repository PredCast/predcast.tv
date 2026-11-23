import { inject, injectable } from 'tsyringe';

import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { SOURCE_RULES } from '@chiliztv/domain/gamification/catalog/sources';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { AchievementRefresh } from '../services/AchievementRefresh';
import { CreditXpUseCase, type CreditXpOutcome } from './CreditXpUseCase';
import { RecordProfileStepUseCase } from './RecordProfileStepUseCase';

export interface FollowXpCommand {
    readonly accountId: string;
    /** Dynamic user id of the follower, from the JWT. */
    readonly followerDynamicUserId: string;
    /** `streamer_follows.streamer_id`: the streamer's Dynamic user id. */
    readonly streamerId: string;
}

export type FollowXpOutcome =
    | CreditXpOutcome
    | { readonly status: 'rejected'; readonly reason: 'self_follow' }
    | { readonly status: 'closed' };

/** Follow XP (§3.3 `follow`): 5 XP once per (account, streamer) for life, never for oneself. */
@injectable()
export class RecordFollowXpUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        private readonly creditXp: CreditXpUseCase,
        private readonly profileSteps: RecordProfileStepUseCase,
        private readonly achievements: AchievementRefresh,
    ) {}

    async execute(cmd: FollowXpCommand): Promise<FollowXpOutcome> {
        const now = this.clock.now();
        if (!gamificationGate(this.config.launch, now).open) return { status: 'closed' };
        if (cmd.streamerId === cmd.followerDynamicUserId) return { status: 'rejected', reason: 'self_follow' };

        const refKey = refKeys.follow(cmd.accountId, cmd.streamerId);
        // Unfollow then follow again never re-credits: skip the ban checks of a known key.
        if (await this.ledger.findByRefKey(refKey)) return { status: 'duplicate', accountId: cmd.accountId };

        const outcome = await this.creditXp.execute({
            actor: { kind: 'account', accountId: cmd.accountId },
            source: 'follow',
            refKey,
            occurredAt: now,
            requestedXp: SOURCE_RULES.follow.xp ?? 0,
            metadata: { streamerId: cmd.streamerId },
            progress: [{ metric: 'streamers_followed', item: cmd.streamerId }],
        });
        if (outcome.status === 'credited' && outcome.reason === null) {
            await this.profileSteps.execute(cmd.accountId, 'follow', now);
            await this.achievements.run(cmd.accountId, now, 'follow');
        }
        return outcome;
    }
}

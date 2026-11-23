import { inject, injectable } from 'tsyringe';

import { CHAT_REMOVAL_OVERLAP_MINUTES } from '@chiliztv/domain/gamification/catalog/constants';
import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { isReversibleCredit } from '@chiliztv/domain/gamification/policies/reversalPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IGamificationEventSource } from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { GamificationAfterCredit } from '../../services/GamificationAfterCredit';
import type { ChainStepResult } from './ChainStepResult';

const BATCH_SIZE = 500;
const MAX_BATCHES_PER_RUN = 10;

/**
 * Chat messages removed by moderation (`chat_messages.removed_at`): the `chat:{messageId}` credit
 * is reversed (§3.3, §10.2). `stop_stream` reversals arrive with the streamer sources (step 05).
 * A purged match deletes its chat without reversal (D9): the synchronous credit stays.
 */
@injectable()
export class ProcessModerationReversalsUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IGamificationCursorRepository) private readonly cursors: IGamificationCursorRepository,
        @inject(TOKENS.IGamificationEventSource) private readonly source: IGamificationEventSource,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        private readonly afterCredit: GamificationAfterCredit,
    ) {}

    async execute(now: Date): Promise<ChainStepResult> {
        const stored = await this.cursors.get('chat_removals');
        const storedAt = stored ? new Date(stored.removedAt) : null;
        let after = storedAt
            ? new Date(storedAt.getTime() - CHAT_REMOVAL_OVERLAP_MINUTES * 60_000)
            : this.config.launch.launchAt ?? new Date(0);
        let last = storedAt;
        let processed = 0;
        try {
            for (let batch = 0; batch < MAX_BATCHES_PER_RUN; batch++) {
                const removals = await this.source.listChatRemovalsAfter(after, BATCH_SIZE);
                if (removals.length === 0) break;
                for (const removal of removals) {
                    const entry = await this.ledger.findByRefKey(refKeys.chat(removal.messageId));
                    if (entry && isReversibleCredit(entry)) {
                        const result = await this.ledger.reverse(entry.refKey, 'message_removed', removal.removedAt);
                        if (result.reversed) await this.afterCredit.invalidate(entry.accountId);
                    }
                    after = removal.removedAt;
                    if (last === null || removal.removedAt > last) last = removal.removedAt;
                    processed += 1;
                }
                if (removals.length < BATCH_SIZE) break;
            }
        } finally {
            if (last !== null && (storedAt === null || last > storedAt)) {
                await this.cursors.set('chat_removals', { removedAt: last.toISOString() }, now);
            }
        }
        // Reversals never unlock anything: no account to re-evaluate.
        return { processed, touched: new Set() };
    }
}

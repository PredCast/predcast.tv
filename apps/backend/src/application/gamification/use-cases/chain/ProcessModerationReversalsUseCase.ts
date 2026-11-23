import { inject, injectable } from 'tsyringe';

import { CHAT_REMOVAL_OVERLAP_MINUTES, STREAM_MODERATION_OVERLAP_MINUTES } from '@chiliztv/domain/gamification/catalog/constants';
import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { isReversibleCredit } from '@chiliztv/domain/gamification/policies/reversalPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IGamificationEventSource } from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IStreamSessionRepository } from '@chiliztv/domain/gamification/repositories/IStreamSessionRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { GamificationAfterCredit } from '../../services/GamificationAfterCredit';
import type { ChainStepResult } from './ChainStepResult';

const BATCH_SIZE = 500;
const MAX_BATCHES_PER_RUN = 10;

/** Time-ordered moderation events read with an overlapping cursor; `ref_key` dedups the replay. */
interface TimedScan<T> {
    readonly stored: Date | null;
    readonly overlapMinutes: number;
    readonly list: (after: Date, limit: number) => Promise<ReadonlyArray<T>>;
    readonly timeOf: (item: T) => Date;
    readonly handle: (item: T) => Promise<void>;
    readonly save: (last: Date) => Promise<void>;
}

/**
 * Moderation reversals (§10.2): a chat message removed by moderation reverses `chat:{messageId}`;
 * a `stop_stream` action on a session sets `moderated_at`, removes its minutes from
 * `stream_minutes` and reverses every `stream_time` credit of the session. A purged match deletes
 * its chat without reversal (D9): the synchronous credit stays.
 */
@injectable()
export class ProcessModerationReversalsUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IGamificationCursorRepository) private readonly cursors: IGamificationCursorRepository,
        @inject(TOKENS.IGamificationEventSource) private readonly source: IGamificationEventSource,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        @inject(TOKENS.IStreamSessionRepository) private readonly sessions: IStreamSessionRepository,
        private readonly afterCredit: GamificationAfterCredit,
    ) {}

    async execute(now: Date): Promise<ChainStepResult> {
        const chat = await this.cursors.get('chat_removals');
        const chatRemovals = await this.scan({
            stored: chat ? new Date(chat.removedAt) : null,
            overlapMinutes: CHAT_REMOVAL_OVERLAP_MINUTES,
            list: (after, limit) => this.source.listChatRemovalsAfter(after, limit),
            timeOf: (r) => r.removedAt,
            handle: async (r) => {
                const entry = await this.ledger.findByRefKey(refKeys.chat(r.messageId));
                if (!entry || !isReversibleCredit(entry)) return;
                const result = await this.ledger.reverse(entry.refKey, 'message_removed', r.removedAt);
                if (result.reversed) await this.afterCredit.invalidate(entry.accountId);
            },
            save: (last) => this.cursors.set('chat_removals', { removedAt: last.toISOString() }, now),
        });

        const streams = await this.cursors.get('stream_moderation');
        const streamStops = await this.scan({
            stored: streams ? new Date(streams.triggeredAt) : null,
            overlapMinutes: STREAM_MODERATION_OVERLAP_MINUTES,
            list: (after, limit) => this.source.listStopStreamActionsAfter(after, limit),
            timeOf: (a) => a.triggeredAt,
            handle: (a) => this.stopSession(a.streamId, a.triggeredAt),
            save: (last) => this.cursors.set('stream_moderation', { triggeredAt: last.toISOString() }, now),
        });

        // Reversals never unlock anything: no account to re-evaluate.
        return { processed: chatRemovals + streamStops, touched: new Set() };
    }

    /** Re-read within the overlap, so credits written while the action was processed are reversed too. */
    private async stopSession(streamId: string, at: Date): Promise<void> {
        const session = await this.sessions.findById(streamId);
        if (!session) return;
        await this.sessions.markModerated(streamId, at);
        const refs = await this.ledger.listReversibleByStream(streamId);
        for (const refKey of refs) await this.ledger.reverse(refKey, 'stream_stopped', at);
        if (session.accountId !== null) await this.afterCredit.invalidate(session.accountId);
    }

    private async scan<T>(s: TimedScan<T>): Promise<number> {
        let after = s.stored
            ? new Date(s.stored.getTime() - s.overlapMinutes * 60_000)
            : this.config.launch.launchAt ?? new Date(0);
        let last = s.stored;
        let processed = 0;
        try {
            for (let batch = 0; batch < MAX_BATCHES_PER_RUN; batch++) {
                const items = await s.list(after, BATCH_SIZE);
                if (items.length === 0) break;
                for (const item of items) {
                    await s.handle(item);
                    after = s.timeOf(item);
                    if (last === null || after > last) last = after;
                    processed += 1;
                }
                if (items.length < BATCH_SIZE) break;
            }
        } finally {
            if (last !== null && (s.stored === null || last > s.stored)) await s.save(last);
        }
        return processed;
    }
}

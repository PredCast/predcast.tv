import { inject, injectable } from 'tsyringe';

import type { MessageType } from '@chiliztv/domain/chat/entities/ChatMessage';
import { CHAT_PROGRESS_DAILY_CAP } from '@chiliztv/domain/gamification/catalog/constants';
import { refKeys } from '@chiliztv/domain/gamification/catalog/refKeys';
import { SOURCE_RULES } from '@chiliztv/domain/gamification/catalog/sources';
import { evaluateChatMessage, type ChatRejection, type LastCreditedChat } from '@chiliztv/domain/gamification/policies/chatPolicy';
import { gamificationGate } from '@chiliztv/domain/gamification/policies/launchPolicy';
import { progressUndo } from '@chiliztv/domain/gamification/policies/reversalPolicy';
import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { ITextHasher } from '@chiliztv/domain/gamification/ports/ITextHasher';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { AchievementRefresh } from '../services/AchievementRefresh';
import { CreditXpUseCase, type CreditXpOutcome } from './CreditXpUseCase';
import { RecordProfileStepUseCase } from './RecordProfileStepUseCase';

export interface ChatXpCommand {
    readonly accountId: string;
    readonly messageId: string;
    readonly matchId: number;
    readonly messageType: MessageType;
    readonly text: string;
}

export type ChatXpOutcome =
    | CreditXpOutcome
    | { readonly status: 'rejected'; readonly reason: ChatRejection }
    | { readonly status: 'closed' };

/**
 * Chat XP (§3.3 `chat_message`): a valid message earns 1 XP (5 per day) and `chat_messages`
 * progress (50 per day). Only the hash of the normalised text is stored, never the text.
 */
@injectable()
export class RecordChatXpUseCase {
    constructor(
        @inject(TOKENS.IGamificationConfig) private readonly config: IGamificationConfig,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.IGamificationLedgerRepository) private readonly ledger: IGamificationLedgerRepository,
        @inject(TOKENS.ITextHasher) private readonly hasher: ITextHasher,
        private readonly creditXp: CreditXpUseCase,
        private readonly profileSteps: RecordProfileStepUseCase,
        private readonly achievements: AchievementRefresh,
    ) {}

    async execute(cmd: ChatXpCommand): Promise<ChatXpOutcome> {
        const now = this.clock.now();
        if (!gamificationGate(this.config.launch, now).open) return { status: 'closed' };

        const last = await this.ledger.findLastCredited(cmd.accountId, 'chat_message');
        const lastHash = last?.metadata.textHash;
        const lastCredited: LastCreditedChat | null =
            last && typeof lastHash === 'string' ? { textHash: lastHash, createdAt: last.occurredAt } : null;
        const evaluation = evaluateChatMessage(
            { messageType: cmd.messageType, text: cmd.text, createdAt: now },
            lastCredited,
            this.hasher,
        );
        if (!evaluation.valid) return { status: 'rejected', reason: evaluation.reason };

        const outcome = await this.creditXp.execute({
            actor: { kind: 'account', accountId: cmd.accountId },
            source: 'chat_message',
            refKey: refKeys.chat(cmd.messageId),
            occurredAt: now,
            requestedXp: SOURCE_RULES.chat_message.xp ?? 0,
            metadata: { textHash: evaluation.textHash, matchId: cmd.matchId, progressUndo: progressUndo('chat_messages', 1) },
            progress: [{ metric: 'chat_messages', delta: 1, dailyCap: CHAT_PROGRESS_DAILY_CAP }],
        });
        if (outcome.status === 'credited' && outcome.reason === null) {
            await this.profileSteps.execute(cmd.accountId, 'chat', now);
            await this.achievements.run(cmd.accountId, now, 'chat');
        }
        return outcome;
    }
}

import { inject, injectable } from 'tsyringe';

import type { IChatRepository } from '@chiliztv/domain/chat/repositories/IChatRepository';
import type { IModerationNotifier } from '@chiliztv/domain/reporting/ports/IModerationNotifier';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { logger } from '../../../infrastructure/logging/logger';

/**
 * Moderation soft-delete — content is never physically removed; the row gets
 * removed_at + the triggering action id. Re-runs are no-ops (DB guard).
 */
@injectable()
export class SoftDeleteMessageUseCase {
  constructor(
    @inject(TOKENS.IChatRepository) private readonly chat: IChatRepository,
    @inject(TOKENS.IModerationNotifier) private readonly notifier: IModerationNotifier,
    @inject(TOKENS.IClock) private readonly clock: IClock,
  ) {}

  async execute(messageId: string, actionId: string): Promise<void> {
    const result = await this.chat.softDeleteMessage(messageId, actionId, this.clock.now());
    if (!result) {
      logger.info('Soft-delete no-op (message missing or already removed)', { messageId, actionId });
      return;
    }
    await this.notifier.pushSystemMessage(result.matchId, 'MESSAGE_REMOVED', { messageId });
    logger.info('report.action soft_delete_message applied', { messageId, actionId, matchId: result.matchId });
  }
}

import { inject, injectable } from 'tsyringe';

import type { Ban } from '@chiliztv/domain/reporting/entities/Ban';
import type { IModerationNotifier, ModerationSystemMessage } from '@chiliztv/domain/reporting/ports/IModerationNotifier';
import { ChatMessage, MessageType } from '@chiliztv/domain/chat/entities/ChatMessage';
import type { IChatRepository } from '@chiliztv/domain/chat/repositories/IChatRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { supabaseClient as supabase } from '../database/supabase/client';
import { logger } from '../logging/logger';
import { banChannelName } from '../../shared/constants/moderation.constants';

const SYSTEM_USER = 'system';

const SYSTEM_COPY: Record<ModerationSystemMessage, string> = {
  MESSAGE_REMOVED: 'A message was removed by community moderation',
  STREAM_STOPPED: 'This stream was stopped by community moderation',
};

/**
 * Realtime kick + in-chat system messages. Broadcasts go through the
 * Supabase Realtime HTTP endpoint (`channel.send` on an unjoined channel) —
 * fire-and-forget: a failed kick is cosmetic, enforcement is server-side
 * and the frontend falls back to polling `GET /bans/me` on focus.
 */
@injectable()
export class SupabaseModerationNotifier implements IModerationNotifier {
  constructor(
    @inject(TOKENS.IChatRepository)
    private readonly chat: IChatRepository,
  ) {}

  async notifyBanned(walletAddress: string, ban: Ban): Promise<void> {
    await this.broadcast(walletAddress, 'banned', {
      expiresAt: ban.props.expiresAt?.toISOString() ?? null,
      escalationIndex: ban.props.escalationIndex,
    });
  }

  async notifyBanLifted(walletAddress: string): Promise<void> {
    await this.broadcast(walletAddress, 'lifted', {});
  }

  async pushSystemMessage(
    matchId: number,
    type: ModerationSystemMessage,
    payload: Record<string, unknown>,
  ): Promise<void> {
    try {
      const message = ChatMessage.create({
        matchId,
        userId: SYSTEM_USER,
        walletAddress: SYSTEM_USER,
        username: SYSTEM_USER,
        message: SYSTEM_COPY[type],
        type: MessageType.SYSTEM,
        systemType: type.toLowerCase(),
        isFeatured: false,
      });
      void payload; // context lives in report_actions; chat shows the human copy
      await this.chat.saveMessage(message);
    } catch (err) {
      // Non-blocking by design: the moderation action itself already landed.
      logger.warn('Failed to push moderation system message', {
        matchId,
        type,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  private async broadcast(
    walletAddress: string,
    event: 'banned' | 'lifted',
    payload: Record<string, unknown>,
  ): Promise<void> {
    const channelName = banChannelName(walletAddress);
    try {
      const channel = supabase.channel(channelName);
      // send() on an unjoined channel goes through the Realtime HTTP API.
      await channel.send({ type: 'broadcast', event, payload });
      await supabase.removeChannel(channel);
      logger.info('Moderation broadcast sent', { channel: channelName, event });
    } catch (err) {
      logger.warn('Moderation broadcast failed (clients will fall back to polling)', {
        channel: channelName,
        event,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
}

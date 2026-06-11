import { inject, injectable } from 'tsyringe';

import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import type { IModerationNotifier } from '@chiliztv/domain/reporting/ports/IModerationNotifier';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { EndStreamUseCase } from '../../streams/use-cases/EndStreamUseCase';
import { logger } from '../../../infrastructure/logging/logger';

/**
 * Moderation stop — delegates the lifecycle (status=ended + CF live input
 * deletion) to the existing EndStreamUseCase, then announces it in the match
 * chat. The viewer-side kill is already handled by the Realtime subscription
 * on live_streams (players destroy HLS when status flips to ended).
 */
@injectable()
export class StopStreamUseCase {
  constructor(
    @inject(TOKENS.IStreamRepository) private readonly streams: IStreamRepository,
    @inject(TOKENS.IModerationNotifier) private readonly notifier: IModerationNotifier,
    private readonly endStream: EndStreamUseCase,
  ) {}

  /** Returns the stream's matchId, or null when the stream was not found. */
  async execute(streamId: string): Promise<{ matchId: number } | null> {
    const stream = await this.streams.findById(streamId);
    if (!stream) {
      logger.info('Stop-stream no-op (stream not found)', { streamId });
      return null;
    }
    const { matchId } = stream.toJSON() as { matchId: number };

    await this.endStream.execute({ streamId });
    await this.notifier.pushSystemMessage(matchId, 'STREAM_STOPPED', { streamId });
    logger.info('report.action stop_stream applied', { streamId, matchId });
    return { matchId };
  }
}

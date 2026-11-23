import type { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { AccountRequiredError } from '@chiliztv/domain/identity/errors/AccountRequiredError';
import { ValidationError } from '@chiliztv/domain/shared/errors/ValidationError';
import { WatchHeartbeatRequestSchema, WatchHeartbeatResultDtoSchema } from '@chiliztv/shared';

import { RecordWatchHeartbeatUseCase } from '../../../application/gamification/use-cases/RecordWatchHeartbeatUseCase';

@injectable()
export class GamificationWatchController {
  constructor(private readonly heartbeat: RecordWatchHeartbeatUseCase) {}

  /** POST /gamification/watch-heartbeat — always 200; a minute not counted is `counted: false` with a reason. */
  async postWatchHeartbeat(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const accountId = req.user?.accountId;
      if (!accountId) throw new AccountRequiredError();
      const body = WatchHeartbeatRequestSchema.safeParse(req.body);
      if (!body.success) throw new ValidationError('Invalid watch heartbeat', body.error.flatten());
      const result = await this.heartbeat.execute({
        accountId,
        matchId: body.data.matchId,
        streamId: body.data.streamId ?? null,
      });
      res.json(WatchHeartbeatResultDtoSchema.parse(result));
    } catch (error) {
      next(error);
    }
  }
}

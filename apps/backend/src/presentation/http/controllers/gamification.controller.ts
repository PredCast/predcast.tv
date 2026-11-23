import type { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { AccountRequiredError } from '@chiliztv/domain/identity/errors/AccountRequiredError';
import { CheckInResultDtoSchema } from '@chiliztv/shared';

import { CheckInUseCase } from '../../../application/gamification/use-cases/CheckInUseCase';

@injectable()
export class GamificationController {
  constructor(private readonly checkIn: CheckInUseCase) {}

  /** POST /gamification/check-in — always 200; a refusal is `credited: false` with a reason. */
  async postCheckIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const accountId = req.user?.accountId;
      if (!accountId) throw new AccountRequiredError();
      const result = await this.checkIn.execute(accountId);
      res.json(CheckInResultDtoSchema.parse(result));
    } catch (error) {
      next(error);
    }
  }
}

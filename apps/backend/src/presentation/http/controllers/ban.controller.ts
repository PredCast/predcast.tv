import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';

import type { IBanRepository } from '@chiliztv/domain/reporting/repositories/IBanRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { UnauthorizedError } from '@chiliztv/domain/shared/errors/UnauthorizedError';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

@injectable()
export class BanController {
  constructor(
    @inject(TOKENS.IBanRepository)
    private readonly bans: IBanRepository,
    @inject(TOKENS.IClock)
    private readonly clock: IClock,
  ) {}

  /** Always 200 — `ban: null` when the caller is clean (never a 404). */
  async myBan(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const wallet = req.user?.walletAddress;
      if (!wallet) throw new UnauthorizedError('Wallet identity required');

      const ban = await this.bans.findActiveBan(wallet.toLowerCase(), this.clock.now());

      res.json({
        success: true,
        ban: ban
          ? {
              id: ban.props.id,
              status: ban.props.status,
              startsAt: ban.props.startsAt.toISOString(),
              expiresAt: ban.props.expiresAt?.toISOString() ?? null,
              escalationIndex: ban.props.escalationIndex,
            }
          : null,
      });
    } catch (error) {
      next(error);
    }
  }
}

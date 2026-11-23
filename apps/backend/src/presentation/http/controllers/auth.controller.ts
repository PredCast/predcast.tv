import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { UnauthorizedError } from '@chiliztv/domain/shared/errors/UnauthorizedError';

import { ExchangeDynamicTokenUseCase } from '../../../application/auth/use-cases/ExchangeDynamicTokenUseCase';
import type { JwtPayload } from '../../../application/auth/types/JwtPayload';
import { env } from '../../../infrastructure/config/environment';
import { jwtConfig } from '../../../infrastructure/config/jwt.config';
import { logger } from '../../../infrastructure/logging/logger';

@injectable()
export class AuthController {
  constructor(
    @inject(ExchangeDynamicTokenUseCase) private readonly exchange: ExchangeDynamicTokenUseCase,
  ) {}

  /**
   * POST /auth/token. With a valid `dynamicJwt` the JWT carries `accountId` (wallet proven);
   * without it the legacy unproven token is issued, unless AUTH_REQUIRE_DYNAMIC_JWT is on.
   */
  async generateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, walletAddress, dynamicJwt } = req.body as { email?: string; walletAddress?: string; dynamicJwt?: string };
      if (!walletAddress) {
        next(new UnauthorizedError('Wallet address is required'));
        return;
      }

      const identity = await this.exchange.execute(
        { walletAddress, dynamicJwt },
        { requireDynamicJwt: env.AUTH_REQUIRE_DYNAMIC_JWT },
      );
      const payload: JwtPayload = {
        email: email ?? null,
        walletAddress: identity.walletAddress,
        role: 'USER',
        ...(identity.proven ? { accountId: identity.accountId, dynamicUserId: identity.dynamicUserId } : {}),
      };

      const token = jwt.sign(payload, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
        issuer: jwtConfig.issuer,
        algorithm: jwtConfig.algorithm,
      });

      logger.info('JWT token generated', { walletAddress: identity.walletAddress, proven: identity.proven });

      res.json({
        success: true,
        token,
        expiresIn: jwtConfig.expiresIn,
        user: { email: email ?? null, walletAddress: identity.walletAddress, accountLinked: identity.proven },
      });
    } catch (error) {
      next(error);
    }
  }
}

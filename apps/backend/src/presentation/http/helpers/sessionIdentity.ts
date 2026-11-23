import type { Request } from 'express';

import { AccountRequiredError } from '@chiliztv/domain/identity/errors/AccountRequiredError';
import { UnauthorizedError } from '@chiliztv/domain/shared/errors/UnauthorizedError';

import { env } from '../../../infrastructure/config/environment';
import { logger } from '../../../infrastructure/logging/logger';

/**
 * Dynamic user id of the caller, taken from the JWT (D3). While AUTH_REQUIRE_DYNAMIC_JWT is off,
 * a legacy token (no proof) falls back to the id the client sent, so an un-upgraded front keeps working.
 */
export function sessionDynamicUserId(req: Request, legacyClaimed: unknown): string {
  if (!req.user) throw new UnauthorizedError('Missing authentication');
  if (req.user.dynamicUserId) return req.user.dynamicUserId;
  if (env.AUTH_REQUIRE_DYNAMIC_JWT || typeof legacyClaimed !== 'string' || legacyClaimed.length === 0) {
    throw new AccountRequiredError();
  }
  logger.warn('Legacy session: identity taken from the request body', { path: req.path, walletAddress: req.user.walletAddress });
  return legacyClaimed;
}

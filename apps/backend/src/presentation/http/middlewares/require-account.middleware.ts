import type { NextFunction, Request, Response } from 'express';

import { AccountRequiredError } from '@chiliztv/domain/identity/errors/AccountRequiredError';
import { UnauthorizedError } from '@chiliztv/domain/shared/errors/UnauthorizedError';

/** After `authenticate`: 401 ACCOUNT_REQUIRED when the JWT carries no `accountId` (the front re-exchanges). */
export function requireAccount(req: Request, _res: Response, next: NextFunction): void {
  if (!req.user) return next(new UnauthorizedError('Missing authentication'));
  if (!req.user.accountId) return next(new AccountRequiredError());
  next();
}

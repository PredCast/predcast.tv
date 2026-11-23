import { DomainError } from '../../shared/errors/DomainError';

/** 401 `ACCOUNT_REQUIRED`: the session JWT was issued without a Dynamic proof (no `accountId`). */
export class AccountRequiredError extends DomainError {
    constructor() {
        super('An account-linked session is required', 'ACCOUNT_REQUIRED', 401);
    }
}

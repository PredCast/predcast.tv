import { DomainError } from '../../shared/errors/DomainError';
import type { CosmeticsError } from '../policies/cosmetics';

export type CosmeticsErrorCode = 'COSMETIC_NOT_OWNED' | 'SHOWCASE_TOO_LONG' | 'SHOWCASE_DUPLICATE';

function codeOf(error: CosmeticsError): CosmeticsErrorCode {
    switch (error.code) {
        case 'SHOWCASE_TOO_LONG': return 'SHOWCASE_TOO_LONG';
        case 'SHOWCASE_DUPLICATE': return 'SHOWCASE_DUPLICATE';
        default: return 'COSMETIC_NOT_OWNED';
    }
}

/** 422 for a `PUT /gamification/me/cosmetics` refused by `validateCosmetics` (CA16); `details` keeps the rule. */
export class CosmeticsRejectedError extends DomainError {
    constructor(public readonly rule: CosmeticsError) {
        super(`Cosmetics refused: ${rule.code}`, codeOf(rule), 422, rule);
    }
}

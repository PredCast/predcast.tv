import type { DoubleXpValidationError } from '@chiliztv/domain/gamification/policies/doubleXpPolicy';
import { BusinessRuleError } from '@chiliztv/domain/shared/errors/BusinessRuleError';
import { ConflictError } from '@chiliztv/domain/shared/errors/ConflictError';
import type { DomainError } from '@chiliztv/domain/shared/errors/DomainError';
import { ValidationError } from '@chiliztv/domain/shared/errors/ValidationError';

const MESSAGES: Readonly<Record<Exclude<DoubleXpValidationError, 'overlap' | 'disabled'>, [string, string]>> = {
    invalid_multiplier: ['DOUBLE_XP_INVALID', 'The multiplier must be 1.25, 1.5, 1.75 or 2'],
    empty_sources: ['DOUBLE_XP_INVALID', 'Pick at least one source'],
    ineligible_source: ['DOUBLE_XP_INELIGIBLE_SOURCE', 'Only check-in, watching, chat and streaming can be boosted'],
    invalid_window: ['DOUBLE_XP_INVALID', 'The event must end after it starts'],
    too_long: ['DOUBLE_XP_TOO_LONG', 'A double XP event lasts 72 hours at most'],
    notice_too_short: ['DOUBLE_XP_NOTICE', 'A double XP event must start at least 24 hours from now'],
    monthly_limit: ['DOUBLE_XP_MONTHLY_LIMIT', 'At most 4 double XP events per calendar month (Paris)'],
};

/** §3.6 guard → HTTP: 409 on overlap, 422 when the legal switch is off, 400 otherwise (§9.2). */
export function doubleXpValidationError(error: DoubleXpValidationError): DomainError {
    if (error === 'overlap') return new ConflictError('The event overlaps another double XP event', { code: 'DOUBLE_XP_OVERLAP' });
    if (error === 'disabled') return new BusinessRuleError('Double XP is switched off', { code: 'DOUBLE_XP_DISABLED' });
    const [code, message] = MESSAGES[error];
    return new ValidationError(message, { code, rule: error });
}

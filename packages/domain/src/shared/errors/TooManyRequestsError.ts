import { DomainError } from './DomainError';

export class TooManyRequestsError extends DomainError {
  constructor(message: string, details?: unknown) {
    super(message, 'TOO_MANY_REQUESTS', 429, details);
  }
}

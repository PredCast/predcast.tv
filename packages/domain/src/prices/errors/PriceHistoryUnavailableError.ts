import { DomainError } from '../../shared/errors/DomainError';

/** Upstream price history could not be fetched and no previous copy is cached. */
export class PriceHistoryUnavailableError extends DomainError {
    constructor(symbol: string, reason: 'rate_limited' | 'upstream_error') {
        super(`Price history for '${symbol}' is temporarily unavailable`, 'PRICE_HISTORY_UNAVAILABLE', 503, { symbol, reason });
    }
}

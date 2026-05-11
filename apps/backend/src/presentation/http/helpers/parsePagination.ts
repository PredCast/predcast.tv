import { Request } from 'express';

export interface ParsedPagination {
    readonly limit: number;
    readonly offset: number;
}

export interface ParsePaginationOptions {
    readonly defaultLimit?: number;
    readonly maxLimit?: number;
}

export const DEFAULT_PAGE_SIZE = 5;
export const MAX_PAGE_SIZE = 100;

/**
 * Clamps `limit` and `offset` from `req.query`. Default + max protect both
 * the DB and the front from accidental "fetch everything" calls.
 */
export function parsePagination(req: Request, options: ParsePaginationOptions = {}): ParsedPagination {
    const defaultLimit = options.defaultLimit ?? DEFAULT_PAGE_SIZE;
    const maxLimit = options.maxLimit ?? MAX_PAGE_SIZE;

    const rawLimit = Number(req.query.limit ?? defaultLimit);
    const rawOffset = Number(req.query.offset ?? 0);
    const limit = Math.min(maxLimit, Math.max(1, Number.isFinite(rawLimit) ? Math.floor(rawLimit) : defaultLimit));
    const offset = Math.max(0, Number.isFinite(rawOffset) ? Math.floor(rawOffset) : 0);

    return { limit, offset };
}

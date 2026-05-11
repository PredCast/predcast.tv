import { describe, expect, it } from 'vitest';
import type { Request } from 'express';
import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE, parsePagination } from '../parsePagination';

function mkReq(query: Record<string, string | undefined>): Request {
    return { query } as unknown as Request;
}

describe('parsePagination', () => {
    it('returns defaults when query has neither limit nor offset', () => {
        expect(parsePagination(mkReq({}))).toEqual({ limit: DEFAULT_PAGE_SIZE, offset: 0 });
    });

    it('reads positive integer limit + offset', () => {
        expect(parsePagination(mkReq({ limit: '10', offset: '20' }))).toEqual({ limit: 10, offset: 20 });
    });

    it('clamps limit to MAX_PAGE_SIZE when too high', () => {
        expect(parsePagination(mkReq({ limit: '9999' }))).toEqual({ limit: MAX_PAGE_SIZE, offset: 0 });
    });

    it('clamps limit to 1 when zero or negative', () => {
        expect(parsePagination(mkReq({ limit: '0' }))).toEqual({ limit: 1, offset: 0 });
        expect(parsePagination(mkReq({ limit: '-5' }))).toEqual({ limit: 1, offset: 0 });
    });

    it('clamps negative offset to 0', () => {
        expect(parsePagination(mkReq({ offset: '-100' }))).toEqual({ limit: DEFAULT_PAGE_SIZE, offset: 0 });
    });

    it('falls back to defaults for NaN-shaped inputs', () => {
        expect(parsePagination(mkReq({ limit: 'oops', offset: 'nope' }))).toEqual({ limit: DEFAULT_PAGE_SIZE, offset: 0 });
    });

    it('floors fractional values', () => {
        expect(parsePagination(mkReq({ limit: '5.7', offset: '12.4' }))).toEqual({ limit: 5, offset: 12 });
    });

    it('honors per-caller overrides for defaultLimit / maxLimit', () => {
        expect(parsePagination(mkReq({}), { defaultLimit: 50 })).toEqual({ limit: 50, offset: 0 });
        expect(parsePagination(mkReq({ limit: '500' }), { maxLimit: 200 })).toEqual({ limit: 200, offset: 0 });
    });
});

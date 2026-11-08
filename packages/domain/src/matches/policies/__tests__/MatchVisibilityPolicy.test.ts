import { describe, expect, it } from 'vitest';

import { canPublish, canStartStream, canUnpublish, isVisibleInApp } from '../MatchVisibilityPolicy';

const CONTRACT = '0x00000000000000000000000000000000000000aa';
const PUBLISHED_AT = new Date('2026-11-07T12:00:00Z');

describe('isVisibleInApp', () => {
    it('needs both a contract and a publication date', () => {
        expect(isVisibleInApp({ contractAddress: CONTRACT, publishedAt: PUBLISHED_AT })).toBe(true);
        expect(isVisibleInApp({ contractAddress: CONTRACT, publishedAt: '2026-11-07T12:00:00Z' })).toBe(true);
        expect(isVisibleInApp({ contractAddress: CONTRACT, publishedAt: null })).toBe(false);
        expect(isVisibleInApp({ contractAddress: null, publishedAt: PUBLISHED_AT })).toBe(false);
        expect(isVisibleInApp({ contractAddress: '', publishedAt: PUBLISHED_AT })).toBe(false);
    });
});

describe('canStartStream', () => {
    const visible = { contractAddress: CONTRACT, publishedAt: PUBLISHED_AT };

    it('allows a visible match that is upcoming or live', () => {
        expect(canStartStream({ ...visible, status: 'NS' })).toEqual({ ok: true });
        expect(canStartStream({ ...visible, status: '2H' })).toEqual({ ok: true });
    });

    it('refuses a match that is not visible or has finished', () => {
        expect(canStartStream({ ...visible, publishedAt: null, status: 'NS' })).toEqual({ ok: false, reason: 'NOT_VISIBLE' });
        expect(canStartStream({ contractAddress: null, publishedAt: null, status: 'NS' }))
            .toEqual({ ok: false, reason: 'NOT_VISIBLE' });
        expect(canStartStream({ ...visible, status: 'FT' })).toEqual({ ok: false, reason: 'FINISHED' });
    });
});

describe('canPublish / canUnpublish', () => {
    it('publishes a deployed, hidden match only', () => {
        expect(canPublish({ contractAddress: CONTRACT, publishedAt: null })).toEqual({ ok: true });
        expect(canPublish({ contractAddress: CONTRACT, publishedAt: PUBLISHED_AT })).toEqual({ ok: false, reason: 'ALREADY_PUBLISHED' });
        expect(canPublish({ contractAddress: null, publishedAt: null })).toEqual({ ok: false, reason: 'NOT_DEPLOYED' });
    });

    it('unpublishes a deployed, published match only', () => {
        expect(canUnpublish({ contractAddress: CONTRACT, publishedAt: PUBLISHED_AT })).toEqual({ ok: true });
        expect(canUnpublish({ contractAddress: CONTRACT, publishedAt: null })).toEqual({ ok: false, reason: 'ALREADY_UNPUBLISHED' });
        expect(canUnpublish({ contractAddress: null, publishedAt: PUBLISHED_AT })).toEqual({ ok: false, reason: 'NOT_DEPLOYED' });
    });
});

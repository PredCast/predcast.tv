import { describe, it, expect } from 'vitest';

import { banFixture } from '../ban.fixtures';

const NOW = new Date('2026-06-11T12:00:00.000Z');

describe('Ban.isActiveAt — time-derived enforcement', () => {
    it('active ban binds before its expiry', () => {
        const ban = banFixture.active();
        expect(ban.isActiveAt(NOW)).toBe(true);
        expect(ban.isActiveAt(new Date(NOW.getTime() + 23 * 3_600_000))).toBe(true);
    });

    it('active-status ban stops binding the second its expiry passes — no cron needed', () => {
        const ban = banFixture.active();
        const expiry = ban.props.expiresAt!;
        expect(ban.isActiveAt(new Date(expiry.getTime() + 1))).toBe(false);
    });

    it('expired fixture does not bind at NOW', () => {
        expect(banFixture.expired().isActiveAt(NOW)).toBe(false);
    });

    it('permanent ban binds forever', () => {
        const ban = banFixture.permanent();
        expect(ban.isPermanent()).toBe(true);
        expect(ban.isActiveAt(new Date('2030-01-01T00:00:00.000Z'))).toBe(true);
    });

    it('wallet is normalised to lowercase', () => {
        const ban = banFixture.active({ walletAddress: '0xABCDEF0000000000000000000000000000000001' });
        expect(ban.props.walletAddress).toBe('0xabcdef0000000000000000000000000000000001');
    });
});

import { describe, expect, it } from 'vitest';

import { accountEligibility, accountOwningWalletAt, type WalletLink } from '../policies/eligibilityPolicy';
import { founderWindowEnd, gamificationGate, isWithinFounderWindow } from '../policies/launchPolicy';

const LAUNCH = new Date('2027-01-01T00:00:00Z');

describe('gamificationGate', () => {
    it('stays closed when disabled, unconfigured or before the launch', () => {
        expect(gamificationGate({ enabled: false, launchAt: LAUNCH }, new Date('2027-02-01T00:00:00Z')))
            .toEqual({ open: false, reason: 'disabled' });
        expect(gamificationGate({ enabled: true, launchAt: null }, new Date('2027-02-01T00:00:00Z')))
            .toEqual({ open: false, reason: 'not_launched' });
        expect(gamificationGate({ enabled: true, launchAt: LAUNCH }, new Date('2026-12-31T23:59:59Z')))
            .toEqual({ open: false, reason: 'not_launched' });
    });

    it('opens at the launch instant', () => {
        expect(gamificationGate({ enabled: true, launchAt: LAUNCH }, LAUNCH)).toEqual({ open: true });
    });
});

describe('founder window', () => {
    it('lasts 60 days, end excluded', () => {
        expect(founderWindowEnd(LAUNCH).toISOString()).toBe('2027-03-02T00:00:00.000Z');
        expect(isWithinFounderWindow(LAUNCH, new Date('2027-03-01T23:59:59Z'))).toBe(true);
        expect(isWithinFounderWindow(LAUNCH, new Date('2027-03-02T00:00:00Z'))).toBe(false);
        expect(isWithinFounderWindow(LAUNCH, new Date('2026-12-31T00:00:00Z'))).toBe(false);
    });
});

describe('accountEligibility', () => {
    it('refuses a banned wallet first, then a suspended profile', () => {
        expect(accountEligibility({ anyLinkedWalletBanned: true, suspendedAt: LAUNCH })).toBe('banned');
        expect(accountEligibility({ anyLinkedWalletBanned: false, suspendedAt: LAUNCH })).toBe('suspended');
        expect(accountEligibility({ anyLinkedWalletBanned: false, suspendedAt: null })).toBe('eligible');
    });
});

describe('accountOwningWalletAt', () => {
    const links: ReadonlyArray<WalletLink> = [
        { walletAddress: '0xaaa', accountId: 'old', linkedAt: new Date('2027-01-01T00:00:00Z'), unlinkedAt: new Date('2027-02-01T00:00:00Z') },
        { walletAddress: '0xaaa', accountId: 'new', linkedAt: new Date('2027-02-01T00:00:00Z'), unlinkedAt: null },
    ];

    it('attributes an action to the owner at that instant', () => {
        expect(accountOwningWalletAt(links, '0xAAA', new Date('2027-01-15T00:00:00Z'))).toBe('old');
        expect(accountOwningWalletAt(links, '0xaaa', new Date('2027-02-01T00:00:00Z'))).toBe('new');
    });

    it('credits nobody before the first link or for an unknown wallet', () => {
        expect(accountOwningWalletAt(links, '0xaaa', new Date('2026-12-31T00:00:00Z'))).toBeNull();
        expect(accountOwningWalletAt(links, '0xbbb', new Date('2027-01-15T00:00:00Z'))).toBeNull();
    });
});

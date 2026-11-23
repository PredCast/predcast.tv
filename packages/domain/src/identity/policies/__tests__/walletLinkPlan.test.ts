import { describe, expect, it } from 'vitest';

import type { WalletLink } from '../../entities/Account';
import { ownerAt, planWalletLinks } from '../walletLinkPlan';

const T0 = new Date('2026-11-23T10:00:00Z');
const T1 = new Date('2026-11-24T10:00:00Z');
const link = (walletAddress: string, accountId: string, unlinkedAt: Date | null = null): WalletLink =>
    ({ walletAddress, accountId, linkedAt: T0, unlinkedAt });

describe('planWalletLinks (§8.6)', () => {
    it('adds a wallet that has no link yet', () => {
        expect(planWalletLinks('acc', ['0xA'], [], [])).toEqual({ link: ['0xa'], relink: [], conflicts: [], unlink: [] });
    });

    it('does nothing for a wallet already linked to the account', () => {
        const mine = link('0xa', 'acc');
        expect(planWalletLinks('acc', ['0xa'], [mine], [mine])).toEqual({ link: [], relink: [], conflicts: [], unlink: [] });
    });

    it('refuses to take a wallet actively linked to another account', () => {
        expect(planWalletLinks('acc', ['0xa'], [link('0xa', 'other')], []).conflicts).toEqual(['0xa']);
    });

    it('takes over a wallet whose previous link was closed', () => {
        expect(planWalletLinks('acc', ['0xa'], [link('0xa', 'other', T0)], []).relink).toEqual(['0xa']);
    });

    it('closes the account wallets that left the credentials', () => {
        const kept = link('0xa', 'acc');
        const gone = link('0xb', 'acc');
        expect(planWalletLinks('acc', ['0xa'], [kept], [kept, gone]).unlink).toEqual(['0xb']);
    });
});

describe('ownerAt (§3.1 rule 5)', () => {
    const links = [link('0xa', 'old', T1), { walletAddress: '0xa', accountId: 'new', linkedAt: T1, unlinkedAt: null }];

    it('returns the account that owned the wallet at that instant', () => {
        expect(ownerAt(links, '0xA', new Date('2026-11-23T12:00:00Z'))).toBe('old');
        expect(ownerAt(links, '0xa', T1)).toBe('new');
    });

    it('returns null before any link', () => {
        expect(ownerAt(links, '0xa', new Date('2026-11-01T00:00:00Z'))).toBeNull();
    });
});

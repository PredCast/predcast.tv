import { describe, expect, it } from 'vitest';

import { groupByOwningAccount } from '../policies/accountGrouping';
import type { WalletLink } from '../policies/eligibilityPolicy';
import { isReversibleCredit, progressUndo } from '../policies/reversalPolicy';
import { evaluateSupport } from '../policies/supportPolicy';
import { watchProgressReachesHour } from '../policies/watchPolicy';

const T0 = new Date('2027-03-01T10:00:00Z');
const at = (minutes: number) => new Date(T0.getTime() + minutes * 60_000);

describe('evaluateSupport', () => {
    const base = { amountUsdc: 1, supporterWallet: '0xa', streamerWallet: '0xb', supporterAccountId: 'fan', streamerAccountId: 'streamer' };

    it('accepts 1 USDC or more from another account', () => {
        expect(evaluateSupport(base)).toEqual({ eligible: true, accountId: 'fan' });
        expect(evaluateSupport({ ...base, streamerAccountId: null })).toEqual({ eligible: true, accountId: 'fan' });
    });

    it('refuses below 1 USDC, without account, and to oneself', () => {
        expect(evaluateSupport({ ...base, amountUsdc: 0.99 })).toEqual({ eligible: false, reason: 'below_minimum' });
        expect(evaluateSupport({ ...base, amountUsdc: Number.NaN })).toEqual({ eligible: false, reason: 'below_minimum' });
        expect(evaluateSupport({ ...base, supporterAccountId: null })).toEqual({ eligible: false, reason: 'no_account' });
        expect(evaluateSupport({ ...base, streamerAccountId: 'fan' })).toEqual({ eligible: false, reason: 'self_support' });
        expect(evaluateSupport({ ...base, streamerWallet: '0xA' })).toEqual({ eligible: false, reason: 'self_support' });
    });
});

describe('groupByOwningAccount', () => {
    const links: WalletLink[] = [
        { walletAddress: '0xa', accountId: 'acc-1', linkedAt: at(0), unlinkedAt: null },
        { walletAddress: '0xb', accountId: 'acc-1', linkedAt: at(10), unlinkedAt: null },
        { walletAddress: '0xc', accountId: 'acc-2', linkedAt: at(0), unlinkedAt: at(5) },
    ];
    const bet = (wallet: string, minute: number) => ({ wallet, at: at(minute) });

    it('merges linked wallets and drops actions outside the link window', () => {
        const groups = groupByOwningAccount(
            [bet('0xA', 1), bet('0xb', 5), bet('0xb', 11), bet('0xc', 2), bet('0xc', 6)],
            links,
            (b) => b.wallet,
            (b) => b.at,
        );
        expect([...groups.keys()].sort()).toEqual(['acc-1', 'acc-2']);
        expect(groups.get('acc-1')).toHaveLength(2);
        expect(groups.get('acc-2')).toEqual([bet('0xc', 2)]);
    });
});

describe('isReversibleCredit', () => {
    const row = { xp: 5, reason: null, reversesId: null, metadata: {} };

    it('reverses rows that moved XP or progress', () => {
        expect(isReversibleCredit(row)).toBe(true);
        expect(isReversibleCredit({ ...row, xp: 0, reason: 'daily_cap' as const, metadata: { progressUndo: progressUndo('bet_volume_usdc', 30) } })).toBe(true);
    });

    it('skips reversals, zero rows without progress and rows zeroed by a ban or a suspension', () => {
        expect(isReversibleCredit({ ...row, reversesId: 3 })).toBe(false);
        expect(isReversibleCredit({ ...row, xp: 0, reason: 'hedge' as const })).toBe(false);
        expect(isReversibleCredit({ ...row, xp: 0, reason: 'banned' as const, metadata: { progressUndo: progressUndo('chat_messages', 1) } })).toBe(false);
        expect(isReversibleCredit({ ...row, xp: 0, reason: 'suspended' as const })).toBe(false);
        expect(progressUndo('bet_volume_usdc', 0)).toEqual([]);
    });
});

describe('watchProgressReachesHour', () => {
    it('fires on each whole counted hour that moved', () => {
        expect(watchProgressReachesHour(60, true)).toBe(true);
        expect(watchProgressReachesHour(120, true)).toBe(true);
        expect(watchProgressReachesHour(61, true)).toBe(false);
        expect(watchProgressReachesHour(60, false)).toBe(false);
        expect(watchProgressReachesHour(0, true)).toBe(false);
    });
});

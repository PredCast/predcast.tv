import type { DoubleXpEvent } from '@chiliztv/domain/gamification/entities/DoubleXpEvent';
import type { DoubleXpSource } from '@chiliztv/domain/gamification/catalog/sources';
import type { StreakState } from '@chiliztv/domain/gamification/policies/streakPolicy';
import type { Account, WalletLink } from '@chiliztv/domain/identity/entities/Account';

/** Default instant: Monday 2027-03-01 10:00 in Paris (UTC+1). */
export const GAMI_NOW = new Date('2027-03-01T09:00:00.000Z');
/** Launch a month before GAMI_NOW. */
export const GAMI_LAUNCH_AT = new Date('2027-02-01T00:00:00.000Z');

let sequence = 0;
/** Deterministic UUID v4-shaped ids (accounts and events are UUID columns). */
const nextId = (): string => {
    sequence += 1;
    return `00000000-0000-4000-8000-${sequence.toString(16).padStart(12, '0')}`;
};

export function accountFixture(override: Partial<Account> = {}): Account {
    const id = override.id ?? nextId();
    return {
        id,
        dynamicUserId: `dyn-${id}`,
        primaryWallet: override.primaryWallet ?? `0x${id.replace(/-/g, '').padStart(40, 'a')}`,
        createdAt: GAMI_LAUNCH_AT,
        lastSeenAt: GAMI_NOW,
        ...override,
    };
}

export function linkedWalletFixture(account: Account, override: Partial<WalletLink> = {}): WalletLink {
    return {
        walletAddress: (override.walletAddress ?? account.primaryWallet ?? '0x' + 'b'.repeat(40)).toLowerCase(),
        accountId: account.id,
        linkedAt: GAMI_LAUNCH_AT,
        unlinkedAt: null,
        ...override,
    };
}

export function streakFixture(override: Partial<StreakState> = {}): StreakState {
    return { current: 0, lastDay: null, freezes: 0, ...override, best: Math.max(override.best ?? 0, override.current ?? 0) };
}

export function doubleXpEventFixture(override: Partial<DoubleXpEvent> = {}): DoubleXpEvent {
    const startsAt = override.startsAt ?? new Date(GAMI_NOW.getTime() - 3_600_000);
    return {
        id: override.id ?? nextId(),
        name: 'Matchday double XP',
        multiplier: 2,
        sources: ['check_in', 'watch', 'chat_message', 'stream_time'] satisfies DoubleXpSource[],
        startsAt,
        endsAt: new Date(startsAt.getTime() + 24 * 3_600_000),
        createdByWallet: '0x' + 'ad'.repeat(20),
        createdAt: new Date(startsAt.getTime() - 48 * 3_600_000),
        cancelledAt: null,
        cancelledByWallet: null,
        ...override,
    };
}

import type { DoubleXpEvent } from '@chiliztv/domain/gamification/entities/DoubleXpEvent';
import type { DoubleXpSource } from '@chiliztv/domain/gamification/catalog/sources';
import type { StreakState } from '@chiliztv/domain/gamification/policies/streakPolicy';
import type {
    IndexedBet,
    SettlementEvent,
    SupportEvent,
} from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
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

/** Chain fixtures (L1) of the chain processor. Decimals are a fixture value; prod reads them on-chain. */
export const FIXTURE_USDC_DECIMALS = 6;
export const FIXTURE_CHAIN_ID = 88882;
export const FIXTURE_CONTRACT = '0x' + 'c0'.repeat(20);

let betSequence = 0;

/** Raw units of a decimal USDC amount (cent precision). */
export function usdcRaw(amount: number, decimals: number = FIXTURE_USDC_DECIMALS): bigint {
    return (BigInt(Math.round(amount * 100)) * BigInt(10) ** BigInt(decimals)) / BigInt(100);
}

export interface BetRowFixtureInput {
    readonly stakeUsdc: number;
    readonly outcome: number;
    readonly wallet: string;
    readonly marketId?: number;
    readonly contract?: string;
    readonly at?: Date;
    readonly decimals?: number;
}

/** A `bets` row (PositionTaken); ids and blocks follow creation, i.e. chain order. */
export function betRowFixture(input: BetRowFixtureInput): IndexedBet {
    betSequence += 1;
    return {
        id: betSequence,
        txHash: `0x${betSequence.toString(16).padStart(64, '0')}`,
        logIndex: 1,
        blockNumber: 1_000 + betSequence,
        blockTimestamp: input.at ?? GAMI_NOW,
        contract: (input.contract ?? FIXTURE_CONTRACT).toLowerCase(),
        marketId: input.marketId ?? 0,
        wallet: input.wallet.toLowerCase(),
        outcome: input.outcome,
        stakeRaw: usdcRaw(input.stakeUsdc, input.decimals),
    };
}

/** Net pool after the fee, as `MarketResolved.resolvedNetPool` (default fee 2 %). */
export function netPoolOf(bets: ReadonlyArray<IndexedBet>, feeBps = 200): bigint {
    const total = bets.reduce((sum, b) => sum + b.stakeRaw, BigInt(0));
    return total - (total * BigInt(feeBps)) / BigInt(10_000);
}

interface SettlementFixtureInput {
    readonly marketId?: number;
    readonly contract?: string;
    readonly at?: Date;
    readonly block?: number;
}

let settlementSequence = 0;

function settlementBase(input: SettlementFixtureInput) {
    settlementSequence += 1;
    return {
        txHash: `0x${settlementSequence.toString(16).padStart(64, 'e')}`,
        logIndex: 0,
        block: input.block ?? 5_000 + settlementSequence,
        blockTimestamp: input.at ?? GAMI_NOW,
        contract: (input.contract ?? FIXTURE_CONTRACT).toLowerCase(),
        marketId: input.marketId ?? 0,
    };
}

export function marketResolvedFixture(
    input: SettlementFixtureInput & { readonly result: number; readonly resolvedNetPoolRaw: bigint },
): SettlementEvent {
    return { ...settlementBase(input), kind: 'resolved', result: input.result, resolvedNetPoolRaw: input.resolvedNetPoolRaw };
}

export function marketCancelledFixture(input: SettlementFixtureInput = {}): SettlementEvent {
    return { ...settlementBase(input), kind: 'cancelled' };
}

let supportSequence = 0;

export function supportEventFixture(
    input: Partial<SupportEvent> & Pick<SupportEvent, 'supporterWallet' | 'streamerWallet'>,
): SupportEvent {
    supportSequence += 1;
    return {
        kind: 'donation',
        id: `support-${supportSequence}`,
        amountUsdc: 1,
        createdAt: GAMI_NOW,
        ...input,
        supporterWallet: input.supporterWallet.toLowerCase(),
        streamerWallet: input.streamerWallet.toLowerCase(),
    };
}

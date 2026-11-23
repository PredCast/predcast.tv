import 'reflect-metadata';
import { beforeEach, describe, expect, it } from 'vitest';

import type { Account, WalletLink } from '@chiliztv/domain/identity/entities/Account';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IIdentityTokenVerifier, IdentityVerification } from '@chiliztv/domain/identity/ports/IIdentityTokenVerifier';
import { UnauthorizedError } from '@chiliztv/domain/shared/errors/UnauthorizedError';

import { MockClock } from '../../../../testing/clock/MockClock';
import { ExchangeDynamicTokenUseCase } from '../ExchangeDynamicTokenUseCase';

const T0 = new Date('2026-11-23T10:00:00Z');
const A = '0x00000000000000000000000000000000000000aa';
const B = '0x00000000000000000000000000000000000000bb';
const LEGACY = { requireDynamicJwt: false };

/** In-memory IAccountRepository with the same conditional semantics as the Supabase one. */
class MemoryAccounts implements IAccountRepository {
    accounts = new Map<string, Account>();
    links = new Map<string, WalletLink>();
    async upsertByDynamicUserId(dynamicUserId: string, primaryWallet: string, now: Date): Promise<Account> {
        const prev = [...this.accounts.values()].find((a) => a.dynamicUserId === dynamicUserId);
        const account = { id: prev?.id ?? `acc-${dynamicUserId}`, dynamicUserId, primaryWallet, createdAt: prev?.createdAt ?? now, lastSeenAt: now };
        this.accounts.set(account.id, account);
        return account;
    }
    async findById(accountId: string) { return this.accounts.get(accountId) ?? null; }
    async findLinks(wallets: ReadonlyArray<string>) { return wallets.flatMap((w) => this.links.get(w) ?? []); }
    async findActiveLinksOfAccount(accountId: string) {
        return [...this.links.values()].filter((l) => l.accountId === accountId && l.unlinkedAt === null);
    }
    async link(wallet: string, accountId: string, now: Date) {
        if (this.links.has(wallet)) return false;
        this.links.set(wallet, { walletAddress: wallet, accountId, linkedAt: now, unlinkedAt: null });
        return true;
    }
    async relink(wallet: string, accountId: string, now: Date) {
        const l = this.links.get(wallet);
        if (!l || l.unlinkedAt === null) return false;
        this.links.set(wallet, { walletAddress: wallet, accountId, linkedAt: now, unlinkedAt: null });
        return true;
    }
    async unlink(wallet: string, accountId: string, now: Date) {
        const l = this.links.get(wallet);
        if (l && l.accountId === accountId && l.unlinkedAt === null) this.links.set(wallet, { ...l, unlinkedAt: now });
    }
}

const verifierReturning = (result: IdentityVerification): IIdentityTokenVerifier => ({ verify: async () => result });
const proving = (subject: string, wallets: string[]) => verifierReturning({ ok: true, identity: { subject, wallets, email: null } });

describe('ExchangeDynamicTokenUseCase', () => {
    let accounts: MemoryAccounts;
    let clock: MockClock;
    beforeEach(() => { accounts = new MemoryAccounts(); clock = new MockClock(T0); });
    const exchange = (verifier: IIdentityTokenVerifier, wallet = A, dynamicJwt: string | null = 'jwt', options = LEGACY) =>
        new ExchangeDynamicTokenUseCase(verifier, accounts, clock)
            .execute({ walletAddress: wallet, dynamicJwt: dynamicJwt ?? undefined }, options);

    it('keeps the legacy flow without a Dynamic JWT: no account in the token', async () => {
        expect(await exchange(proving('u1', [A]), A.toUpperCase().replace('0X', '0x'), null)).toEqual({ proven: false, walletAddress: A });
    });

    it('refuses the legacy flow when AUTH_REQUIRE_DYNAMIC_JWT is on', async () => {
        await expect(exchange(proving('u1', [A]), A, null, { requireDynamicJwt: true })).rejects.toBeInstanceOf(UnauthorizedError);
    });

    it('refuses a rejected Dynamic token and a wallet outside its credentials', async () => {
        await expect(exchange(verifierReturning({ ok: false, reason: 'wrong_environment' }))).rejects.toBeInstanceOf(UnauthorizedError);
        await expect(exchange(proving('u1', [B]), A)).rejects.toThrow(/not verified/);
    });

    it('creates the account and links a new wallet', async () => {
        const out = await exchange(proving('u1', [A, B]));
        expect(out).toEqual({ proven: true, walletAddress: A, accountId: 'acc-u1', dynamicUserId: 'u1' });
        expect(accounts.links.get(A)).toMatchObject({ accountId: 'acc-u1', linkedAt: T0, unlinkedAt: null });
        expect(accounts.links.get(B)).toMatchObject({ accountId: 'acc-u1' });
    });

    it('leaves a wallet already linked to the account untouched', async () => {
        await exchange(proving('u1', [A]));
        clock.advanceByMin(30);
        await exchange(proving('u1', [A]));
        expect(accounts.links.get(A)?.linkedAt).toEqual(T0);
    });

    it('never moves a wallet active on another account, but still issues the caller account', async () => {
        await exchange(proving('u1', [A]));
        const out = await exchange(proving('u2', [A]));
        expect(out).toMatchObject({ proven: true, accountId: 'acc-u2' });
        expect(accounts.links.get(A)?.accountId).toBe('acc-u1');
    });

    it('takes over a wallet whose previous link was closed', async () => {
        await exchange(proving('u1', [A, B]));
        clock.advanceByMin(60);
        await exchange(proving('u1', [B]), B); // A left u1's credentials → closed
        expect(accounts.links.get(A)?.unlinkedAt).toEqual(clock.now());
        clock.advanceByMin(60);
        await exchange(proving('u2', [A]));
        expect(accounts.links.get(A)).toMatchObject({ accountId: 'acc-u2', linkedAt: clock.now(), unlinkedAt: null });
    });
});

import 'reflect-metadata';
import { describe, expect, it, vi } from 'vitest';

import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';
import type { IBanRepository } from '@chiliztv/domain/reporting/repositories/IBanRepository';
import type { Ban } from '@chiliztv/domain/reporting/entities/Ban';

import { IsAccountBannedUseCase } from '../IsAccountBannedUseCase';

const NOW = new Date('2026-11-23T12:00:00Z');
const link = (walletAddress: string) => ({ walletAddress, accountId: 'acc', linkedAt: NOW, unlinkedAt: null });

function setup(bannedWallets: string[]) {
    const accounts = { findActiveLinksOfAccount: vi.fn(async () => [link('0xa'), link('0xb')]) } as unknown as IAccountRepository;
    const bans = {
        findActiveBan: vi.fn(async (wallet: string) => (bannedWallets.includes(wallet) ? ({} as Ban) : null)),
    } as unknown as IBanRepository;
    return new IsAccountBannedUseCase(accounts, bans);
}

describe('IsAccountBannedUseCase', () => {
    it('is banned when any linked wallet has an active ban', async () => {
        expect(await setup(['0xb']).execute('acc', NOW)).toBe(true);
    });

    it('is not banned when no linked wallet is', async () => {
        expect(await setup([]).execute('acc', NOW)).toBe(false);
    });
});

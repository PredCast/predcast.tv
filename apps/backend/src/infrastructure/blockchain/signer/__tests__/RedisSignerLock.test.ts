import 'reflect-metadata';
import { describe, expect, it, vi } from 'vitest';

import type { ILockService, LockResult } from '@chiliztv/domain/shared/ports/ILockService';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';
import type { ISignerLock } from '@chiliztv/domain/shared/ports/ISignerLock';

import { MockClock } from '../../../../testing/clock/MockClock';
import { RedisSignerLock, SIGNER_LOCK_ACQUIRE_TIMEOUT_MS, SIGNER_LOCK_TTL_SECONDS, SignerBusyError } from '../RedisSignerLock';
import { withSignerLock } from '../withSignerLock';

const NETWORK = {
    chainId: 88882,
    // Well-known Anvil test key: only used to derive the lock key.
    adminPrivateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // gitleaks:allow
} as INetworkConfig;

function locks(results: LockResult[]): ILockService {
    return {
        acquire: vi.fn(async () => results.shift() ?? { acquired: false, reason: 'taken' }),
        release: vi.fn(async () => true),
        renew: vi.fn(),
        withLock: vi.fn(),
    } as unknown as ILockService;
}

describe('RedisSignerLock', () => {
    it('runs the work under a per-signer, per-chain key with a TTL above the longest receipt wait', async () => {
        const l = locks([{ acquired: true, token: 't', expiresAt: new Date() }]);
        const lock = new RedisSignerLock(l, new MockClock(new Date()), NETWORK);

        expect(await lock.run(async () => 42)).toBe(42);
        expect(l.acquire).toHaveBeenCalledWith('signer:88882:0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', SIGNER_LOCK_TTL_SECONDS);
        expect(SIGNER_LOCK_TTL_SECONDS * 1000).toBeGreaterThan(180_000);
        expect(l.release).toHaveBeenCalledWith(expect.any(String), 't');
    });

    it('releases the lock when the work throws', async () => {
        const l = locks([{ acquired: true, token: 't', expiresAt: new Date() }]);
        const lock = new RedisSignerLock(l, new MockClock(new Date()), NETWORK);

        await expect(lock.run(async () => { throw new Error('boom'); })).rejects.toThrow('boom');
        expect(l.release).toHaveBeenCalled();
    });

    it('falls back to running without the lock when Redis errors', async () => {
        const l = locks([{ acquired: false, reason: 'error' }]);
        const lock = new RedisSignerLock(l, new MockClock(new Date()), NETWORK);

        expect(await lock.run(async () => 'sent')).toBe('sent');
        expect(l.release).not.toHaveBeenCalled();
    });

    it('gives up with SignerBusyError once the acquisition timeout has passed', async () => {
        const clock = new MockClock(new Date('2026-11-07T12:00:00Z'));
        const l = locks([]);
        (l.acquire as ReturnType<typeof vi.fn>).mockImplementation(async () => {
            clock.advanceBy(SIGNER_LOCK_ACQUIRE_TIMEOUT_MS + 1);
            return { acquired: false, reason: 'taken' };
        });
        const lock = new RedisSignerLock(l, clock, NETWORK);

        await expect(lock.run(async () => 'never')).rejects.toBeInstanceOf(SignerBusyError);
    });
});

describe('withSignerLock', () => {
    it('holds the lock from the send until the receipt', async () => {
        const events: string[] = [];
        const lock: ISignerLock = {
            run: async (work) => { events.push('lock'); try { return await work(); } finally { events.push('unlock'); } },
        };
        const client = { writeContract: vi.fn(async () => { events.push('send'); return '0xabc' as const; }), other: 1 };
        const receipts = { waitForTransactionReceipt: vi.fn(async () => { events.push('receipt'); return {}; }) };

        const wrapped = withSignerLock(client, receipts, lock);

        expect(await wrapped.writeContract()).toBe('0xabc');
        expect(events).toEqual(['lock', 'send', 'receipt', 'unlock']);
        expect(wrapped.other).toBe(1);
    });
});

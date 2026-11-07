import { inject, injectable } from 'tsyringe';
import { privateKeyToAccount } from 'viem/accounts';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILockService } from '@chiliztv/domain/shared/ports/ILockService';
import type { INetworkConfig } from '@chiliztv/domain/shared/ports/INetworkConfig';
import type { ISignerLock } from '@chiliztv/domain/shared/ports/ISignerLock';

import { logger } from '../../logging/logger';

/** Longer than the longest receipt wait (180 s on resolution) so the lock never expires mid-send. */
export const SIGNER_LOCK_TTL_SECONDS = 240;
/** A caller gives up (and retries on its next tick) after waiting this long for the signer. */
export const SIGNER_LOCK_ACQUIRE_TIMEOUT_MS = 150_000;
const POLL_MS = 250;

export class SignerBusyError extends Error {
    constructor(key: string) {
        super(`Signer busy: could not acquire ${key} within ${SIGNER_LOCK_ACQUIRE_TIMEOUT_MS / 1000}s`);
        this.name = 'SignerBusyError';
    }
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Redis-backed signer lock. When Redis is unreachable it falls back to sending without the lock
 * (logged), like the cache does: availability over strict ordering. It only coordinates processes
 * sharing this Redis; another environment using the same key (e.g. staging workers) is not covered.
 */
@injectable()
export class RedisSignerLock implements ISignerLock {
    private readonly key: string;

    constructor(
        @inject(TOKENS.ILockService) private readonly locks: ILockService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
        @inject(TOKENS.INetworkConfig) network: INetworkConfig,
    ) {
        const address = network.adminPrivateKey
            ? privateKeyToAccount(network.adminPrivateKey as `0x${string}`).address.toLowerCase()
            : 'no-signer';
        this.key = `signer:${network.chainId}:${address}`;
    }

    async run<T>(work: () => Promise<T>): Promise<T> {
        const deadline = this.clock.now().getTime() + SIGNER_LOCK_ACQUIRE_TIMEOUT_MS;
        for (;;) {
            const attempt = await this.locks.acquire(this.key, SIGNER_LOCK_TTL_SECONDS);
            if (attempt.acquired) {
                try {
                    return await work();
                } finally {
                    await this.locks.release(this.key, attempt.token);
                }
            }
            if (attempt.reason === 'error') {
                logger.warn('Signer lock unavailable, sending without it', { key: this.key });
                return work();
            }
            if (this.clock.now().getTime() >= deadline) throw new SignerBusyError(this.key);
            await sleep(POLL_MS);
        }
    }
}

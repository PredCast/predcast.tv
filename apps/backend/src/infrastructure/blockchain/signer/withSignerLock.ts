import type { ISignerLock } from '@chiliztv/domain/shared/ports/ISignerLock';

/** Matches the longest receipt wait of the callers; past it the lock is released anyway. */
const LOCKED_RECEIPT_WAIT_MS = 180_000;

interface ReceiptReader {
    waitForTransactionReceipt(args: { hash: `0x${string}`; timeout: number }): Promise<unknown>;
}

/**
 * Wraps a wallet client so every `writeContract` holds the signer lock from the send until its
 * receipt. Callers keep their own `waitForTransactionReceipt`, which then returns at once.
 */
export function withSignerLock<C extends { writeContract: (...args: never[]) => Promise<`0x${string}`> }>(
    client: C,
    receipts: ReceiptReader,
    lock: ISignerLock,
): C {
    return new Proxy(client, {
        get(target, prop, receiver) {
            if (prop !== 'writeContract') return Reflect.get(target, prop, receiver);
            return (...args: Parameters<C['writeContract']>) =>
                lock.run(async () => {
                    const hash = await target.writeContract(...args);
                    // A timeout or revert here is surfaced by the caller's own receipt wait.
                    await receipts.waitForTransactionReceipt({ hash, timeout: LOCKED_RECEIPT_WAIT_MS }).catch(() => undefined);
                    return hash;
                });
        },
    });
}

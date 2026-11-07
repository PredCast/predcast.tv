/**
 * Serialises the transactions of the backend signer across processes (API + workers share the
 * admin key), so two sends never race for the same nonce. The callback runs while the lock is
 * held and should cover the send and its receipt.
 */
export interface ISignerLock {
    run<T>(work: () => Promise<T>): Promise<T>;
}

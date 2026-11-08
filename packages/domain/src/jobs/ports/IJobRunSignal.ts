/** Wakes workers when a manual run is requested; workers also poll, so a lost signal only delays. */
export interface IJobRunSignal {
    notify(runId: string): Promise<void>;
    /** Returns an unsubscribe function. */
    subscribe(listener: () => void): () => void;
}

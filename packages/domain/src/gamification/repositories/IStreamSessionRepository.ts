import type { StreamSession } from '../entities/StreamSession';

export interface StreamSessionOpen {
    readonly streamId: string;
    readonly accountId: string | null;
    readonly streamerWallet: string;
    readonly matchId: number;
    readonly wentLiveAt: Date;
}

export interface StreamMinuteWrite {
    readonly streamId: string;
    readonly minute: Date;
    readonly viewerAccounts: number;
    readonly exempt: boolean;
}

/** `gamification_stream_sessions` + `gamification_stream_minutes`. */
export interface IStreamSessionRepository {
    findById(streamId: string): Promise<StreamSession | null>;
    /** Sessions with `ended_at` null or minutes still to process. */
    findToProcess(): Promise<ReadonlyArray<StreamSession>>;
    /** Creates the session if missing; false when it already existed. */
    open(session: StreamSessionOpen): Promise<boolean>;
    close(streamId: string, endedAt: Date): Promise<void>;
    /** Inserts the minute (PK `(stream_id, minute)`) and returns the session counter after it. */
    recordMinute(write: StreamMinuteWrite): Promise<{ readonly inserted: boolean; readonly countedMinutes: number }>;
    markProcessed(streamId: string, minute: Date): Promise<void>;
    /** Counted minutes of every session of the account, moderated ones excluded. */
    lifetimeCountedMinutes(accountId: string): Promise<number>;
    /** Sets `moderated_at`; false when already moderated. */
    markModerated(streamId: string, at: Date): Promise<boolean>;
}

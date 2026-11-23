import type { StreamSession } from '../entities/StreamSession';
import type { ParisDay } from '../policies/parisDay';

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
    /** Paris day of the minute: the `stream_minutes` progress cap is daily. */
    readonly day: ParisDay;
    readonly viewerAccounts: number;
    readonly exempt: boolean;
}

export type StreamMinuteResult =
    | {
          readonly inserted: false;
          /** Rank of the minute in its session when it was already recorded; 0 on a moderated session. */
          readonly countedMinutes: number;
      }
    | {
          readonly inserted: true;
          readonly countedMinutes: number;
          /** False once the daily progress cap (360 min) is reached. */
          readonly progressMoved: boolean;
          readonly totalStreamMinutes: number;
      };

export type StreamModerationResult =
    | { readonly moderated: false }
    | { readonly moderated: true; readonly minutesRemoved: number };

/** `gamification_stream_sessions` + `gamification_stream_minutes`. */
export interface IStreamSessionRepository {
    findById(streamId: string): Promise<StreamSession | null>;
    /** Sessions still open or with minutes left to process (`minutes_settled_at` null). */
    findToProcess(): Promise<ReadonlyArray<StreamSession>>;
    /** Creates the session if missing; false when it already existed. */
    open(session: StreamSessionOpen): Promise<boolean>;
    close(streamId: string, endedAt: Date): Promise<void>;
    /** Inserts the minute (PK `(stream_id, minute)`) with the session counter and the daily-capped progress. */
    recordMinute(write: StreamMinuteWrite): Promise<StreamMinuteResult>;
    /** Moves `last_processed_minute` forward; `settledAt` takes the ended session out of the scan. */
    markProcessed(streamId: string, minute: Date | null, settledAt: Date | null): Promise<void>;
    /** Counted minutes of every session of the account, moderated ones included: a stop never restores the exemption. */
    lifetimeCountedMinutes(accountId: string): Promise<number>;
    /** Sets `moderated_at` once and removes the session's minutes from `stream_minutes`. */
    markModerated(streamId: string, at: Date): Promise<StreamModerationResult>;
}

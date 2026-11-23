import { STREAM_MINUTE_DELAY_MINUTES } from '../catalog/constants';
import type { StreamSession } from '../entities/StreamSession';

const MINUTE_MS = 60_000;

/** A `live_streams` row as the reconciliation sees it; null when the row is gone (7-day purge, DELETE). */
export interface LiveStreamState {
    readonly streamId: string;
    readonly live: boolean;
    readonly endedAt: Date | null;
}

export interface SessionClosing {
    readonly streamId: string;
    readonly endedAt: Date;
}

const floorMinute = (at: Date) => new Date(Math.floor(at.getTime() / MINUTE_MS) * MINUTE_MS);
const ceilMinute = (at: Date) => new Date(Math.ceil(at.getTime() / MINUTE_MS) * MINUTE_MS);

/** Live streams without a session: a session opens for each (§3.3 `stream_time`). */
export function streamsToOpen(
    live: ReadonlyArray<{ readonly streamId: string }>,
    known: ReadonlySet<string>,
): ReadonlyArray<string> {
    return live.map((s) => s.streamId).filter((id) => !known.has(id));
}

/**
 * Open session whose stream is no longer live or was deleted: closed at the stream's `ended_at`,
 * else now, never before `went_live_at`. Null while the stream is live.
 */
export function sessionClosing(session: StreamSession, stream: LiveStreamState | null, now: Date): SessionClosing | null {
    if (session.endedAt !== null || (stream !== null && stream.live)) return null;
    const endedAt = stream?.endedAt ?? now;
    const clamped = endedAt < session.wentLiveAt ? session.wentLiveAt : endedAt;
    return { streamId: session.streamId, endedAt: clamped };
}

/** Minute `m` counts while `went_live_at ≤ m < ended_at`. */
export function isSessionOpenAt(session: StreamSession, minute: Date): boolean {
    return session.wentLiveAt <= minute && (session.endedAt === null || minute < session.endedAt);
}

/** Last minute the job may process: the heartbeats of later minutes may still arrive. */
export function streamProcessingCutoff(now: Date): Date {
    return new Date(floorMinute(now).getTime() - STREAM_MINUTE_DELAY_MINUTES * MINUTE_MS);
}

/** Minutes after `last_processed_minute` up to the cutoff and before the end, oldest first. */
export function streamMinutesToProcess(session: StreamSession, now: Date, max: number): ReadonlyArray<Date> {
    const first = session.lastProcessedMinute
        ? new Date(session.lastProcessedMinute.getTime() + MINUTE_MS)
        : ceilMinute(session.wentLiveAt);
    const cutoff = streamProcessingCutoff(now);
    const minutes: Date[] = [];
    for (let t = first.getTime(); t <= cutoff.getTime() && minutes.length < max; t += MINUTE_MS) {
        const minute = new Date(t);
        if (session.endedAt !== null && minute >= session.endedAt) break;
        minutes.push(minute);
    }
    return minutes;
}

/** An ended session is settled once its last open minute is processed (or it had none). */
export function isSessionSettled(session: StreamSession, lastProcessed: Date | null): boolean {
    if (session.endedAt === null) return false;
    const lastOpen = new Date(ceilMinute(session.endedAt).getTime() - MINUTE_MS);
    if (lastOpen < ceilMinute(session.wentLiveAt)) return true;
    return lastProcessed !== null && lastProcessed >= lastOpen;
}

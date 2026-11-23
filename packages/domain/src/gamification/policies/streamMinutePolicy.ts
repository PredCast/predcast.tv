import {
    STREAMER_EXEMPT_LIFETIME_MINUTES,
    STREAM_VIEWER_MIN_ACCOUNT_AGE_HOURS,
    STREAM_XP_TRANCHE_MINUTES,
} from '../catalog/constants';
import type { AccountEligibility } from './eligibilityPolicy';

/** A `gamification_watch_minutes` row on this stream at the processed minute. */
export interface StreamViewer {
    readonly accountId: string;
    readonly accountCreatedAt: Date;
    readonly banned: boolean;
}

export interface StreamMinuteInput {
    readonly minute: Date;
    /** went_live_at ≤ minute and (ended_at null or minute < ended_at). */
    readonly sessionOpen: boolean;
    /** Null when the streamer wallet has no account. */
    readonly streamerAccountId: string | null;
    readonly streamerEligibility: AccountEligibility;
    /** Counted stream minutes of the streamer over all sessions, before this one. */
    readonly lifetimeCountedMinutes: number;
    readonly viewers: ReadonlyArray<StreamViewer>;
}

export type StreamMinuteEvaluation =
    | { readonly counted: true; readonly exempt: boolean; readonly viewerAccounts: number }
    | {
          readonly counted: false;
          readonly reason: 'session_closed' | 'no_account' | 'banned' | 'suspended' | 'no_eligible_viewer';
      };

/** Viewer of another account, created more than 24 h before the minute, not banned. */
export function isEligibleViewer(viewer: StreamViewer, streamerAccountId: string, minute: Date): boolean {
    const ageMs = minute.getTime() - viewer.accountCreatedAt.getTime();
    return (
        viewer.accountId !== streamerAccountId &&
        !viewer.banned &&
        ageMs > STREAM_VIEWER_MIN_ACCOUNT_AGE_HOURS * 3_600_000
    );
}

/** Whether a stream minute counts (§3.3 `stream_time`); the first 60 lifetime minutes need no viewer. */
export function evaluateStreamMinute(input: StreamMinuteInput): StreamMinuteEvaluation {
    if (!input.sessionOpen) return { counted: false, reason: 'session_closed' };
    if (input.streamerAccountId === null) return { counted: false, reason: 'no_account' };
    if (input.streamerEligibility !== 'eligible') return { counted: false, reason: input.streamerEligibility };

    const streamerId = input.streamerAccountId;
    const eligible = new Set(
        input.viewers.filter((v) => isEligibleViewer(v, streamerId, input.minute)).map((v) => v.accountId),
    );
    if (eligible.size > 0) return { counted: true, exempt: false, viewerAccounts: eligible.size };
    if (input.lifetimeCountedMinutes < STREAMER_EXEMPT_LIFETIME_MINUTES) {
        return { counted: true, exempt: true, viewerAccounts: 0 };
    }
    return { counted: false, reason: 'no_eligible_viewer' };
}

export type StreamXpCredit = { readonly credit: false } | { readonly credit: true; readonly tranche: number };

/** Every 6th counted minute of a session credits 1 XP (10 XP/h). */
export function streamXpForSessionCount(sessionCountedMinutes: number): StreamXpCredit {
    if (sessionCountedMinutes <= 0 || sessionCountedMinutes % STREAM_XP_TRANCHE_MINUTES !== 0) return { credit: false };
    return { credit: true, tranche: sessionCountedMinutes / STREAM_XP_TRANCHE_MINUTES };
}

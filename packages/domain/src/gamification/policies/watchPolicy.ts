import { classifyStatus } from '../../matches/policies/BettablePolicy';
import { StreamStatus } from '../../streams/entities/Stream';
import {
    ONBOARDING_WATCH_MINUTES,
    WATCH_LEAGUE_MINUTES,
    WATCH_XP_MAX_MINUTES,
    WATCH_XP_TRANCHE_MINUTES,
} from '../catalog/constants';
import type { AccountEligibility } from './eligibilityPolicy';

export interface WatchedStream {
    readonly status: StreamStatus;
    readonly matchId: number;
    /** Account of the streamer; null when its wallet has no account. */
    readonly streamerAccountId: string | null;
}

export interface WatchHeartbeat {
    readonly accountId: string;
    readonly eligibility: AccountEligibility;
    readonly matchId: number;
    /** Raw API-Football status of the (already visibility-checked) match. */
    readonly matchStatus: string;
    /** The `live_streams` row designated by `streamId`, null when none was sent or found. */
    readonly stream: WatchedStream | null;
}

export type WatchMinuteEvaluation =
    | { readonly counted: true }
    | { readonly counted: false; readonly reason: 'banned' | 'suspended' | 'own_stream' | 'not_live' };

/**
 * Whether a heartbeat may insert a watch minute (§3.3 `watch`): the match is in play or the
 * designated stream of this match is live, and the stream is not the viewer's own. Uniqueness per
 * (account, minute) is enforced by the table key.
 */
export function evaluateWatchHeartbeat(heartbeat: WatchHeartbeat): WatchMinuteEvaluation {
    if (heartbeat.eligibility !== 'eligible') return { counted: false, reason: heartbeat.eligibility };
    const { stream } = heartbeat;
    if (stream && stream.streamerAccountId === heartbeat.accountId) return { counted: false, reason: 'own_stream' };

    const matchInPlay = classifyStatus(heartbeat.matchStatus) === 'live';
    const streamLive = stream !== null && stream.status === StreamStatus.LIVE && stream.matchId === heartbeat.matchId;
    return matchInPlay || streamLive ? { counted: true } : { counted: false, reason: 'not_live' };
}

/** `date_trunc('minute', at)`. */
export function watchMinuteOf(at: Date): Date {
    return new Date(Math.floor(at.getTime() / 60_000) * 60_000);
}

export type WatchXpCredit = { readonly credit: false } | { readonly credit: true; readonly tranche: number };

/** After the daily `minutes:watch` counter moved to `minutesToday`: 1 XP per 10 minutes, up to 100. */
export function watchXpForCounter(minutesToday: number): WatchXpCredit {
    if (minutesToday <= 0 || minutesToday > WATCH_XP_MAX_MINUTES || minutesToday % WATCH_XP_TRANCHE_MINUTES !== 0) {
        return { credit: false };
    }
    return { credit: true, tranche: minutesToday / WATCH_XP_TRANCHE_MINUTES };
}

/** A competition joins `leagues` when its daily minute counter reaches 10. */
export function leagueQualifiesAt(leagueMinutesToday: number): boolean {
    return leagueMinutesToday === WATCH_LEAGUE_MINUTES;
}

/** Spectator tiers are whole hours: achievements are re-evaluated on each counted hour only. */
export function watchProgressReachesHour(totalWatchMinutes: number, progressMoved: boolean): boolean {
    return progressMoved && totalWatchMinutes > 0 && totalWatchMinutes % 60 === 0;
}

/** Onboarding step `watch` once 5 counted minutes are reached overall. */
export function reachesOnboardingWatch(totalWatchMinutes: number): boolean {
    return totalWatchMinutes >= ONBOARDING_WATCH_MINUTES;
}

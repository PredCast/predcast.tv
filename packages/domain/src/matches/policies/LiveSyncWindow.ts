/** Live polling starts this long before a deployed match's kickoff. */
export const LIVE_SYNC_LEAD_MS = 5 * 60_000;
/** ...and stops this long after it: 90' + HT + extra time + penalties + stoppages fit in 3 h. */
export const LIVE_SYNC_TAIL_MS = 3 * 60 * 60_000;

/**
 * Kickoff range of the deployed matches that may be in play at `now`. When no deployed match
 * falls in it (and none has a live status), the paid live poll can be skipped.
 */
export function liveSyncKickoffRange(now: Date): { readonly from: Date; readonly to: Date } {
    return {
        from: new Date(now.getTime() - LIVE_SYNC_TAIL_MS),
        to: new Date(now.getTime() + LIVE_SYNC_LEAD_MS),
    };
}

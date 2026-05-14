"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchFetchWindow = void 0;
class MatchFetchWindow {
    // Bound used by the sync job (API-Football fetch). The front-facing query
    // path is unbounded in the future — only the sync window caps it.
    static FETCH_DAYS_AHEAD = 7;
    static CLEANUP_HOURS_AFTER = 24;
    static DISPLAY_HOURS_BEHIND = 24;
    static fetchFrom(now) {
        const from = new Date(now);
        from.setDate(from.getDate() - 1);
        return from;
    }
    static fetchTo(now) {
        const to = new Date(now);
        to.setDate(to.getDate() + MatchFetchWindow.FETCH_DAYS_AHEAD);
        return to;
    }
    // Lower bound for the front display window: every future match + matches
    // whose kickoff was within the last 24h (covers freshly finished games).
    static displayFrom(now) {
        const from = new Date(now);
        from.setHours(from.getHours() - MatchFetchWindow.DISPLAY_HOURS_BEHIND);
        return from;
    }
    static cleanupBefore(now) {
        const before = new Date(now);
        before.setHours(before.getHours() - MatchFetchWindow.CLEANUP_HOURS_AFTER);
        return before;
    }
}
exports.MatchFetchWindow = MatchFetchWindow;

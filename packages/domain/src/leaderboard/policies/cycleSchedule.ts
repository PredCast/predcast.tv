// Monthly cycle schedule for the leaderboard.
//
// First cycle is exceptional — closes on 2026-06-30 23:55 UTC regardless of
// when the code is deployed. All subsequent cycles end on the last calendar
// day of their month at 23:55 UTC, opening the next cycle at 00:00 UTC the
// next day.
//
// This module is pure — `now` is always passed in so consumers can use
// MockClock for deterministic tests (cf. CLAUDE.md §4.1ter).

export const FIRST_CYCLE_END_UTC = new Date(Date.UTC(2026, 5, 30, 23, 55, 0));

/**
 * Returns the next cycle-end timestamp (UTC) at or after `now`.
 * If `now` is past 23:55 on the last day of the current month, returns the
 * end of the following month.
 */
export function nextCycleEnd(now: Date): Date {
    if (now < FIRST_CYCLE_END_UTC) return FIRST_CYCLE_END_UTC;
    const y = now.getUTCFullYear();
    const m = now.getUTCMonth();
    const endOfThisMonth = new Date(Date.UTC(y, m + 1, 0, 23, 55, 0));
    if (now <= endOfThisMonth) return endOfThisMonth;
    return new Date(Date.UTC(y, m + 2, 0, 23, 55, 0));
}

/**
 * True when the current cron tick (23:55 UTC daily) lands within a 10-min
 * window of the cycle end. The window absorbs cron drift while keeping the
 * trigger date-precise.
 */
export function shouldCloseAt(now: Date): boolean {
    if (now < FIRST_CYCLE_END_UTC) {
        // First cycle exception — only allow the close on / around June 30.
        const diffMin = Math.abs((now.getTime() - FIRST_CYCLE_END_UTC.getTime()) / 60_000);
        return diffMin <= 10;
    }
    const target = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0, 23, 55, 0));
    const diffMin = Math.abs((now.getTime() - target.getTime()) / 60_000);
    return diffMin <= 10;
}

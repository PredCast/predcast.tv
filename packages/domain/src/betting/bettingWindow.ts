/** Fallback opening of the betting window for matches deployed before `betting_opened_at` was recorded. */
export const DEFAULT_BETTING_WINDOW_DAYS = 7;

export interface BettingWindow {
    readonly opensAt: Date;
    readonly closesAt: Date;
}

/** Elapsed fraction of [opensAt, closesAt] at `now`, clamped to [0, 1]. A degenerate window counts as closed. */
export function progress(opensAt: Date, closesAt: Date, now: Date): number {
    const span = closesAt.getTime() - opensAt.getTime();
    if (span <= 0) return 1;
    const elapsed = now.getTime() - opensAt.getTime();
    return Math.min(1, Math.max(0, elapsed / span));
}

/** Window [kickoff − windowDays, kickoff − kickoffBufferSec]: predictions close at the kickoff buffer. */
export function fallbackBettingWindow(
    kickoffAt: Date,
    kickoffBufferSec: number,
    windowDays: number = DEFAULT_BETTING_WINDOW_DAYS,
): BettingWindow {
    const kickoffMs = kickoffAt.getTime();
    return {
        opensAt: new Date(kickoffMs - windowDays * 24 * 60 * 60 * 1000),
        closesAt: new Date(kickoffMs - kickoffBufferSec * 1000),
    };
}

/**
 * Window [openedAt, kickoff − kickoffBufferSec] when the markets' opening time is known (set at the end
 * of the admin deployment), else the {@link fallbackBettingWindow}.
 */
export function bettingWindow(kickoffAt: Date, openedAt: Date | null, kickoffBufferSec: number): BettingWindow {
    const fallback = fallbackBettingWindow(kickoffAt, kickoffBufferSec);
    return openedAt ? { opensAt: openedAt, closesAt: fallback.closesAt } : fallback;
}

/** Milliseconds left before the window closes, never negative. */
export function remainingMs(closesAt: Date, now: Date): number {
    return Math.max(0, closesAt.getTime() - now.getTime());
}

/** When each phase of a match actually started; null until observed. */
export interface MatchPhaseTimes {
    readonly firstHalfStartedAt: Date | null;
    readonly halftimeStartedAt: Date | null;
    readonly secondHalfStartedAt: Date | null;
}

/** Period starts reported by the provider (API-Football `fixture.periods`). */
export interface UpstreamPeriods {
    readonly firstHalfStartedAt: Date | null;
    readonly secondHalfStartedAt: Date | null;
}

export const NO_PHASE_TIMES: MatchPhaseTimes = {
    firstHalfStartedAt: null,
    halftimeStartedAt: null,
    secondHalfStartedAt: null,
};

/**
 * Monotone merge: provider period starts win when present and are never cleared; the HT start
 * has no upstream field, so it is stamped with `now` the first time the status reads `HT`.
 */
export function nextPhaseTimes(
    current: MatchPhaseTimes,
    status: string,
    upstream: UpstreamPeriods,
    now: Date,
): MatchPhaseTimes {
    return {
        firstHalfStartedAt: upstream.firstHalfStartedAt ?? current.firstHalfStartedAt,
        halftimeStartedAt: current.halftimeStartedAt ?? (status === 'HT' ? now : null),
        secondHalfStartedAt: upstream.secondHalfStartedAt ?? current.secondHalfStartedAt,
    };
}

const sameTime = (a: Date | null, b: Date | null): boolean => (a?.getTime() ?? null) === (b?.getTime() ?? null);

export function phaseTimesEqual(a: MatchPhaseTimes, b: MatchPhaseTimes): boolean {
    return sameTime(a.firstHalfStartedAt, b.firstHalfStartedAt)
        && sameTime(a.halftimeStartedAt, b.halftimeStartedAt)
        && sameTime(a.secondHalfStartedAt, b.secondHalfStartedAt);
}

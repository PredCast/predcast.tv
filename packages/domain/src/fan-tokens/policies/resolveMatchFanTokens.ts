export interface MatchFanTokens {
    readonly home: string | null;
    readonly away: string | null;
}

/**
 * Fan-token symbols of both sides of a match. The team → token mapping is injected
 * (catalogue in `@chiliztv/shared`) so the policy stays free of data dependencies.
 * Both sides mapping to the same symbol (data error) keeps the home side only.
 */
export function resolveMatchFanTokens(
    homeTeamId: number | null | undefined,
    awayTeamId: number | null | undefined,
    teamFanTokens: ReadonlyMap<number, string>,
): MatchFanTokens {
    const home = homeTeamId == null ? null : teamFanTokens.get(homeTeamId) ?? null;
    const awayRaw = awayTeamId == null ? null : teamFanTokens.get(awayTeamId) ?? null;
    return { home, away: awayRaw !== null && awayRaw === home ? null : awayRaw };
}

/** Cross-pair label `HOME/AWAY`; null unless both sides have a token. */
export function crossPairLabel(tokens: MatchFanTokens): string | null {
    return tokens.home && tokens.away ? `${tokens.home}/${tokens.away}` : null;
}

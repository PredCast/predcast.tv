import type { MatchOdds } from '@chiliztv/domain/matches/entities/Match';

/** Sharp-book-ish defaults used by every match fixture unless overridden. */
export const DEFAULT_FIXTURE_ODDS: MatchOdds = {
    winner:     { homeWin: 1.85, draw: 3.50, awayWin: 4.20 },
    halftime:   { homeWin: 2.40, draw: 2.10, awayWin: 4.50 },
    goalsTotal: { line: 2.5, over: 1.72, under: 2.10 },
    bothScore:  { yes: 1.70, no: 2.10 },
    firstScorer:{ home: 2.10, away: 2.50, none: 8.00 },
};

/** Shallow merge with deep override at the per-market level. */
export function mergeOdds(base: MatchOdds, override?: Partial<MatchOdds>): MatchOdds {
    if (!override) return base;
    return {
        winner:      override.winner      ?? base.winner,
        halftime:    override.halftime    ?? base.halftime,
        goalsTotal:  override.goalsTotal  ?? base.goalsTotal,
        bothScore:   override.bothScore   ?? base.bothScore,
        firstScorer: override.firstScorer ?? base.firstScorer,
    };
}

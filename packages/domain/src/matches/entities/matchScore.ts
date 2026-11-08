import type { MatchProps } from './MatchProps';

type ScoreProps = Pick<
  MatchProps,
  'status' | 'homeScore' | 'awayScore' | 'aetHomeScore' | 'aetAwayScore' | 'penHomeScore' | 'penAwayScore'
>;

/** `true` when the match reached extra time (AET) or penalty shootout (PEN). */
export function wentToExtraTime(status: string): boolean {
  return status === 'AET' || status === 'PEN';
}

/** `true` when the match was decided by a penalty shootout. */
export function wentToPenalties(status: string): boolean {
  return status === 'PEN';
}

/**
 * Returns the **physical** final score after extra time.
 *
 * Convention: for AET/PEN matches, returns the AET aggregate (1-1 at 90' +
 * 2-1 scored in extra time → `{home:3, away:2}`). Does NOT include the
 * penalty shootout result in the goal count — that's exposed separately via
 * {@link penaltyWinnerOf}.
 *
 * Display rule: this score is what gets shown as `3 — 2 a.e.t.` in the UI.
 *
 * Settlement rule: the existing WINNER market still uses the 90' score
 * (`Match.getHomeScore` / `Match.getAwayScore`), NOT this function, to match
 * bookmaker convention. Use this only for display and for FULL_TIME_WINNER
 * market resolution.
 *
 * Falls back to the 90' score when AET fields are absent (FT match or pre-
 * migration row).
 */
export function finalScoreOf(props: ScoreProps): { home: number; away: number } | null {
  const home90 = props.homeScore;
  const away90 = props.awayScore;
  if (wentToExtraTime(props.status)) {
    const aetHome = props.aetHomeScore;
    const aetAway = props.aetAwayScore;
    if (aetHome != null && aetAway != null) {
      return { home: aetHome, away: aetAway };
    }
  }
  if (home90 == null || away90 == null) return null;
  return { home: home90, away: away90 };
}

/**
 * Returns `'home'` / `'away'` when the match was decided on penalties and
 * the shootout score is known; `null` otherwise (FT, AET-resolved, or PEN
 * with missing shootout score). Used by FULL_TIME_WINNER market resolution.
 */
export function penaltyWinnerOf(props: ScoreProps): 'home' | 'away' | null {
  if (!wentToPenalties(props.status)) return null;
  const home = props.penHomeScore;
  const away = props.penAwayScore;
  if (home == null || away == null) return null;
  if (home > away) return 'home';
  if (away > home) return 'away';
  return null; // degenerate — shootouts can't tie
}

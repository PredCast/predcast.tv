/** Match metadata required by the `isBettable` policy check. */
export interface MatchBettableContext {
  /** Raw API-Football status code: NS / 1H / HT / 2H / FT / PST / ... */
  status: string;
  /** Kickoff ISO string. */
  kickoffAt: string;
  /** Persisted halftime score; null before HT or while the upstream lags. Drives the HT delay badge. */
  htHomeScore?: number | null;
  htAwayScore?: number | null;
  /** When the markets opened (end of the admin deployment); null on legacy matches. */
  bettingOpenedAt?: string | null;
}

export interface MarketSelection {
  marketId: number;
  marketLabel: string;
  marketTypeHash: `0x${string}`;
  line: number;
  state: number;
  totalPool: bigint;
  /** Inclusive max valid outcome (uint8 on-chain). UI renders `maxOutcome + 1` cells. */
  maxOutcome: number;
  /** Outcome pre-selected when the user clicked a specific cell. */
  defaultSelection?: number;
}

export interface ScoreBreakdown {
  ninety: { home: number; away: number };
  aet?: { home: number; away: number };
  pen?: { home: number; away: number };
}

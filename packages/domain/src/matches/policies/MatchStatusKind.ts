/**
 * High-level classification of an API-Football match status. Used by the
 * `BettablePolicy` to gate writes (place bet, close market, resolve) without
 * leaking the raw status codes into application layers.
 */
export type MatchStatusKind = 'upcoming' | 'live' | 'finished' | 'blocked' | 'unknown';

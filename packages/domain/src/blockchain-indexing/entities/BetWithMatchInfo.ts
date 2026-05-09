import { Bet } from './Bet';

/**
 * Read model for the my-bets feed: a Bet enriched with the minimum match
 * metadata the UI needs to render a row (team names, league, kickoff).
 *
 * Lives alongside the Bet entity in the indexing context — it's owned by
 * the same aggregate, just shaped for the read side.
 */
export interface BetWithMatchInfo {
    readonly bet: Bet;
    readonly match: {
        readonly apiFootballId: number;
        readonly homeTeamName: string;
        readonly awayTeamName: string;
        readonly leagueName: string | null;
        readonly matchDate: Date;
    } | null;
}

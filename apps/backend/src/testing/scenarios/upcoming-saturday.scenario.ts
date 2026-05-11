import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

interface FixtureEntry {
    home: string;
    away: string;
    league: string;
    offsetMin: number;
}

const FIXTURES: ReadonlyArray<FixtureEntry> = [
    { home: 'PSG',             away: 'Marseille', league: 'Ligue 1',        offsetMin: 60  },
    { home: 'Manchester City', away: 'Arsenal',   league: 'Premier League', offsetMin: 75  },
    { home: 'Real Madrid',     away: 'Barcelona', league: 'La Liga',        offsetMin: 90  },
    { home: 'Bayern',          away: 'Dortmund',  league: 'Bundesliga',     offsetMin: 105 },
];

// Saturday afternoon — 4 upcoming matches kicking off 1-2h ahead of clock.now().
// Exercises the Discover grid (multiple matches, multiple leagues).
export const upcomingSaturdayScenario: MatchScenario = {
    name: 'upcoming-saturday',
    description: '4 upcoming matches across 4 leagues, kickoff +60 to +105 min. Discover-grid happy path.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const matchIds: number[] = [];
        let contractsDeployed = 0;
        for (const entry of FIXTURES) {
            const match = matchFixture.upcoming({
                apiFootballId: nextTestMatchId(),
                homeTeam: { name: entry.home },
                awayTeam: { name: entry.away },
                league: { name: entry.league },
                kickoffAt: new Date(ctx.clock.now().getTime() + entry.offsetMin * 60_000),
            });
            matchIds.push(match.getId());
            contractsDeployed += await persistAndMaybeDeploy(match, ctx, warnings);
        }
        return {
            matchesCreated: matchIds.length,
            contractsDeployed,
            matchIds,
            warnings,
        };
    },
};

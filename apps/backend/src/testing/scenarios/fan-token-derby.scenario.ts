import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import { LIGUE_1, TEAM_FIXTURES } from '../fixtures/team.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

const MIN = 60_000;

/** PSG vs OM three times: upcoming (no marker yet), live in 1H (kick-off marker), live in 2H (kick-off, HT and 2nd-half markers). */
export const fanTokenDerbyScenario: MatchScenario = {
    name: 'fan-token-derby',
    description: 'PSG (85) vs OM (81): upcoming (+3h), live in 1H (kickoff -20 min), live in 2H (kickoff -80 min). Both teams have a fan token.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const now = ctx.clock.now().getTime();
        const teams = { homeTeam: TEAM_FIXTURES.PSG, awayTeam: TEAM_FIXTURES.OM, league: LIGUE_1 };
        const matches = [
            matchFixture.upcoming({ ...teams, apiFootballId: nextTestMatchId(), kickoffAt: new Date(now + 180 * MIN) }),
            matchFixture.firstHalf({ ...teams, apiFootballId: nextTestMatchId(), kickoffAt: new Date(now - 20 * MIN) }),
            matchFixture.secondHalf({ ...teams, apiFootballId: nextTestMatchId(), kickoffAt: new Date(now - 80 * MIN) }),
        ];
        let contractsDeployed = 0;
        for (const match of matches) contractsDeployed += await persistAndMaybeDeploy(match, ctx, warnings);
        return { matchesCreated: matches.length, contractsDeployed, matchIds: matches.map((m) => m.getId()), warnings };
    },
};

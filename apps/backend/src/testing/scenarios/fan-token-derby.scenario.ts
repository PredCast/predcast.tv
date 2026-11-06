import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import { LIGUE_1, TEAM_FIXTURES } from '../fixtures/team.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

const MIN = 60_000;

/** PSG vs OM twice: upcoming (no kickoff marker yet) and live in 1H (kickoff marker inside the 1H range). */
export const fanTokenDerbyScenario: MatchScenario = {
    name: 'fan-token-derby',
    description: 'PSG (85) vs OM (81): one upcoming (+3h), one live in 1H (kickoff -20 min). Both teams have a fan token.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const now = ctx.clock.now().getTime();
        const teams = { homeTeam: TEAM_FIXTURES.PSG, awayTeam: TEAM_FIXTURES.OM, league: LIGUE_1 };
        const upcoming = matchFixture.upcoming({ ...teams, apiFootballId: nextTestMatchId(), kickoffAt: new Date(now + 180 * MIN) });
        const live = matchFixture.firstHalf({ ...teams, apiFootballId: nextTestMatchId(), kickoffAt: new Date(now - 20 * MIN) });
        let contractsDeployed = 0;
        for (const match of [upcoming, live]) contractsDeployed += await persistAndMaybeDeploy(match, ctx, warnings);
        return { matchesCreated: 2, contractsDeployed, matchIds: [upcoming.getId(), live.getId()], warnings };
    },
};

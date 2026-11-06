import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import { LIGUE_1, TEAM_FIXTURES } from '../fixtures/team.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

/** Neither club has a fan token: the chart block must not render at all. */
export const noFanTokenScenario: MatchScenario = {
    name: 'no-fan-token',
    description: 'Lille (79) vs Rennes (94), upcoming (+5h). No fan token on either side.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.upcoming({
            apiFootballId: nextTestMatchId(),
            homeTeam: TEAM_FIXTURES.LILLE,
            awayTeam: TEAM_FIXTURES.RENNES,
            league: LIGUE_1,
            kickoffAt: new Date(ctx.clock.now().getTime() + 300 * 60_000),
        });
        const contractsDeployed = await persistAndMaybeDeploy(match, ctx, warnings);
        return { matchesCreated: 1, contractsDeployed, matchIds: [match.getId()], warnings };
    },
};

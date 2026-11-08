import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import { LIGUE_1, TEAM_FIXTURES } from '../fixtures/team.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

/** Only the home side has a fan token: one chart tab, no cross pair. */
export const singleFanTokenScenario: MatchScenario = {
    name: 'single-fan-token',
    description: 'PSG (85) vs Lens (116), upcoming (+4h). Only the home team has a fan token.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.upcoming({
            apiFootballId: nextTestMatchId(),
            homeTeam: TEAM_FIXTURES.PSG,
            awayTeam: TEAM_FIXTURES.LENS,
            league: LIGUE_1,
            kickoffAt: new Date(ctx.clock.now().getTime() + 240 * 60_000),
        });
        const contractsDeployed = await persistAndMaybeDeploy(match, ctx, warnings);
        return { matchesCreated: 1, contractsDeployed, matchIds: [match.getId()], warnings };
    },
};

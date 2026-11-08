import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

export const liveFirstHalfScenario: MatchScenario = {
    name: 'live-first-half',
    description: 'One football match in 1H (kickoff -20 min). Verifies the generic "Live · Betting closed" state.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.firstHalf({
            apiFootballId: nextTestMatchId(),
            kickoffAt: new Date(ctx.clock.now().getTime() - 20 * 60_000),
        });
        const contractsDeployed = await persistAndMaybeDeploy(match, ctx, warnings);
        return {
            matchesCreated: 1,
            contractsDeployed,
            matchIds: [match.getId()],
            warnings,
        };
    },
};

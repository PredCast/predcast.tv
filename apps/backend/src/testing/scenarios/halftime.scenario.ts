import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

export const halftimeScenario: MatchScenario = {
    name: 'halftime',
    description: 'One football match in halftime (HT). Verifies "Halftime · Betting closed" UI pill.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.halftime({
            apiFootballId: nextTestMatchId(),
            kickoffAt: new Date(ctx.clock.now().getTime() - 50 * 60_000),
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

import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

export const kickoffBufferEdgeScenario: MatchScenario = {
    name: 'kickoff-buffer-edge',
    description: 'Match NS at T-90s — triggers KICKOFF_BUFFER in BettablePolicy (default buffer = 120s).',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.kickoffImminent({
            apiFootballId: nextTestMatchId(),
            kickoffAt: new Date(ctx.clock.now().getTime() + 90_000),
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

import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

export const cancelFlowScenario: MatchScenario = {
    name: 'cancel-flow',
    description: 'Match in CANC status. Used to verify cancelOpenMarketsForMatch opens claimRefund for pre-match bettors.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.cancelled({
            apiFootballId: nextTestMatchId(),
            kickoffAt: new Date(ctx.clock.now().getTime() - 30 * 60_000),
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

import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

/**
 * Bettable match for the gamification matchday QA (SMOKE.md): two accounts bet, one hedges, one
 * stakes under 5 USDC, then the match is resolved. The ledger side is pinned by
 * `__tests__/gamification-matchday.scenario.test.ts` and the L4 chain test.
 */
export const gamificationMatchdayScenario: MatchScenario = {
    name: 'gamification-matchday',
    description: 'Upcoming Ligue 1 match, deployed and published, kickoff +1 day. Bets → volume, hedge, win XP.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.upcoming({
            apiFootballId: nextTestMatchId(),
            homeTeam: { name: 'Olympique Lyonnais' },
            awayTeam: { name: 'AS Monaco' },
            league: { id: 61, name: 'Ligue 1' },
            kickoffAt: new Date(ctx.clock.now().getTime() + 24 * 3_600_000),
        });
        const contractsDeployed = await persistAndMaybeDeploy(match, ctx, warnings);
        return { matchesCreated: 1, contractsDeployed, matchIds: [match.getId()], warnings };
    },
};

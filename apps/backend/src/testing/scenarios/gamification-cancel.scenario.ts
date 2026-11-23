import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

/**
 * Bettable match for the cancelled-market QA (SMOKE.md): bet, then "Hide + cancel" from the admin;
 * the volume credits are reversed by new ledger rows. Pinned by
 * `__tests__/gamification-cancel.scenario.test.ts` and the L4 chain test.
 */
export const gamificationCancelScenario: MatchScenario = {
    name: 'gamification-cancel',
    description: 'Upcoming Premier League match, deployed and published, kickoff +1 day. Bets then admin cancel → volume reversed.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const match = matchFixture.upcoming({
            apiFootballId: nextTestMatchId(),
            homeTeam: { name: 'Aston Villa' },
            awayTeam: { name: 'Newcastle United' },
            league: { id: 39, name: 'Premier League' },
            kickoffAt: new Date(ctx.clock.now().getTime() + 24 * 3_600_000),
        });
        const contractsDeployed = await persistAndMaybeDeploy(match, ctx, warnings);
        return { matchesCreated: 1, contractsDeployed, matchIds: [match.getId()], warnings };
    },
};

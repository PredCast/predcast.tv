import { matchFixture, nextTestMatchId } from '../fixtures/match.fixtures';
import { LIGUE_1, TEAM_FIXTURES } from '../fixtures/team.fixtures';
import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { persistAndMaybeDeploy } from './types';

const DAY = 24 * 60 * 60_000;

/**
 * Admin deployment workflow: two upcoming matches left for the admin to deploy, plus (with contract
 * deployment) one deployed and published match and one deployed then hidden.
 */
export const adminDeployFlowScenario: MatchScenario = {
    name: 'admin-deploy-flow',
    description:
        'PSG vs OM (+1d) and Lille vs Rennes (+2d) not deployed: deploy them from the admin Markets page. '
        + 'With contracts: PSG vs Lens (+3d) deployed + published, OM vs Lille (+4d) deployed + hidden.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const warnings: string[] = [];
        const now = ctx.clock.now().getTime();
        const upcoming = (home: typeof TEAM_FIXTURES[keyof typeof TEAM_FIXTURES], away: typeof TEAM_FIXTURES[keyof typeof TEAM_FIXTURES], days: number) =>
            matchFixture.notDeployed({ apiFootballId: nextTestMatchId(), homeTeam: home, awayTeam: away, league: LIGUE_1, kickoffAt: new Date(now + days * DAY) });

        const toDeploy = [upcoming(TEAM_FIXTURES.PSG, TEAM_FIXTURES.OM, 1), upcoming(TEAM_FIXTURES.LILLE, TEAM_FIXTURES.RENNES, 2)];
        for (const match of toDeploy) await ctx.matchRepo.save(match);

        const published = upcoming(TEAM_FIXTURES.PSG, TEAM_FIXTURES.LENS, 3);
        const hidden = upcoming(TEAM_FIXTURES.OM, TEAM_FIXTURES.LILLE, 4);
        let contractsDeployed = 0;
        contractsDeployed += await persistAndMaybeDeploy(published, ctx, warnings);
        const hiddenDeployed = await persistAndMaybeDeploy(hidden, ctx, warnings);
        if (hiddenDeployed) await ctx.deploymentRepo.setPublishedAt(hidden.toRaw().apiFootballId, null);
        contractsDeployed += hiddenDeployed;

        const all = [...toDeploy, published, hidden];
        return { matchesCreated: all.length, contractsDeployed, matchIds: all.map((m) => m.getId()), warnings };
    },
};

import type { MatchScenario, MatchScenarioOutcome, ScenarioContext } from './types';
import { halftimeScenario } from './halftime.scenario';
import { kickoffBufferEdgeScenario } from './kickoff-buffer-edge.scenario';
import { cancelFlowScenario } from './cancel-flow.scenario';

// Composite scenario — rejoue les checks du SMOKE_no_live_betting.md :
//   - match en HT (UI pill differentiated)
//   - match NS dans le buffer kickoff (T-90s)
//   - match CANC (auto-cancel via cancelOpenMarketsForMatch)
// Pour les transitions live → halftime → 2H, utiliser la suite L4
// `no-live-betting.integration.test.ts` (Lot 4) qui peut faire avancer un
// MockClock entre les checks.
export const noLiveBettingFullScenario: MatchScenario = {
    name: 'no-live-betting-full',
    description: 'Composite: HT + kickoff-buffer-edge + cancel-flow. Mirrors SMOKE_no_live_betting.md.',
    async apply(ctx: ScenarioContext): Promise<MatchScenarioOutcome> {
        const sub = await Promise.resolve()
            .then(() => halftimeScenario.apply(ctx))
            .then(async (a) => {
                const b = await kickoffBufferEdgeScenario.apply(ctx);
                const c = await cancelFlowScenario.apply(ctx);
                return [a, b, c];
            });
        return {
            matchesCreated: sub.reduce((acc, s) => acc + s.matchesCreated, 0),
            contractsDeployed: sub.reduce((acc, s) => acc + s.contractsDeployed, 0),
            matchIds: sub.flatMap((s) => [...s.matchIds]),
            warnings: sub.flatMap((s) => [...s.warnings]),
        };
    },
};

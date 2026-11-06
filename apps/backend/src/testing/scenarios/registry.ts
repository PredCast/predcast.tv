import type { MatchScenario } from './types';
import { halftimeScenario } from './halftime.scenario';
import { kickoffBufferEdgeScenario } from './kickoff-buffer-edge.scenario';
import { liveFirstHalfScenario } from './live-first-half.scenario';
import { upcomingSaturdayScenario } from './upcoming-saturday.scenario';
import { cancelFlowScenario } from './cancel-flow.scenario';
import { noLiveBettingFullScenario } from './no-live-betting-full.scenario';
import { fanTokenDerbyScenario } from './fan-token-derby.scenario';
import { singleFanTokenScenario } from './single-fan-token.scenario';
import { noFanTokenScenario } from './no-fan-token.scenario';

const ALL: ReadonlyArray<MatchScenario> = [
    upcomingSaturdayScenario,
    kickoffBufferEdgeScenario,
    liveFirstHalfScenario,
    halftimeScenario,
    cancelFlowScenario,
    noLiveBettingFullScenario,
    fanTokenDerbyScenario,
    singleFanTokenScenario,
    noFanTokenScenario,
];

export const scenarioRegistry: ReadonlyMap<string, MatchScenario> = new Map(
    ALL.map((s) => [s.name, s]),
);

export function listScenarios(): ReadonlyArray<MatchScenario> {
    return ALL;
}

export function getScenario(name: string): MatchScenario | undefined {
    return scenarioRegistry.get(name);
}

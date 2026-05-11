import type { MatchScenario } from './types';
import { halftimeScenario } from './halftime.scenario';
import { kickoffBufferEdgeScenario } from './kickoff-buffer-edge.scenario';
import { upcomingSaturdayScenario } from './upcoming-saturday.scenario';
import { cancelFlowScenario } from './cancel-flow.scenario';
import { noLiveBettingFullScenario } from './no-live-betting-full.scenario';

const ALL: ReadonlyArray<MatchScenario> = [
    upcomingSaturdayScenario,
    kickoffBufferEdgeScenario,
    halftimeScenario,
    cancelFlowScenario,
    noLiveBettingFullScenario,
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

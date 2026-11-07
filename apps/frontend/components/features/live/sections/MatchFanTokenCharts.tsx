"use client";

import { useMemo } from "react";

import { classifyStatus } from "@chiliztv/domain/matches/policies/BettablePolicy";

import { FanTokenChartTabs } from "../components/charts/FanTokenChartTabs";
import { SelectedFanTokenContext } from "../context/selectedFanTokenContext";
import { buildChartTabs, resolveActiveTab, tradableSymbol } from "../domain/fanTokenCharts";
import { useChartTabParam } from "../hooks/useChartTabParam";
import { FanTokenChartPanel } from "./FanTokenChartPanel";

interface MatchFanTokenChartsProps {
  readonly homeFanToken: string | null;
  readonly awayFanToken: string | null;
  readonly status: string;
  readonly kickoffAt: string;
}

/**
 * Fan-token price charts under the stream: one tab per side's token plus the HOME/AWAY pair,
 * a single chart mounted at a time. Renders nothing when neither club has a token.
 */
export function MatchFanTokenCharts({ homeFanToken, awayFanToken, status, kickoffAt }: MatchFanTokenChartsProps) {
  const tabs = useMemo(() => buildChartTabs(homeFanToken, awayFanToken), [homeFanToken, awayFanToken]);
  const [requested, setRequested] = useChartTabParam();
  const active = resolveActiveTab(tabs, requested);
  if (!active) return null;

  const kind = classifyStatus(status);
  return (
    <SelectedFanTokenContext.Provider value={tradableSymbol(active)}>
      <section aria-label="Fan-token charts" className="flex flex-col gap-3 rounded-xl border border-[#1E1E1E] bg-[#111] p-4">
        <FanTokenChartTabs tabs={tabs} activeId={active.id} onSelect={setRequested} />
        <FanTokenChartPanel tab={active} kickoffAt={kickoffAt} live={kind === "live" || kind === "upcoming"} />
      </section>
    </SelectedFanTokenContext.Provider>
  );
}

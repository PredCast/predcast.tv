"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { priceChange, pricePrecision, type ChartEvent } from "@chiliztv/domain/prices/chartMath";
import type { PriceHistoryRangeDto } from "@chiliztv/shared";

import { ChartError } from "../components/charts/ChartError";
import { ChartSkeleton } from "../components/charts/ChartSkeleton";
import { FanTokenChartHeader } from "../components/charts/FanTokenChartHeader";
import type { ChartStyle, FanTokenChartTab } from "../domain/fanTokenCharts";
import { useChartSeries } from "../hooks/useChartSeries";
import { useElementWidth } from "../hooks/useElementWidth";
import { useFanTokenChartData } from "../hooks/useFanTokenChartData";

// Canvas chart: client-only, kept out of the server bundle and the first paint.
const PriceChart = dynamic(() => import("../components/charts/PriceChart"), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

const SOURCE_LABELS: Record<string, string> = { coingecko: "CoinGecko" };

interface FanTokenChartPanelProps {
  readonly tab: FanTokenChartTab;
  /** Match events drawn as markers (kick-off, HT, 2nd half). */
  readonly events: ReadonlyArray<ChartEvent>;
  /** Match live or upcoming: the history keeps refreshing. */
  readonly live: boolean;
}

export function FanTokenChartPanel({ tab, events, live }: FanTokenChartPanelProps) {
  const [range, setRange] = useState<PriceHistoryRangeDto>("24h");
  const [style, setStyle] = useState<ChartStyle>("line");
  const data = useFanTokenChartData(tab, range, live);
  const [chartBoxRef, chartWidth] = useElementWidth<HTMLDivElement>();
  const { series, markers, candlesAvailable } = useChartSeries(data.points, events, style, tab, range, chartWidth);
  const last = data.points.at(-1)?.p ?? null;
  const precision = pricePrecision(last ?? 0);
  const unit = tab.kind === "cross" ? tab.quote : "≈ USD";

  const updatedLabel = data.updatedAt
    ? new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(data.updatedAt))
    : null;

  return (
    <div id="fan-token-chart-panel" role="tabpanel" aria-labelledby={`chart-tab-${tab.id}`} className="flex flex-col gap-3">
      <FanTokenChartHeader
        priceLabel={last === null ? null : last.toFixed(precision)}
        unit={unit}
        change={priceChange(data.points)}
        range={range}
        onRangeChange={setRange}
        sourceLabel={`Market price · ${SOURCE_LABELS[data.source ?? ""] ?? data.source ?? "—"}`}
        updatedLabel={updatedLabel}
        stale={data.stale}
        chartStyle={candlesAvailable ? { value: style, onChange: setStyle } : undefined}
      />
      <div ref={chartBoxRef} className="h-[220px] lg:h-[320px]">
        {data.isError && data.points.length === 0 ? (
          <ChartError onRetry={data.retry} />
        ) : data.isLoading ? (
          <ChartSkeleton />
        ) : (
          <PriceChart
            key={series.kind}
            series={series}
            markers={markers}
            precision={precision}
            unit={unit}
            showDate={range === "7d"}
          />
        )}
      </div>
    </div>
  );
}

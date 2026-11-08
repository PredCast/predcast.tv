import { useMemo } from "react";

import { candleTimeFor, toCandles } from "@chiliztv/domain/prices/candles";
import { snapEventMarkers, type ChartEvent, type SnappedMarker } from "@chiliztv/domain/prices/chartMath";
import type { PricePoint } from "@chiliztv/domain/prices/priceHistory";
import type { PriceHistoryRangeDto } from "@chiliztv/shared";

import { canShowCandles, candleBucketMs, type ChartSeries, type ChartStyle, type FanTokenChartTab } from "../domain/fanTokenCharts";

interface ChartSeriesResult {
  readonly series: ChartSeries;
  readonly markers: ReadonlyArray<SnappedMarker>;
  /** Whether the Line / Candles toggle applies to this tab and range. */
  readonly candlesAvailable: boolean;
}

/** Horizontal room two marker labels need not to overlap. */
const MARKER_LABEL_GAP_PX = 32;

/** Series to draw for the requested style; falls back to the area wherever candles do not apply. */
export function useChartSeries(
  points: ReadonlyArray<PricePoint>,
  events: ReadonlyArray<ChartEvent>,
  style: ChartStyle,
  tab: FanTokenChartTab,
  range: PriceHistoryRangeDto,
  /** Chart width in px; close markers group sooner on a narrow chart. */
  widthPx: number | null,
): ChartSeriesResult {
  const candlesAvailable = canShowCandles(tab, range);
  const bucketMs = candlesAvailable && style === "candles" ? candleBucketMs(range) : null;
  const minGapRatio = widthPx ? Math.min(0.5, MARKER_LABEL_GAP_PX / widthPx) : undefined;

  return useMemo(() => {
    if (bucketMs === null) {
      return { series: { kind: "area", points }, markers: snapEventMarkers(points, events, { minGapRatio }), candlesAvailable };
    }
    const candles = toCandles(points, bucketMs);
    const snap = (ms: number) => candleTimeFor(candles, bucketMs, ms);
    return { series: { kind: "candles", candles }, markers: snapEventMarkers(points, events, { snap, minGapRatio }), candlesAvailable };
  }, [points, events, bucketMs, candlesAvailable, minGapRatio]);
}

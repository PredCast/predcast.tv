"use client";

import { useEffect, useRef, useState } from "react";
import { createSeriesMarkers, type IChartApi, type ISeriesApi, type ISeriesMarkersPluginApi, type Time } from "lightweight-charts";

import type { SnappedMarker } from "@chiliztv/domain/prices/chartMath";

import type { ChartSeries } from "../../domain/fanTokenCharts";
import { addAreaSeries, addCandleSeries, createPriceChart, toChartTime } from "./chartSetup";
import { ChartTooltip, type ChartTooltipState } from "./ChartTooltip";

interface PriceChartProps {
  readonly series: ChartSeries;
  readonly markers: ReadonlyArray<SnappedMarker>;
  readonly precision: number;
  readonly unit: string;
  readonly showDate: boolean;
}

const TOOLTIP_W = 150;

/** Client-only chart (loaded through next/dynamic); the parent remounts it when the series kind changes. */
export default function PriceChart({ series, markers, precision, unit, showDate }: PriceChartProps) {
  const kind = series.kind;
  const boxRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const areaRef = useRef<ISeriesApi<"Area"> | null>(null);
  const candleRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const markersRef = useRef<ISeriesMarkersPluginApi<Time> | null>(null);
  const [tooltip, setTooltip] = useState<ChartTooltipState | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const chart = createPriceChart(box);
    const drawn = kind === "area" ? (areaRef.current = addAreaSeries(chart)) : (candleRef.current = addCandleSeries(chart));
    chartRef.current = chart;
    markersRef.current = createSeriesMarkers(drawn, []);
    return () => {
      chart.remove();
      chartRef.current = null;
      areaRef.current = null;
      candleRef.current = null;
      markersRef.current = null;
    };
  }, [kind]);

  useEffect(() => {
    const chart = chartRef.current;
    const drawn = areaRef.current ?? candleRef.current;
    if (!chart || !drawn) return;
    const fmtTime = new Intl.DateTimeFormat(undefined, showDate
      ? { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }
      : { hour: "2-digit", minute: "2-digit" });
    const fmt = (n: number) => n.toFixed(precision);
    const onMove: Parameters<IChartApi["subscribeCrosshairMove"]>[0] = (param) => {
      const box = boxRef.current;
      const bar = param.seriesData.get(drawn);
      if (!box || !param.point || !param.time || !bar) return setTooltip(null);
      const price = "close" in bar ? bar.close : "value" in bar ? bar.value : null;
      if (price === null) return setTooltip(null);
      const x = param.point.x + 12 + TOOLTIP_W > box.clientWidth ? param.point.x - TOOLTIP_W - 12 : param.point.x + 12;
      setTooltip({
        x: Math.max(4, x),
        y: Math.max(4, param.point.y - 52),
        timeLabel: fmtTime.format(new Date(Number(param.time) * 1000)),
        priceLabel: fmt(price),
        detail: "close" in bar ? `O ${fmt(bar.open)} · H ${fmt(bar.high)} · L ${fmt(bar.low)}` : undefined,
      });
    };
    chart.subscribeCrosshairMove(onMove);
    return () => chart.unsubscribeCrosshairMove(onMove);
  }, [kind, precision, showDate]);

  useEffect(() => {
    const priceFormat = { type: "price" as const, precision, minMove: 10 ** -precision };
    if (series.kind === "area" && areaRef.current) {
      areaRef.current.applyOptions({ priceFormat });
      areaRef.current.setData(series.points.map((pt) => ({ time: toChartTime(pt.t), value: pt.p })));
    } else if (series.kind === "candles" && candleRef.current) {
      candleRef.current.applyOptions({ priceFormat });
      candleRef.current.setData(
        series.candles.map((c) => ({ time: toChartTime(c.t), open: c.o, high: c.h, low: c.l, close: c.c })),
      );
    }
    markersRef.current?.setMarkers(
      markers.map((m) => ({ time: toChartTime(m.t), position: "aboveBar", shape: "arrowDown", color: "#F5C518", text: m.label })),
    );
    chartRef.current?.timeScale().fitContent();
  }, [series, markers, precision]);

  // The chart library owns `boxRef`'s children; React-rendered nodes stay in the sibling layer.
  return (
    <div className="relative h-full w-full" onMouseLeave={() => setTooltip(null)}>
      <div ref={boxRef} className="absolute inset-0" />
      <ChartTooltip state={tooltip} unit={unit} />
    </div>
  );
}

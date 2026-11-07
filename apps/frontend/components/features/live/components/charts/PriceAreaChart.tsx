"use client";

import { useEffect, useRef, useState } from "react";
import {
  AreaSeries,
  ColorType,
  CrosshairMode,
  createChart,
  createSeriesMarkers,
  type IChartApi,
  type ISeriesApi,
  type ISeriesMarkersPluginApi,
  type Time,
  type UTCTimestamp,
} from "lightweight-charts";

import type { PricePoint } from "@chiliztv/domain/prices/priceHistory";

import { ChartTooltip, type ChartTooltipState } from "./ChartTooltip";

export interface ChartEventMarker {
  /** Epoch ms, already snapped onto a series point. */
  readonly t: number;
  readonly label: string;
}

interface PriceAreaChartProps {
  readonly points: ReadonlyArray<PricePoint>;
  readonly markers: ReadonlyArray<ChartEventMarker>;
  readonly precision: number;
  readonly unit: string;
  readonly showDate: boolean;
}

const TOOLTIP_W = 140;
// lightweight-charts brands its timestamps; epoch seconds are what it expects.
const toTime = (ms: number) => Math.floor(ms / 1000) as UTCTimestamp;

/** Client-only chart (loaded through next/dynamic). TradingView attribution stays on, as the licence requires. */
export default function PriceAreaChart({ points, markers, precision, unit, showDate }: PriceAreaChartProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);
  const markersRef = useRef<ISeriesMarkersPluginApi<Time> | null>(null);
  const [tooltip, setTooltip] = useState<ChartTooltipState | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const chart = createChart(box, {
      autoSize: true,
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "rgba(255,255,255,0.45)",
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        fontSize: 10,
        attributionLogo: true,
      },
      grid: { vertLines: { color: "#141414" }, horzLines: { color: "#1A1A1A" } },
      rightPriceScale: { borderColor: "#1E1E1E" },
      timeScale: { borderColor: "#1E1E1E", timeVisible: true, secondsVisible: false },
      crosshair: {
        mode: CrosshairMode.Magnet,
        vertLine: { color: "rgba(255,255,255,0.25)", labelBackgroundColor: "#1A1A1A" },
        horzLine: { color: "rgba(255,255,255,0.25)", labelBackgroundColor: "#1A1A1A" },
      },
    });
    const series = chart.addSeries(AreaSeries, {
      lineColor: "#E8001D",
      topColor: "rgba(232,0,29,0.28)",
      bottomColor: "rgba(232,0,29,0)",
      lineWidth: 2,
      priceLineVisible: false,
    });
    chartRef.current = chart;
    seriesRef.current = series;
    markersRef.current = createSeriesMarkers(series, []);
    return () => {
      chart.remove();
      chartRef.current = null;
      seriesRef.current = null;
      markersRef.current = null;
    };
  }, []);

  useEffect(() => {
    const chart = chartRef.current;
    const series = seriesRef.current;
    if (!chart || !series) return;
    const fmtTime = new Intl.DateTimeFormat(undefined, showDate
      ? { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }
      : { hour: "2-digit", minute: "2-digit" });
    const onMove: Parameters<IChartApi["subscribeCrosshairMove"]>[0] = (param) => {
      const box = boxRef.current;
      const bar = param.seriesData.get(series);
      if (!box || !param.point || !param.time || !bar || !("value" in bar)) return setTooltip(null);
      const x = param.point.x + 12 + TOOLTIP_W > box.clientWidth ? param.point.x - TOOLTIP_W - 12 : param.point.x + 12;
      setTooltip({
        x: Math.max(4, x),
        y: Math.max(4, param.point.y - 44),
        timeLabel: fmtTime.format(new Date(Number(param.time) * 1000)),
        priceLabel: bar.value.toFixed(precision),
      });
    };
    chart.subscribeCrosshairMove(onMove);
    return () => chart.unsubscribeCrosshairMove(onMove);
  }, [precision, showDate]);

  useEffect(() => {
    const series = seriesRef.current;
    if (!series) return;
    series.applyOptions({ priceFormat: { type: "price", precision, minMove: 10 ** -precision } });
    series.setData(points.map((pt) => ({ time: toTime(pt.t), value: pt.p })));
    markersRef.current?.setMarkers(
      markers.map((m) => ({ time: toTime(m.t), position: "aboveBar", shape: "arrowDown", color: "#F5C518", text: m.label })),
    );
    chartRef.current?.timeScale().fitContent();
  }, [points, markers, precision]);

  // The chart library owns `boxRef`'s children; React-rendered nodes stay in the sibling layer.
  return (
    <div className="relative h-full w-full" onMouseLeave={() => setTooltip(null)}>
      <div ref={boxRef} className="absolute inset-0" />
      <ChartTooltip state={tooltip} unit={unit} />
    </div>
  );
}

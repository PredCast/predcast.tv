import {
  AreaSeries,
  CandlestickSeries,
  ColorType,
  CrosshairMode,
  createChart,
  type IChartApi,
  type ISeriesApi,
  type UTCTimestamp,
} from "lightweight-charts";

import { formatCrosshairTime, formatTickMark } from "./chartTimeFormat";

const UP = "#2dd4a4";
const DOWN = "#E8001D";

// lightweight-charts brands its timestamps; epoch seconds are what it expects.
export const toChartTime = (ms: number) => Math.floor(ms / 1000) as UTCTimestamp;

/** Chart shell shared by both series kinds. TradingView attribution stays on, as the licence requires. */
export function createPriceChart(box: HTMLElement): IChartApi {
  return createChart(box, {
    autoSize: true,
    layout: {
      background: { type: ColorType.Solid, color: "transparent" },
      textColor: "rgba(255,255,255,0.45)",
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: 10,
      attributionLogo: true,
    },
    localization: { timeFormatter: formatCrosshairTime },
    grid: { vertLines: { color: "#141414" }, horzLines: { color: "#1A1A1A" } },
    rightPriceScale: { borderColor: "#1E1E1E" },
    timeScale: {
      borderColor: "#1E1E1E",
      timeVisible: true,
      secondsVisible: false,
      tickMarkFormatter: formatTickMark,
      // Live events sit on the last bars; the pane clips marker text at its edge.
      rightOffsetPixels: 40,
    },
    crosshair: {
      mode: CrosshairMode.Magnet,
      vertLine: { color: "rgba(255,255,255,0.25)", labelBackgroundColor: "#1A1A1A" },
      horzLine: { color: "rgba(255,255,255,0.25)", labelBackgroundColor: "#1A1A1A" },
    },
  });
}

export function addAreaSeries(chart: IChartApi): ISeriesApi<"Area"> {
  return chart.addSeries(AreaSeries, {
    lineColor: DOWN,
    topColor: "rgba(232,0,29,0.28)",
    bottomColor: "rgba(232,0,29,0)",
    lineWidth: 2,
    priceLineVisible: false,
  });
}

export function addCandleSeries(chart: IChartApi): ISeriesApi<"Candlestick"> {
  return chart.addSeries(CandlestickSeries, {
    upColor: UP,
    downColor: DOWN,
    wickUpColor: UP,
    wickDownColor: DOWN,
    borderVisible: false,
    priceLineVisible: false,
  });
}

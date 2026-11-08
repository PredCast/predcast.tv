import type { Candle } from "@chiliztv/domain/prices/candles";
import type { ChartEvent } from "@chiliztv/domain/prices/chartMath";
import type { PricePoint } from "@chiliztv/domain/prices/priceHistory";
import type { PriceHistoryRangeDto } from "@chiliztv/shared";

import type { Match } from "@/types/api.types";

export type FanTokenChartTab =
  | { readonly id: string; readonly kind: "token"; readonly symbol: string; readonly label: string }
  | { readonly id: string; readonly kind: "cross"; readonly base: string; readonly quote: string; readonly label: string };

export const CHART_RANGES: ReadonlyArray<PriceHistoryRangeDto> = ["1h", "24h", "7d"];

/**
 * HOME/USDC, AWAY/USDC, then HOME/AWAY when both sides have a token. Prices are USD;
 * the tabs read USDC as the product asks, the tooltip says "≈ USD".
 */
export function buildChartTabs(home: string | null, away: string | null): FanTokenChartTab[] {
  const tabs: FanTokenChartTab[] = [];
  for (const symbol of [home, away]) {
    if (symbol) tabs.push({ id: symbol.toLowerCase(), kind: "token", symbol, label: `${symbol}/USDC` });
  }
  if (home && away) {
    tabs.push({ id: `${home}-${away}`.toLowerCase(), kind: "cross", base: home, quote: away, label: `${home}/${away}` });
  }
  return tabs;
}

/** Tab from the `?chart=` param when valid, otherwise the home token. */
export function resolveActiveTab(tabs: ReadonlyArray<FanTokenChartTab>, requested: string | null): FanTokenChartTab | null {
  return tabs.find((t) => t.id === requested?.toLowerCase()) ?? tabs[0] ?? null;
}

/** Token a Buy / Sell action would trade for this tab; none for the cross pair. */
export function tradableSymbol(tab: FanTokenChartTab | null): string | null {
  return tab?.kind === "token" ? tab.symbol : null;
}

/** Bucket used to align the two USD series of a cross pair (matches the series resolution). */
export function crossBucketMs(range: PriceHistoryRangeDto): number {
  return range === "7d" ? 60 * 60_000 : 5 * 60_000;
}

export const RANGE_LABELS: Record<PriceHistoryRangeDto, string> = { "1h": "1H", "24h": "24H", "7d": "7D" };

export type ChartStyle = "line" | "candles";

export type ChartSeries =
  | { readonly kind: "area"; readonly points: ReadonlyArray<PricePoint> }
  | { readonly kind: "candles"; readonly candles: ReadonlyArray<Candle> };

/**
 * Candle size per range, sized so each candle holds several samples (5-min on 24H, hourly on 7D).
 * Null on 1H: one sample per candle would draw flat dashes.
 */
export function candleBucketMs(range: PriceHistoryRangeDto): number | null {
  if (range === "24h") return 30 * 60_000;
  if (range === "7d") return 4 * 60 * 60_000;
  return null;
}

/** Candles only for a single token: the high of a ratio is not the ratio of the highs. */
export function canShowCandles(tab: FanTokenChartTab, range: PriceHistoryRangeDto): boolean {
  return tab.kind === "token" && candleBucketMs(range) !== null;
}

export type MatchTimeline = Pick<Match, "startTime" | "firstHalfStartedAt" | "halftimeStartedAt" | "secondHalfStartedAt">;

const toMs = (iso: string | null): number | null => (iso ? Date.parse(iso) : null);

/** Short labels so close markers stay readable; kick-off falls back to the scheduled time until reported. */
export function matchChartEvents(match: MatchTimeline): ChartEvent[] {
  return [
    { atMs: toMs(match.firstHalfStartedAt ?? match.startTime), label: "KO" },
    { atMs: toMs(match.halftimeStartedAt), label: "HT" },
    { atMs: toMs(match.secondHalfStartedAt), label: "2H" },
  ];
}

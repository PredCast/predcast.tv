"use client";

import { useMemo } from "react";

import { crossRateSeries } from "@chiliztv/domain/prices/crossRate";
import type { PricePoint } from "@chiliztv/domain/prices/priceHistory";
import type { PriceHistoryRangeDto } from "@chiliztv/shared";

import { useTokenPriceHistory } from "@/hooks/api";

import { crossBucketMs, type FanTokenChartTab } from "../domain/fanTokenCharts";

export interface FanTokenChartData {
  readonly points: ReadonlyArray<PricePoint>;
  readonly source: string | null;
  readonly stale: boolean;
  readonly updatedAt: string | null;
  readonly isLoading: boolean;
  readonly isError: boolean;
  readonly retry: () => void;
}

/** Series for the active tab: one USD history, or the HOME/AWAY ratio of two. */
export function useFanTokenChartData(tab: FanTokenChartTab, range: PriceHistoryRangeDto, live: boolean): FanTokenChartData {
  const first = tab.kind === "token" ? tab.symbol : tab.base;
  const second = tab.kind === "cross" ? tab.quote : null;
  const a = useTokenPriceHistory(first, range, { live });
  const b = useTokenPriceHistory(second, range, { live, enabled: second !== null });

  const points = useMemo(() => {
    if (!a.data) return [];
    if (second === null) return a.data.points;
    return b.data ? crossRateSeries(a.data.points, b.data.points, crossBucketMs(range)) : [];
  }, [a.data, b.data, second, range]);

  const loaded = second === null ? [a.data] : [a.data, b.data];
  const oldest = loaded.map((d) => d?.updatedAt).filter((d): d is string => !!d).sort()[0] ?? null;

  return {
    points,
    source: a.data?.source ?? null,
    stale: loaded.some((d) => d?.stale),
    updatedAt: oldest,
    isLoading: a.isLoading || (second !== null && b.isLoading),
    isError: a.isError || (second !== null && b.isError),
    retry: () => {
      void a.refetch();
      if (second !== null) void b.refetch();
    },
  };
}

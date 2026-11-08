/** One KPI over its period and the previous one; amounts are raw decimal strings. */
export interface KpiAggregate {
    readonly current: string;
    readonly previous: string;
    /** Oldest first; null when the KPI has no history. */
    readonly series: ReadonlyArray<string> | null;
}

export interface DashboardKpiAggregates {
    readonly volume24h: KpiAggregate;
    readonly bettors24h: KpiAggregate;
    readonly feesSettled24h: KpiAggregate;
    readonly deployments7d: KpiAggregate;
    readonly avgPool30d: KpiAggregate & { readonly events: number };
    readonly openReports: KpiAggregate & { readonly highSeverity: number };
    readonly activeBans: KpiAggregate & { readonly permanent: number };
}

export interface MarketStateRow {
    readonly contractAddress: string;
    readonly marketId: number;
    readonly marketType: string;
    readonly line: number;
    /** MarketState enum value: 0 Inactive … 5 Cancelled. */
    readonly state: number;
}

/** SQL aggregates behind the admin dashboard (migration 042). */
export interface IDashboardStatsRepository {
    kpiAggregates(now: Date): Promise<DashboardKpiAggregates>;
    marketStates(contractAddresses: ReadonlyArray<string>): Promise<ReadonlyArray<MarketStateRow>>;
}

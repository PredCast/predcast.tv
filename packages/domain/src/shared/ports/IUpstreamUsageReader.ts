/** Paid / rate-limited upstream usage, as counted by the backend itself. */
export interface UpstreamUsage {
    readonly apiFootball: { readonly usedToday: number | null; readonly dailyLimit: number | null };
    readonly coingecko: { readonly usedThisMonth: number | null; readonly monthlyBudget: number };
}

export interface IUpstreamUsageReader {
    read(now: Date): Promise<UpstreamUsage>;
}

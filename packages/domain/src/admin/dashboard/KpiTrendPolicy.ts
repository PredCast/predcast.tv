export interface KpiTrend {
    readonly dir: 'up' | 'down' | 'flat';
    readonly absolute: number;
    /** Relative change in %, one decimal; null when the previous period is 0. */
    readonly percent: number | null;
}

/** Change of a KPI against its previous period (24 h, 7 d or 30 d). */
export function trendOf(current: number, previous: number): KpiTrend {
    const absolute = current - previous;
    const dir = absolute > 0 ? 'up' : absolute < 0 ? 'down' : 'flat';
    const percent = previous === 0 ? null : Math.round((Math.abs(absolute) / previous) * 1000) / 10;
    return { dir, absolute: Math.abs(absolute), percent };
}

/** Pure display-layer formatters shared across the dashboard. */

export interface FmtUsdOptions {
    readonly compact?: boolean;
    readonly signed?: boolean;
    readonly dp?: number;
}

/** "$1,234.56", with optional sign / K-M compaction / dp. */
export function fmtUsd(n: number, opts: FmtUsdOptions = {}): string {
    const { compact = false, signed = false, dp = 2 } = opts;
    const sign = signed && n > 0 ? '+' : '';
    if (compact && Math.abs(n) >= 1_000) {
        const v = n / 1_000;
        return `${sign}$${v.toFixed(v >= 100 ? 0 : 1)}K`;
    }
    return `${sign}$${n.toLocaleString('en-US', {
        minimumFractionDigits: dp,
        maximumFractionDigits: dp,
    })}`;
}

/** "+12.5%" / "-3.2%". Tightens precision below 10%. */
export function fmtPct(n: number, signed = true): string {
    const sign = signed && n > 0 ? '+' : '';
    return `${sign}${n.toFixed(n === 0 ? 0 : Math.abs(n) < 10 ? 2 : 1)}%`;
}

export function fmtNum(n: number): string {
    return n.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

export function truncAddr(addr?: string | null): string {
    if (!addr) return '';
    if (addr.length <= 10) return addr;
    return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

/** "5m ago" / "3h ago" / "2d ago", "—" if invalid. */
export function timeAgo(ts: number | null | undefined): string {
    if (ts == null || !Number.isFinite(ts)) return '—';
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return `${s}s ago`;
    if (s < 3_600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86_400) return `${Math.floor(s / 3_600)}h ago`;
    return `${Math.floor(s / 86_400)}d ago`;
}

/** Cooldown countdown — "Ready" at 0. */
export function fmtCountdown(ms: number): string {
    if (ms <= 0) return 'Ready';
    const m = Math.floor(ms / 60_000);
    if (m < 60) return `${m}m`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ${m % 60}m`;
    return `${Math.floor(h / 24)}d`;
}

/** Stable 0..N-1 hash from a string. */
export function hashIdx(str: string, n: number): number {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h % n;
}

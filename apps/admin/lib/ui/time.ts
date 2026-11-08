/** "30s" / "10m" / "1h" / "1d" — job cadences and short spans. */
export function fmtSpan(ms: number): string {
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.round(h / 24)}d`;
}

/** Run durations: "0.4s", "12.1s", "2m 05s". */
export function fmtDuration(ms: number): string {
  if (ms < 60_000) return `${(ms / 1000).toFixed(1)}s`;
  const m = Math.floor(ms / 60_000);
  const s = Math.round((ms % 60_000) / 1000);
  return `${m}m ${String(s).padStart(2, '0')}s`;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Local wall-clock time "14:15:02". */
export function fmtClock(date: Date): string {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/** Local "14:15". */
export function fmtHourMinute(date: Date): string {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/** Next run: "in 18s" within two minutes, "due" when passed, wall-clock time otherwise. */
export function fmtNextRun(next: Date, now: Date): string {
  const delta = next.getTime() - now.getTime();
  if (delta <= 0) return 'due';
  if (delta < 120_000) return `in ${Math.ceil(delta / 1000)}s`;
  return fmtHourMinute(next);
}

/** "2m ago" / "3h ago" / "4d ago". */
export function fmtAgo(date: Date, now: Date): string {
  const delta = Math.max(0, now.getTime() - date.getTime());
  if (delta < 60_000) return `${Math.floor(delta / 1000)}s ago`;
  return `${fmtSpan(delta)} ago`;
}

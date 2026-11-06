const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

/** Compact remaining time: "2d 4h", "3h 12m", "45m", "<1m". */
export function formatCountdown(ms: number): string {
  if (ms >= DAY) return `${Math.floor(ms / DAY)}d ${Math.floor((ms % DAY) / HOUR)}h`;
  if (ms >= HOUR) return `${Math.floor(ms / HOUR)}h ${Math.floor((ms % HOUR) / MIN)}m`;
  if (ms >= MIN) return `${Math.floor(ms / MIN)}m`;
  return "<1m";
}

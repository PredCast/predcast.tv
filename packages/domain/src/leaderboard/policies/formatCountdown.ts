// Pure formatter — `nowMs` passed in so tests pin the clock to fixed
// timestamps without mocking Date. Returns "33d 04h" / "4h 12m" / "12m"
// depending on remaining duration. "closed" when the target is reached.

export function formatCountdown(targetMs: number, nowMs: number): string {
    const diff = targetMs - nowMs;
    if (diff <= 0) return 'closed';
    const totalMin = Math.floor(diff / 60_000);
    const days = Math.floor(totalMin / (60 * 24));
    const hours = Math.floor((totalMin / 60) % 24);
    const mins = totalMin % 60;
    if (days > 0) return `${days}d ${String(hours).padStart(2, '0')}h`;
    if (hours > 0) return `${hours}h ${String(mins).padStart(2, '0')}m`;
    return `${mins}m`;
}

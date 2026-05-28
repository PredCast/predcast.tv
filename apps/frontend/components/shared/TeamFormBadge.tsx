// 5 colored squares representing a team's last 5 W/D/L results.
// Pure stateless display — palette aligned with `tintForOutcome` from
// the activity domain (green wins, gold draws, red losses).

interface TeamFormBadgeProps {
    /** "WWLDW" string, 0-5 chars, case-insensitive. Null/empty → 5 gray squares. */
    readonly form: string | null | undefined;
    /** "sm" = 4px squares (match cards, default), "md" = 6px (hero strips). */
    readonly size?: 'sm' | 'md';
}

const COLORS: Record<string, string> = {
    W: '#2dd4a4',
    D: '#F5C518',
    L: '#FF1737',
};
const EMPTY = 'rgba(255,255,255,0.15)';

export function TeamFormBadge({ form, size = 'sm' }: TeamFormBadgeProps) {
    const raw = (form ?? '').toUpperCase();
    // Right-aligned: most recent result is the rightmost square.
    const chars = raw.length >= 5 ? raw.slice(-5) : ' '.repeat(5 - raw.length) + raw;
    const side = size === 'sm' ? 4 : 6;
    const gap = size === 'sm' ? 2 : 3;

    const summary = raw.length > 0
        ? `Last ${raw.length}: ${raw.split('').join(' ')}`
        : 'No recent form';

    return (
        <span
            className="inline-flex items-center"
            style={{ gap }}
            aria-label={summary}
            title={summary}
        >
            {chars.split('').map((c, i) => (
                <span
                    key={i}
                    aria-hidden
                    className="block rounded-[1px]"
                    style={{
                        width: side,
                        height: side,
                        background: COLORS[c] ?? EMPTY,
                    }}
                />
            ))}
        </span>
    );
}

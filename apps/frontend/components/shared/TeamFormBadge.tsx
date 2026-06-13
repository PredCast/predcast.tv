// 5 lettered tiles representing a team's last 5 W/D/L results.
// Pure stateless display — palette aligned with `tintForOutcome` from
// the activity domain (green wins, gold draws, red losses). Each tile shows
// its W/D/L letter; empty slots stay blank.

interface TeamFormBadgeProps {
    /** "WWLDW" string, 0-5 chars, case-insensitive. Null/empty → 5 blank tiles. */
    readonly form: string | null | undefined;
    /** "sm" = 14px tiles (match cards, default), "md" = 16px (hero strips). */
    readonly size?: 'sm' | 'md';
}

const COLORS: Record<string, string> = {
    W: '#2dd4a4',
    D: '#F5C518',
    L: '#FF1737',
};
// Letter colour per result — dark text on the light green/gold tiles, white
// on the red loss tile, for legible contrast at 8px.
const TEXT: Record<string, string> = {
    W: '#0A0A0A',
    D: '#0A0A0A',
    L: '#ffffff',
};
const EMPTY = 'rgba(255,255,255,0.10)';

export function TeamFormBadge({ form, size = 'sm' }: TeamFormBadgeProps) {
    const raw = (form ?? '').toUpperCase();
    // Right-aligned: most recent result is the rightmost tile.
    const chars = raw.length >= 5 ? raw.slice(-5) : ' '.repeat(5 - raw.length) + raw;
    const side = size === 'sm' ? 14 : 16;
    const gap = size === 'sm' ? 3 : 4;
    const fontSize = size === 'sm' ? 8 : 9;

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
            {chars.split('').map((c, i) => {
                const known = c === 'W' || c === 'D' || c === 'L';
                return (
                    <span
                        key={i}
                        aria-hidden
                        className="font-mono-ctv flex items-center justify-center rounded-[3px] font-bold leading-none"
                        style={{
                            width: side,
                            height: side,
                            fontSize,
                            background: known ? COLORS[c] : EMPTY,
                            color: known ? TEXT[c] : 'transparent',
                        }}
                    >
                        {known ? c : ''}
                    </span>
                );
            })}
        </span>
    );
}

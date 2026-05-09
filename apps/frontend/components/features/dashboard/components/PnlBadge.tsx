'use client';

interface PnlBadgeProps {
    readonly value: number;
    readonly suffix?: string;
    readonly size?: 'sm' | 'lg';
}

/** Colored ▲/▼ pill — green for gains, red for losses, dim for zero. */
export function PnlBadge({ value, suffix = '%', size = 'sm' }: PnlBadgeProps) {
    const positive = value > 0;
    const negative = value < 0;
    const color = positive ? '#2dd4a4' : negative ? '#FF1737' : 'rgba(255,255,255,0.45)';
    const bg = positive
        ? 'rgba(45,212,164,0.10)'
        : negative
            ? 'rgba(255,23,55,0.10)'
            : 'rgba(255,255,255,0.04)';
    const arrow = positive ? '▲' : negative ? '▼' : '·';
    const sized = size === 'lg' ? 'px-2.5 py-1 text-[12px] tracking-[0.10em]' : 'px-2 py-[3px] text-[10px] tracking-[0.14em]';
    const text = `${positive ? '+' : ''}${value.toFixed(Math.abs(value) < 10 ? 2 : 1)}${suffix}`;
    return (
        <span
            className={`font-mono-ctv inline-flex items-center gap-1.5 rounded-md font-bold ${sized}`}
            style={{ color, background: bg, border: `1px solid ${color}33` }}
        >
            <span aria-hidden style={{ fontSize: '0.85em' }}>{arrow}</span>
            {text}
        </span>
    );
}

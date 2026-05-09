'use client';

interface WinRateBarProps {
    readonly pct: number;
}

export function WinRateBar({ pct }: WinRateBarProps) {
    const clamped = Math.max(0, Math.min(100, pct));
    return (
        <div className="mt-1 h-[6px] w-full overflow-hidden rounded-full border border-[#1E1E1E] bg-[#1A1A1A]">
            <div
                className="h-full rounded-full"
                style={{ width: `${clamped}%`, background: 'linear-gradient(90deg, #E8001D, #FF1737)' }}
            />
        </div>
    );
}

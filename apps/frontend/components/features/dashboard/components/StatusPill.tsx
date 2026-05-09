'use client';

import type { BetStatus } from '../domain/bets';

type DisplayStatus = Lowercase<BetStatus> | 'claimable';

interface StatusPillProps {
    readonly status: DisplayStatus;
}

const MAP: Record<DisplayStatus, { color: string; label: string }> = {
    pending:   { color: '#F5C518', label: 'Pending' },
    won:       { color: '#2dd4a4', label: 'Won' },
    lost:      { color: '#FF1737', label: 'Lost' },
    refunded:  { color: 'rgba(255,255,255,0.65)', label: 'Refunded' },
    claimable: { color: '#E8001D', label: 'Claimable' },
};

export function StatusPill({ status }: StatusPillProps) {
    const m = MAP[status];
    return (
        <span
            className="font-mono-ctv inline-flex items-center gap-1.5 rounded-md px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.14em]"
            style={{ color: m.color, background: m.color + '14', border: `1px solid ${m.color}40` }}
        >
            <span className="h-[5px] w-[5px] rounded-full" style={{ background: m.color }} />
            {m.label}
        </span>
    );
}

'use client';

import { ACTIVITY_META, type ActivityRow as ActivityRowType } from '../domain/activity';
import { fmtUsd, timeAgo } from '../domain/formatters';

interface ActivityRowProps {
    readonly row: ActivityRowType;
}

export function ActivityRow({ row }: ActivityRowProps) {
    const m = ACTIVITY_META[row.type];
    const positive = row.amountUSDC > 0;
    const accentBg = m.accent.startsWith('#') ? m.accent + '14' : 'rgba(255,255,255,0.04)';
    return (
        <div
            className="grid items-center gap-4 border-b border-[#1E1E1E] px-6 py-3.5 transition-colors hover:bg-white/[0.015]"
            style={{ gridTemplateColumns: '100px minmax(0,1fr) 140px 140px' }}
        >
            <div>
                <span
                    className="font-mono-ctv inline-flex items-center gap-1.5 rounded-md px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: m.accent, background: accentBg, border: `1px solid ${m.accent}40` }}
                >
                    {m.label}
                </span>
            </div>
            <div className="min-w-0">
                <div className="truncate text-[13px] text-white/85">{row.label}</div>
                <div className="font-mono-ctv mt-0.5 text-[10px] uppercase tracking-[0.14em] text-white/35">
                    {timeAgo(row.t)}
                </div>
            </div>
            <div
                className="font-mono-ctv text-right text-[13px] font-semibold tabular-nums"
                style={{ color: row.amountUSDC === 0 ? 'rgba(255,255,255,0.45)' : positive ? '#2dd4a4' : '#fff' }}
            >
                {fmtUsd(row.amountUSDC, { signed: true })}
            </div>
            <div className="font-mono-ctv text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                {row.ref}
            </div>
        </div>
    );
}

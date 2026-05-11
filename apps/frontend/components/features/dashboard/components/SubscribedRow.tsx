'use client';

import { Avatar } from './Avatar';
import type { SubscribedStreamer } from '../domain/streamers';

interface SubscribedRowProps {
    readonly sub: SubscribedStreamer;
}

const EXPIRING_SOON_DAYS = 5;

export function SubscribedRow({ sub }: SubscribedRowProps) {
    const daysLeft = Math.max(0, Math.floor((sub.renewsAt - Date.now()) / 86_400_000));
    const expiringSoon = daysLeft <= EXPIRING_SOON_DAYS;

    return (
        <div className="flex items-center justify-between gap-4 border-b border-[#1E1E1E] py-3 last:border-0">
            <div className="flex min-w-0 items-center gap-3">
                <Avatar seed={sub.streamerId} label={sub.name} size={36} />
                <div className="min-w-0">
                    <div className="font-display truncate text-[14px] font-bold uppercase leading-none tracking-[-0.005em] text-white">
                        {sub.name}
                    </div>
                    {sub.monthlyUSDC != null && (
                        <div className="font-mono-ctv mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                            ${sub.monthlyUSDC.toFixed(2)} / month
                        </div>
                    )}
                </div>
            </div>
            <span
                className="font-mono-ctv flex-shrink-0 rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em]"
                style={{
                    borderColor: expiringSoon ? 'rgba(245,197,24,0.4)' : '#2A2A2A',
                    color: expiringSoon ? '#F5C518' : 'rgba(255,255,255,0.55)',
                    background: expiringSoon ? 'rgba(245,197,24,0.06)' : 'transparent',
                }}
            >
                Renews · {daysLeft}d
            </span>
        </div>
    );
}

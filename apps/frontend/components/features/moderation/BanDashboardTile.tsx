'use client';

import { ShieldOff } from 'lucide-react';

import { useMyBan } from '@/hooks/api/useMyBan';

/**
 * Dashboard notice while a ban is active — renders nothing for clean
 * accounts. Sits under the hero action pills.
 */
export function BanDashboardTile() {
  const { data } = useMyBan();
  const ban = data?.ban;
  if (!ban || ban.status !== 'active') return null;

  const permanent = ban.expiresAt === null;

  return (
    <div
      className="mt-4 flex items-start gap-3 rounded-xl border p-4"
      style={{ borderColor: 'rgba(232,0,29,0.3)', background: 'rgba(232,0,29,0.05)' }}
    >
      <ShieldOff aria-hidden className="mt-0.5 shrink-0 text-[#E8001D]" size={16} />
      <div>
        <div className="font-mono-ctv text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
          Live access suspended
        </div>
        <p className="mt-1 text-[12px] font-light leading-[1.5] text-white/65">
          {permanent
            ? 'Your access to live rooms, chat and streaming is suspended permanently following community reports.'
            : `Your access to live rooms, chat and streaming is suspended until ${new Date(ban.expiresAt as string).toLocaleString()}.`}{' '}
          Betting claims remain available.
        </p>
      </div>
    </div>
  );
}

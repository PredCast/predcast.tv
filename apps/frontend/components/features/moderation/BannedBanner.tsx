'use client';

import { useRouter } from 'next/navigation';
import { ShieldOff } from 'lucide-react';

import type { BanDto } from '@chiliztv/shared';

interface BannedBannerProps {
  ban: BanDto;
}

/**
 * Full-page gate shown on /live when the connected wallet is banned. The
 * copy is explicit about the known V1 gap: the raw HLS URL is not signed,
 * what is suspended is the product access (chat, rooms, streams).
 */
export function BannedBanner({ ban }: BannedBannerProps) {
  const router = useRouter();
  const permanent = ban.expiresAt === null;

  return (
    <div className="flex min-h-svh items-center justify-center bg-[#0A0A0A] px-6">
      <div
        className="w-full max-w-[440px] rounded-xl border p-8 text-center"
        style={{ borderColor: 'rgba(232,0,29,0.3)', background: 'rgba(232,0,29,0.04)' }}
      >
        <ShieldOff aria-hidden className="mx-auto mb-5 text-[#E8001D]" size={28} />
        <div className="font-mono-ctv mb-3 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8001D]">
          <span aria-hidden className="block h-0.5 w-4 bg-[#E8001D]" />
          Account restricted
        </div>
        <h1 className="font-display mb-3 text-[28px] font-extrabold uppercase leading-tight text-white">
          Your live access is suspended
        </h1>
        <p className="mb-2 text-[14px] font-light leading-[1.55] text-white/65">
          Following community reports, your access to live rooms, chat and
          streaming is suspended{permanent ? ' permanently' : ''}. Your funds
          and open positions are not affected — you can still claim winnings.
        </p>
        {!permanent && ban.expiresAt && (
          <p className="font-mono-ctv mb-6 text-[11px] uppercase tracking-[0.14em] text-[#F5C518]">
            Until {new Date(ban.expiresAt).toLocaleString()}
          </p>
        )}
        <button
          type="button"
          onClick={() => router.push('/dashboard')}
          className="font-mono-ctv mt-2 rounded-md bg-[#E8001D] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#FF1737]"
        >
          Go to dashboard
        </button>
      </div>
    </div>
  );
}

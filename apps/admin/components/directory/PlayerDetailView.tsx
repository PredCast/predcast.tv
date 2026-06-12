'use client';

import { usePlayerDetail } from '@/hooks/api/usePlayers';
import { CopyButton } from '@/components/common/CopyButton';
import { PlayerSummaryCards } from './PlayerSummaryCards';
import { PlayerBetsTable } from './PlayerBetsTable';

export function PlayerDetailView({ wallet }: Readonly<{ wallet: string }>) {
  const { data, isLoading, isError } = usePlayerDetail(wallet);

  if (isLoading) {
    return <p className="font-mono-ctv mt-6 text-[11px] uppercase tracking-[0.14em] text-white/35">Loading…</p>;
  }
  if (isError || !data) {
    return (
      <p className="font-mono-ctv mt-6 text-[11px] uppercase tracking-[0.14em] text-[#E8001D]">
        Player not found — no bets indexed for this wallet.
      </p>
    );
  }

  return (
    <div>
      <div className="mt-2 flex items-center gap-2">
        {data.player.username && (
          <span className="font-display text-[18px] font-bold uppercase text-white">{data.player.username}</span>
        )}
        <span className="font-mono-ctv text-[11px] tracking-[0.04em] text-white/55">{data.player.wallet}</span>
        <CopyButton value={data.player.wallet} label="Copy wallet address" />
      </div>
      <PlayerSummaryCards player={data.player} />
      <PlayerBetsTable bets={data.recentBets} />
    </div>
  );
}

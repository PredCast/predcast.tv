import type { AdminAccountGamificationDto } from '@chiliztv/shared';

import { rankLabel } from '@/lib/gamification/ledgerDisplay';
import { StatTile } from '@/components/common/StatTile';

type GamificationAccount = NonNullable<AdminAccountGamificationDto['account']>;

export function GamificationStatTiles({ account }: Readonly<{ account: GamificationAccount }>) {
  const { streak } = account;
  const nextLevel = account.nextLevelAt === null ? 'Max level' : `Next level at ${account.nextLevelAt.toLocaleString('en-US')}`;
  return (
    <div className="grid grid-cols-2 gap-3 p-4 lg:grid-cols-4">
      <StatTile
        label="Level"
        value={String(account.level)}
        unit={rankLabel(account.rankTier)}
        caption={account.levelPeak > account.level ? `Peak ${account.levelPeak}` : 'At its peak'}
      />
      <StatTile label="XP" value={account.xpTotal.toLocaleString('en-US')} caption={nextLevel} />
      <StatTile
        label="Streak"
        value={String(streak.current)}
        unit={streak.current === 1 ? 'day' : 'days'}
        caption={`Best ${streak.best} · ${streak.freezes} freeze${streak.freezes === 1 ? '' : 's'}${streak.alive ? '' : ' · broken'}`}
      />
      <StatTile
        label="Status"
        value={account.suspendedAt ? 'Suspended' : 'Active'}
        live={account.suspendedAt !== null}
        caption={account.hasProfile ? `Account since ${new Date(account.createdAt).toLocaleDateString('en-GB')}` : 'No credit yet'}
      />
    </div>
  );
}

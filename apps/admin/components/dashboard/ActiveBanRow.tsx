import Link from 'next/link';

import type { DashboardModerationDto } from '@chiliztv/shared';

import { operatorName, shortWallet } from '@/lib/ui/operator';
import { buttonClass } from '@/lib/ui/buttonClass';
import { Icon } from '@/components/common/Icon';

export function ActiveBanRow({ ban }: Readonly<{ ban: DashboardModerationDto['bans'][number] }>) {
  const expires = ban.expiresAt ? new Date(ban.expiresAt).toLocaleString('en-GB', { weekday: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : 'Never';
  const by = ban.issuedBy === 'quorum' ? 'quorum' : operatorName(ban.issuedBy.wallet, ban.issuedBy.label);
  return (
    <div className="grid min-h-9 grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-3 border-b border-line-subtle px-4 py-1.5 last:border-b-0">
      <span className="flex min-w-0 items-center gap-2 text-[13px] text-white">
        <Icon n="ban" s={13} className="shrink-0 text-accent-text" />
        <span className="truncate font-mono text-[12px]">{ban.username ? `@${ban.username}` : shortWallet(ban.wallet)}</span>
      </span>
      <span className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">
        {ban.expiresAt ? `Until ${expires}` : 'Permanent'} · strike {ban.escalationIndex} · by {by}
      </span>
      <Link href="/moderation/bans" title="Lift from the bans page (a note is required)" className={buttonClass('ghost', 'xs')}>
        Lift
      </Link>
    </div>
  );
}

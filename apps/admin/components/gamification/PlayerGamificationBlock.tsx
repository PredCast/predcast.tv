'use client';

import { useState } from 'react';

import { useAccountGamification } from '@/hooks/api/useAccountGamification';
import { apiErrorMessage, apiRequestId } from '@/lib/api/errors';
import { fmtDateTime } from '@/lib/gamification/doubleXpDisplay';
import { GAMIFICATION_STATE } from '@/lib/gamification/ledgerDisplay';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { CardError } from '@/components/common/CardError';
import { CardHead } from '@/components/common/CardHead';
import { EmptyState } from '@/components/common/EmptyState';
import { Skeleton } from '@/components/common/Skeleton';
import { WalletLabel } from '@/components/moderation/WalletLabel';
import { AdjustXpDialog } from './AdjustXpDialog';
import { GamificationLedgerTable } from './GamificationLedgerTable';
import { GamificationStatTiles } from './GamificationStatTiles';
import { SuspendGamificationButton } from './SuspendGamificationButton';

/** Gamification of the player's account (admin+): level, XP, streak, ledger, suspension and adjustment. */
export function PlayerGamificationBlock({ wallet }: Readonly<{ wallet: string }>) {
  const { data, isLoading, error, refetch, isFetching } = useAccountGamification(wallet);
  const [adjusting, setAdjusting] = useState(false);
  const account = data?.account ?? null;
  const state = data ? GAMIFICATION_STATE[data.state] : null;

  return (
    <Card as="section" label="Gamification" className="mt-6 flex flex-col">
      <CardHead
        title="Gamification"
        icon="zap"
        meta={state && <Badge tone={state.tone} glyph={state.glyph}>{state.label}</Badge>}
        right={
          account && (
            <>
              <Button size="sm" icon="pen" onClick={() => setAdjusting(true)}>
                Adjust XP
              </Button>
              <SuspendGamificationButton wallet={wallet} suspended={account.suspendedAt !== null} />
            </>
          )
        }
      />
      {isLoading && <Skeleton className="m-4 h-40" />}
      {Boolean(error) && (
        <CardError title="Couldn't load gamification" detail={apiErrorMessage(error)} requestId={apiRequestId(error)} onRetry={() => void refetch()} retrying={isFetching} />
      )}
      {data && !account && (
        <EmptyState icon="users" title="No gamification account" hint="This wallet never signed in with a verified Dynamic session, so it has no XP, level or streak." py="py-8" />
      )}
      {account && (
        <>
          {account.suspendedAt && (
            <div role="status" className="mx-4 mt-4 rounded-panel border border-accent/40 bg-accent/5 px-3 py-2.5 text-[13px] leading-5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-accent-text">Suspended</span>
              <span className="text-fg-meta"> · since {fmtDateTime(account.suspendedAt)}</span>
              <p className="mt-0.5 text-fg-strong">{account.suspendedReason}</p>
            </div>
          )}
          <GamificationStatTiles account={account} />
          <div className="flex flex-wrap items-center gap-2 border-t border-line-subtle px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-meta">
            <span>Linked wallets</span>
            {account.linkedWallets.map((w) => (
              <span key={w} className="normal-case">
                <WalletLabel wallet={w} />
              </span>
            ))}
          </div>
          <div className="border-t border-line-subtle">
            <div className="px-4 pb-1 pt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-meta">
              Latest ledger lines · amounts visible to admins only
            </div>
            <GamificationLedgerTable entries={account.recentLedger} />
          </div>
          {adjusting && <AdjustXpDialog wallet={wallet} xpTotal={account.xpTotal} onClose={() => setAdjusting(false)} />}
        </>
      )}
    </Card>
  );
}

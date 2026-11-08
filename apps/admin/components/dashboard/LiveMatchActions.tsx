'use client';

import { toast } from 'sonner';

import type { DashboardLiveMatchDto } from '@chiliztv/shared';

import { useAdminSession } from '@/providers/AdminSessionProvider';
import { appLiveUrl } from '@/lib/markets/chain';
import { hasOpenMarket } from '@/lib/dashboard/liveMarkets';
import { apiErrorMessage } from '@/lib/api/errors';
import { isAllowedForNav } from '@/lib/rbac';
import { buttonClass } from '@/lib/ui/buttonClass';
import { useCloseMatchMarkets } from '@/hooks/api/useAdminMatches';
import { Icon } from '@/components/common/Icon';
import { TwoStepButton } from '@/components/common/TwoStepButton';

/** Close markets (admin, while one is open) and the app's live page (stream + chat). */
export function LiveMatchActions({ match }: Readonly<{ match: DashboardLiveMatchDto }>) {
  const { role } = useAdminSession();
  const close = useCloseMatchMarkets();
  const liveUrl = appLiveUrl(match.apiFootballId);
  const open = match.markets.filter((m) => m.state === 'open').length;

  return (
    <>
      {isAllowedForNav(role, ['admin']) && hasOpenMarket(match) && (
        <TwoStepButton
          label="Close markets"
          confirmLabel={`Close ${open}`}
          icon="lock"
          busy={close.isPending}
          onConfirm={() =>
            close.mutate(match.apiFootballId, {
              onSuccess: (res) => toast.success(`${res.data.closed} markets closed`),
              onError: (err) => toast.error(apiErrorMessage(err)),
            })
          }
        />
      )}
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noreferrer" className={buttonClass('ghost', 'sm')}>
          Live page <Icon n="externalLink" s={12} />
        </a>
      )}
    </>
  );
}

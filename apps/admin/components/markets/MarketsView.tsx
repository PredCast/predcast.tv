'use client';

import { useMemo, useState } from 'react';
import type { AdminMatchRowDto } from '@chiliztv/shared';

import { useAdminMatches } from '@/hooks/api/useAdminMatches';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { EMPTY_FILTERS, PAGE_SIZE, listParamsFor, type MarketsFilters, type MarketsTab } from '@/lib/markets/listParams';
import { MatchesTable } from '@/components/directory/MatchesTable';
import { OffsetPager } from '@/components/directory/OffsetPager';
import { DeployDialog } from './DeployDialog';
import { MarketsToolbar } from './MarketsToolbar';
import { UnpublishDialog } from './UnpublishDialog';

const SEARCH_DEBOUNCE_MS = 300;

/** Markets page: pick the events to deploy, then manage the deployed ones (publication, markets). */
export function MarketsView() {
  const [tab, setTab] = useState<MarketsTab>('to_deploy');
  const [filters, setFilters] = useState<MarketsFilters>(EMPTY_FILTERS);
  const [deployTarget, setDeployTarget] = useState<AdminMatchRowDto | null>(null);
  const [unpublishTarget, setUnpublishTarget] = useState<AdminMatchRowDto | null>(null);
  // Fixed at mount: a moving "now" would change the query key on every render.
  const [now] = useState(() => new Date());

  const search = useDebouncedValue(filters.search, SEARCH_DEBOUNCE_MS);
  const params = useMemo(() => listParamsFor(tab, { ...filters, search }, now), [tab, filters, search, now]);
  const { data, isLoading, isFetching } = useAdminMatches(params);

  const changeTab = (next: MarketsTab) => {
    setTab(next);
    setFilters((f) => ({ ...f, status: 'all', publication: 'all', offset: 0 }));
  };

  return (
    <div>
      <MarketsToolbar tab={tab} onTabChange={changeTab} filters={filters} onFiltersChange={(patch) => setFilters((f) => ({ ...f, ...patch }))} />
      <div className={isFetching && !isLoading ? 'opacity-70 transition-opacity' : undefined}>
        <MatchesTable
          rows={data?.items ?? []}
          isLoading={isLoading}
          tab={tab}
          onDeploy={setDeployTarget}
          onUnpublish={setUnpublishTarget}
        />
      </div>
      <OffsetPager
        offset={filters.offset}
        limit={PAGE_SIZE}
        total={data?.total ?? 0}
        onOffsetChange={(offset) => setFilters((f) => ({ ...f, offset }))}
      />
      <DeployDialog match={deployTarget} onClose={() => setDeployTarget(null)} />
      <UnpublishDialog match={unpublishTarget} onClose={() => setUnpublishTarget(null)} />
    </div>
  );
}

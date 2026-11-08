'use client';

import { FilterChips } from '@/components/common/FilterChips';
import type { DeployedStatus, MarketsFilters, MarketsTab, PublicationFilter } from '@/lib/markets/listParams';
import { SearchField } from '@/components/common/SearchField';

interface MarketsToolbarProps {
  readonly tab: MarketsTab;
  readonly onTabChange: (tab: MarketsTab) => void;
  readonly filters: MarketsFilters;
  readonly onFiltersChange: (patch: Partial<MarketsFilters>) => void;
}

const dateInput =
  'font-mono rounded-md border border-line bg-page px-2.5 py-1.5 text-[10px] uppercase tracking-[0.08em] text-fg-body [color-scheme:dark] focus:border-accent focus:outline-none';

/** Tabs, search and filters of the Markets page. Any filter change resets the page offset. */
export function MarketsToolbar({ tab, onTabChange, filters, onFiltersChange }: Readonly<MarketsToolbarProps>) {
  const set = (patch: Partial<MarketsFilters>) => onFiltersChange({ ...patch, offset: 0 });

  return (
    <div className="mt-5 flex flex-col gap-3">
      <FilterChips<MarketsTab>
        items={[
          { label: 'To deploy', value: 'to_deploy' },
          { label: 'Deployed', value: 'deployed' },
        ]}
        active={tab}
        onSelect={onTabChange}
      />
      <div className="flex flex-wrap items-center gap-2.5">
        <SearchField value={filters.search} onChange={(search) => set({ search })} placeholder="Search team or league" />
        <input
          type="date"
          aria-label="Kickoff from"
          value={filters.fromDate}
          onChange={(e) => set({ fromDate: e.target.value })}
          className={dateInput}
        />
        <span className="text-fg-meta">→</span>
        <input
          type="date"
          aria-label="Kickoff to"
          value={filters.toDate}
          onChange={(e) => set({ toDate: e.target.value })}
          className={dateInput}
        />
        {tab === 'deployed' && (
          <>
            <FilterChips<DeployedStatus>
              items={[
                { label: 'All', value: 'all' },
                { label: 'Upcoming', value: 'upcoming' },
                { label: 'Live', value: 'live' },
                { label: 'Finished', value: 'finished' },
              ]}
              active={filters.status}
              onSelect={(status) => set({ status })}
            />
            <FilterChips<PublicationFilter>
              items={[
                { label: 'Any visibility', value: 'all' },
                { label: 'Published', value: 'published' },
                { label: 'Hidden', value: 'hidden' },
              ]}
              active={filters.publication}
              onSelect={(publication) => set({ publication })}
            />
          </>
        )}
      </div>
    </div>
  );
}

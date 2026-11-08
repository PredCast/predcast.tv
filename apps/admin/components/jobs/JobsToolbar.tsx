'use client';

import type { CategoryFilter, HealthFilter, JobsFilter } from '@/lib/jobs/jobsView';
import { FilterChips } from '@/components/common/FilterChips';
import { SearchField } from '@/components/common/SearchField';

interface JobsToolbarProps {
  readonly filter: JobsFilter;
  readonly counts: { all: number; safe: number; on_chain: number; quota: number; attention: number };
  readonly onChange: (filter: JobsFilter) => void;
}

export function JobsToolbar({ filter, counts, onChange }: Readonly<JobsToolbarProps>) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <FilterChips<CategoryFilter>
        label="Category"
        active={filter.category}
        onSelect={(category) => onChange({ ...filter, category })}
        items={[
          { label: 'All', value: 'all', count: counts.all },
          { label: 'Safe', value: 'safe', count: counts.safe },
          { label: 'On-chain', value: 'on_chain', count: counts.on_chain },
          { label: 'Quota', value: 'quota', count: counts.quota },
        ]}
      />
      <FilterChips<HealthFilter>
        label="Health"
        active={filter.health}
        onSelect={(health) => onChange({ ...filter, health: filter.health === health ? 'all' : health })}
        items={[{ label: 'Needs attention', value: 'attention', count: counts.attention }]}
      />
      <div className="ml-auto w-full max-w-[340px]">
        <SearchField value={filter.query} onChange={(query) => onChange({ ...filter, query })} placeholder="Search jobs" shortcut />
      </div>
    </div>
  );
}

import type { AdminJobDto, JobCategoryDto, JobHealthDto, JobRunStatusDto } from '@chiliztv/shared';

import type { BadgeTone } from '@/lib/ui/badgeTone';

export type CategoryFilter = 'all' | JobCategoryDto;
export type HealthFilter = 'all' | 'attention';

export interface JobsFilter {
  readonly category: CategoryFilter;
  readonly health: HealthFilter;
  readonly query: string;
}

export const needsAttention = (job: AdminJobDto) => job.health === 'failing' || job.health === 'late';

const HEALTH_RANK: Record<JobHealthDto, number> = { failing: 0, late: 1, never_ran: 2, ok: 3 };

/** Filtered rows, jobs needing attention first, registry order otherwise. */
export function visibleJobs(jobs: ReadonlyArray<AdminJobDto>, filter: JobsFilter): AdminJobDto[] {
  const q = filter.query.trim().toLowerCase();
  return jobs
    .map((job, index) => ({ job, index }))
    .filter(({ job }) => filter.category === 'all' || job.category === filter.category)
    .filter(({ job }) => filter.health === 'all' || needsAttention(job))
    .filter(({ job }) => !q || job.name.toLowerCase().includes(q) || job.description.toLowerCase().includes(q))
    .sort((a, b) => HEALTH_RANK[a.job.health] - HEALTH_RANK[b.job.health] || a.index - b.index)
    .map(({ job }) => job);
}

export function countBy(jobs: ReadonlyArray<AdminJobDto>) {
  return {
    all: jobs.length,
    safe: jobs.filter((j) => j.category === 'safe').length,
    on_chain: jobs.filter((j) => j.category === 'on_chain').length,
    quota: jobs.filter((j) => j.category === 'quota').length,
    attention: jobs.filter(needsAttention).length,
  };
}

export const CATEGORY_LABEL: Record<JobCategoryDto, string> = { safe: 'Safe', on_chain: 'On-chain', quota: 'Quota' };
export const CATEGORY_TONE: Record<JobCategoryDto, BadgeTone> = { safe: 'muted', on_chain: 'danger', quota: 'warning' };

export const HEALTH_DISPLAY: Record<JobHealthDto, { label: string; glyph: string; tone: BadgeTone }> = {
  ok: { label: 'OK', glyph: '✓', tone: 'positive' },
  failing: { label: 'Fail', glyph: '✕', tone: 'critical' },
  late: { label: 'Late', glyph: '▲', tone: 'warning' },
  never_ran: { label: 'No run yet', glyph: '◌', tone: 'muted' },
};

export const RUN_STATUS_DISPLAY: Record<JobRunStatusDto, { label: string; glyph: string; tone: BadgeTone }> = {
  pending: { label: 'Queued', glyph: '◌', tone: 'neutral' },
  running: { label: 'Running', glyph: '↻', tone: 'neutral' },
  succeeded: { label: 'OK', glyph: '✓', tone: 'positive' },
  failed: { label: 'Fail', glyph: '✕', tone: 'critical' },
  skipped_lock: { label: 'Skipped · locked', glyph: '–', tone: 'muted' },
};

/** Why Run now is unavailable, or null when it can be clicked. */
export function runBlockedReason(job: AdminJobDto): string | null {
  if (!job.canRun) return job.category === 'safe' ? 'Admin role required' : 'Super admin only';
  if (job.activeRun) return job.activeRun.status === 'pending' ? 'Queued' : 'Running';
  if (job.cooldownMs > 0) return `Cooldown ${Math.ceil(job.cooldownMs / 1000)}s`;
  return null;
}

'use client';

import type { NavBadgeKey } from '@/config/nav';
import { needsAttention } from '@/lib/jobs/jobsView';
import { isAllowedForNav } from '@/lib/rbac';
import { useAdminSession } from '@/providers/AdminSessionProvider';
import { useOverview } from '@/hooks/api/useOverview';
import { useJobs } from '@/hooks/api/useJobs';

export interface NavBadge {
  readonly count: number;
  readonly tone: 'danger' | 'warning';
  readonly label: string;
}

/** Counts shown next to nav entries; null hides the badge. */
export function useNavBadges(): Record<NavBadgeKey, NavBadge | null> {
  const { role } = useAdminSession();
  const { data: overview } = useOverview();
  const { data: jobs } = useJobs({ enabled: isAllowedForNav(role, ['admin']) });
  const openReports = overview?.openReports?.total ?? 0;
  const attention = jobs?.jobs.filter(needsAttention).length ?? 0;
  return {
    openReports: openReports > 0 ? { count: openReports, tone: 'danger', label: `${openReports} open reports` } : null,
    jobsAttention: attention > 0 ? { count: attention, tone: 'warning', label: `${attention} jobs failing or late` } : null,
  };
}

'use client';

import type { NavBadgeKey } from '@/config/nav';
import { useOverview } from '@/hooks/api/useOverview';

export interface NavBadge {
  readonly count: number;
  readonly tone: 'danger' | 'warning';
  readonly label: string;
}

/** Counts shown next to nav entries; null hides the badge. */
export function useNavBadges(): Record<NavBadgeKey, NavBadge | null> {
  const { data: overview } = useOverview();
  const openReports = overview?.openReports?.total ?? 0;
  return {
    openReports: openReports > 0 ? { count: openReports, tone: 'danger', label: `${openReports} open reports` } : null,
  };
}

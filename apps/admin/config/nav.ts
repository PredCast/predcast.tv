import type { AdminRole } from '@/lib/roles';
import type { IconName } from '@/components/common/Icon';

export type NavBadgeKey = 'openReports' | 'jobsAttention';

export interface NavEntry {
  readonly label: string;
  readonly href: string;
  readonly icon: IconName;
  /** Minimum scopes that can see the entry — cosmetic, the API re-checks. */
  readonly roles: ReadonlyArray<AdminRole>;
  readonly badge?: NavBadgeKey;
}

const EVERYONE: ReadonlyArray<AdminRole> = ['super_admin', 'admin', 'moderator', 'finance'];

export const NAV_ENTRIES: ReadonlyArray<NavEntry> = [
  { label: 'Dashboard', href: '/', icon: 'dashboard', roles: EVERYONE },
  { label: 'Markets', href: '/markets', icon: 'chart', roles: ['admin'] },
  { label: 'Moderation', href: '/moderation', icon: 'flag', roles: ['moderator'], badge: 'openReports' },
  { label: 'Players', href: '/players', icon: 'users', roles: ['moderator'] },
  { label: 'Jobs', href: '/jobs', icon: 'clock', roles: ['admin'], badge: 'jobsAttention' },
];

/** Planned sections, listed for the roles that will use them. */
export const NAV_SOON: ReadonlyArray<{ label: string; icon: IconName; roles: ReadonlyArray<AdminRole> }> = [
  { label: 'Finance', icon: 'wallet', roles: ['finance'] },
  { label: 'Analytics', icon: 'pie', roles: EVERYONE },
  { label: 'Audit', icon: 'file', roles: ['admin'] },
];

import type { AdminRole } from '@/lib/roles';

import type { BadgeTone } from './badgeTone';

export function shortWallet(wallet: string): string {
  return wallet.length > 12 ? `${wallet.slice(0, 6)}…${wallet.slice(-4)}` : wallet;
}

/** Grant note when set, short wallet otherwise. */
export function operatorName(wallet: string, label: string | null | undefined): string {
  return label?.trim() || shortWallet(wallet);
}

/** Two letters for the avatar: initials of the label, or the first hex pair of the wallet. */
export function operatorInitials(wallet: string, label: string | null | undefined): string {
  const words = label?.trim().split(/\s+/).filter(Boolean) ?? [];
  if (words.length >= 2) return `${words[0][0]}${words[1][0]}`.toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return wallet.replace(/^0x/i, '').slice(0, 2).toUpperCase();
}

const ROLE_TONES: Record<AdminRole, BadgeTone> = {
  super_admin: 'warning',
  admin: 'warning',
  moderator: 'strong',
  finance: 'positive',
};

export function roleTone(role: AdminRole): BadgeTone {
  return ROLE_TONES[role];
}

export function roleLabel(role: string): string {
  return role.replace('_', ' ');
}

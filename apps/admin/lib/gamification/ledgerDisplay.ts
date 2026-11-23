import type { AdminGamificationState, AdminLedgerEntryDto, RankTierDto } from '@chiliztv/shared';

import type { BadgeTone } from '@/lib/ui/badgeTone';

const SOURCE_LABELS: Readonly<Record<string, string>> = {
  check_in: 'Check-in',
  bet_volume: 'Bet volume',
  bet_won: 'Winning bet',
  watch: 'Watching',
  chat_message: 'Chat',
  follow: 'Follow',
  support: 'Support',
  stream_time: 'Streaming',
  onboarding_step: 'First steps',
  achievement: 'Achievement',
  admin_adjustment: 'Admin adjustment',
};

export function ledgerSourceLabel(source: string): string {
  return SOURCE_LABELS[source] ?? source;
}

export function fmtSignedXp(xp: number): string {
  return `${xp > 0 ? '+' : ''}${xp.toLocaleString('en-US')}`;
}

/** Reversal, cap or zeroing reason; null for a plain credit. */
export function ledgerDetail(entry: AdminLedgerEntryDto): string | null {
  if (entry.note) return entry.note;
  if (entry.reversesId !== null) return `Reverses #${entry.reversesId}`;
  return entry.reason ? entry.reason.replace(/_/g, ' ') : null;
}

export const GAMIFICATION_STATE: Readonly<Record<AdminGamificationState, { tone: BadgeTone; glyph: string; label: string }>> = {
  live: { tone: 'positive', glyph: '●', label: 'Live' },
  disabled: { tone: 'muted', glyph: '○', label: 'Flag off' },
  not_launched: { tone: 'warning', glyph: '◷', label: 'Not launched' },
};

export function rankLabel(tier: RankTierDto): string {
  return tier.charAt(0).toUpperCase() + tier.slice(1);
}

/** Random v4 UUID for the adjustment idempotency key (one per opened form). */
export function newAdjustmentId(): string {
  return crypto.randomUUID();
}

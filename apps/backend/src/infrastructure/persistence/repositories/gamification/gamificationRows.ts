import type { GamificationSource, LedgerReason } from '@chiliztv/domain/gamification/catalog/sources';
import type { DoubleXpEvent } from '@chiliztv/domain/gamification/entities/DoubleXpEvent';
import type { GamificationProfile } from '@chiliztv/domain/gamification/entities/GamificationProfile';
import type { LedgerEntry } from '@chiliztv/domain/gamification/entities/LedgerEntry';
import type { DoubleXpSource } from '@chiliztv/domain/gamification/catalog/sources';

export const UNIQUE_VIOLATION = '23505';
export const EXCLUSION_VIOLATION = '23P01';

export function fail(repository: string, action: string, message: string): never {
  throw new Error(`${repository}: ${action} failed: ${message}`);
}

const toDate = (v: string): Date => new Date(v);
const toDateOrNull = (v: string | null): Date | null => (v ? new Date(v) : null);

export interface ProfileRow {
  account_id: string;
  xp_total: number | string;
  level: number;
  level_peak: number;
  streak_current: number;
  streak_best: number;
  streak_last_day: string | null;
  streak_freezes: number;
  selected_title_id: string | null;
  selected_frame_id: string | null;
  showcase: string[] | null;
  suspended_at: string | null;
  suspended_reason: string | null;
  created_at: string;
  updated_at: string;
}

export const toProfile = (r: ProfileRow): GamificationProfile => ({
  accountId: r.account_id,
  xpTotal: Number(r.xp_total),
  level: r.level,
  levelPeak: r.level_peak,
  streak: {
    current: r.streak_current,
    best: r.streak_best,
    lastDay: r.streak_last_day,
    freezes: r.streak_freezes,
  },
  selectedTitleId: r.selected_title_id,
  selectedFrameId: r.selected_frame_id,
  showcase: r.showcase ?? [],
  suspendedAt: toDateOrNull(r.suspended_at),
  suspendedReason: r.suspended_reason,
  createdAt: toDate(r.created_at),
  updatedAt: toDate(r.updated_at),
});

export interface LedgerRow {
  id: number | string;
  account_id: string;
  source: string;
  ref_key: string;
  day: string;
  occurred_at: string;
  requested_xp: number;
  base_xp: number;
  multiplier: number | string;
  xp: number;
  double_xp_event_id: string | null;
  reverses_id: number | string | null;
  reason: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export const toLedgerEntry = (r: LedgerRow): LedgerEntry => ({
  id: Number(r.id),
  accountId: r.account_id,
  // Written only through the typed credit path.
  source: r.source as GamificationSource,
  refKey: r.ref_key,
  day: r.day,
  occurredAt: toDate(r.occurred_at),
  requestedXp: r.requested_xp,
  baseXp: r.base_xp,
  multiplier: Number(r.multiplier),
  xp: r.xp,
  doubleXpEventId: r.double_xp_event_id,
  reversesId: r.reverses_id === null ? null : Number(r.reverses_id),
  reason: r.reason as LedgerReason | null,
  metadata: r.metadata ?? {},
  createdAt: toDate(r.created_at),
});

export interface DoubleXpRow {
  id: string;
  name: string;
  multiplier: number | string;
  sources: string[];
  starts_at: string;
  ends_at: string;
  created_by_wallet: string;
  created_at: string;
  cancelled_at: string | null;
  cancelled_by_wallet: string | null;
}

export const toDoubleXpEvent = (r: DoubleXpRow): DoubleXpEvent => ({
  id: r.id,
  name: r.name,
  multiplier: Number(r.multiplier),
  // The SQL CHECK freezes sources to the eligible perimeter.
  sources: r.sources as DoubleXpSource[],
  startsAt: toDate(r.starts_at),
  endsAt: toDate(r.ends_at),
  createdByWallet: r.created_by_wallet,
  createdAt: toDate(r.created_at),
  cancelledAt: toDateOrNull(r.cancelled_at),
  cancelledByWallet: r.cancelled_by_wallet,
});

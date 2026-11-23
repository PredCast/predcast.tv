import type { AdminDoubleXpEventDto, AdminDoubleXpRulesDto, AdminDoubleXpStatus, DoubleXpSourceDto } from '@chiliztv/shared';

import type { BadgeTone } from '@/lib/ui/badgeTone';

const HOUR_MS = 3_600_000;

export const DOUBLE_XP_SOURCE_LABELS: Readonly<Record<DoubleXpSourceDto, string>> = {
  check_in: 'Check-in',
  watch: 'Watching',
  chat_message: 'Chat',
  stream_time: 'Streaming',
};

export const DOUBLE_XP_STATUS: Readonly<Record<AdminDoubleXpStatus, { tone: BadgeTone; glyph: string; label: string }>> = {
  running: { tone: 'positive', glyph: '●', label: 'Running' },
  upcoming: { tone: 'warning', glyph: '◷', label: 'Upcoming' },
  ended: { tone: 'muted', glyph: '✓', label: 'Ended' },
  cancelled: { tone: 'danger', glyph: '✕', label: 'Cancelled' },
};

export function fmtMultiplier(multiplier: number): string {
  return `×${Number(multiplier.toFixed(2))}`;
}

const BANNER_WORDS: Readonly<Record<DoubleXpSourceDto, string>> = {
  check_in: 'check-in',
  watch: 'watching',
  chat_message: 'chat',
  stream_time: 'streaming',
};

/** App banner text (§3.6): "Check-in, watching, chat and streaming earn ×2. Bets are not boosted." */
export function bannerPreview(sources: ReadonlyArray<DoubleXpSourceDto>, multiplier: number): string {
  const words = sources.map((s) => BANNER_WORDS[s]);
  const list = words.length > 1 ? `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}` : (words[0] ?? '');
  const subject = list.charAt(0).toUpperCase() + list.slice(1);
  return `${subject} earn${words.length > 1 ? '' : 's'} ${fmtMultiplier(multiplier)}. Bets are not boosted.`;
}

export interface GroupedDoubleXp {
  readonly running: ReadonlyArray<AdminDoubleXpEventDto>;
  readonly upcoming: ReadonlyArray<AdminDoubleXpEventDto>;
  readonly past: ReadonlyArray<AdminDoubleXpEventDto>;
}

/** Running first, then upcoming soonest first, then ended and cancelled latest first. */
export function groupDoubleXp(items: ReadonlyArray<AdminDoubleXpEventDto>): GroupedDoubleXp {
  const byStart = (a: AdminDoubleXpEventDto, b: AdminDoubleXpEventDto) => a.startsAt.localeCompare(b.startsAt);
  return {
    running: items.filter((e) => e.status === 'running'),
    upcoming: items.filter((e) => e.status === 'upcoming').sort(byStart),
    past: items.filter((e) => e.status === 'ended' || e.status === 'cancelled').sort((a, b) => byStart(b, a)),
  };
}

export function fmtDateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' });
}

export function durationHours(startsAt: string, endsAt: string): number {
  return Math.round(((new Date(endsAt).getTime() - new Date(startsAt).getTime()) / HOUR_MS) * 10) / 10;
}

/** `YYYY-MM` → "Apr 2027". */
export function fmtMonth(month: string): string {
  const [year, m] = month.split('-').map(Number);
  return new Date(Date.UTC(year, m - 1, 15)).toLocaleString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Value of an `<input type="datetime-local">` in the browser's timezone. */
export function toLocalInput(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/** Null when the field is empty or invalid. */
export function fromLocalInput(value: string): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/** Form hints only: the backend re-checks every §3.6 guard (Paris month quota and overlap included). */
export function draftIssues(
  startsAt: Date | null,
  endsAt: Date | null,
  rules: AdminDoubleXpRulesDto,
  now: Date | null,
): ReadonlyArray<string> {
  if (!startsAt || !endsAt) return ['Pick a start and an end'];
  const issues: string[] = [];
  if (endsAt <= startsAt) issues.push('The end must be after the start');
  else if (endsAt.getTime() - startsAt.getTime() > rules.maxDurationHours * HOUR_MS) {
    issues.push(`${rules.maxDurationHours} h at most`);
  }
  if (now && startsAt.getTime() < now.getTime() + rules.minNoticeHours * HOUR_MS) {
    issues.push(`Start at least ${rules.minNoticeHours} h from now`);
  }
  return issues;
}

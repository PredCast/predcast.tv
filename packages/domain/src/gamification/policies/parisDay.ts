/** A Paris calendar date, `YYYY-MM-DD`. */
export type ParisDay = string;

const MS_PER_DAY = 86_400_000;
const DAY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

const PARIS_DATE = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
});

/** Civil date of `instant` in Europe/Paris, DST included (§3.1 rule 1). */
export function parisDayOf(instant: Date): ParisDay {
    const parts = PARIS_DATE.formatToParts(instant);
    const get = (type: Intl.DateTimeFormatPartTypes): string => parts.find((p) => p.type === type)?.value ?? '';
    return `${get('year')}-${get('month')}-${get('day')}`;
}

/** `YYYY-MM` of `instant` in Europe/Paris — the double XP monthly quota bucket. */
export function parisMonthOf(instant: Date): string {
    return parisDayOf(instant).slice(0, 7);
}

function toUtcMs(day: ParisDay): number {
    const match = DAY_PATTERN.exec(day);
    if (!match) throw new RangeError(`invalid day '${day}', expected YYYY-MM-DD`);
    return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function fromUtcMs(ms: number): ParisDay {
    return new Date(ms).toISOString().slice(0, 10);
}

export function addDays(day: ParisDay, days: number): ParisDay {
    return fromUtcMs(toUtcMs(day) + days * MS_PER_DAY);
}

/** `to − from` in calendar days. */
export function daysBetween(from: ParisDay, to: ParisDay): number {
    return Math.round((toUtcMs(to) - toUtcMs(from)) / MS_PER_DAY);
}

/** Monday of the ISO week containing `day`. */
export function weekStartOf(day: ParisDay): ParisDay {
    const weekday = new Date(toUtcMs(day)).getUTCDay();
    return addDays(day, -((weekday + 6) % 7));
}

/** `to − from` in ISO weeks. */
export function weeksBetween(from: ParisDay, to: ParisDay): number {
    return Math.round(daysBetween(weekStartOf(from), weekStartOf(to)) / 7);
}

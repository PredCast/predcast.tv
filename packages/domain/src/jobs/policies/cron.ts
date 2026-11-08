/**
 * Minimal cron reader for the scheduler's own expressions: 5 fields, minute and hour as `*`,
 * `*\/n` or a fixed value, day-of-month / month / day-of-week as `*` only. Anything else throws,
 * so a new exotic expression fails loudly instead of showing a wrong next run.
 * Times are UTC: the scheduler registers every cron task with `timezone: 'UTC'`.
 */

type CronField = { readonly kind: 'any' } | { readonly kind: 'step'; readonly step: number } | { readonly kind: 'value'; readonly value: number };

export interface CronExpression {
    readonly minute: CronField;
    readonly hour: CronField;
}

export class UnsupportedCronError extends Error {
    constructor(expression: string, reason: string) {
        super(`Unsupported cron expression "${expression}": ${reason}`);
        this.name = 'UnsupportedCronError';
    }
}

const FIELDS = [
    { name: 'minute', max: 59 },
    { name: 'hour', max: 23 },
] as const;

function parseField(raw: string, name: string, max: number, expression: string): CronField {
    if (raw === '*') return { kind: 'any' };
    const step = /^\*\/(\d+)$/.exec(raw);
    if (step) {
        const n = Number(step[1]);
        if (n < 1 || n > max) throw new UnsupportedCronError(expression, `step ${n} out of range in ${name}`);
        return { kind: 'step', step: n };
    }
    if (/^\d+$/.test(raw)) {
        const value = Number(raw);
        if (value > max) throw new UnsupportedCronError(expression, `value ${value} out of range in ${name}`);
        return { kind: 'value', value };
    }
    throw new UnsupportedCronError(expression, `syntax "${raw}" in ${name} (only *, */n or a number)`);
}

export function parseCron(expression: string): CronExpression {
    const parts = expression.trim().split(/\s+/);
    if (parts.length !== 5) throw new UnsupportedCronError(expression, `expected 5 fields, got ${parts.length}`);
    const [minute, hour, ...dateFields] = parts;
    dateFields.forEach((raw, i) => {
        if (raw !== '*') {
            const name = ['day-of-month', 'month', 'day-of-week'][i];
            throw new UnsupportedCronError(expression, `${name} must be * (got "${raw}")`);
        }
    });
    return {
        minute: parseField(minute, FIELDS[0].name, FIELDS[0].max, expression),
        hour: parseField(hour, FIELDS[1].name, FIELDS[1].max, expression),
    };
}

function matches(field: CronField, value: number): boolean {
    if (field.kind === 'any') return true;
    if (field.kind === 'step') return value % field.step === 0;
    return value === field.value;
}

/** First fire time strictly after `after` (fires at second 0 of a matching minute). */
export function nextCronRun(expression: string, after: Date): Date {
    const cron = parseCron(expression);
    const t = new Date(after.getTime());
    t.setUTCSeconds(0, 0);
    t.setUTCMinutes(t.getUTCMinutes() + 1);
    // With day fields fixed to `*`, a match always exists within 24 hours.
    for (let i = 0; i <= 24 * 60; i += 1) {
        if (matches(cron.hour, t.getUTCHours()) && matches(cron.minute, t.getUTCMinutes())) return t;
        t.setUTCMinutes(t.getUTCMinutes() + 1);
    }
    throw new UnsupportedCronError(expression, 'no fire time within 24 hours');
}

/** Shortest gap between two fires, in ms (what the jobs table shows as "every"). */
export function cronCadenceMs(expression: string): number {
    const { minute, hour } = parseCron(expression);
    const MINUTE = 60_000;
    const HOUR = 60 * MINUTE;
    if (minute.kind === 'any') return MINUTE;
    if (minute.kind === 'step') return minute.step * MINUTE;
    if (hour.kind === 'any') return HOUR;
    if (hour.kind === 'step') return hour.step * HOUR;
    return 24 * HOUR;
}

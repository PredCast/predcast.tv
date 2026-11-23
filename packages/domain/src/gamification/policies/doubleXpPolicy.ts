import {
    DOUBLE_XP_MAX_DURATION_HOURS,
    DOUBLE_XP_MAX_MULTIPLIER,
    DOUBLE_XP_MAX_PER_MONTH,
    DOUBLE_XP_MIN_NOTICE_HOURS,
    DOUBLE_XP_MULTIPLIER_STEPS,
} from '../catalog/constants';
import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import { isDoubleXpEligible } from '../catalog/sources';
import { parisMonthOf } from './parisDay';

const MS_PER_HOUR = 3_600_000;

export interface DoubleXpDraft {
    readonly multiplier: number;
    readonly sources: ReadonlyArray<string>;
    readonly startsAt: Date;
    readonly endsAt: Date;
}

export interface DoubleXpWindow extends DoubleXpDraft {
    readonly id: string;
    readonly cancelledAt: Date | null;
}

export type DoubleXpValidationError =
    | 'disabled'
    | 'invalid_multiplier'
    | 'empty_sources'
    | 'ineligible_source'
    | 'invalid_window'
    | 'too_long'
    | 'notice_too_short'
    | 'overlap'
    | 'monthly_limit';

export type DoubleXpValidation = { readonly ok: true } | { readonly ok: false; readonly error: DoubleXpValidationError };

/** Multiplier in quarters (1.25 → 5), or null when not in (1, 2] by steps of 0.25. */
function multiplierQuarters(multiplier: number): number | null {
    const scaled = multiplier * DOUBLE_XP_MULTIPLIER_STEPS;
    const quarters = Math.round(scaled);
    if (Math.abs(scaled - quarters) > 1e-9) return null;
    if (quarters <= DOUBLE_XP_MULTIPLIER_STEPS || quarters > DOUBLE_XP_MAX_MULTIPLIER * DOUBLE_XP_MULTIPLIER_STEPS) {
        return null;
    }
    return quarters;
}

export function isValidDoubleXpMultiplier(multiplier: number): boolean {
    return multiplierQuarters(multiplier) !== null;
}

/** `[startsAt, endsAt)` ranges intersect. */
function overlaps(a: DoubleXpDraft, b: DoubleXpDraft): boolean {
    return a.startsAt.getTime() < b.endsAt.getTime() && b.startsAt.getTime() < a.endsAt.getTime();
}

/** Guards of §3.6 for a new event, against the existing (non-cancelled ones count). */
export function validateDoubleXpEvent(
    draft: DoubleXpDraft,
    existing: ReadonlyArray<DoubleXpWindow>,
    now: Date,
    switches: LegalSwitches = LEGAL_SWITCHES,
): DoubleXpValidation {
    const fail = (error: DoubleXpValidationError): DoubleXpValidation => ({ ok: false, error });
    if (switches.doubleXp === 'disabled') return fail('disabled');
    if (!isValidDoubleXpMultiplier(draft.multiplier)) return fail('invalid_multiplier');
    if (draft.sources.length === 0) return fail('empty_sources');
    if (!draft.sources.every(isDoubleXpEligible)) return fail('ineligible_source');

    const start = draft.startsAt.getTime();
    const end = draft.endsAt.getTime();
    if (!(end > start)) return fail('invalid_window');
    if (end - start > DOUBLE_XP_MAX_DURATION_HOURS * MS_PER_HOUR) return fail('too_long');
    if (start < now.getTime() + DOUBLE_XP_MIN_NOTICE_HOURS * MS_PER_HOUR) return fail('notice_too_short');

    const active = existing.filter((e) => e.cancelledAt === null);
    if (active.some((e) => overlaps(e, draft))) return fail('overlap');
    const month = parisMonthOf(draft.startsAt);
    if (active.filter((e) => parisMonthOf(e.startsAt) === month).length >= DOUBLE_XP_MAX_PER_MONTH) {
        return fail('monthly_limit');
    }
    return { ok: true };
}

export interface AppliedMultiplier {
    readonly multiplier: number;
    readonly eventId: string | null;
}

/**
 * Multiplier for a credit of `source` dated `at`: the event with startsAt ≤ at < endsAt listing the
 * source. A cancellation only affects credits dated after it (no retroactive effect).
 */
export function multiplierAt(
    events: ReadonlyArray<DoubleXpWindow>,
    source: string,
    at: Date,
    switches: LegalSwitches = LEGAL_SWITCHES,
): AppliedMultiplier {
    const none: AppliedMultiplier = { multiplier: 1, eventId: null };
    if (switches.doubleXp === 'disabled' || !isDoubleXpEligible(source)) return none;
    const t = at.getTime();
    const event = events.find(
        (e) =>
            e.startsAt.getTime() <= t &&
            t < e.endsAt.getTime() &&
            (e.cancelledAt === null || t < e.cancelledAt.getTime()) &&
            e.sources.includes(source) &&
            isValidDoubleXpMultiplier(e.multiplier),
    );
    return event ? { multiplier: event.multiplier, eventId: event.id } : none;
}

export interface CreditInput {
    readonly requestedXp: number;
    /** Base XP already credited today for this source. */
    readonly usedToday: number;
    readonly dailyCap: number | null;
    readonly multiplier: number;
}

export interface CreditedXp {
    readonly baseXp: number;
    readonly xp: number;
    readonly capped: boolean;
}

/** Cap on base XP first, then the multiplier: floor(min(requested, remaining) × m) (§3.1 rule 4). */
export function computeCreditedXp(input: CreditInput): CreditedXp {
    const requested = Math.max(0, Math.floor(input.requestedXp));
    const remaining = input.dailyCap === null ? requested : Math.max(0, input.dailyCap - input.usedToday);
    const baseXp = Math.min(requested, remaining);
    const quarters = multiplierQuarters(input.multiplier) ?? DOUBLE_XP_MULTIPLIER_STEPS;
    return {
        baseXp,
        xp: Math.floor((baseXp * quarters) / DOUBLE_XP_MULTIPLIER_STEPS),
        capped: baseXp < requested,
    };
}

import type { MatchStatusKind } from './MatchStatusKind';

/**
 * In-play statuses. Pari bloqué tant que le match est dans un de ces états.
 * `HT` est volontairement listé ici — la mi-temps reste fermée au pari (les
 * sportsbooks traditionnels y rouvrent les odds, ce qu'on ne peut pas suivre
 * sans oracle re-pricing live).
 */
export const LIVE_STATUSES: ReadonlyArray<string> = [
    '1H',
    'HT',
    '2H',
    'ET',
    'BT',
    'P',
    'LIVE',
    'SUSP',
    'INT',
];

/** Match terminé, score définitif disponible (resolve possible). */
export const FINISHED_STATUSES: ReadonlyArray<string> = [
    'FT',
    'AET',
    'PEN',
    'AWD',
    'WO',
];

/** Match bloqué administrativement (reporté, annulé, abandonné). */
export const BLOCKED_STATUSES: ReadonlyArray<string> = ['PST', 'CANC', 'ABD'];

/** Match pas encore commencé — bettable si hors du kickoff buffer. */
export const UPCOMING_STATUSES: ReadonlyArray<string> = ['NS', 'TBD'];

const LIVE_SET = new Set(LIVE_STATUSES);
const FINISHED_SET = new Set(FINISHED_STATUSES);
const BLOCKED_SET = new Set(BLOCKED_STATUSES);
const UPCOMING_SET = new Set(UPCOMING_STATUSES);

export type BlockReason =
    | 'LIVE'
    | 'HALFTIME'
    | 'KICKOFF_BUFFER'
    | 'FINISHED'
    | 'POSTPONED'
    | 'UNKNOWN';

export type BettableResult =
    | { readonly ok: true }
    | { readonly ok: false; readonly reason: BlockReason };

export interface BettableOptions {
    /** Buffer en secondes appliqué avant le kickoff (default 0 = pas de buffer). */
    readonly kickoffBufferSec: number;
}

export interface BettableMatch {
    readonly status: string;
    readonly kickoffAt: string | Date;
}

export function classifyStatus(status: string): MatchStatusKind {
    if (UPCOMING_SET.has(status)) return 'upcoming';
    if (LIVE_SET.has(status)) return 'live';
    if (FINISHED_SET.has(status)) return 'finished';
    if (BLOCKED_SET.has(status)) return 'blocked';
    return 'unknown';
}

/** Vrai si le statut est exactement la mi-temps. Utile pour le label UI. */
export function isHalftime(status: string): boolean {
    return status === 'HT';
}

/**
 * Décide si un match accepte de nouveaux bets *maintenant*. Source de vérité
 * unique consommée par front et back — toute autre check `status === '...'`
 * ailleurs dans le code est un bug en attente d'arriver.
 */
export function isBettable(
    match: BettableMatch,
    now: Date,
    opts: BettableOptions,
): BettableResult {
    const kind = classifyStatus(match.status);

    if (kind === 'live') {
        return { ok: false, reason: isHalftime(match.status) ? 'HALFTIME' : 'LIVE' };
    }
    if (kind === 'finished') return { ok: false, reason: 'FINISHED' };
    if (kind === 'blocked') return { ok: false, reason: 'POSTPONED' };
    if (kind === 'unknown') return { ok: false, reason: 'UNKNOWN' };

    // upcoming — appliquer le kickoff buffer.
    const kickoffMs =
        match.kickoffAt instanceof Date
            ? match.kickoffAt.getTime()
            : new Date(match.kickoffAt).getTime();
    if (!Number.isFinite(kickoffMs)) return { ok: false, reason: 'UNKNOWN' };

    const remainingSec = (kickoffMs - now.getTime()) / 1000;
    if (remainingSec < opts.kickoffBufferSec) {
        return { ok: false, reason: 'KICKOFF_BUFFER' };
    }
    return { ok: true };
}

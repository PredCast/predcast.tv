"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPCOMING_STATUSES = exports.BLOCKED_STATUSES = exports.FINISHED_STATUSES = exports.LIVE_STATUSES = void 0;
exports.classifyStatus = classifyStatus;
exports.isHalftime = isHalftime;
exports.isBettable = isBettable;
/**
 * In-play statuses. Pari bloqué tant que le match est dans un de ces états.
 * `HT` est volontairement listé ici — la mi-temps reste fermée au pari (les
 * sportsbooks traditionnels y rouvrent les odds, ce qu'on ne peut pas suivre
 * sans oracle re-pricing live).
 */
exports.LIVE_STATUSES = [
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
exports.FINISHED_STATUSES = [
    'FT',
    'AET',
    'PEN',
    'AWD',
    'WO',
];
/** Match bloqué administrativement (reporté, annulé, abandonné). */
exports.BLOCKED_STATUSES = ['PST', 'CANC', 'ABD'];
/** Match pas encore commencé — bettable si hors du kickoff buffer. */
exports.UPCOMING_STATUSES = ['NS', 'TBD'];
const LIVE_SET = new Set(exports.LIVE_STATUSES);
const FINISHED_SET = new Set(exports.FINISHED_STATUSES);
const BLOCKED_SET = new Set(exports.BLOCKED_STATUSES);
const UPCOMING_SET = new Set(exports.UPCOMING_STATUSES);
function classifyStatus(status) {
    if (UPCOMING_SET.has(status))
        return 'upcoming';
    if (LIVE_SET.has(status))
        return 'live';
    if (FINISHED_SET.has(status))
        return 'finished';
    if (BLOCKED_SET.has(status))
        return 'blocked';
    return 'unknown';
}
/** Vrai si le statut est exactement la mi-temps. Utile pour le label UI. */
function isHalftime(status) {
    return status === 'HT';
}
/**
 * Décide si un match accepte de nouveaux bets *maintenant*. Source de vérité
 * unique consommée par front et back — toute autre check `status === '...'`
 * ailleurs dans le code est un bug en attente d'arriver.
 */
function isBettable(match, now, opts) {
    const kind = classifyStatus(match.status);
    if (kind === 'live') {
        return { ok: false, reason: isHalftime(match.status) ? 'HALFTIME' : 'LIVE' };
    }
    if (kind === 'finished')
        return { ok: false, reason: 'FINISHED' };
    if (kind === 'blocked')
        return { ok: false, reason: 'POSTPONED' };
    if (kind === 'unknown')
        return { ok: false, reason: 'UNKNOWN' };
    // upcoming — appliquer le kickoff buffer.
    const kickoffMs = match.kickoffAt instanceof Date
        ? match.kickoffAt.getTime()
        : new Date(match.kickoffAt).getTime();
    if (!Number.isFinite(kickoffMs))
        return { ok: false, reason: 'UNKNOWN' };
    const remainingSec = (kickoffMs - now.getTime()) / 1000;
    if (remainingSec < opts.kickoffBufferSec) {
        return { ok: false, reason: 'KICKOFF_BUFFER' };
    }
    return { ok: true };
}

import { LEGAL_SWITCHES, type LegalSwitches } from '../catalog/legalSwitches';
import { DOUBLE_XP_ELIGIBLE, type DoubleXpSource } from '../catalog/sources';
import { DOUBLE_XP_ANNOUNCE_DAYS } from './doubleXpAnnouncement';

const MS_PER_DAY = 86_400_000;

export interface DoubleXpBannerInput {
    readonly multiplier: number;
    readonly sources: ReadonlyArray<string>;
    readonly startsAt: Date;
    readonly endsAt: Date;
}

export interface DoubleXpBannerView {
    readonly isActive: boolean;
    /** "×2", "×1.5". */
    readonly multiplierLabel: string;
    /** "Double XP · Sat 14:00 → Sun 23:00 (Paris time)". */
    readonly heading: string;
    /** "Check-in, watching, chat and streaming earn ×2." */
    readonly boosted: string;
    /** Always shown: bets are never multiplied (§3.6). */
    readonly notice: 'Bets are not boosted.';
}

/** In-sentence labels of §3.6, in the banner order. */
const SOURCE_LABELS: Readonly<Record<DoubleXpSource, string>> = {
    check_in: 'check-in',
    watch: 'watching',
    chat_message: 'chat',
    stream_time: 'streaming',
};

const PARIS_SLOT = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
});

/** "Sat 14:00" in Paris time. */
export function parisSlotLabel(instant: Date): string {
    const parts = PARIS_SLOT.formatToParts(instant);
    const get = (type: Intl.DateTimeFormatPartTypes): string => parts.find((p) => p.type === type)?.value ?? '';
    return `${get('weekday')} ${get('hour')}:${get('minute')}`;
}

export function multiplierLabel(multiplier: number): string {
    return `×${Number(multiplier.toFixed(2))}`;
}

function sentenceList(items: ReadonlyArray<string>): string {
    if (items.length <= 1) return items.join('');
    return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/** "Check-in, watching, chat and streaming earn ×2." — eligible sources only, catalog order. */
export function boostedSourcesSentence(sources: ReadonlyArray<string>, multiplier: number): string {
    const labels = DOUBLE_XP_ELIGIBLE.filter((s) => sources.includes(s)).map((s) => SOURCE_LABELS[s]);
    if (labels.length === 0) return '';
    const text = sentenceList(labels);
    const verb = labels.length === 1 ? 'earns' : 'earn';
    return `${text.charAt(0).toUpperCase()}${text.slice(1)} ${verb} ${multiplierLabel(multiplier)}.`;
}

/**
 * Banner of a double XP event (§3.6): while it runs, or from 7 days before its start at the
 * earliest; null otherwise (ended, too far ahead, no eligible source, legal switch off).
 */
export function doubleXpBannerOf(
    event: DoubleXpBannerInput,
    now: Date,
    switches: LegalSwitches = LEGAL_SWITCHES,
): DoubleXpBannerView | null {
    if (switches.doubleXp === 'disabled') return null;
    const t = now.getTime();
    const start = event.startsAt.getTime();
    const end = event.endsAt.getTime();
    if (t >= end || start - t > DOUBLE_XP_ANNOUNCE_DAYS * MS_PER_DAY) return null;
    const boosted = boostedSourcesSentence(event.sources, event.multiplier);
    if (boosted === '') return null;
    const isActive = start <= t;
    const window = isActive
        ? `Live now → ${parisSlotLabel(event.endsAt)}`
        : `${parisSlotLabel(event.startsAt)} → ${parisSlotLabel(event.endsAt)}`;
    return {
        isActive,
        multiplierLabel: multiplierLabel(event.multiplier),
        heading: `Double XP · ${window} (Paris time)`,
        boosted,
        notice: 'Bets are not boosted.',
    };
}

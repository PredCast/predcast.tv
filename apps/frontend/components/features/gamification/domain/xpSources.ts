import { LEGAL_SWITCHES } from '@chiliztv/domain/gamification/catalog/legalSwitches';
import { dailyCapFor, isDoubleXpEligible, isSourceEnabled, type GamificationSource } from '@chiliztv/domain/gamification/catalog/sources';

import { sourceLabel } from './labels';

export interface XpSourceRow {
    readonly source: GamificationSource;
    readonly label: string;
    readonly earn: string;
    /** "100 XP" per Paris day; null when uncapped. */
    readonly cap: string | null;
    readonly boosted: boolean;
}

/** Transparency copy of §9.3 (EN, ⚠ legal review pending). */
export const HOW_XP_WORKS_TEXT =
    'XP measures your activity on PredCast. It is never money, credit or a fee discount. You earn it by checking in each day, watching live matches, chatting, following streamers, streaming and, for bets of 5 USDC or more, 1 XP per USDC staked (up to 1,000 XP a day). Double XP events only boost check-ins, watching, chat and streaming, never bets. Your streak only needs you to open the app; a freeze protects a missed day.';

export const NO_MONETARY_VALUE_TEXT = 'XP has no monetary value and cannot be exchanged, withdrawn or spent.';

const EARN: Partial<Record<GamificationSource, string>> = {
    check_in: '50 XP, +5 per streak day',
    bet_volume: LEGAL_SWITCHES.betVolume === 'per_market' ? '5 XP per market played' : '1 XP per USDC, bets of 5 USDC or more',
    bet_won: '5 XP per market won',
    watch: '1 XP per 10 minutes of live',
    chat_message: '1 XP per message',
    follow: '5 XP per streamer, once',
    support: '5 XP per streamer and day',
    stream_time: '1 XP per 6 minutes live',
    onboarding_step: '5 XP per step, once',
    achievement: '10 to 750 XP per tier, once',
};

const ORDER: ReadonlyArray<GamificationSource> = [
    'check_in', 'watch', 'chat_message', 'follow', 'stream_time', 'bet_volume', 'bet_won', 'support', 'onboarding_step', 'achievement',
];

/** Sources and daily caps after the legal switches; disabled sources are left out. */
export function xpSourceRows(): ReadonlyArray<XpSourceRow> {
    return ORDER.filter((s) => isSourceEnabled(s) && !(s === 'bet_volume' && LEGAL_SWITCHES.betVolume === 'disabled')).map((source) => {
        const cap = dailyCapFor(source);
        return {
            source,
            label: sourceLabel(source),
            earn: EARN[source] ?? '',
            cap: cap === null ? null : `${cap.toLocaleString('en-US')} XP`,
            boosted: isDoubleXpEligible(source) && LEGAL_SWITCHES.doubleXp === 'enabled',
        };
    });
}

import { DOUBLE_XP_ELIGIBLE } from '@chiliztv/domain/gamification/catalog/sources';
import {
    DOUBLE_XP_MAX_DURATION_HOURS,
    DOUBLE_XP_MAX_MULTIPLIER,
    DOUBLE_XP_MAX_PER_MONTH,
    DOUBLE_XP_MIN_NOTICE_HOURS,
    DOUBLE_XP_MULTIPLIER_STEPS,
} from '@chiliztv/domain/gamification/catalog/constants';
import { LEGAL_SWITCHES } from '@chiliztv/domain/gamification/catalog/legalSwitches';
import type { DoubleXpEvent } from '@chiliztv/domain/gamification/entities/DoubleXpEvent';
import type { LedgerEntry } from '@chiliztv/domain/gamification/entities/LedgerEntry';
import { DOUBLE_XP_ANNOUNCE_DAYS } from '@chiliztv/domain/gamification/policies/doubleXpAnnouncement';
import { doubleXpStatusAt } from '@chiliztv/domain/gamification/policies/doubleXpSchedule';
import type { AdminDoubleXpEventDto, AdminDoubleXpRulesDto, AdminLedgerEntryDto, DoubleXpSourceDto } from '@chiliztv/shared';

export function toAdminDoubleXpDto(event: DoubleXpEvent, now: Date): AdminDoubleXpEventDto {
    return {
        id: event.id,
        name: event.name,
        multiplier: event.multiplier,
        // The SQL CHECK restricts stored sources to the double XP perimeter.
        sources: event.sources as DoubleXpSourceDto[],
        startsAt: event.startsAt.toISOString(),
        endsAt: event.endsAt.toISOString(),
        status: doubleXpStatusAt(event, now),
        createdByWallet: event.createdByWallet,
        createdAt: event.createdAt.toISOString(),
        cancelledAt: event.cancelledAt?.toISOString() ?? null,
        cancelledByWallet: event.cancelledByWallet,
    };
}

/** Multipliers allowed by `isValidDoubleXpMultiplier`: 1.25, 1.5, 1.75, 2. */
const MULTIPLIERS = Array.from(
    { length: (DOUBLE_XP_MAX_MULTIPLIER - 1) * DOUBLE_XP_MULTIPLIER_STEPS },
    (_, i) => 1 + (i + 1) / DOUBLE_XP_MULTIPLIER_STEPS,
);

export function doubleXpRulesDto(): AdminDoubleXpRulesDto {
    return {
        eligibleSources: [...DOUBLE_XP_ELIGIBLE],
        multipliers: MULTIPLIERS,
        minNoticeHours: DOUBLE_XP_MIN_NOTICE_HOURS,
        maxDurationHours: DOUBLE_XP_MAX_DURATION_HOURS,
        maxPerMonth: DOUBLE_XP_MAX_PER_MONTH,
        announceDays: DOUBLE_XP_ANNOUNCE_DAYS,
        enabled: LEGAL_SWITCHES.doubleXp === 'enabled',
    };
}

export function toAdminLedgerDto(entry: LedgerEntry): AdminLedgerEntryDto {
    const note = entry.source === 'admin_adjustment' ? entry.metadata.note : null;
    return {
        id: entry.id,
        source: entry.source,
        xp: entry.xp,
        requestedXp: entry.requestedXp,
        baseXp: entry.baseXp,
        multiplier: entry.multiplier,
        reason: entry.reason,
        refKey: entry.refKey,
        day: entry.day,
        occurredAt: entry.occurredAt.toISOString(),
        reversesId: entry.reversesId,
        note: typeof note === 'string' ? note : null,
    };
}

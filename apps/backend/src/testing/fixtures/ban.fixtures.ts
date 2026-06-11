import { Ban } from '@chiliztv/domain/reporting/entities/Ban';
import type { QuorumSnapshot } from '@chiliztv/domain/reporting/value-objects/QuorumSnapshot';

export interface BanFixtureOverride {
    walletAddress?: string;
    escalationIndex?: number;
    startsAt?: Date;
    expiresAt?: Date | null;
    triggeringLiveMatchId?: number | null;
    quorumSnapshot?: QuorumSnapshot;
}

const DEFAULT_NOW = new Date('2026-06-11T12:00:00.000Z');
const HOUR_MS = 3_600_000;

const DEFAULT_SNAPSHOT: QuorumSnapshot = {
    trigger: 'quorum',
    totalEligible: 20,
    distinctReports: 5,
    quorumPct: 25,
    floorCount: 5,
    maxSeverity: 2,
    evaluatedAt: DEFAULT_NOW.toISOString(),
};

function build(expiresAt: Date | null, escalationIndex: number, override?: BanFixtureOverride): Ban {
    const startsAt = override?.startsAt ?? DEFAULT_NOW;
    return Ban.create({
        walletAddress: override?.walletAddress ?? '0xbanned00000000000000000000000000000000aa',
        triggeredByReportId: null,
        triggeringLiveMatchId: override?.triggeringLiveMatchId ?? 999001,
        quorumSnapshot: override?.quorumSnapshot ?? DEFAULT_SNAPSHOT,
        startsAt,
        expiresAt: override?.expiresAt !== undefined ? override.expiresAt : expiresAt,
        escalationIndex: override?.escalationIndex ?? escalationIndex,
    });
}

export const banFixture = {
    /** First-offence 24h ban, active from DEFAULT_NOW. */
    active: (override?: BanFixtureOverride): Ban =>
        build(new Date(DEFAULT_NOW.getTime() + 24 * HOUR_MS), override?.escalationIndex ?? 1, override),

    /** Ban whose expiry is already in the past relative to DEFAULT_NOW. */
    expired: (override?: BanFixtureOverride): Ban =>
        build(new Date(DEFAULT_NOW.getTime() - HOUR_MS), override?.escalationIndex ?? 1, {
            startsAt: new Date(DEFAULT_NOW.getTime() - 25 * HOUR_MS),
            ...override,
        }),

    /** Third-offence permanent ban (expiresAt null). */
    permanent: (override?: BanFixtureOverride): Ban =>
        build(null, override?.escalationIndex ?? 3, override),
};

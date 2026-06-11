import { Report, type ReportProps } from '@chiliztv/domain/reporting/entities/Report';
import type { ReportSeverity } from '@chiliztv/domain/reporting/value-objects/QuorumSnapshot';

export interface ReportFixtureOverride {
    reporterWallet?: string;
    targetId?: string;
    liveContextMatchId?: number | null;
    liveContextStreamId?: string | null;
    reasonCode?: string;
    severity?: ReportSeverity;
    createdAt?: Date;
}

const DEFAULT_NOW = new Date('2026-06-11T12:00:00.000Z');

function build(
    targetType: ReportProps['targetType'],
    targetId: string,
    severity: ReportSeverity,
    reasonCode: string,
    override?: ReportFixtureOverride,
): Report {
    return Report.create({
        targetType,
        targetId: override?.targetId ?? targetId,
        reporterWallet: override?.reporterWallet ?? '0xreporter0000000000000000000000000000000001',
        liveContextMatchId: override?.liveContextMatchId ?? 999001,
        liveContextStreamId: override?.liveContextStreamId ?? null,
        reasonCode: override?.reasonCode ?? reasonCode,
        reasonFreeText: null,
        severity: override?.severity ?? severity,
        createdAt: override?.createdAt ?? DEFAULT_NOW,
    });
}

export const reportFixture = {
    /** Low-severity message report (quorum path). */
    messageReport: (override?: ReportFixtureOverride): Report =>
        build('message', 'a3a59f3e-0000-0000-0000-000000000001', 2, 'spam', override),

    /** Stream report (quorum path). */
    streamReport: (override?: ReportFixtureOverride): Report =>
        build('stream', 'b4b60f4f-0000-0000-0000-000000000002', 2, 'harassment', override),

    /** Account report (quorum path). */
    accountReport: (override?: ReportFixtureOverride): Report =>
        build('account', '0xbadwallet000000000000000000000000000000ff', 3, 'scam', override),

    /** Severity-5 report — exercises the DSA fast-path. */
    childSafetyReport: (override?: ReportFixtureOverride): Report =>
        build('message', 'c5c71f5f-0000-0000-0000-000000000003', 5, 'child_safety', override),
};

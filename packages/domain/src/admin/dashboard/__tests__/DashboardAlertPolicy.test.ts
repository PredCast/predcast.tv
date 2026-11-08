import { describe, expect, it } from 'vitest';

import { deriveAlerts, type AlertSignals } from '../DashboardAlertPolicy';

const at = (iso: string) => new Date(`2026-11-08T${iso}Z`);
const quiet: AlertSignals = { jobs: [], failedOperations: [], openHighSeverityReports: [], signer: null, coingecko: null };

const job = (name: string, over: Partial<AlertSignals['jobs'][number]> = {}): AlertSignals['jobs'][number] => ({
    name, category: 'safe', health: 'ok', consecutiveFailures: 0, lastError: null, lastFinishedAt: at('14:00:00'), lastSuccessAt: at('13:00:00'), ...over,
});

const busy: AlertSignals = {
    jobs: [
        job('SyncLiveMatches', { category: 'on_chain', health: 'failing', consecutiveFailures: 3, lastError: 'timeout' }),
        job('RefreshTokenPrices', { category: 'quota', health: 'failing', consecutiveFailures: 4, lastFinishedAt: at('14:10:00') }),
        job('ViewerReconcile', { health: 'failing', consecutiveFailures: 1 }),
        job('ResolveMarkets', { health: 'late' }),
    ],
    failedOperations: [{ operationId: 'op-1', matchId: 999023, matchLabel: 'Bayern vs Dortmund', kind: 'deploy', error: 'out of gas', finishedAt: at('14:08:00') }],
    openHighSeverityReports: [
        { reportId: 'r-5', severity: 5, reason: 'hate_speech', targetLabel: '@ultra_93', createdAt: at('14:13:00') },
        { reportId: 'r-4', severity: 4, reason: 'match_fixing', targetLabel: 'OM_Tribune', createdAt: at('14:06:00') },
    ],
    signer: { lowBalance: true, balanceWei: '212', thresholdWei: '250', deploysLeft: 9 },
    coingecko: { used: 8_612, budget: 10_000 },
};

describe('deriveAlerts', () => {
    it('stays empty when nothing is wrong', () => {
        expect(deriveAlerts(quiet, 'admin')).toEqual([]);
    });

    it('gives admins everything, critical first then newest', () => {
        const alerts = deriveAlerts(busy, 'admin');
        expect(alerts.map((a) => `${a.level}:${a.kind}:${a.subject}`)).toEqual([
            'critical:report_open:r-5',
            'critical:operation_failed:op-1',
            'critical:feed_down:SyncLiveMatches',
            'warning:job_failing:RefreshTokenPrices',
            'warning:report_open:r-4',
            'warning:job_late:ResolveMarkets',
            'warning:signer_low:signer',
            'warning:quota_budget:coingecko',
        ]);
    });

    it('ignores a job that failed fewer than three times in a row', () => {
        expect(deriveAlerts(busy, 'admin').some((a) => a.subject === 'ViewerReconcile')).toBe(false);
    });

    it('shows moderators the feed and report alerts only', () => {
        expect(deriveAlerts(busy, 'moderator').map((a) => a.kind)).toEqual(['report_open', 'feed_down', 'report_open']);
    });

    it('shows finance the quota budget only', () => {
        expect(deriveAlerts(busy, 'finance').map((a) => a.kind)).toEqual(['quota_budget']);
    });

    it('turns an exhausted budget critical', () => {
        const [alert] = deriveAlerts({ ...quiet, coingecko: { used: 10_000, budget: 10_000 } }, 'finance');
        expect(alert.level).toBe('critical');
    });
});

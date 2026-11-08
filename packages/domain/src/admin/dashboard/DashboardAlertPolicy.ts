import type { AdminRole } from '../types';
import { isAllowed } from '../policies/AdminRolePolicy';
import type { JobCategory } from '../../jobs/types';
import type { JobHealth } from '../../jobs/policies/JobHealthPolicy';

export type AlertLevel = 'critical' | 'warning';
export type AlertKind = 'feed_down' | 'operation_failed' | 'report_open' | 'signer_low' | 'job_failing' | 'job_late' | 'quota_budget';

export interface DashboardAlert {
    readonly kind: AlertKind;
    readonly level: AlertLevel;
    /** Stable id of what the alert is about (job name, operation id, report id…). */
    readonly subject: string;
    readonly at: Date | null;
    /** Kind-specific facts the UI words. */
    readonly facts: Readonly<Record<string, string | number | null>>;
}

export interface AlertSignals {
    readonly jobs: ReadonlyArray<{
        readonly name: string;
        readonly category: JobCategory;
        readonly health: JobHealth;
        readonly consecutiveFailures: number;
        readonly lastError: string | null;
        readonly lastFinishedAt: Date | null;
        readonly lastSuccessAt: Date | null;
    }>;
    /** Failed admin operations that are still the latest one of their match. */
    readonly failedOperations: ReadonlyArray<{
        readonly operationId: string;
        readonly matchId: number;
        readonly matchLabel: string;
        readonly kind: string;
        readonly error: string | null;
        readonly finishedAt: Date | null;
    }>;
    readonly openHighSeverityReports: ReadonlyArray<{
        readonly reportId: string;
        readonly severity: number;
        readonly reason: string;
        readonly targetLabel: string;
        readonly createdAt: Date;
    }>;
    readonly signer: { readonly lowBalance: boolean; readonly balanceWei: string; readonly thresholdWei: string; readonly deploysLeft: number } | null;
    readonly coingecko: { readonly used: number; readonly budget: number } | null;
}

/** Jobs that feed live scores: when they keep failing, the whole match-day view is stale. */
export const FEED_JOBS: ReadonlySet<string> = new Set(['SyncLiveMatches', 'SyncMatches']);
/** Failures in a row before a job becomes an alert (one-off upstream blips stay quiet). */
export const JOB_ALERT_FAILURES = 3;
export const QUOTA_WARN_RATIO = 0.8;

const ADMIN: ReadonlyArray<AdminRole> = ['admin'];
const ADMIN_AND_MOD: ReadonlyArray<AdminRole> = ['admin', 'moderator'];
const ADMIN_AND_FINANCE: ReadonlyArray<AdminRole> = ['admin', 'finance'];

interface Candidate {
    readonly alert: DashboardAlert;
    readonly audience: ReadonlyArray<AdminRole>;
}

function jobAlerts(signals: AlertSignals): Candidate[] {
    return signals.jobs.flatMap((job): Candidate[] => {
        if (job.health === 'failing' && job.consecutiveFailures >= JOB_ALERT_FAILURES) {
            const feed = FEED_JOBS.has(job.name);
            return [{
                audience: feed ? ADMIN_AND_MOD : ADMIN,
                alert: {
                    kind: feed ? 'feed_down' : 'job_failing',
                    level: feed ? 'critical' : 'warning',
                    subject: job.name,
                    at: job.lastFinishedAt,
                    facts: { job: job.name, failures: job.consecutiveFailures, error: job.lastError, lastSuccessAt: job.lastSuccessAt?.toISOString() ?? null },
                },
            }];
        }
        if (job.health === 'late') {
            return [{ audience: ADMIN, alert: { kind: 'job_late', level: 'warning', subject: job.name, at: job.lastFinishedAt, facts: { job: job.name } } }];
        }
        return [];
    });
}

function otherAlerts(signals: AlertSignals): Candidate[] {
    const out: Candidate[] = [];
    for (const op of signals.failedOperations) {
        out.push({
            audience: ADMIN,
            alert: {
                kind: 'operation_failed', level: 'critical', subject: op.operationId, at: op.finishedAt,
                facts: { matchId: op.matchId, match: op.matchLabel, operation: op.kind, error: op.error },
            },
        });
    }
    for (const r of signals.openHighSeverityReports) {
        out.push({
            audience: ADMIN_AND_MOD,
            alert: {
                kind: 'report_open', level: r.severity >= 5 ? 'critical' : 'warning', subject: r.reportId, at: r.createdAt,
                facts: { severity: r.severity, reason: r.reason, target: r.targetLabel },
            },
        });
    }
    if (signals.signer?.lowBalance) {
        const s = signals.signer;
        out.push({
            audience: ADMIN,
            alert: { kind: 'signer_low', level: 'warning', subject: 'signer', at: null, facts: { balanceWei: s.balanceWei, thresholdWei: s.thresholdWei, deploysLeft: s.deploysLeft } },
        });
    }
    const cg = signals.coingecko;
    if (cg && cg.budget > 0 && cg.used / cg.budget >= QUOTA_WARN_RATIO) {
        out.push({
            audience: ADMIN_AND_FINANCE,
            alert: {
                kind: 'quota_budget', level: cg.used >= cg.budget ? 'critical' : 'warning', subject: 'coingecko', at: null,
                facts: { provider: 'CoinGecko', used: cg.used, budget: cg.budget },
            },
        });
    }
    return out;
}

/** Alerts the role may see: critical first, then newest. */
export function deriveAlerts(signals: AlertSignals, role: AdminRole): DashboardAlert[] {
    return [...jobAlerts(signals), ...otherAlerts(signals)]
        .filter((c) => isAllowed(role, c.audience))
        .map((c) => c.alert)
        .sort((a, b) => {
            if (a.level !== b.level) return a.level === 'critical' ? -1 : 1;
            return (b.at?.getTime() ?? 0) - (a.at?.getTime() ?? 0);
        });
}

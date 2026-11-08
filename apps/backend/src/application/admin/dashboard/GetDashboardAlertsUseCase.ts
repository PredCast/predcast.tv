import { inject, injectable } from 'tsyringe';

import type { DashboardAlertsDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IUpstreamUsageReader } from '@chiliztv/domain/shared/ports/IUpstreamUsageReader';
import type { IJobCatalog } from '@chiliztv/domain/jobs/ports/IJobCatalog';
import type { IJobStateRepository } from '@chiliztv/domain/jobs/repositories/IJobStateRepository';
import { jobHealth } from '@chiliztv/domain/jobs/policies/JobHealthPolicy';
import type { IMatchOperationRepository } from '@chiliztv/domain/matches/repositories/IMatchOperationRepository';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IReportRepository } from '@chiliztv/domain/reporting/repositories/IReportRepository';
import { deriveAlerts, type AlertSignals } from '@chiliztv/domain/admin/dashboard/DashboardAlertPolicy';

import { GetDeploymentConfigUseCase } from '../use-cases/GetDeploymentConfigUseCase';
import { logger } from '../../../infrastructure/logging/logger';
import { cached, matchLabelOf } from './dashboardScope';
import { ReportTargetLabeler } from './ReportTargetLabeler';

const TTL_SECONDS = 15;
const OPERATION_WINDOW_MS = 24 * 60 * 60 * 1000;

/** Serializable snapshot of the signals; cached once, then filtered per role. */
interface CachedSignals {
    readonly jobs: Array<Omit<AlertSignals['jobs'][number], 'lastFinishedAt' | 'lastSuccessAt'> & { lastFinishedAt: string | null; lastSuccessAt: string | null }>;
    readonly failedOperations: Array<Omit<AlertSignals['failedOperations'][number], 'finishedAt'> & { finishedAt: string | null }>;
    readonly openHighSeverityReports: Array<Omit<AlertSignals['openHighSeverityReports'][number], 'createdAt'> & { createdAt: string }>;
    readonly signer: AlertSignals['signer'];
    readonly coingecko: AlertSignals['coingecko'];
}

const date = (iso: string | null): Date | null => (iso ? new Date(iso) : null);

@injectable()
export class GetDashboardAlertsUseCase {
    constructor(
        @inject(TOKENS.IJobCatalog) private readonly catalog: IJobCatalog,
        @inject(TOKENS.IJobStateRepository) private readonly states: IJobStateRepository,
        @inject(TOKENS.IMatchOperationRepository) private readonly operations: IMatchOperationRepository,
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IReportRepository) private readonly reports: IReportRepository,
        @inject(TOKENS.IUpstreamUsageReader) private readonly usage: IUpstreamUsageReader,
        private readonly deploymentConfig: GetDeploymentConfigUseCase,
        private readonly labeler: ReportTargetLabeler,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(role: AdminRole): Promise<DashboardAlertsDto> {
        const s = await cached(this.cache, 'admin:dashboard:alert-signals', TTL_SECONDS, () => this.collect());
        const signals: AlertSignals = {
            jobs: s.jobs.map((j) => ({ ...j, lastFinishedAt: date(j.lastFinishedAt), lastSuccessAt: date(j.lastSuccessAt) })),
            failedOperations: s.failedOperations.map((o) => ({ ...o, finishedAt: date(o.finishedAt) })),
            openHighSeverityReports: s.openHighSeverityReports.map((r) => ({ ...r, createdAt: new Date(r.createdAt) })),
            signer: s.signer,
            coingecko: s.coingecko,
        };
        return {
            alerts: deriveAlerts(signals, role).map((a) => ({ ...a, at: a.at?.toISOString() ?? null, facts: { ...a.facts } })),
            generatedAt: this.clock.now().toISOString(),
        };
    }

    private async collect(): Promise<CachedSignals> {
        const now = this.clock.now();
        const [states, ops, queue, usage, signer] = await Promise.all([
            this.states.findAll(),
            this.operations.findActiveOrSince(new Date(now.getTime() - OPERATION_WINDOW_MS), 200),
            this.reports.findForAdminQueue({ status: 'open', severityMin: 4, limit: 10 }),
            this.usage.read(now),
            this.signerSignal(),
        ]);

        const stateOf = new Map(states.map((st) => [st.jobName, st]));
        // A failed operation stays an alert until a later operation on the same match replaces it.
        const latestByMatch = new Map<number, (typeof ops)[number]>();
        for (const op of ops) if (!latestByMatch.has(op.matchId)) latestByMatch.set(op.matchId, op);
        const failed = [...latestByMatch.values()].filter((op) => op.status === 'failed' && !op.progress.cancelledBy);
        const [matches, labels] = await Promise.all([
            this.matches.findByApiFootballIds(failed.map((op) => op.matchId)),
            this.labeler.label(queue.reports),
        ]);
        const matchLabel = new Map(matches.map((m) => [m.toRaw().apiFootballId, matchLabelOf(m.toRaw())]));

        return {
            jobs: this.catalog.list().map((job) => {
                const st = stateOf.get(job.name) ?? null;
                return {
                    name: job.name,
                    category: job.category,
                    health: jobHealth(job, st, now),
                    consecutiveFailures: st?.consecutiveFailures ?? 0,
                    lastError: st?.lastError ?? null,
                    lastFinishedAt: st?.lastFinishedAt?.toISOString() ?? null,
                    lastSuccessAt: st?.lastSuccessAt?.toISOString() ?? null,
                };
            }),
            failedOperations: failed.map((op) => ({
                operationId: op.id,
                matchId: op.matchId,
                matchLabel: matchLabel.get(op.matchId) ?? `#${op.matchId}`,
                kind: op.kind,
                error: op.error,
                finishedAt: op.finishedAt?.toISOString() ?? null,
            })),
            openHighSeverityReports: queue.reports.map(({ props: r }) => ({
                reportId: r.id,
                severity: r.severity,
                reason: r.reasonCode,
                targetLabel: [labels.get(r.id)?.target, labels.get(r.id)?.match].filter(Boolean).join(' · ') || r.targetId,
                createdAt: r.createdAt.toISOString(),
            })),
            signer,
            coingecko: usage.coingecko.usedThisMonth === null ? null : { used: usage.coingecko.usedThisMonth, budget: usage.coingecko.monthlyBudget },
        };
    }

    /** The RPC balance read can fail; the other alerts still render. */
    private async signerSignal(): Promise<AlertSignals['signer']> {
        try {
            const { signer } = await this.deploymentConfig.execute();
            const cost = BigInt(signer.estimatedDeployCostWei);
            return {
                lowBalance: signer.lowBalance,
                balanceWei: signer.balanceWei,
                thresholdWei: signer.lowBalanceThresholdWei,
                deploysLeft: cost > BigInt(0) ? Number(BigInt(signer.balanceWei) / cost) : 0,
            };
        } catch (error) {
            logger.warn('Signer balance unavailable for dashboard alerts', { error: error instanceof Error ? error.message : String(error) });
            return null;
        }
    }
}

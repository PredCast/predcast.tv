import { inject, injectable } from 'tsyringe';

import type { DashboardModerationDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IReportRepository } from '@chiliztv/domain/reporting/repositories/IReportRepository';
import type { IBanRepository } from '@chiliztv/domain/reporting/repositories/IBanRepository';
import type { IUserProfileRepository } from '@chiliztv/domain/users/repositories/IUserProfileRepository';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';

import { cached } from './dashboardScope';
import { ReportTargetLabeler } from './ReportTargetLabeler';

const TTL_SECONDS = 15;
const REPORTS_SHOWN = 5;
const BANS_SHOWN = 3;

/** Open reports by severity and the latest active bans (admin and moderator). */
@injectable()
export class GetDashboardModerationUseCase {
    constructor(
        @inject(TOKENS.IReportRepository) private readonly reports: IReportRepository,
        @inject(TOKENS.IBanRepository) private readonly bans: IBanRepository,
        @inject(TOKENS.IUserProfileRepository) private readonly profiles: IUserProfileRepository,
        @inject(TOKENS.IAdminWalletRepository) private readonly wallets: IAdminWalletRepository,
        private readonly labeler: ReportTargetLabeler,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    execute(): Promise<DashboardModerationDto> {
        return cached(this.cache, 'admin:dashboard:moderation', TTL_SECONDS, () => this.load());
    }

    private async load(): Promise<DashboardModerationDto> {
        const now = this.clock.now();
        const [queue, open, banPage, active] = await Promise.all([
            this.reports.findForAdminQueue({ status: 'open', limit: REPORTS_SHOWN }),
            this.reports.countOpen(),
            this.bans.listForAdmin({ status: 'active', limit: BANS_SHOWN }),
            this.bans.countActive(now),
        ]);
        const bans = banPage.bans.filter((b) => b.isActiveAt(now));
        const issuers = bans.map((b) => b.props.quorumSnapshot.issuedBy).filter((w): w is string => !!w);
        const [labels, profiles, adminLabels] = await Promise.all([
            this.labeler.label(queue.reports),
            this.profiles.findManyByWalletAddresses(bans.map((b) => b.props.walletAddress)),
            this.wallets.findLabels(issuers),
        ]);

        return {
            reports: queue.reports.map(({ props: r }) => ({
                id: r.id,
                severity: r.severity,
                reasonCode: r.reasonCode,
                targetType: r.targetType,
                targetLabel: labels.get(r.id)?.target ?? r.targetId,
                matchLabel: labels.get(r.id)?.match ?? null,
                createdAt: r.createdAt.toISOString(),
            })),
            openTotal: open.total,
            bans: bans.map(({ props: b }) => {
                const issuer = b.quorumSnapshot.trigger === 'admin_manual' ? b.quorumSnapshot.issuedBy : undefined;
                return {
                    id: b.id,
                    wallet: b.walletAddress,
                    username: profiles.get(b.walletAddress.toLowerCase())?.username ?? null,
                    expiresAt: b.expiresAt?.toISOString() ?? null,
                    escalationIndex: b.escalationIndex,
                    issuedBy: issuer ? { wallet: issuer, label: adminLabels.get(issuer.toLowerCase()) ?? null } : ('quorum' as const),
                };
            }),
            activeTotal: active.total,
            generatedAt: now.toISOString(),
        };
    }
}

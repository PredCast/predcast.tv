import { inject, injectable } from 'tsyringe';

import type { DashboardActivityDto } from '@chiliztv/shared';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminRole } from '@chiliztv/domain/admin/types';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IAuditLogReader } from '@chiliztv/domain/admin/ports/IAuditLogReader';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';
import type { IUserProfileRepository } from '@chiliztv/domain/users/repositories/IUserProfileRepository';
import { activityScopeFor } from '@chiliztv/domain/admin/dashboard/ActivityScopePolicy';

import { cached, matchLabelOf } from './dashboardScope';

const TTL_SECONDS = 15;
const SHOWN = 8;
const SCOPE_NAMES = { all: 'all', only: 'moderation', except: 'finance' } as const;

/** Latest audit entries the role may see, with operator and target labels. */
@injectable()
export class GetDashboardActivityUseCase {
    constructor(
        @inject(TOKENS.IAuditLogReader) private readonly audit: IAuditLogReader,
        @inject(TOKENS.IAdminWalletRepository) private readonly wallets: IAdminWalletRepository,
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
        @inject(TOKENS.IUserProfileRepository) private readonly profiles: IUserProfileRepository,
        @inject(TOKENS.ICacheService) private readonly cache: ICacheService,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    execute(role: AdminRole): Promise<DashboardActivityDto> {
        const scope = activityScopeFor(role);
        const name = SCOPE_NAMES[scope.kind];
        return cached(this.cache, `admin:dashboard:activity:${name}`, TTL_SECONDS, () => this.load(role, name));
    }

    private async load(role: AdminRole, scopeName: DashboardActivityDto['scope']): Promise<DashboardActivityDto> {
        const entries = await this.audit.findRecent(SHOWN, activityScopeFor(role));
        const matchIds = entries.filter((e) => e.targetType === 'match').map((e) => Number(e.targetId)).filter(Number.isFinite);
        const wallets = entries.filter((e) => e.targetType === 'wallet').map((e) => e.targetId);
        const [actors, matches, profiles] = await Promise.all([
            this.wallets.findLabels(entries.map((e) => e.actorWallet)),
            this.matches.findByApiFootballIds(matchIds),
            this.profiles.findManyByWalletAddresses(wallets),
        ]);
        const matchLabels = new Map(matches.map((m) => [String(m.toRaw().apiFootballId), matchLabelOf(m.toRaw())]));

        return {
            entries: entries.map((e) => {
                const username = e.targetType === 'wallet' ? profiles.get(e.targetId.toLowerCase())?.username : null;
                return {
                    id: e.id,
                    at: e.createdAt.toISOString(),
                    actorWallet: e.actorWallet,
                    actorLabel: actors.get(e.actorWallet.toLowerCase()) ?? null,
                    actorRole: e.actorRole,
                    action: e.action,
                    targetType: e.targetType,
                    targetId: e.targetId,
                    targetLabel: e.targetType === 'match' ? matchLabels.get(e.targetId) ?? null : username ? `@${username}` : null,
                };
            }),
            scope: scopeName,
            generatedAt: this.clock.now().toISOString(),
        };
    }
}

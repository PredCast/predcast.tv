import { inject, injectable } from 'tsyringe';

import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { Report } from '@chiliztv/domain/reporting/entities/Report';
import type { IChatRepository } from '@chiliztv/domain/chat/repositories/IChatRepository';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import type { IUserProfileRepository } from '@chiliztv/domain/users/repositories/IUserProfileRepository';
import type { IMatchRepository } from '@chiliztv/domain/matches/repositories/IMatchRepository';

import { matchLabelOf, shortAddress } from './dashboardScope';

export interface ReportLabels {
    readonly target: string;
    readonly match: string | null;
}

/** Human labels of report targets ("@ultra_93", stream title) and of their live match. */
@injectable()
export class ReportTargetLabeler {
    constructor(
        @inject(TOKENS.IChatRepository) private readonly chat: IChatRepository,
        @inject(TOKENS.IStreamRepository) private readonly streams: IStreamRepository,
        @inject(TOKENS.IUserProfileRepository) private readonly profiles: IUserProfileRepository,
        @inject(TOKENS.IMatchRepository) private readonly matches: IMatchRepository,
    ) {}

    async label(reports: ReadonlyArray<Report>): Promise<ReadonlyMap<string, ReportLabels>> {
        const authors = new Map<string, string>();
        const streamTitles = new Map<string, string>();
        await Promise.all(
            reports.map(async ({ props: r }) => {
                if (r.targetType === 'message') {
                    const message = await this.chat.findMessageById(r.targetId);
                    // ChatMessage.toJSON is untyped; only these two fields are read.
                    const json = message?.toJSON() as { walletAddress?: string; username?: string } | undefined;
                    if (json?.username) authors.set(r.id, `@${json.username}`);
                    else if (json?.walletAddress) authors.set(r.id, shortAddress(json.walletAddress));
                } else if (r.targetType === 'stream') {
                    const stream = await this.streams.findById(r.targetId);
                    const title = stream?.toJSON().title;
                    if (title) streamTitles.set(r.id, title);
                }
            }),
        );
        const accounts = reports.filter((r) => r.props.targetType === 'account').map((r) => r.props.targetId);
        const matchIds = reports.map((r) => r.props.liveContextMatchId).filter((id): id is number => id !== null);
        const [profiles, matches] = await Promise.all([
            this.profiles.findManyByWalletAddresses(accounts),
            this.matches.findByApiFootballIds(matchIds),
        ]);
        const matchLabels = new Map(matches.map((m) => [m.toRaw().apiFootballId, matchLabelOf(m.toRaw())]));

        return new Map(
            reports.map(({ props: r }) => {
                const username = r.targetType === 'account' ? profiles.get(r.targetId.toLowerCase())?.username : null;
                const target = authors.get(r.id) ?? streamTitles.get(r.id) ?? (username ? `@${username}` : shortAddress(r.targetId));
                return [r.id, { target, match: r.liveContextMatchId !== null ? matchLabels.get(r.liveContextMatchId) ?? null : null }];
            }),
        );
    }
}

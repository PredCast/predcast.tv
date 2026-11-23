import { inject, injectable } from 'tsyringe';

import { doubleXpMonthlyUsage } from '@chiliztv/domain/gamification/policies/doubleXpSchedule';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { AdminDoubleXpListDto } from '@chiliztv/shared';

import { doubleXpRulesDto, toAdminDoubleXpDto } from '../../mappers/adminDtos';

const MS_PER_DAY = 86_400_000;
/** Quota shown for the months already scheduled, up to a year ahead. */
const USAGE_LOOKBACK_DAYS = 32;
const USAGE_HORIZON_DAYS = 366;

/** GET /admin/gamification/double-xp — latest start first, with the §3.6 rules and the monthly quota. */
@injectable()
export class ListDoubleXpEventsUseCase {
    constructor(
        @inject(TOKENS.IDoubleXpEventRepository) private readonly events: IDoubleXpEventRepository,
        @inject(TOKENS.IClock) private readonly clock: IClock,
    ) {}

    async execute(limit: number): Promise<AdminDoubleXpListDto> {
        const now = this.clock.now();
        const [items, window] = await Promise.all([
            this.events.listForAdmin(limit, null),
            this.events.listIntersecting(
                new Date(now.getTime() - USAGE_LOOKBACK_DAYS * MS_PER_DAY),
                new Date(now.getTime() + USAGE_HORIZON_DAYS * MS_PER_DAY),
            ),
        ]);
        return {
            items: items.map((e) => toAdminDoubleXpDto(e, now)),
            rules: doubleXpRulesDto(),
            monthlyUsage: doubleXpMonthlyUsage(window, now).map((u) => ({ ...u })),
        };
    }
}

import { AdminAccountLookup } from '../../application/gamification/services/AdminAccountLookup';
import { DoubleXpCacheInvalidator } from '../../application/gamification/services/DoubleXpCacheInvalidator';
import { AdminAdjustXpUseCase } from '../../application/gamification/use-cases/admin/AdminAdjustXpUseCase';
import { CancelDoubleXpEventUseCase } from '../../application/gamification/use-cases/admin/CancelDoubleXpEventUseCase';
import { CreateDoubleXpEventUseCase } from '../../application/gamification/use-cases/admin/CreateDoubleXpEventUseCase';
import { GetAccountGamificationUseCase } from '../../application/gamification/use-cases/admin/GetAccountGamificationUseCase';
import { ListDoubleXpEventsUseCase } from '../../application/gamification/use-cases/admin/ListDoubleXpEventsUseCase';
import { SuspendGamificationUseCase } from '../../application/gamification/use-cases/admin/SuspendGamificationUseCase';
import { buildGamificationHarness, type HarnessOptions } from './gamificationHarness';

/** Admin use cases of step 07 on the same in-memory store and MockClock as the credit core. */
export function buildGamificationAdminHarness(options: HarnessOptions = {}) {
    const h = buildGamificationHarness(options);
    const lookup = new AdminAccountLookup(h.accounts, h.clock);
    const invalidator = new DoubleXpCacheInvalidator(h.cache, h.logger);
    return {
        ...h,
        listDoubleXp: new ListDoubleXpEventsUseCase(h.store.doubleXp, h.clock),
        createDoubleXp: new CreateDoubleXpEventUseCase(h.store.doubleXp, h.audit, h.clock, invalidator),
        cancelDoubleXp: new CancelDoubleXpEventUseCase(h.store.doubleXp, h.audit, h.clock, invalidator),
        suspension: new SuspendGamificationUseCase(h.store.profiles, h.audit, h.clock, lookup),
        adminAdjust: new AdminAdjustXpUseCase(lookup, h.adjustXp),
        accountView: new GetAccountGamificationUseCase(h.config, h.accounts, h.store.profiles, h.store.ledger, h.clock, lookup),
    };
}

import type { DependencyContainer } from 'tsyringe';

import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IGamificationProgressRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';
import type { IGamificationReadRepository } from '@chiliztv/domain/gamification/repositories/IGamificationReadRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { GamificationAfterCredit } from '../application/gamification/services/GamificationAfterCredit';
import { AdjustXpUseCase } from '../application/gamification/use-cases/AdjustXpUseCase';
import { CheckInUseCase } from '../application/gamification/use-cases/CheckInUseCase';
import { CreditXpUseCase } from '../application/gamification/use-cases/CreditXpUseCase';
import { EvaluateAchievementsUseCase } from '../application/gamification/use-cases/EvaluateAchievementsUseCase';
import { RebuildProfilesUseCase } from '../application/gamification/use-cases/RebuildProfilesUseCase';
import { GamificationConfigService } from '../infrastructure/config/GamificationConfigService';
import { SupabaseCycleRankRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseCycleRankRepository';
import { SupabaseDoubleXpEventRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseDoubleXpEventRepository';
import { SupabaseGamificationCursorRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationCursorRepository';
import { SupabaseGamificationLedgerRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationLedgerRepository';
import { SupabaseGamificationNotificationRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationNotificationRepository';
import { SupabaseGamificationProfileRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationProfileRepository';
import { SupabaseGamificationProgressRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationProgressRepository';
import { GamificationController } from '../presentation/http/controllers/gamification.controller';
import { GamificationReadModels } from '../application/gamification/services/GamificationReadModels';
import { AckNotificationsUseCase } from '../application/gamification/use-cases/AckNotificationsUseCase';
import { GetCurrentDoubleXpUseCase } from '../application/gamification/use-cases/GetCurrentDoubleXpUseCase';
import { GetMyGamificationUseCase } from '../application/gamification/use-cases/GetMyGamificationUseCase';
import { GetProfileBadgesUseCase } from '../application/gamification/use-cases/GetProfileBadgesUseCase';
import { GetProfileCardUseCase } from '../application/gamification/use-cases/GetProfileCardUseCase';
import { GetPublicProfileUseCase } from '../application/gamification/use-cases/GetPublicProfileUseCase';
import { UpdateCosmeticsUseCase } from '../application/gamification/use-cases/UpdateCosmeticsUseCase';
import { SupabaseGamificationReadRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationReadRepository';
import { GamificationReadController } from '../presentation/http/controllers/gamification-read.controller';
import { AdminAccountLookup } from '../application/gamification/services/AdminAccountLookup';
import { DoubleXpCacheInvalidator } from '../application/gamification/services/DoubleXpCacheInvalidator';
import { AdminAdjustXpUseCase } from '../application/gamification/use-cases/admin/AdminAdjustXpUseCase';
import { CancelDoubleXpEventUseCase } from '../application/gamification/use-cases/admin/CancelDoubleXpEventUseCase';
import { CreateDoubleXpEventUseCase } from '../application/gamification/use-cases/admin/CreateDoubleXpEventUseCase';
import { GetAccountGamificationUseCase } from '../application/gamification/use-cases/admin/GetAccountGamificationUseCase';
import { ListDoubleXpEventsUseCase } from '../application/gamification/use-cases/admin/ListDoubleXpEventsUseCase';
import { SuspendGamificationUseCase } from '../application/gamification/use-cases/admin/SuspendGamificationUseCase';
import { AdminGamificationController } from '../presentation/http/controllers/admin-gamification.controller';

/** Gamification ports, repositories, use cases and controller. Needs identity, cache and audit first. */
export function registerGamification(container: DependencyContainer): void {
  container.registerSingleton<IGamificationConfig>(TOKENS.IGamificationConfig, GamificationConfigService);
  container.registerSingleton<IGamificationLedgerRepository>(TOKENS.IGamificationLedgerRepository, SupabaseGamificationLedgerRepository);
  container.registerSingleton<IGamificationProfileRepository>(TOKENS.IGamificationProfileRepository, SupabaseGamificationProfileRepository);
  container.registerSingleton<IGamificationProgressRepository>(TOKENS.IGamificationProgressRepository, SupabaseGamificationProgressRepository);
  container.registerSingleton<IGamificationNotificationRepository>(TOKENS.IGamificationNotificationRepository, SupabaseGamificationNotificationRepository);
  container.registerSingleton<IGamificationCursorRepository>(TOKENS.IGamificationCursorRepository, SupabaseGamificationCursorRepository);
  container.registerSingleton<IDoubleXpEventRepository>(TOKENS.IDoubleXpEventRepository, SupabaseDoubleXpEventRepository);
  container.registerSingleton<ICycleRankRepository>(TOKENS.ICycleRankRepository, SupabaseCycleRankRepository);

  container.registerSingleton(GamificationAfterCredit);
  container.registerSingleton(CreditXpUseCase);
  container.registerSingleton(EvaluateAchievementsUseCase);
  container.registerSingleton(CheckInUseCase);
  container.registerSingleton(AdjustXpUseCase);
  container.registerSingleton(RebuildProfilesUseCase);

  container.registerSingleton(GamificationController);

  registerGamificationReads(container);
  registerGamificationAdmin(container);
}

/** Admin side of step 07 (double XP, suspension, adjustment, player block). */
function registerGamificationAdmin(container: DependencyContainer): void {
  container.registerSingleton(AdminAccountLookup);
  container.registerSingleton(DoubleXpCacheInvalidator);
  container.registerSingleton(ListDoubleXpEventsUseCase);
  container.registerSingleton(CreateDoubleXpEventUseCase);
  container.registerSingleton(CancelDoubleXpEventUseCase);
  container.registerSingleton(SuspendGamificationUseCase);
  container.registerSingleton(AdminAdjustXpUseCase);
  container.registerSingleton(GetAccountGamificationUseCase);
  container.registerSingleton(AdminGamificationController);
}

/** Read API of step 06 (cards, badges, profiles, double XP, owner view). */
function registerGamificationReads(container: DependencyContainer): void {
  container.registerSingleton<IGamificationReadRepository>(TOKENS.IGamificationReadRepository, SupabaseGamificationReadRepository);
  container.registerSingleton(GamificationReadModels);
  container.registerSingleton(GetProfileBadgesUseCase);
  container.registerSingleton(GetProfileCardUseCase);
  container.registerSingleton(GetPublicProfileUseCase);
  container.registerSingleton(GetCurrentDoubleXpUseCase);
  container.registerSingleton(GetMyGamificationUseCase);
  container.registerSingleton(UpdateCosmeticsUseCase);
  container.registerSingleton(AckNotificationsUseCase);
  container.registerSingleton(GamificationReadController);
}

import type { DependencyContainer } from 'tsyringe';

import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IGamificationProgressRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { GamificationAfterCredit } from '../application/gamification/services/GamificationAfterCredit';
import { AdjustXpUseCase } from '../application/gamification/use-cases/AdjustXpUseCase';
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

/** Gamification ports, repositories and use cases. Needs identity, cache and audit first. */
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
  container.registerSingleton(AdjustXpUseCase);
  container.registerSingleton(RebuildProfilesUseCase);
}

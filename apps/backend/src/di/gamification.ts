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

import { GamificationConfigService } from '../infrastructure/config/GamificationConfigService';
import { SupabaseCycleRankRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseCycleRankRepository';
import { SupabaseDoubleXpEventRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseDoubleXpEventRepository';
import { SupabaseGamificationCursorRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationCursorRepository';
import { SupabaseGamificationLedgerRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationLedgerRepository';
import { SupabaseGamificationNotificationRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationNotificationRepository';
import { SupabaseGamificationProfileRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationProfileRepository';
import { SupabaseGamificationProgressRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationProgressRepository';

/** Gamification ports and repositories. Needs identity, cache and audit first. */
export function registerGamification(container: DependencyContainer): void {
  container.registerSingleton<IGamificationConfig>(TOKENS.IGamificationConfig, GamificationConfigService);
  container.registerSingleton<IGamificationLedgerRepository>(TOKENS.IGamificationLedgerRepository, SupabaseGamificationLedgerRepository);
  container.registerSingleton<IGamificationProfileRepository>(TOKENS.IGamificationProfileRepository, SupabaseGamificationProfileRepository);
  container.registerSingleton<IGamificationProgressRepository>(TOKENS.IGamificationProgressRepository, SupabaseGamificationProgressRepository);
  container.registerSingleton<IGamificationNotificationRepository>(TOKENS.IGamificationNotificationRepository, SupabaseGamificationNotificationRepository);
  container.registerSingleton<IGamificationCursorRepository>(TOKENS.IGamificationCursorRepository, SupabaseGamificationCursorRepository);
  container.registerSingleton<IDoubleXpEventRepository>(TOKENS.IDoubleXpEventRepository, SupabaseDoubleXpEventRepository);
  container.registerSingleton<ICycleRankRepository>(TOKENS.ICycleRankRepository, SupabaseCycleRankRepository);
}

import type { DependencyContainer } from 'tsyringe';

import type { IGamificationConfig } from '@chiliztv/domain/gamification/ports/IGamificationConfig';
import type { ICycleRankRepository } from '@chiliztv/domain/gamification/repositories/ICycleRankRepository';
import type { IDoubleXpEventRepository } from '@chiliztv/domain/gamification/repositories/IDoubleXpEventRepository';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';
import type { IGamificationLedgerRepository } from '@chiliztv/domain/gamification/repositories/IGamificationLedgerRepository';
import type { IGamificationNotificationRepository } from '@chiliztv/domain/gamification/repositories/IGamificationNotificationRepository';
import type { IGamificationProfileRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProfileRepository';
import type { IGamificationProgressRepository } from '@chiliztv/domain/gamification/repositories/IGamificationProgressRepository';
import type { IStakeTokenDecimals } from '@chiliztv/domain/gamification/ports/IStakeTokenDecimals';
import type { ITextHasher } from '@chiliztv/domain/gamification/ports/ITextHasher';
import type { IGamificationEventSource } from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';
import type { IWatchMinuteRepository } from '@chiliztv/domain/gamification/repositories/IWatchMinuteRepository';
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
import { AchievementRefresh } from '../application/gamification/services/AchievementRefresh';
import { GamificationActivityRecorder } from '../application/gamification/services/GamificationActivityRecorder';
import { ProcessBetVolumeUseCase } from '../application/gamification/use-cases/chain/ProcessBetVolumeUseCase';
import { ProcessGamificationChainUseCase } from '../application/gamification/use-cases/chain/ProcessGamificationChainUseCase';
import { ProcessMarketSettlementsUseCase } from '../application/gamification/use-cases/chain/ProcessMarketSettlementsUseCase';
import { ProcessModerationReversalsUseCase } from '../application/gamification/use-cases/chain/ProcessModerationReversalsUseCase';
import { ProcessSupportEventsUseCase } from '../application/gamification/use-cases/chain/ProcessSupportEventsUseCase';
import { PurgeGamificationDataUseCase } from '../application/gamification/use-cases/PurgeGamificationDataUseCase';
import { RecordChatXpUseCase } from '../application/gamification/use-cases/RecordChatXpUseCase';
import { RecordFollowXpUseCase } from '../application/gamification/use-cases/RecordFollowXpUseCase';
import { RecordProfileStepUseCase } from '../application/gamification/use-cases/RecordProfileStepUseCase';
import { RecordWatchHeartbeatUseCase } from '../application/gamification/use-cases/RecordWatchHeartbeatUseCase';
import { ViemStakeTokenDecimals } from '../infrastructure/blockchain/adapters/ViemStakeTokenDecimals';
import { NodeTextHasher } from '../infrastructure/crypto/NodeTextHasher';
import { GamificationChainProcessorJob } from '../infrastructure/scheduling/jobs/GamificationChainProcessorJob';
import { GamificationPurgeJob } from '../infrastructure/scheduling/jobs/GamificationPurgeJob';
import { SupabaseGamificationEventSource } from '../infrastructure/persistence/repositories/gamification/SupabaseGamificationEventSource';
import { SupabaseWatchMinuteRepository } from '../infrastructure/persistence/repositories/gamification/SupabaseWatchMinuteRepository';
import { GamificationWatchController } from '../presentation/http/controllers/gamification-watch.controller';

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

  // Step 04: player XP sources (watch, chat, follow, first steps, chain processor).
  container.registerSingleton<IWatchMinuteRepository>(TOKENS.IWatchMinuteRepository, SupabaseWatchMinuteRepository);
  container.registerSingleton<IGamificationEventSource>(TOKENS.IGamificationEventSource, SupabaseGamificationEventSource);
  container.registerSingleton<IStakeTokenDecimals>(TOKENS.IStakeTokenDecimals, ViemStakeTokenDecimals);
  container.registerSingleton<ITextHasher>(TOKENS.ITextHasher, NodeTextHasher);
  container.registerSingleton(AchievementRefresh);
  container.registerSingleton(RecordProfileStepUseCase);
  container.registerSingleton(RecordChatXpUseCase);
  container.registerSingleton(RecordFollowXpUseCase);
  container.registerSingleton(GamificationActivityRecorder);
  container.registerSingleton(RecordWatchHeartbeatUseCase);
  container.registerSingleton(ProcessBetVolumeUseCase);
  container.registerSingleton(ProcessMarketSettlementsUseCase);
  container.registerSingleton(ProcessSupportEventsUseCase);
  container.registerSingleton(ProcessModerationReversalsUseCase);
  container.registerSingleton(ProcessGamificationChainUseCase);
  container.registerSingleton(PurgeGamificationDataUseCase);
  container.registerSingleton(GamificationWatchController);
  container.registerSingleton(GamificationChainProcessorJob);
  container.registerSingleton(GamificationPurgeJob);
}

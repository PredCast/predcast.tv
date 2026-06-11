import { inject, injectable } from 'tsyringe';

import { ReportAction, type ActionKind } from '@chiliztv/domain/reporting/entities/ReportAction';
import type { ReportTargetType } from '@chiliztv/domain/reporting/entities/Report';
import { evaluateQuorum } from '@chiliztv/domain/reporting/policies/ReportQuorumPolicy';
import type { IReportRepository } from '@chiliztv/domain/reporting/repositories/IReportRepository';
import type { IReportActionRepository } from '@chiliztv/domain/reporting/repositories/IReportActionRepository';
import type { IBanRepository } from '@chiliztv/domain/reporting/repositories/IBanRepository';
import type { IPresenceService } from '@chiliztv/domain/reporting/ports/IPresenceService';
import type { IReportConfigProvider } from '@chiliztv/domain/reporting/ports/IReportConfigProvider';
import type { IStreamRepository } from '@chiliztv/domain/streams/repositories/IStreamRepository';
import type { ReportSeverity } from '@chiliztv/domain/reporting/value-objects/QuorumSnapshot';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import type { ILockService } from '@chiliztv/domain/shared/ports/ILockService';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { SoftDeleteMessageUseCase } from './SoftDeleteMessageUseCase';
import { StopStreamUseCase } from './StopStreamUseCase';
import { BanAccountUseCase } from './BanAccountUseCase';
import { moderationEvalLockKey } from '../../../shared/constants/moderation.constants';
import { logger } from '../../../infrastructure/logging/logger';

const EVAL_LOCK_TTL_SECONDS = 15;

export interface EvaluateThresholdInput {
  targetType: ReportTargetType;
  targetId: string;
  liveContextMatchId: number | null;
  liveContextStreamId: string | null;
}

const KIND_BY_TARGET: Record<ReportTargetType, ActionKind> = {
  message: 'soft_delete_message',
  stream: 'stop_stream',
  account: 'ban_account',
};

/**
 * Quorum evaluation, serialized two ways: a Redis lock (normal path) and the
 * one-active-action partial unique index as the DB backstop — a concurrent
 * double trigger after a lock expiry resolves to "already done".
 */
@injectable()
export class EvaluateReportThresholdUseCase {
  constructor(
    @inject(TOKENS.IReportRepository) private readonly reports: IReportRepository,
    @inject(TOKENS.IReportActionRepository) private readonly actions: IReportActionRepository,
    @inject(TOKENS.IBanRepository) private readonly bans: IBanRepository,
    @inject(TOKENS.IPresenceService) private readonly presence: IPresenceService,
    @inject(TOKENS.IReportConfigProvider) private readonly config: IReportConfigProvider,
    @inject(TOKENS.IStreamRepository) private readonly streams: IStreamRepository,
    @inject(TOKENS.ILockService) private readonly locks: ILockService,
    @inject(TOKENS.IClock) private readonly clock: IClock,
    private readonly softDelete: SoftDeleteMessageUseCase,
    private readonly stopStream: StopStreamUseCase,
    private readonly banAccount: BanAccountUseCase,
  ) {}

  async execute(input: EvaluateThresholdInput): Promise<void> {
    const lockKey = moderationEvalLockKey(input.targetType, input.targetId, input.liveContextMatchId);
    const outcome = await this.locks.withLock({
      key: lockKey,
      ttlSeconds: EVAL_LOCK_TTL_SECONDS,
      onAcquired: () => this.evaluate(input),
      onContention: 'skip',
    });
    if (!outcome.ran) {
      // Another instance is already evaluating this exact target — its
      // evaluation will see this report too.
      logger.debug('Threshold evaluation skipped (lock taken)', { lockKey });
    }
  }

  private async evaluate(input: EvaluateThresholdInput): Promise<void> {
    // Idempotence level 1 — an active action already covers this target.
    const existing = await this.actions.findActiveForTarget(
      input.targetType, input.targetId, input.liveContextMatchId,
    );
    if (existing) return;

    const now = this.clock.now();
    const cfg = await this.config.get();
    const openReports = await this.reports.findOpenOnTarget(
      input.targetType, input.targetId, input.liveContextMatchId,
    );
    if (openReports.length === 0) return;

    const reporterWallets = Array.from(new Set(openReports.map((r) => r.props.reporterWallet)));
    const maxSeverity = openReports.reduce(
      (max, r) => (r.props.severity > max ? r.props.severity : max), 1 as ReportSeverity,
    );

    const totalEligible = await this.countEligible(input, cfg.minPresenceSec, now);

    const decision = evaluateQuorum({
      distinctReports: reporterWallets.length,
      totalEligible,
      maxSeverity,
      config: cfg,
      now,
    });

    logger.info('report.threshold_evaluated', {
      targetType: input.targetType,
      targetId: input.targetId,
      liveContextMatchId: input.liveContextMatchId,
      distinctReports: reporterWallets.length,
      totalEligible,
      maxSeverity,
      triggered: decision.triggered,
      ...(decision.triggered ? { trigger: decision.snapshot.trigger } : { reason: decision.reason }),
    });

    if (!decision.triggered) return;
    const snapshot = decision.snapshot;

    // Effect first (each one is individually guarded/idempotent), then the
    // action row claims the slot, then reports flip to auto_actioned.
    let affectedMessageId: string | null = null;
    let affectedStreamId: string | null = null;
    let affectedBanId: string | null = null;

    if (input.targetType === 'message') {
      affectedMessageId = input.targetId;
      const action = await this.persistAction(input, snapshot, reporterWallets, {
        affectedMessageId, affectedStreamId, affectedBanId,
      });
      await this.softDelete.execute(input.targetId, action.props.id);
      await this.reports.markActionedBatch(openReports.map((r) => r.props.id), action.props.id);
      return;
    }

    if (input.targetType === 'stream') {
      affectedStreamId = input.targetId;
      const action = await this.persistAction(input, snapshot, reporterWallets, {
        affectedMessageId, affectedStreamId, affectedBanId,
      });
      await this.stopStream.execute(input.targetId);
      await this.reports.markActionedBatch(openReports.map((r) => r.props.id), action.props.id);
      return;
    }

    // account → ban (the ban id must exist before the action row references it)
    const ban = await this.banAccount.execute({
      walletAddress: input.targetId,
      quorumSnapshot: snapshot,
      triggeredByReportId: openReports[0]?.props.id ?? null,
      triggeringLiveMatchId: input.liveContextMatchId,
    });
    affectedBanId = ban.props.id;
    const action = await this.persistAction(input, snapshot, reporterWallets, {
      affectedMessageId, affectedStreamId, affectedBanId,
    });
    await this.reports.markActionedBatch(openReports.map((r) => r.props.id), action.props.id);
  }

  private async persistAction(
    input: EvaluateThresholdInput,
    snapshot: ReportAction['props']['quorumSnapshot'],
    reporterWallets: string[],
    affected: { affectedMessageId: string | null; affectedStreamId: string | null; affectedBanId: string | null },
  ): Promise<ReportAction> {
    return this.actions.save(
      ReportAction.create({
        kind: KIND_BY_TARGET[input.targetType],
        targetType: input.targetType,
        targetId: input.targetId,
        liveContextMatchId: input.liveContextMatchId,
        quorumSnapshot: snapshot,
        reporterWallets,
        triggeredAt: this.clock.now(),
        ...affected,
      }),
    );
  }

  /** Eligible denominator: presence-qualified wallets minus streamer minus banned. */
  private async countEligible(
    input: EvaluateThresholdInput,
    minPresenceSec: number,
    now: Date,
  ): Promise<number> {
    if (input.liveContextMatchId === null) return 0;

    let wallets = await this.presence.getEligibleWallets(input.liveContextMatchId, minPresenceSec, now);

    const streamerWallet = await this.resolveStreamerWallet(input);
    if (streamerWallet) {
      wallets = wallets.filter((w) => w !== streamerWallet);
    }

    const banned = await this.bans.findActiveWallets(wallets, now);
    return wallets.length - banned.length;
  }

  private async resolveStreamerWallet(input: EvaluateThresholdInput): Promise<string | null> {
    const streamId = input.targetType === 'stream' ? input.targetId : input.liveContextStreamId;
    if (!streamId) return null;
    const stream = await this.streams.findById(streamId).catch(() => null);
    if (!stream) return null;
    const json = stream.toJSON() as { streamerWalletAddress?: string };
    return json.streamerWalletAddress?.toLowerCase() ?? null;
  }
}

import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';
import { GetStreamerDonationsUseCase } from '../../../application/stream-wallet/use-cases/GetStreamerDonationsUseCase';
import { GetStreamerSubscriptionsUseCase } from '../../../application/stream-wallet/use-cases/GetStreamerSubscriptionsUseCase';
import { GetStreamerStatsUseCase } from '../../../application/stream-wallet/use-cases/GetStreamerStatsUseCase';
import { GetDonorHistoryUseCase } from '../../../application/stream-wallet/use-cases/GetDonorHistoryUseCase';
import { GetSubscriberHistoryUseCase } from '../../../application/stream-wallet/use-cases/GetSubscriberHistoryUseCase';
import { DeployStreamerWalletUseCase } from '../../../application/stream-wallet/use-cases/DeployStreamerWalletUseCase';
import { parsePagination } from '../helpers/parsePagination';

@injectable()
export class StreamWalletController {
  constructor(
    @inject(GetStreamerDonationsUseCase)
    private readonly getStreamerDonationsUseCase: GetStreamerDonationsUseCase,
    @inject(GetStreamerSubscriptionsUseCase)
    private readonly getStreamerSubscriptionsUseCase: GetStreamerSubscriptionsUseCase,
    @inject(GetStreamerStatsUseCase)
    private readonly getStreamerStatsUseCase: GetStreamerStatsUseCase,
    @inject(GetDonorHistoryUseCase)
    private readonly getDonorHistoryUseCase: GetDonorHistoryUseCase,
    @inject(GetSubscriberHistoryUseCase)
    private readonly getSubscriberHistoryUseCase: GetSubscriberHistoryUseCase,
    @inject(DeployStreamerWalletUseCase)
    private readonly deployStreamerWalletUseCase: DeployStreamerWalletUseCase
  ) {}

  async getStreamerDonations(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { streamerAddress } = req.params;
      const { limit, offset } = parsePagination(req);
      const { items, total } = await this.getStreamerDonationsUseCase.execute({ streamerAddress, limit, offset });

      res.json({
        success: true,
        donations: items.map(d => d.toJSON()),
        total,
        limit,
        offset,
      });
    } catch (error) {
      next(error);
    }
  }

  async getStreamerSubscriptions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { streamerAddress } = req.params;
      const { limit, offset } = parsePagination(req);
      const { items, total } = await this.getStreamerSubscriptionsUseCase.execute({ streamerAddress, limit, offset });

      res.json({
        success: true,
        subscriptions: items.map(s => s.toJSON()),
        total,
        limit,
        offset,
      });
    } catch (error) {
      next(error);
    }
  }

  async getStreamerStats(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { streamerAddress } = req.params;
      const stats = await this.getStreamerStatsUseCase.execute(streamerAddress);

      res.json({
        success: true,
        stats: {
          ...stats,
          totalRevenue: stats.totalDonationAmount,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getDonorHistory(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { donorAddress } = req.params;
      const { limit, offset } = parsePagination(req);
      const { items, total } = await this.getDonorHistoryUseCase.execute({ donorAddress, limit, offset });

      res.json({
        success: true,
        donations: items.map(d => d.toJSON()),
        total,
        limit,
        offset,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /stream-wallet/deploy/:streamerAddress
   *
   * Deploys a `StreamWallet` proxy for the supplied address (admin-signed,
   * gas paid by the platform). Idempotent: re-uses an existing proxy.
   */
  async deployStreamerWallet(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { streamerAddress } = req.params;
      const result = await this.deployStreamerWalletUseCase.execute(streamerAddress);
      res.json({
        success: true,
        wallet: result.wallet,
        created: result.created,
      });
    } catch (error) {
      next(error);
    }
  }

  async getSubscriberHistory(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { subscriberAddress } = req.params;
      const { limit, offset } = parsePagination(req);
      const { items, total } = await this.getSubscriberHistoryUseCase.execute({ subscriberAddress, limit, offset });

      res.json({
        success: true,
        subscriptions: items.map(s => s.toJSON()),
        total,
        limit,
        offset,
      });
    } catch (error) {
      next(error);
    }
  }
}

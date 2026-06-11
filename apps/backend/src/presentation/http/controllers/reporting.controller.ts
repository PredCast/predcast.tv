import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'tsyringe';

import { UnauthorizedError } from '@chiliztv/domain/shared/errors/UnauthorizedError';
import type { IReportConfigProvider } from '@chiliztv/domain/reporting/ports/IReportConfigProvider';
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { CreateReportDto } from '@chiliztv/shared';

import { CreateReportUseCase } from '../../../application/reporting/use-cases/CreateReportUseCase';

@injectable()
export class ReportingController {
  constructor(
    @inject(CreateReportUseCase)
    private readonly createReport: CreateReportUseCase,
    @inject(TOKENS.IReportConfigProvider)
    private readonly reportConfig: IReportConfigProvider,
  ) {}

  async getConfig(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const config = await this.reportConfig.get();
      res.json({ success: true, config });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const wallet = req.user?.walletAddress;
      if (!wallet) throw new UnauthorizedError('Wallet identity required');

      const report = await this.createReport.execute(wallet, req.body as CreateReportDto);
      const p = report.props;

      res.status(201).json({
        success: true,
        report: {
          id: p.id,
          targetType: p.targetType,
          targetId: p.targetId,
          reasonCode: p.reasonCode,
          severity: p.severity,
          status: p.status,
          createdAt: p.createdAt.toISOString(),
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

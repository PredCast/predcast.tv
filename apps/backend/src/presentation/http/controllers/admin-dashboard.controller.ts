import { Request, Response, NextFunction } from 'express';
import { container, injectable } from 'tsyringe';
import { z } from 'zod';

import { GetDashboardKpisUseCase } from '../../../application/admin/dashboard/GetDashboardKpisUseCase';
import { GetDashboardLiveUseCase } from '../../../application/admin/dashboard/GetDashboardLiveUseCase';
import { GetDashboardEventsUseCase } from '../../../application/admin/dashboard/GetDashboardEventsUseCase';
import { GetDashboardSuggestionsUseCase } from '../../../application/admin/dashboard/GetDashboardSuggestionsUseCase';
import { GetDashboardOperationsUseCase } from '../../../application/admin/dashboard/GetDashboardOperationsUseCase';
import { GetDashboardHealthUseCase } from '../../../application/admin/dashboard/GetDashboardHealthUseCase';
import { GetDashboardAlertsUseCase } from '../../../application/admin/dashboard/GetDashboardAlertsUseCase';
import { GetDashboardModerationUseCase } from '../../../application/admin/dashboard/GetDashboardModerationUseCase';
import { GetDashboardActivityUseCase } from '../../../application/admin/dashboard/GetDashboardActivityUseCase';
import { CancelMatchOperationUseCase } from '../../../application/admin/use-cases/CancelMatchOperationUseCase';
import { auditCtx } from './audit-context';

type Handler = (req: Request) => Promise<unknown>;

/** One endpoint per dashboard card, so a failing source only breaks its own card. */
@injectable()
export class AdminDashboardController {
    kpis = this.handle((req) => container.resolve(GetDashboardKpisUseCase).execute(req.admin!.role));
    live = this.handle((req) => container.resolve(GetDashboardLiveUseCase).execute(req.admin!.role));
    events = this.handle((req) => container.resolve(GetDashboardEventsUseCase).execute(req.admin!.role));
    suggestions = this.handle(() => container.resolve(GetDashboardSuggestionsUseCase).execute());
    operations = this.handle(() => container.resolve(GetDashboardOperationsUseCase).execute());
    health = this.handle(() => container.resolve(GetDashboardHealthUseCase).execute());
    alerts = this.handle((req) => container.resolve(GetDashboardAlertsUseCase).execute(req.admin!.role));
    moderation = this.handle(() => container.resolve(GetDashboardModerationUseCase).execute());
    activity = this.handle((req) => container.resolve(GetDashboardActivityUseCase).execute(req.admin!.role));

    async cancelOperation(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const operationId = z.string().uuid().parse(req.params.operationId);
            await container.resolve(CancelMatchOperationUseCase).execute(operationId, auditCtx(req));
            res.json({ success: true, data: { operationId, status: 'cancelled' } });
        } catch (error) {
            next(error);
        }
    }

    private handle(run: Handler) {
        return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                res.json({ success: true, data: await run(req) });
            } catch (error) {
                next(error);
            }
        };
    }
}

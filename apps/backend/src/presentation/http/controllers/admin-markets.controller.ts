import { Request, Response, NextFunction } from 'express';
import { container, injectable } from 'tsyringe';

import { ValidationError } from '@chiliztv/domain/shared/errors/ValidationError';
import { DeployMatchBodySchema, UnpublishMatchBodySchema } from '@chiliztv/shared';

import { CloseMatchMarketsUseCase } from '../../../application/admin/use-cases/CloseMatchMarketsUseCase';
import { DeployMatchContractUseCase } from '../../../application/admin/use-cases/DeployMatchContractUseCase';
import { GetDeploymentConfigUseCase } from '../../../application/admin/use-cases/GetDeploymentConfigUseCase';
import { GetMatchOperationUseCase } from '../../../application/admin/use-cases/GetMatchOperationUseCase';
import { PublishMatchUseCase } from '../../../application/admin/use-cases/PublishMatchUseCase';
import { RetryMarketsSetupUseCase } from '../../../application/admin/use-cases/RetryMarketsSetupUseCase';
import { UnpublishMatchUseCase } from '../../../application/admin/use-cases/UnpublishMatchUseCase';
import { toMatchOperationDto } from '../../../application/admin/deployment/toMatchOperationDto';
import { auditCtx } from './audit-context';

/** `:id` is the API-Football id of the match. */
function matchId(req: Request): number {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) throw new ValidationError('Invalid match id');
    return id;
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

@injectable()
export class AdminMarketsController {
    /** Queues the deployment; 202 + the operation the admin then polls. */
    async deploy(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { chainId } = DeployMatchBodySchema.parse(req.body);
            const op = await container.resolve(DeployMatchContractUseCase).execute(matchId(req), chainId, auditCtx(req));
            res.status(202).json({ success: true, data: toMatchOperationDto(op) });
        } catch (err) {
            next(err);
        }
    }

    async retrySetup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const op = await container.resolve(RetryMarketsSetupUseCase).execute(matchId(req), auditCtx(req));
            res.status(202).json({ success: true, data: toMatchOperationDto(op) });
        } catch (err) {
            next(err);
        }
    }

    async publish(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { publishedAt } = await container.resolve(PublishMatchUseCase).execute(matchId(req), auditCtx(req));
            res.json({ success: true, data: { publishedAt: publishedAt.toISOString() } });
        } catch (err) {
            next(err);
        }
    }

    async unpublish(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const mode = UnpublishMatchBodySchema.parse(req.body ?? {});
            const { cancelOperation } = await container.resolve(UnpublishMatchUseCase).execute(matchId(req), mode, auditCtx(req));
            res.json({ success: true, data: { cancelOperation: cancelOperation ? toMatchOperationDto(cancelOperation) : null } });
        } catch (err) {
            next(err);
        }
    }

    async closeMarkets(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await container.resolve(CloseMatchMarketsUseCase).execute(matchId(req), auditCtx(req));
            res.json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }

    async operation(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = String(req.params.operationId);
            if (!UUID.test(id)) throw new ValidationError('Invalid operation id');
            const op = await container.resolve(GetMatchOperationUseCase).execute(id);
            res.json({ success: true, data: op });
        } catch (err) {
            next(err);
        }
    }

    async deploymentConfig(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const config = await container.resolve(GetDeploymentConfigUseCase).execute();
            res.json({ success: true, data: config });
        } catch (err) {
            next(err);
        }
    }
}

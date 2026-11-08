import { Request, Response, NextFunction } from 'express';
import { container, injectable } from 'tsyringe';
import { z } from 'zod';

import { RunJobRequestDtoSchema } from '@chiliztv/shared';

import { ListAdminJobsUseCase } from '../../../application/jobs/use-cases/ListAdminJobsUseCase';
import { ListJobRunsUseCase } from '../../../application/jobs/use-cases/ListJobRunsUseCase';
import { GetJobRunUseCase } from '../../../application/jobs/use-cases/GetJobRunUseCase';
import { RequestJobRunUseCase } from '../../../application/jobs/use-cases/RequestJobRunUseCase';
import { ListIndexersUseCase } from '../../../application/jobs/use-cases/ListIndexersUseCase';
import { auditCtx } from './audit-context';

@injectable()
export class AdminJobsController {
    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = await container.resolve(ListAdminJobsUseCase).execute(req.admin!.role);
            res.json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }

    async runs(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = await container.resolve(ListJobRunsUseCase).execute(req.params.name);
            res.json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }

    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const runId = z.string().uuid().parse(req.params.runId);
            const data = await container.resolve(GetJobRunUseCase).execute(runId);
            res.json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }

    /** 202: the request is queued; poll GET /admin/jobs/runs/:runId for the outcome. */
    async runNow(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = RunJobRequestDtoSchema.parse(req.body ?? {});
            const data = await container
                .resolve(RequestJobRunUseCase)
                .execute({ jobName: req.params.name, confirm: body.confirm === true }, auditCtx(req));
            res.status(202).json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }

    async indexers(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = await container.resolve(ListIndexersUseCase).execute();
            res.json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }
}

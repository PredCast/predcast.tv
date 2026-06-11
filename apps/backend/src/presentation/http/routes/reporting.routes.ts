import { Router } from 'express';
import { container } from 'tsyringe';
import { z } from 'zod';

import { createReportSchema } from '@chiliztv/shared';

import { ReportingController } from '../controllers/reporting.controller';
import { validate } from '../middlewares/validation.middleware';

const router = Router();
const controller = container.resolve(ReportingController);

router.post('/', validate(z.object({ body: createReportSchema })), controller.create.bind(controller));
router.get('/config', controller.getConfig.bind(controller));

export { router as reportingRoutes };

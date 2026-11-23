import { Router } from 'express';
import { container } from 'tsyringe';

import { GamificationController } from '../controllers/gamification.controller';
import { requireAccount } from '../middlewares/require-account.middleware';

/** Mounted after `authenticate`; every route needs an `accountId` in the JWT (401 ACCOUNT_REQUIRED). */
const router = Router();
const controller = container.resolve(GamificationController);

router.use(requireAccount);
router.post('/check-in', controller.postCheckIn.bind(controller));

export { router as gamificationRoutes };

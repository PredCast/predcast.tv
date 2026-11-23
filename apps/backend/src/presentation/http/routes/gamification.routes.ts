import { Router } from 'express';
import { container } from 'tsyringe';

import { GamificationWatchController } from '../controllers/gamification-watch.controller';
import { GamificationController } from '../controllers/gamification.controller';
import { requireAccount } from '../middlewares/require-account.middleware';
import { requireNotBanned } from '../middlewares/require-not-banned.middleware';

/** Mounted after `authenticate`; every route needs an `accountId` in the JWT (401 ACCOUNT_REQUIRED). */
const router = Router();
const controller = container.resolve(GamificationController);

router.use(requireAccount);
router.post('/check-in', controller.postCheckIn.bind(controller));

const watchController = container.resolve(GamificationWatchController);
router.post('/watch-heartbeat', requireNotBanned, watchController.postWatchHeartbeat.bind(watchController));

export { router as gamificationRoutes };

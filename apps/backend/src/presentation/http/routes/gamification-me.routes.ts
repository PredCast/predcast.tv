import { Router } from 'express';
import { container } from 'tsyringe';

import { GamificationReadController } from '../controllers/gamification-read.controller';
import { requireAccount } from '../middlewares/require-account.middleware';

/** Owner routes, mounted on `/gamification/me` after `authenticate` (401 ACCOUNT_REQUIRED without `accountId`). */
const router = Router();
const controller = container.resolve(GamificationReadController);

router.use(requireAccount);
router.get('/', controller.getMe);
router.put('/cosmetics', controller.putCosmetics);
router.post('/notifications/ack', controller.postAck);

export { router as gamificationMeRoutes };

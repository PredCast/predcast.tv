import { Router } from 'express';
import { container } from 'tsyringe';

import { GamificationReadController } from '../controllers/gamification-read.controller';

/** Public read routes (no JWT, D8), mounted on `/gamification` before `authenticate`. */
const router = Router();
const controller = container.resolve(GamificationReadController);

router.get('/cards/:wallet', controller.getCard);
router.post('/cards/badges', controller.postBadges);
router.get('/profiles/:wallet', controller.getProfile);
router.get('/double-xp/current', controller.getCurrentDoubleXp);

export { router as gamificationPublicRoutes };

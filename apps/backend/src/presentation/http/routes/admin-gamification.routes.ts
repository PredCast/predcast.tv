import { Router } from 'express';
import { container } from 'tsyringe';

import { AdminGamificationController } from '../controllers/admin-gamification.controller';
import { requireAdmin } from '../middlewares/require-admin.middleware';

/** Mounted on `/admin/gamification` (admin+, every mutation audited). Works with the flag off, to prepare the launch. */
const router = Router();
const controller = container.resolve(AdminGamificationController);

router.use(requireAdmin('admin'));
router.get('/double-xp', controller.listEvents);
router.post('/double-xp', controller.createEvent);
router.post('/double-xp/:id/cancel', controller.cancelEvent);
router.get('/accounts/:wallet', controller.getAccount);
router.post('/accounts/:wallet/suspend', controller.suspend);
router.post('/accounts/:wallet/unsuspend', controller.unsuspend);
router.post('/accounts/:wallet/adjust', controller.adjustXp);

export { router as adminGamificationRoutes };

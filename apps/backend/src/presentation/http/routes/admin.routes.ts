import { Router } from 'express';
import { container } from 'tsyringe';
import { AdminController } from '../controllers/admin.controller';
import { requireAdmin } from '../middlewares/require-admin.middleware';

const router = Router();
const controller = container.resolve(AdminController);

// Any active role may probe its own session.
router.get('/me', requireAdmin(), controller.me.bind(controller));

export { router as adminRoutes };

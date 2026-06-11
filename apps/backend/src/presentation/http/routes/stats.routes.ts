import { Router } from 'express';
import { container } from 'tsyringe';
import { StatsController } from '../controllers/stats.controller';

const router = Router();
const statsController = container.resolve(StatsController);

router.get('/platform', statsController.getPlatform.bind(statsController));

export { router as statsRoutes };

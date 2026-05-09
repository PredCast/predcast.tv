import { Router } from 'express';
import { container } from 'tsyringe';
import { PoolController } from '../controllers/pool.controller';

const router = Router();
const poolController = container.resolve(PoolController);

router.get('/apy', poolController.getApy.bind(poolController));

export { router as poolRoutes };

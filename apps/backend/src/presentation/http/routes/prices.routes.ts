import { Router } from 'express';
import { container } from 'tsyringe';
import { PricesController } from '../controllers/prices.controller';

const router = Router();
const pricesController = container.resolve(PricesController);

router.get('/', pricesController.getAll.bind(pricesController));
router.get('/:symbol', pricesController.getBySymbol.bind(pricesController));

export { router as pricesRoutes };

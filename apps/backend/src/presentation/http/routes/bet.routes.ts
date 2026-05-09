import { Router } from 'express';
import { container } from 'tsyringe';
import { BetController } from '../controllers/bet.controller';

const router = Router();
const betController = container.resolve(BetController);

// GET /bets?user=0x…&status=PENDING&limit=20&offset=0
router.get('/', betController.getUserBets.bind(betController));

export { router as betRoutes };

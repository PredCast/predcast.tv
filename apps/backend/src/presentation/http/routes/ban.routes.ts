import { Router } from 'express';
import { container } from 'tsyringe';

import { BanController } from '../controllers/ban.controller';

const router = Router();
const controller = container.resolve(BanController);

router.get('/me', controller.myBan.bind(controller));

export { router as banRoutes };

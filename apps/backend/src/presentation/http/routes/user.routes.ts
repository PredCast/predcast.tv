import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = container.resolve(UserController);

// 2 MB max — enough for a 1 MP JPEG, blocks data-URL spam.
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 2 * 1024 * 1024 } });

router.post('/avatar', upload.single('file'), userController.uploadAvatar.bind(userController));
router.delete('/avatar', userController.deleteAvatar.bind(userController));

export { router as userRoutes };

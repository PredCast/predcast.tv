import { Request, Response, NextFunction } from 'express';
import { injectable } from 'tsyringe';

@injectable()
export class AdminController {
    /** Session probe for the admin app's guard — requireAdmin filled req.admin. */
    async me(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.json({ success: true, data: req.admin });
        } catch (error) {
            next(error);
        }
    }
}

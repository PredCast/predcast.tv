import { Request, Response, NextFunction } from 'express';
import { container, injectable } from 'tsyringe';
import { issueGateToken, verifyGateCode } from '../middlewares/admin-gate';
import { GetAdminOverviewUseCase } from '../../../application/admin/use-cases/GetAdminOverviewUseCase';
import { GetAdminContextUseCase } from '../../../application/admin/use-cases/GetAdminContextUseCase';

@injectable()
export class AdminController {
    /** Pre-wallet gate: code -> short-lived HMAC token (X-Admin-Gate header). */
    async gate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const code = typeof req.body?.code === 'string' ? req.body.code : '';
            const ok = await verifyGateCode(code);
            if (ok === null) {
                res.json({ success: true, data: { gateToken: issueGateToken(new Date()), disabled: true } });
                return;
            }
            if (!ok) {
                res.status(403).json({ success: false, error: { code: 'INVALID_GATE_CODE', message: 'Invalid access code' } });
                return;
            }
            res.json({ success: true, data: { gateToken: issueGateToken(new Date()) } });
        } catch (error) {
            next(error);
        }
    }

    /** Session probe for the admin app's guard, with the operator label and runtime environment. */
    async me(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { wallet, role } = req.admin!;
            const data = await container.resolve(GetAdminContextUseCase).execute(wallet, role);
            res.json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }

    /** Dashboard overview — counters stripped to the caller's role scope. */
    async overview(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = await container.resolve(GetAdminOverviewUseCase).execute(req.admin!.role);
            res.json({ success: true, data });
        } catch (error) {
            next(error);
        }
    }
}

import type { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { ValidationError } from '@chiliztv/domain/shared/errors/ValidationError';
import {
  AdminAccountGamificationDtoSchema,
  AdminAdjustXpBodySchema,
  AdminCancelDoubleXpBodySchema,
  AdminCreateDoubleXpBodySchema,
  AdminDoubleXpListQuerySchema,
  AdminGamificationReasonBodySchema,
  WalletAddressSchema,
} from '@chiliztv/shared';

import { AdminAdjustXpUseCase } from '../../../application/gamification/use-cases/admin/AdminAdjustXpUseCase';
import { CancelDoubleXpEventUseCase } from '../../../application/gamification/use-cases/admin/CancelDoubleXpEventUseCase';
import { CreateDoubleXpEventUseCase } from '../../../application/gamification/use-cases/admin/CreateDoubleXpEventUseCase';
import { GetAccountGamificationUseCase } from '../../../application/gamification/use-cases/admin/GetAccountGamificationUseCase';
import { ListDoubleXpEventsUseCase } from '../../../application/gamification/use-cases/admin/ListDoubleXpEventsUseCase';
import { SuspendGamificationUseCase } from '../../../application/gamification/use-cases/admin/SuspendGamificationUseCase';
import { auditCtx } from './audit-context';

type Handler = (req: Request, res: Response) => Promise<void>;

const handle = (fn: Handler) => (req: Request, res: Response, next: NextFunction): void => {
  fn(req, res).catch(next);
};

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const wallet = (req: Request): string => WalletAddressSchema.parse(req.params.wallet).toLowerCase();

/** Admin side of the gamification (§9.1, G18): double XP, suspension, manual adjustment, player block. */
@injectable()
export class AdminGamificationController {
  constructor(
    private readonly listDoubleXp: ListDoubleXpEventsUseCase,
    private readonly createDoubleXp: CreateDoubleXpEventUseCase,
    private readonly cancelDoubleXp: CancelDoubleXpEventUseCase,
    private readonly suspension: SuspendGamificationUseCase,
    private readonly adjust: AdminAdjustXpUseCase,
    private readonly account: GetAccountGamificationUseCase,
  ) {}

  listEvents = handle(async (req, res) => {
    const { limit } = AdminDoubleXpListQuerySchema.parse(req.query);
    res.json({ success: true, data: await this.listDoubleXp.execute(limit) });
  });

  createEvent = handle(async (req, res) => {
    const body = AdminCreateDoubleXpBodySchema.parse(req.body);
    const event = await this.createDoubleXp.execute(
      { ...body, startsAt: new Date(body.startsAt), endsAt: new Date(body.endsAt) },
      auditCtx(req),
    );
    res.status(201).json({ success: true, data: event });
  });

  cancelEvent = handle(async (req, res) => {
    const id = String(req.params.id);
    if (!UUID.test(id)) throw new ValidationError('Invalid double XP event id');
    const { note } = AdminCancelDoubleXpBodySchema.parse(req.body);
    res.json({ success: true, data: await this.cancelDoubleXp.execute(id, note, auditCtx(req)) });
  });

  getAccount = handle(async (req, res) => {
    res.json({ success: true, data: AdminAccountGamificationDtoSchema.parse(await this.account.execute(wallet(req))) });
  });

  suspend = handle(async (req, res) => {
    const { reason } = AdminGamificationReasonBodySchema.parse(req.body);
    res.json({ success: true, data: await this.suspension.suspend(wallet(req), reason, auditCtx(req)) });
  });

  unsuspend = handle(async (req, res) => {
    const { reason } = AdminGamificationReasonBodySchema.parse(req.body);
    res.json({ success: true, data: await this.suspension.unsuspend(wallet(req), reason, auditCtx(req)) });
  });

  adjustXp = handle(async (req, res) => {
    const body = AdminAdjustXpBodySchema.parse(req.body);
    const result = await this.adjust.execute(wallet(req), body, auditCtx(req));
    res.status(result.status === 'credited' ? 201 : 200).json({ success: true, data: result });
  });
}

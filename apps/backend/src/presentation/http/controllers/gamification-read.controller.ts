import type { NextFunction, Request, Response } from 'express';
import { injectable } from 'tsyringe';

import { AccountRequiredError } from '@chiliztv/domain/identity/errors/AccountRequiredError';
import {
  AckNotificationsBodySchema,
  AckNotificationsResponseSchema,
  CurrentDoubleXpResponseSchema,
  MyGamificationDtoSchema,
  ProfileBadgesBodySchema,
  ProfileBadgesResponseSchema,
  ProfileCardDtoSchema,
  PublicProfileDtoSchema,
  UpdateCosmeticsBodySchema,
  WalletAddressSchema,
} from '@chiliztv/shared';

import { AckNotificationsUseCase } from '../../../application/gamification/use-cases/AckNotificationsUseCase';
import { GetCurrentDoubleXpUseCase } from '../../../application/gamification/use-cases/GetCurrentDoubleXpUseCase';
import { GetMyGamificationUseCase } from '../../../application/gamification/use-cases/GetMyGamificationUseCase';
import { GetProfileBadgesUseCase } from '../../../application/gamification/use-cases/GetProfileBadgesUseCase';
import { GetProfileCardUseCase } from '../../../application/gamification/use-cases/GetProfileCardUseCase';
import { GetPublicProfileUseCase } from '../../../application/gamification/use-cases/GetPublicProfileUseCase';
import { UpdateCosmeticsUseCase } from '../../../application/gamification/use-cases/UpdateCosmeticsUseCase';

type Handler = (req: Request, res: Response) => Promise<void>;

/** Wraps a handler so a thrown error reaches the Express error middleware. */
const handle = (fn: Handler) => (req: Request, res: Response, next: NextFunction): void => {
  fn(req, res).catch(next);
};

function session(req: Request): { accountId: string; wallet: string } {
  const accountId = req.user?.accountId;
  const wallet = req.user?.walletAddress;
  if (!accountId || !wallet) throw new AccountRequiredError();
  return { accountId, wallet };
}

/** Read API of the gamification (§9.1): public cards / badges / profiles / double XP, owner `/me`. */
@injectable()
export class GamificationReadController {
  constructor(
    private readonly badges: GetProfileBadgesUseCase,
    private readonly cards: GetProfileCardUseCase,
    private readonly profiles: GetPublicProfileUseCase,
    private readonly doubleXp: GetCurrentDoubleXpUseCase,
    private readonly me: GetMyGamificationUseCase,
    private readonly cosmetics: UpdateCosmeticsUseCase,
    private readonly ack: AckNotificationsUseCase,
  ) {}

  /** GET /gamification/cards/:wallet — 404 without account, profile or launch. */
  getCard = handle(async (req, res) => {
    const wallet = WalletAddressSchema.parse(req.params.wallet);
    res.json(ProfileCardDtoSchema.parse(await this.cards.execute(wallet)));
  });

  /** POST /gamification/cards/badges — ≤ 100 wallets, 60 req/min/IP. */
  postBadges = handle(async (req, res) => {
    const { wallets } = ProfileBadgesBodySchema.parse(req.body);
    const result = await this.badges.execute({ wallets, ip: req.ip ?? 'unknown' });
    res.json(ProfileBadgesResponseSchema.parse(result));
  });

  /** GET /gamification/profiles/:wallet. */
  getProfile = handle(async (req, res) => {
    const wallet = WalletAddressSchema.parse(req.params.wallet);
    res.json(PublicProfileDtoSchema.parse(await this.profiles.execute(wallet)));
  });

  /** GET /gamification/double-xp/current — `null` when nothing is running or announced. */
  getCurrentDoubleXp = handle(async (_req, res) => {
    res.json(CurrentDoubleXpResponseSchema.parse(await this.doubleXp.execute()));
  });

  /** GET /gamification/me. */
  getMe = handle(async (req, res) => {
    const { accountId, wallet } = session(req);
    res.json(MyGamificationDtoSchema.parse(await this.me.execute(accountId, wallet)));
  });

  /** PUT /gamification/me/cosmetics — 422 COSMETIC_NOT_OWNED / SHOWCASE_TOO_LONG / SHOWCASE_DUPLICATE. */
  putCosmetics = handle(async (req, res) => {
    const { accountId, wallet } = session(req);
    const body = UpdateCosmeticsBodySchema.parse(req.body);
    res.json(MyGamificationDtoSchema.parse(await this.cosmetics.execute(accountId, wallet, body)));
  });

  /** POST /gamification/me/notifications/ack. */
  postAck = handle(async (req, res) => {
    const { accountId } = session(req);
    const { ids } = AckNotificationsBodySchema.parse(req.body);
    res.json(AckNotificationsResponseSchema.parse(await this.ack.execute(accountId, ids)));
  });
}

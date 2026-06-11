import { Request, Response, NextFunction } from 'express';

import type { IBanRepository } from '@chiliztv/domain/reporting/repositories/IBanRepository';
import type { ICacheService } from '@chiliztv/domain/shared/ports/ICacheService';
import type { IClock } from '@chiliztv/domain/shared/ports/IClock';
import { TOKENS } from '@chiliztv/domain/shared/tokens';

import { container } from '../../../infrastructure/config/di-container';
import {
  banActiveKey,
  BAN_ACTIVE_CACHE_TTL_SECONDS,
} from '../../../shared/constants/moderation.constants';

interface CachedBan {
  expiresAt: string | null;
}

/**
 * Hot-path ban gate (chat send, report create, stream join/create) — backed
 * by the `ban:active:{wallet}` Redis key (TTL 30s, DEL on issue/lift), same
 * pattern as `auth:revoked:{wallet}`. NEVER applied to betting routes: a ban
 * is 100% off-chain and the contracts stay reachable.
 *
 * Must be stacked after `authenticate`.
 */
export async function requireNotBanned(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const wallet = req.user?.walletAddress?.toLowerCase();
    if (!wallet) {
      // No identity — authenticate (or its absence) is the actual gate.
      next();
      return;
    }

    const cache = container.resolve<ICacheService>(TOKENS.ICacheService);
    const clock = container.resolve<IClock>(TOKENS.IClock);
    const now = clock.now();

    const ban = await cache.getOrLoad<CachedBan>({
      key: banActiveKey(wallet),
      ttlSeconds: BAN_ACTIVE_CACHE_TTL_SECONDS,
      loader: async () => {
        const bans = container.resolve<IBanRepository>(TOKENS.IBanRepository);
        const active = await bans.findActiveBan(wallet, now);
        return active ? { expiresAt: active.props.expiresAt?.toISOString() ?? null } : null;
      },
    });

    // Cached rows may outlive the actual expiry by up to the TTL — re-derive.
    const stillActive =
      ban !== null && (ban.expiresAt === null || new Date(ban.expiresAt).getTime() > now.getTime());

    if (stillActive) {
      res.status(403).json({
        success: false,
        error: {
          code: 'ACCOUNT_BANNED',
          message: 'This account is currently banned',
          expiresAt: ban.expiresAt,
        },
      });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
}

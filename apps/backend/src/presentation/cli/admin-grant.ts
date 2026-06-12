import 'reflect-metadata';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../../.env.local') });
config({ path: resolve(__dirname, '../../../.env') });

import { setupDependencyInjection, container } from '../../di/container';
setupDependencyInjection();
import { TOKENS } from '@chiliztv/domain/shared/tokens';
import type { IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import type { IAdminAccessService } from '@chiliztv/domain/admin/ports/IAdminAccessService';
import { isAdminRole } from '@chiliztv/domain/admin/types';
import { logger } from '../../infrastructure/logging/logger';

/** Usage: pnpm admin:grant <wallet> <role> [note] — bootstrap and ops grants. */
async function main(): Promise<void> {
    const [wallet, role, note] = process.argv.slice(2);
    if (!wallet || !role || !/^0x[0-9a-fA-F]{40}$/.test(wallet) || !isAdminRole(role)) {
        logger.error('Usage: pnpm admin:grant <0xwallet> <super_admin|admin|moderator|finance> [note]');
        process.exit(1);
    }
    const repo = container.resolve<IAdminWalletRepository>(TOKENS.IAdminWalletRepository);
    await repo.grant({ walletAddress: wallet, role, grantedByWallet: 'bootstrap', note });
    await container.resolve<IAdminAccessService>(TOKENS.IAdminAccessService).invalidate(wallet);
    logger.info('Admin role granted', { wallet: wallet.toLowerCase(), role });
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        logger.error('admin:grant failed', { error: err instanceof Error ? err.message : String(err) });
        process.exit(1);
    });

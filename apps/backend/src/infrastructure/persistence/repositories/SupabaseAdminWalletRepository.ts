import { injectable } from 'tsyringe';
import { supabaseClient as supabase } from '../../database/supabase/client';
import type { AdminGrant, IAdminWalletRepository } from '@chiliztv/domain/admin/repositories/IAdminWalletRepository';
import { isAdminRole, type AdminRole } from '@chiliztv/domain/admin/types';
import { logger } from '../../logging/logger';

@injectable()
export class SupabaseAdminWalletRepository implements IAdminWalletRepository {
    async findActiveRole(walletAddress: string): Promise<AdminRole | null> {
        const { data, error } = await supabase
            .from('admin_wallets')
            .select('role')
            .eq('wallet_address', walletAddress.toLowerCase())
            .is('revoked_at', null)
            .maybeSingle();
        if (error) {
            logger.error('findActiveRole failed', { walletAddress, error: error.message });
            throw new Error('Failed to read admin grant');
        }
        const role = (data as { role?: string } | null)?.role;
        return role && isAdminRole(role) ? role : null;
    }

    async findLabels(walletAddresses: ReadonlyArray<string>): Promise<ReadonlyMap<string, string>> {
        const wallets = [...new Set(walletAddresses.map((w) => w.toLowerCase()))];
        if (wallets.length === 0) return new Map();
        const { data, error } = await supabase
            .from('admin_wallets')
            .select('wallet_address, note, granted_at')
            .in('wallet_address', wallets)
            .order('granted_at', { ascending: false });
        if (error) {
            logger.error('findLabels failed', { count: wallets.length, error: error.message });
            throw new Error('Failed to read admin labels');
        }
        const seen = new Set<string>();
        const labels = new Map<string, string>();
        for (const row of (data ?? []) as Array<{ wallet_address: string; note: string | null }>) {
            // Rows are newest first: the latest grant per wallet decides its label.
            if (seen.has(row.wallet_address)) continue;
            seen.add(row.wallet_address);
            const note = row.note?.trim();
            if (note) labels.set(row.wallet_address, note);
        }
        return labels;
    }

    async grant(input: AdminGrant): Promise<void> {
        const { error } = await supabase.from('admin_wallets').insert({
            wallet_address: input.walletAddress.toLowerCase(),
            role: input.role,
            granted_by_wallet: input.grantedByWallet.toLowerCase(),
            note: input.note ?? null,
        });
        if (error) {
            logger.error('grant failed', { walletAddress: input.walletAddress, error: error.message });
            throw new Error(error.code === '23505' ? 'Wallet already has an active grant' : 'Failed to grant admin role');
        }
    }

    async revoke(walletAddress: string, revokedByWallet: string, note?: string): Promise<boolean> {
        const { data, error } = await supabase
            .from('admin_wallets')
            .update({
                revoked_at: new Date().toISOString(),
                revoked_by_wallet: revokedByWallet.toLowerCase(),
                revoke_note: note ?? null,
            })
            .eq('wallet_address', walletAddress.toLowerCase())
            .is('revoked_at', null)
            .select('id');
        if (error) {
            logger.error('revoke failed', { walletAddress, error: error.message });
            throw new Error('Failed to revoke admin role');
        }
        return (data ?? []).length > 0;
    }
}

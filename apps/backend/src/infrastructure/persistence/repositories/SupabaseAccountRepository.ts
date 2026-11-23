import { injectable } from 'tsyringe';

import type { Account, WalletLink } from '@chiliztv/domain/identity/entities/Account';
import type { IAccountRepository } from '@chiliztv/domain/identity/repositories/IAccountRepository';

import { supabaseClient as supabase } from '../../database/supabase/client';

const UNIQUE_VIOLATION = '23505';

interface AccountRow {
  id: string;
  dynamic_user_id: string;
  primary_wallet: string | null;
  created_at: string;
  last_seen_at: string;
}

interface WalletLinkRow {
  wallet_address: string;
  account_id: string;
  linked_at: string;
  unlinked_at: string | null;
}

const toAccount = (r: AccountRow): Account => ({
  id: r.id,
  dynamicUserId: r.dynamic_user_id,
  primaryWallet: r.primary_wallet,
  createdAt: new Date(r.created_at),
  lastSeenAt: new Date(r.last_seen_at),
});

const toLink = (r: WalletLinkRow): WalletLink => ({
  walletAddress: r.wallet_address,
  accountId: r.account_id,
  linkedAt: new Date(r.linked_at),
  unlinkedAt: r.unlinked_at ? new Date(r.unlinked_at) : null,
});

function fail(action: string, message: string): never {
  throw new Error(`SupabaseAccountRepository: ${action} failed: ${message}`);
}

@injectable()
export class SupabaseAccountRepository implements IAccountRepository {
  async upsertByDynamicUserId(dynamicUserId: string, primaryWallet: string, now: Date): Promise<Account> {
    const { data, error } = await supabase
      .from('accounts')
      .upsert(
        { dynamic_user_id: dynamicUserId, primary_wallet: primaryWallet.toLowerCase(), last_seen_at: now.toISOString() },
        { onConflict: 'dynamic_user_id' },
      )
      .select()
      .single();
    if (error || !data) fail('upsert account', error?.message ?? 'no row');
    return toAccount(data as AccountRow);
  }

  async findLinks(wallets: ReadonlyArray<string>): Promise<ReadonlyArray<WalletLink>> {
    if (wallets.length === 0) return [];
    const { data, error } = await supabase
      .from('account_wallets')
      .select('*')
      .in('wallet_address', wallets.map((w) => w.toLowerCase()));
    if (error) fail('find links', error.message);
    return ((data ?? []) as WalletLinkRow[]).map(toLink);
  }

  async findActiveLinksOfAccount(accountId: string): Promise<ReadonlyArray<WalletLink>> {
    const { data, error } = await supabase
      .from('account_wallets')
      .select('*')
      .eq('account_id', accountId)
      .is('unlinked_at', null);
    if (error) fail('find account links', error.message);
    return ((data ?? []) as WalletLinkRow[]).map(toLink);
  }

  async link(wallet: string, accountId: string, now: Date): Promise<boolean> {
    const { error } = await supabase
      .from('account_wallets')
      .insert({ wallet_address: wallet.toLowerCase(), account_id: accountId, linked_at: now.toISOString() });
    if (error?.code === UNIQUE_VIOLATION) return false;
    if (error) fail('link wallet', error.message);
    return true;
  }

  async relink(wallet: string, accountId: string, now: Date): Promise<boolean> {
    const { data, error } = await supabase
      .from('account_wallets')
      .update({ account_id: accountId, linked_at: now.toISOString(), unlinked_at: null })
      .eq('wallet_address', wallet.toLowerCase())
      .not('unlinked_at', 'is', null)
      .select('wallet_address');
    if (error) fail('relink wallet', error.message);
    return (data ?? []).length > 0;
  }

  async unlink(wallet: string, accountId: string, now: Date): Promise<void> {
    const { error } = await supabase
      .from('account_wallets')
      .update({ unlinked_at: now.toISOString() })
      .eq('wallet_address', wallet.toLowerCase())
      .eq('account_id', accountId)
      .is('unlinked_at', null);
    if (error) fail('unlink wallet', error.message);
  }
}

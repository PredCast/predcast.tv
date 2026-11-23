import { injectable } from 'tsyringe';

import { WATCH_LEAGUE_MINUTES, WATCH_PROGRESS_DAILY_CAP_MINUTES } from '@chiliztv/domain/gamification/catalog/constants';
import type { StreamViewer } from '@chiliztv/domain/gamification/policies/streamMinutePolicy';
import type {
  IWatchMinuteRepository,
  WatchMinuteResult,
  WatchMinuteWrite,
} from '@chiliztv/domain/gamification/repositories/IWatchMinuteRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseWatchMinuteRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

interface RecordRow {
  inserted: boolean;
  minutes_today: number;
  league_minutes_today: number | null;
  total_watch_minutes: number | string | null;
  progress_moved: boolean;
  league_added: boolean;
}

@injectable()
export class SupabaseWatchMinuteRepository implements IWatchMinuteRepository {
  async record(write: WatchMinuteWrite): Promise<WatchMinuteResult> {
    const { data, error } = await supabase.rpc('gamification_record_watch_minute', {
      p_account_id: write.accountId,
      p_minute: write.minute.toISOString(),
      p_day: write.day,
      p_match_id: write.matchId,
      p_stream_id: write.streamId,
      p_league_id: write.leagueId,
      p_progress_cap: WATCH_PROGRESS_DAILY_CAP_MINUTES,
      p_league_minutes: WATCH_LEAGUE_MINUTES,
    });
    if (error) fail('record', error.message);
    const row = Array.isArray(data) ? (data[0] as RecordRow | undefined) : undefined;
    if (!row) return fail('record', 'no row returned');
    if (!row.inserted) return { inserted: false, minutesToday: row.minutes_today };
    return {
      inserted: true,
      minutesToday: row.minutes_today,
      leagueMinutesToday: row.league_minutes_today,
      totalWatchMinutes: Number(row.total_watch_minutes ?? 0),
      progressMoved: row.progress_moved,
      leagueAdded: row.league_added,
    };
  }

  async listViewersAt(streamId: string, minute: Date): Promise<ReadonlyArray<StreamViewer>> {
    const { data, error } = await supabase
      .from('gamification_watch_minutes')
      .select('account_id')
      .eq('stream_id', streamId)
      .eq('minute', minute.toISOString());
    if (error) fail('list viewers', error.message);
    const accountIds = ((data ?? []) as Array<{ account_id: string }>).map((r) => r.account_id);
    if (accountIds.length === 0) return [];

    const [accounts, wallets] = await Promise.all([
      supabase.from('accounts').select('id, created_at').in('id', accountIds),
      supabase.from('account_wallets').select('account_id, wallet_address').in('account_id', accountIds).is('unlinked_at', null),
    ]);
    if (accounts.error) fail('list viewer accounts', accounts.error.message);
    if (wallets.error) fail('list viewer wallets', wallets.error.message);
    const walletRows = (wallets.data ?? []) as Array<{ account_id: string; wallet_address: string }>;
    const bannedWallets = await this.walletsBannedAt(walletRows.map((w) => w.wallet_address), minute);
    const bannedAccounts = new Set(walletRows.filter((w) => bannedWallets.has(w.wallet_address)).map((w) => w.account_id));

    return ((accounts.data ?? []) as Array<{ id: string; created_at: string }>).map((a) => ({
      accountId: a.id,
      accountCreatedAt: new Date(a.created_at),
      banned: bannedAccounts.has(a.id),
    }));
  }

  async purgeBefore(cutoff: Date): Promise<number> {
    const { count, error } = await supabase
      .from('gamification_watch_minutes')
      .delete({ count: 'exact' })
      .lt('minute', cutoff.toISOString());
    if (error) fail('purge', error.message);
    return count ?? 0;
  }

  /** Bans are time-derived (`Ban.isActiveAt`): active status, started, not expired at `at`. */
  private async walletsBannedAt(wallets: ReadonlyArray<string>, at: Date): Promise<Set<string>> {
    if (wallets.length === 0) return new Set();
    const iso = at.toISOString();
    const { data, error } = await supabase
      .from('bans')
      .select('wallet_address')
      .in('wallet_address', [...wallets])
      .eq('status', 'active')
      .lte('starts_at', iso)
      .or(`expires_at.is.null,expires_at.gt.${iso}`);
    if (error) fail('list bans', error.message);
    return new Set(((data ?? []) as Array<{ wallet_address: string }>).map((r) => r.wallet_address.toLowerCase()));
  }
}

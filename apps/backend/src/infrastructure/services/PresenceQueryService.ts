import { injectable } from 'tsyringe';

import type { IPresenceService } from '@chiliztv/domain/reporting/ports/IPresenceService';

import { supabaseClient as supabase } from '../database/supabase/client';
import { logger } from '../logging/logger';

/** Liveness window — a user is "still here" if active in the last 5 minutes. */
const ACTIVITY_WINDOW_MS = 5 * 60_000;

/**
 * Eligible presence over the existing `chat_connected_users` table (no
 * migration needed: wallet_address since 004, connected_at/last_activity
 * since 000). Anonymous rows (no wallet) are ineligible by construction.
 */
@injectable()
export class PresenceQueryService implements IPresenceService {
  async getEligibleWallets(matchId: number, minPresenceSec: number, now: Date): Promise<string[]> {
    const connectedBefore = new Date(now.getTime() - minPresenceSec * 1000).toISOString();
    const activeAfter = new Date(now.getTime() - ACTIVITY_WINDOW_MS).toISOString();

    const { data, error } = await supabase
      .from('chat_connected_users')
      .select('wallet_address')
      .eq('match_id', matchId)
      .not('wallet_address', 'is', null)
      .lte('connected_at', connectedBefore)
      .gt('last_activity', activeAfter);

    if (error) {
      logger.error('Failed to load eligible presence', { error: error.message, matchId });
      throw new Error('Failed to load eligible presence');
    }

    const wallets = new Set<string>();
    for (const row of data as Array<{ wallet_address: string | null }>) {
      if (row.wallet_address) wallets.add(row.wallet_address.toLowerCase());
    }
    return Array.from(wallets);
  }
}

import { injectable } from 'tsyringe';

import type {
  ChainPosition,
  ContractMatch,
  IGamificationEventSource,
  IndexedBet,
  RemovedChatMessage,
  SettlementEvent,
  SupportEvent,
} from '@chiliztv/domain/gamification/repositories/IGamificationEventSource';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseGamificationEventSource';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

// numeric(78,0) is read as text: a JSON number would lose precision on 18-decimal amounts.
const BET_COLUMNS =
  'id, tx_hash, log_index, block_number, block_timestamp, contract_address, market_id, user_address, outcome, stake_amount::text';

interface BetRow {
  id: number | string;
  tx_hash: string;
  log_index: number;
  block_number: number | string;
  block_timestamp: string;
  contract_address: string;
  market_id: number | string;
  user_address: string;
  outcome: number | string;
  stake_amount: string;
}

interface SettlementRow {
  tx_hash: string;
  log_index: number;
  block_number: number | string;
  block_timestamp: string;
  contract_address: string;
  market_id: number | string | null;
  event_name: string;
  payload: { result?: string | number; resolvedNetPool?: string | number } | null;
}

interface SupportRow {
  id: string;
  streamer_address: string;
  amount: number | string;
  created_at: string | null;
  donor_address?: string;
  subscriber_address?: string;
}

const toBet = (r: BetRow): IndexedBet => ({
  id: Number(r.id),
  txHash: r.tx_hash.toLowerCase(),
  logIndex: r.log_index,
  blockNumber: Number(r.block_number),
  blockTimestamp: new Date(r.block_timestamp),
  contract: r.contract_address.toLowerCase(),
  marketId: Number(r.market_id),
  wallet: r.user_address.toLowerCase(),
  outcome: Number(r.outcome),
  stakeRaw: BigInt(r.stake_amount),
});

function toSettlement(r: SettlementRow): SettlementEvent | null {
  if (r.market_id === null) return null;
  const base = {
    txHash: r.tx_hash.toLowerCase(),
    logIndex: r.log_index,
    block: Number(r.block_number),
    blockTimestamp: new Date(r.block_timestamp),
    contract: r.contract_address.toLowerCase(),
    marketId: Number(r.market_id),
  };
  if (r.event_name === 'MarketCancelled') return { ...base, kind: 'cancelled' };
  const result = r.payload?.result;
  const netPool = r.payload?.resolvedNetPool;
  if (result === undefined || netPool === undefined) return null;
  return { ...base, kind: 'resolved', result: Number(result), resolvedNetPoolRaw: BigInt(netPool) };
}

function toSupport(kind: SupportEvent['kind'], r: SupportRow): SupportEvent | null {
  const supporter = kind === 'donation' ? r.donor_address : r.subscriber_address;
  if (!supporter || !r.created_at) return null;
  return {
    kind,
    id: r.id,
    supporterWallet: supporter.toLowerCase(),
    streamerWallet: r.streamer_address.toLowerCase(),
    amountUsdc: Number(r.amount),
    createdAt: new Date(r.created_at),
  };
}

@injectable()
export class SupabaseGamificationEventSource implements IGamificationEventSource {
  async listBetsAfter(afterId: number, limit: number): Promise<ReadonlyArray<IndexedBet>> {
    const { data, error } = await supabase
      .from('bets')
      .select(BET_COLUMNS)
      .gt('id', afterId)
      .order('id', { ascending: true })
      .limit(limit);
    if (error) fail('list bets', error.message);
    return ((data ?? []) as BetRow[]).map(toBet);
  }

  async listMarketBets(contract: string, marketId: number): Promise<ReadonlyArray<IndexedBet>> {
    const { data, error } = await supabase
      .from('bets')
      .select(BET_COLUMNS)
      .eq('contract_address', contract.toLowerCase())
      .eq('market_id', marketId)
      .order('id', { ascending: true });
    if (error) fail('list market bets', error.message);
    return ((data ?? []) as BetRow[]).map(toBet);
  }

  async findContractMatches(contracts: ReadonlyArray<string>): Promise<ReadonlyArray<ContractMatch>> {
    if (contracts.length === 0) return [];
    // ilike without wildcard = case-insensitive equality: stored addresses may be checksummed.
    const filter = [...new Set(contracts.map((c) => c.toLowerCase()))]
      .map((c) => `betting_contract_address.ilike.${c}`)
      .join(',');
    const { data, error } = await supabase
      .from('matches')
      .select('api_football_id, betting_contract_address, betting_chain_id, league')
      .or(filter);
    if (error) fail('find contract matches', error.message);
    type Row = { api_football_id: number; betting_contract_address: string; betting_chain_id: number | null; league: { id?: number | string } | null };
    return ((data ?? []) as Row[]).map((r) => ({
      contract: r.betting_contract_address.toLowerCase(),
      matchId: r.api_football_id,
      leagueId: r.league?.id !== undefined && r.league.id !== null ? Number(r.league.id) : null,
      bettingChainId: r.betting_chain_id,
    }));
  }

  async findMarketKind(contract: string, marketId: number): Promise<{ readonly marketType: string; readonly line: number } | null> {
    const { data, error } = await supabase
      .from('market_events')
      .select('payload')
      .eq('contract_address', contract.toLowerCase())
      .eq('market_id', marketId)
      .eq('event_name', 'MarketCreated')
      .limit(1);
    if (error) fail('find market kind', error.message);
    const payload = ((data ?? []) as Array<{ payload: { marketType?: string; line?: number | string } | null }>)[0]?.payload;
    if (!payload?.marketType) return null;
    return { marketType: payload.marketType, line: Number(payload.line ?? 0) };
  }

  async isMarketCancelled(contract: string, marketId: number): Promise<boolean> {
    const { count, error } = await supabase
      .from('market_events')
      .select('tx_hash', { count: 'exact', head: true })
      .eq('contract_address', contract.toLowerCase())
      .eq('market_id', marketId)
      .eq('event_name', 'MarketCancelled');
    if (error) fail('is market cancelled', error.message);
    return (count ?? 0) > 0;
  }

  async listSettlementsAfter(after: ChainPosition, limit: number): Promise<ReadonlyArray<SettlementEvent>> {
    const { data, error } = await supabase
      .from('market_events')
      .select('tx_hash, log_index, block_number, block_timestamp, contract_address, market_id, event_name, payload')
      .in('event_name', ['MarketResolved', 'MarketCancelled'])
      .or(`block_number.gt.${after.block},and(block_number.eq.${after.block},log_index.gt.${after.logIndex})`)
      .order('block_number', { ascending: true })
      .order('log_index', { ascending: true })
      .limit(limit);
    if (error) fail('list settlements', error.message);
    return ((data ?? []) as SettlementRow[]).flatMap((r) => toSettlement(r) ?? []);
  }

  async listSupportAfter(after: Date, limit: number): Promise<ReadonlyArray<SupportEvent>> {
    const iso = after.toISOString();
    const [donations, subscriptions] = await Promise.all([
      supabase
        .from('donations')
        .select('id, donor_address, streamer_address, amount, created_at')
        .gt('created_at', iso)
        .order('created_at', { ascending: true })
        .limit(limit),
      supabase
        .from('subscriptions')
        .select('id, subscriber_address, streamer_address, amount, created_at')
        .gt('created_at', iso)
        .order('created_at', { ascending: true })
        .limit(limit),
    ]);
    if (donations.error) fail('list donations', donations.error.message);
    if (subscriptions.error) fail('list subscriptions', subscriptions.error.message);
    const merged = [
      ...((donations.data ?? []) as SupportRow[]).flatMap((r) => toSupport('donation', r) ?? []),
      ...((subscriptions.data ?? []) as SupportRow[]).flatMap((r) => toSupport('subscription', r) ?? []),
    ].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    return merged.slice(0, limit);
  }

  async listChatRemovalsAfter(after: Date, limit: number): Promise<ReadonlyArray<RemovedChatMessage>> {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('id, removed_at')
      .gt('removed_at', after.toISOString())
      .order('removed_at', { ascending: true })
      .limit(limit);
    if (error) fail('list chat removals', error.message);
    return ((data ?? []) as Array<{ id: string; removed_at: string }>).map((r) => ({
      messageId: r.id,
      removedAt: new Date(r.removed_at),
    }));
  }
}

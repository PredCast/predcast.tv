import { injectable } from 'tsyringe';

import { STREAM_PROGRESS_DAILY_CAP_MINUTES } from '@chiliztv/domain/gamification/catalog/constants';
import type { StreamSession } from '@chiliztv/domain/gamification/entities/StreamSession';
import type {
  IStreamSessionRepository,
  StreamMinuteResult,
  StreamMinuteWrite,
  StreamModerationResult,
  StreamSessionOpen,
} from '@chiliztv/domain/gamification/repositories/IStreamSessionRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseStreamSessionRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);
const TABLE = 'gamification_stream_sessions';
const COLUMNS =
  'stream_id, account_id, streamer_wallet, match_id, went_live_at, ended_at, counted_minutes, last_processed_minute, moderated_at, minutes_settled_at';

interface SessionRow {
  stream_id: string;
  account_id: string | null;
  streamer_wallet: string;
  match_id: number;
  went_live_at: string;
  ended_at: string | null;
  counted_minutes: number;
  last_processed_minute: string | null;
  moderated_at: string | null;
  minutes_settled_at: string | null;
}

interface RecordRow {
  inserted: boolean;
  counted_minutes: number;
  progress_moved: boolean;
  total_stream_minutes: number | string | null;
}

const dateOrNull = (v: string | null): Date | null => (v ? new Date(v) : null);

const toSession = (r: SessionRow): StreamSession => ({
  streamId: r.stream_id,
  accountId: r.account_id,
  streamerWallet: r.streamer_wallet,
  matchId: r.match_id,
  wentLiveAt: new Date(r.went_live_at),
  endedAt: dateOrNull(r.ended_at),
  countedMinutes: r.counted_minutes,
  lastProcessedMinute: dateOrNull(r.last_processed_minute),
  moderatedAt: dateOrNull(r.moderated_at),
  minutesSettledAt: dateOrNull(r.minutes_settled_at),
});

@injectable()
export class SupabaseStreamSessionRepository implements IStreamSessionRepository {
  async findById(streamId: string): Promise<StreamSession | null> {
    const { data, error } = await supabase.from(TABLE).select(COLUMNS).eq('stream_id', streamId).maybeSingle();
    if (error) fail('find by id', error.message);
    return data ? toSession(data as SessionRow) : null;
  }

  async findToProcess(): Promise<ReadonlyArray<StreamSession>> {
    const { data, error } = await supabase
      .from(TABLE)
      .select(COLUMNS)
      .is('minutes_settled_at', null)
      .order('went_live_at', { ascending: true });
    if (error) fail('find to process', error.message);
    return ((data ?? []) as SessionRow[]).map(toSession);
  }

  async open(session: StreamSessionOpen): Promise<boolean> {
    const { data, error } = await supabase
      .from(TABLE)
      .upsert(
        {
          stream_id: session.streamId,
          account_id: session.accountId,
          streamer_wallet: session.streamerWallet.toLowerCase(),
          match_id: session.matchId,
          went_live_at: session.wentLiveAt.toISOString(),
        },
        { onConflict: 'stream_id', ignoreDuplicates: true },
      )
      .select('stream_id');
    if (error) fail('open', error.message);
    return (data ?? []).length > 0;
  }

  async close(streamId: string, endedAt: Date): Promise<void> {
    const { error } = await supabase
      .from(TABLE)
      .update({ ended_at: endedAt.toISOString() })
      .eq('stream_id', streamId)
      .is('ended_at', null);
    if (error) fail('close', error.message);
  }

  async recordMinute(write: StreamMinuteWrite): Promise<StreamMinuteResult> {
    const { data, error } = await supabase.rpc('gamification_record_stream_minute', {
      p_stream_id: write.streamId,
      p_minute: write.minute.toISOString(),
      p_day: write.day,
      p_viewer_accounts: write.viewerAccounts,
      p_exempt: write.exempt,
      p_progress_cap: STREAM_PROGRESS_DAILY_CAP_MINUTES,
    });
    if (error) fail('record minute', error.message);
    const row = Array.isArray(data) ? (data[0] as RecordRow | undefined) : undefined;
    if (!row) return fail('record minute', 'no row returned');
    if (!row.inserted) return { inserted: false, countedMinutes: row.counted_minutes };
    return {
      inserted: true,
      countedMinutes: row.counted_minutes,
      progressMoved: row.progress_moved,
      totalStreamMinutes: Number(row.total_stream_minutes ?? 0),
    };
  }

  async markProcessed(streamId: string, minute: Date | null, settledAt: Date | null): Promise<void> {
    const patch: Record<string, string> = {};
    if (minute !== null) patch.last_processed_minute = minute.toISOString();
    if (settledAt !== null) patch.minutes_settled_at = settledAt.toISOString();
    if (Object.keys(patch).length === 0) return;
    const { error } = await supabase.from(TABLE).update(patch).eq('stream_id', streamId);
    if (error) fail('mark processed', error.message);
  }

  async lifetimeCountedMinutes(accountId: string): Promise<number> {
    const { data, error } = await supabase
      .from(TABLE)
      .select('counted_minutes')
      .eq('account_id', accountId);
    if (error) fail('lifetime minutes', error.message);
    return ((data ?? []) as Array<{ counted_minutes: number }>).reduce((sum, r) => sum + r.counted_minutes, 0);
  }

  async markModerated(streamId: string, at: Date): Promise<StreamModerationResult> {
    const { data, error } = await supabase.rpc('gamification_moderate_stream_session', {
      p_stream_id: streamId,
      p_at: at.toISOString(),
    });
    if (error) fail('moderate', error.message);
    const row = Array.isArray(data) ? (data[0] as { moderated: boolean; minutes_removed: number } | undefined) : undefined;
    return row?.moderated ? { moderated: true, minutesRemoved: row.minutes_removed } : { moderated: false };
  }
}

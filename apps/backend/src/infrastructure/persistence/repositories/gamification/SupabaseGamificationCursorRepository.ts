import { injectable } from 'tsyringe';

import type {
  GamificationCursorName,
  GamificationCursorPositions,
} from '@chiliztv/domain/gamification/entities/CursorPositions';
import type { IGamificationCursorRepository } from '@chiliztv/domain/gamification/repositories/IGamificationCursorRepository';

import { supabaseClient as supabase } from '../../../database/supabase/client';
import { fail as failWith } from './gamificationRows';

const REPO = 'SupabaseGamificationCursorRepository';
const fail = (action: string, message: string): never => failWith(REPO, action, message);

@injectable()
export class SupabaseGamificationCursorRepository implements IGamificationCursorRepository {
  async get<K extends GamificationCursorName>(name: K): Promise<GamificationCursorPositions[K] | null> {
    const { data, error } = await supabase.from('gamification_cursors').select('position').eq('name', name).maybeSingle();
    if (error) fail('get', error.message);
    // The position is written only by `set` with the same cursor name.
    return data ? ((data as { position: unknown }).position as GamificationCursorPositions[K]) : null;
  }

  async set<K extends GamificationCursorName>(name: K, position: GamificationCursorPositions[K], at: Date): Promise<void> {
    const { error } = await supabase
      .from('gamification_cursors')
      .upsert({ name, position, updated_at: at.toISOString() }, { onConflict: 'name' });
    if (error) fail('set', error.message);
  }
}

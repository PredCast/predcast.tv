import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { logger } from '../../logging/logger';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const serverSupabaseKey = supabaseServiceRoleKey || supabaseAnonKey;

// Matches RLS (migration 041) hides unpublished matches from anon: without the service role the
// backend would lose them too (admin list, dashboard metadata, sync).
if (!supabaseServiceRoleKey) {
  logger.warn('Supabase client falls back to the anon key', { missing: 'SUPABASE_SERVICE_ROLE_KEY', impact: 'RLS-hidden rows are invisible to the backend' });
}

export const supabaseClient: SupabaseClient = createClient(
  supabaseUrl,
  serverSupabaseKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  }
);

export type { SupabaseClient };

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// supabase-js v2: createClient() does NOT auto-bind the anon JWT to the
// Realtime worker, so postgres_changes events get silently dropped after
// SUBSCRIBED. This explicit setAuth() restores the auth context the
// Realtime RLS check expects.
supabase.realtime.setAuth(supabaseAnonKey);

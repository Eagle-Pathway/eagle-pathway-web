import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bkkhheaeqhhfeyfwjjxx.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_VbwNpq5HT2kCv4enDaifNQ_sn8F1Rsm';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

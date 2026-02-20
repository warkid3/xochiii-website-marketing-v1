import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Fallback for development if env vars are missing to prevent crash
const isConfigured = supabaseUrl && supabaseAnonKey;

if (!isConfigured) {
    console.warn("Supabase credentials missing. Wishlist form will log to console instead.");
}

export const supabase = isConfigured
    ? createClient<Database>(supabaseUrl, supabaseAnonKey)
    : null;

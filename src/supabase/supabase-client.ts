import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKeys = import.meta.env.VITE_SUPABASE_KEYS;

export const supabase = createClient(supabaseUrl, supabaseKeys)
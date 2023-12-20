import "react-native-url-polyfill/auto";
import Config from "react-native-config";
import { createClient } from "@supabase/supabase-js";
import { zustandStorage } from "../store";

const supabaseUrl = Config.SUPABASE_URL || "";
const supabaseAnonKey = Config.SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: zustandStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

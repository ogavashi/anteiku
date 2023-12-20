import { StateCreator } from "zustand";
import { AuthSlice } from "../../../common/types";
import { Session } from "@supabase/supabase-js";

export const useAuthSlice: StateCreator<AuthSlice> = (set) => ({
  session: null,
  initialized: false,
  setSession: (session: Session | null) => set(() => ({ session })),
  setInitialized: (initialized: boolean) => set(() => ({ initialized })),
});

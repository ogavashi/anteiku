import { StateCreator } from "zustand";
import { AuthSlice, User } from "../../../common/types";
import { Session } from "@supabase/supabase-js";

export const useAuthSlice: StateCreator<AuthSlice> = (set) => ({
  session: null,
  initialized: false,
  user: null,
  setSession: (session: Session | null) => set(() => ({ session })),
  setInitialized: (initialized: boolean) => set(() => ({ initialized })),
  setUser: (user: User | null) => set(() => ({ user })),
});

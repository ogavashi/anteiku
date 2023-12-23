import { StateCreator } from "zustand";
import { AuthSlice } from "../../../common/types";
import { Session, User } from "@supabase/supabase-js";

export const useAuthSlice: StateCreator<AuthSlice> = (set) => ({
  session: null,
  initialized: false,
  user: null,
  setSession: (session: Session | null) => set(() => ({ session })),
  setInitialized: (initialized: boolean) => set(() => ({ initialized })),
  setUser: (user: User | null) => set(() => ({ user })),
});

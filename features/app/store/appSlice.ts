import { StateCreator } from "zustand";
import { AppSlice, Theme } from "../../../common/types";

export const useAppSlice: StateCreator<AppSlice> = (set) => ({
  theme: "automatic",
  setTheme: (theme: Theme) => set(() => ({ theme })),
});

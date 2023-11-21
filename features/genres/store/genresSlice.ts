import { StateCreator } from "zustand";
import { Genre, GenresSlice } from "../../../common/types";

export const useGenreslice: StateCreator<GenresSlice> = (set) => ({
  genres: [],
  setGenres: (genres: Genre[]) => set(() => ({ genres })),
});

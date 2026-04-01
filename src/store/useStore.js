import { create } from "zustand";
import { data } from "../data/mockData";

export const useStore = create((set) => ({
  transactions: data,
  role: "viewer",
  search: "",
  filter: "all",
  darkMode: false,

  setRole: (role) => set({ role }),
  setSearch: (search) => set({ search }),
  setFilter: (filter) => set({ filter }),
  toggleDark: () => set((s) => ({ darkMode: !s.darkMode })),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [...state.transactions, tx],
    })),
}));
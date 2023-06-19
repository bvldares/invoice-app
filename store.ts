import { create } from "zustand";

type Store = {
  isDark: boolean;
  toggleDark: () => void;
  filter: string;
  setFilter: (filter: string) => void;
  dropDownOpen: boolean;
  toggleDropDown: () => void;
};

const useInvoiceStore = create<Store>((set) => ({
  filter: "all",
  setFilter: (filter) => set((state) => ({ filter: filter })),
  isDark: false,
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
  dropDownOpen: false,
  toggleDropDown: () => set((state) => ({ dropDownOpen: !state.dropDownOpen })),
}));

export default useInvoiceStore;

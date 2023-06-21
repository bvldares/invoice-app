import { create } from "zustand";
import { nanoid } from "nanoid";
type Store = {
  isDark: boolean;
  toggleDark: () => void;
  filter: string;
  setFilter: (filter: string) => void;
  dropDownOpen: boolean;
  toggleDropDown: () => void;
  showNewForm: boolean;
  toggleNewForm: () => void;
};

const useInvoiceStore = create<Store>((set) => ({
  filter: "all",
  dropDownOpen: false,
  isDark: false,
  showNewForm: false,
  toggleNewForm: () => set((state) => ({ showNewForm: !state.showNewForm })),
  setFilter: (filter) => set((state) => ({ filter: filter })),
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
  toggleDropDown: () => set((state) => ({ dropDownOpen: !state.dropDownOpen })),
}));

export default useInvoiceStore;

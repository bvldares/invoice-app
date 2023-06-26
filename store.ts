import { create } from "zustand";
type Store = {
  isDark: boolean;
  toggleDark: () => void;
  filter: string;
  setFilter: (filter: string) => void;
  dropDownOpen: boolean;
  toggleDropDown: () => void;
  showNewForm: boolean;
  toggleNewForm: () => void;
  deliveryStatus: boolean;
  setDeliveryStatus: (status: boolean) => void;
  availableInvoices: number;
  setAvailableInvoices: (length: number) => void;
};

const useInvoiceStore = create<Store>((set) => ({
  filter: "all",
  availableInvoices: 0,
  setAvailableInvoices: (length) =>
    set((state) => ({ availableInvoices: length })),
  dropDownOpen: false,
  isDark: false,
  showNewForm: false,
  deliveryStatus: false,
  setDeliveryStatus: (status) => set((state) => ({ deliveryStatus: status })),
  toggleNewForm: () => set((state) => ({ showNewForm: !state.showNewForm })),
  setFilter: (filter) => set((state) => ({ filter: filter })),
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
  toggleDropDown: () => set((state) => ({ dropDownOpen: !state.dropDownOpen })),
}));

export default useInvoiceStore;

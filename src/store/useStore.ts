import { create } from "zustand";

interface Expert {
  id: string;
  name: string;
  rating: number;
  specialties: string[];
  accepts_insurance: boolean;
  gender: number;
  certified_at: string;
}

interface Filters {
  sort: string;
  gender: number | null;
  acceptsInsurance: boolean | null;
  search: string;
}

interface State {
  experts: Expert[];
  filters: Filters;
  setExperts: (experts: Expert[]) => void;
  setFilters: (filters: Partial<Filters>) => void;
}

export const useStore = create<State>((set) => ({
  experts: [],
  filters: {
    sort: "",
    gender: null,
    acceptsInsurance: null,
    search: "",
  },
  setExperts: (experts) => set({ experts }),
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
}));

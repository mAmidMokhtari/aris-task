import { SortEnum } from "enums";
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
  acceptsInsurance: boolean;
  search: string;
}

interface State {
  experts: Expert[];
  filters: Filters;
  setExperts: (experts: Expert[]) => void;
  setFilters: (filters: Partial<Filters>) => void;
  toggleAcceptInsurance: (filters: Partial<Filters>) => void;
  setSortFilter: (sort: SortEnum) => void;
}

export const useStore = create<State>((set) => ({
  experts: [],
  filters: {
    sort: SortEnum.certified_at,
    gender: null,
    acceptsInsurance: false,
    search: "",
  },
  setExperts: (experts) => set({ experts }),
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  setSortFilter: (sort) =>
    set((state) => ({
      filters: {
        ...state.filters,
        sort: sort,
      },
    })),
  toggleAcceptInsurance: (filters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        acceptsInsurance: !filters.acceptsInsurance,
      },
    })),
}));

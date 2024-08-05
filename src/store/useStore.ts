import { IExpert } from 'models';
import { create } from 'zustand';

export interface IFilters {
  sort: string;
  gender: number;
  acceptsInsurance: boolean;
  search: string;
}

interface State {
  experts: IExpert[];
  filters: IFilters;
  setExperts: (experts: IExpert[]) => void;
  setFilters: (filters: Partial<IFilters>) => void;
}

export const useStore = create<State>((set) => ({
  experts: [],
  filters: {
    sort: "",
    gender: 0,
    acceptsInsurance: true,
    search: "",
  },
  setExperts: (experts) => set({ experts }),
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
}));

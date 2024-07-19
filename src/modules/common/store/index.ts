import { create } from 'zustand';
import { StatisticUser, User } from '../types';

interface AppStore {
  user: User | null;
  setUser: (payload: User | null) => void;
  statistics: StatisticUser | null;
  setStatistics: (payload: StatisticUser | null) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  setUser: (payload) => set({ user: payload }),
  statistics: null,
  setStatistics: (payload) => set({ statistics: payload }),
}));

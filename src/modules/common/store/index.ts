import { create } from 'zustand';
import { User } from '../types';
import { userLeaderBoardInterface } from '../../../libs/user/interfaces';

interface AppStore {
  isLoading: boolean;
  setIsLoading: (payload: boolean) => void;
  user: User | null;
  setUser: (payload: User | null) => void;
  statistics: userLeaderBoardInterface | null;
  setStatistics: (payload: userLeaderBoardInterface | null) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  setUser: (payload) => set({ user: payload }),
  statistics: null,
  setStatistics: (payload) => set({ statistics: payload }),
  isLoading: true,
  setIsLoading: (payload) => set({ isLoading: payload }),
}));

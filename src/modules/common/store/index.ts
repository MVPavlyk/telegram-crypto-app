import { create } from 'zustand';
import { IUser } from '../types';
import { userLeaderBoardInterface } from '../../../libs/user/interfaces';

interface AppStore {
  isLoading: boolean;
  setIsLoading: (payload: boolean) => void;
  user: IUser | null;
  setUser: (payload: IUser | null) => void;
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

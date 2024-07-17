import { UserInterface } from '../libs/user/interfaces/user.interface.ts';

export type TAvatar = {
  eyes: string;
  hood: string;
};

export type THistoryItem = {
  id: string;
  win: boolean;
  mode: 2 | 10;
  opponent?: UserInterface;
};

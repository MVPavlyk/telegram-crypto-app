import { TAvatar } from '../../../types/common.ts';

export interface UserInterface {
  id: string;
  avatar: TAvatar;
  rank: number;
  telegramUsername: string;
  telegramId: number;
}

export interface UserPatchInterface {
  username: string;
  avatar: TAvatar;
}

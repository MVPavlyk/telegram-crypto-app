import { AvatarType, User } from '../../common/types';

export interface CreateUserPayload {
  telegramUsername: string;
  telegramId: string;
}

export interface UpdateUserPayload extends Partial<CreateUserPayload> {
  id: string;
  avatar?: Partial<AvatarType>;
}

export type History = {
  id: string;
  win: boolean;
  mode: 2 | 10;
  opponent?: User & { rank: number };
};

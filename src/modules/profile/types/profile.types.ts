import { AvatarType, User } from '../../common/types';

export interface CreateUserPayload {
  username: string;
  id: number;
}

export interface UpdateUserPayload extends Partial<CreateUserPayload> {
  avatar?: Partial<AvatarType>;
}

export type History = {
  id: string;
  win: boolean;
  mode: 2 | 10;
  opponent?: User & { rank: number };
};

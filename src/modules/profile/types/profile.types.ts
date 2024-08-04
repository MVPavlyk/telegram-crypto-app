import { AvatarType, IUser } from '../../common/types';

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
  opponent?: IUser & { rank: number };
};

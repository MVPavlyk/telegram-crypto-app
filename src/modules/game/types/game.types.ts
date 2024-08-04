import { IUser } from '../../common/types';

export type TGameButton = {
  el: string;
  action: 1 | -1;
};

export type TUserScore = {
  user: IUser;
  score: number;
};

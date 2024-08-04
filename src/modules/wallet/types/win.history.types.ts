import { GameMode } from '../../leaderboard/constants';
import { IUser } from '../../common/types';

export type WinHistoryItem = {
  type: GameMode;
  winSum: number;
  opponent?: IUser;
};

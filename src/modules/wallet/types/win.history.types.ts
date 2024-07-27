import { GameMode } from '../../leaderboard/constants';
import { User } from '../../common/types';

export type WinHistoryItem = {
  type: GameMode;
  winSum: number;
  opponent?: User;
};

import { TAvatar } from '../../../types/common.ts';

export interface userLeaderBoardInterface {
  userId: string;
  telegramUsername: string;
  sumWon: number;
  gamesWon: number;
  gamesPlayed: number;
  biggestWin: number;
  rank: number;
  avatar: TAvatar;
}

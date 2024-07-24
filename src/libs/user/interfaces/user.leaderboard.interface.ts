import { AvatarType } from '../../../modules/common/types';

export interface userLeaderBoardInterface {
  userId: string;
  telegramUsername: string;
  sumWon: number;
  gamesWon: number;
  gamesPlayed: number;
  biggestWin: number;
  rank: number;
  avatar: AvatarType;
}

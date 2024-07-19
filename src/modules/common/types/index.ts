export interface User {
  id: string;
  avatar: AvatarType;
  telegramUsername: string;
  telegramId: number;
}

export interface StatisticUser {
  sumWon: string;
  rank: number;
  gamesPlayed: number;
  biggestWin: string;
}

export interface AvatarType {
  hood: string;
  eyes: string;
}

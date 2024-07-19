export const enum GameMode {
  OneVsNine = '1vs9',
  OneVsOne = '1vs1',
}

export const enum GameSize {
  Two = 2,
  Ten = 10,
}

export const gameModeSizeMapping: Record<GameMode, GameSize> = {
  [GameMode.OneVsOne]: GameSize.Two,
  [GameMode.OneVsNine]: GameSize.Ten,
};

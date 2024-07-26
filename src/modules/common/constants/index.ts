const BASE_ROUTE = '/telegram-crypto-app';

export default BASE_ROUTE;

export const enum Routes {
  HOME = BASE_ROUTE + '/',
  LEADERBOARD = BASE_ROUTE + '/leaderboard',
  GAME_SEARCH = BASE_ROUTE + '/game-search',
  WALLET = BASE_ROUTE + '/wallet',
  PROFILE = BASE_ROUTE + '/profile',
}

import { axiosInstance } from './axios.services.ts';
import { userLeaderBoardInterface } from '../libs/user/interfaces';

export const leaderboardServices = {
  getList: (params: string): Promise<userLeaderBoardInterface[]> =>
    axiosInstance.get('/leaderboard?' + params).then((value) => value.data),
  getUserInfo: (userid: number): Promise<userLeaderBoardInterface> =>
    axiosInstance.get('/leaderboard/' + userid).then((value) => value.data[0]),
};

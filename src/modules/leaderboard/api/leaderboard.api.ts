import { useMutation, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../common/api/axios.api';
import { LeaderboardQuery } from '../../common/types';
import { AxiosError } from 'axios';
import { userLeaderBoardInterface } from '../../../libs/user/interfaces';

export namespace LeaderboardApi {
  const ENDPOINT = 'leaderboard';

  const getMany = (queryObject: LeaderboardQuery) =>
    axiosInstance.get(ENDPOINT, { params: queryObject }).then((value) => value.data);

  export const useGetMany = ({ queryObject }: { queryObject: LeaderboardQuery }) =>
    useQuery({ queryKey: ['leaderboard'], queryFn: () => getMany(queryObject) });

  const getOne = (id: number) => axiosInstance.get(`${ENDPOINT}/${id}`).then((value) => value.data);

  export const useGetOne = () =>
    useMutation<userLeaderBoardInterface[], AxiosError, number>({
      mutationKey: ['leaderboard'],
      mutationFn: (id: number) => getOne(id),
    });
}

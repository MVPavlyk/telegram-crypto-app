import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../common/api/axios.api';
import { LeaderboardQuery } from '../../common/types';

export namespace LeaderboardApi {
  const ENDPOINT = 'leaderboard';

  const getMany = (queryObject: LeaderboardQuery) =>
    axiosInstance.get(ENDPOINT, { params: queryObject }).then((value) => value.data);

  export const useGetMany = ({ queryObject }: { queryObject: LeaderboardQuery }) =>
    useQuery({ queryKey: ['leaderboard'], queryFn: () => getMany(queryObject) });

  const getOne = (id: string) => axiosInstance.get(`${ENDPOINT}/${id}`);

  export const useGetOne = ({ id }: { id: string }) =>
    useQuery({ queryKey: ['leaderboard', id], queryFn: () => getOne(id) });
}

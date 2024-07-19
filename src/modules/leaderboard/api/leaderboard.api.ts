import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../common/api/axios.api';

export namespace LeaderboardApi {
  const ENDPOINT = 'leaderboard';

  const getMany = (queryObject: Record<any, any>) => axiosInstance.get(ENDPOINT, { params: queryObject });

  export const useGetMany = ({ queryObject = {} }: { queryObject: Record<any, any> }) =>
    useQuery({ queryKey: ['leaderboard'], queryFn: () => getMany(queryObject) });

  const getOne = (id: string) => axiosInstance.get(`${ENDPOINT}/${id}`);

  export const useGetOne = ({ id }: { id: string }) =>
    useQuery({ queryKey: ['leaderboard', id], queryFn: () => getOne(id) });
}

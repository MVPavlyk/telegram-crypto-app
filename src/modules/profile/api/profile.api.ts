import { useMutation, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../common/api/axios.api';
import { CreateUserPayload, UpdateUserPayload } from '../types/profile.types';
import { AxiosError, AxiosResponse } from 'axios';
import { IUser } from '../../common/types';

export namespace ProfileApi {
  const ENDPOINT = 'user';

  const getOne = (id: string) => axiosInstance.get(`${ENDPOINT}/${id}`);
  const createOne = (data: CreateUserPayload) => axiosInstance.post(ENDPOINT, data);
  const updateOne = ({ id, ...data }: UpdateUserPayload) =>
    axiosInstance.patch(`${ENDPOINT}/${id}`, data).then((value) => value.data);

  export const useGetOne = ({ id }: { id: string }) => useQuery({ queryKey: ['users', id], queryFn: () => getOne(id) });

  export const useCreateOne = () =>
    useMutation<AxiosResponse, AxiosError, CreateUserPayload>({ mutationFn: (data) => createOne(data) });

  export const useUpdateOne = () =>
    useMutation<IUser, AxiosError, UpdateUserPayload>({ mutationFn: (data) => updateOne(data) });
}

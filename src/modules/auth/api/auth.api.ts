import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../../common/api/axios.api';
import { SignInPayload } from '../types';
import { AxiosError, AxiosResponse } from 'axios';
import { IUser } from '../../common/types';
import { CreateUserPayload } from '../../profile/types/profile.types.ts';

export namespace AuthApi {
  const signIn = (telegramId: number) => axiosInstance.get(`user/${telegramId}`);

  const signUp = (data: CreateUserPayload) => axiosInstance.post('user/register', data).then((value) => value.data);

  export const useSignIn = () =>
    useMutation<AxiosResponse<IUser>, AxiosError, SignInPayload>({
      mutationKey: ['signIn'],
      mutationFn: ({ telegramId }) => signIn(telegramId),
    });
  export const useSignUp = () =>
    useMutation<IUser, AxiosError, CreateUserPayload>({
      mutationKey: ['signIn'],
      mutationFn: (data) => signUp(data),
    });
}

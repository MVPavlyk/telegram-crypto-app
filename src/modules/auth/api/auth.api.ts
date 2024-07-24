import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../../common/api/axios.api';
import { SignInPayload } from '../types';
import { AxiosError, AxiosResponse } from 'axios';
import { User } from '../../common/types';

export namespace AuthApi {
  const signIn = (telegramId: number) => axiosInstance.get(`user/${telegramId}`);

  export const useSignIn = () =>
    useMutation<AxiosResponse<User>, AxiosError, SignInPayload>({
      mutationKey: ['signIn'],
      mutationFn: ({ telegramId }) => signIn(telegramId),
    });
}

import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../../common/api/axios.api';
import { SignInPayload } from '../types';
import { AxiosError, AxiosResponse } from 'axios';

export namespace AuthApi {
  const ENDPOINT = 'auth';

  const signIn = (data: SignInPayload) => axiosInstance.post(ENDPOINT, data);

  export const useSignIn = () =>
    useMutation<AxiosResponse, AxiosError, SignInPayload>({
      mutationKey: ['signIn'],
      mutationFn: (data) => signIn(data),
    });
}

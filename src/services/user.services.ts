import { axiosInstance } from './axios.services.ts';
import { UserInterface, UserPatchInterface } from '../libs/user/interfaces/user.interface.ts';

export const userServices = {
  createUser: (id: number, username: string): Promise<UserInterface> =>
    axiosInstance
      .post('/user/register', {
        id,
        username,
      })
      .then((value) => value.data),
  getUser: (userId: number): Promise<UserInterface> => axiosInstance.get('/user/' + userId).then((value) => value.data),
  updateUser: (userId: number, newUser: UserPatchInterface): Promise<UserInterface> =>
    axiosInstance.patch('/user/' + userId, newUser).then((value) => value.data),
};

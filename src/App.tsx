import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NinjaScreen } from './modules/common/components/ninja-screen/ninja-screen';
import { AuthApi } from './modules/auth/api/auth.api';
import WebApp from '@twa-dev/sdk';
import { Routes } from './modules/common/constants';

export const App = () => {
  const { mutateAsync } = AuthApi.useSignIn();

  const navigate = useNavigate();

  const handleSignIn = async () => {
    const user = WebApp.initDataUnsafe.user;

    if (!user?.id) {
      // TODO: verify if we can have such case
      throw new Error('smth went wrong');
    }

    const res = await mutateAsync({ telegramId: user?.id });

    // TODO: verify where i can set access token
    localStorage.setItem('token', res.data.token);

    navigate(Routes.HOME);
  };

  useEffect(() => {
    handleSignIn();
  }, []);

  return <NinjaScreen isLoading />;
};

export default App;

import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthApi } from './modules/auth/api/auth.api';
import WebApp from '@twa-dev/sdk';
import { LeaderboardApi } from './modules/leaderboard/api/leaderboard.api.ts';
import { useAppStore } from './modules/common/store';

WebApp.ready();
WebApp.expand();

export const App = () => {
  useEffect(() => {
    WebApp.expand();
    WebApp.setHeaderColor('#21232F');
    WebApp.setBackgroundColor('#21232F');

    console.log(WebApp);
  }, []);

  const { setUser, setStatistics, setIsLoading } = useAppStore();

  const telegramUser = WebApp.initDataUnsafe.user;

  const telegramId = telegramUser?.id ? telegramUser?.id : import.meta.env.MODE === 'development' ? 1331313131 : 0;

  const { mutateAsync: signInMutation } = AuthApi.useSignIn();
  const { mutateAsync: signUpMutation } = AuthApi.useSignUp();
  const { mutateAsync: getLeaderboardMutation } = LeaderboardApi.useGetOne();

  const handleSignIn = async () => {
    try {
      const res = await signInMutation({ telegramId });

      setUser(res.data);

      const leaderboardData = await getLeaderboardMutation(telegramId);

      if (leaderboardData[0]) {
        setStatistics(leaderboardData[0]);
      }
    } catch (e) {
      const newUser = await signUpMutation({ id: telegramId, username: telegramUser?.username as string });

      setUser(newUser);

      const leaderboardData = await getLeaderboardMutation(newUser.telegramId);

      if (leaderboardData[0]) {
        setStatistics(leaderboardData[0]);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    handleSignIn();
  }, [telegramId]);

  console.log(telegramUser, WebApp);

  return <Outlet />;
};

export default App;

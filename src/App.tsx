import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthApi } from './modules/auth/api/auth.api';
import WebApp from '@twa-dev/sdk';
import { LeaderboardApi } from './modules/leaderboard/api/leaderboard.api.ts';
import { useAppStore } from './modules/common/store';

export const App = () => {
  const { setUser, setStatistics, setIsLoading } = useAppStore();

  const telegramUser = WebApp.initDataUnsafe.user;

  const telegramId = telegramUser?.id || import.meta.env.MODE === 'development' ? 754126026 : null;

  const { mutateAsync: signInMutation } = AuthApi.useSignIn();
  const { mutateAsync: getLeaderboardMutation } = LeaderboardApi.useGetOne();

  const handleSignIn = async () => {
    if (!telegramId) return;

    const res = await signInMutation({ telegramId });

    if (res.status === 200) {
      setUser(res.data);
    }

    const leaderboardData = await getLeaderboardMutation(telegramId);

    if (leaderboardData[0]) {
      setStatistics(leaderboardData[0]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (telegramId) {
      handleSignIn();
    }
  }, [telegramId]);

  return <Outlet />;
};

export default App;

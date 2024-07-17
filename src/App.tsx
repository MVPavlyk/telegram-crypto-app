import { Outlet } from 'react-router-dom';

import React, { createContext, useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { userServices } from './services/user.services.ts';
import { UserInterface } from './libs/user/interfaces/user.interface.ts';
import { userLeaderBoardInterface } from './libs/user/interfaces';
import { leaderboardServices } from './services/leaderboard.services.ts';

type TPageContext = {
  isLoadAnimationEnd: boolean;
  setIsLoadAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
  leaderboardUserData: userLeaderBoardInterface | null;
};

export const PageLoadContext = createContext<TPageContext | null>(null);

function App() {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [leaderboardUserData, setLeaderboardUserData] = useState<userLeaderBoardInterface | null>(null);

  const tgUser = WebApp?.initDataUnsafe?.user;
  const isDev = import.meta.env.MODE === 'development';

  useEffect(() => {
    if (tgUser?.id || isDev) {
      const id = tgUser?.id || 13313131319;

      userServices
        .getUser(id)
        .then(async (value) => {
          setUser(value);

          const leaderboardData = await leaderboardServices.getUserInfo(id);

          setLeaderboardUserData(leaderboardData);
        })
        .catch(async () => {
          const newUser = await userServices.createUser(id, tgUser?.username || 'no-username');

          if (newUser) {
            setUser(newUser);

            const leaderboardData = await leaderboardServices.getUserInfo(id);

            setLeaderboardUserData(leaderboardData);
          }
        });
    }
  }, [tgUser?.id, isDev]);

  const [isLoadAnimationEnd, setIsLoadAnimationEnd] = useState(false);

  return (
    <PageLoadContext.Provider value={{ isLoadAnimationEnd, setIsLoadAnimationEnd, user, leaderboardUserData, setUser }}>
      <section>
        <Outlet />
      </section>
    </PageLoadContext.Provider>
  );
}

export default App;

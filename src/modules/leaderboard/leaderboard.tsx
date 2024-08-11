import { useCallback, useEffect, useRef, useState } from 'react';
import { List } from './components/list.component.tsx';
import { Switch } from '../common/components/switch/switch.tsx';
import { LeaderboardApi } from './api/leaderboard.api.ts';
import { GameMode, gameModeSizeMapping } from './constants';
import { LeaderboardQuery } from '../common/types';
import { userLeaderBoardInterface } from '../../libs/user/interfaces';

const baseQueryObject: LeaderboardQuery = {
  limit: 50,
  offset: 0,
  mode: String(gameModeSizeMapping[GameMode.OneVsNine]),
};

export const Leaderboard = () => {
  const [queryObject, setQueryObject] = useState<LeaderboardQuery>(baseQueryObject);
  const [page, setPage] = useState(1);
  const [gameMode, setGameMode] = useState(GameMode.OneVsNine);
  const [items, setItems] = useState<userLeaderBoardInterface[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  const { data, isLoading, refetch } = LeaderboardApi.useGetMany({ queryObject });

  useEffect(() => {
    setPage(1);
    setItems([]);
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    refetch();
  }, [queryObject]);

  useEffect(() => {
    if (data?.length) {
      setItems((exist) => {
        if (exist[0]?.userId === data[0].userId) {
          return exist;
        }

        if (!exist.length) return data;

        return [...exist, ...data];
      });
    }
  }, [data]);

  useEffect(() => {
    setQueryObject((prev) => ({
      ...prev,
      offset: (page - 1) * prev.limit,
      mode: String(gameModeSizeMapping[gameMode]),
    }));
  }, [page, gameMode]);

  const changeGameMode = (newGameMode: GameMode) => {
    setPage(1);
    setItems([]);

    setGameMode(newGameMode);
  };

  const lastUserElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading]
  );

  return (
    <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px]'>
      <Switch
        isDark={false}
        selectedValue={gameMode}
        options={[
          { value: '1vs9', onClick: changeGameMode },
          { value: '1vs1', onClick: changeGameMode },
        ]}
      />
      {!isLoading && items && <List list={items} lastUserElementRef={lastUserElementRef} />}
    </div>
  );
};

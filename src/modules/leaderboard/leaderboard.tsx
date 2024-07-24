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

  const loadMorePosts = async () => {
    setQueryObject((prev) => ({
      ...prev,
      offset: (page - 1) * prev.limit,
      mode: String(gameModeSizeMapping[gameMode]),
    }));
    refetch();
  };

  console.log(queryObject);

  useEffect(() => {
    if (data?.length) {
      setItems((exist) =>
        exist[0]?.userId !== items[0]?.userId ? [...items, ...data] : data?.length ? [...items, ...data] : exist
      );
    }
  }, [data]);

  useEffect(() => {
    console.log(page);
    loadMorePosts();
  }, [page]);

  useEffect(() => {
    if (gameMode) {
      setPage(1);
      setItems([]);
    }
  }, [gameMode]);

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

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px]'>
      <Switch
        selectedValue={gameMode}
        options={[
          { value: '1vs9', onClick: setGameMode },
          { value: '1vs1', onClick: setGameMode },
        ]}
      />
      {!isLoading && items && <List list={items} lastUserElementRef={lastUserElementRef} />}
    </div>
  );
};

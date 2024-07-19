import { useCallback, useEffect, useRef, useState } from 'react';
import { List } from './components/list.component.tsx';
import { Switch } from '../common/components/switch/switch.tsx';
import { LeaderboardApi } from './api/leaderboard.api.ts';
import { GameMode } from './constants/index.ts';

const baseQueryObject = {
  limit: 50,
  offset: 0,
  mode: GameMode.OneVsNine,
};

export const Leaderboard = () => {
  const [queryObject, setQueryObject] = useState(baseQueryObject);
  const [page, setPage] = useState(1);
  const [gameMode, setGameMode] = useState(GameMode.OneVsNine);

  const observer = useRef<IntersectionObserver | null>(null);

  const { data, isLoading } = LeaderboardApi.useGetMany({ queryObject });

  const loadMorePosts = async () => {
    setQueryObject((prev) => ({ ...prev, offset: (page - 1) * prev.limit, mode: gameMode }));
  };

  useEffect(() => {
    loadMorePosts();
  }, [page]);

  useEffect(() => {
    if (gameMode) {
      setPage(1);
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

  return (
    <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px]'>
      <Switch
        selectedValue={gameMode}
        options={[
          { value: '1vs9', onClick: setGameMode },
          { value: '1vs1', onClick: setGameMode },
        ]}
      />
      {isLoading && data && <List list={data} lastUserElementRef={lastUserElementRef} />}
    </div>
  );
};

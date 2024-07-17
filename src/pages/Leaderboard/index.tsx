import PageLayout from '../../components/layouts/PageLayout';
import { useCallback, useEffect, useRef, useState } from 'react';
import { userLeaderBoardInterface } from '../../libs/user/interfaces';
import SwitchButtons from '../../components/units/SwitchButtons';
import LeaderboardList from '../../components/modules/LeaderboardList';
import { leaderboardServices } from '../../services/leaderboard.services.ts';

const LeaderboardPage = () => {
  const [list, setList] = useState<userLeaderBoardInterface[]>([]);
  const [gameType, setGameType] = useState('1vs9');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setPage(1);
    setList([]);
  }, [gameType]);

  const loadMorePosts = useCallback(async () => {
    console.log('More Pages');
    setLoading(true);
    const limit = 50;
    const offset = (page - 1) * limit;
    // change url to backend api

    const res = await leaderboardServices.getList(
      `limit=${limit}&offset=${offset}&mode=${gameType === '1vs9' ? '10' : '2'}`
    );
    setList((prevList) => [...prevList, ...res]);
    setLoading(false);
  }, [page, gameType]);

  useEffect(() => {
    loadMorePosts();
  }, [loadMorePosts]);

  const lastUserElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <PageLayout showNavigation={true}>
      <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px]'>
        <SwitchButtons
          selectedValue={gameType}
          options={[
            { value: '1vs9', setValue: setGameType },
            { value: '1vs1', setValue: setGameType },
          ]}
        />{' '}
        <LeaderboardList list={list} lastUserElementRef={lastUserElementRef} />
      </div>
    </PageLayout>
  );
};

export default LeaderboardPage;

import axios from "axios";
import PageLayout from "../../components/layouts/PageLayout";
import { useCallback, useEffect, useRef, useState } from "react";
import LeaderboardUserList from "./leaderboard-list.component";
import LeaderBoardHeader from "./leaderboard-header.component";
import { userLeaderBoardInterface } from "../../libs/user/interfaces";

const LeaderboardPage: React.FC = () => {
  const [list, setList] = useState<userLeaderBoardInterface[]>([]);
  const [listOptions, setListOptions] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const loadMorePosts = useCallback(async () => {
    console.log('More Pages')
    setLoading(true);
    const limit = 50;
    const offset = (page - 1) * limit;
    const res = await axios.get(
      `https://wk6kk7s8-300.euw.devtunnels.ms/leaderboard?limit=${limit}&offset=${offset}`
    );
    setList((prevList) => [...prevList, ...res.data]);
    setLoading(false);
  }, [page]);

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
      <div className="w-full h-screen max-h-screen relative">
        <LeaderBoardHeader
          listOptions={listOptions}
          setListOptions={setListOptions}
        />
        <LeaderboardUserList
          list={list}
          lastUserElementRef={lastUserElementRef}
        />
      </div>
    </PageLayout>
  );
};

export default LeaderboardPage;

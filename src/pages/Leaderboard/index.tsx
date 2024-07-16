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
    // change url to backend api
    const base = 'http://45.159.231.30/api';
    const res = await axios.get(
      `${base}?limit=${limit}&offset=${offset}`
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
      <div className="w-full h-[calc(100vh-90px)] px-5 pt-[30px]">
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

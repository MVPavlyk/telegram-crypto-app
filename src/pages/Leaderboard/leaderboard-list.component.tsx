import { userLeaderBoardInterface } from "../../libs/user/interfaces";
import LeaderboardUser from "./leaderboard-user.component";

interface LeaderboardListProps {
  list: userLeaderBoardInterface[];
  lastUserElementRef: (node: HTMLDivElement | null) => void;
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({
  list,
  lastUserElementRef,
}: LeaderboardListProps) => {

  return (
    <div className="w-full flex flex-col my-auto justify-center px-5 h-5/6">
      {Array.isArray(list) &&
        list.map((user: userLeaderBoardInterface, index: number) => {
          const userWithPosition = { ...user, position: index + 1 };

          return (
            <LeaderboardUser key={user.userId} {...userWithPosition} ref={list.length - 1 === index ? lastUserElementRef : null} />
          ) 
        })}
    </div>
  );
};

export default LeaderboardList;

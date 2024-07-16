import { ForwardedRef, forwardRef } from 'react';
import CrownIcon from '../../assets/icons/Crown';
import Icon from '../../assets/icons/ninja.svg';
import { userLeaderBoardInterface } from '../../libs/user/interfaces';

interface LeaderboardUserProps extends userLeaderBoardInterface {
  position: number;
}

const LeaderboardUser = forwardRef<HTMLDivElement, LeaderboardUserProps>(
  ({ telegramUsername, sumWon, position }: LeaderboardUserProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className='w-full h-full flex items-center gap-5 text-main-white' ref={ref}>
        <p className='text-2xl font-bold'>{position}</p>
        <img src={Icon} alt='user-icon' className='w-24 h-24 mb-4' />
        <p className='text-2xl font-bold'>{telegramUsername}</p>
        <div className='flex items-center ml-auto text-main-orange text-2xl font-bold gap-1'>
          <p>+{sumWon}</p>
          <p>$</p>
          <CrownIcon />
        </div>
      </div>
    );
  }
);

export default LeaderboardUser;

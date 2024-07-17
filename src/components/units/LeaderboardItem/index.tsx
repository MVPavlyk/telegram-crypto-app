import { ForwardedRef, forwardRef } from 'react';
import CrownIcon from '../../../assets/icons/Crown';
import { userLeaderBoardInterface } from '../../../libs/user/interfaces';
import Avatar from '../../../components/modules/Avatar';
import classNames from 'classnames';

interface LeaderboardUserProps extends userLeaderBoardInterface {
  position: number;
}

const LeaderboardItem = forwardRef<HTMLDivElement, LeaderboardUserProps>(
  ({ telegramUsername, sumWon, position, avatar }: LeaderboardUserProps, ref: ForwardedRef<HTMLDivElement>) => {
    const isTop3 = position < 4;
    return (
      <div
        className='w-full flex items-center justify-between gap-5 text-main-white py-2.5 border-b border-[#292C3D] last:border-none'
        ref={ref}
      >
        <div className='flex gap-x-3 items-center'>
          <p className='text-white'>{position}</p>
          <Avatar size={48} {...avatar} />
          <p className='text-white'>{telegramUsername}</p>
        </div>
        <div
          className={classNames(
            'flex items-center ml-auto text-2xl font-bold gap-1',
            isTop3 ? 'text-main-orange' : 'text-white'
          )}
        >
          <p>+{sumWon}</p>
          <p>$</p>
          {isTop3 && <CrownIcon />}
        </div>
      </div>
    );
  }
);

export default LeaderboardItem;

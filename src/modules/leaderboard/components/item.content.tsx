import React from 'react';
import { userLeaderBoardInterface } from '../../../libs/user/interfaces';
import { Avatar } from '../../common/components/avatar/avatar.tsx';
import classNames from 'classnames';
import CrownIcon from '../../../assets/icons/Crown.tsx';

const ItemContent: React.FC<userLeaderBoardInterface> = ({ telegramUsername, sumWon, rank, avatar }) => {
  const isTop3 = rank < 4;

  return (
    <>
      <div className='flex gap-x-3 items-center'>
        <p className='text-white text-[16px]'>{rank}</p>
        <Avatar size={48} {...avatar} />
        <p className='text-white text-[16px]'>{telegramUsername}</p>
      </div>
      <div
        className={classNames(
          'flex items-center ml-auto text-xl font-bold gap-1',
          isTop3 ? 'text-main-orange' : 'text-white'
        )}
      >
        <p>+{sumWon}</p>
        <p>$</p>
        {isTop3 && <CrownIcon />}
      </div>
    </>
  );
};

export default ItemContent;

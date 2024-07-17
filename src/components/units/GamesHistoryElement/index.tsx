import { TAvatar } from '../../../types/common.ts';
import React from 'react';
import Avatar from '../../modules/Avatar';
import WinIcon from '../../../assets/icons/WinIcon.tsx';
import LoseIcon from '../../../assets/icons/LoseIcon.tsx';

type GamesHistoryElementProps = {
  user: TAvatar;
  win: boolean;
  opponent?: {
    username: string;
    avatar: TAvatar;
  };
};

const GamesHistoryElement: React.FC<GamesHistoryElementProps> = ({ user, win, opponent }) => {
  return (
    <div className='w-full grid grid-cols-3 items-center'>
      <div className='flex items-center gap-x-3'>
        <Avatar {...user} />
        <div className='text-white'>You</div>
      </div>
      {win ? <WinIcon /> : <LoseIcon />}
      <div className='flex items-center gap-x-3'>
        <div className='text-white'>{opponent?.username || '1vs9'}</div>
        <Avatar
          {...(opponent?.avatar || {
            hood: '#393939',
            eyes: '#FA9825',
          })}
        />
      </div>
    </div>
  );
};

export default GamesHistoryElement;

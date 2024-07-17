import { TAvatar } from '../../../types/common.ts';
import React from 'react';
import Avatar from '../../modules/Avatar';
import WinIcon from '../../../assets/icons/WinIcon.tsx';
import LoseIcon from '../../../assets/icons/LoseIcon.tsx';
import { UserInterface } from '../../../libs/user/interfaces/user.interface.ts';

type GamesHistoryElementProps = {
  userAvatar: TAvatar;
  win: boolean;
  opponent?: UserInterface | undefined;
};

const GamesHistoryElement: React.FC<GamesHistoryElementProps> = ({ userAvatar, win, opponent }) => {
  return (
    <div className='w-full flex items-center justify-between gap-4 text-main-white py-2.5 border-b border-[#292C3D] history-item'>
      <div className='max-w-[calc(50%-31px)] min-w-[calc(50%-31px)] w-[calc(50%-31px)] flex h-fit items-center gap-x-3'>
        <Avatar size={48} {...userAvatar} />
        <div className='text-white'>You</div>
      </div>
      {win ? <WinIcon /> : <LoseIcon />}
      <div className='!max-w-[calc(50%-31px)]  min-w-[calc(50%-31px)] w-[calc(50%-31px)] flex h-fit items-center justify-end gap-x-3'>
        <div className='text-white max-w-[calc(100%-70px)] overflow-ellipsis overflow-hidden'>
          {opponent?.telegramUsername || '1vs9'}
        </div>
        <Avatar
          size={48}
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

import React from 'react';
import { WinHistoryItem } from '../types/win.history.types.ts';
import { useAppStore } from '../../common/store';
import { Avatar } from '../../common/components/avatar/avatar.tsx';
import WinIcon from '../../../assets/icons/WinIcon.tsx';
import cashoutIcon from '../../../assets/icons/cashout.svg';

const HistoryItemComponent: React.FC<WinHistoryItem> = ({ winSum, type }) => {
  const { user } = useAppStore((state) => ({ ...state, user: state.user!, statistics: state.statistics! }));

  if (!user) return null;

  return (
    <div className='w-full grid grid-cols-3 py-2.5 border-b border-[#292C3D] last:border-none items-center'>
      <div className='flex items-center gap-x-3'>
        <Avatar size={48} {...user.avatar} />
        <div className='text-white text-[16px]'>
          <p>You</p>
          <p>{type}</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <WinIcon />
      </div>
      <div className='flex items-center justify-end gap-x-3'>
        <div className='text-white text-[16px]'>+{winSum} USDT</div>
        <button className='border-none bg-transparent cursor-pointer'>
          <img className='w-6' src={cashoutIcon} alt='ico' />
        </button>
      </div>
    </div>
  );
};

export default HistoryItemComponent;

import { Avatar } from '../../common/components/avatar/avatar.tsx';
import WalletOpenIcon from '../../../assets/icons/WalletOpenIcon.tsx';
import { useAppStore } from '../../common/store';
import React from 'react';
import classNames from 'classnames';

type MiniUserInfoProps = {
  isForWallet?: boolean;
};

const MiniUserInfo: React.FC<MiniUserInfoProps> = ({ isForWallet = false }) => {
  const { user, statistics } = useAppStore((state) => ({ ...state, user: state.user!, statistics: state.statistics! }));

  if (!user || !statistics) return null;

  return (
    <div
      className={classNames(
        'flex items-center justify-between',
        !isForWallet && 'absolute top-[30px] w-full left-0 px-5 z-10'
      )}
    >
      <div className='flex items-center gap-x-3'>
        <Avatar size={48} {...user.avatar} />
        <div>
          <h4 className='text-lg text-white font-semibold'>{user.telegramUsername}</h4>
          <h6 className='text-sm font-normal text-white'>#{statistics.rank} at Leaderboard</h6>
        </div>
      </div>
      {isForWallet ? (
        <button className='default-btn gap-x-2.5 h-10 px-4 font-semibold'>
          Open <WalletOpenIcon />
        </button>
      ) : (
        <div className='text-main-orange font-bold'>{statistics.sumWon} $</div>
      )}
    </div>
  );
};

export default MiniUserInfo;

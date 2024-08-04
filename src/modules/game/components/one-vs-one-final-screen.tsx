import { TGameState } from '../types/game.types.ts';
import React from 'react';
import classNames from 'classnames';
import winSpin from '../../../assets/win-spin-bg.png';
import { useAppStore } from '../../common/store';
import crownBig from '../../../assets/crown-big.svg';
import { Avatar } from '../../common/components/avatar/avatar.tsx';
import { Link } from 'react-router-dom';
import { Routes } from '../../common/constants';

type OneVsOneFinalScreenProps = {
  gameState: TGameState;
  isWin: boolean;
};

const OneVsOneFinalScreen: React.FC<OneVsOneFinalScreenProps> = ({ gameState, isWin }) => {
  const { user } = useAppStore((state) => ({ ...state, user: state.user!, statistics: state.statistics! }));

  if (!user) return null;

  return (
    <div
      className={classNames(
        'w-full h-full absolute z-10 transition-all duration-200 top-0 default-bg-red overflow-hidden',
        gameState === 'finished' ? 'right-0' : 'right-[100vw]'
      )}
    >
      <div className='absolute top-0 left-0 h-screen w-screen z-[15] flex items-center flex-col justify-between py-9'>
        <div className='flex items-center flex-col justify-center gap-y-3'>
          <img src={crownBig} alt='crown' className='h-20' />
          <Avatar {...user.avatar} size={250} />
        </div>
        <div className='text-white flex flex-col items-center gap-y-2.5'>
          <div className='text-[36px] line font-medium leading-none'>You</div>
          <div className='text-[70px] font-bold leading-none'>{isWin ? 'Win' : 'Defeat'}</div>
          <div className='text-[40px] font-bold leading-none'>{isWin ? '+100$' : '-100$'}</div>
        </div>
        <Link
          to={Routes.HOME}
          className={classNames(
            'text-2xl font-semibold w-[calc(100%-40px)] h-[66px] default-btn',
            isWin ? 'yellow-btn' : 'default-btn-disabled'
          )}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default OneVsOneFinalScreen;

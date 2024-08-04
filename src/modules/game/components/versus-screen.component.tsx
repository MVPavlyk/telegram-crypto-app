import React from 'react';
import { TGameState } from '../types/game.types.ts';
import classNames from 'classnames';
import vsFrame from '../../../assets/vs-frame.png';

export type VersusScreenProps = {
  gameState: TGameState;
  countDown: number;
};

const VersusScreen: React.FC<VersusScreenProps> = ({ gameState, countDown }) => {
  return (
    <section
      className={classNames(
        'w-screen h-screen absolute z-10 transition-all duration-200 top-0 default-bg overflow-hidden',
        gameState === 'preparing' ? 'left-0' : '-left-[100vw]'
      )}
    >
      <div className='absolute w-[130%] -left-[12%] h-screen z-[12] flex items-center'>
        <img src={vsFrame} alt='vs' />
      </div>
      <div className='w-screen h-screen flex items-center justify-center z-[13] text-white absolute text-[60px] font-bold'>
        {countDown ? countDown : 'VS'}
      </div>
      <div className='w-screen h-1/2 absolute left-0 top-0 game-opponent-avatar' />
      <div className='w-screen h-1/2 absolute left-0 bottom-0 game-my-avatar' />
    </section>
  );
};

export default VersusScreen;

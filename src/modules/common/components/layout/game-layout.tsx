import bamboo from '../../../../assets/game-fields/stones/bamboo.svg';
import top from '../../../../assets/game-fields/stones/top.svg';
import bottom from '../../../../assets/game-fields/stones/bottom.svg';
import React from 'react';

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='h-screen w-screen relative'>
      <div className='stones-chess-bg absolute top-0 left-0 w-full h-full z-[1]'></div>
      <img className='absolute top-0 left-0 w-full h-full z-[2]' src={bamboo} alt='bamboo' />
      <img src={top} alt='top' className='absolute w-full top-0 z-[3]' />
      <img src={bottom} alt='bottom' className='absolute w-full bottom-0 z-[3]' />
      <div className='absolute top-0 left-0 w-full h-full z-[4] flex items-center justify-center'>
        <div className='h-[113vw] w-[81.3vw] grid grid-cols-3 grid-rows-4 gap-[5.2vw]'>{children}</div>
      </div>
    </section>
  );
};

export default GameLayout;

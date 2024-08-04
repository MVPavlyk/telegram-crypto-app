import bamboo from '../../../../assets/game-fields/stones/bamboo.svg';
import top from '../../../../assets/game-fields/stones/top.png';
import bottom from '../../../../assets/game-fields/stones/bottom.png';
import React from 'react';
import { TUserScore } from '../../../game/types/game.types.ts';
import UserScoreComponent from '../../../game/components/user-score.component.tsx';

export type GameLayoutProps = {
  myScore?: TUserScore;
  opponentScore?: TUserScore;
  children: React.ReactNode;
  round: number;
};

const GameLayout: React.FC<GameLayoutProps> = ({ children, myScore, opponentScore, round }) => {
  return (
    <section className='h-screen w-screen relative'>
      <div className='stones-chess-bg absolute top-0 left-0 w-full h-full z-[1]'></div>
      <img className='absolute top-0 left-0 w-full h-full z-[2]' src={bamboo} alt='bamboo' />
      <img src={top} alt='top' className='absolute w-full top-0 z-[3]' />
      <img src={bottom} alt='bottom' className='absolute w-full bottom-0 z-[3]' />
      <div className='absolute top-0 left-0 w-full h-full z-[4] flex items-center justify-center'>
        <div className='h-[113vw] w-[81.3vw] grid grid-cols-3 grid-rows-4 gap-[5.2vw]'>{children}</div>
      </div>
      {myScore && <UserScoreComponent className='bottom-6 right-7' {...myScore} />}
      {opponentScore && <UserScoreComponent className='top-6 left-7' {...opponentScore} />}
      <div className='absolute top-6 right-0 round-table z-[5]'>Round {round}</div>
    </section>
  );
};

export default GameLayout;

import bamboo_stones from '../../../../assets/game-fields/stones/bamboo.svg';
import top_stones from '../../../../assets/game-fields/stones/top.png';
import bottom_stones from '../../../../assets/game-fields/stones/bottom.png';

import bamboo_forest from '../../../../assets/game-fields/forest/bamboo.svg';
import top_forest from '../../../../assets/game-fields/forest/top.png';
import bottom_forest from '../../../../assets/game-fields/forest/bottom.png';

import bamboo_ice from '../../../../assets/game-fields/ice/bamboo.svg';
import top_ice from '../../../../assets/game-fields/ice/top.png';
import bottom_ice from '../../../../assets/game-fields/ice/bottom.png';

import React from 'react';
import { TGameLocation, TUserScore } from '../../../game/types/game.types.ts';
import UserScoreComponent from '../../../game/components/user-score.component.tsx';
import classNames from 'classnames';

export type GameLayoutProps = {
  myScore?: TUserScore;
  opponentScore?: TUserScore;
  children: React.ReactNode;
  round: number;
  gameLocation: TGameLocation;
};

const GameLayout: React.FC<GameLayoutProps> = ({ children, gameLocation, myScore, opponentScore, round }) => {
  let gameStyle: { top: string; bottom: string; bamboo: string } | undefined;

  switch (gameLocation) {
    case 'stone':
      gameStyle = {
        top: top_stones,
        bottom: bottom_stones,
        bamboo: bamboo_stones,
      };
      break;
    case 'forest':
      gameStyle = {
        top: top_forest,
        bottom: bottom_forest,
        bamboo: bamboo_forest,
      };
      break;
    default:
      gameStyle = {
        top: top_ice,
        bottom: bottom_ice,
        bamboo: bamboo_ice,
      };
  }

  if (!gameStyle) return;

  const { top, bottom, bamboo } = gameStyle;

  return (
    <section className='h-screen w-screen relative'>
      <div
        className={classNames('absolute top-0 left-0 w-full h-full z-[1]', {
          'stones-chess-bg': gameLocation === 'stone',
          'ice-chess-bg': gameLocation === 'ice',
          'forest-chess-bg': gameLocation === 'forest',
        })}
      ></div>
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

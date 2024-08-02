import { useEffect, useState } from 'react';
import GameLayout from '../../modules/common/components/layout/game-layout.tsx';
import { DotLottiePlayer } from '@dotlottie/react-player';
import stone from '../../assets/game-fields/stones/field.lottie';

import npc1 from '../../assets/npc/npc-1.svg';
import npc2 from '../../assets/npc/npc-2.svg';
import npc3 from '../../assets/npc/npc-3.svg';
import npc4 from '../../assets/npc/npc-4.svg';
import npc5 from '../../assets/npc/npc-5.svg';
import npc6 from '../../assets/npc/npc-6.svg';
import npc7 from '../../assets/npc/npc-7.svg';
import npc8 from '../../assets/npc/npc-8.svg';

import bomb1 from '../../assets/bombs/bomb-1.svg';
import bomb2 from '../../assets/bombs/bomb-2.svg';
import bomb3 from '../../assets/bombs/bomb-3.svg';
import bomb4 from '../../assets/bombs/bomb-4.svg';
import bomb5 from '../../assets/bombs/bomb-5.svg';
import bomb6 from '../../assets/bombs/bomb-6.svg';
import getRandomElements from '../../libs/helpers/getRandomElements.ts';
import shuffleArray from '../../libs/helpers/shuffleArray.ts';

type TGameButton = {
  el: string;
  action: 1 | -1;
};

const GamePage = () => {
  const [isClickEnabled, setIsClickEnabled] = useState(false);

  const [gameButtonsArray, setGameButtonsArray] = useState<TGameButton[]>([]);

  useEffect(() => {
    const bombs = [bomb1, bomb2, bomb3, bomb4, bomb5, bomb6];
    const npcs = [npc1, npc2, npc3, npc4, npc5, npc6, npc7, npc8];

    const randomNpcs = getRandomElements(npcs, 6);

    const result: TGameButton[] = shuffleArray([
      ...bombs.map((bomb) => ({
        el: bomb,
        action: -1,
      })),
      ...randomNpcs.map((npc) => ({ el: npc, action: 1 })),
    ]);

    setGameButtonsArray(result);
  }, []);

  return (
    <GameLayout>
      {gameButtonsArray.map(({ el }, index) => (
        <div className='w-full flex items-center justify-center relative' key={index}>
          <div className='absolute w-full top-0 left-0 z-[2]'>
            <button
              disabled={!isClickEnabled}
              onAnimationEnd={() => !isClickEnabled && setIsClickEnabled(true)}
              className='border-none bg-transparent game-process-button'
            >
              <img src={el} alt='npc' />
            </button>
          </div>

          <DotLottiePlayer src={stone} className='w-full' loop={false} />
        </div>
      ))}
    </GameLayout>
  );
};

export default GamePage;

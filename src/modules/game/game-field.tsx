import React, { useEffect, useState } from 'react';
import GameLayout from '../../modules/common/components/layout/game-layout.tsx';

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
import { TGameButton, TGameState } from './types/game.types.ts';
import GameItemComponent from './components/item.component.tsx';
import { useAppStore } from '../common/store';

type TGameItemProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  round: number;
  isActive: boolean;
  gameState: TGameState;
};

const GameField: React.FC<TGameItemProps> = ({ count, isActive, setCount, gameState, round }) => {
  const { user } = useAppStore((state) => ({ ...state, user: state.user!, statistics: state.statistics! }));

  const [isClickEnabled, setIsClickEnabled] = useState(false);

  const [gameButtonsArray, setGameButtonsArray] = useState<TGameButton[]>([]);

  useEffect(() => {
    setIsClickEnabled(false);

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
  }, [round]);

  return (
    <GameLayout myScore={{ user, score: count }} round={round}>
      {gameButtonsArray.map((item, index) => (
        <GameItemComponent
          setCount={setCount}
          item={item}
          isActive={isActive}
          setIsClickEnabled={setIsClickEnabled}
          isClickEnabled={isClickEnabled}
          gameState={gameState}
          key={index}
        />
      ))}
    </GameLayout>
  );
};

export default GameField;

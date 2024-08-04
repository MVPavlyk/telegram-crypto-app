import GameField from '../../modules/game/game-field.tsx';
import { useEffect, useState } from 'react';
import { TGameState } from '../../modules/game/types/game.types.ts';

const GamePage = () => {
  const [count, setCount] = useState(0);

  const [gameState, setGameState] = useState<TGameState>('preparing');

  const [round, setRound] = useState(0);

  const [isActive, setIsActive] = useState(false);

  function setNextRound(isTimeout: boolean) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
      setTimeout(
        () => {
          setRound((r) => r + 1);
          setIsActive(true);
          resolve(true);
        },
        isTimeout ? 4500 : 0
      );
    });
  }

  function changeGameState(state: TGameState) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setGameState(state);
        resolve(true);
      }, 3000);
    });
  }

  const game1VS1 = async () => {
    await changeGameState('ongoing');
    await setNextRound(false);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await changeGameState('finished');
  };

  useEffect(() => {
    game1VS1();
  }, []);

  useEffect(() => {
    console.log(gameState);
  }, [gameState]);

  return <GameField gameState={gameState} isActive={isActive} round={round} count={count} setCount={setCount} />;
};

export default GamePage;

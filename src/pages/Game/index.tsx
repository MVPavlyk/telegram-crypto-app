import GameField from '../../modules/game/game-field.tsx';
import { useEffect, useState } from 'react';
import { TGameState } from '../../modules/game/types/game.types.ts';

const GamePage = () => {
  const [count, setCount] = useState(0);

  const [gameState, setGameState] = useState<TGameState>('preparing');

  const [round, setRound] = useState(0);

  function setNextRound(isTimeout: boolean) {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          setRound((r) => r + 1);
          resolve(true);
        },
        isTimeout ? 3000 : 0
      );
    });
  }

  function changeGameState(state: TGameState) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setGameState(state);
        resolve(true);
      }, 0);
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

  return <GameField round={round} count={count} setCount={setCount} />;
};

export default GamePage;

import GameField from '../../modules/game/game-field.tsx';
import { useEffect, useState } from 'react';
import { TGameState } from '../../modules/game/types/game.types.ts';
import VersusScreen from '../../modules/game/components/versus-screen.component.tsx';
import OneVsOneFinalScreen from '../../modules/game/components/one-vs-one-final-screen.tsx';

const GamePage = () => {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(0);

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

  function changeGameState(state: TGameState, withTimeout?: boolean) {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          setGameState(state);
          resolve(true);
        },
        withTimeout ? 3000 : 1000
      );
    });
  }

  function changeCountDown(num: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setCountDown(num);
        resolve(true);
      }, 1000);
    });
  }

  const game1VS1 = async () => {
    await changeCountDown(3);
    await changeCountDown(2);
    await changeCountDown(1);
    await changeGameState('ongoing');
    await setNextRound(false);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await setNextRound(true);
    await changeGameState('finished', true);
  };

  useEffect(() => {
    game1VS1();
  }, []);

  return (
    <section className='max-h-screen h-screen w-screen max-w-[100vw] overflow-hidden'>
      <VersusScreen countDown={countDown} gameState={gameState} />
      <GameField gameState={gameState} isActive={isActive} round={round} count={count} setCount={setCount} />
      <OneVsOneFinalScreen gameState={gameState} isWin />
    </section>
  );
};

export default GamePage;

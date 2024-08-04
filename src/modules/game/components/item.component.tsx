import { DotLottiePlayer } from '@dotlottie/react-player';
import stone from '../../../assets/game-fields/stones/field.lottie';
import plusOne from '../../../assets/animations/+1.lottie';
import minusOne from '../../../assets/animations/-1.lottie';
import { TGameButton } from '../types/game.types.ts';
import React from 'react';

type TGameItemProps = {
  item: TGameButton;
  isClickEnabled: boolean;
  setIsClickEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const GameItemComponent: React.FC<TGameItemProps> = ({ item, setCount, isClickEnabled, setIsClickEnabled }) => {
  const { el, action } = item;

  const isPlus = action === 1;

  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div className='w-full flex items-center justify-center relative'>
      <div className='absolute w-full top-0 left-0 z-[2]'>
        {isClicked ? (
          <DotLottiePlayer speed={6} src={isPlus ? plusOne : minusOne} className='w-full' loop={false} />
        ) : (
          <button
            disabled={!isClickEnabled}
            onClick={() => {
              setIsClicked(true);
              setCount((c) => c + action);
            }}
            onAnimationEnd={() => !isClickEnabled && setIsClickEnabled(true)}
            className='border-none bg-transparent game-process-button'
          >
            <img draggable={false} src={el} alt='npc' />
          </button>
        )}
      </div>

      <DotLottiePlayer src={stone} className='w-full' loop={false} />
    </div>
  );
};

export default GameItemComponent;

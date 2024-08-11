import { DotLottiePlayer } from '@dotlottie/react-player';
import stone_field from '../../../assets/game-fields/stones/field.lottie';
import ice_field from '../../../assets/game-fields/ice/field.lottie';
import forest_field from '../../../assets/game-fields/forest/field.lottie';
import plusOne from '../../../assets/animations/+1.lottie';
import minusOne from '../../../assets/animations/-1.lottie';
import { TGameButton, TGameLocation, TGameState } from '../types/game.types.ts';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

type TGameItemProps = {
  item: TGameButton;
  isClickEnabled: boolean;
  setIsClickEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  gameState: TGameState;
  gameLocation: TGameLocation;
};

const GameItemComponent: React.FC<TGameItemProps> = ({
  item,
  isActive,
  setCount,
  isClickEnabled,
  setIsClickEnabled,
  gameState,
  gameLocation,
}) => {
  let field: string | undefined;

  switch (gameLocation) {
    case 'stone':
      field = stone_field;
      break;
    case 'forest':
      field = forest_field;
      break;
    default:
      field = ice_field;
      break;
  }

  const lottieRef = useRef<any>();

  const { el, action } = item;

  const isPlus = action === 1;

  const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    setIsClicked(false);
    lottieRef?.current?.play();
  }, [isActive]);

  if (!field) return null;

  return (
    <div className='w-full flex items-center justify-center relative'>
      <div className='absolute w-full top-0 left-0 z-[2]'>
        {isClicked ? (
          <DotLottiePlayer speed={6} src={isPlus ? plusOne : minusOne} className='w-full' loop={false} />
        ) : (
          <button
            disabled={!(isClickEnabled && isActive)}
            onClick={() => {
              setIsClicked(true);
              setCount((c) => c + action);
            }}
            onAnimationEnd={() => !isClickEnabled && setIsClickEnabled(true)}
            className={classNames(
              'border-none bg-transparent ',
              isActive ? 'game-process-button' : 'game-process-button-inactive',
              gameState === 'preparing' && 'hidden'
            )}
          >
            <img draggable={false} src={el} alt='npc' />
          </button>
        )}
      </div>

      <DotLottiePlayer
        ref={lottieRef}
        src={field}
        autoplay={true}
        className={classNames('w-full')}
        direction={isActive ? 1 : -1}
        loop={false}
      />
    </div>
  );
};

export default GameItemComponent;

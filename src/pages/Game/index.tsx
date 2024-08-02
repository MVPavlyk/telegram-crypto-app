import GameLayout from '../../modules/common/components/layout/game-layout.tsx';
import stone from '../../assets/stone.svg';

const GamePage = () => {
  return (
    <GameLayout>
      {Array(12)
        .fill(true)
        .map((_, index) => (
          <div className='w-full flex items-center justify-center' key={index}>
            <img className='w-full' src={stone} alt='stone' />
          </div>
        ))}
    </GameLayout>
  );
};

export default GamePage;

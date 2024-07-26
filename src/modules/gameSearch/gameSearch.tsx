import { Switch } from '../common/components/switch/switch.tsx';
import { useState } from 'react';
import { GameMode } from '../leaderboard/constants';
import { Link } from 'react-router-dom';
import { Routes } from '../common/constants';
import BackHome from '../../assets/icons/BackHome.tsx';
import classNames from 'classnames';

const GameSearch = () => {
  const sumCases: number[] = [10, 25, 50, 100, 250, 500, 1000, 1800, 2500, 3800, 7500, 10000];

  const [gameMode, setGameMode] = useState(GameMode.OneVsNine);

  const [currency, setCurrency] = useState<string>('USDT');

  const [sum, setSum] = useState<number | null>(null);

  const [isGameSearching, setIsGameSearching] = useState<boolean>(false);

  return (
    <section className='px-5 py-[30px]'>
      <div className='flex items-center gap-x-5'>
        <Link to={Routes.HOME}>
          <BackHome />
        </Link>
        <Switch
          selectedValue={gameMode}
          options={[
            { value: '1vs9', onClick: setGameMode },
            { value: '1vs1', onClick: setGameMode },
          ]}
        />
      </div>
      <div className='flex flex-col gap-y-4 mt-[30px]'>
        <h4 className='text-xl font-normal text-white'>Currency</h4>
        <Switch
          selectedValue={currency}
          options={[
            { value: 'USDT', onClick: setCurrency },
            { value: 'TON', onClick: setCurrency },
          ]}
        />
      </div>

      <div className='flex flex-col gap-y-4 mt-[30px]'>
        <h4 className='text-xl font-normal text-white'>Sum</h4>
        <div className='grid grid-cols-4 gap-2.5'>
          {sumCases.map((num) => (
            <button
              onClick={() => setSum(num)}
              className={classNames('default-btn text-2xl h-[50px] font-semibold', num !== sum && 'main-blue-btn-dark')}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      <div className='h-48 flex items-center justify-center text-center'>
        <p className='text-xl '></p>
      </div>
    </section>
  );
};

export default GameSearch;

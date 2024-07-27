import { Switch } from '../common/components/switch/switch.tsx';
import React, { useState } from 'react';
import { GameMode } from '../leaderboard/constants';
import { Link } from 'react-router-dom';
import { Routes } from '../common/constants';
import BackHome from '../../assets/icons/BackHome.tsx';
import classNames from 'classnames';
import { DotLottiePlayer } from '@dotlottie/react-player';
import searchAnimation from '../../assets/animations/Searching.lottie';
import numberWithCommas from '../../libs/helpers/numberWithCommas.ts';

const GameSearch = () => {
  const sumCases: number[] = [10, 25, 50, 100, 250, 500, 1000, 1800, 2500, 3800, 7500, 10000];

  const [gameMode, setGameMode] = useState(GameMode.OneVsNine);

  const [currency, setCurrency] = useState<string>('USDT');

  const [sum, setSum] = useState<number | null>(null);

  const [isGameSearching, setIsGameSearching] = useState<boolean>(false);

  const isReadyToSearch = !!(gameMode && currency && sum);

  const setSearchValue = (value: string | number, setter: React.Dispatch<React.SetStateAction<any>>) => {
    if (isGameSearching) return;

    setter(value);
  };

  const setGameModeValue = (value: string) => setSearchValue(value, setGameMode);
  const setCurrencyValue = (value: string) => setSearchValue(value, setCurrency);
  const setSumValue = (value: number) => setSearchValue(value, setSum);

  return (
    <section className='px-5 pt-[30px] h-screen no-scrollbar pb-[96px] relative overflow-y-scroll'>
      <div className='flex items-center gap-x-5'>
        <Link to={Routes.HOME}>
          <BackHome />
        </Link>
        <Switch
          selectedValue={gameMode}
          options={[
            { value: '1vs9', onClick: setGameModeValue },
            { value: '1vs1', onClick: setGameModeValue },
          ]}
        />
      </div>
      <div className='flex flex-col gap-y-4 mt-[30px]'>
        <h4 className='text-xl font-normal text-white'>Currency</h4>
        <Switch
          selectedValue={currency}
          options={[
            { value: 'USDT', onClick: setCurrencyValue },
            { value: 'TON', onClick: setCurrencyValue },
          ]}
        />
      </div>

      <div className='flex flex-col gap-y-4 mt-[30px]'>
        <h4 className='text-xl font-normal text-white'>Sum</h4>
        <div className='grid grid-cols-4 gap-2.5'>
          {sumCases.map((num) => (
            <button
              onClick={() => setSumValue(num)}
              className={classNames(
                'default-btn text-xl md:text-2xl h-[50px] font-semibold',
                num !== sum && 'main-blue-btn-dark'
              )}
            >
              {numberWithCommas(num)}
            </button>
          ))}
        </div>
      </div>
      <div className='h-48 flex items-center justify-center text-center overflow-hidden'>
        {isGameSearching ? (
          <DotLottiePlayer className='h-64' src={searchAnimation} loop autoplay />
        ) : (
          <p className='text-xl text-center text-[#4A4E64]'>
            Tap "Search game" if you have already set all the filters
          </p>
        )}
      </div>
      <button
        onClick={() => setIsGameSearching(!isGameSearching)}
        disabled={!isReadyToSearch}
        className={classNames(
          'text-2xl font-semibold w-[calc(100%-40px)] h-[66px] fixed bottom-[30px]',
          isReadyToSearch ? 'default-btn' : 'default-btn-disabled'
        )}
      >
        {isGameSearching ? 'Stop Searching' : 'Search Game'}
      </button>
    </section>
  );
};

export default GameSearch;

import { useState } from 'react';

import UsdtWhite from '../../assets/icons/UsdtWhite.tsx';
import TonWhite from '../../assets/icons/TonWhite.tsx';

import UsdtImage from '../../assets/usdt.svg';
import TonImage from '../../assets/ton.svg';

import { Avatar } from '../common/components/avatar/avatar.tsx';
import { Switch } from '../common/components/switch/switch.tsx';
import { useAppStore } from '../common/store';
import HistoryList from './components/history.list.component.tsx';
import { TonConnectButton } from '@tonconnect/ui-react';

export const Wallet = () => {
  const { user, statistics } = useAppStore((state) => ({ ...state, user: state.user!, statistics: state.statistics! }));

  const [currency, setCurrency] = useState<string>('usdt');

  if (!user || !statistics) return null;

  return (
    <>
      <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px] overflow-auto no-scrollbar'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-3'>
            <Avatar size={48} {...user.avatar} />
            <div>
              <h4 className='text-lg text-white font-semibold'>{user.telegramUsername}</h4>
              <h6 className='text-sm font-normal text-white'>#{statistics.rank} at Leaderboard</h6>
            </div>
          </div>
          <TonConnectButton />

          {/*<button className='default-btn gap-x-2.5 h-10 px-4 font-semibold'>
            Open <WalletOpenIcon />
          </button>*/}
        </div>
        <div className='my-8 w-full text-center text-main-orange text-[64px] font-bold'>{statistics.sumWon} $</div>
        <div className='flex items-center justify-between py-2.5 border-b border-[#292C3D]'>
          <div className='flex items-center gap-x-2.5 text-xl text-white'>
            <img src={UsdtImage} alt='usdt' />
            USDT
          </div>
          <div className='text-xl text-white font-bold'>352,9</div>
        </div>
        <div className='flex items-center justify-between py-2.5'>
          <div className='flex items-center gap-x-2.5 text-xl text-white mb-8'>
            <img src={TonImage} alt='usdt' />
            TON
          </div>
          <div className='text-xl text-white font-bold'>45,964</div>
        </div>
        <Switch
          selectedValue={currency}
          options={[
            { value: 'usdt', icon: <UsdtWhite />, onClick: setCurrency },
            { value: 'ton', icon: <TonWhite />, onClick: setCurrency },
          ]}
        />
        <HistoryList />
      </div>
    </>
  );
};
